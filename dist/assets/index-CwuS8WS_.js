(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const kl="180",tg=0,Zh=1,ng=2,zd=1,Gd=2,qi=3,Er=0,Cn=1,Ln=2,Zi=0,Gs=1,Vc=2,Qh=3,ef=4,ig=5,Wr=100,rg=101,sg=102,ag=103,og=104,lg=200,cg=201,ug=202,hg=203,Hc=204,Wc=205,fg=206,dg=207,pg=208,mg=209,gg=210,_g=211,vg=212,xg=213,Mg=214,Xc=0,Yc=1,qc=2,Ks=3,$c=4,jc=5,Kc=6,Jc=7,nh=0,yg=1,Sg=2,xr=0,Vd=1,Hd=2,Wd=3,ih=4,Xd=5,Yd=6,qd=7,$d=300,Js=301,Zs=302,Zc=303,Qc=304,zl=306,eu=1e3,Yr=1001,tu=1002,ei=1003,Eg=1004,So=1005,Ii=1006,$l=1007,qr=1008,zi=1009,jd=1010,Kd=1011,Ka=1012,rh=1013,as=1014,Li=1015,Bi=1016,sh=1017,ah=1018,Ja=1020,Jd=35902,Zd=35899,Qd=1021,ep=1022,Ei=1023,Za=1026,Qa=1027,oh=1028,lh=1029,tp=1030,ch=1031,uh=1033,ll=33776,cl=33777,ul=33778,hl=33779,nu=35840,iu=35841,ru=35842,su=35843,au=36196,ou=37492,lu=37496,cu=37808,uu=37809,hu=37810,fu=37811,du=37812,pu=37813,mu=37814,gu=37815,_u=37816,vu=37817,xu=37818,Mu=37819,yu=37820,Su=37821,Eu=36492,bu=36494,Tu=36495,Au=36283,wu=36284,Cu=36285,Ru=36286,bg=3200,Tg=3201,hh=0,Ag=1,dr="",In="srgb",Qs="srgb-linear",El="linear",yt="srgb",ps=7680,tf=519,wg=512,Cg=513,Rg=514,np=515,Pg=516,Dg=517,Ig=518,Lg=519,nf=35044,rf="300 es",Ni=2e3,bl=2001;class la{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sf=1234567;const Na=Math.PI/180,eo=180/Math.PI;function ca(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[r&255]+ln[r>>8&255]+ln[r>>16&255]+ln[r>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function ut(r,e,t){return Math.max(e,Math.min(t,r))}function fh(r,e){return(r%e+e)%e}function Ng(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Ug(r,e,t){return r!==e?(t-r)/(e-r):0}function Ua(r,e,t){return(1-t)*r+t*e}function Og(r,e,t,n){return Ua(r,e,1-Math.exp(-t*n))}function Fg(r,e=1){return e-Math.abs(fh(r,e*2)-e)}function Bg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function kg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function zg(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Gg(r,e){return r+Math.random()*(e-r)}function Vg(r){return r*(.5-Math.random())}function Hg(r){r!==void 0&&(sf=r);let e=sf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wg(r){return r*Na}function Xg(r){return r*eo}function Yg(r){return(r&r-1)===0&&r!==0}function qg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function $g(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function jg(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*h,l*d,o*c);break;case"YZY":r.set(l*d,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*d,o*u,o*c);break;case"XZX":r.set(o*u,l*_,l*f,o*c);break;case"YXY":r.set(l*f,o*u,l*_,o*c);break;case"ZYZ":r.set(l*_,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ns(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Mn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const go={DEG2RAD:Na,RAD2DEG:eo,generateUUID:ca,clamp:ut,euclideanModulo:fh,mapLinear:Ng,inverseLerp:Ug,lerp:Ua,damp:Og,pingpong:Fg,smoothstep:Bg,smootherstep:kg,randInt:zg,randFloat:Gg,randFloatSpread:Vg,seededRandom:Hg,degToRad:Wg,radToDeg:Xg,isPowerOfTwo:Yg,ceilPowerOfTwo:qg,floorPowerOfTwo:$g,setQuaternionFromProperEuler:jg,normalize:Mn,denormalize:Ns};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _o{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==d||c!==f||u!==_){let m=1-o;const p=l*d+c*f+u*_+h*g,b=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const C=Math.sqrt(T),R=Math.atan2(C,p*b);m=Math.sin(m*R)/C,o=Math.sin(o*R)/C}const M=o*b;if(l=l*m+d*M,c=c*m+f*M,u=u*m+_*M,h=h*m+g*M,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],f=s[a+2],_=s[a+3];return e[t]=o*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-o*f,e[t+2]=c*_+u*f+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),f=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(af.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(af.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jl.copy(this).projectOnVector(e),this.sub(jl)}reflect(e){return this.sub(jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jl=new z,af=new _o;class st{constructor(e,t,n,i,s,a,o,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],b=i[1],T=i[4],M=i[7],C=i[2],R=i[5],A=i[8];return s[0]=a*g+o*b+l*C,s[3]=a*m+o*T+l*R,s[6]=a*p+o*M+l*A,s[1]=c*g+u*b+h*C,s[4]=c*m+u*T+h*R,s[7]=c*p+u*M+h*A,s[2]=d*g+f*b+_*C,s[5]=d*m+f*T+_*R,s[8]=d*p+f*M+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,_=t*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Kl.makeScale(e,t)),this}rotate(e){return this.premultiply(Kl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kl=new st;function ip(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Tl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Kg(){const r=Tl("canvas");return r.style.display="block",r}const of={};function to(r){r in of||(of[r]=!0,console.warn(r))}function Jg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const lf=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cf=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zg(){const r={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===yt&&(i.r=Qi(i.r),i.g=Qi(i.g),i.b=Qi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(i.r=Vs(i.r),i.g=Vs(i.g),i.b=Vs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===dr?El:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return to("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return to("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Qs]:{primaries:e,whitePoint:n,transfer:El,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),r}const mt=Zg();function Qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ms;class Qg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ms===void 0&&(ms=Tl("canvas")),ms.width=e.width,ms.height=e.height;const i=ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ms}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Qi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qi(t[n]/255)*255):t[n]=Qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e_=0;class dh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=ca(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Jl(i[a].image)):s.push(Jl(i[a]))}else s=Jl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Jl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Qg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t_=0;const Zl=new z;class mn extends la{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=Yr,i=Yr,s=Ii,a=qr,o=Ei,l=zi,c=mn.DEFAULT_ANISOTROPY,u=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=ca(),this.name="",this.source=new dh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zl).x}get height(){return this.source.getSize(Zl).y}get depth(){return this.source.getSize(Zl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eu:e.x=e.x-Math.floor(e.x);break;case Yr:e.x=e.x<0?0:1;break;case tu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eu:e.y=e.y-Math.floor(e.y);break;case Yr:e.y=e.y<0?0:1;break;case tu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=$d;mn.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,i=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,M=(f+1)/2,C=(p+1)/2,R=(u+d)/4,A=(h+g)/4,D=(_+m)/4;return T>M&&T>C?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=R/n,s=A/n):M>C?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=R/i,s=D/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=A/s,i=D/s),this.set(n,i,s,t),this}let b=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(h-g)/b,this.z=(d-u)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class n_ extends la{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new mn(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ii,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new dh(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends n_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class rp extends mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ei,this.minFilter=ei,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class i_ extends mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ei,this.minFilter=ei,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vi):vi.fromBufferAttribute(s,a),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(e.matrixWorld),this.union(Eo)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),bo.subVectors(this.max,pa),gs.subVectors(e.a,pa),_s.subVectors(e.b,pa),vs.subVectors(e.c,pa),rr.subVectors(_s,gs),sr.subVectors(vs,_s),Dr.subVectors(gs,vs);let t=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Dr.z,Dr.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Dr.z,0,-Dr.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Dr.y,Dr.x,0];return!Ql(t,gs,_s,vs,bo)||(t=[1,0,0,0,1,0,0,0,1],!Ql(t,gs,_s,vs,bo))?!1:(To.crossVectors(rr,sr),t=[To.x,To.y,To.z],Ql(t,gs,_s,vs,bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vi=[new z,new z,new z,new z,new z,new z,new z,new z],vi=new z,Eo=new hs,gs=new z,_s=new z,vs=new z,rr=new z,sr=new z,Dr=new z,pa=new z,bo=new z,To=new z,Ir=new z;function Ql(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ir.fromArray(r,s);const o=i.x*Math.abs(Ir.x)+i.y*Math.abs(Ir.y)+i.z*Math.abs(Ir.z),l=e.dot(Ir),c=t.dot(Ir),u=n.dot(Ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const r_=new hs,ma=new z,ec=new z;class vo{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):r_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const t=ma.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ma,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(ec)),this.expandByPoint(ma.copy(e.center).sub(ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hi=new z,tc=new z,Ao=new z,ar=new z,nc=new z,wo=new z,ic=new z;class s_{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){tc.copy(e).add(t).multiplyScalar(.5),Ao.copy(t).sub(e).normalize(),ar.copy(this.origin).sub(tc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ao),o=ar.dot(this.direction),l=-ar.dot(Ao),c=ar.lengthSq(),u=Math.abs(1-a*a);let h,d,f,_;if(u>0)if(h=a*l-o,d=a*o-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(tc).addScaledVector(Ao,d),f}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const n=Hi.dot(this.direction),i=Hi.dot(Hi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,i,s){nc.subVectors(t,e),wo.subVectors(n,e),ic.crossVectors(nc,wo);let a=this.direction.dot(ic),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ar.subVectors(this.origin,e);const l=o*this.direction.dot(wo.crossVectors(ar,wo));if(l<0)return null;const c=o*this.direction.dot(nc.cross(ar));if(c<0||l+c>a)return null;const u=-o*ar.dot(ic);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,t,n,i,s,a,o,l,c,u,h,d,f,_,g,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,d,f,_,g,m)}set(e,t,n,i,s,a,o,l,c,u,h,d,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d+g*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d-g*o,t[4]=-a*h,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-d*h,t[8]=_*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=a*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a_,e,o_)}lookAt(e,t,n){const i=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),or.crossVectors(n,Hn),or.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),or.crossVectors(n,Hn)),or.normalize(),Co.crossVectors(Hn,or),i[0]=or.x,i[4]=Co.x,i[8]=Hn.x,i[1]=or.y,i[5]=Co.y,i[9]=Hn.y,i[2]=or.z,i[6]=Co.z,i[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],b=n[3],T=n[7],M=n[11],C=n[15],R=i[0],A=i[4],D=i[8],E=i[12],S=i[1],N=i[5],O=i[9],Y=i[13],$=i[2],X=i[6],J=i[10],Z=i[14],W=i[3],he=i[7],L=i[11],Me=i[15];return s[0]=a*R+o*S+l*$+c*W,s[4]=a*A+o*N+l*X+c*he,s[8]=a*D+o*O+l*J+c*L,s[12]=a*E+o*Y+l*Z+c*Me,s[1]=u*R+h*S+d*$+f*W,s[5]=u*A+h*N+d*X+f*he,s[9]=u*D+h*O+d*J+f*L,s[13]=u*E+h*Y+d*Z+f*Me,s[2]=_*R+g*S+m*$+p*W,s[6]=_*A+g*N+m*X+p*he,s[10]=_*D+g*O+m*J+p*L,s[14]=_*E+g*Y+m*Z+p*Me,s[3]=b*R+T*S+M*$+C*W,s[7]=b*A+T*N+M*X+C*he,s[11]=b*D+T*O+M*J+C*L,s[15]=b*E+T*Y+M*Z+C*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*f-n*l*f)+g*(+t*l*f-t*c*d+s*a*d-i*a*f+i*c*u-s*l*u)+m*(+t*c*h-t*o*f-s*a*h+n*a*f+s*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],b=h*m*c-g*d*c+g*l*f-o*m*f-h*l*p+o*d*p,T=_*d*c-u*m*c-_*l*f+a*m*f+u*l*p-a*d*p,M=u*g*c-_*h*c+_*o*f-a*g*f-u*o*p+a*h*p,C=_*h*l-u*g*l-_*o*d+a*g*d+u*o*m-a*h*m,R=t*b+n*T+i*M+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=b*A,e[1]=(g*d*s-h*m*s-g*i*f+n*m*f+h*i*p-n*d*p)*A,e[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*p+n*l*p)*A,e[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*f-n*l*f)*A,e[4]=T*A,e[5]=(u*m*s-_*d*s+_*i*f-t*m*f-u*i*p+t*d*p)*A,e[6]=(_*l*s-a*m*s-_*i*c+t*m*c+a*i*p-t*l*p)*A,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*f+t*l*f)*A,e[8]=M*A,e[9]=(_*h*s-u*g*s-_*n*f+t*g*f+u*n*p-t*h*p)*A,e[10]=(a*g*s-_*o*s+_*n*c-t*g*c-a*n*p+t*o*p)*A,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*f-t*o*f)*A,e[12]=C*A,e[13]=(u*g*i-_*h*i+_*n*d-t*g*d-u*n*m+t*h*m)*A,e[14]=(_*o*i-a*g*i-_*n*l+t*g*l+a*n*m-t*o*m)*A,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,_=s*h,g=a*u,m=a*h,p=o*h,b=l*c,T=l*u,M=l*h,C=n.x,R=n.y,A=n.z;return i[0]=(1-(g+p))*C,i[1]=(f+M)*C,i[2]=(_-T)*C,i[3]=0,i[4]=(f-M)*R,i[5]=(1-(d+p))*R,i[6]=(m+b)*R,i[7]=0,i[8]=(_+T)*A,i[9]=(m-b)*A,i[10]=(1-(d+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=xs.set(i[0],i[1],i[2]).length();const a=xs.set(i[4],i[5],i[6]).length(),o=xs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],xi.copy(this);const c=1/s,u=1/a,h=1/o;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=u,xi.elements[5]*=u,xi.elements[6]*=u,xi.elements[8]*=h,xi.elements[9]*=h,xi.elements[10]*=h,t.setFromRotationMatrix(xi),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Ni,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===Ni)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===bl)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ni,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===Ni)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===bl)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xs=new z,xi=new Ct,a_=new z(0,0,0),o_=new z(1,1,1),or=new z,Co=new z,Hn=new z,uf=new Ct,hf=new _o;class Ti{constructor(e=0,t=0,n=0,i=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hf.setFromEuler(this),this.setFromQuaternion(hf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class sp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let l_=0;const ff=new z,Ms=new _o,Wi=new Ct,Ro=new z,ga=new z,c_=new z,u_=new _o,df=new z(1,0,0),pf=new z(0,1,0),mf=new z(0,0,1),gf={type:"added"},h_={type:"removed"},ys={type:"childadded",child:null},rc={type:"childremoved",child:null};class rn extends la{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new z,t=new Ti,n=new _o,i=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ct},normalMatrix:{value:new st}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(df,e)}rotateY(e){return this.rotateOnAxis(pf,e)}rotateZ(e){return this.rotateOnAxis(mf,e)}translateOnAxis(e,t){return ff.copy(e).applyQuaternion(this.quaternion),this.position.add(ff.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(df,e)}translateY(e){return this.translateOnAxis(pf,e)}translateZ(e){return this.translateOnAxis(mf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ro.copy(e):Ro.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(ga,Ro,this.up):Wi.lookAt(Ro,ga,this.up),this.quaternion.setFromRotationMatrix(Wi),i&&(Wi.extractRotation(i.matrixWorld),Ms.setFromRotationMatrix(Wi),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gf),ys.child=e,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h_),rc.child=e,this.dispatchEvent(rc),rc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gf),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,c_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,u_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}rn.DEFAULT_UP=new z(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new z,Xi=new z,sc=new z,Yi=new z,Ss=new z,Es=new z,_f=new z,ac=new z,oc=new z,lc=new z,cc=new St,uc=new St,hc=new St;class Si{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Mi.subVectors(e,t),i.cross(Mi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Mi.subVectors(i,t),Xi.subVectors(n,t),sc.subVectors(e,t);const a=Mi.dot(Mi),o=Mi.dot(Xi),l=Mi.dot(sc),c=Xi.dot(Xi),u=Xi.dot(sc),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yi.x),l.addScaledVector(a,Yi.y),l.addScaledVector(o,Yi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return cc.setScalar(0),uc.setScalar(0),hc.setScalar(0),cc.fromBufferAttribute(e,t),uc.fromBufferAttribute(e,n),hc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(cc,s.x),a.addScaledVector(uc,s.y),a.addScaledVector(hc,s.z),a}static isFrontFacing(e,t,n,i){return Mi.subVectors(n,t),Xi.subVectors(e,t),Mi.cross(Xi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),Mi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Si.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ss.subVectors(i,n),Es.subVectors(s,n),ac.subVectors(e,n);const l=Ss.dot(ac),c=Es.dot(ac);if(l<=0&&c<=0)return t.copy(n);oc.subVectors(e,i);const u=Ss.dot(oc),h=Es.dot(oc);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ss,a);lc.subVectors(e,s);const f=Ss.dot(lc),_=Es.dot(lc);if(_>=0&&f<=_)return t.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Es,o);const m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return _f.subVectors(s,i),o=(h-u)/(h-u+(f-_)),t.copy(i).addScaledVector(_f,o);const p=1/(m+g+d);return a=g*p,o=d*p,t.copy(n).addScaledVector(Ss,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},Po={h:0,s:0,l:0};function fc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=mt.workingColorSpace){if(e=fh(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=fc(a,s,e+1/3),this.g=fc(a,s,e),this.b=fc(a,s,e-1/3)}return mt.colorSpaceToWorking(this,i),this}setStyle(e,t=In){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=In){const n=ap[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return mt.workingToColorSpace(cn.copy(this),e),Math.round(ut(cn.r*255,0,255))*65536+Math.round(ut(cn.g*255,0,255))*256+Math.round(ut(cn.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(cn.copy(this),t);const n=cn.r,i=cn.g,s=cn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=In){mt.workingToColorSpace(cn.copy(this),e);const t=cn.r,n=cn.g,i=cn.b;return e!==In?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+t,lr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(lr),e.getHSL(Po);const n=Ua(lr.h,Po.h,t),i=Ua(lr.s,Po.s,t),s=Ua(lr.l,Po.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new tt;tt.NAMES=ap;let f_=0;class ua extends la{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=ca(),this.name="",this.type="Material",this.blending=Gs,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hc,this.blendDst=Wc,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==Er&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hc&&(n.blendSrc=this.blendSrc),this.blendDst!==Wc&&(n.blendDst=this.blendDst),this.blendEquation!==Wr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xo extends ua{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new z,Do=new We;let d_=0;class bi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:d_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nf,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Do.fromBufferAttribute(this,t),Do.applyMatrix3(e),this.setXY(t,Do.x,Do.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ns(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array),i=Mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array),i=Mn(i,this.array),s=Mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nf&&(e.usage=this.usage),e}}class op extends bi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class lp extends bi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Nt extends bi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let p_=0;const li=new Ct,dc=new rn,bs=new z,Wn=new hs,_a=new hs,en=new z;class ri extends la{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ip(e)?lp:op)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,n){return li.makeTranslation(e,t,n),this.applyMatrix4(li),this}scale(e,t,n){return li.makeScale(e,t,n),this.applyMatrix4(li),this}lookAt(e){return dc.lookAt(e),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Nt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Wn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];_a.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(Wn.min,_a.min),Wn.expandByPoint(en),en.addVectors(Wn.max,_a.max),Wn.expandByPoint(en)):(Wn.expandByPoint(_a.min),Wn.expandByPoint(_a.max))}Wn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)en.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(en));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)en.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(e,c),en.add(bs)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new z,l[D]=new z;const c=new z,u=new z,h=new z,d=new We,f=new We,_=new We,g=new z,m=new z;function p(D,E,S){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,S),d.fromBufferAttribute(s,D),f.fromBufferAttribute(s,E),_.fromBufferAttribute(s,S),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const N=1/(f.x*_.y-_.x*f.y);isFinite(N)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(N),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(N),o[D].add(g),o[E].add(g),o[S].add(g),l[D].add(m),l[E].add(m),l[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,E=b.length;D<E;++D){const S=b[D],N=S.start,O=S.count;for(let Y=N,$=N+O;Y<$;Y+=3)p(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const T=new z,M=new z,C=new z,R=new z;function A(D){C.fromBufferAttribute(i,D),R.copy(C);const E=o[D];T.copy(E),T.sub(C.multiplyScalar(C.dot(E))).normalize(),M.crossVectors(R,E);const N=M.dot(l[D])<0?-1:1;a.setXYZW(D,T.x,T.y,T.z,N)}for(let D=0,E=b.length;D<E;++D){const S=b[D],N=S.start,O=S.count;for(let Y=N,$=N+O;Y<$;Y+=3)A(e.getX(Y+0)),A(e.getX(Y+1)),A(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new z,s=new z,a=new z,o=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let p=0;p<u;p++)d[_++]=c[f++]}return new bi(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ri,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vf=new Ct,Lr=new s_,Io=new vo,xf=new z,Lo=new z,No=new z,Uo=new z,pc=new z,Oo=new z,Mf=new z,Fo=new z;class It extends rn{constructor(e=new ri,t=new xo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Oo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(pc.fromBufferAttribute(h,e),a?Oo.addScaledVector(pc,u):Oo.addScaledVector(pc.sub(t),u))}t.add(Oo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(Io.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Io,xf)===null||Lr.origin.distanceToSquared(xf)>(e.far-e.near)**2))&&(vf.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(vf),!(n.boundingBox!==null&&Lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Lr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],b=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=b,C=T;M<C;M+=3){const R=o.getX(M),A=o.getX(M+1),D=o.getX(M+2);i=Bo(this,p,e,n,c,u,h,R,A,D),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const b=o.getX(m),T=o.getX(m+1),M=o.getX(m+2);i=Bo(this,a,e,n,c,u,h,b,T,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],b=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=b,C=T;M<C;M+=3){const R=M,A=M+1,D=M+2;i=Bo(this,p,e,n,c,u,h,R,A,D),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const b=m,T=m+1,M=m+2;i=Bo(this,a,e,n,c,u,h,b,T,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function m_(r,e,t,n,i,s,a,o){let l;if(e.side===Cn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Er,o),l===null)return null;Fo.copy(o),Fo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Fo);return c<t.near||c>t.far?null:{distance:c,point:Fo.clone(),object:r}}function Bo(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Lo),r.getVertexPosition(l,No),r.getVertexPosition(c,Uo);const u=m_(r,e,t,n,Lo,No,Uo,Mf);if(u){const h=new z;Si.getBarycoord(Mf,Lo,No,Uo,h),i&&(u.uv=Si.getInterpolatedAttribute(i,o,l,c,h,new We)),s&&(u.uv1=Si.getInterpolatedAttribute(s,o,l,c,h,new We)),a&&(u.normal=Si.getInterpolatedAttribute(a,o,l,c,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new z,materialIndex:0};Si.getNormal(Lo,No,Uo,d.normal),u.face=d,u.barycoord=h}return u}class Cr extends ri{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(h,2));function _(g,m,p,b,T,M,C,R,A,D,E){const S=M/A,N=C/D,O=M/2,Y=C/2,$=R/2,X=A+1,J=D+1;let Z=0,W=0;const he=new z;for(let L=0;L<J;L++){const Me=L*N-Y;for(let qe=0;qe<X;qe++){const nt=qe*S-O;he[g]=nt*b,he[m]=Me*T,he[p]=$,c.push(he.x,he.y,he.z),he[g]=0,he[m]=0,he[p]=R>0?1:-1,u.push(he.x,he.y,he.z),h.push(qe/A),h.push(1-L/D),Z+=1}}for(let L=0;L<D;L++)for(let Me=0;Me<A;Me++){const qe=d+Me+X*L,nt=d+Me+X*(L+1),Be=d+(Me+1)+X*(L+1),$e=d+(Me+1)+X*L;l.push(qe,nt,$e),l.push(nt,Be,$e),W+=6}o.addGroup(f,W,E),f+=W,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ea(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Sn(r){const e={};for(let t=0;t<r.length;t++){const n=ea(r[t]);for(const i in n)e[i]=n[i]}return e}function g_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function cp(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const no={clone:ea,merge:Sn};var __=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends ua{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=__,this.fragmentShader=v_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=g_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class up extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cr=new z,yf=new We,Sf=new We;class $n extends up{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,t){return this.getViewBounds(e,yf,Sf),t.subVectors(Sf,yf)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Na*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ts=-90,As=1;class x_ extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $n(Ts,As,e,t);i.layers=this.layers,this.add(i);const s=new $n(Ts,As,e,t);s.layers=this.layers,this.add(s);const a=new $n(Ts,As,e,t);a.layers=this.layers,this.add(a);const o=new $n(Ts,As,e,t);o.layers=this.layers,this.add(o);const l=new $n(Ts,As,e,t);l.layers=this.layers,this.add(l);const c=new $n(Ts,As,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ni)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class hp extends mn{constructor(e=[],t=Js,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class M_ extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new hp(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Cr(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:ea(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:Zi});s.uniforms.tEquirect.value=t;const a=new It(i,s),o=t.minFilter;return t.minFilter===qr&&(t.minFilter=Ii),new x_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class Ui extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const y_={type:"move"};class mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(y_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ui;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ph{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new tt(e),this.density=t}clone(){return new ph(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class fp extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class S_ extends mn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=ei,u=ei,h,d){super(null,a,o,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ef extends bi{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ws=new Ct,bf=new Ct,ko=[],Tf=new hs,E_=new Ct,va=new It,xa=new vo;class b_ extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ef(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,E_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),Tf.copy(e.boundingBox).applyMatrix4(ws),this.boundingBox.union(Tf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),xa.copy(e.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(xa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(va.geometry=this.geometry,va.material=this.material,va.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(n),e.ray.intersectsSphere(xa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ws),bf.multiplyMatrices(n,ws),va.matrixWorld=bf,va.raycast(e,ko);for(let a=0,o=ko.length;a<o;a++){const l=ko[a];l.instanceId=s,l.object=this,t.push(l)}ko.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ef(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new S_(new Float32Array(i*this.count),i,this.count,oh,Li));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const gc=new z,T_=new z,A_=new st;class kr{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=gc.subVectors(n,t).cross(T_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(gc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||A_.getNormalMatrix(e),i=this.coplanarPoint(gc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new vo,w_=new We(.5,.5),zo=new z;class mh{constructor(e=new kr,t=new kr,n=new kr,i=new kr,s=new kr,a=new kr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ni,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],_=s[8],g=s[9],m=s[10],p=s[11],b=s[12],T=s[13],M=s[14],C=s[15];if(i[0].setComponents(c-a,f-u,p-_,C-b).normalize(),i[1].setComponents(c+a,f+u,p+_,C+b).normalize(),i[2].setComponents(c+o,f+h,p+g,C+T).normalize(),i[3].setComponents(c-o,f-h,p-g,C-T).normalize(),n)i[4].setComponents(l,d,m,M).normalize(),i[5].setComponents(c-l,f-d,p-m,C-M).normalize();else if(i[4].setComponents(c-l,f-d,p-m,C-M).normalize(),t===Ni)i[5].setComponents(c+l,f+d,p+m,C+M).normalize();else if(t===bl)i[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){Nr.center.set(0,0,0);const t=w_.distanceTo(e.center);return Nr.radius=.7071067811865476+t,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(zo.x=i.normal.x>0?e.max.x:e.min.x,zo.y=i.normal.y>0?e.max.y:e.min.y,zo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class C_ extends mn{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dp extends mn{constructor(e,t,n=as,i,s,a,o=ei,l=ei,c,u=Za,h=1){if(u!==Za&&u!==Qa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pp extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class io extends ri{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new z,u=new We;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Nt(a,3)),this.setAttribute("normal",new Nt(o,3)),this.setAttribute("uv",new Nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ro extends ri{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],f=[];let _=0;const g=[],m=n/2;let p=0;b(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Nt(h,3)),this.setAttribute("normal",new Nt(d,3)),this.setAttribute("uv",new Nt(f,2));function b(){const M=new z,C=new z;let R=0;const A=(t-e)/n;for(let D=0;D<=s;D++){const E=[],S=D/s,N=S*(t-e)+e;for(let O=0;O<=i;O++){const Y=O/i,$=Y*l+o,X=Math.sin($),J=Math.cos($);C.x=N*X,C.y=-S*n+m,C.z=N*J,h.push(C.x,C.y,C.z),M.set(X,A,J).normalize(),d.push(M.x,M.y,M.z),f.push(Y,1-S),E.push(_++)}g.push(E)}for(let D=0;D<i;D++)for(let E=0;E<s;E++){const S=g[E][D],N=g[E+1][D],O=g[E+1][D+1],Y=g[E][D+1];(e>0||E!==0)&&(u.push(S,N,Y),R+=3),(t>0||E!==s-1)&&(u.push(N,O,Y),R+=3)}c.addGroup(p,R,0),p+=R}function T(M){const C=_,R=new We,A=new z;let D=0;const E=M===!0?e:t,S=M===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),_++;const N=_;for(let O=0;O<=i;O++){const $=O/i*l+o,X=Math.cos($),J=Math.sin($);A.x=E*J,A.y=m*S,A.z=E*X,h.push(A.x,A.y,A.z),d.push(0,S,0),R.x=X*.5+.5,R.y=J*.5*S+.5,f.push(R.x,R.y),_++}for(let O=0;O<i;O++){const Y=C+O,$=N+O;M===!0?u.push($,$+1,Y):u.push($+1,$,Y),D+=3}c.addGroup(p,D,M===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jr extends ro{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Jr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ir{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(a-u)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new We:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new z,i=[],s=[],a=[],o=new z,l=new Ct;for(let f=0;f<=e;f++){const _=f/e;i[f]=this.getTangentAt(_,new z)}s[0]=new z,a[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(ut(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(ut(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class mp extends ir{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new We){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class R_ extends mp{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function gh(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,i(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Go=new z,_c=new gh,vc=new gh,xc=new gh;class gp extends ir{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new z){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(Go.subVectors(i[0],i[1]).add(i[0]),c=Go);const h=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(Go.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Go),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),_c.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,g,m),vc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,g,m),xc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(_c.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),vc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),xc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(_c.calc(l),vc.calc(l),xc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new z().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Af(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function P_(r,e){const t=1-r;return t*t*e}function D_(r,e){return 2*(1-r)*r*e}function I_(r,e){return r*r*e}function Oa(r,e,t,n){return P_(r,e)+D_(r,t)+I_(r,n)}function L_(r,e){const t=1-r;return t*t*t*e}function N_(r,e){const t=1-r;return 3*t*t*r*e}function U_(r,e){return 3*(1-r)*r*r*e}function O_(r,e){return r*r*r*e}function Fa(r,e,t,n,i){return L_(r,e)+N_(r,t)+U_(r,n)+O_(r,i)}class F_ extends ir{constructor(e=new We,t=new We,n=new We,i=new We){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new We){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Fa(e,i.x,s.x,a.x,o.x),Fa(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class B_ extends ir{constructor(e=new z,t=new z,n=new z,i=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new z){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Fa(e,i.x,s.x,a.x,o.x),Fa(e,i.y,s.y,a.y,o.y),Fa(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class k_ extends ir{constructor(e=new We,t=new We){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new We){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new We){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class z_ extends ir{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class G_ extends ir{constructor(e=new We,t=new We,n=new We){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new We){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Oa(e,i.x,s.x,a.x),Oa(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _p extends ir{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Oa(e,i.x,s.x,a.x),Oa(e,i.y,s.y,a.y),Oa(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class V_ extends ir{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new We){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(Af(o,l.x,c.x,u.x,h.x),Af(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new We().fromArray(i))}return this}}var H_=Object.freeze({__proto__:null,ArcCurve:R_,CatmullRomCurve3:gp,CubicBezierCurve:F_,CubicBezierCurve3:B_,EllipseCurve:mp,LineCurve:k_,LineCurve3:z_,QuadraticBezierCurve:G_,QuadraticBezierCurve3:_p,SplineCurve:V_});class Mo extends ri{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const b=p*d-a;for(let T=0;T<c;T++){const M=T*h-s;_.push(M,-b,0),g.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const T=b+c*p,M=b+c*(p+1),C=b+1+c*(p+1),R=b+1+c*p;f.push(T,M,R),f.push(M,C,R)}this.setIndex(f),this.setAttribute("position",new Nt(_,3)),this.setAttribute("normal",new Nt(g,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gl extends ri{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new z,d=new z,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const b=[],T=p/n;let M=0;p===0&&a===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){const R=C/t;h.x=-e*Math.cos(i+R*s)*Math.sin(a+T*o),h.y=e*Math.cos(a+T*o),h.z=e*Math.sin(i+R*s)*Math.sin(a+T*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(R+M,1-T),b.push(c++)}u.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const T=u[p][b+1],M=u[p][b],C=u[p+1][b],R=u[p+1][b+1];(p!==0||a>0)&&f.push(T,M,R),(p!==n-1||l<Math.PI)&&f.push(M,C,R)}this.setIndex(f),this.setAttribute("position",new Nt(_,3)),this.setAttribute("normal",new Nt(g,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _h extends ri{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new z,h=new z,d=new z;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const g=_/i*s,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(g),h.y=(e+t*Math.cos(m))*Math.sin(g),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const g=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,b=(i+1)*f+_;a.push(g,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new Nt(o,3)),this.setAttribute("normal",new Nt(l,3)),this.setAttribute("uv",new Nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _h(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class vh extends ri{constructor(e=new _p(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new z,l=new z,c=new We;let u=new z;const h=[],d=[],f=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new Nt(h,3)),this.setAttribute("normal",new Nt(d,3)),this.setAttribute("uv",new Nt(f,2));function g(){for(let T=0;T<t;T++)m(T);m(s===!1?t:0),b(),p()}function m(T){u=e.getPointAt(T/t,u);const M=a.normals[T],C=a.binormals[T];for(let R=0;R<=i;R++){const A=R/i*Math.PI*2,D=Math.sin(A),E=-Math.cos(A);l.x=E*M.x+D*C.x,l.y=E*M.y+D*C.y,l.z=E*M.z+D*C.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let T=1;T<=t;T++)for(let M=1;M<=i;M++){const C=(i+1)*(T-1)+(M-1),R=(i+1)*T+(M-1),A=(i+1)*T+M,D=(i+1)*(T-1)+M;_.push(C,R,D),_.push(R,A,D)}}function b(){for(let T=0;T<=t;T++)for(let M=0;M<=i;M++)c.x=T/t,c.y=M/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new vh(new H_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class W_ extends wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class os extends ua{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hh,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wf extends os{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class X_ extends ua{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hh,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Y_ extends ua{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class q_ extends ua{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xh extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class $_ extends xh{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Mc=new Ct,Cf=new z,Rf=new z;class vp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mh,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Cf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cf),Rf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rf),t.updateMatrixWorld(),Mc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Pf=new Ct,Ma=new z,yc=new z;class j_ extends vp{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ma.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ma),yc.copy(n.position),yc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(yc),n.updateMatrixWorld(),i.makeTranslation(-Ma.x,-Ma.y,-Ma.z),Pf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pf,n.coordinateSystem,n.reversedDepth)}}class xp extends xh{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new j_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Mh extends up{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class K_ extends vp{constructor(){super(new Mh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class J_ extends xh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new K_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Z_ extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Q_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Df(r,e,t,n){const i=e0(n);switch(t){case Qd:return r*e;case oh:return r*e/i.components*i.byteLength;case lh:return r*e/i.components*i.byteLength;case tp:return r*e*2/i.components*i.byteLength;case ch:return r*e*2/i.components*i.byteLength;case ep:return r*e*3/i.components*i.byteLength;case Ei:return r*e*4/i.components*i.byteLength;case uh:return r*e*4/i.components*i.byteLength;case ll:case cl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ul:case hl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case iu:case su:return Math.max(r,16)*Math.max(e,8)/4;case nu:case ru:return Math.max(r,8)*Math.max(e,8)/2;case au:case ou:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case lu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case uu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case hu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case fu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case du:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case pu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case mu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case gu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case _u:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case vu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case xu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Mu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case yu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Su:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Eu:case bu:case Tu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Au:case wu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Cu:case Ru:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function e0(r){switch(r){case zi:case jd:return{byteLength:1,components:1};case Ka:case Kd:case Bi:return{byteLength:2,components:1};case sh:case ah:return{byteLength:2,components:4};case as:case rh:case Li:return{byteLength:4,components:1};case Jd:case Zd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kl);function Mp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function t0(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const g=h[f];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var n0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i0=`#ifdef USE_ALPHAHASH
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
#endif`,r0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,o0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l0=`#ifdef USE_AOMAP
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
#endif`,c0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u0=`#ifdef USE_BATCHING
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
#endif`,h0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,m0=`#ifdef USE_IRIDESCENCE
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
#endif`,g0=`#ifdef USE_BUMPMAP
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
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,T0=`#define PI 3.141592653589793
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
} // validated`,A0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,w0=`vec3 transformedNormal = objectNormal;
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
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I0="gl_FragColor = linearToOutputTexel( gl_FragColor );",L0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N0=`#ifdef USE_ENVMAP
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
#endif`,U0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,O0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H0=`#ifdef USE_GRADIENTMAP
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
}`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q0=`uniform bool receiveShadow;
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
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,j0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q0=`PhysicalMaterial material;
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
#endif`,ev=`struct PhysicalMaterial {
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
}`,tv=`
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
#endif`,nv=`#if defined( RE_IndirectDiffuse )
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
#endif`,iv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,av=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ov=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hv=`#if defined( USE_POINTS_UV )
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
#endif`,fv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_v=`#ifdef USE_MORPHTARGETS
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
#endif`,vv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ev=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bv=`#ifdef USE_NORMALMAP
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
#endif`,Tv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Av=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ov=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Bv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zv=`float getShadowMask() {
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
}`,Gv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vv=`#ifdef USE_SKINNING
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
#endif`,Hv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wv=`#ifdef USE_SKINNING
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
#endif`,Xv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$v=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jv=`#ifdef USE_TRANSMISSION
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
#endif`,Kv=`#ifdef USE_TRANSMISSION
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
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nx=`uniform sampler2D t2D;
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`#include <common>
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
}`,lx=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cx=`#define DISTANCE
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
}`,ux=`#define DISTANCE
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`uniform float scale;
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
}`,px=`uniform vec3 diffuse;
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
}`,mx=`#include <common>
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
}`,gx=`uniform vec3 diffuse;
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
}`,_x=`#define LAMBERT
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
}`,vx=`#define LAMBERT
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
}`,xx=`#define MATCAP
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
}`,Mx=`#define MATCAP
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
}`,yx=`#define NORMAL
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
}`,Sx=`#define NORMAL
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
}`,Ex=`#define PHONG
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
}`,bx=`#define PHONG
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
}`,Tx=`#define STANDARD
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
}`,Ax=`#define STANDARD
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
}`,wx=`#define TOON
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
}`,Cx=`#define TOON
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
}`,Rx=`uniform float size;
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
}`,Px=`uniform vec3 diffuse;
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
}`,Dx=`#include <common>
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
}`,Ix=`uniform vec3 color;
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
}`,Lx=`uniform float rotation;
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
}`,Nx=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:n0,alphahash_pars_fragment:i0,alphamap_fragment:r0,alphamap_pars_fragment:s0,alphatest_fragment:a0,alphatest_pars_fragment:o0,aomap_fragment:l0,aomap_pars_fragment:c0,batching_pars_vertex:u0,batching_vertex:h0,begin_vertex:f0,beginnormal_vertex:d0,bsdfs:p0,iridescence_fragment:m0,bumpmap_pars_fragment:g0,clipping_planes_fragment:_0,clipping_planes_pars_fragment:v0,clipping_planes_pars_vertex:x0,clipping_planes_vertex:M0,color_fragment:y0,color_pars_fragment:S0,color_pars_vertex:E0,color_vertex:b0,common:T0,cube_uv_reflection_fragment:A0,defaultnormal_vertex:w0,displacementmap_pars_vertex:C0,displacementmap_vertex:R0,emissivemap_fragment:P0,emissivemap_pars_fragment:D0,colorspace_fragment:I0,colorspace_pars_fragment:L0,envmap_fragment:N0,envmap_common_pars_fragment:U0,envmap_pars_fragment:O0,envmap_pars_vertex:F0,envmap_physical_pars_fragment:$0,envmap_vertex:B0,fog_vertex:k0,fog_pars_vertex:z0,fog_fragment:G0,fog_pars_fragment:V0,gradientmap_pars_fragment:H0,lightmap_pars_fragment:W0,lights_lambert_fragment:X0,lights_lambert_pars_fragment:Y0,lights_pars_begin:q0,lights_toon_fragment:j0,lights_toon_pars_fragment:K0,lights_phong_fragment:J0,lights_phong_pars_fragment:Z0,lights_physical_fragment:Q0,lights_physical_pars_fragment:ev,lights_fragment_begin:tv,lights_fragment_maps:nv,lights_fragment_end:iv,logdepthbuf_fragment:rv,logdepthbuf_pars_fragment:sv,logdepthbuf_pars_vertex:av,logdepthbuf_vertex:ov,map_fragment:lv,map_pars_fragment:cv,map_particle_fragment:uv,map_particle_pars_fragment:hv,metalnessmap_fragment:fv,metalnessmap_pars_fragment:dv,morphinstance_vertex:pv,morphcolor_vertex:mv,morphnormal_vertex:gv,morphtarget_pars_vertex:_v,morphtarget_vertex:vv,normal_fragment_begin:xv,normal_fragment_maps:Mv,normal_pars_fragment:yv,normal_pars_vertex:Sv,normal_vertex:Ev,normalmap_pars_fragment:bv,clearcoat_normal_fragment_begin:Tv,clearcoat_normal_fragment_maps:Av,clearcoat_pars_fragment:wv,iridescence_pars_fragment:Cv,opaque_fragment:Rv,packing:Pv,premultiplied_alpha_fragment:Dv,project_vertex:Iv,dithering_fragment:Lv,dithering_pars_fragment:Nv,roughnessmap_fragment:Uv,roughnessmap_pars_fragment:Ov,shadowmap_pars_fragment:Fv,shadowmap_pars_vertex:Bv,shadowmap_vertex:kv,shadowmask_pars_fragment:zv,skinbase_vertex:Gv,skinning_pars_vertex:Vv,skinning_vertex:Hv,skinnormal_vertex:Wv,specularmap_fragment:Xv,specularmap_pars_fragment:Yv,tonemapping_fragment:qv,tonemapping_pars_fragment:$v,transmission_fragment:jv,transmission_pars_fragment:Kv,uv_pars_fragment:Jv,uv_pars_vertex:Zv,uv_vertex:Qv,worldpos_vertex:ex,background_vert:tx,background_frag:nx,backgroundCube_vert:ix,backgroundCube_frag:rx,cube_vert:sx,cube_frag:ax,depth_vert:ox,depth_frag:lx,distanceRGBA_vert:cx,distanceRGBA_frag:ux,equirect_vert:hx,equirect_frag:fx,linedashed_vert:dx,linedashed_frag:px,meshbasic_vert:mx,meshbasic_frag:gx,meshlambert_vert:_x,meshlambert_frag:vx,meshmatcap_vert:xx,meshmatcap_frag:Mx,meshnormal_vert:yx,meshnormal_frag:Sx,meshphong_vert:Ex,meshphong_frag:bx,meshphysical_vert:Tx,meshphysical_frag:Ax,meshtoon_vert:wx,meshtoon_frag:Cx,points_vert:Rx,points_frag:Px,shadow_vert:Dx,shadow_frag:Ix,sprite_vert:Lx,sprite_frag:Nx},Ue={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Pi={basic:{uniforms:Sn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Sn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new tt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Sn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Sn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Sn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new tt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Sn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Sn([Ue.points,Ue.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Sn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Sn([Ue.common,Ue.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Sn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Sn([Ue.sprite,Ue.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Sn([Ue.common,Ue.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Sn([Ue.lights,Ue.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Pi.physical={uniforms:Sn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Vo={r:0,b:0,g:0},Ur=new Ti,Ux=new Ct;function Ox(r,e,t,n,i,s,a){const o=new tt(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function _(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?t:e).get(M)),M}function g(T){let M=!1;const C=_(T);C===null?p(o,l):C&&C.isColor&&(p(C,1),M=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(T,M){const C=_(M);C&&(C.isCubeTexture||C.mapping===zl)?(u===void 0&&(u=new It(new Cr(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:ea(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ur.copy(M.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(Ur)),u.material.toneMapped=mt.getTransfer(C.colorSpace)!==yt,(h!==C||d!==C.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=C,d=C.version,f=r.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new It(new Mo(2,2),new wn({name:"BackgroundMaterial",uniforms:ea(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=mt.getTransfer(C.colorSpace)!==yt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||d!==C.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=C,d=C.version,f=r.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,M){T.getRGB(Vo,cp(r)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,M,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,M=1){o.set(T),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(o,l)},render:g,addToRenderList:m,dispose:b}}function Fx(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(S,N,O,Y,$){let X=!1;const J=h(Y,O,N);s!==J&&(s=J,c(s.object)),X=f(S,Y,O,$),X&&_(S,Y,O,$),$!==null&&e.update($,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(S,N,O,Y),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function u(S){return r.deleteVertexArray(S)}function h(S,N,O){const Y=O.wireframe===!0;let $=n[S.id];$===void 0&&($={},n[S.id]=$);let X=$[N.id];X===void 0&&(X={},$[N.id]=X);let J=X[Y];return J===void 0&&(J=d(l()),X[Y]=J),J}function d(S){const N=[],O=[],Y=[];for(let $=0;$<t;$++)N[$]=0,O[$]=0,Y[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:Y,object:S,attributes:{},index:null}}function f(S,N,O,Y){const $=s.attributes,X=N.attributes;let J=0;const Z=O.getAttributes();for(const W in Z)if(Z[W].location>=0){const L=$[W];let Me=X[W];if(Me===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(Me=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(Me=S.instanceColor)),L===void 0||L.attribute!==Me||Me&&L.data!==Me.data)return!0;J++}return s.attributesNum!==J||s.index!==Y}function _(S,N,O,Y){const $={},X=N.attributes;let J=0;const Z=O.getAttributes();for(const W in Z)if(Z[W].location>=0){let L=X[W];L===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(L=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(L=S.instanceColor));const Me={};Me.attribute=L,L&&L.data&&(Me.data=L.data),$[W]=Me,J++}s.attributes=$,s.attributesNum=J,s.index=Y}function g(){const S=s.newAttributes;for(let N=0,O=S.length;N<O;N++)S[N]=0}function m(S){p(S,0)}function p(S,N){const O=s.newAttributes,Y=s.enabledAttributes,$=s.attributeDivisors;O[S]=1,Y[S]===0&&(r.enableVertexAttribArray(S),Y[S]=1),$[S]!==N&&(r.vertexAttribDivisor(S,N),$[S]=N)}function b(){const S=s.newAttributes,N=s.enabledAttributes;for(let O=0,Y=N.length;O<Y;O++)N[O]!==S[O]&&(r.disableVertexAttribArray(O),N[O]=0)}function T(S,N,O,Y,$,X,J){J===!0?r.vertexAttribIPointer(S,N,O,$,X):r.vertexAttribPointer(S,N,O,Y,$,X)}function M(S,N,O,Y){g();const $=Y.attributes,X=O.getAttributes(),J=N.defaultAttributeValues;for(const Z in X){const W=X[Z];if(W.location>=0){let he=$[Z];if(he===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(he=S.instanceColor)),he!==void 0){const L=he.normalized,Me=he.itemSize,qe=e.get(he);if(qe===void 0)continue;const nt=qe.buffer,Be=qe.type,$e=qe.bytesPerElement,re=Be===r.INT||Be===r.UNSIGNED_INT||he.gpuType===rh;if(he.isInterleavedBufferAttribute){const oe=he.data,Te=oe.stride,le=he.offset;if(oe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<W.locationSize;Ce++)p(W.location+Ce,oe.meshPerAttribute);S.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ce=0;Ce<W.locationSize;Ce++)m(W.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,nt);for(let Ce=0;Ce<W.locationSize;Ce++)T(W.location+Ce,Me/W.locationSize,Be,L,Te*$e,(le+Me/W.locationSize*Ce)*$e,re)}else{if(he.isInstancedBufferAttribute){for(let oe=0;oe<W.locationSize;oe++)p(W.location+oe,he.meshPerAttribute);S.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let oe=0;oe<W.locationSize;oe++)m(W.location+oe);r.bindBuffer(r.ARRAY_BUFFER,nt);for(let oe=0;oe<W.locationSize;oe++)T(W.location+oe,Me/W.locationSize,Be,L,Me*$e,Me/W.locationSize*oe*$e,re)}}else if(J!==void 0){const L=J[Z];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(W.location,L);break;case 3:r.vertexAttrib3fv(W.location,L);break;case 4:r.vertexAttrib4fv(W.location,L);break;default:r.vertexAttrib1fv(W.location,L)}}}}b()}function C(){D();for(const S in n){const N=n[S];for(const O in N){const Y=N[O];for(const $ in Y)u(Y[$].object),delete Y[$];delete N[O]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;const N=n[S.id];for(const O in N){const Y=N[O];for(const $ in Y)u(Y[$].object),delete Y[$];delete N[O]}delete n[S.id]}function A(S){for(const N in n){const O=n[N];if(O[S.id]===void 0)continue;const Y=O[S.id];for(const $ in Y)u(Y[$].object),delete Y[$];delete O[S.id]}}function D(){E(),a=!0,s!==i&&(s=i,c(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function Bx(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function kx(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Ei&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const D=A===Bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==zi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Li&&!D)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:C,maxSamples:R}}function zx(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new kr,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,T=b*4;let M=p.clippingState||null;l.value=M,M=u(_,d,T,f);for(let C=0;C!==T;++C)M[C]=t[C];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,M=f;T!==g;++T,M+=4)a.copy(h[T]).applyMatrix4(b,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Gx(r){let e=new WeakMap;function t(a,o){return o===Zc?a.mapping=Js:o===Qc&&(a.mapping=Zs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Zc||o===Qc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new M_(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Fs=4,If=[.125,.215,.35,.446,.526,.582],Xr=20,Sc=new Mh,Lf=new tt;let Ec=null,bc=0,Tc=0,Ac=!1;const zr=(1+Math.sqrt(5))/2,Cs=1/zr,Nf=[new z(-zr,Cs,0),new z(zr,Cs,0),new z(-Cs,0,zr),new z(Cs,0,zr),new z(0,zr,-Cs),new z(0,zr,Cs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Vx=new z;class Pu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Vx}=s;Ec=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ec,bc,Tc),this._renderer.xr.enabled=Ac,e.scissorTest=!1,Ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ec=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:Bi,format:Ei,colorSpace:Qs,depthBuffer:!1},i=Uf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hx(s)),this._blurMaterial=Wx(s,e,t)}return i}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,Sc)}_sceneToCubeUV(e,t,n,i,s){const l=new $n(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Lf),h.toneMapping=xr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const g=new xo({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),m=new It(new Cr,g);let p=!1;const b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,p=!0):(g.color.copy(Lf),p=!0);for(let T=0;T<6;T++){const M=T%3;M===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):M===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const C=this._cubeSize;Ho(i,M*C,T>2?C:0,C,C),h.setRenderTarget(i),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Js||e.mapping===Zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new It(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ho(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Sc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Nf[(i-s-1)%Nf.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new It(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Xr-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Xr;m>Xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xr}`);const p=[];let b=0;for(let A=0;A<Xr;++A){const D=A/g,E=Math.exp(-D*D/2);p.push(E),A===0?b+=E:A<m&&(b+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-n;const M=this._sizeLods[i],C=3*M*(i>T-Fs?i-T+Fs:0),R=4*(this._cubeSize-M);Ho(t,C,R,3*M,2*M),l.setRenderTarget(t),l.render(h,Sc)}}function Hx(r){const e=[],t=[],n=[];let i=r;const s=r-Fs+1+If.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Fs?l=If[a-r+Fs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,m=2,p=1,b=new Float32Array(g*_*f),T=new Float32Array(m*_*f),M=new Float32Array(p*_*f);for(let R=0;R<f;R++){const A=R%3*2/3-1,D=R>2?0:-1,E=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];b.set(E,g*_*R),T.set(d,m*_*R);const S=[R,R,R,R,R,R];M.set(S,p*_*R)}const C=new ri;C.setAttribute("position",new bi(b,g)),C.setAttribute("uv",new bi(T,m)),C.setAttribute("faceIndex",new bi(M,p)),e.push(C),i>Fs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Uf(r,e,t){const n=new gi(r,e,t);return n.texture.mapping=zl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ho(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Wx(r,e,t){const n=new Float32Array(Xr),i=new z(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Of(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Ff(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function yh(){return`

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
	`}function Xx(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Zc||l===Qc,u=l===Js||l===Zs;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Pu(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Pu(r)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Yx(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&to("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qx(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const b=f.array;g=f.version;for(let T=0,M=b.length;T<M;T+=3){const C=b[T+0],R=b[T+1],A=b[T+2];d.push(C,R,R,A,A,C)}}else if(_!==void 0){const b=_.array;g=_.version;for(let T=0,M=b.length/3-1;T<M;T+=3){const C=T+0,R=T+1,A=T+2;d.push(C,R,R,A,A,C)}}else return;const m=new(ip(d)?lp:op)(d,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function $x(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*a,_),t.update(f,n,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function h(d,f,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,_);let p=0;for(let b=0;b<_;b++)p+=f[b]*g[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function jx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Kx(r,e,t){const n=new WeakMap,i=new St;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let S=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let C=o.attributes.position.count*M,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*R*4*h),D=new rp(A,C,R,h);D.type=Li,D.needsUpdate=!0;const E=M*4;for(let N=0;N<h;N++){const O=p[N],Y=b[N],$=T[N],X=C*R*4*N;for(let J=0;J<O.count;J++){const Z=J*E;_===!0&&(i.fromBufferAttribute(O,J),A[X+Z+0]=i.x,A[X+Z+1]=i.y,A[X+Z+2]=i.z,A[X+Z+3]=0),g===!0&&(i.fromBufferAttribute(Y,J),A[X+Z+4]=i.x,A[X+Z+5]=i.y,A[X+Z+6]=i.z,A[X+Z+7]=0),m===!0&&(i.fromBufferAttribute($,J),A[X+Z+8]=i.x,A[X+Z+9]=i.y,A[X+Z+10]=i.z,A[X+Z+11]=$.itemSize===4?i.w:1)}}d={count:h,texture:D,size:new We(C,R)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Jx(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const yp=new mn,Bf=new dp(1,1),Sp=new rp,Ep=new i_,bp=new hp,kf=[],zf=[],Gf=new Float32Array(16),Vf=new Float32Array(9),Hf=new Float32Array(4);function ha(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=kf[i];if(s===void 0&&(s=new Float32Array(i),kf[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Zt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Qt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Vl(r,e){let t=zf[e];t===void 0&&(t=new Int32Array(e),zf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Zx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Qx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2fv(this.addr,e),Qt(t,e)}}function eM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;r.uniform3fv(this.addr,e),Qt(t,e)}}function tM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4fv(this.addr,e),Qt(t,e)}}function nM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,n))return;Hf.set(n),r.uniformMatrix2fv(this.addr,!1,Hf),Qt(t,n)}}function iM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,n))return;Vf.set(n),r.uniformMatrix3fv(this.addr,!1,Vf),Qt(t,n)}}function rM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,n))return;Gf.set(n),r.uniformMatrix4fv(this.addr,!1,Gf),Qt(t,n)}}function sM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function aM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2iv(this.addr,e),Qt(t,e)}}function oM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3iv(this.addr,e),Qt(t,e)}}function lM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4iv(this.addr,e),Qt(t,e)}}function cM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function uM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2uiv(this.addr,e),Qt(t,e)}}function hM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3uiv(this.addr,e),Qt(t,e)}}function fM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4uiv(this.addr,e),Qt(t,e)}}function dM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Bf.compareFunction=np,s=Bf):s=yp,t.setTexture2D(e||s,i)}function pM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ep,i)}function mM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bp,i)}function gM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sp,i)}function _M(r){switch(r){case 5126:return Zx;case 35664:return Qx;case 35665:return eM;case 35666:return tM;case 35674:return nM;case 35675:return iM;case 35676:return rM;case 5124:case 35670:return sM;case 35667:case 35671:return aM;case 35668:case 35672:return oM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return uM;case 36295:return hM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}function vM(r,e){r.uniform1fv(this.addr,e)}function xM(r,e){const t=ha(e,this.size,2);r.uniform2fv(this.addr,t)}function MM(r,e){const t=ha(e,this.size,3);r.uniform3fv(this.addr,t)}function yM(r,e){const t=ha(e,this.size,4);r.uniform4fv(this.addr,t)}function SM(r,e){const t=ha(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function EM(r,e){const t=ha(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function bM(r,e){const t=ha(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function TM(r,e){r.uniform1iv(this.addr,e)}function AM(r,e){r.uniform2iv(this.addr,e)}function wM(r,e){r.uniform3iv(this.addr,e)}function CM(r,e){r.uniform4iv(this.addr,e)}function RM(r,e){r.uniform1uiv(this.addr,e)}function PM(r,e){r.uniform2uiv(this.addr,e)}function DM(r,e){r.uniform3uiv(this.addr,e)}function IM(r,e){r.uniform4uiv(this.addr,e)}function LM(r,e,t){const n=this.cache,i=e.length,s=Vl(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||yp,s[a])}function NM(r,e,t){const n=this.cache,i=e.length,s=Vl(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ep,s[a])}function UM(r,e,t){const n=this.cache,i=e.length,s=Vl(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||bp,s[a])}function OM(r,e,t){const n=this.cache,i=e.length,s=Vl(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Sp,s[a])}function FM(r){switch(r){case 5126:return vM;case 35664:return xM;case 35665:return MM;case 35666:return yM;case 35674:return SM;case 35675:return EM;case 35676:return bM;case 5124:case 35670:return TM;case 35667:case 35671:return AM;case 35668:case 35672:return wM;case 35669:case 35673:return CM;case 5125:return RM;case 36294:return PM;case 36295:return DM;case 36296:return IM;case 35678:case 36198:case 36298:case 36306:case 35682:return LM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return UM;case 36289:case 36303:case 36311:case 36292:return OM}}class BM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_M(t.type)}}class kM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FM(t.type)}}class zM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const wc=/(\w+)(\])?(\[|\.)?/g;function Wf(r,e){r.seq.push(e),r.map[e.id]=e}function GM(r,e,t){const n=r.name,i=n.length;for(wc.lastIndex=0;;){const s=wc.exec(n),a=wc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Wf(t,c===void 0?new BM(o,r,e):new kM(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new zM(o),Wf(t,h)),t=h}}}class fl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);GM(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Xf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const VM=37297;let HM=0;function WM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Yf=new st;function XM(r){mt._getMatrix(Yf,mt.workingColorSpace,r);const e=`mat3( ${Yf.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(r)){case El:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function qf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+WM(r.getShaderSource(e),o)}else return s}function YM(r,e){const t=XM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function qM(r,e){let t;switch(e){case Vd:t="Linear";break;case Hd:t="Reinhard";break;case Wd:t="Cineon";break;case ih:t="ACESFilmic";break;case Yd:t="AgX";break;case qd:t="Neutral";break;case Xd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wo=new z;function $M(){mt.getLuminanceCoefficients(Wo);const r=Wo.x.toFixed(4),e=Wo.y.toFixed(4),t=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function KM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function JM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ta(r){return r!==""}function $f(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Du(r){return r.replace(ZM,ey)}const QM=new Map;function ey(r,e){let t=ot[e];if(t===void 0){const n=QM.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Du(t)}const ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kf(r){return r.replace(ty,ny)}function ny(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Jf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iy(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===zd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Gd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function ry(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Js:case Zs:e="ENVMAP_TYPE_CUBE";break;case zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sy(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Zs&&(e="ENVMAP_MODE_REFRACTION"),e}function ay(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case nh:e="ENVMAP_BLENDING_MULTIPLY";break;case yg:e="ENVMAP_BLENDING_MIX";break;case Sg:e="ENVMAP_BLENDING_ADD";break}return e}function oy(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ly(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=iy(t),c=ry(t),u=sy(t),h=ay(t),d=oy(t),f=jM(t),_=KM(s),g=i.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ta).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ta).join(`
`),p.length>0&&(p+=`
`)):(m=[Jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),p=[Jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xr?"#define TONE_MAPPING":"",t.toneMapping!==xr?ot.tonemapping_pars_fragment:"",t.toneMapping!==xr?qM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,YM("linearToOutputTexel",t.outputColorSpace),$M(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ta).join(`
`)),a=Du(a),a=$f(a,t),a=jf(a,t),o=Du(o),o=$f(o,t),o=jf(o,t),a=Kf(a),o=Kf(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===rf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=b+m+a,M=b+p+o,C=Xf(i,i.VERTEX_SHADER,T),R=Xf(i,i.FRAGMENT_SHADER,M);i.attachShader(g,C),i.attachShader(g,R),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(N){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(g)||"",Y=i.getShaderInfoLog(C)||"",$=i.getShaderInfoLog(R)||"",X=O.trim(),J=Y.trim(),Z=$.trim();let W=!0,he=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,C,R);else{const L=qf(i,C,"vertex"),Me=qf(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+X+`
`+L+`
`+Me)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(J===""||Z==="")&&(he=!1);he&&(N.diagnostics={runnable:W,programLog:X,vertexShader:{log:J,prefix:m},fragmentShader:{log:Z,prefix:p}})}i.deleteShader(C),i.deleteShader(R),D=new fl(i,g),E=JM(i,g)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(g,VM)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=R,this}let cy=0;class uy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hy(e),t.set(e,n)),n}}class hy{constructor(e){this.id=cy++,this.code=e,this.usedTimes=0}}function fy(r,e,t,n,i,s,a){const o=new sp,l=new uy,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,N,O,Y){const $=O.fog,X=Y.geometry,J=E.isMeshStandardMaterial?O.environment:null,Z=(E.isMeshStandardMaterial?t:e).get(E.envMap||J),W=Z&&Z.mapping===zl?Z.image.height:null,he=_[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const L=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Me=L!==void 0?L.length:0;let qe=0;X.morphAttributes.position!==void 0&&(qe=1),X.morphAttributes.normal!==void 0&&(qe=2),X.morphAttributes.color!==void 0&&(qe=3);let nt,Be,$e,re;if(he){const pe=Pi[he];nt=pe.vertexShader,Be=pe.fragmentShader}else nt=E.vertexShader,Be=E.fragmentShader,l.update(E),$e=l.getVertexShaderID(E),re=l.getFragmentShaderID(E);const oe=r.getRenderTarget(),Te=r.state.buffers.depth.getReversed(),le=Y.isInstancedMesh===!0,Ce=Y.isBatchedMesh===!0,Ye=!!E.map,G=!!E.matcap,x=!!Z,I=!!E.aoMap,k=!!E.lightMap,ce=!!E.bumpMap,P=!!E.normalMap,se=!!E.displacementMap,j=!!E.emissiveMap,te=!!E.metalnessMap,ne=!!E.roughnessMap,B=E.anisotropy>0,y=E.clearcoat>0,v=E.dispersion>0,U=E.iridescence>0,q=E.sheen>0,ae=E.transmission>0,Q=B&&!!E.anisotropyMap,Fe=y&&!!E.clearcoatMap,ve=y&&!!E.clearcoatNormalMap,Le=y&&!!E.clearcoatRoughnessMap,Re=U&&!!E.iridescenceMap,_e=U&&!!E.iridescenceThicknessMap,Ae=q&&!!E.sheenColorMap,je=q&&!!E.sheenRoughnessMap,ze=!!E.specularMap,ye=!!E.specularColorMap,Qe=!!E.specularIntensityMap,F=ae&&!!E.transmissionMap,ge=ae&&!!E.thicknessMap,xe=!!E.gradientMap,Ie=!!E.alphaMap,de=E.alphaTest>0,ue=!!E.alphaHash,K=!!E.extensions;let me=xr;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(me=r.toneMapping);const be={shaderID:he,shaderType:E.type,shaderName:E.name,vertexShader:nt,fragmentShader:Be,defines:E.defines,customVertexShaderID:$e,customFragmentShaderID:re,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ce,batchingColor:Ce&&Y._colorsTexture!==null,instancing:le,instancingColor:le&&Y.instanceColor!==null,instancingMorph:le&&Y.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?r.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Qs,alphaToCoverage:!!E.alphaToCoverage,map:Ye,matcap:G,envMap:x,envMapMode:x&&Z.mapping,envMapCubeUVHeight:W,aoMap:I,lightMap:k,bumpMap:ce,normalMap:P,displacementMap:d&&se,emissiveMap:j,normalMapObjectSpace:P&&E.normalMapType===Ag,normalMapTangentSpace:P&&E.normalMapType===hh,metalnessMap:te,roughnessMap:ne,anisotropy:B,anisotropyMap:Q,clearcoat:y,clearcoatMap:Fe,clearcoatNormalMap:ve,clearcoatRoughnessMap:Le,dispersion:v,iridescence:U,iridescenceMap:Re,iridescenceThicknessMap:_e,sheen:q,sheenColorMap:Ae,sheenRoughnessMap:je,specularMap:ze,specularColorMap:ye,specularIntensityMap:Qe,transmission:ae,transmissionMap:F,thicknessMap:ge,gradientMap:xe,opaque:E.transparent===!1&&E.blending===Gs&&E.alphaToCoverage===!1,alphaMap:Ie,alphaTest:de,alphaHash:ue,combine:E.combine,mapUv:Ye&&g(E.map.channel),aoMapUv:I&&g(E.aoMap.channel),lightMapUv:k&&g(E.lightMap.channel),bumpMapUv:ce&&g(E.bumpMap.channel),normalMapUv:P&&g(E.normalMap.channel),displacementMapUv:se&&g(E.displacementMap.channel),emissiveMapUv:j&&g(E.emissiveMap.channel),metalnessMapUv:te&&g(E.metalnessMap.channel),roughnessMapUv:ne&&g(E.roughnessMap.channel),anisotropyMapUv:Q&&g(E.anisotropyMap.channel),clearcoatMapUv:Fe&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:ve&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:je&&g(E.sheenRoughnessMap.channel),specularMapUv:ze&&g(E.specularMap.channel),specularColorMapUv:ye&&g(E.specularColorMap.channel),specularIntensityMapUv:Qe&&g(E.specularIntensityMap.channel),transmissionMapUv:F&&g(E.transmissionMap.channel),thicknessMapUv:ge&&g(E.thicknessMap.channel),alphaMapUv:Ie&&g(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(P||B),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!X.attributes.uv&&(Ye||Ie),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Te,skinning:Y.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:qe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:me,decodeVideoTexture:Ye&&E.map.isVideoTexture===!0&&mt.getTransfer(E.map.colorSpace)===yt,decodeVideoTextureEmissive:j&&E.emissiveMap.isVideoTexture===!0&&mt.getTransfer(E.emissiveMap.colorSpace)===yt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ln,flipSided:E.side===Cn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:K&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(K&&E.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const N in E.defines)S.push(N),S.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(b(S,E),T(S,E),S.push(r.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function b(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function T(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function M(E){const S=_[E.type];let N;if(S){const O=Pi[S];N=no.clone(O.uniforms)}else N=E.uniforms;return N}function C(E,S){let N;for(let O=0,Y=u.length;O<Y;O++){const $=u[O];if($.cacheKey===S){N=$,++N.usedTimes;break}}return N===void 0&&(N=new ly(r,S,E,s),u.push(N)),N}function R(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:C,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:D}}function dy(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function py(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Zf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Qf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,f,_,g,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function o(h,d,f,_,g,m){const p=a(h,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,_,g,m){const p=a(h,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||py),n.length>1&&n.sort(d||Zf),i.length>1&&i.sort(d||Zf)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function my(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Qf,r.set(n,[a])):i>=s.length?(a=new Qf,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function gy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new tt};break;case"SpotLight":t={position:new z,direction:new z,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new z,halfWidth:new z,halfHeight:new z};break}return r[e.id]=t,t}}}function _y(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let vy=0;function xy(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function My(r){const e=new gy,t=_y(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const i=new z,s=new Ct,a=new Ct;function o(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,b=0,T=0,M=0,C=0,R=0,A=0;c.sort(xy);for(let E=0,S=c.length;E<S;E++){const N=c[E],O=N.color,Y=N.intensity,$=N.distance,X=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=O.r*Y,h+=O.g*Y,d+=O.b*Y;else if(N.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(N.sh.coefficients[J],Y);A++}else if(N.isDirectionalLight){const J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Z=N.shadow,W=t.get(N);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=N.shadow.matrix,b++}n.directional[f]=J,f++}else if(N.isSpotLight){const J=e.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(O).multiplyScalar(Y),J.distance=$,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,n.spot[g]=J;const Z=N.shadow;if(N.map&&(n.spotLightMap[C]=N.map,C++,Z.updateMatrices(N),N.castShadow&&R++),n.spotLightMatrix[g]=Z.matrix,N.castShadow){const W=t.get(N);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=X,M++}g++}else if(N.isRectAreaLight){const J=e.get(N);J.color.copy(O).multiplyScalar(Y),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=J,m++}else if(N.isPointLight){const J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),J.distance=N.distance,J.decay=N.decay,N.castShadow){const Z=N.shadow,W=t.get(N);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,n.pointShadow[_]=W,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=N.shadow.matrix,T++}n.point[_]=J,_++}else if(N.isHemisphereLight){const J=e.get(N);J.skyColor.copy(N.color).multiplyScalar(Y),J.groundColor.copy(N.groundColor).multiplyScalar(Y),n.hemi[p]=J,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==_||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==b||D.numPointShadows!==T||D.numSpotShadows!==M||D.numSpotMaps!==C||D.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=M+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,D.directionalLength=f,D.pointLength=_,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=b,D.numPointShadows=T,D.numSpotShadows=M,D.numSpotMaps=C,D.numLightProbes=A,n.version=vy++)}function l(c,u){let h=0,d=0,f=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const T=c[p];if(T.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),h++}else if(T.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function ed(r){const e=new My(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function yy(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new ed(r),e.set(i,[o])):s>=a.length?(o=new ed(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ey=`uniform sampler2D shadow_pass;
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
}`;function by(r,e,t){let n=new mh;const i=new We,s=new We,a=new St,o=new Y_({depthPacking:Tg}),l=new q_,c={},u=t.maxTextureSize,h={[Er]:Cn,[Cn]:Er,[Ln]:Ln},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Sy,fragmentShader:Ey}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new ri;_.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new It(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zd;let p=this.type;this.render=function(R,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=r.getRenderTarget(),S=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Zi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const Y=p!==qi&&this.type===qi,$=p===qi&&this.type!==qi;for(let X=0,J=R.length;X<J;X++){const Z=R[X],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const he=W.getFrameExtents();if(i.multiply(he),s.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/he.x),i.x=s.x*he.x,W.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/he.y),i.y=s.y*he.y,W.mapSize.y=s.y)),W.map===null||Y===!0||$===!0){const Me=this.type!==qi?{minFilter:ei,magFilter:ei}:{};W.map!==null&&W.map.dispose(),W.map=new gi(i.x,i.y,Me),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const L=W.getViewportCount();for(let Me=0;Me<L;Me++){const qe=W.getViewport(Me);a.set(s.x*qe.x,s.y*qe.y,s.x*qe.z,s.y*qe.w),O.viewport(a),W.updateMatrices(Z,Me),n=W.getFrustum(),M(A,D,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===qi&&b(W,D),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(E,S,N)};function b(R,A){const D=e.update(g);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new gi(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(A,null,D,d,g,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(A,null,D,f,g,null)}function T(R,A,D,E){let S=null;const N=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)S=N;else if(S=D.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const O=S.uuid,Y=A.uuid;let $=c[O];$===void 0&&($={},c[O]=$);let X=$[Y];X===void 0&&(X=S.clone(),$[Y]=X,A.addEventListener("dispose",C)),S=X}if(S.visible=A.visible,S.wireframe=A.wireframe,E===qi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=r.properties.get(S);O.light=D}return S}function M(R,A,D,E,S){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===qi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const Y=e.update(R),$=R.material;if(Array.isArray($)){const X=Y.groups;for(let J=0,Z=X.length;J<Z;J++){const W=X[J],he=$[W.materialIndex];if(he&&he.visible){const L=T(R,he,E,S);R.onBeforeShadow(r,R,A,D,Y,L,W),r.renderBufferDirect(D,null,Y,L,R,W),R.onAfterShadow(r,R,A,D,Y,L,W)}}}else if($.visible){const X=T(R,$,E,S);R.onBeforeShadow(r,R,A,D,Y,X,null),r.renderBufferDirect(D,null,Y,X,R,null),R.onAfterShadow(r,R,A,D,Y,X,null)}}const O=R.children;for(let Y=0,$=O.length;Y<$;Y++)M(O[Y],A,D,E,S)}function C(R){R.target.removeEventListener("dispose",C);for(const D in c){const E=c[D],S=R.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const Ty={[Xc]:Yc,[qc]:Kc,[$c]:Jc,[Ks]:jc,[Yc]:Xc,[Kc]:qc,[Jc]:$c,[jc]:Ks};function Ay(r,e){function t(){let F=!1;const ge=new St;let xe=null;const Ie=new St(0,0,0,0);return{setMask:function(de){xe!==de&&!F&&(r.colorMask(de,de,de,de),xe=de)},setLocked:function(de){F=de},setClear:function(de,ue,K,me,be){be===!0&&(de*=me,ue*=me,K*=me),ge.set(de,ue,K,me),Ie.equals(ge)===!1&&(r.clearColor(de,ue,K,me),Ie.copy(ge))},reset:function(){F=!1,xe=null,Ie.set(-1,0,0,0)}}}function n(){let F=!1,ge=!1,xe=null,Ie=null,de=null;return{setReversed:function(ue){if(ge!==ue){const K=e.get("EXT_clip_control");ue?K.clipControlEXT(K.LOWER_LEFT_EXT,K.ZERO_TO_ONE_EXT):K.clipControlEXT(K.LOWER_LEFT_EXT,K.NEGATIVE_ONE_TO_ONE_EXT),ge=ue;const me=de;de=null,this.setClear(me)}},getReversed:function(){return ge},setTest:function(ue){ue?oe(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(ue){xe!==ue&&!F&&(r.depthMask(ue),xe=ue)},setFunc:function(ue){if(ge&&(ue=Ty[ue]),Ie!==ue){switch(ue){case Xc:r.depthFunc(r.NEVER);break;case Yc:r.depthFunc(r.ALWAYS);break;case qc:r.depthFunc(r.LESS);break;case Ks:r.depthFunc(r.LEQUAL);break;case $c:r.depthFunc(r.EQUAL);break;case jc:r.depthFunc(r.GEQUAL);break;case Kc:r.depthFunc(r.GREATER);break;case Jc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=ue}},setLocked:function(ue){F=ue},setClear:function(ue){de!==ue&&(ge&&(ue=1-ue),r.clearDepth(ue),de=ue)},reset:function(){F=!1,xe=null,Ie=null,de=null,ge=!1}}}function i(){let F=!1,ge=null,xe=null,Ie=null,de=null,ue=null,K=null,me=null,be=null;return{setTest:function(pe){F||(pe?oe(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(pe){ge!==pe&&!F&&(r.stencilMask(pe),ge=pe)},setFunc:function(pe,De,Ge){(xe!==pe||Ie!==De||de!==Ge)&&(r.stencilFunc(pe,De,Ge),xe=pe,Ie=De,de=Ge)},setOp:function(pe,De,Ge){(ue!==pe||K!==De||me!==Ge)&&(r.stencilOp(pe,De,Ge),ue=pe,K=De,me=Ge)},setLocked:function(pe){F=pe},setClear:function(pe){be!==pe&&(r.clearStencil(pe),be=pe)},reset:function(){F=!1,ge=null,xe=null,Ie=null,de=null,ue=null,K=null,me=null,be=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,b=null,T=null,M=null,C=null,R=null,A=new tt(0,0,0),D=0,E=!1,S=null,N=null,O=null,Y=null,$=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,Z=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),J=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),J=Z>=2);let he=null,L={};const Me=r.getParameter(r.SCISSOR_BOX),qe=r.getParameter(r.VIEWPORT),nt=new St().fromArray(Me),Be=new St().fromArray(qe);function $e(F,ge,xe,Ie){const de=new Uint8Array(4),ue=r.createTexture();r.bindTexture(F,ue),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let K=0;K<xe;K++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(ge,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,de):r.texImage2D(ge+K,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,de);return ue}const re={};re[r.TEXTURE_2D]=$e(r.TEXTURE_2D,r.TEXTURE_2D,1),re[r.TEXTURE_CUBE_MAP]=$e(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[r.TEXTURE_2D_ARRAY]=$e(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),re[r.TEXTURE_3D]=$e(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(r.DEPTH_TEST),a.setFunc(Ks),ce(!1),P(Zh),oe(r.CULL_FACE),I(Zi);function oe(F){u[F]!==!0&&(r.enable(F),u[F]=!0)}function Te(F){u[F]!==!1&&(r.disable(F),u[F]=!1)}function le(F,ge){return h[F]!==ge?(r.bindFramebuffer(F,ge),h[F]=ge,F===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ge),F===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ce(F,ge){let xe=f,Ie=!1;if(F){xe=d.get(ge),xe===void 0&&(xe=[],d.set(ge,xe));const de=F.textures;if(xe.length!==de.length||xe[0]!==r.COLOR_ATTACHMENT0){for(let ue=0,K=de.length;ue<K;ue++)xe[ue]=r.COLOR_ATTACHMENT0+ue;xe.length=de.length,Ie=!0}}else xe[0]!==r.BACK&&(xe[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(xe)}function Ye(F){return _!==F?(r.useProgram(F),_=F,!0):!1}const G={[Wr]:r.FUNC_ADD,[rg]:r.FUNC_SUBTRACT,[sg]:r.FUNC_REVERSE_SUBTRACT};G[ag]=r.MIN,G[og]=r.MAX;const x={[lg]:r.ZERO,[cg]:r.ONE,[ug]:r.SRC_COLOR,[Hc]:r.SRC_ALPHA,[gg]:r.SRC_ALPHA_SATURATE,[pg]:r.DST_COLOR,[fg]:r.DST_ALPHA,[hg]:r.ONE_MINUS_SRC_COLOR,[Wc]:r.ONE_MINUS_SRC_ALPHA,[mg]:r.ONE_MINUS_DST_COLOR,[dg]:r.ONE_MINUS_DST_ALPHA,[_g]:r.CONSTANT_COLOR,[vg]:r.ONE_MINUS_CONSTANT_COLOR,[xg]:r.CONSTANT_ALPHA,[Mg]:r.ONE_MINUS_CONSTANT_ALPHA};function I(F,ge,xe,Ie,de,ue,K,me,be,pe){if(F===Zi){g===!0&&(Te(r.BLEND),g=!1);return}if(g===!1&&(oe(r.BLEND),g=!0),F!==ig){if(F!==m||pe!==E){if((p!==Wr||M!==Wr)&&(r.blendEquation(r.FUNC_ADD),p=Wr,M=Wr),pe)switch(F){case Gs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vc:r.blendFunc(r.ONE,r.ONE);break;case Qh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ef:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Gs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Qh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ef:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,T=null,C=null,R=null,A.set(0,0,0),D=0,m=F,E=pe}return}de=de||ge,ue=ue||xe,K=K||Ie,(ge!==p||de!==M)&&(r.blendEquationSeparate(G[ge],G[de]),p=ge,M=de),(xe!==b||Ie!==T||ue!==C||K!==R)&&(r.blendFuncSeparate(x[xe],x[Ie],x[ue],x[K]),b=xe,T=Ie,C=ue,R=K),(me.equals(A)===!1||be!==D)&&(r.blendColor(me.r,me.g,me.b,be),A.copy(me),D=be),m=F,E=!1}function k(F,ge){F.side===Ln?Te(r.CULL_FACE):oe(r.CULL_FACE);let xe=F.side===Cn;ge&&(xe=!xe),ce(xe),F.blending===Gs&&F.transparent===!1?I(Zi):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const Ie=F.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),j(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?oe(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function ce(F){S!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),S=F)}function P(F){F!==tg?(oe(r.CULL_FACE),F!==N&&(F===Zh?r.cullFace(r.BACK):F===ng?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),N=F}function se(F){F!==O&&(J&&r.lineWidth(F),O=F)}function j(F,ge,xe){F?(oe(r.POLYGON_OFFSET_FILL),(Y!==ge||$!==xe)&&(r.polygonOffset(ge,xe),Y=ge,$=xe)):Te(r.POLYGON_OFFSET_FILL)}function te(F){F?oe(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function ne(F){F===void 0&&(F=r.TEXTURE0+X-1),he!==F&&(r.activeTexture(F),he=F)}function B(F,ge,xe){xe===void 0&&(he===null?xe=r.TEXTURE0+X-1:xe=he);let Ie=L[xe];Ie===void 0&&(Ie={type:void 0,texture:void 0},L[xe]=Ie),(Ie.type!==F||Ie.texture!==ge)&&(he!==xe&&(r.activeTexture(xe),he=xe),r.bindTexture(F,ge||re[F]),Ie.type=F,Ie.texture=ge)}function y(){const F=L[he];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function v(){try{r.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function U(){try{r.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{r.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{r.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{r.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{r.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{r.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{r.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{r.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{r.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(F){nt.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),nt.copy(F))}function je(F){Be.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Be.copy(F))}function ze(F,ge){let xe=c.get(ge);xe===void 0&&(xe=new WeakMap,c.set(ge,xe));let Ie=xe.get(F);Ie===void 0&&(Ie=r.getUniformBlockIndex(ge,F.name),xe.set(F,Ie))}function ye(F,ge){const Ie=c.get(ge).get(F);l.get(ge)!==Ie&&(r.uniformBlockBinding(ge,Ie,F.__bindingPointIndex),l.set(ge,Ie))}function Qe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},he=null,L={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,b=null,T=null,M=null,C=null,R=null,A=new tt(0,0,0),D=0,E=!1,S=null,N=null,O=null,Y=null,$=null,nt.set(0,0,r.canvas.width,r.canvas.height),Be.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:Te,bindFramebuffer:le,drawBuffers:Ce,useProgram:Ye,setBlending:I,setMaterial:k,setFlipSided:ce,setCullFace:P,setLineWidth:se,setPolygonOffset:j,setScissorTest:te,activeTexture:ne,bindTexture:B,unbindTexture:y,compressedTexImage2D:v,compressedTexImage3D:U,texImage2D:Re,texImage3D:_e,updateUBOMapping:ze,uniformBlockBinding:ye,texStorage2D:ve,texStorage3D:Le,texSubImage2D:q,texSubImage3D:ae,compressedTexSubImage2D:Q,compressedTexSubImage3D:Fe,scissor:Ae,viewport:je,reset:Qe}}function wy(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,v){return f?new OffscreenCanvas(y,v):Tl("canvas")}function g(y,v,U){let q=1;const ae=B(y);if((ae.width>U||ae.height>U)&&(q=U/Math.max(ae.width,ae.height)),q<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const Q=Math.floor(q*ae.width),Fe=Math.floor(q*ae.height);h===void 0&&(h=_(Q,Fe));const ve=v?_(Q,Fe):h;return ve.width=Q,ve.height=Fe,ve.getContext("2d").drawImage(y,0,0,Q,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Q+"x"+Fe+")."),ve}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),y;return y}function m(y){return y.generateMipmaps}function p(y){r.generateMipmap(y)}function b(y){return y.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?r.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(y,v,U,q,ae=!1){if(y!==null){if(r[y]!==void 0)return r[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Q=v;if(v===r.RED&&(U===r.FLOAT&&(Q=r.R32F),U===r.HALF_FLOAT&&(Q=r.R16F),U===r.UNSIGNED_BYTE&&(Q=r.R8)),v===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&(Q=r.R8UI),U===r.UNSIGNED_SHORT&&(Q=r.R16UI),U===r.UNSIGNED_INT&&(Q=r.R32UI),U===r.BYTE&&(Q=r.R8I),U===r.SHORT&&(Q=r.R16I),U===r.INT&&(Q=r.R32I)),v===r.RG&&(U===r.FLOAT&&(Q=r.RG32F),U===r.HALF_FLOAT&&(Q=r.RG16F),U===r.UNSIGNED_BYTE&&(Q=r.RG8)),v===r.RG_INTEGER&&(U===r.UNSIGNED_BYTE&&(Q=r.RG8UI),U===r.UNSIGNED_SHORT&&(Q=r.RG16UI),U===r.UNSIGNED_INT&&(Q=r.RG32UI),U===r.BYTE&&(Q=r.RG8I),U===r.SHORT&&(Q=r.RG16I),U===r.INT&&(Q=r.RG32I)),v===r.RGB_INTEGER&&(U===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),U===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),U===r.UNSIGNED_INT&&(Q=r.RGB32UI),U===r.BYTE&&(Q=r.RGB8I),U===r.SHORT&&(Q=r.RGB16I),U===r.INT&&(Q=r.RGB32I)),v===r.RGBA_INTEGER&&(U===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),U===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),U===r.UNSIGNED_INT&&(Q=r.RGBA32UI),U===r.BYTE&&(Q=r.RGBA8I),U===r.SHORT&&(Q=r.RGBA16I),U===r.INT&&(Q=r.RGBA32I)),v===r.RGB&&(U===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),U===r.UNSIGNED_INT_10F_11F_11F_REV&&(Q=r.R11F_G11F_B10F)),v===r.RGBA){const Fe=ae?El:mt.getTransfer(q);U===r.FLOAT&&(Q=r.RGBA32F),U===r.HALF_FLOAT&&(Q=r.RGBA16F),U===r.UNSIGNED_BYTE&&(Q=Fe===yt?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(y,v){let U;return y?v===null||v===as||v===Ja?U=r.DEPTH24_STENCIL8:v===Li?U=r.DEPTH32F_STENCIL8:v===Ka&&(U=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===as||v===Ja?U=r.DEPTH_COMPONENT24:v===Li?U=r.DEPTH_COMPONENT32F:v===Ka&&(U=r.DEPTH_COMPONENT16),U}function C(y,v){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==ei&&y.minFilter!==Ii?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function R(y){const v=y.target;v.removeEventListener("dispose",R),D(v),v.isVideoTexture&&u.delete(v)}function A(y){const v=y.target;v.removeEventListener("dispose",A),S(v)}function D(y){const v=n.get(y);if(v.__webglInit===void 0)return;const U=y.source,q=d.get(U);if(q){const ae=q[v.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&E(y),Object.keys(q).length===0&&d.delete(U)}n.remove(y)}function E(y){const v=n.get(y);r.deleteTexture(v.__webglTexture);const U=y.source,q=d.get(U);delete q[v.__cacheKey],a.memory.textures--}function S(y){const v=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let ae=0;ae<v.__webglFramebuffer[q].length;ae++)r.deleteFramebuffer(v.__webglFramebuffer[q][ae]);else r.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)r.deleteFramebuffer(v.__webglFramebuffer[q]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=y.textures;for(let q=0,ae=U.length;q<ae;q++){const Q=n.get(U[q]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(U[q])}n.remove(y)}let N=0;function O(){N=0}function Y(){const y=N;return y>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+i.maxTextures),N+=1,y}function $(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function X(y,v){const U=n.get(y);if(y.isVideoTexture&&te(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&U.__version!==y.version){const q=y.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(U,y,v);return}}else y.isExternalTexture&&(U.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+v)}function J(y,v){const U=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&U.__version!==y.version){re(U,y,v);return}t.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+v)}function Z(y,v){const U=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&U.__version!==y.version){re(U,y,v);return}t.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+v)}function W(y,v){const U=n.get(y);if(y.version>0&&U.__version!==y.version){oe(U,y,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+v)}const he={[eu]:r.REPEAT,[Yr]:r.CLAMP_TO_EDGE,[tu]:r.MIRRORED_REPEAT},L={[ei]:r.NEAREST,[Eg]:r.NEAREST_MIPMAP_NEAREST,[So]:r.NEAREST_MIPMAP_LINEAR,[Ii]:r.LINEAR,[$l]:r.LINEAR_MIPMAP_NEAREST,[qr]:r.LINEAR_MIPMAP_LINEAR},Me={[wg]:r.NEVER,[Lg]:r.ALWAYS,[Cg]:r.LESS,[np]:r.LEQUAL,[Rg]:r.EQUAL,[Ig]:r.GEQUAL,[Pg]:r.GREATER,[Dg]:r.NOTEQUAL};function qe(y,v){if(v.type===Li&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ii||v.magFilter===$l||v.magFilter===So||v.magFilter===qr||v.minFilter===Ii||v.minFilter===$l||v.minFilter===So||v.minFilter===qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(y,r.TEXTURE_WRAP_S,he[v.wrapS]),r.texParameteri(y,r.TEXTURE_WRAP_T,he[v.wrapT]),(y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY)&&r.texParameteri(y,r.TEXTURE_WRAP_R,he[v.wrapR]),r.texParameteri(y,r.TEXTURE_MAG_FILTER,L[v.magFilter]),r.texParameteri(y,r.TEXTURE_MIN_FILTER,L[v.minFilter]),v.compareFunction&&(r.texParameteri(y,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(y,r.TEXTURE_COMPARE_FUNC,Me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ei||v.minFilter!==So&&v.minFilter!==qr||v.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");r.texParameterf(y,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function nt(y,v){let U=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",R));const q=v.source;let ae=d.get(q);ae===void 0&&(ae={},d.set(q,ae));const Q=$(v);if(Q!==y.__cacheKey){ae[Q]===void 0&&(ae[Q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,U=!0),ae[Q].usedTimes++;const Fe=ae[y.__cacheKey];Fe!==void 0&&(ae[y.__cacheKey].usedTimes--,Fe.usedTimes===0&&E(v)),y.__cacheKey=Q,y.__webglTexture=ae[Q].texture}return U}function Be(y,v,U){return Math.floor(Math.floor(y/U)/v)}function $e(y,v,U,q){const Q=y.updateRanges;if(Q.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,U,q,v.data);else{Q.sort((_e,Ae)=>_e.start-Ae.start);let Fe=0;for(let _e=1;_e<Q.length;_e++){const Ae=Q[Fe],je=Q[_e],ze=Ae.start+Ae.count,ye=Be(je.start,v.width,4),Qe=Be(Ae.start,v.width,4);je.start<=ze+1&&ye===Qe&&Be(je.start+je.count-1,v.width,4)===ye?Ae.count=Math.max(Ae.count,je.start+je.count-Ae.start):(++Fe,Q[Fe]=je)}Q.length=Fe+1;const ve=r.getParameter(r.UNPACK_ROW_LENGTH),Le=r.getParameter(r.UNPACK_SKIP_PIXELS),Re=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let _e=0,Ae=Q.length;_e<Ae;_e++){const je=Q[_e],ze=Math.floor(je.start/4),ye=Math.ceil(je.count/4),Qe=ze%v.width,F=Math.floor(ze/v.width),ge=ye,xe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Qe),r.pixelStorei(r.UNPACK_SKIP_ROWS,F),t.texSubImage2D(r.TEXTURE_2D,0,Qe,F,ge,xe,U,q,v.data)}y.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ve),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Le),r.pixelStorei(r.UNPACK_SKIP_ROWS,Re)}}function re(y,v,U){let q=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=r.TEXTURE_3D);const ae=nt(y,v),Q=v.source;t.bindTexture(q,y.__webglTexture,r.TEXTURE0+U);const Fe=n.get(Q);if(Q.version!==Fe.__version||ae===!0){t.activeTexture(r.TEXTURE0+U);const ve=mt.getPrimaries(mt.workingColorSpace),Le=v.colorSpace===dr?null:mt.getPrimaries(v.colorSpace),Re=v.colorSpace===dr||ve===Le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let _e=g(v.image,!1,i.maxTextureSize);_e=ne(v,_e);const Ae=s.convert(v.format,v.colorSpace),je=s.convert(v.type);let ze=T(v.internalFormat,Ae,je,v.colorSpace,v.isVideoTexture);qe(q,v);let ye;const Qe=v.mipmaps,F=v.isVideoTexture!==!0,ge=Fe.__version===void 0||ae===!0,xe=Q.dataReady,Ie=C(v,_e);if(v.isDepthTexture)ze=M(v.format===Qa,v.type),ge&&(F?t.texStorage2D(r.TEXTURE_2D,1,ze,_e.width,_e.height):t.texImage2D(r.TEXTURE_2D,0,ze,_e.width,_e.height,0,Ae,je,null));else if(v.isDataTexture)if(Qe.length>0){F&&ge&&t.texStorage2D(r.TEXTURE_2D,Ie,ze,Qe[0].width,Qe[0].height);for(let de=0,ue=Qe.length;de<ue;de++)ye=Qe[de],F?xe&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,ye.width,ye.height,Ae,je,ye.data):t.texImage2D(r.TEXTURE_2D,de,ze,ye.width,ye.height,0,Ae,je,ye.data);v.generateMipmaps=!1}else F?(ge&&t.texStorage2D(r.TEXTURE_2D,Ie,ze,_e.width,_e.height),xe&&$e(v,_e,Ae,je)):t.texImage2D(r.TEXTURE_2D,0,ze,_e.width,_e.height,0,Ae,je,_e.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){F&&ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,ze,Qe[0].width,Qe[0].height,_e.depth);for(let de=0,ue=Qe.length;de<ue;de++)if(ye=Qe[de],v.format!==Ei)if(Ae!==null)if(F){if(xe)if(v.layerUpdates.size>0){const K=Df(ye.width,ye.height,v.format,v.type);for(const me of v.layerUpdates){const be=ye.data.subarray(me*K/ye.data.BYTES_PER_ELEMENT,(me+1)*K/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,me,ye.width,ye.height,1,Ae,be)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,ye.width,ye.height,_e.depth,Ae,ye.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,de,ze,ye.width,ye.height,_e.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?xe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,ye.width,ye.height,_e.depth,Ae,je,ye.data):t.texImage3D(r.TEXTURE_2D_ARRAY,de,ze,ye.width,ye.height,_e.depth,0,Ae,je,ye.data)}else{F&&ge&&t.texStorage2D(r.TEXTURE_2D,Ie,ze,Qe[0].width,Qe[0].height);for(let de=0,ue=Qe.length;de<ue;de++)ye=Qe[de],v.format!==Ei?Ae!==null?F?xe&&t.compressedTexSubImage2D(r.TEXTURE_2D,de,0,0,ye.width,ye.height,Ae,ye.data):t.compressedTexImage2D(r.TEXTURE_2D,de,ze,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?xe&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,ye.width,ye.height,Ae,je,ye.data):t.texImage2D(r.TEXTURE_2D,de,ze,ye.width,ye.height,0,Ae,je,ye.data)}else if(v.isDataArrayTexture)if(F){if(ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,ze,_e.width,_e.height,_e.depth),xe)if(v.layerUpdates.size>0){const de=Df(_e.width,_e.height,v.format,v.type);for(const ue of v.layerUpdates){const K=_e.data.subarray(ue*de/_e.data.BYTES_PER_ELEMENT,(ue+1)*de/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ue,_e.width,_e.height,1,Ae,je,K)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ae,je,_e.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,_e.width,_e.height,_e.depth,0,Ae,je,_e.data);else if(v.isData3DTexture)F?(ge&&t.texStorage3D(r.TEXTURE_3D,Ie,ze,_e.width,_e.height,_e.depth),xe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ae,je,_e.data)):t.texImage3D(r.TEXTURE_3D,0,ze,_e.width,_e.height,_e.depth,0,Ae,je,_e.data);else if(v.isFramebufferTexture){if(ge)if(F)t.texStorage2D(r.TEXTURE_2D,Ie,ze,_e.width,_e.height);else{let de=_e.width,ue=_e.height;for(let K=0;K<Ie;K++)t.texImage2D(r.TEXTURE_2D,K,ze,de,ue,0,Ae,je,null),de>>=1,ue>>=1}}else if(Qe.length>0){if(F&&ge){const de=B(Qe[0]);t.texStorage2D(r.TEXTURE_2D,Ie,ze,de.width,de.height)}for(let de=0,ue=Qe.length;de<ue;de++)ye=Qe[de],F?xe&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,Ae,je,ye):t.texImage2D(r.TEXTURE_2D,de,ze,Ae,je,ye);v.generateMipmaps=!1}else if(F){if(ge){const de=B(_e);t.texStorage2D(r.TEXTURE_2D,Ie,ze,de.width,de.height)}xe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,je,_e)}else t.texImage2D(r.TEXTURE_2D,0,ze,Ae,je,_e);m(v)&&p(q),Fe.__version=Q.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function oe(y,v,U){if(v.image.length!==6)return;const q=nt(y,v),ae=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,y.__webglTexture,r.TEXTURE0+U);const Q=n.get(ae);if(ae.version!==Q.__version||q===!0){t.activeTexture(r.TEXTURE0+U);const Fe=mt.getPrimaries(mt.workingColorSpace),ve=v.colorSpace===dr?null:mt.getPrimaries(v.colorSpace),Le=v.colorSpace===dr||Fe===ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Re=v.isCompressedTexture||v.image[0].isCompressedTexture,_e=v.image[0]&&v.image[0].isDataTexture,Ae=[];for(let ue=0;ue<6;ue++)!Re&&!_e?Ae[ue]=g(v.image[ue],!0,i.maxCubemapSize):Ae[ue]=_e?v.image[ue].image:v.image[ue],Ae[ue]=ne(v,Ae[ue]);const je=Ae[0],ze=s.convert(v.format,v.colorSpace),ye=s.convert(v.type),Qe=T(v.internalFormat,ze,ye,v.colorSpace),F=v.isVideoTexture!==!0,ge=Q.__version===void 0||q===!0,xe=ae.dataReady;let Ie=C(v,je);qe(r.TEXTURE_CUBE_MAP,v);let de;if(Re){F&&ge&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,Qe,je.width,je.height);for(let ue=0;ue<6;ue++){de=Ae[ue].mipmaps;for(let K=0;K<de.length;K++){const me=de[K];v.format!==Ei?ze!==null?F?xe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,K,0,0,me.width,me.height,ze,me.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,K,Qe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,K,0,0,me.width,me.height,ze,ye,me.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,K,Qe,me.width,me.height,0,ze,ye,me.data)}}}else{if(de=v.mipmaps,F&&ge){de.length>0&&Ie++;const ue=B(Ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,Qe,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(_e){F?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ae[ue].width,Ae[ue].height,ze,ye,Ae[ue].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Qe,Ae[ue].width,Ae[ue].height,0,ze,ye,Ae[ue].data);for(let K=0;K<de.length;K++){const be=de[K].image[ue].image;F?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,K+1,0,0,be.width,be.height,ze,ye,be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,K+1,Qe,be.width,be.height,0,ze,ye,be.data)}}else{F?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ze,ye,Ae[ue]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Qe,ze,ye,Ae[ue]);for(let K=0;K<de.length;K++){const me=de[K];F?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,K+1,0,0,ze,ye,me.image[ue]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,K+1,Qe,ze,ye,me.image[ue])}}}m(v)&&p(r.TEXTURE_CUBE_MAP),Q.__version=ae.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function Te(y,v,U,q,ae,Q){const Fe=s.convert(U.format,U.colorSpace),ve=s.convert(U.type),Le=T(U.internalFormat,Fe,ve,U.colorSpace),Re=n.get(v),_e=n.get(U);if(_e.__renderTarget=v,!Re.__hasExternalTextures){const Ae=Math.max(1,v.width>>Q),je=Math.max(1,v.height>>Q);ae===r.TEXTURE_3D||ae===r.TEXTURE_2D_ARRAY?t.texImage3D(ae,Q,Le,Ae,je,v.depth,0,Fe,ve,null):t.texImage2D(ae,Q,Le,Ae,je,0,Fe,ve,null)}t.bindFramebuffer(r.FRAMEBUFFER,y),j(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,ae,_e.__webglTexture,0,se(v)):(ae===r.TEXTURE_2D||ae>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,ae,_e.__webglTexture,Q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function le(y,v,U){if(r.bindRenderbuffer(r.RENDERBUFFER,y),v.depthBuffer){const q=v.depthTexture,ae=q&&q.isDepthTexture?q.type:null,Q=M(v.stencilBuffer,ae),Fe=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=se(v);j(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve,Q,v.width,v.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,ve,Q,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,Q,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Fe,r.RENDERBUFFER,y)}else{const q=v.textures;for(let ae=0;ae<q.length;ae++){const Q=q[ae],Fe=s.convert(Q.format,Q.colorSpace),ve=s.convert(Q.type),Le=T(Q.internalFormat,Fe,ve,Q.colorSpace),Re=se(v);U&&j(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,Le,v.width,v.height):j(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re,Le,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,Le,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ce(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(v.depthTexture);q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);const ae=q.__webglTexture,Q=se(v);if(v.depthTexture.format===Za)j(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ae,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ae,0);else if(v.depthTexture.format===Qa)j(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ae,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Ye(y){const v=n.get(y),U=y.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==y.depthTexture){const q=y.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const ae=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",ae)};q.addEventListener("dispose",ae),v.__depthDisposeCallback=ae}v.__boundDepthTexture=q}if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const q=y.texture.mipmaps;q&&q.length>0?Ce(v.__webglFramebuffer[0],y):Ce(v.__webglFramebuffer,y)}else if(U){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=r.createRenderbuffer(),le(v.__webglDepthbuffer[q],y,!1);else{const ae=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,Q)}}else{const q=y.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),le(v.__webglDepthbuffer,y,!1);else{const ae=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,Q)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function G(y,v,U){const q=n.get(y);v!==void 0&&Te(q.__webglFramebuffer,y,y.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&Ye(y)}function x(y){const v=y.texture,U=n.get(y),q=n.get(v);y.addEventListener("dispose",A);const ae=y.textures,Q=y.isWebGLCubeRenderTarget===!0,Fe=ae.length>1;if(Fe||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=v.version,a.memory.textures++),Q){U.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[ve]=[];for(let Le=0;Le<v.mipmaps.length;Le++)U.__webglFramebuffer[ve][Le]=r.createFramebuffer()}else U.__webglFramebuffer[ve]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let ve=0;ve<v.mipmaps.length;ve++)U.__webglFramebuffer[ve]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(Fe)for(let ve=0,Le=ae.length;ve<Le;ve++){const Re=n.get(ae[ve]);Re.__webglTexture===void 0&&(Re.__webglTexture=r.createTexture(),a.memory.textures++)}if(y.samples>0&&j(y)===!1){U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ve=0;ve<ae.length;ve++){const Le=ae[ve];U.__webglColorRenderbuffer[ve]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[ve]);const Re=s.convert(Le.format,Le.colorSpace),_e=s.convert(Le.type),Ae=T(Le.internalFormat,Re,_e,Le.colorSpace,y.isXRRenderTarget===!0),je=se(y);r.renderbufferStorageMultisample(r.RENDERBUFFER,je,Ae,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,U.__webglColorRenderbuffer[ve])}r.bindRenderbuffer(r.RENDERBUFFER,null),y.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),le(U.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),qe(r.TEXTURE_CUBE_MAP,v);for(let ve=0;ve<6;ve++)if(v.mipmaps&&v.mipmaps.length>0)for(let Le=0;Le<v.mipmaps.length;Le++)Te(U.__webglFramebuffer[ve][Le],y,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Le);else Te(U.__webglFramebuffer[ve],y,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(v)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let ve=0,Le=ae.length;ve<Le;ve++){const Re=ae[ve],_e=n.get(Re);let Ae=r.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(Ae=y.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ae,_e.__webglTexture),qe(Ae,Re),Te(U.__webglFramebuffer,y,Re,r.COLOR_ATTACHMENT0+ve,Ae,0),m(Re)&&p(Ae)}t.unbindTexture()}else{let ve=r.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ve=y.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ve,q.__webglTexture),qe(ve,v),v.mipmaps&&v.mipmaps.length>0)for(let Le=0;Le<v.mipmaps.length;Le++)Te(U.__webglFramebuffer[Le],y,v,r.COLOR_ATTACHMENT0,ve,Le);else Te(U.__webglFramebuffer,y,v,r.COLOR_ATTACHMENT0,ve,0);m(v)&&p(ve),t.unbindTexture()}y.depthBuffer&&Ye(y)}function I(y){const v=y.textures;for(let U=0,q=v.length;U<q;U++){const ae=v[U];if(m(ae)){const Q=b(y),Fe=n.get(ae).__webglTexture;t.bindTexture(Q,Fe),p(Q),t.unbindTexture()}}}const k=[],ce=[];function P(y){if(y.samples>0){if(j(y)===!1){const v=y.textures,U=y.width,q=y.height;let ae=r.COLOR_BUFFER_BIT;const Q=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Fe=n.get(y),ve=v.length>1;if(ve)for(let Re=0;Re<v.length;Re++)t.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const Le=y.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Re=0;Re<v.length;Re++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(ae|=r.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(ae|=r.STENCIL_BUFFER_BIT)),ve){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Fe.__webglColorRenderbuffer[Re]);const _e=n.get(v[Re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,_e,0)}r.blitFramebuffer(0,0,U,q,0,0,U,q,ae,r.NEAREST),l===!0&&(k.length=0,ce.length=0,k.push(r.COLOR_ATTACHMENT0+Re),y.depthBuffer&&y.resolveDepthBuffer===!1&&(k.push(Q),ce.push(Q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ce)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,k))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ve)for(let Re=0;Re<v.length;Re++){t.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,Fe.__webglColorRenderbuffer[Re]);const _e=n.get(v[Re]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,_e,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const v=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function se(y){return Math.min(i.maxSamples,y.samples)}function j(y){const v=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function te(y){const v=a.render.frame;u.get(y)!==v&&(u.set(y,v),y.update())}function ne(y,v){const U=y.colorSpace,q=y.format,ae=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||U!==Qs&&U!==dr&&(mt.getTransfer(U)===yt?(q!==Ei||ae!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function B(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=J,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=G,this.setupRenderTarget=x,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=j}function Cy(r,e){function t(n,i=dr){let s;const a=mt.getTransfer(i);if(n===zi)return r.UNSIGNED_BYTE;if(n===sh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ah)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Jd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Zd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===jd)return r.BYTE;if(n===Kd)return r.SHORT;if(n===Ka)return r.UNSIGNED_SHORT;if(n===rh)return r.INT;if(n===as)return r.UNSIGNED_INT;if(n===Li)return r.FLOAT;if(n===Bi)return r.HALF_FLOAT;if(n===Qd)return r.ALPHA;if(n===ep)return r.RGB;if(n===Ei)return r.RGBA;if(n===Za)return r.DEPTH_COMPONENT;if(n===Qa)return r.DEPTH_STENCIL;if(n===oh)return r.RED;if(n===lh)return r.RED_INTEGER;if(n===tp)return r.RG;if(n===ch)return r.RG_INTEGER;if(n===uh)return r.RGBA_INTEGER;if(n===ll||n===cl||n===ul||n===hl)if(a===yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ll)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ll)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ul)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nu||n===iu||n===ru||n===su)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===nu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===iu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ru)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===su)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===au||n===ou||n===lu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===au||n===ou)return a===yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===lu)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cu||n===uu||n===hu||n===fu||n===du||n===pu||n===mu||n===gu||n===_u||n===vu||n===xu||n===Mu||n===yu||n===Su)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===cu)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uu)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hu)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fu)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===du)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pu)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mu)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gu)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_u)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vu)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xu)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mu)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yu)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Su)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eu||n===bu||n===Tu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Eu)return a===yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Au||n===wu||n===Cu||n===Ru)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Au)return s.COMPRESSED_RED_RGTC1_EXT;if(n===wu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ru)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ja?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Py=`
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

}`;class Dy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new pp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new wn({vertexShader:Ry,fragmentShader:Py,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Mo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Iy extends la{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const g=typeof XRWebGLBinding<"u",m=new Dy,p={},b=t.getContextAttributes();let T=null,M=null;const C=[],R=[],A=new We;let D=null;const E=new $n;E.viewport=new St;const S=new $n;S.viewport=new St;const N=[E,S],O=new Z_;let Y=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let oe=C[re];return oe===void 0&&(oe=new mc,C[re]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(re){let oe=C[re];return oe===void 0&&(oe=new mc,C[re]=oe),oe.getGripSpace()},this.getHand=function(re){let oe=C[re];return oe===void 0&&(oe=new mc,C[re]=oe),oe.getHandSpace()};function X(re){const oe=R.indexOf(re.inputSource);if(oe===-1)return;const Te=C[oe];Te!==void 0&&(Te.update(re.inputSource,re.frame,c||a),Te.dispatchEvent({type:re.type,data:re.inputSource}))}function J(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",Z);for(let re=0;re<C.length;re++){const oe=R[re];oe!==null&&(R[re]=null,C[re].disconnect(oe))}Y=null,$=null,m.reset();for(const re in p)delete p[re];e.setRenderTarget(T),f=null,d=null,h=null,i=null,M=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(re){if(i=re,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",J),i.addEventListener("inputsourceschange",Z),b.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,le=null,Ce=null;b.depth&&(Ce=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=b.stencil?Qa:Za,le=b.stencil?Ja:as);const Ye={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ye),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new gi(d.textureWidth,d.textureHeight,{format:Ei,type:zi,depthTexture:new dp(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Te={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,Te),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new gi(f.framebufferWidth,f.framebufferHeight,{format:Ei,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),$e.setContext(i),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(re){for(let oe=0;oe<re.removed.length;oe++){const Te=re.removed[oe],le=R.indexOf(Te);le>=0&&(R[le]=null,C[le].disconnect(Te))}for(let oe=0;oe<re.added.length;oe++){const Te=re.added[oe];let le=R.indexOf(Te);if(le===-1){for(let Ye=0;Ye<C.length;Ye++)if(Ye>=R.length){R.push(Te),le=Ye;break}else if(R[Ye]===null){R[Ye]=Te,le=Ye;break}if(le===-1)break}const Ce=C[le];Ce&&Ce.connect(Te)}}const W=new z,he=new z;function L(re,oe,Te){W.setFromMatrixPosition(oe.matrixWorld),he.setFromMatrixPosition(Te.matrixWorld);const le=W.distanceTo(he),Ce=oe.projectionMatrix.elements,Ye=Te.projectionMatrix.elements,G=Ce[14]/(Ce[10]-1),x=Ce[14]/(Ce[10]+1),I=(Ce[9]+1)/Ce[5],k=(Ce[9]-1)/Ce[5],ce=(Ce[8]-1)/Ce[0],P=(Ye[8]+1)/Ye[0],se=G*ce,j=G*P,te=le/(-ce+P),ne=te*-ce;if(oe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ne),re.translateZ(te),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ce[10]===-1)re.projectionMatrix.copy(oe.projectionMatrix),re.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const B=G+te,y=x+te,v=se-ne,U=j+(le-ne),q=I*x/y*B,ae=k*x/y*B;re.projectionMatrix.makePerspective(v,U,q,ae,B,y),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function Me(re,oe){oe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(oe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(i===null)return;let oe=re.near,Te=re.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),O.near=S.near=E.near=oe,O.far=S.far=E.far=Te,(Y!==O.near||$!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),Y=O.near,$=O.far),O.layers.mask=re.layers.mask|6,E.layers.mask=O.layers.mask&3,S.layers.mask=O.layers.mask&5;const le=re.parent,Ce=O.cameras;Me(O,le);for(let Ye=0;Ye<Ce.length;Ye++)Me(Ce[Ye],le);Ce.length===2?L(O,E,S):O.projectionMatrix.copy(E.projectionMatrix),qe(re,O,le)};function qe(re,oe,Te){Te===null?re.matrix.copy(oe.matrixWorld):(re.matrix.copy(Te.matrixWorld),re.matrix.invert(),re.matrix.multiply(oe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(oe.projectionMatrix),re.projectionMatrixInverse.copy(oe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=eo*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(re){l=re,d!==null&&(d.fixedFoveation=re),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=re)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(re){return p[re]};let nt=null;function Be(re,oe){if(u=oe.getViewerPose(c||a),_=oe,u!==null){const Te=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let le=!1;Te.length!==O.cameras.length&&(O.cameras.length=0,le=!0);for(let x=0;x<Te.length;x++){const I=Te[x];let k=null;if(f!==null)k=f.getViewport(I);else{const P=h.getViewSubImage(d,I);k=P.viewport,x===0&&(e.setRenderTargetTextures(M,P.colorTexture,P.depthStencilTexture),e.setRenderTarget(M))}let ce=N[x];ce===void 0&&(ce=new $n,ce.layers.enable(x),ce.viewport=new St,N[x]=ce),ce.matrix.fromArray(I.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(I.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(k.x,k.y,k.width,k.height),x===0&&(O.matrix.copy(ce.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),le===!0&&O.cameras.push(ce)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const x=h.getDepthInformation(Te[0]);x&&x.isValid&&x.texture&&m.init(x,i.renderState)}if(Ce&&Ce.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let x=0;x<Te.length;x++){const I=Te[x].camera;if(I){let k=p[I];k||(k=new pp,p[I]=k);const ce=h.getCameraImage(I);k.sourceTexture=ce}}}}for(let Te=0;Te<C.length;Te++){const le=R[Te],Ce=C[Te];le!==null&&Ce!==void 0&&Ce.update(le,oe,c||a)}nt&&nt(re,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),_=null}const $e=new Mp;$e.setAnimationLoop(Be),this.setAnimationLoop=function(re){nt=re},this.dispose=function(){}}}const Or=new Ti,Ly=new Ct;function Ny(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,cp(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,T,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),T=b.envMap,M=b.envMapRotation;T&&(m.envMap.value=T,Or.copy(M),Or.x*=-1,Or.y*=-1,Or.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),m.envMapRotation.value.setFromMatrix4(Ly.makeRotationFromEuler(Or)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Uy(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const M=T.program;n.uniformBlockBinding(b,M)}function c(b,T){let M=i[b.id];M===void 0&&(_(b),M=u(b),i[b.id]=M,b.addEventListener("dispose",m));const C=T.program;n.updateUBOMapping(b,C);const R=e.render.frame;s[b.id]!==R&&(d(b),s[b.id]=R)}function u(b){const T=h();b.__bindingPointIndex=T;const M=r.createBuffer(),C=b.__size,R=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,C,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,M),M}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const T=i[b.id],M=b.uniforms,C=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let R=0,A=M.length;R<A;R++){const D=Array.isArray(M[R])?M[R]:[M[R]];for(let E=0,S=D.length;E<S;E++){const N=D[E];if(f(N,R,E,C)===!0){const O=N.__offset,Y=Array.isArray(N.value)?N.value:[N.value];let $=0;for(let X=0;X<Y.length;X++){const J=Y[X],Z=g(J);typeof J=="number"||typeof J=="boolean"?(N.__data[0]=J,r.bufferSubData(r.UNIFORM_BUFFER,O+$,N.__data)):J.isMatrix3?(N.__data[0]=J.elements[0],N.__data[1]=J.elements[1],N.__data[2]=J.elements[2],N.__data[3]=0,N.__data[4]=J.elements[3],N.__data[5]=J.elements[4],N.__data[6]=J.elements[5],N.__data[7]=0,N.__data[8]=J.elements[6],N.__data[9]=J.elements[7],N.__data[10]=J.elements[8],N.__data[11]=0):(J.toArray(N.__data,$),$+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(b,T,M,C){const R=b.value,A=T+"_"+M;if(C[A]===void 0)return typeof R=="number"||typeof R=="boolean"?C[A]=R:C[A]=R.clone(),!0;{const D=C[A];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return C[A]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function _(b){const T=b.uniforms;let M=0;const C=16;for(let A=0,D=T.length;A<D;A++){const E=Array.isArray(T[A])?T[A]:[T[A]];for(let S=0,N=E.length;S<N;S++){const O=E[S],Y=Array.isArray(O.value)?O.value:[O.value];for(let $=0,X=Y.length;$<X;$++){const J=Y[$],Z=g(J),W=M%C,he=W%Z.boundary,L=W+he;M+=he,L!==0&&C-L<Z.storage&&(M+=C-L),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=Z.storage}}}const R=M%C;return R>0&&(M+=C-R),b.__size=M,b.__cache={},this}function g(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function m(b){const T=b.target;T.removeEventListener("dispose",m);const M=a.indexOf(T.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function p(){for(const b in i)r.deleteBuffer(i[b]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Oy{constructor(e={}){const{canvas:t=Kg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const b=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let C=!1;this._outputColorSpace=In;let R=0,A=0,D=null,E=-1,S=null;const N=new St,O=new St;let Y=null;const $=new tt(0);let X=0,J=t.width,Z=t.height,W=1,he=null,L=null;const Me=new St(0,0,J,Z),qe=new St(0,0,J,Z);let nt=!1;const Be=new mh;let $e=!1,re=!1;const oe=new Ct,Te=new z,le=new St,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function G(){return D===null?W:1}let x=n;function I(w,V){return t.getContext(w,V)}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kl}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",de,!1),x===null){const V="webgl2";if(x=I(V,w),x===null)throw I(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let k,ce,P,se,j,te,ne,B,y,v,U,q,ae,Q,Fe,ve,Le,Re,_e,Ae,je,ze,ye,Qe;function F(){k=new Yx(x),k.init(),ze=new Cy(x,k),ce=new kx(x,k,e,ze),P=new Ay(x,k),ce.reversedDepthBuffer&&d&&P.buffers.depth.setReversed(!0),se=new jx(x),j=new dy,te=new wy(x,k,P,j,ce,ze,se),ne=new Gx(M),B=new Xx(M),y=new t0(x),ye=new Fx(x,y),v=new qx(x,y,se,ye),U=new Jx(x,v,y,se),_e=new Kx(x,ce,te),ve=new zx(j),q=new fy(M,ne,B,k,ce,ye,ve),ae=new Ny(M,j),Q=new my,Fe=new yy(k),Re=new Ox(M,ne,B,P,U,f,l),Le=new by(M,U,ce),Qe=new Uy(x,se,ce,P),Ae=new Bx(x,k,se),je=new $x(x,k,se),se.programs=q.programs,M.capabilities=ce,M.extensions=k,M.properties=j,M.renderLists=Q,M.shadowMap=Le,M.state=P,M.info=se}F();const ge=new Iy(M,x);this.xr=ge,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const w=k.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=k.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(J,Z,!1))},this.getSize=function(w){return w.set(J,Z)},this.setSize=function(w,V,ee=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,Z=V,t.width=Math.floor(w*W),t.height=Math.floor(V*W),ee===!0&&(t.style.width=w+"px",t.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(J*W,Z*W).floor()},this.setDrawingBufferSize=function(w,V,ee){J=w,Z=V,W=ee,t.width=Math.floor(w*ee),t.height=Math.floor(V*ee),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(Me)},this.setViewport=function(w,V,ee,ie){w.isVector4?Me.set(w.x,w.y,w.z,w.w):Me.set(w,V,ee,ie),P.viewport(N.copy(Me).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(qe)},this.setScissor=function(w,V,ee,ie){w.isVector4?qe.set(w.x,w.y,w.z,w.w):qe.set(w,V,ee,ie),P.scissor(O.copy(qe).multiplyScalar(W).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(w){P.setScissorTest(nt=w)},this.setOpaqueSort=function(w){he=w},this.setTransparentSort=function(w){L=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,ee=!0){let ie=0;if(w){let H=!1;if(D!==null){const fe=D.texture.format;H=fe===uh||fe===ch||fe===lh}if(H){const fe=D.texture.type,we=fe===zi||fe===as||fe===Ka||fe===Ja||fe===sh||fe===ah,Ve=Re.getClearColor(),ke=Re.getClearAlpha(),Ze=Ve.r,Je=Ve.g,Ke=Ve.b;we?(_[0]=Ze,_[1]=Je,_[2]=Ke,_[3]=ke,x.clearBufferuiv(x.COLOR,0,_)):(g[0]=Ze,g[1]=Je,g[2]=Ke,g[3]=ke,x.clearBufferiv(x.COLOR,0,g))}else ie|=x.COLOR_BUFFER_BIT}V&&(ie|=x.DEPTH_BUFFER_BIT),ee&&(ie|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Re.dispose(),Q.dispose(),Fe.dispose(),j.dispose(),ne.dispose(),B.dispose(),U.dispose(),ye.dispose(),Qe.dispose(),q.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Ge),ge.removeEventListener("sessionend",Se),Pe.stop()};function xe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const w=se.autoReset,V=Le.enabled,ee=Le.autoUpdate,ie=Le.needsUpdate,H=Le.type;F(),se.autoReset=w,Le.enabled=V,Le.autoUpdate=ee,Le.needsUpdate=ie,Le.type=H}function de(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ue(w){const V=w.target;V.removeEventListener("dispose",ue),K(V)}function K(w){me(w),j.remove(w)}function me(w){const V=j.get(w).programs;V!==void 0&&(V.forEach(function(ee){q.releaseProgram(ee)}),w.isShaderMaterial&&q.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,ee,ie,H,fe){V===null&&(V=Ce);const we=H.isMesh&&H.matrixWorld.determinant()<0,Ve=xt(w,V,ee,ie,H);P.setMaterial(ie,we);let ke=ee.index,Ze=1;if(ie.wireframe===!0){if(ke=v.getWireframeAttribute(ee),ke===void 0)return;Ze=2}const Je=ee.drawRange,Ke=ee.attributes.position;let rt=Je.start*Ze,dt=(Je.start+Je.count)*Ze;fe!==null&&(rt=Math.max(rt,fe.start*Ze),dt=Math.min(dt,(fe.start+fe.count)*Ze)),ke!==null?(rt=Math.max(rt,0),dt=Math.min(dt,ke.count)):Ke!=null&&(rt=Math.max(rt,0),dt=Math.min(dt,Ke.count));const zt=dt-rt;if(zt<0||zt===1/0)return;ye.setup(H,ie,Ve,ee,ke);let Dt,Tt=Ae;if(ke!==null&&(Dt=y.get(ke),Tt=je,Tt.setIndex(Dt)),H.isMesh)ie.wireframe===!0?(P.setLineWidth(ie.wireframeLinewidth*G()),Tt.setMode(x.LINES)):Tt.setMode(x.TRIANGLES);else if(H.isLine){let et=ie.linewidth;et===void 0&&(et=1),P.setLineWidth(et*G()),H.isLineSegments?Tt.setMode(x.LINES):H.isLineLoop?Tt.setMode(x.LINE_LOOP):Tt.setMode(x.LINE_STRIP)}else H.isPoints?Tt.setMode(x.POINTS):H.isSprite&&Tt.setMode(x.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)to("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(k.get("WEBGL_multi_draw"))Tt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const et=H._multiDrawStarts,Ut=H._multiDrawCounts,gt=H._multiDrawCount,Gn=ke?y.get(ke).bytesPerElement:1,ds=j.get(ie).currentProgram.getUniforms();for(let Vn=0;Vn<gt;Vn++)ds.setValue(x,"_gl_DrawID",Vn),Tt.render(et[Vn]/Gn,Ut[Vn])}else if(H.isInstancedMesh)Tt.renderInstances(rt,zt,H.count);else if(ee.isInstancedBufferGeometry){const et=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ut=Math.min(ee.instanceCount,et);Tt.renderInstances(rt,zt,Ut)}else Tt.render(rt,zt)};function be(w,V,ee){w.transparent===!0&&w.side===Ln&&w.forceSinglePass===!1?(w.side=Cn,w.needsUpdate=!0,Vt(w,V,ee),w.side=Er,w.needsUpdate=!0,Vt(w,V,ee),w.side=Ln):Vt(w,V,ee)}this.compile=function(w,V,ee=null){ee===null&&(ee=w),p=Fe.get(ee),p.init(V),T.push(p),ee.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),w!==ee&&w.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const ie=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const fe=H.material;if(fe)if(Array.isArray(fe))for(let we=0;we<fe.length;we++){const Ve=fe[we];be(Ve,ee,H),ie.add(Ve)}else be(fe,ee,H),ie.add(fe)}),p=T.pop(),ie},this.compileAsync=function(w,V,ee=null){const ie=this.compile(w,V,ee);return new Promise(H=>{function fe(){if(ie.forEach(function(we){j.get(we).currentProgram.isReady()&&ie.delete(we)}),ie.size===0){H(w);return}setTimeout(fe,10)}k.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let pe=null;function De(w){pe&&pe(w)}function Ge(){Pe.stop()}function Se(){Pe.start()}const Pe=new Mp;Pe.setAnimationLoop(De),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(w){pe=w,ge.setAnimationLoop(w),w===null?Pe.stop():Pe.start()},ge.addEventListener("sessionstart",Ge),ge.addEventListener("sessionend",Se),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(V),V=ge.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,V,D),p=Fe.get(w,T.length),p.init(V),T.push(p),oe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Be.setFromProjectionMatrix(oe,Ni,V.reversedDepth),re=this.localClippingEnabled,$e=ve.init(this.clippingPlanes,re),m=Q.get(w,b.length),m.init(),b.push(m),ge.enabled===!0&&ge.isPresenting===!0){const fe=M.xr.getDepthSensingMesh();fe!==null&&Oe(fe,V,-1/0,M.sortObjects)}Oe(w,V,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(he,L),Ye=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,Ye&&Re.addToRenderList(m,w),this.info.render.frame++,$e===!0&&ve.beginShadows();const ee=p.state.shadowsArray;Le.render(ee,w,V),$e===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=m.opaque,H=m.transmissive;if(p.setupLights(),V.isArrayCamera){const fe=V.cameras;if(H.length>0)for(let we=0,Ve=fe.length;we<Ve;we++){const ke=fe[we];_t(ie,H,w,ke)}Ye&&Re.render(w);for(let we=0,Ve=fe.length;we<Ve;we++){const ke=fe[we];Xe(m,w,ke,ke.viewport)}}else H.length>0&&_t(ie,H,w,V),Ye&&Re.render(w),Xe(m,w,V);D!==null&&A===0&&(te.updateMultisampleRenderTarget(D),te.updateRenderTargetMipmap(D)),w.isScene===!0&&w.onAfterRender(M,w,V),ye.resetDefaultState(),E=-1,S=null,T.pop(),T.length>0?(p=T[T.length-1],$e===!0&&ve.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Oe(w,V,ee,ie){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)ee=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Be.intersectsSprite(w)){ie&&le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(oe);const we=U.update(w),Ve=w.material;Ve.visible&&m.push(w,we,Ve,ee,le.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Be.intersectsObject(w))){const we=U.update(w),Ve=w.material;if(ie&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),le.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),le.copy(we.boundingSphere.center)),le.applyMatrix4(w.matrixWorld).applyMatrix4(oe)),Array.isArray(Ve)){const ke=we.groups;for(let Ze=0,Je=ke.length;Ze<Je;Ze++){const Ke=ke[Ze],rt=Ve[Ke.materialIndex];rt&&rt.visible&&m.push(w,we,rt,ee,le.z,Ke)}}else Ve.visible&&m.push(w,we,Ve,ee,le.z,null)}}const fe=w.children;for(let we=0,Ve=fe.length;we<Ve;we++)Oe(fe[we],V,ee,ie)}function Xe(w,V,ee,ie){const H=w.opaque,fe=w.transmissive,we=w.transparent;p.setupLightsView(ee),$e===!0&&ve.setGlobalState(M.clippingPlanes,ee),ie&&P.viewport(N.copy(ie)),H.length>0&&it(H,V,ee),fe.length>0&&it(fe,V,ee),we.length>0&&it(we,V,ee),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function _t(w,V,ee,ie){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ie.id]===void 0&&(p.state.transmissionRenderTarget[ie.id]=new gi(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")||k.has("EXT_color_buffer_float")?Bi:zi,minFilter:qr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const fe=p.state.transmissionRenderTarget[ie.id],we=ie.viewport||N;fe.setSize(we.z*M.transmissionResolutionScale,we.w*M.transmissionResolutionScale);const Ve=M.getRenderTarget(),ke=M.getActiveCubeFace(),Ze=M.getActiveMipmapLevel();M.setRenderTarget(fe),M.getClearColor($),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),Ye&&Re.render(ee);const Je=M.toneMapping;M.toneMapping=xr;const Ke=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),p.setupLightsView(ie),$e===!0&&ve.setGlobalState(M.clippingPlanes,ie),it(w,ee,ie),te.updateMultisampleRenderTarget(fe),te.updateRenderTargetMipmap(fe),k.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let dt=0,zt=V.length;dt<zt;dt++){const Dt=V[dt],Tt=Dt.object,et=Dt.geometry,Ut=Dt.material,gt=Dt.group;if(Ut.side===Ln&&Tt.layers.test(ie.layers)){const Gn=Ut.side;Ut.side=Cn,Ut.needsUpdate=!0,Et(Tt,ee,ie,et,Ut,gt),Ut.side=Gn,Ut.needsUpdate=!0,rt=!0}}rt===!0&&(te.updateMultisampleRenderTarget(fe),te.updateRenderTargetMipmap(fe))}M.setRenderTarget(Ve,ke,Ze),M.setClearColor($,X),Ke!==void 0&&(ie.viewport=Ke),M.toneMapping=Je}function it(w,V,ee){const ie=V.isScene===!0?V.overrideMaterial:null;for(let H=0,fe=w.length;H<fe;H++){const we=w[H],Ve=we.object,ke=we.geometry,Ze=we.group;let Je=we.material;Je.allowOverride===!0&&ie!==null&&(Je=ie),Ve.layers.test(ee.layers)&&Et(Ve,V,ee,ke,Je,Ze)}}function Et(w,V,ee,ie,H,fe){w.onBeforeRender(M,V,ee,ie,H,fe),w.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(M,V,ee,ie,w,fe),H.transparent===!0&&H.side===Ln&&H.forceSinglePass===!1?(H.side=Cn,H.needsUpdate=!0,M.renderBufferDirect(ee,V,ie,H,w,fe),H.side=Er,H.needsUpdate=!0,M.renderBufferDirect(ee,V,ie,H,w,fe),H.side=Ln):M.renderBufferDirect(ee,V,ie,H,w,fe),w.onAfterRender(M,V,ee,ie,H,fe)}function Vt(w,V,ee){V.isScene!==!0&&(V=Ce);const ie=j.get(w),H=p.state.lights,fe=p.state.shadowsArray,we=H.state.version,Ve=q.getParameters(w,H.state,fe,V,ee),ke=q.getProgramCacheKey(Ve);let Ze=ie.programs;ie.environment=w.isMeshStandardMaterial?V.environment:null,ie.fog=V.fog,ie.envMap=(w.isMeshStandardMaterial?B:ne).get(w.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,Ze===void 0&&(w.addEventListener("dispose",ue),Ze=new Map,ie.programs=Ze);let Je=Ze.get(ke);if(Je!==void 0){if(ie.currentProgram===Je&&ie.lightsStateVersion===we)return bt(w,Ve),Je}else Ve.uniforms=q.getUniforms(w),w.onBeforeCompile(Ve,M),Je=q.acquireProgram(Ve,ke),Ze.set(ke,Je),ie.uniforms=Ve.uniforms;const Ke=ie.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ke.clippingPlanes=ve.uniform),bt(w,Ve),ie.needsLights=Pt(w),ie.lightsStateVersion=we,ie.needsLights&&(Ke.ambientLightColor.value=H.state.ambient,Ke.lightProbe.value=H.state.probe,Ke.directionalLights.value=H.state.directional,Ke.directionalLightShadows.value=H.state.directionalShadow,Ke.spotLights.value=H.state.spot,Ke.spotLightShadows.value=H.state.spotShadow,Ke.rectAreaLights.value=H.state.rectArea,Ke.ltc_1.value=H.state.rectAreaLTC1,Ke.ltc_2.value=H.state.rectAreaLTC2,Ke.pointLights.value=H.state.point,Ke.pointLightShadows.value=H.state.pointShadow,Ke.hemisphereLights.value=H.state.hemi,Ke.directionalShadowMap.value=H.state.directionalShadowMap,Ke.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ke.spotShadowMap.value=H.state.spotShadowMap,Ke.spotLightMatrix.value=H.state.spotLightMatrix,Ke.spotLightMap.value=H.state.spotLightMap,Ke.pointShadowMap.value=H.state.pointShadowMap,Ke.pointShadowMatrix.value=H.state.pointShadowMatrix),ie.currentProgram=Je,ie.uniformsList=null,Je}function Rt(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=fl.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function bt(w,V){const ee=j.get(w);ee.outputColorSpace=V.outputColorSpace,ee.batching=V.batching,ee.batchingColor=V.batchingColor,ee.instancing=V.instancing,ee.instancingColor=V.instancingColor,ee.instancingMorph=V.instancingMorph,ee.skinning=V.skinning,ee.morphTargets=V.morphTargets,ee.morphNormals=V.morphNormals,ee.morphColors=V.morphColors,ee.morphTargetsCount=V.morphTargetsCount,ee.numClippingPlanes=V.numClippingPlanes,ee.numIntersection=V.numClipIntersection,ee.vertexAlphas=V.vertexAlphas,ee.vertexTangents=V.vertexTangents,ee.toneMapping=V.toneMapping}function xt(w,V,ee,ie,H){V.isScene!==!0&&(V=Ce),te.resetTextureUnits();const fe=V.fog,we=ie.isMeshStandardMaterial?V.environment:null,Ve=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Qs,ke=(ie.isMeshStandardMaterial?B:ne).get(ie.envMap||we),Ze=ie.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Je=!!ee.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ke=!!ee.morphAttributes.position,rt=!!ee.morphAttributes.normal,dt=!!ee.morphAttributes.color;let zt=xr;ie.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(zt=M.toneMapping);const Dt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Tt=Dt!==void 0?Dt.length:0,et=j.get(ie),Ut=p.state.lights;if($e===!0&&(re===!0||w!==S)){const vn=w===S&&ie.id===E;ve.setState(ie,w,vn)}let gt=!1;ie.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Ut.state.version||et.outputColorSpace!==Ve||H.isBatchedMesh&&et.batching===!1||!H.isBatchedMesh&&et.batching===!0||H.isBatchedMesh&&et.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&et.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&et.instancing===!1||!H.isInstancedMesh&&et.instancing===!0||H.isSkinnedMesh&&et.skinning===!1||!H.isSkinnedMesh&&et.skinning===!0||H.isInstancedMesh&&et.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&et.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&et.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&et.instancingMorph===!1&&H.morphTexture!==null||et.envMap!==ke||ie.fog===!0&&et.fog!==fe||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ve.numPlanes||et.numIntersection!==ve.numIntersection)||et.vertexAlphas!==Ze||et.vertexTangents!==Je||et.morphTargets!==Ke||et.morphNormals!==rt||et.morphColors!==dt||et.toneMapping!==zt||et.morphTargetsCount!==Tt)&&(gt=!0):(gt=!0,et.__version=ie.version);let Gn=et.currentProgram;gt===!0&&(Gn=Vt(ie,V,H));let ds=!1,Vn=!1,da=!1;const Ot=Gn.getUniforms(),ai=et.uniforms;if(P.useProgram(Gn.program)&&(ds=!0,Vn=!0,da=!0),ie.id!==E&&(E=ie.id,Vn=!0),ds||S!==w){P.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ot.setValue(x,"projectionMatrix",w.projectionMatrix),Ot.setValue(x,"viewMatrix",w.matrixWorldInverse);const Rn=Ot.map.cameraPosition;Rn!==void 0&&Rn.setValue(x,Te.setFromMatrixPosition(w.matrixWorld)),ce.logarithmicDepthBuffer&&Ot.setValue(x,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ot.setValue(x,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,Vn=!0,da=!0)}if(H.isSkinnedMesh){Ot.setOptional(x,H,"bindMatrix"),Ot.setOptional(x,H,"bindMatrixInverse");const vn=H.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Ot.setValue(x,"boneTexture",vn.boneTexture,te))}H.isBatchedMesh&&(Ot.setOptional(x,H,"batchingTexture"),Ot.setValue(x,"batchingTexture",H._matricesTexture,te),Ot.setOptional(x,H,"batchingIdTexture"),Ot.setValue(x,"batchingIdTexture",H._indirectTexture,te),Ot.setOptional(x,H,"batchingColorTexture"),H._colorsTexture!==null&&Ot.setValue(x,"batchingColorTexture",H._colorsTexture,te));const oi=ee.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&_e.update(H,ee,Gn),(Vn||et.receiveShadow!==H.receiveShadow)&&(et.receiveShadow=H.receiveShadow,Ot.setValue(x,"receiveShadow",H.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(ai.envMap.value=ke,ai.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&V.environment!==null&&(ai.envMapIntensity.value=V.environmentIntensity),Vn&&(Ot.setValue(x,"toneMappingExposure",M.toneMappingExposure),et.needsLights&&zn(ai,da),fe&&ie.fog===!0&&ae.refreshFogUniforms(ai,fe),ae.refreshMaterialUniforms(ai,ie,W,Z,p.state.transmissionRenderTarget[w.id]),fl.upload(x,Rt(et),ai,te)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(fl.upload(x,Rt(et),ai,te),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ot.setValue(x,"center",H.center),Ot.setValue(x,"modelViewMatrix",H.modelViewMatrix),Ot.setValue(x,"normalMatrix",H.normalMatrix),Ot.setValue(x,"modelMatrix",H.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const vn=ie.uniformsGroups;for(let Rn=0,ql=vn.length;Rn<ql;Rn++){const Pr=vn[Rn];Qe.update(Pr,Gn),Qe.bind(Pr,Gn)}}return Gn}function zn(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function Pt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(w,V,ee){const ie=j.get(w);ie.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),j.get(w.texture).__webglTexture=V,j.get(w.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ee,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){const ee=j.get(w);ee.__webglFramebuffer=V,ee.__useDefaultFramebuffer=V===void 0};const _n=x.createFramebuffer();this.setRenderTarget=function(w,V=0,ee=0){D=w,R=V,A=ee;let ie=!0,H=null,fe=!1,we=!1;if(w){const ke=j.get(w);if(ke.__useDefaultFramebuffer!==void 0)P.bindFramebuffer(x.FRAMEBUFFER,null),ie=!1;else if(ke.__webglFramebuffer===void 0)te.setupRenderTarget(w);else if(ke.__hasExternalTextures)te.rebindTextures(w,j.get(w.texture).__webglTexture,j.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ke=w.depthTexture;if(ke.__boundDepthTexture!==Ke){if(Ke!==null&&j.has(Ke)&&(w.width!==Ke.image.width||w.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(w)}}const Ze=w.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(we=!0);const Je=j.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Je[V])?H=Je[V][ee]:H=Je[V],fe=!0):w.samples>0&&te.useMultisampledRTT(w)===!1?H=j.get(w).__webglMultisampledFramebuffer:Array.isArray(Je)?H=Je[ee]:H=Je,N.copy(w.viewport),O.copy(w.scissor),Y=w.scissorTest}else N.copy(Me).multiplyScalar(W).floor(),O.copy(qe).multiplyScalar(W).floor(),Y=nt;if(ee!==0&&(H=_n),P.bindFramebuffer(x.FRAMEBUFFER,H)&&ie&&P.drawBuffers(w,H),P.viewport(N),P.scissor(O),P.setScissorTest(Y),fe){const ke=j.get(w.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+V,ke.__webglTexture,ee)}else if(we){const ke=V;for(let Ze=0;Ze<w.textures.length;Ze++){const Je=j.get(w.textures[Ze]);x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0+Ze,Je.__webglTexture,ee,ke)}}else if(w!==null&&ee!==0){const ke=j.get(w.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,ke.__webglTexture,ee)}E=-1},this.readRenderTargetPixels=function(w,V,ee,ie,H,fe,we,Ve=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=j.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(ke=ke[we]),ke){P.bindFramebuffer(x.FRAMEBUFFER,ke);try{const Ze=w.textures[Ve],Je=Ze.format,Ke=Ze.type;if(!ce.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-ie&&ee>=0&&ee<=w.height-H&&(w.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+Ve),x.readPixels(V,ee,ie,H,ze.convert(Je),ze.convert(Ke),fe))}finally{const Ze=D!==null?j.get(D).__webglFramebuffer:null;P.bindFramebuffer(x.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(w,V,ee,ie,H,fe,we,Ve=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=j.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(ke=ke[we]),ke)if(V>=0&&V<=w.width-ie&&ee>=0&&ee<=w.height-H){P.bindFramebuffer(x.FRAMEBUFFER,ke);const Ze=w.textures[Ve],Je=Ze.format,Ke=Ze.type;if(!ce.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,rt),x.bufferData(x.PIXEL_PACK_BUFFER,fe.byteLength,x.STREAM_READ),w.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+Ve),x.readPixels(V,ee,ie,H,ze.convert(Je),ze.convert(Ke),0);const dt=D!==null?j.get(D).__webglFramebuffer:null;P.bindFramebuffer(x.FRAMEBUFFER,dt);const zt=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await Jg(x,zt,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,rt),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,fe),x.deleteBuffer(rt),x.deleteSync(zt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,ee=0){const ie=Math.pow(2,-ee),H=Math.floor(w.image.width*ie),fe=Math.floor(w.image.height*ie),we=V!==null?V.x:0,Ve=V!==null?V.y:0;te.setTexture2D(w,0),x.copyTexSubImage2D(x.TEXTURE_2D,ee,0,0,we,Ve,H,fe),P.unbindTexture()};const si=x.createFramebuffer(),$t=x.createFramebuffer();this.copyTextureToTexture=function(w,V,ee=null,ie=null,H=0,fe=null){fe===null&&(H!==0?(to("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=H,H=0):fe=0);let we,Ve,ke,Ze,Je,Ke,rt,dt,zt;const Dt=w.isCompressedTexture?w.mipmaps[fe]:w.image;if(ee!==null)we=ee.max.x-ee.min.x,Ve=ee.max.y-ee.min.y,ke=ee.isBox3?ee.max.z-ee.min.z:1,Ze=ee.min.x,Je=ee.min.y,Ke=ee.isBox3?ee.min.z:0;else{const oi=Math.pow(2,-H);we=Math.floor(Dt.width*oi),Ve=Math.floor(Dt.height*oi),w.isDataArrayTexture?ke=Dt.depth:w.isData3DTexture?ke=Math.floor(Dt.depth*oi):ke=1,Ze=0,Je=0,Ke=0}ie!==null?(rt=ie.x,dt=ie.y,zt=ie.z):(rt=0,dt=0,zt=0);const Tt=ze.convert(V.format),et=ze.convert(V.type);let Ut;V.isData3DTexture?(te.setTexture3D(V,0),Ut=x.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(te.setTexture2DArray(V,0),Ut=x.TEXTURE_2D_ARRAY):(te.setTexture2D(V,0),Ut=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,V.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,V.unpackAlignment);const gt=x.getParameter(x.UNPACK_ROW_LENGTH),Gn=x.getParameter(x.UNPACK_IMAGE_HEIGHT),ds=x.getParameter(x.UNPACK_SKIP_PIXELS),Vn=x.getParameter(x.UNPACK_SKIP_ROWS),da=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,Dt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Dt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Ze),x.pixelStorei(x.UNPACK_SKIP_ROWS,Je),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Ke);const Ot=w.isDataArrayTexture||w.isData3DTexture,ai=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){const oi=j.get(w),vn=j.get(V),Rn=j.get(oi.__renderTarget),ql=j.get(vn.__renderTarget);P.bindFramebuffer(x.READ_FRAMEBUFFER,Rn.__webglFramebuffer),P.bindFramebuffer(x.DRAW_FRAMEBUFFER,ql.__webglFramebuffer);for(let Pr=0;Pr<ke;Pr++)Ot&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,j.get(w).__webglTexture,H,Ke+Pr),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,j.get(V).__webglTexture,fe,zt+Pr)),x.blitFramebuffer(Ze,Je,we,Ve,rt,dt,we,Ve,x.DEPTH_BUFFER_BIT,x.NEAREST);P.bindFramebuffer(x.READ_FRAMEBUFFER,null),P.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||j.has(w)){const oi=j.get(w),vn=j.get(V);P.bindFramebuffer(x.READ_FRAMEBUFFER,si),P.bindFramebuffer(x.DRAW_FRAMEBUFFER,$t);for(let Rn=0;Rn<ke;Rn++)Ot?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,oi.__webglTexture,H,Ke+Rn):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,oi.__webglTexture,H),ai?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,vn.__webglTexture,fe,zt+Rn):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,vn.__webglTexture,fe),H!==0?x.blitFramebuffer(Ze,Je,we,Ve,rt,dt,we,Ve,x.COLOR_BUFFER_BIT,x.NEAREST):ai?x.copyTexSubImage3D(Ut,fe,rt,dt,zt+Rn,Ze,Je,we,Ve):x.copyTexSubImage2D(Ut,fe,rt,dt,Ze,Je,we,Ve);P.bindFramebuffer(x.READ_FRAMEBUFFER,null),P.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else ai?w.isDataTexture||w.isData3DTexture?x.texSubImage3D(Ut,fe,rt,dt,zt,we,Ve,ke,Tt,et,Dt.data):V.isCompressedArrayTexture?x.compressedTexSubImage3D(Ut,fe,rt,dt,zt,we,Ve,ke,Tt,Dt.data):x.texSubImage3D(Ut,fe,rt,dt,zt,we,Ve,ke,Tt,et,Dt):w.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,fe,rt,dt,we,Ve,Tt,et,Dt.data):w.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,fe,rt,dt,Dt.width,Dt.height,Tt,Dt.data):x.texSubImage2D(x.TEXTURE_2D,fe,rt,dt,we,Ve,Tt,et,Dt);x.pixelStorei(x.UNPACK_ROW_LENGTH,gt),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Gn),x.pixelStorei(x.UNPACK_SKIP_PIXELS,ds),x.pixelStorei(x.UNPACK_SKIP_ROWS,Vn),x.pixelStorei(x.UNPACK_SKIP_IMAGES,da),fe===0&&V.generateMipmaps&&x.generateMipmap(Ut),P.unbindTexture()},this.initRenderTarget=function(w){j.get(w).__webglFramebuffer===void 0&&te.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?te.setTextureCube(w,0):w.isData3DTexture?te.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?te.setTexture2DArray(w,0):te.setTexture2D(w,0),P.unbindTexture()},this.resetState=function(){R=0,A=0,D=null,P.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}class Fy extends fp{constructor(){super();const e=new Cr;e.deleteAttribute("uv");const t=new os({side:Cn}),n=new os,i=new xp(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new It(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new b_(e,n,6),o=new rn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new It(e,Rs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new It(e,Rs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const u=new It(e,Rs(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const h=new It(e,Rs(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const d=new It(e,Rs(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new It(e,Rs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Rs(r){return new X_({color:0,emissive:16777215,emissiveIntensity:r})}const dl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class fa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const By=new Mh(-1,1,1,-1,0,1);class ky extends ri{constructor(){super(),this.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Nt([0,2,0,0,2,0],2))}}const zy=new ky;class Sh{constructor(e){this._mesh=new It(zy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,By)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Gy extends fa{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof wn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=no.clone(e.uniforms),this.material=new wn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Sh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class td extends fa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Vy extends fa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Hy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new We);this._width=n.width,this._height=n.height,t=new gi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Bi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gy(dl),this.copyPass.material.blending=Zi,this.clock=new Q_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}td!==void 0&&(a instanceof td?n=!0:a instanceof Vy&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new We);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Wy extends fa{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new tt}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const Xy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new tt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ta extends fa{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new We(e.x,e.y):new We(256,256),this.clearColor=new tt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new gi(s,a,{type:Bi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new gi(s,a,{type:Bi});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new gi(s,a,{type:Bi});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}const o=Xy;this.highPassUniforms=no.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new wn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new We(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=no.clone(dl.uniforms),this.blendMaterial=new wn({uniforms:this.copyUniforms,vertexShader:dl.vertexShader,fragmentShader:dl.fragmentShader,blending:Vc,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new tt,this._oldClearAlpha=1,this._basic=new xo,this._fsQuad=new Sh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new We(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ta.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ta.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new wn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new We(.5,.5)},direction:{value:new We(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new wn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ta.BlurDirectionX=new We(1,0);ta.BlurDirectionY=new We(0,1);const Xo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Yy extends fa{constructor(){super(),this.uniforms=no.clone(Xo.uniforms),this.material=new W_({name:Xo.name,uniforms:this.uniforms,vertexShader:Xo.vertexShader,fragmentShader:Xo.fragmentShader}),this._fsQuad=new Sh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},mt.getTransfer(this._outputColorSpace)===yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Hd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ih?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===qd?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Xd&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const ya=new z;function ci(r,e,t,n,i,s){const a=2*Math.PI*i/4,o=Math.max(s-2*i,0),l=Math.PI/4;ya.copy(e),ya[n]=0,ya.normalize();const c=.5*a/(a+o),u=1-ya.angleTo(r)/l;return Math.sign(ya[t])===1?u*c:o/(a+o)+c+c*(1-u)}class Eh extends Cr{constructor(e=1,t=1,n=1,i=2,s=.1){const a=i*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new z,c=new z,u=new z(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,_=h.length/6,g=new z,m=.5/a;for(let p=0,b=0;p<h.length;p+=3,b+=2)switch(l.fromArray(h,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[p+0]=u.x*Math.sign(l.x)+c.x*s,h[p+1]=u.y*Math.sign(l.y)+c.y*s,h[p+2]=u.z*Math.sign(l.z)+c.z*s,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/_)){case 0:g.set(1,0,0),f[b+0]=ci(g,c,"z","y",s,n),f[b+1]=1-ci(g,c,"y","z",s,t);break;case 1:g.set(-1,0,0),f[b+0]=1-ci(g,c,"z","y",s,n),f[b+1]=1-ci(g,c,"y","z",s,t);break;case 2:g.set(0,1,0),f[b+0]=1-ci(g,c,"x","z",s,e),f[b+1]=ci(g,c,"z","x",s,n);break;case 3:g.set(0,-1,0),f[b+0]=1-ci(g,c,"x","z",s,e),f[b+1]=1-ci(g,c,"z","x",s,n);break;case 4:g.set(0,0,1),f[b+0]=1-ci(g,c,"x","y",s,e),f[b+1]=1-ci(g,c,"y","x",s,t);break;case 5:g.set(0,0,-1),f[b+0]=ci(g,c,"x","y",s,e),f[b+1]=1-ci(g,c,"y","x",s,t);break}}static fromJSON(e){return new Eh(e.width,e.height,e.depth,e.segments,e.radius)}}const Tp=new Eh(1,1,1,2,.055),Ap=new Cr(1,1,1),wp=new Gl(1,24,16);function ui(r,e=.45,t=.3){return new os({color:r,metalness:e,roughness:t})}function Cp(r,e=2){return new os({color:r,emissive:r,emissiveIntensity:e,roughness:.3,metalness:.35})}function Ee(r,e,t,n,i=!0){const s=new It(i?Tp:Ap,n);return s.scale.set(...e),s.position.set(...t),s.castShadow=!0,s.receiveShadow=!0,r.add(s),s}function Pn(r,e,t,n){const i=new It(wp,n);return i.scale.setScalar(e),i.position.set(...t),r.add(i),i}function Yo(r,e,t,n){const i=new gp(e.map(a=>new z(...a))),s=new It(new vh(i,80,t,7,!1),n);return r.add(s),{mesh:s,curve:i}}function Rp(r,e,t,n=2,i="#fff",s=null){const a=document.createElement("canvas");a.width=1024,a.height=256;const o=a.getContext("2d");s&&(o.fillStyle=s,o.fillRect(0,0,a.width,a.height)),o.fillStyle=i,o.font="500 64px sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(e,512,128);const l=new C_(a);l.colorSpace=In;const c=new xo({map:l,transparent:!s,depthWrite:!1,side:Ln}),u=new It(new Mo(n,n/4),c);return u.position.set(...t),r.add(u),u}function qy(r){const e=ui("#ede5d6",.12,.48),t=ui("#132d3a",.35,.4),n=ui("#9cabb7",.8,.25),i=ui("#182125",.1,.7),s=ui("#97734e",.08,.6),a=ui(r,.45,.32),o=Cp(r,.7),l=ui("#f4f1e8",.05,.65),c=ui("#e97d63",.15,.4),u=ui("#8cc6a0",.15,.4),h=(P,se=0,j=0,te=0,ne=1)=>{const B=new Ui;return B.position.set(se,j,te),B.scale.setScalar(ne),P.add(B),B},d=(P,se,j=n,te=[0,0,0])=>{const ne=new It(se,j);return ne.position.set(...te),ne.castShadow=!0,ne.receiveShadow=!0,P.add(ne),ne},f=(P,se,j,te,ne=n,B=se)=>d(P,new ro(se,B,j,24),ne,te),_=(P,se,j,te,ne=n,B=Math.PI*2)=>d(P,new _h(se,j,8,48,B),ne,te),g=(P,se,j,te=.045,ne=n)=>{const B=new z(...se),y=new z(...j),v=y.clone().sub(B),U=f(P,te,v.length(),B.clone().add(y).multiplyScalar(.5).toArray(),ne);return U.quaternion.setFromUnitVectors(new z(0,1,0),v.normalize()),U},m=(P,se,j,te=2,ne="#eaf0e9")=>Rp(P,se,j,te,ne),p=(P,se,j,te,ne=.5)=>{g(P,[se-ne*.6,j,te],[se-ne*.15,j-ne*.45,te],ne*.1,u),g(P,[se-ne*.15,j-ne*.45,te],[se+ne*.7,j+ne*.5,te],ne*.1,u)};function b(P,se=0,j=0,te=0,ne="INVOICE",B=1){const y=h(P,se,j,te,B);Ee(y,[2,2.7,.07],[0,0,0],e),m(y,ne,[0,.98,.05],1.65,"#193342"),Ee(y,[1.55,.018,.015],[0,.67,.05],a,!1);for(let v=0;v<6;v++)Ee(y,[v===5?.63:1.42,.023,.014],[v===5?.39:0,.35-v*.25,.05],t,!1);return y}function T(P,se=0,j=0,te=0,ne="CASE",B=1){const y=h(P,se,j,te,B);return Ee(y,[2.25,2.2,.32],[0,0,0],s),Ee(y,[.9,.3,.3],[-.58,1.12,0],s),Ee(y,[2.02,1.95,.08],[0,.08,.22],e),Ee(y,[2.25,2.02,.12],[0,-.08,.32],a),m(y,ne,[0,.5,.4],1.85,"#132d3a"),y}function M(P,se=0,j=0,te=0,ne="WORKSPACE",B=1,y="code"){const v=h(P,se,j,te,B);Ee(v,[3.4,2.25,.28],[0,.4,0],i),Ee(v,[3.12,1.94,.025],[0,.42,.16],t),m(v,ne,[0,1.08,.18],2.7),Ee(v,[.24,.75,.22],[0,-1.02,-.04],n),Ee(v,[1.55,.12,.85],[0,-1.42,.1],n);const U=h(v);if(y==="chart")for(let q=0;q<9;q++){const ae=.25+q*7%9/11;Ee(U,[.16,ae,.018],[-1.14+q*.28,-.3+ae/2,.19],q===6?c:o,!1)}else if(y==="form")for(let q=0;q<3;q++)Ee(U,[2.55,.22,.023],[0,.65-q*.45,.19],e),Ee(U,[1.2-q*.18,.035,.02],[-.5,.65-q*.45,.21],a,!1);else for(let q=0;q<5;q++)Ee(U,[.9+q%3*.48,.028,.025],[-.45+q%2*.2,.63-q*.23,.2],q%3?e:o,!1);return v.userData.marks=U,v}function C(P,se=0,j=0,te=0,ne="BUILD",B=1,y="code"){const v=h(P,se,j,te,B),U=M(v,0,.2,-.4,ne,.78,y);U.children[3].visible=!1,U.children[4].visible=!1,Ee(v,[2.9,.14,2],[0,-.75,.2],n);for(let q=0;q<4;q++)for(let ae=0;ae<9;ae++)Ee(v,[.19,.035,.14],[-1.05+ae*.26,-.655,-.2+q*.22],i);return Ee(v,[.65,.02,.36],[0,-.66,.85],t),v}function R(P,se=0,j=-1.7,te=0,ne=1){const B=h(P,se,j,te,ne);Ee(B,[6,.24,3.3],[0,0,0],s);for(const y of[-1,1])for(const v of[-1,1])Ee(B,[.18,1.65,.18],[y*2.6,-.85,v*1.28],n);return B}function A(P,se=0,j=0,te=0,ne=1){const B=h(P,se,j,te,ne);return _(B,.85,.13,[0,0,0],n),d(B,new io(.74,40),new wf({color:"#aee1e8",transparent:!0,opacity:.22,roughness:.1,metalness:.1,side:Ln}),[0,0,.01]),g(B,[.6,-.6,0],[1.35,-1.55,0],.15,i),B}function D(P,se=0,j=0,te=0,ne=1){const B=h(P,se,j,te,ne);return Ee(B,[1.25,.18,.7],[0,0,0],c),f(B,.13,.6,[0,.37,0],n),Pn(B,.34,[0,.77,0],s).scale.y=.2,B}function E(P,se,j,te,ne="REVIEW",B=1){const y=h(P,se,j,te,B);Ee(y,[2.1,.13,1.6],[0,0,0],n),Ee(y,[2.1,.45,.09],[0,.2,-.78],n);for(const v of[-1,1])Ee(y,[.08,.38,1.6],[v*1.03,.17,0],n);return m(y,ne,[0,-.35,.85],2),y}function S(P,se=0,j=0,te=0,ne=1){const B=h(P,se,j,te,ne);Ee(B,[3,3.4,.22],[0,0,0],e),Ee(B,[3,.55,.25],[0,1.43,.03],a),m(B,"APPOINTMENTS",[0,1.43,.18],2.65,"#173440");for(let v=0;v<2;v++)_(B,.16,.045,[-.85+v*1.7,1.7,0],n);for(let v=0;v<4;v++)for(let U=0;U<5;U++)Ee(B,[.38,.4,.02],[-1+U*.5,.74-v*.57,.13],t);const y=Ee(B,[.39,.41,.055],[.5,-.4,.17],u);return B.userData.appointment=y,B}function N(P,se=0,j=0,te=0,ne=1){const B=h(P,se,j,te,ne);Yo(B,[[-.7,-1,0],[-1,0,0],[-.7,1,0]],.17,i),Ee(B,[.62,.62,.42],[-.53,-1,0],a),Ee(B,[.62,.62,.42],[-.53,1,0],a);for(let y=0;y<4;y++){const v=_(B,.55+y*.22,.025,[.3,0,0],o,Math.PI*.6);v.rotation.z=-Math.PI*.3}return B}function O(P,se=0,j=0,te=0,ne=1,B="CONVERSATION"){const y=h(P,se,j,te,ne);Ee(y,[2.1,4.15,.3],[0,0,0],n),Ee(y,[1.92,3.91,.03],[0,0,.17],t),Ee(y,[.5,.065,.04],[0,1.74,.2],e);const v=h(y);for(let U=0;U<23;U++)Ee(v,[.035,.18+Math.abs(Math.sin(U*.7))*1.2,.03],[(U-11)*.067,.2,.2],o,!1);return m(y,B,[0,-1.3,.21],1.65),y.userData.wave=v,y}function Y(P,se=0,j=0,te=0,ne=1){const B=h(P,se,j,te,ne);Ee(B,[.85,1.8,.75],[0,.75,0],n);for(let v=0;v<8;v++)Ee(B,[.69,.04,.025],[0,.12+v*.18,.4],i,!1);const y=_(B,.64,.07,[0,.05,0],a,Math.PI);return y.rotation.z=Math.PI,g(B,[0,-.6,0],[0,-1.2,0],.08,n),f(B,.7,.13,[0,-1.28,0],i),B}function $(P,se=0,j=0,te=0,ne=1,B="COMPUTE"){const y=h(P,se,j,te,ne);Ee(y,[1.9,4.3,1.5],[0,0,0],i);for(let v=0;v<7;v++){Ee(y,[1.66,.42,.1],[0,1.6-v*.51,.79],n);for(let U=0;U<4;U++)Ee(y,[.09,.2,.025],[-.53+U*.19,1.6-v*.51,.86],t,!1);Pn(y,.05,[.57,1.6-v*.51,.88],o)}return m(y,B,[0,2.4,.1],2),y}function X(P,se=0,j=0,te=0,ne=1,B="DATA"){const y=h(P,se,j,te,ne);for(let v=0;v<3;v++)f(y,1.05,.68,[0,v*.76-.76,0],n),f(y,1.065,.07,[0,v*.76-.45,0],a),m(y,v===1?B:"",[0,v*.76-.76,1.06],1.7);return y}function J(P,se=0,j=0,te=0,ne=1,B="MODEL"){const y=h(P,se,j,te,ne);Ee(y,[2.3,2.3,.25],[0,0,0],t),Ee(y,[1.4,1.4,.17],[0,0,.2],n),m(y,B,[0,0,.3],1.25,"#132d3a");for(let v=0;v<8;v++)for(const U of[-1,1])Ee(y,[.42,.085,.12],[U*1.27,-.87+v*.25,0],n,!1),Ee(y,[.085,.42,.12],[-.87+v*.25,U*1.27,0],n,!1);return y}function Z(P,se=0,j=0,te=0,ne=1){const B=h(P,se,j,te);_(B,ne,.22,[0,0,0],n),f(B,.24,.2,[0,0,0],t).rotation.x=Math.PI/2;for(let y=0;y<12;y++){const v=y/12*Math.PI*2,U=Ee(B,[.33,.44,.3],[Math.sin(v)*(ne+.15),Math.cos(v)*(ne+.15),0],a);U.rotation.z=-v}return B}function W(P,se=0,j=0,te=0,ne=1){const B=h(P,se,j,te,ne);return Ee(B,[.28,1.7,.15],[0,-.7,0],n),_(B,.42,.16,[0,.2,0],n,Math.PI*1.48).rotation.z=.8,_(B,.27,.13,[0,-1.6,0],n),B.rotation.z=-.55,B}function he(P,se=0,j=0,te=0,ne=1){const B=h(P,se,j,te,ne);Ee(B,[1.8,1.45,.55],[0,-.3,0],a);const y=_(B,.66,.13,[0,.57,0],n,Math.PI);return g(B,[-.66,.57,0],[-.66,-.1,0],.13,n),g(B,[.66,.57,0],[.66,-.1,0],.13,n),Pn(B,.13,[0,-.25,.3],t),Ee(B,[.12,.3,.035],[0,-.41,.3],t),B.userData.shackle=y,B}function L(P,se=0,j=0,te=0,ne=1){const B=h(P,se,j,te,ne);Ee(B,[3.2,3.4,2.2],[0,0,0],n),Ee(B,[2.8,3,.08],[0,0,1.13],t);const y=h(B,-1.4,0,1.24);Ee(y,[2.8,3,.28],[1.4,0,0],a),_(y,.48,.07,[1.4,0,.2],n);for(let v=0;v<3;v++){const U=v*Math.PI*2/3;g(y,[1.4,0,.2],[1.4+Math.cos(U)*.5,Math.sin(U)*.5,.2],.07,n)}return B.userData.door=y,B}function Me(P,se=0,j=0,te=0,ne=1){const B=h(P,se,j,te,ne);Pn(B,.28,[0,.9,0],e),d(B,new ro(.27,.45,.85,16),a,[0,.18,0]),g(B,[-.16,-.2,0],[-.22,-.9,0],.12,t),g(B,[.16,-.2,0],[.22,-.9,0],.12,t);for(const y of[-1,1])g(B,[y*.28,.47,0],[y*.56,-.02,.1],.1,e);return B}function qe(P,se=0,j=0,te=0,ne=1){const B=h(P,se,j,te,ne);Ee(B,[1.1,.17,1],[0,0,0],a),Ee(B,[1.1,.9,.14],[0,.45,-.46],a);for(const y of[-1,1])for(const v of[-1,1])g(B,[y*.4,-.1,v*.35],[y*.45,-.9,v*.4],.045,n);return B}function nt(P,se=0,j=0,te=0,ne="KNOWLEDGE",B=1){const y=h(P,se,j,te,B);Ee(y,[1.55,2.1,.45],[0,0,0],e);for(const v of[-1,1])Ee(y,[1.67,2.23,.045],[0,0,v*.25],a);return Ee(y,[.11,2.23,.52],[-.8,0,0],a),m(y,ne,[0,.3,.29],1.45,"#142d3b"),y}function Be(P,se=0,j=0,te=0,ne=1){const B=h(P,se,j,te,ne);Ee(B,[2.6,3.5,1.6],[0,0,0],n);const y=[];for(let v=0;v<4;v++){const U=h(B,0,1.28-v*.85,.85);Ee(U,[2.38,.74,.18],[0,0,0],e),Ee(U,[.65,.09,.16],[0,.07,.19],n),Ee(U,[.5,.18,.02],[0,-.2,.11],t),y.push(U)}return B.userData.drawers=y,B}function $e(P,se=0,j=0,te=0,ne=1){const B=h(P,se,j,te,ne);for(const v of[-1,1])Ee(B,[7,.25,.18],[0,-.05,v*.9],n);const y=[];for(let v=0;v<17;v++){const U=f(B,.16,1.8,[-3.2+v*.4,0,0],i);U.rotation.x=Math.PI/2,y.push(U)}for(const v of[-1,1])for(const U of[-1,1])Ee(B,[.2,1.5,.2],[v*2.8,-.8,U*.8],n);return B.userData.rollers=y,B}function re(P,se=0,j=0,te=0,ne=1){const B=h(P,se,j,te,ne);for(const v of[-1,1])Ee(B,[.3,2.7,.65],[0,1,v*1.05],e);Ee(B,[.35,.3,2.4],[0,2.25,0],e),Ee(B,[.07,.035,1.9],[0,2.05,0],o,!1);const y=Ee(B,[.025,2,1.8],[0,1,0],new xo({color:r,transparent:!0,opacity:.12,depthWrite:!1}));return B.userData.beam=y,B}function oe(P,se=0,j=0,te=0,ne=1){const B=h(P,se,j,te,ne);return Ee(B,[2.4,1.6,.13],[0,0,0],e),g(B,[-1.1,.7,.09],[0,-.1,.09],.02,a),g(B,[0,-.1,.09],[1.1,.7,.09],.02,a),B}function Te(P,se=0,j=0,te=0,ne=1,B=!1){const y=h(P,se,j,te,ne);Ee(y,[3.2,3.3,2.2],[0,0,0],e),Ee(y,[3.5,.25,2.5],[0,1.77,0],n),Ee(y,[.75,1.3,.1],[0,-1,1.16],t);for(const v of[-1,1])for(let U=0;U<2;U++)Ee(y,[.63,.6,.08],[v*.97,.87-U*1.03,1.16],a);return B?(Ee(y,[.22,.85,.09],[0,.8,1.18],c),Ee(y,[.85,.22,.09],[0,.8,1.18],c)):(Ee(y,[3.4,.4,1],[0,.05,1.5],a),m(y,"STORE",[0,.08,2.02],1.7,"#142d3a")),y}function le(P,se=0,j=0,te=0,ne=1){const B=h(P,se,j,te,ne);for(let y=0;y<3;y++){const v=y*Math.PI*2/3,U=(y+1)*Math.PI*2/3;g(B,[Math.cos(v)*.9,-2,Math.sin(v)*.9],[Math.cos(v)*.18,2.2,Math.sin(v)*.18],.09,n);for(let q=0;q<4;q++)g(B,[Math.cos(v)*(.9-q*.17),-2+q,Math.sin(v)*(.9-q*.17)],[Math.cos(U)*(.73-q*.17),-1+q,Math.sin(U)*(.73-q*.17)],.04,n)}g(B,[0,1.8,0],[0,3,0],.07,n);for(let y=0;y<3;y++){const v=y*Math.PI*2/3,U=Ee(B,[.32,1.25,.18],[Math.cos(v)*.5,1.8,Math.sin(v)*.5],e);U.rotation.y=-v}return Pn(B,.12,[0,3,0],c),B}function Ce(P,se=0,j=0,te=0,ne=1){const B=h(P,se,j,te,ne);return d(B,new Gl(1,32,16,0,Math.PI*2,0,Math.PI*.36),new os({color:"#9cabb7",metalness:.8,roughness:.25,side:Ln})).rotation.x=-Math.PI/2,g(B,[0,-.5,0],[0,-1.7,-.2],.12,n),f(B,.65,.12,[0,-1.8,-.2],i),g(B,[0,0,.1],[0,0,1],.05,a),Pn(B,.13,[0,0,1],a),B}function Ye(P,se=0,j=0,te=0,ne=1){const B=h(P,se,j,te,ne);Ee(B,[2,1.4,.85],[0,0,0],i),Ee(B,[.7,.3,.7],[-.4,.8,0],i);const y=f(B,.55,.75,[.15,0,.65],n);y.rotation.x=Math.PI/2;const v=f(B,.43,.03,[.15,0,1.05],t);v.rotation.x=Math.PI/2,_(B,.43,.04,[.15,0,1.09],o);for(const U of[-1,1])g(B,[0,-.7,0],[U*.9,-2,.5],.07,n);return g(B,[0,-.7,0],[0,-2,-.7],.07,n),B}function G(P,se=0,j=0,te=0,ne=1,B=!1){const y=h(P,se,j,te,ne);Pn(y,1,[0,.4,0],e).scale.set(.9,1.15,.73),f(y,.33,.55,[0,-.8,0],e),Pn(y,1,[0,-1.35,-.08],a).scale.set(1.25,.4,.58);for(const Q of[-1,1])Pn(y,.09,[Q*.34,.58,.68],t),Pn(y,.17,[Q*.86,.42,0],e).scale.set(.085,.17,.136);const q=d(y,new Jr(.14,.4,12),e,[0,.28,.76]);q.rotation.x=Math.PI/2;const ae=Yo(y,[[-.3,-.06,.69],[0,-.15,.76],[.3,-.06,.69]],.025,t).mesh;if(y.userData.mouth=ae,B){Ee(y,[1.35,.71,.3],[0,-.02,.65],ui("#93cdd7",.08,.7));for(let Q=0;Q<3;Q++)Ee(y,[1.15,.025,.035],[0,.16-Q*.18,.82],e,!1);for(const Q of[-1,1])Yo(y,[[Q*.64,.25,.68],[Q*.92,.3,.25],[Q*.9,.07,.18],[Q*.6,-.3,.67]],.025,e)}return y}function x(P,se=0,j=0,te=0,ne=1){const B=h(P,se,j,te,ne);f(B,.9,.2,[0,-1.7,0],n),g(B,[0,-1.6,0],[0,1.6,0],.12,n);const y=h(B,0,1.55,0);g(y,[-2,0,0],[2,0,0],.09,a);for(const v of[-1,1]){for(const q of[-.6,.6])g(y,[v*1.9,0,0],[v*1.9,-1.7,q],.025,n);const U=f(y,.75,.1,[v*1.9,-1.7,0],e);U.scale.z=.85}return B.userData.beam=y,B}function I(P,se=0,j=0,te=0,ne=1){const B=h(P,se,j,te,ne);f(B,.6,.24,[0,-1.5,0],n);const y=h(B,0,-1.3,0);Pn(y,.23,[0,0,0],i),g(y,[0,0,0],[.2,1.3,0],.17,a),Pn(y,.25,[.2,1.3,0],n);const v=h(y,.2,1.3,0);g(v,[0,0,0],[1.25,.25,0],.14,a),Pn(v,.19,[1.25,.25,0],i);for(const U of[-1,1])g(v,[1.25,.25,0],[1.7,.15,U*.25],.07,n);return B.userData.elbow=v,B}function k(P,se=0,j=0,te=0,ne=1){const B=h(P,se,j,te,ne);for(const y of[-1,1]){f(B,.75,.13,[0,y*1.15,0],s);for(let U=0;U<3;U++){const q=U*Math.PI*2/3;g(B,[Math.cos(q)*.65,-1.1,Math.sin(q)*.65],[Math.cos(q)*.65,1.1,Math.sin(q)*.65],.04,n)}const v=d(B,new Jr(.55,1.1,24),new wf({color:"#c9e1e9",transparent:!0,opacity:.3,roughness:.15,side:Ln}),[0,y*.55,0]);v.rotation.z=y===1?Math.PI:0}return d(B,new Jr(.46,.5,24),a,[0,-.8,0]),B}function ce(P,se=0,j=0,te=0,ne=1){const B=h(P,se,j,te,ne);d(B,new io(2.2,64),t);for(const v of[.6,1.2,1.8,2.2])_(B,v,.022,[0,0,.025],a);g(B,[-2.1,0,.03],[2.1,0,.03],.016,n),g(B,[0,-2.1,.03],[0,2.1,.03],.016,n);const y=h(B);return g(y,[0,0,.05],[0,2.1,.05],.045,o),B.userData.sweep=y,B}return{ivory:e,ink:t,steel:n,rubber:i,wood:s,color:a,lit:o,white:l,red:c,green:u,group:h,mesh:d,cylinder:f,ring:_,line:g,text:m,check:p,sheet:b,folder:T,screen:M,laptop:C,desk:R,magnifier:A,stamp:D,tray:E,calendar:S,handset:N,phone:O,microphone:Y,server:$,database:X,chip:J,gear:Z,wrench:W,lock:he,safe:L,person:Me,chair:qe,book:nt,cabinet:Be,conveyor:$e,scanner:re,envelope:oe,building:Te,antenna:le,dish:Ce,camera:Ye,head:G,scales:x,robotArm:I,hourglass:k,radar:ce,box:Ee,ball:Pn,tube:Yo}}const jt=go.lerp,Ne=(r,e=0,t=1)=>{const n=go.clamp((r-e)/(t-e),0,1);return n*n*(3-2*n)};function $y(r,e){const t=new Ui,n=qy(e),i=[],{group:s,box:a,ball:o,line:l,ring:c,text:u,sheet:h,folder:d,screen:f,laptop:_,desk:g,magnifier:m,stamp:p,tray:b,calendar:T,handset:M,phone:C,microphone:R,server:A,database:D,chip:E,gear:S,wrench:N,lock:O,safe:Y,person:$,book:X,cabinet:J,conveyor:Z,scanner:W,envelope:he,building:L,antenna:Me,dish:qe,camera:nt,head:Be,scales:$e,robotArm:re,hourglass:oe,radar:Te}=n,le=G=>i.push(G),Ce=(G,x,I,k,ce=2.6)=>u(t,G,[x,I,k],ce),Ye=(G,x=-Math.PI/2)=>(G.rotation.x=x,G);switch(r.type){case"invoice-desk":{g(t,0,-1.8,0,1.1);const G=h(t,-1.6,.25,.6,"INVOICE",1.1),x=X(t,1.5,.2,-.1,"CONTRACT",1.3);G.rotation.z=.06,x.rotation.y=-.2;const I=m(t,-1.9,.7,1.25,.75),k=p(t,2,-1.55,1,.8);le(ce=>{I.position.y=jt(1,-.65,Ne(ce)),I.position.x=-1.7+Math.sin(ce*Math.PI)*.3,k.position.y=-1.25-Math.sin(Ne(ce,.6,1)*Math.PI)*.3});break}case"operations-console":{g(t,-.7,-1.9,0),f(t,-1.25,.35,0,"VALIDATION",1.1,"chart"),A(t,3,-.1,-.6,.8,"EXTRACTION");const G=s(t,-1.3,-1.68,1);for(let I=0;I<4;I++){const k=c(G,.14,.035,[-.7+I*.5,0,0],n.steel);k.rotation.x=-Math.PI/2}const x=o(t,.1,[-2,.9,.2],n.lit);le(I=>x.position.x=-2+I*1.5),Ce("CUSTOMER APPLICATION",-.7,2.1,-.4,3);break}case"line-evidence":{const G=X(t,1.6,.15,-.25,"CONTRACT TERMS",1.45),x=s(t,-1.9,.15,.5);a(x,[1.65,3.6,.06],[0,0,0],n.ivory),u(x,"LINE ITEMS",[0,1.38,.05],1.4,"#173440");for(let j=0;j<10;j++)a(x,[1.2,.025,.025],[0,1.02-j*.25,.05],n.ink,!1);const I=a(x,[1.52,.19,.04],[0,.27,.06],n.color),k=a(G,[.2,1.2,.035],[.5,-.6,.29],n.red,!1),ce=n.tube(t,[[-1.1,.42,.6],[0,.42,1.4],[1,.1,1.2],[2.3,-.6,.2]],.025,n.color),P=o(t,.09,[-1.1,.42,.6],n.lit),se=new z;le(j=>{ce.curve.getPoint(Ne(j),se),P.position.copy(se),I.position.y=.77-Ne(j)*.75,k.position.y=-.6-Ne(j)*.2}),Ce("A LINE. ITS SOURCE. ITS TERMS.",0,-2.6,.3,4.4);break}case"review-sorter":{Z(t,0,-1.6,0),W(t,-1.2,-1.5,0,.9);const G=["ACCEPT","RECHECK","REVIEW"].map(I=>Ye(h(t,-3.3,-1.34,0,I,.38)));le(I=>G.forEach((k,ce)=>{const P=Ne(I,ce*.07,.65+ce*.12),se=Ne(P,.55,1);k.position.set(jt(-3.3,2.5,P),jt(-1.34,[-.55,-1.15,-1.75][ce],se),jt(0,[-1.6,0,1.7][ce],se))}));const x=[b(t,2.5,-.7,-1.6,"ACCEPT",.7),b(t,2.6,-1.3,0,"RECHECK",.7),b(t,2.5,-1.9,1.7,"REVIEW",.7)];le(I=>{x.forEach((k,ce)=>k.rotation.z=Math.sin(I*5+ce)*.03)}),Ce("VERIFY",-1.2,1.5,0,2);break}case"audit-inspection":{h(t,-2,.3,-.15,"AUDIT LEDGER",1.35);const G=h(t,-2,.3,-.35,"EXCLUDED ROWS",1.2),x=s(t,2,.1,.5);a(x,[2.25,3.25,.45],[0,0,0],n.steel),a(x,[1.82,.66,.035],[0,1.02,.25],n.ink),u(x,"VARIANCE",[0,1.02,.28],1.6);for(let k=0;k<4;k++)for(let ce=0;ce<3;ce++)a(x,[.43,.38,.12],[(ce-1)*.57,.31-k*.56,.28],ce===2?n.color:n.ivory);const I=a(t,[1.45,.22,.04],[-2,-.46,.1],n.red);le(k=>{G.position.x=jt(-2,-.1,Ne(k)),G.rotation.z=Ne(k)*-.12,I.position.y=.7-Ne(k)*1.3,x.rotation.y=-.15+Ne(k)*.25});break}case"repair-bench":{g(t,0,-1.7,0);const G=S(t,0,.15,.25,1.05),x=N(t,2,.8,.8,1.1),I=re(t,-2.8,-.1,-.3,.9);f(t,2.3,.15,-1.6,"FIX → PR",.6),le(k=>{G.rotation.z=Ne(k)*Math.PI*.7,x.rotation.z=-.9+Ne(k)*1.2,I.userData.elbow.rotation.z=-.3+Math.sin(k*Math.PI)*.5});break}case"document-archive":{const G=J(t,2,0,-.6,1.1);d(t,-2,-.7,.6,"HOSPITAL ERP",1.1);const x=h(t,-2,1,.5,"DOCUMENT",.75);le(I=>{x.position.x=jt(-2,2,Ne(I)),x.position.y=Math.sin(I*Math.PI)*1.2+.4,x.rotation.y=Ne(I)*Math.PI/2,G.userData.drawers[1].position.z=.85+Math.sin(I*Math.PI)*1.1}),Ce("DETERMINISTIC INGESTION",0,-2.7,1,4);break}case"tenant-lockers":{const G=[Y(t,-2.7,0,0,.65),Y(t,0,0,-.45,.75),Y(t,2.7,0,0,.65)],x=O(t,0,.1,2,.65);["TENANT A","TENANT B","TENANT C"].forEach((I,k)=>Ce(I,(k-1)*2.7,2,.2,2)),le(I=>{G[1].userData.door.rotation.y=-Ne(I)*.7,x.rotation.y=-.2+I*.4});break}case"guarded-assistant":{_(t,-1.5,-.25,0,"ASSISTANT",1.35);const G=O(t,2,.3,.6,1.2),x=c(t,2.2,.05,[-1.5,0,-.6],n.color,Math.PI*1.6);x.rotation.z=.6;const I=h(t,-1.4,1,1.1,"GROUNDED ANSWER",.62);le(k=>{I.position.y=jt(-.5,1.1,Ne(k)),I.scale.setScalar(.45+.17*Ne(k)),G.rotation.y=-.2+Ne(k)*.4});break}case"claims-desk":{g(t,0,-1.7,0),d(t,-2,-.1,0,"CASE",1.1);const G=h(t,.4,.15,.3,"DEMAND LETTER",1);he(t,2.3,-.65,1,.8);const x=p(t,.4,2,.5,.8);le(I=>{x.position.y=jt(2,.55,Ne(I,.2,.65))+Math.sin(Ne(I,.65,1)*Math.PI)*.7,G.rotation.z=-.04+Ne(I)*.04});break}case"recovery-conveyor":{Z(t,0,-1.7,0);const G=oe(t,-2.7,1,.1,.8),x=re(t,1,.1,-.8,1.1),I=Ye(h(t,-1,-1.45,.1,"STALLED",.6));b(t,2.9,-1.4,.1,"RECOVERED",.8),le(k=>{G.rotation.z=Ne(k)*Math.PI,I.position.x=jt(-1,2.9,Ne(k)),I.position.y=-1.45+Math.sin(k*Math.PI)*2,x.userData.elbow.rotation.z=-.4+Ne(k)*1.1});break}case"release-dock":{A(t,-2,.2,-.5,.85,"PRODUCTION"),a(t,[3.8,.18,2],[1.5,-1.7,0],n.steel);const G=a(t,[1.3,1.3,1.3],[2.6,-.8,0],n.color);u(G,"RELEASE",[0,0,.52],1,"#152e3a");const x=h(t,-2.2,1.1,1.05,"CUTOVER",.45);le(I=>{G.position.x=jt(2.6,-1.6,Ne(I)),G.rotation.y=Ne(I)*Math.PI*.5,x.position.y=.9+Ne(I)*.5});break}case"team-table":{g(t,0,-.6,0,.9),_(t,0,.35,0,"PR REVIEW",.65);const G=[];for(let x=0;x<6;x++){const I=x/6*Math.PI*2,k=$(t,Math.cos(I)*3,-.2,Math.sin(I)*1.9,.9);k.rotation.y=-I-Math.PI/2,G.push(k)}le(x=>G.forEach((I,k)=>I.rotation.z=Math.sin(x*Math.PI+k)*.045));break}case"clinic-miniature":{L(t,0,.1,-.6,1.3,!0),T(t,3.15,.1,.8,.62),M(t,-3,.1,.8,.8);const G=$(t,0,-1.4,2,.6);le(x=>{G.position.z=2-Ne(x)*.7,G.position.x=-1+Ne(x)});break}case"blueprint-workshop":{g(t,0,-1.7,0,1.05),Ye(h(t,-.4,-1.53,.2,"PLATFORM PLAN",1.4)),a(t,[3.5,.06,.23],[0,-1.46,1.1],n.steel);for(let I=0;I<15;I++)a(t,[.018,.015,.14],[-1.5+I*.2,-1.42,1.1],n.ink,!1);const G=L(t,1.9,-.5,-.3,.52,!0),x=l(t,[-2,-.8,1],[-1.3,1.4,1],.09,n.color);le(I=>{x.position.x=Ne(I)*1.4,G.position.y=-.7+Ne(I)*.4});break}case"reception-booking":{const G=M(t,-2.8,.4,0,1.1),x=T(t,1.7,.2,0,1.1),I=s(t,1.7,0,.3);l(I,[0,0,0],[.3,-.6,0],.06,n.steel),l(I,[0,0,0],[.6,-.3,0],.06,n.steel),le(k=>{G.rotation.z=-.15+Math.sin(k*Math.PI)*.2,I.position.set(jt(-.2,2.25,Ne(k)),jt(1.5,-.2,Ne(k)),.4),x.userData.appointment.scale.setScalar(.05+.95*Ne(k,.5,.8))});break}case"model-switchboard":{const G=s(t);a(G,[5.5,3.1,.55],[0,0,0],n.ivory),["REALTIME","REASONING","CACHE"].forEach((I,k)=>{const ce=(k-1)*1.7;c(G,.35,.09,[ce,.2,.35],n.steel),u(G,I,[ce,1.1,.35],1.5,"#173342")});const x=s(t,-1.7,.2,1);n.cylinder(x,.22,.65,[0,0,0],n.rubber).rotation.x=Math.PI/2,n.tube(t,[[-3,-2.3,.5],[-2,-2,1],[-1,-.8,1],[-1.7,.2,1]],.08,n.rubber),le(I=>{x.position.x=jt(-1.7,1.7,Ne(I)),x.position.z=1-Math.sin(I*Math.PI)*.4});break}case"serverless-launch":{A(t,-2,.1,-.4,.9,"ON DEMAND");const G=re(t,2,-.2,-.6,.95),x=E(t,1.8,.4,.4,.7,"LAMBDA");a(t,[2.5,.2,2.3],[2,-1.85,0],n.ivory),le(I=>{x.position.y=-.4+Ne(I)*1.8,x.rotation.y=Ne(I)*.5,G.userData.elbow.rotation.z=-.2+Ne(I)*.6});break}case"module-toolbox":{a(t,[6.4,1.65,2.7],[0,-.95,0],n.color);const G=s(t,0,-.12,-1.3);a(G,[6.4,2.3,.16],[0,1.15,0],n.color);const x=["ROUTER","HANDLER","SERVICE","MODELS","RESOURCE"].map((I,k)=>X(t,(k-2)*1.12,.35,.2,I,.62));le(I=>{G.rotation.x=-Ne(I)*.3,x.forEach((k,ce)=>k.position.y=.35+Math.sin(Ne(I,ce*.07,.6+ce*.07)*Math.PI)*.8)});break}case"onboarding-cabinet":{const G=J(t,-1.7,.1,-.4,1.1),x=h(t,2,.2,.6,"NEW PRACTICE",.95);$(t,2,.65,.73,.42);const I=O(t,1.8,-1.4,.8,.45);le(k=>{G.userData.drawers[2].position.z=.85+Ne(k)*1.1,x.position.x=2-Ne(k)*.4,I.rotation.y=k*.5});break}case"dashboard-handoff":{f(t,-2,.3,-.2,"DEVELOPMENT",.95,"form"),f(t,2,.3,-.2,"PRODUCTION",.95,"form");const G=E(t,0,-1,.8,.43,"BUILD"),x=S(t,0,1.6,0,.5);le(I=>{G.position.x=jt(-1.8,1.8,Ne(I)),G.position.y=-1+Math.sin(I*Math.PI)*1.5,x.rotation.z=Ne(I)*Math.PI});break}case"launch-planner":{g(t,0,-1.8,0),T(t,-2,.3,-.3,.85),_(t,1,.15,.2,"LAUNCH PLAN",.85,"chart");const G=s(t,3,.8,.6),x=n.mesh(G,new Jr(.65,1.5,24,1,!0),n.color);x.rotation.z=-Math.PI/2,l(G,[-.4,0,0],[-.4,-.8,0],.12,n.rubber),le(I=>{G.rotation.z=Math.sin(I*Math.PI)*.2});break}case"franchise-street":{for(let x=0;x<3;x++)L(t,(x-1)*2.7,-.2,Math.abs(x-1)*-.7,.7);const G=[$(t,-2,-1.3,1.4,.55),$(t,0,-1.3,1.8,.55),$(t,2,-1.3,1.4,.55)];le(x=>G.forEach((I,k)=>{I.position.z=1.7-Ne(x)*.5,I.rotation.y=(k-1)*.2}));break}case"language-tuning":{const G=E(t,0,.5,0,1.15,"LLAMA-3"),x=[];for(let I=0;I<3;I++){const k=(I-1)*1.35;a(t,[.1,1.7,.08],[k,-1.5,.4],n.steel),x.push(a(t,[.55,.2,.2],[k,-1.5,.5],n.color))}X(t,-3,-.2,.2,"DOMAIN DATA",.75),Ce("SFT  /  LoRA  /  DPO",0,2.7,0,3.8),le(I=>{x.forEach((k,ce)=>k.position.y=-1.5+Math.sin(I*Math.PI+ce)*.6),G.rotation.y=-.15+I*.3});break}case"sales-workstations":{const G=[];for(let x=0;x<4;x++){const I=(x-1.5)*2,k=s(t,I,Math.abs(x-1.5)*-.4,0,.6);g(k,0,-1.5,0,.7),x===0&&M(k,0,.4,.3),x===1&&he(k,0,.2,.3),x===2&&d(k,0,.3,.3,"FDD"),x===3&&_(k,0,.2,.3,"RESPOND"),u(k,["INBOUND","OUTBOUND","TARGET","RESPOND"][x],[0,2.2,0],2.7),G.push(k)}le(x=>G.forEach((I,k)=>I.position.y=Math.abs(k-1.5)*-.4+Math.sin(x*Math.PI+k)*.09));break}case"lead-funnel":{const G=n.mesh(t,new Jr(2.3,2.3,32,1,!0),new os({color:e,metalness:.5,roughness:.3,side:Ln}),[0,.8,0]);G.rotation.z=Math.PI,n.cylinder(t,.35,1.25,[0,-.9,0],n.steel);const x=Array.from({length:7},(I,k)=>h(t,Math.cos(k)*2,2.7,Math.sin(k),"LEAD",.25));b(t,0,-2.1,0,"QUALIFIED",1.2),le(I=>x.forEach((k,ce)=>{const P=(I*.7+ce/7)%1;k.position.set(Math.cos(ce)*2*(1-P),2.9-P*4.4,Math.sin(ce)*(1-P)),k.rotation.z=P*.5}));break}case"retrieval-library":{a(t,[6.4,.18,1.5],[0,-1.4,0],n.wood);for(let x=0;x<6;x++){const I=X(t,(x-2.5)*1,.15,-.3,["INTENT","CONTEXT","SOURCE","QUERY","RAG","EVAL"][x],.62);I.rotation.y=-.2}const G=m(t,-2,.5,1,.9);f(t,2.3,1.7,-1,"EVALUATION",.55,"chart"),le(x=>G.position.x=jt(-2,2,Ne(x)));break}case"pitch-room":{f(t,.2,.8,-.5,"ML PRODUCT",1.35,"chart"),l(t,[-1,-.7,-.5],[-1.7,-2.5,.2],.07,n.steel),l(t,[1,-.7,-.5],[1.7,-2.5,.2],.07,n.steel);const G=$(t,-3,-.7,.4,1.25);d(t,2.9,-.65,1,"RESEARCH",.8),le(x=>G.rotation.y=-.15+Ne(x)*.3);break}case"conversation-terminals":{C(t,-2,0,0,.9),_(t,1.6,-.25,0,"WEB CONVERSATION",1.2);const G=Array.from({length:3},(x,I)=>o(t,.1,[.7+I*.38,.3,1.25],n.lit));le(x=>G.forEach((I,k)=>I.position.y=.3+Math.sin(x*8+k)*.1));break}case"multimodal-instruments":{R(t,-3,-.1,.1,.9),nt(t,3,.4,-.1,.7),X(t,0,.2,0,"TEXT",1.05);const G=c(t,2.1,.065,[0,.3,-1.2],n.color,Math.PI);le(x=>{G.rotation.z=Ne(x)*.15}),Ce("SPEECH   /   LANGUAGE   /   EXPRESSION",0,-2.65,.2,6.8);break}case"sentiment-dial":{const G=s(t,-1.7,.3,0);n.mesh(G,new io(1.9,48),n.ivory),c(G,1.9,.1,[0,0,.03],n.steel);for(let I=0;I<11;I++){const k=Math.PI*.15+I*Math.PI*.07;l(G,[Math.cos(k)*1.5,Math.sin(k)*1.5,.06],[Math.cos(k)*1.7,Math.sin(k)*1.7,.06],.035,n.ink)}const x=s(G);l(x,[0,0,.1],[1.25,.7,.1],.055,n.color),o(G,.15,[0,0,.12],n.steel),u(G,"SENTIMENT",[0,-.85,.07],2.3,"#173440"),C(t,2.4,.05,0,.85),le(I=>x.rotation.z=jt(1.2,-.2,Ne(I)));break}case"protected-cloud":{const G=Y(t,0,-.2,0,1.2);X(t,-3,-.5,1,"AUDIT LOG",.8);const x=s(t,0,2.3,-.5);for(let k=0;k<5;k++)o(x,.55+Math.sin(k)*.15,[(k-2)*.62,Math.sin(k)*.18,0],n.ivory);const I=O(t,2.7,.25,1,.8);le(k=>{G.userData.door.rotation.y=-.65+Ne(k)*.65,I.rotation.y=Ne(k)*.3});break}case"data-refinery":{D(t,-2.8,.15,0,.85,"S3");const G=s(t,0,.1,0);for(const I of[-.7,0,.7]){const k=c(G,1.2,.08,[0,I,0],n.steel);k.rotation.x=Math.PI/2;for(let ce=-2;ce<=2;ce++)l(G,[-.9,I,ce*.3],[.9,I,ce*.3],.02,n.steel)}const x=Array.from({length:9},(I,k)=>o(t,.12,[(k%3-1)*.5,1.9,(Math.floor(k/3)-1)*.5],k%4?n.color:n.red));b(t,2.8,-1.6,0,"FEATURES",.9),le(I=>x.forEach((k,ce)=>{const P=(I+ce*.08)%1;k.position.y=1.9-P*3.4,k.position.x=(ce%3-1)*.5+(P>.65?(P-.65)*6:0)}));break}case"experiment-podium":{const G=["XGBOOST","LIGHTGBM","NEURAL NET"];for(let I=0;I<3;I++){const k=[1.4,2.3,.9][I];a(t,[1.9,k,1.8],[(I-1)*2.4,-2+k/2,0],n.ivory),u(t,G[I],[(I-1)*2.4,-1.75+k/2,.92],1.7,"#173440");const ce=E(t,(I-1)*2.4,k-.6,0,.55,G[I]);le(P=>ce.position.y=k-.6+Math.sin(Ne(P)*Math.PI)*.35)}const x=c(t,.42,.12,[0,2.8,.2],n.color);le(I=>x.rotation.y=Ne(I)*Math.PI*2);break}case"trading-radar":{const G=Te(t,.8,.4,0,1.1),x=[];for(let I=0;I<8;I++)x.push(o(G,.07,[Math.sin(I*2)*1.7,Math.cos(I*3)*1.5,.08],I===3?n.red:n.green));d(t,-3,-.2,.6,"REVIEW",.8),le(I=>{G.userData.sweep.rotation.z=-I*Math.PI*2,x.forEach((k,ce)=>k.scale.setScalar(ce===3?.07+.04*Math.sin(I*Math.PI):.07))});break}case"training-deployment":{const G=S(t,-2,.8,0,1.1);E(t,-2,.8,.25,.65,"TRAIN"),A(t,2,-.1,-.3,.85,"SERVE"),n.tube(t,[[-2,-.7,0],[-1,-1.8,0],[1,-1.8,0],[2,-.7,0]],.12,n.rubber);const x=E(t,-2,-.8,.7,.35,"MODEL");le(I=>{G.rotation.z=I*Math.PI,x.position.x=jt(-2,2,Ne(I)),x.position.y=-.8-Math.sin(I*Math.PI)});break}case"support-search":{f(t,0,.4,0,"SUPPORT SEARCH",1.5);const G=["MATCH 03","MATCH 02","BEST ANSWER"].map((I,k)=>h(t,(k-1)*2.1,-1.35,1,I,.55)),x=m(t,2,1,1,.65);le(I=>{G.forEach((k,ce)=>{k.position.y=-1.35+(ce===2?Ne(I)*1.25:0),k.position.z=1+(ce===2?Ne(I)*.8:0)}),x.position.x=2-Ne(I)*2.7});break}case"telecom-towers":{Me(t,-2.5,-.3,-.3,.85),Me(t,2.6,-.8,.4,.7),qe(t,0,-.6,.6,.8);const G=[];for(let x=0;x<4;x++){const I=c(t,.45+x*.34,.026,[-2.5,2.15,-.3],n.lit,Math.PI*.9);I.rotation.y=.45,I.rotation.z=-Math.PI*.45,G.push(I)}le(x=>G.forEach((I,k)=>I.scale.setScalar(.8+(x+k*.17)%1*.55)));break}case"network-control-room":{g(t,0,-1.65,.3,1.1),f(t,-2,0,-.6,"LATENCY",.82,"chart"),f(t,.1,.85,-.8,"LIVE NETWORK",.95,"chart"),f(t,2.4,-.1,-.5,"RELEASES",.78),o(t,.13,[2.6,1.6,-.3],n.green);const G=S(t,-2.2,-1.35,1.2,.3);le(x=>G.rotation.z=x*Math.PI);break}case"config-typewriter":{_(t,-1.9,.1,0,"AGENTS.md",1.2);const G=["CLAUDE","CURSOR","COPILOT","WINDSURF"].map((x,I)=>h(t,1.8+I*.22,-.15+I*.16,-I*.2,x,.7));le(x=>G.forEach((I,k)=>{I.position.x=1.6+Ne(x)*(k-1.5)*.7,I.rotation.z=(k-1.5)*.045*Ne(x)}));break}case"config-inspector":{d(t,-1,.1,0,"CONFIG AUDIT",1.3),h(t,-1,.1,.5,"CHECK RESULTS",1.1);const G=m(t,-1,1.1,1,.8),x=p(t,2,.1,.5,1.4);for(let I=0;I<3;I++)n.check(t,.1,.4-I*.4,.6,.17);le(I=>{G.position.y=1.1-I*1.5,x.position.y=.6-Math.sin(I*Math.PI)*.4});break}case"debate-roundtable":{n.cylinder(t,2.6,.2,[0,-1.1,0],n.wood),[[-2,.2,.2],[0,.8,-1.6],[2,.2,.2]].forEach((x,I)=>{const k=R(t,...x,.68);Ce(["CLAUDE","GEMINI","CHATGPT"][I],x[0],x[1]+1.5,x[2],1.8),le(ce=>k.rotation.z=Math.sin(ce*Math.PI*2-I)*.035)}),Ye(h(t,0,-.96,.6,"DISCUSSION",.7));break}case"debate-transcript":{const G=s(t,-1,0,0);a(G,[3.2,1.7,2],[0,0,0],n.ivory),a(G,[2.6,.18,.15],[0,.1,1.04],n.rubber),a(G,[1.6,.1,.7],[0,.91,-.3],n.ink);const x=h(t,-1,-.85,1.4,"TRANSCRIPT.md",.9),I=oe(t,2.3,.2,0,1);le(k=>{x.position.y=-.25-Ne(k)*1.3,I.rotation.z=Ne(k)*Math.PI});break}case"edge-phone":{const G=C(t,0,0,0,1.2,"ON DEVICE"),x=E(t,2.8,-.3,.2,.75,"HEXAGON");R(t,-2.8,-.2,.3,.7),le(I=>{G.rotation.y=-.22+Ne(I)*.44,x.rotation.y=-.25+Ne(I)*.5,G.userData.wave.children.forEach((k,ce)=>k.scale.y=.2+Math.abs(Math.sin(ce*.6+I*6))*1.5)});break}case"audio-mixing":{const G=s(t,0,-.25,0);a(G,[5.1,3.5,.55],[0,0,0],n.ink);const x=[];["AUDIO","TEXT","FUSION"].forEach((I,k)=>{const ce=(k-1)*1.5;u(G,I,[ce,1.35,.31],1.3),a(G,[.065,1.8,.03],[ce,-.1,.31],n.steel),x.push(a(G,[.55,.2,.16],[ce,-.1,.4],n.color));for(let P=0;P<5;P++)a(G,[.18,.09,.03],[ce+.45,-.8+P*.3,.32],n.lit,!1)}),M(t,3.6,.1,.3,.65),le(I=>x.forEach((k,ce)=>k.position.y=-.3+Math.sin(I*Math.PI+ce)*.6));break}case"knowledge-library":{for(const I of[-1.5,1.1])a(t,[6.4,.16,1.4],[0,I,0],n.wood);const G=[];for(let I=0;I<7;I++)G.push(X(t,(I-3)*.85,-.15,-.1,["DOCS","WIKI","NOTES","SOURCE","VECTOR","GRAPH","CITE"][I],.6));const x=h(t,0,.7,1,"CITATION",.6);le(I=>{G[3].position.z=-.1+Ne(I)*.8,x.position.y=.7+Ne(I)*.5});break}case"agent-toolbench":{g(t,0,-1.8,0);const G=re(t,-2,.1,-.7,1.2);N(t,.4,-.15,.6,.8);const x=S(t,2,.2,0,.9),I=s(t,0,1.3,.3);a(I,[1.6,.7,.6],[0,0,0],n.steel);for(let k=0;k<4;k++)a(I,[.08,.5,.08],[-.45+k*.3,.5,0],n.color);u(I,"MCP",[0,0,.32],1.2,"#173440"),le(k=>{G.userData.elbow.rotation.z=-.4+Ne(k)*.7,x.rotation.z=-Ne(k)*Math.PI});break}case"browser-autofill":{f(t,.5,.4,-.25,"CHROME · FORM",1.45,"form"),d(t,-3,-.3,.5,"KNOWLEDGE",.8);const G=l(t,[1,-1,.7],[1.6,.9,.7],.095,n.color);le(x=>G.position.y=jt(.55,-.55,Ne(x)));break}case"human-review":{d(t,-.6,.1,0,"PROPOSED ANSWERS",1.3),h(t,-.6,.1,.45,"REVIEW",1.1);const G=s(t,2.3,.15,.7);n.check(G,0,0,0,.9);const x=m(t,-.7,.4,1,.72);le(I=>{x.position.y=.7-Ne(I)*1.1,G.scale.setScalar(.15+.85*Ne(I,.4,.8))});break}case"resume-scales":{const G=$e(t,0,.2,0,1.3);h(G.userData.beam,-1.9,-.8,0,"RESUME",.55),h(G.userData.beam,1.9,-.8,0,"JOB ROLE",.55),le(x=>G.userData.beam.rotation.z=jt(-.18,.04,Ne(x)));break}case"fullstack-workspace":{_(t,-2,-.15,.4,"REACT",1.1,"form"),A(t,1.1,-.1,-1,.7,"FLASK"),D(t,3.15,-.9,.5,.7,"MONGODB");const G=O(t,.4,1.5,1,.55);le(x=>G.rotation.y=-.3+x*.6);break}case"mask-detection":{Be(t,1.6,.1,0,1.35,!0);const G=nt(t,-2.4,.15,1,1);G.rotation.y=.38;const x=s(t,1.6,.6,1.2);for(const I of[-1,1])for(const k of[-1,1])l(x,[I*.95,k*1.2,0],[I*.6,k*1.2,0],.035,n.green),l(x,[I*.95,k*1.2,0],[I*.95,k*.85,0],.035,n.green);le(I=>x.scale.setScalar(1.1-Ne(I)*.15));break}case"training-lighttable":{g(t,0,-1.7,0);for(let x=0;x<3;x++){const I=s(t,(x-1)*1.7,-.6,.15,.52);h(I,0,0,0,"TRAINING",1.1),Be(I,0,0,.2,.6,x%2===0)}const G=E(t,0,1.5,-.6,.65,"TENSORFLOW");le(x=>G.rotation.y=-.3+Ne(x)*.6);break}case"expression-study":{const G=[Be(t,-2.5,0,-.5,.9),Be(t,0,0,.4,1.1),Be(t,2.5,0,-.5,.9)];G[0].userData.mouth.rotation.z=Math.PI,G[2].userData.mouth.scale.y=.1,["EXPRESSION A","EXPRESSION B","EXPRESSION C"].forEach((x,I)=>Ce(x,(I-1)*2.5,-2.05,.4,2)),le(x=>G.forEach((I,k)=>I.rotation.y=(k-1)*-.18+Math.sin(x*Math.PI)*.1));break}case"data-exploration-lab":{X(t,-2.2,.2,.3,"EDA NOTEBOOK",1.4),f(t,1.4,.3,-.2,"DISTRIBUTIONS",1.25,"chart");const G=m(t,-2,.4,1.2,.65),x=[n.color,n.red,n.green];for(let I=0;I<3;I++)n.cylinder(t,.25,.15,[I*.65+.7,-1.65,1],x[I]);le(I=>G.position.y=.8-Ne(I)*1.2);break}default:throw new Error(`No semantic scene for ${r.type}`)}return t.userData.objectScene=r.type,{group:t,update(G){i.forEach(x=>x(G)),t.rotation.y=-.06+Ne(G)*.12}}}const jy=new Set([Tp,Ap,wp]),Ky=go.clamp,Jy=(r,e,t)=>{const n=Ky((t-r)/(e-r),0,1);return n*n*(3-2*n)};function Zy(r){const e=new Set,t=new Set;r.traverse(n=>{n.geometry&&!jy.has(n.geometry)&&t.add(n.geometry),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(i=>e.add(i))}),t.forEach(n=>n.dispose()),e.forEach(n=>{for(const i of Object.values(n))i?.isTexture&&i.dispose();n.dispose()}),r.removeFromParent()}function Qy(r,e){const t=$y(r,e),n=new Ui;return n.add(t.group),{group:n,update:t.update,dispose(){Zy(n)}}}function eS(r,e){return e.map((t,n)=>{const i=new Ui;i.position.z=-n*44,r.add(i);const s=ui(t.background,.45,.37),a=ui("#425264",.75,.3),o=Cp(t.accent,.9);Ee(i,[32,.35,44],[0,-4,-9],s);const l=[];for(let _=0;_<6;_++){const g=10-_*8;for(const m of[-1,1]){const p=Ee(i,[.25,12,.35],[m*11,2,g],a);l.push(p),Ee(i,[.045,9,.05],[m*10.85,2,g+.2],o,!1)}Ee(i,[22,.18,.3],[0,8,g],a)}for(const _ of[-1,1])Ee(i,[.027,.015,43],[_*7,-3.81,-9],o,!1);const c=new Ui;c.position.z=-19,i.add(c),Ee(c,[.2,10,.3],[-6,1,0],a),Ee(c,[.2,10,.3],[6,1,0],a),Ee(c,[12.2,.2,.3],[0,6,0],a),Rp(c,t.company.toUpperCase(),[0,5.2,.2],6,t.accent);const u=new Ui;u.position.set(2.2,-.1,0),i.add(u);const h=new Map;function d(_){if(!h.has(_)){const g=Qy(t.beats[_],t.accent);u.add(g.group),h.set(_,g)}return h.get(_)}function f(_,g){const m=_+1<t.beats.length?_+1:null,p=m===null?0:Jy(.8,1,g);d(_),g>.68&&m!==null&&d(m),h.forEach((b,T)=>{if(b.group.visible=T===_||p>0&&T===m,b.group.visible){const M=T===m;b.update(M?0:g);const C=M?1-p:-p;b.group.position.set(C*9,0,-Math.abs(C)*5),b.group.rotation.y=C*.55,b.group.scale.setScalar(1-Math.abs(C)*.25)}});for(const[b,T]of h)Math.abs(b-_)>1&&(T.dispose(),h.delete(b));l.forEach((b,T)=>{b.scale.y=10.5+Math.sin(_*.8+T*.9+g)*1.5})}return{group:i,update:f,floorMat:s,cache:h,ensure:d,dispose(){h.forEach(_=>_.dispose()),h.clear()}}})}function Pp(r){let e=0;return{starts:r.map((n,i)=>{const s=e;return e+=n.beats.length+(i<r.length-1?.5:0),s}),total:e}}function Dp(r,{id:e,eyebrow:t,title:n,invitation:i,records:s},a,o){const{starts:l,total:c}=Pp(r),u=e==="experience"?"experience":"github";return`<section class="journey journey-detailed" id="${e}" data-film="${u}" aria-labelledby="${e}-title"><div class="journey-entry"><div><span class="section-tag">${t}</span><h2 id="${e}-title">${n}</h2></div><div class="journey-invitation"><span class="journey-scroll-icon" aria-hidden="true">↓</span><p>${i}</p><a href="#${e}-records">Browse the details ${o}</a></div></div>
 <div class="journey-track" style="--film-units:${c}"><div class="journey-stage">
 <div class="journey-canvas" aria-hidden="true"></div><div class="journey-shade" aria-hidden="true"></div>
 <div class="journey-hud"><a href="#home" class="journey-signature">ng<span>®</span></a><span class="journey-location">${a(r[0].company)}</span><div><button class="journey-motion" aria-label="Turn animations off">Motion on</button><a href="#${e}-records">Skip journey ↗</a></div></div>
 <div class="journey-narratives">${r.map((h,d)=>{const f=h.beats[0];return`<article class="journey-story" data-world="${d}" inert aria-hidden="true"><div class="journey-company"><span class="journey-chapter-number">${String(d+1).padStart(2,"0")}</span><span>${a(h.company)}</span><small>${a(h.year)}</small></div><p class="journey-role">${a(h.role)}</p><div class="journey-point-counter">Point <span>01 / ${String(h.beats.length).padStart(2,"0")}</span></div><h3>${a(f.title)}</h3><p class="journey-description">${a(f.caption)}</p><div class="journey-story-actions"><button class="journey-details" data-point-detail="${u}" data-company="${d}" data-point="0" aria-haspopup="dialog">Read this point ${o}</button>${u==="github"?`<a class="journey-repository-link" href="${h.url}" target="_blank" rel="noopener noreferrer">Repository ${o}</a>`:""}</div><div class="journey-metric"><strong>${a(f.metric)}</strong><span>${a(f.metricLabel)}</span></div></article>`}).join("")}</div>
 <div class="journey-point-controls"><button data-point-prev aria-label="Previous point">←</button><div><label for="${e}-point-select">Explore a point</label><select id="${e}-point-select" class="journey-point-select">${r[0].beats.map((h,d)=>`<option value="${d}">${String(d+1).padStart(2,"0")} · ${a(h.title)}</option>`).join("")}</select></div><button data-point-next aria-label="Next point">→</button></div>
 <div class="journey-bottom"><div class="journey-stage-label"><span class="journey-step-number">01 / ${String(r[0].beats.length).padStart(2,"0")}</span><span class="journey-step-text">${a(r[0].beats[0].labels.join(" → "))}</span></div><nav class="journey-chapters" aria-label="${u==="github"?"GitHub project":"Experience"} chapters">${r.map((h,d)=>`<a href="#${u}-${h.id}" data-chapter="${d}" aria-label="Go to ${a(h.company)}"><span class="journey-nav-number">${String(d+1).padStart(2,"0")}</span><span class="journey-nav-name">${a(h.company)}</span><i></i></a>`).join("")}</nav><div class="journey-scroll-cue">Scroll through each point <span>↓</span></div></div>
 <div class="journey-loading" role="status"><span>Preparing the journey</span><i></i></div></div>
 ${r.map((h,d)=>`<div class="journey-anchor" id="${u}-${h.id}" style="top:calc(${(l[d]+.2)/c*100}% - ${(l[d]+.2)/c*100}svh)" aria-hidden="true"></div>`).join("")}</div>
 <div class="journey-records" id="${e}-records">${s}</div></section>`}const Aa=go.clamp,qo=go.lerp,$o=(r,e,t)=>{const n=Aa((t-r)/(e-r),0,1);return n*n*(3-2*n)},nd={calm:"#22434f",warm:"#654124",build:"#384969",flow:"#145662",alert:"#5f2436",resolve:"#215645",secure:"#202744"};function Ip({selector:r,chapters:e,diagnosticsKey:t}){const n=document.querySelector(r),i=n.querySelector(".journey-track"),s=n.querySelector(".journey-stage"),a=n.querySelector(".journey-canvas"),o=n.dataset.film,{starts:l,total:c}=Pp(e),u=[...n.querySelectorAll(".journey-story")],h=[...n.querySelectorAll("[data-chapter]")],d=n.querySelector(".journey-point-select"),f=n.querySelector(".journey-location"),_=n.querySelector(".journey-step-text"),g=n.querySelector(".journey-step-number"),m=n.querySelector("[data-point-prev]"),p=n.querySelector("[data-point-next]"),b=u.map(K=>({el:K,title:K.querySelector("h3"),copy:K.querySelector(".journey-description"),metric:K.querySelector(".journey-metric strong"),metricLabel:K.querySelector(".journey-metric>span"),counter:K.querySelector(".journey-point-counter span"),detail:K.querySelector("[data-point-detail]")}));let T=matchMedia("(prefers-reduced-motion: reduce)").matches,M=!1,C=!1,R=!1,A=!1,D,E,S,N,O,Y,$,X,J,Z,W=0,he=0,L=0,Me=0,qe=0,nt=1,Be=0,$e=0,re=-1,oe=-1,Te=0,le=0,Ce=0,Ye=0,G=0;const x=e.map(K=>new tt(K.accent)),I=e.map(K=>K.beats.map(me=>new tt(K.background).lerp(new tt(nd[me.mood]||nd.calm),.32))),k=new z,ce=new z,P=new z,se=new z,j=new tt,te=new tt,ne={revision:kl,backend:"WebGL2",frames:0,progress:0,activeWorld:0,activePoint:0,ready:!1,starts:l,total:c,pointCounts:e.map(K=>K.beats.length)};window[t]=ne;function B(K){let me=0;for(let Pe=1;Pe<l.length&&K>=l[Pe];Pe++)me=Pe;const be=Math.max(0,K-l[me]),pe=e[me].beats.length,De=Math.min(pe-1,Math.floor(be)),Ge=Aa(be-De,0,1),Se=me<e.length-1?$o(pe,pe+.5,be):0;return{chapter:me,point:De,p:Ge,cross:Se,rel:be}}function y(K){M=!0,n.classList.add("journey-unavailable"),n.dataset.fallback=K,cancelAnimationFrame(W),W=0,n.querySelector(".journey-loading").hidden=!0}function v(){if(!(R||M||T||C))try{D=new Oy({antialias:!0,alpha:!1,powerPreference:"high-performance"}),D.outputColorSpace=In,D.toneMapping=ih,D.toneMappingExposure=1.08,D.info.autoReset=!1,D.shadowMap.enabled=innerWidth>=900,D.shadowMap.type=Gd,a.appendChild(D.domElement),D.domElement.setAttribute("aria-hidden","true"),D.domElement.addEventListener("webglcontextlost",pe=>{pe.preventDefault(),y("context-lost")}),E=new fp,E.background=new tt(e[0].background),E.fog=new ph(e[0].background,.032),S=new $n(45,1,.1,120);const K=new Pu(D),me=new Fy;Y=K.fromScene(me,.04),E.environment=Y.texture,E.environmentIntensity=.6,me.dispose(),K.dispose(),Z=new $_("#d0e5ff",e[0].background,1.35),E.add(Z),X=new J_("#fff1df",3),X.castShadow=!0,X.shadow.mapSize.set(1024,1024),Object.assign(X.shadow.camera,{left:-10,right:10,top:10,bottom:-8,near:.5,far:35}),X.shadow.bias=-5e-4,X.shadow.normalBias=.035,E.add(X,X.target),J=new xp(e[0].accent,90,32,2),E.add(J),$=eS(E,e);const be=new gi(1,1,{type:Bi,samples:Math.min(4,D.capabilities.maxSamples)});N=new Hy(D,be),N.addPass(new Wy(E,S)),O=new ta(new We(1,1),.23,.45,1.3),N.addPass(O),N.addPass(new Yy),R=!0,ne.ready=!0,n.classList.add("journey-ready"),n.querySelector(".journey-loading").hidden=!0,q(),U(),Be=$e,Le()}catch(K){console.warn("3D unavailable; readable records remain available.",K),y("webgl-unavailable")}}function U(){qe=scrollY+i.getBoundingClientRect().top,nt=Math.max(1,i.offsetHeight-s.offsetHeight),$e=Aa((scrollY-qe)/nt,0,1)*c}function q(){U(),R&&(L=s.clientWidth,Me=s.clientHeight,!(L<2||Me<2)&&(D.setPixelRatio(Math.min(devicePixelRatio,L<900?1.25:1.5)),D.setSize(L,Me),N.setPixelRatio(D.getPixelRatio()),N.setSize(L,Me),O.enabled=L>=900,S.aspect=L/Me,S.fov=L<700?52:45,S.updateProjectionMatrix(),D.shadowMap.enabled=L>=900,Le()))}function ae(K,me,be,pe,De){const Ge=-K*44,Se=L<700,Pe=(me+be)/e[K].beats.length,Oe=-.12+Pe*.32,Xe=Math.sin(be*Math.PI)**2,_t=e[K].beats[me].type,it=["review-sorter","recovery-conveyor","data-refinery"].includes(_t),Et=Se?18.5:16.7-Xe*1.7;pe.set(2.2+Math.sin(Oe)*Et,Se?4.8:3.6-Xe*.5,Ge+Math.cos(Oe)*Et),De.set(Se?2.2:-1.25,Se?it?1.5:3.2:it?-.4:.1,Ge-1.2)}function Q(K){const me=1-Math.exp(-K*10);Be=qo(Be,$e,me),Ye=qo(Ye,le,me),G=qo(G,Ce,me);const{chapter:be,point:pe,p:De,cross:Ge}=B(Be),Se=e[be].beats[pe];$.forEach((Xe,_t)=>{Xe.group.visible=_t===be||Ge>0&&_t===be+1,Xe.group.visible?Xe.update(_t===be?pe:0,_t===be?De:0):Xe.cache.size&&Xe.dispose()}),ae(be,pe,De,k,ce),Ge>0&&(ae(be+1,0,0,P,se),k.lerp(P,Ge),ce.lerp(se,Ge)),S.position.copy(k),S.position.x+=Ye*.45,S.position.y+=G*.25,S.lookAt(ce),S.rotateZ(Math.sin(Ge*Math.PI)*-.02);const Pe=qo(-be*44,-(be+1)*44,Ge);X.position.set(1,10,Pe+7),X.target.position.set(2,0,Pe),X.target.updateMatrixWorld(),J.position.set(5,2,Pe-3),j.copy(x[be]),te.copy(I[be][pe]);const Oe=pe+1<e[be].beats.length?pe+1:pe;te.lerp(I[be][Oe],$o(.75,1,De)),Ge>0&&(j.lerp(x[be+1],Ge),te.lerp(I[be+1][0],Ge)),J.color.copy(j),E.background.copy(te),E.fog.color.copy(te),Z.groundColor.copy(te),$[be].floorMat.color.copy(te).multiplyScalar(1.2),Ge>0&&$[be+1].floorMat.color.copy(I[be+1][0]),s.style.setProperty("--environment-color",`#${te.getHexString()}`),D.toneMappingExposure=1.08-Math.sin(Ge*Math.PI)*.14,Fe(be,pe,De,Ge),D.info.reset(),O.enabled?N.render():D.render(E,S),Te++,Object.assign(ne,{frames:Te,progress:Number(Be.toFixed(4)),activeWorld:be,activePoint:pe,pointType:Se.type,background:"#"+te.getHexString(),renderCalls:D.info.render.calls,triangles:D.info.render.triangles,camera:S.position.toArray().map(Xe=>Number(Xe.toFixed(3))),cachedScenes:$.reduce((Xe,_t)=>Xe+_t.cache.size,0)})}function Fe(K,me,be,pe){const De=e[K],Ge=De.beats[me];if(re!==K&&(re=K,oe=-1,u.forEach((Pe,Oe)=>{Pe.classList.toggle("is-active",Oe===K),Pe.inert=Oe!==K,Pe.setAttribute("aria-hidden",String(Oe!==K))}),f.textContent=De.company,h.forEach((Pe,Oe)=>{Oe===K?Pe.setAttribute("aria-current","step"):Pe.removeAttribute("aria-current")}),s.style.setProperty("--journey-accent",De.accent),d.replaceChildren(...De.beats.map((Pe,Oe)=>{const Xe=document.createElement("option");return Xe.value=Oe,Xe.textContent=`${String(Oe+1).padStart(2,"0")} · ${Pe.title}`,Xe}))),oe!==me){oe=me;const Pe=b[K];Pe.title.textContent=Ge.title,Pe.copy.textContent=Ge.caption,Pe.metric.textContent=Ge.metric,Pe.metricLabel.textContent=Ge.metricLabel,Pe.counter.textContent=`${String(me+1).padStart(2,"0")} / ${String(De.beats.length).padStart(2,"0")}`,Pe.detail.dataset.point=String(me),d.value=me,g.textContent=`${String(me+1).padStart(2,"0")} / ${String(De.beats.length).padStart(2,"0")}`,_.textContent=Ge.labels.join(["pipeline","workflow","deployment"].includes(Ge.type)?" → ":" · "),m.disabled=K===0&&me===0,p.disabled=K===e.length-1&&me===De.beats.length-1}const Se=pe>0?1-$o(0,.32,pe):me<De.beats.length-1?1-$o(.82,.99,be):1;u[K].style.opacity=Se,u[K].style.transform=`translate3d(0,${-12*(1-Se)}px,0)`,u[K].inert=Se<.12,h.forEach((Pe,Oe)=>Pe.style.setProperty("--chapter-progress",Oe<K?1:Oe===K?(me+be)/De.beats.length:0))}function ve(K){if(W=0,C||T||M||!R||!A||document.hidden)return;const me=Math.min((K-he)/1e3||.016,.05);he=K,Q(me),(Math.abs(Be-$e)>15e-5||Math.abs(Ye-le)>5e-4||Math.abs(G-Ce)>5e-4)&&(W=requestAnimationFrame(ve))}function Le(){!W&&R&&A&&!T&&!M&&!document.hidden&&(he=performance.now(),W=requestAnimationFrame(ve))}function Re(){U(),Math.abs(Be-$e)>4&&(Be=$e),Le()}function _e(K){K.pointerType==="touch"||L<900||(le=(K.clientX/L-.5)*2,Ce=-(K.clientY/Me-.5)*2,Le())}function Ae(){le=Ce=0,Le()}function je(K){T=K,n.classList.toggle("journey-static",T),n.querySelector(".journey-motion").textContent=T?"Motion off":"Motion on",T?(cancelAnimationFrame(W),W=0):(A&&v(),q(),Be=$e,re=-1,Le())}function ze(K){const me=A,{chapter:be}=B(Be);if(je(K.detail.disabled),me&&T){const pe=n.querySelector(`#${o==="github"?"github-":""}record-${e[be].id}`);pe&&(pe.open=!0),n.querySelector(".journey-records").scrollIntoView({behavior:"instant"})}U()}function ye(K,me){if(K=Aa(K,0,e.length-1),me=Aa(me,0,e[K].beats.length-1),T||M){const pe=n.querySelector(`#${o==="github"?"github-":""}record-${e[K].id}`);pe.open=!0,pe.scrollIntoView({behavior:"instant"});return}U();const be=l[K]+me+.2;Be=$e=be,window.scrollTo({top:qe+be/c*nt,behavior:"instant"}),re=-1,Le(),history.replaceState(null,"",`#${o}-${e[K].id}`)}function Qe(K){K.preventDefault(),ye(Number(K.currentTarget.dataset.chapter),0)}function F(){const{chapter:K,point:me}=B(Be);me>0?ye(K,me-1):K>0&&ye(K-1,e[K-1].beats.length-1)}function ge(){const{chapter:K,point:me}=B(Be);me+1<e[K].beats.length?ye(K,me+1):K+1<e.length&&ye(K+1,0)}function xe(){document.hidden?(cancelAnimationFrame(W),W=0):Le()}const Ie=new IntersectionObserver(K=>{A=K[0].isIntersecting,A?(v(),Le()):(cancelAnimationFrame(W),W=0)},{rootMargin:"180px 0px"});Ie.observe(i);const de=new ResizeObserver(()=>q());de.observe(document.body),window.addEventListener("scroll",Re,{passive:!0}),window.addEventListener("resize",q),window.addEventListener("portfolio-motion",ze),document.addEventListener("visibilitychange",xe),s.addEventListener("pointermove",_e),s.addEventListener("pointerleave",Ae),h.forEach(K=>K.addEventListener("click",Qe)),m.addEventListener("click",F),p.addEventListener("click",ge),d.addEventListener("change",()=>ye(re,Number(d.value))),n.querySelectorAll("[data-scene-jump]").forEach(K=>K.addEventListener("click",()=>ye(Number(K.dataset.company),Number(K.dataset.point)))),n.querySelector(".journey-motion").addEventListener("click",()=>document.querySelector(".motion-control").click()),je(T),document.fonts.ready.then(()=>{if(!C){U();const K=h.find(me=>me.hash===window.location.hash);K&&ye(Number(K.dataset.chapter),0),Le()}}),window.addEventListener("pagehide",K=>{K.persisted?(cancelAnimationFrame(W),W=0):ue()}),window.addEventListener("pageshow",K=>{K.persisted&&(U(),Le())});function ue(){if(C=!0,cancelAnimationFrame(W),Ie.disconnect(),de.disconnect(),window.removeEventListener("scroll",Re),window.removeEventListener("resize",q),window.removeEventListener("portfolio-motion",ze),document.removeEventListener("visibilitychange",xe),s.removeEventListener("pointermove",_e),s.removeEventListener("pointerleave",Ae),$?.forEach(K=>K.dispose()),E){const K=new Set,me=new Set;E.traverse(be=>{be.geometry&&K.add(be.geometry),be.material&&(Array.isArray(be.material)?be.material:[be.material]).forEach(pe=>me.add(pe))}),K.forEach(be=>be.dispose()),me.forEach(be=>{for(const pe of Object.values(be))pe?.isTexture&&pe.dispose();be.dispose()}),Y?.dispose(),N?.passes.forEach(be=>be.dispose?.()),N?.dispose(),D?.dispose()}}return{setDisabled:je,dispose:ue,jump:ye}}const tS=[{title:"Lead AI Engineer — SpendRule",meta:"Remote · Full time · Apr 2026 – Present",paragraphs:["Healthcare spend-audit platform that checks hospital invoices against contract terms, used by MemorialCare, OSF HealthCare, MUSC, Kettering Health and MultiCare.","- Lead engineering across three production systems: a Python AI validation pipeline, a Next.js + Express customer app, and a cloud extraction service. Top committer on both app repos (1,230+ commits).","- Built an LLM validation pipeline (Inngest orchestration, Claude matching, Qdrant vector search, Postgres + Neo4j) that validated 35K invoice lines worth $93.6M across 11 tenants and flagged $137.6M in unvalidated spend.","- Designed a verify-then-route pipeline that checks every extracted value before routing: 81% auto-accepted, 16% second pass, 3% human review. It caught that 90% of shift rows ($37.8M of $41.5M) were being dropped during extraction. Live for MultiCare since Oct 2026.","- Led audits that surfaced $173.5M of hidden variance across 3,844 rows. A six-agent audit of 713 validations found $17.9M priced from excluded contracts and a calculation bug hiding $3.15M.","- Built an autonomous remediation fleet: 9 AI agents running 30 detectors across 14 tenants with zero detector errors, surfacing $39M reported as $0 and opening fix PRs automatically.","- Built Phoenix from scratch: Browserbase browser automation + Inngest pulling invoices and contracts from hospital ERP and contract systems (OSF Premier, CobbleStone, MUSC GHX) into S3. Made ingestion deterministic (38 of 38 documents every run, up from 26–38). Shipped with Docker, GHCR CI, Cycle and Vercel.","- Hardened multi-tenant security: fixed cross-tenant data leaks, moved AI-generated SQL onto 51 tenant-filtered views so it fails closed, and set up enterprise SSO with WorkOS and Microsoft Entra.","- Built the in-app AI assistant with streaming answers and topic guardrails; ran the model evaluation (Claude 8/8 vs GPT-4.1 5/8 on the test set).","- Shipped dispute management (Cases and Claims with demand letters), an invoice-review workbench and analytics; added Redis caching and rate limiting and made key queries 3–6x faster.","- Shipped a recovery job that found 3,542 stalled invoices (7x the estimate) and a pricing benchmark built on the CMS ambulance fee schedule.","- Led the MemorialCare production cutover and working sessions with hospital AP and IT teams; published about 11 production releases; built the sales demo environment on AWS CDK + Vercel.","- Run the daily standup for a team of 7–9, set the PR review process, wrote role specs and ran technical interviews for backend, full-stack and data engineering hires, and onboard new engineers."]},{title:"Founding AI Engineer — Infillo AI",meta:"Remote · Contract · Sep 2025 – Apr 2026",paragraphs:["Built eight healthcare practice services end to end with the co-founders: voice receptionist, scheduling, patient records, staff management, inventory, billing, analytics and access controls.","- Built the AI-powered healthcare platform from the ground up as sole engineer: architecture, full-stack app, cloud infrastructure and production launch.","- Engineered a real-time Voice AI receptionist on OpenAI's Realtime API and Twilio that greets patients, books appointments, answers FAQs from a knowledge base and routes calls, with multi-language support and voice cloning.","- Built a unified LLM gateway with per-service model routing and Claude prompt caching, cutting AI inference cost 25–30% and improving P95 latency 30–35%.",'- Architected a serverless AWS backend with an "Agent-as-a-Lambda" pattern (API Gateway, DynamoDB, Cognito, CDK), reducing new-service delivery time ~60% across 11+ microservices.',"- Set a modular 5-file Lambda standard (router, handler, service, data models, resource) across every service for consistency and fast onboarding.","- Designed a 28+ table DynamoDB schema with lazy user initialization and resilient onboarding for zero data loss.","- Built a React + TypeScript frontend with a healthcare dashboard, and CI/CD on GitHub Actions for zero-downtime deploys to dev and prod.","- Owned the product lifecycle from market research and UX through SEO, Cal.com and Twilio integrations, and go-to-market."]},{title:"Data Scientist — RevScale AI",meta:"Fort Lauderdale, FL · Full time · Sep 2024 – Aug 2025",paragraphs:["Worked with the C-suite and customer success on ML models and workflows for lead generation and multi-franchise business analysis.","- Fine-tuned LLaMA-3 8B with SFT + LoRA + DPO for domain- and tone-specific generation, raising personalization 25% and client engagement 30%.","- Shipped four production agents (Inbound Agent, Outbound Prospector, FDD Targeting Agent, Auto-Responder) across acquisition channels.","- Built multi-agent lead pipelines with LangChain + Airflow and CrewAI scoring, processing 500+ leads/day, improving lead gathering 40% and driving a 50% conversion uplift.","- Improved accuracy with DeBERTa sentiment and intent models (+18%) and a Pinecone RAG agent (+20%), deployed on Azure (Blob, CosmosDB, Functions, GPU VMs) with GitHub Actions CI/CD and W&B monitoring.","- Played a pivotal role as the sole data scientist in helping the team secure funding."]},{title:"AI Engineer — Thirdi.co",meta:"Boston, MA · Contract · Jan 2024 – Aug 2024",paragraphs:["- Built a multi-model AI therapist platform combining LLaMA-3-70B, BERT and spaCy for context-aware conversational support through Telegram and a web UI.","- Fine-tuned LLaMA-3-70B with multimodal inputs (text, speech, facial emotion recognition) for mood detection and personalized interactions.","- Developed real-time NLP pipelines and mood models (Random Forest, SVM) that adapt responses to user sentiment.","- Deployed a HIPAA-compliant system on AWS with encryption, access controls, audit logging and automated ML pipelines."]},{title:"ML Engineer — Workmate Inc (Client: Morgan Stanley)",meta:"Jersey City, NJ · Contract · Jan 2023 – Jan 2024",paragraphs:["- Built Python and C++ preprocessing pipelines over large client and portfolio data in S3: missing-data handling, transaction outlier detection, consistency checks and feature engineering.","- Led experiments across 10+ algorithms (Gradient Boosting, XGBoost, LightGBM, neural nets) for risk profiling and portfolio optimization, a 12% performance gain through tuning and k-fold validation.","- Deployed risk and anomaly detection models for unusual trading behavior, cutting false positives 20% and improving detection accuracy 25%.","- Designed ML infrastructure on SageMaker and Lambda for automated training and retraining; served optimized BERT with Ray, Databricks and GPU EC2 clusters for lower latency."]},{title:"Machine Learning Engineer — Capgemini",meta:"Hyderabad, India · Full time · Jan 2021 – Dec 2021",paragraphs:["- Implemented a customer-support recommendation system for telecom with a reranking algorithm.","- Built C++ feature extraction for low-latency telecom data streams, a 22% uplift in network optimization models; automated ETL with Airflow, cutting load time 40%.","- Built real-time monitoring dashboards in New Relic and Datadog and CI/CD with Git-based version control."]}],nS=[{title:"Company Brain — slashh",meta:"Jun 2026 – present",paragraphs:["AI knowledge platform that connects a company's tools into one searchable memory, with encrypted OAuth connectors and memory adapters for LangGraph and CrewAI. Three web portals, 360+ commits.","NestJS, Qdrant, Neo4j, Redis, Cognito"]},{title:"On-device voice stress detection",meta:"Hackathon · Jun 2026",paragraphs:["Detects stress in a speaker's voice entirely on the phone. A PyTorch CNN exported through ExecuTorch and quantized to INT8 for the Qualcomm Hexagon NPU.","PyTorch, ExecuTorch, INT8, Edge AI"]},{title:"agentsmd",meta:"Open source · MIT",paragraphs:["Command-line tool and GitHub Action that keeps AI coding-agent config files (AGENTS.md, CLAUDE.md, .cursorrules) in sync and checks them for errors.","Node.js, TypeScript, GitHub Actions"]},{title:"Sentinel",meta:"SpendRule internal · 2026",paragraphs:["Autonomous daily agent that detects data and code issues, triages them, writes the fix and opens a pull request with a linked ticket. Runs on its own AWS box, provisioned with CDK.","Claude Agent SDK, AWS CDK, EC2, Linear"]},{title:"Agentic contract RAG",meta:"SpendRule R&D · Oct 2026",paragraphs:["Agentic retrieval over contracts on AWS Bedrock with hybrid BM25 + Cohere embedding search and a deterministic claim verifier that checks every answer against source text.","Bedrock, Hybrid search, RRF, Claude"]},{title:"Voice AI receptionist",meta:"Infillo AI · 2025",paragraphs:["Phone agent for medical practices that answers 24/7, books appointments and answers questions from the practice's knowledge base, in multiple languages.","OpenAI Realtime, Twilio, AWS Lambda"]}],iS=["Generative AI: RAG, Agentic AI, Agent orchestration, Claude Agent SDK, LLM fine-tuning, SFT, DPO, PPO, RLHF, LoRA / PEFT, TRL, Inference optimization, Evaluation pipelines, Prompt caching","Machine learning: Transformers, BERT / DeBERTa, LLaMA, Qwen 2.5, VLMs, Computer vision, Mask R-CNN, XGBoost, Random Forest, Time series, Recommendation systems, Ranking, GANs / VAE","Frameworks: PyTorch, TensorFlow, Hugging Face, vLLM, ONNX, ExecuTorch, LangChain, LangGraph, LangSmith, CrewAI, LlamaIndex, Ray, PySpark, Inngest, W&B","Languages & web: Python, TypeScript, JavaScript, C / C++, Java, SQL, Next.js, React, Node.js, Express, NestJS, FastAPI, Django, Flask","Cloud & MLOps: AWS (Bedrock, SageMaker, Lambda, EC2, S3, DynamoDB, CDK), Azure ML, Databricks, GCP, Docker, Kubernetes, Kubeflow, MLflow, Airflow, Kafka, GitHub Actions, Vercel","Data stores: PostgreSQL, Prisma, MySQL, Redis, MongoDB, DynamoDB, CosmosDB, Neo4j, Qdrant, Pinecone, FAISS, ChromaDB, Snowflake, Cassandra","Tools: Git, Linear, Jira, Confluence, Postman, n8n, Zapier, Splunk, Datadog, Tableau, WorkOS SSO, Browserbase"],Zr={experience:tS,projects:nS,skills:iS},Ai='<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" stroke-width="1.5"/></svg>';function $i(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Lp(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var ti={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},so={duration:.5,overwrite:!1,delay:0},bh,on,Lt,pi=1e8,wt=1/pi,Iu=Math.PI*2,rS=Iu/4,sS=0,Np=Math.sqrt,aS=Math.cos,oS=Math.sin,sn=function(e){return typeof e=="string"},Gt=function(e){return typeof e=="function"},tr=function(e){return typeof e=="number"},Th=function(e){return typeof e>"u"},Gi=function(e){return typeof e=="object"},Un=function(e){return e!==!1},Ah=function(){return typeof window<"u"},jo=function(e){return Gt(e)||sn(e)},Up=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gn=Array.isArray,lS=/random\([^)]+\)/g,cS=/,\s*/g,id=/(?:-?\.?\d|\.)+/gi,Op=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Cc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Fp=/[+-]=-?[.\d]+/,uS=/[^,'"\[\]\s]+/gi,hS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Bt,Ci,Lu,wh,ni={},Al={},Bp,kp=function(e){return(Al=na(e,ni))&&kn},Ch=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ao=function(e,t){return!t&&console.warn(e)},zp=function(e,t){return e&&(ni[e]=t)&&Al&&(Al[e]=t)||ni},oo=function(){return 0},fS={suppressEvents:!0,isStart:!0,kill:!1},pl={suppressEvents:!0,kill:!1},dS={suppressEvents:!0},Rh={},Mr=[],Nu={},Gp,qn={},Rc={},rd=30,ml=[],Ph="",Dh=function(e){var t=e[0],n,i;if(Gi(t)||Gt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ml.length;i--&&!ml[i].targetTest(t););n=ml[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new cm(e[i],n)))||e.splice(i,1);return e},Qr=function(e){return e._gsap||Dh(mi(e))[0]._gsap},Vp=function(e,t,n){return(n=e[t])&&Gt(n)?e[t]():Th(n)&&e.getAttribute&&e.getAttribute(t)||n},On=function(e,t){return(e=e.split(",")).forEach(t)||e},Ht=function(e){return Math.round(e*1e5)/1e5||0},Ft=function(e){return Math.round(e*1e7)/1e7||0},Hs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},pS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},wl=function(){var e=Mr.length,t=Mr.slice(0),n,i;for(Nu={},Mr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ih=function(e){return!!(e._initted||e._startAt||e.add)},Hp=function(e,t,n,i){Mr.length&&!on&&wl(),e.render(t,n,!!(on&&t<0&&Ih(e))),Mr.length&&!on&&wl()},Wp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(uS).length<2?t:sn(e)?e.trim():e},Xp=function(e){return e},ii=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},mS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},na=function(e,t){for(var n in t)e[n]=t[n];return e},sd=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Gi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Cl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ba=function(e){var t=e.parent||Bt,n=e.keyframes?mS(gn(e.keyframes)):ii;if(Un(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},gS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Yp=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Hl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},br=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},es=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},_S=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Uu=function(e,t,n,i){return e._startAt&&(on?e._startAt.revert(pl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},vS=function r(e){return!e||e._ts&&r(e.parent)},ad=function(e){return e._repeat?ia(e._tTime,e=e.duration()+e._rDelay)*e:0},ia=function(e,t){var n=Math.floor(e=Ft(e/t));return e&&n===e?n-1:n},Rl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Wl=function(e){return e._end=Ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},Xl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Wl(e),n._dirty||es(n,e)),e},qp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Rl(e.rawTime(),t),(!t._dur||yo(0,t.totalDuration(),n)-t._tTime>wt)&&t.render(n,!0)),es(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-wt}},Di=function(e,t,n,i){return t.parent&&br(t),t._start=Ft((tr(n)?n:n||e!==Bt?hi(e,n,t):e._time)+t._delay),t._end=Ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Yp(e,t,"_first","_last",e._sort?"_start":0),Ou(t)||(e._recent=t),i||qp(e,t),e._ts<0&&Xl(e,e._tTime),e},$p=function(e,t){return(ni.ScrollTrigger||Ch("scrollTrigger",t))&&ni.ScrollTrigger.create(t,e)},jp=function(e,t,n,i,s){if(Nh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!on&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Gp!==Kn.frame)return Mr.push(e),e._lazy=[s,i],1},xS=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Ou=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},MS=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&xS(e)&&!(!e._initted&&Ou(e))||(e._ts<0||e._dp._ts<0)&&!Ou(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=yo(0,e._tDur,t),u=ia(l,o),e._yoyo&&u&1&&(a=1-a),u!==ia(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||on||i||e._zTime===wt||!t&&e._zTime){if(!e._initted&&jp(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?wt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Uu(e,t,n,!0),e._onUpdate&&!n&&Zn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Zn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&br(e,1),!n&&!on&&(Zn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},yS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ra=function(e,t,n,i){var s=e._repeat,a=Ft(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ft(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Xl(e,e._tTime=e._tDur*o),e.parent&&Wl(e),n||es(e.parent,e),e},od=function(e){return e instanceof Nn?es(e):ra(e,e._dur)},SS={_start:0,endTime:oo,totalDuration:oo},hi=function r(e,t,n){var i=e.labels,s=e._recent||SS,a=e.duration()>=pi?s.endTime(!1):e._dur,o,l,c;return sn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(gn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},ka=function(e,t,n){var i=tr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Un(l.vars.inherit)&&l.parent;a.immediateRender=Un(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new qt(t[0],a,t[s+1])},Rr=function(e,t){return e||e===0?t(e):t},yo=function(e,t,n){return n<e?e:n>t?t:n},dn=function(e,t){return!sn(e)||!(t=hS.exec(e))?"":t[1]},ES=function(e,t,n){return Rr(n,function(i){return yo(e,t,i)})},Fu=[].slice,Kp=function(e,t){return e&&Gi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Gi(e[0]))&&!e.nodeType&&e!==Ci},bS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return sn(i)&&!t||Kp(i,1)?(s=n).push.apply(s,mi(i)):n.push(i)})||n},mi=function(e,t,n){return Lt&&!t&&Lt.selector?Lt.selector(e):sn(e)&&!n&&(Lu||!sa())?Fu.call((t||wh).querySelectorAll(e),0):gn(e)?bS(e,n):Kp(e)?Fu.call(e,0):e?[e]:[]},Bu=function(e){return e=mi(e)[0]||ao("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return mi(t,n.querySelectorAll?n:n===e?ao("Invalid scope")||wh.createElement("div"):e)}},Jp=function(e){return e.sort(function(){return .5-Math.random()})},Zp=function(e){if(Gt(e))return e;var t=Gi(e)?e:{each:e},n=ts(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return sn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,f,_){var g=(_||t).length,m=a[g],p,b,T,M,C,R,A,D,E;if(!m){if(E=t.grid==="auto"?0:(t.grid||[1,pi])[1],!E){for(A=-pi;A<(A=_[E++].getBoundingClientRect().left)&&E<g;);E<g&&E--}for(m=a[g]=[],p=l?Math.min(E,g)*u-.5:i%E,b=E===pi?0:l?g*h/E-.5:i/E|0,A=0,D=pi,R=0;R<g;R++)T=R%E-p,M=b-(R/E|0),m[R]=C=c?Math.abs(c==="y"?M:T):Np(T*T+M*M),C>A&&(A=C),C<D&&(D=C);i==="random"&&Jp(m),m.max=A-D,m.min=D,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(E>g?g-1:c?c==="y"?g/E:E:Math.max(E,g/E))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=dn(t.amount||t.each)||0,n=n&&g<0?FS(n):n}return g=(m[d]-m.min)/m.max||0,Ft(m.b+(n?n(g):g)*m.v)+m.u}},ku=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ft(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(tr(n)?0:dn(n))}},Qp=function(e,t){var n=gn(e),i,s;return!n&&Gi(e)&&(i=n=e.radius||pi,e.values?(e=mi(e.values),(s=!tr(e[0]))&&(i*=i)):e=ku(e.increment)),Rr(t,n?Gt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=pi,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-o,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:a,s||u===a||tr(a)?u:u+dn(a)}:ku(e))},em=function(e,t,n,i){return Rr(gn(e)?!t:n===!0?!!(n=0):!i,function(){return gn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},TS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},AS=function(e,t){return function(n){return e(parseFloat(n))+(t||dn(n))}},wS=function(e,t,n){return nm(e,t,0,1,n)},tm=function(e,t,n){return Rr(n,function(i){return e[~~t(i)]})},CS=function r(e,t,n){var i=t-e;return gn(e)?tm(e,r(0,e.length),t):Rr(n,function(s){return(i+(s-e)%i)%i+e})},RS=function r(e,t,n){var i=t-e,s=i*2;return gn(e)?tm(e,r(0,e.length-1),t):Rr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},lo=function(e){return e.replace(lS,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(cS);return em(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},nm=function(e,t,n,i,s){var a=t-e,o=i-n;return Rr(s,function(l){return n+((l-e)/a*o||0)})},PS=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=sn(e),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(gn(e)&&!gn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=t}else i||(e=na(gn(e)?[]:{},e));if(!u){for(l in t)Lh.call(o,e,l,"get",t[l]);s=function(_){return Fh(_,o)||(a?e.p:e)}}}return Rr(n,s)},ld=function(e,t,n){var i=e.labels,s=pi,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Zn=function(e,t,n){var i=e.vars,s=i[t],a=Lt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Mr.length&&wl(),o&&(Lt=o),u=l?s.apply(c,l):s.call(c),Lt=a,u},wa=function(e){return br(e),e.scrollTrigger&&e.scrollTrigger.kill(!!on),e.progress()<1&&Zn(e,"onInterrupt"),e},ks,im=[],rm=function(e){if(e)if(e=!e.name&&e.default||e,Ah()||e.headless){var t=e.name,n=Gt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:oo,render:Fh,add:Lh,kill:qS,modifier:YS,rawVars:0},a={targetTest:0,get:0,getSetter:Oh,aliases:{},register:0};if(sa(),e!==i){if(qn[t])return;ii(i,ii(Cl(e,s),a)),na(i.prototype,na(s,Cl(e,a))),qn[i.prop=t]=i,e.targetTest&&(ml.push(i),Rh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}zp(t,i),e.register&&e.register(kn,i,Fn)}else im.push(e)},At=255,Ca={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},Pc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*At+.5|0},sm=function(e,t,n){var i=e?tr(e)?[e>>16,e>>8&At,e&At]:0:Ca.black,s,a,o,l,c,u,h,d,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ca[e])i=Ca[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&At,i&At,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&At,e&At]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(id),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Pc(l+1/3,s,a),i[1]=Pc(l,s,a),i[2]=Pc(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Op),n&&i.length<4&&(i[3]=1),i}else i=e.match(id)||Ca.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/At,a=i[1]/At,o=i[2]/At,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(a-o)/f+(a<o?6:0):h===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},am=function(e){var t=[],n=[],i=-1;return e.split(yr).forEach(function(s){var a=s.match(Bs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},cd=function(e,t,n){var i="",s=(e+i).match(yr),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=sm(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=am(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(yr,"1").split(Bs),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(yr),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},yr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ca)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),DS=/hsl[a]?\(/,om=function(e){var t=e.join(" "),n;if(yr.lastIndex=0,yr.test(t))return n=DS.test(t),e[1]=cd(e[1],n),e[0]=cd(e[0],n,am(e[1])),!0},co,Kn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,d,f,_=function g(m){var p=r()-i,b=m===!0,T,M,C,R;if((p>e||p<0)&&(n+=p-t),i+=p,C=i-n,T=C-a,(T>0||b)&&(R=++h.frame,d=C-h.time*1e3,h.time=C=C/1e3,a+=T+(T>=s?4:s-T),M=1),b||(l=c(g)),M)for(f=0;f<o.length;f++)o[f](C,d,R,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Bp&&(!Lu&&Ah()&&(Ci=Lu=window,wh=Ci.document||{},ni.gsap=kn,(Ci.gsapVersions||(Ci.gsapVersions=[])).push(kn.version),kp(Al||Ci.GreenSockGlobals||!Ci.gsap&&Ci||{}),im.forEach(rm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},co=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),co=0,c=oo},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,p,b){var T=p?function(M,C,R,A){m(M,C,R,A),h.remove(T)}:m;return h.remove(m),o[b?"unshift":"push"](T),sa(),T},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},h})(),sa=function(){return!co&&Kn.wake()},pt={},IS=/^[\d.\-M][\d.\-,\s]/,LS=/["']/g,NS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(LS,"").trim():+c,i=l.substr(o+1).trim();return t},US=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},OS=function(e){var t=(e+"").split("("),n=pt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[NS(t[1])]:US(e).split(",").map(Wp)):pt._CE&&IS.test(e)?pt._CE("",e):n},FS=function(e){return function(t){return 1-e(1-t)}},ts=function(e,t){return e&&(Gt(e)?e:pt[e]||OS(e))||t},fs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return On(e,function(o){pt[o]=ni[o]=s,pt[a=o.toLowerCase()]=n;for(var l in s)pt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=pt[o+"."+l]=s[l]}),s},lm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Dc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Iu*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*oS((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:lm(o);return s=Iu/s,l.config=function(c,u){return r(e,c,u)},l},Ic=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:lm(n);return i.config=function(s){return r(e,s)},i};On("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;fs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});pt.Linear.easeNone=pt.none=pt.Linear.easeIn;fs("Elastic",Dc("in"),Dc("out"),Dc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};fs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);fs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});fs("Circ",function(r){return-(Np(1-r*r)-1)});fs("Sine",function(r){return r===1?1:-aS(r*rS)+1});fs("Back",Ic("in"),Ic("out"),Ic());pt.SteppedEase=pt.steps=ni.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-wt;return function(o){return((i*yo(0,a,o)|0)+s)*n}}};so.ease=pt["quad.out"];On("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ph+=r+","+r+"Params,"});var cm=function(e,t){this.id=sS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Vp,this.set=t?t.getSetter:Oh},uo=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ra(this,+t.duration,1,1),this.data=t.data,Lt&&(this._ctx=Lt,Lt.data.push(this)),co||Kn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ra(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(sa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Xl(this,n),!s._dp||s.parent||qp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Di(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===wt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Hp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ad(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ad(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ia(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Rl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-wt?0:this._rts,this.totalTime(yo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Wl(this),_S(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(sa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wt&&(this._tTime-=wt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ft(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Di(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Un(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Rl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=dS);var i=on;return on=n,Ih(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),on=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,od(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,od(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(hi(this,n),Un(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Un(i)),this._dur||(this._zTime=-wt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-wt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Gt(n)?n:Xp,l=function(){var u=i.then;i.then=null,s&&s(),Gt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){wa(this)},r})();ii(uo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var Nn=(function(r){Lp(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Un(n.sortChildren),Bt&&Di(n.parent||Bt,$i(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&$p($i(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return ka(0,arguments,this),this},t.from=function(i,s,a){return ka(1,arguments,this),this},t.fromTo=function(i,s,a,o){return ka(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Ba(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qt(i,s,hi(this,a),1),this},t.call=function(i,s,a){return Di(this,qt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new qt(i,a,hi(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Ba(a).immediateRender=Un(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,Ba(o).immediateRender=Un(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ft(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,m,p,b,T,M,C,R,A;if(this!==Bt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,M=this._start,T=this._ts,p=!T,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=Ft(u%m),u===l?(g=this._repeat,d=c):(C=Ft(u/m),g=~~C,g&&g===C&&(d=c,g--),d>c&&(d=c)),C=ia(this._tTime,m),!o&&this._tTime&&C!==g&&this._tTime-C*m-this._dur<=0&&(C=g),R&&g&1&&(d=c-d,A=1),g!==C&&!this._lock){var D=R&&C&1,E=D===(R&&g&1);if(g<C&&(D=!D),o=D?0:u%c?c:u,this._lock=1,this.render(o||(A?0:Ft(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Zn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,C=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,o=D?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=yS(this,Ft(o),Ft(d)),b&&(u-=d-(d=b._start))),this._tTime=u,this._time=d,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!C&&(Zn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&b!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){b=0,_&&(u+=this._zTime=-wt);break}}f=_}else{f=this._last;for(var S=i<0?i:d;f;){if(_=f._prev,(f._act||S<=f._end)&&f._ts&&b!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(S-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(S-f._start)*f._ts,s,a||on&&Ih(f)),d!==this._time||!this._ts&&!p){b=0,_&&(u+=this._zTime=S?-wt:wt);break}}f=_}}if(b&&!s&&(this.pause(),b.render(d>=o?0:-wt)._zTime=d>=o?1:-1,this._ts))return this._start=M,Wl(this),this.render(i,s,a);this._onUpdate&&!s&&Zn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&br(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Zn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(tr(s)||(s=hi(this,s,i)),!(i instanceof uo)){if(gn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(sn(i))return this.addLabel(i,s);if(Gt(i))i=qt.delayedCall(0,i);else return this}return this!==i?Di(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-pi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof qt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return sn(i)?this.removeLabel(i):Gt(i)?this.killTweensOf(i):(i.parent===this&&Hl(this,i),i===this._recent&&(this._recent=this._last),es(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ft(Kn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=hi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=qt.delayedCall(0,s||oo,a);return o.data="isPause",this._hasPause=1,Di(this,o,hi(this,i))},t.removePause=function(i){var s=this._first;for(i=hi(this,i);s;)s._start===i&&s.data==="isPause"&&br(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)pr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=mi(i),l=this._first,c=tr(s),u;l;)l instanceof qt?pS(l._targets,o)&&(c?(!pr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=hi(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,_=qt.to(a,ii({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||wt,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&ra(_,m,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ii({startAt:{time:hi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ld(this,hi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ld(this,hi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ft(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return es(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),es(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=pi,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Di(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=Ft(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ra(a,a===Bt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Bt._ts&&(Hp(Bt,Rl(i,Bt)),Gp=Kn.frame),Kn.frame>=rd){rd+=ti.autoSleep||120;var s=Bt._first;if((!s||!s._ts)&&ti.autoSleep&&Kn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Kn.sleep()}}},e})(uo);ii(Nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var BS=function(e,t,n,i,s,a,o){var l=new Fn(this._pt,e,t,0,1,mm,null,s),c=0,u=0,h,d,f,_,g,m,p,b;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=lo(i)),a&&(b=[n,i],a(b,e,t),n=b[0],i=b[1]),d=n.match(Cc)||[];h=Cc.exec(i);)_=h[0],g=i.substring(c,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Hs(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=Cc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Fp.test(i)||p)&&(l.e=0),this._pt=l,l},Lh=function(e,t,n,i,s,a,o,l,c,u){Gt(i)&&(i=i(s||0,e,a));var h=e[t],d=n!=="get"?n:Gt(h)?c?e[t.indexOf("set")||!Gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Gt(h)?c?HS:dm:Uh,_;if(sn(i)&&(~i.indexOf("random(")&&(i=lo(i)),i.charAt(1)==="="&&(_=Hs(d,i)+(dn(d)||0),(_||_===0)&&(i=_))),!u||d!==i||zu)return!isNaN(d*i)&&i!==""?(_=new Fn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?XS:pm,0,f),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&Ch(t,i),BS.call(this,e,t,d,i,f,l||ti.stringFilter,c))},kS=function(e,t,n,i,s){if(Gt(e)&&(e=za(e,s,t,n,i)),!Gi(e)||e.style&&e.nodeType||gn(e)||Up(e))return sn(e)?za(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=za(e[o],s,t,n,i);return a},um=function(e,t,n,i,s,a){var o,l,c,u;if(qn[e]&&(o=new qn[e]).init(s,o.rawVars?t[e]:kS(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Fn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==ks))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},pr,zu,Nh=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,b=p&&p.data==="nested"?p.vars.targets:m,T=e._overwrite==="auto"&&!bh,M=e.timeline,C=i.easeReverse||h,R,A,D,E,S,N,O,Y,$,X,J,Z,W;if(M&&(!d||!s)&&(s="none"),e._ease=ts(s,so.ease),e._rEase=C&&(ts(C)||e._ease),e._from=!M&&!!i.runBackwards,e._from&&(e.ratio=1),!M||d&&!i.stagger){if(Y=m[0]?Qr(m[0]).harness:0,Z=Y&&i[Y.prop],R=Cl(i,Rh),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!f?g.render(-1,!0):g.revert(u&&_?pl:fS),g._lazy=0),a){if(br(e._startAt=qt.set(m,ii({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Un(l),startAt:null,delay:0,onUpdate:c&&function(){return Zn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on||!o&&!f)&&e._startAt.revert(pl),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),D=ii({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Un(l),immediateRender:o,stagger:0,parent:p},R),Z&&(D[Y.prop]=Z),br(e._startAt=qt.set(m,D)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on?e._startAt.revert(pl):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Un(l)||l&&!_,A=0;A<m.length;A++){if(S=m[A],O=S._gsap||Dh(m)[A]._gsap,e._ptLookup[A]=X={},Nu[O.id]&&Mr.length&&wl(),J=b===m?A:b.indexOf(S),Y&&($=new Y).init(S,Z||R,e,J,b)!==!1&&(e._pt=E=new Fn(e._pt,S,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(he){X[he]=E}),$.priority&&(N=1)),!Y||Z)for(D in R)qn[D]&&($=um(D,R,e,J,S,b))?$.priority&&(N=1):X[D]=E=Lh.call(e,S,D,"get",R[D],J,b,0,i.stringFilter);e._op&&e._op[A]&&e.kill(S,e._op[A]),T&&e._pt&&(pr=e,Bt.killTweensOf(S,X,e.globalTime(t)),W=!e.parent,pr=0),e._pt&&l&&(Nu[O.id]=1)}N&&gm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!W,d&&t<=0&&M.render(pi,!0,!0)},zS=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return zu=1,e.vars[t]="+=0",Nh(e,o),zu=0,l?ao(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Ht(n)+dn(h.e)),h.b&&(h.b=u.s+dn(h.b))},GS=function(e,t){var n=e[0]?Qr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=na({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},VS=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(gn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},za=function(e,t,n,i,s){return Gt(e)?e.call(t,n,i,s):sn(e)&&~e.indexOf("random(")?lo(e):e},hm=Ph+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",fm={};On(hm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return fm[r]=1});var qt=(function(r){Lp(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Ba(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||Bt,b=(gn(n)||Up(n)?tr(n[0]):"length"in i)?[n]:mi(n),T,M,C,R,A,D,E,S;if(o._targets=b.length?Dh(b):ao("GSAP target "+n+" not found. https://gsap.com",!ti.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||jo(c)||jo(u)){i=o.vars;var N=i.easeReverse||i.yoyoEase;if(T=o.timeline=new Nn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:b}),T.kill(),T.parent=T._dp=$i(o),T._start=0,d||jo(c)||jo(u)){if(R=b.length,E=d&&Zp(d),Gi(d))for(A in d)~hm.indexOf(A)&&(S||(S={}),S[A]=d[A]);for(M=0;M<R;M++)C=Cl(i,fm),C.stagger=0,N&&(C.easeReverse=N),S&&na(C,S),D=b[M],C.duration=+za(c,$i(o),M,D,b),C.delay=(+za(u,$i(o),M,D,b)||0)-o._delay,!d&&R===1&&C.delay&&(o._delay=u=C.delay,o._start+=u,C.delay=0),T.to(D,C,E?E(M,D,b):0),T._ease=pt.none;T.duration()?c=u=0:o.timeline=0}else if(_){Ba(ii(T.vars.defaults,{ease:"none"})),T._ease=ts(_.ease||i.ease||"none");var O=0,Y,$,X;if(gn(_))_.forEach(function(J){return T.to(b,J,">")}),T.duration();else{C={};for(A in _)A==="ease"||A==="easeEach"||VS(A,_[A],C,_.easeEach);for(A in C)for(Y=C[A].sort(function(J,Z){return J.t-Z.t}),O=0,M=0;M<Y.length;M++)$=Y[M],X={ease:$.e,duration:($.t-(M?Y[M-1].t:0))/100*c},X[A]=$.v,T.to(b,X,O),O+=X.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return f===!0&&!bh&&(pr=$i(o),Bt.killTweensOf(b),pr=0),Di(p,$i(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!_&&o._start===Ft(p._time)&&Un(h)&&vS($i(o))&&p.data!=="nested")&&(o._tTime=-wt,o.render(Math.max(0,-u)||0)),m&&$p($i(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-wt&&!u?l:i<wt?0:i,d,f,_,g,m,p,b,T;if(!c)MS(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,T=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(d=Ft(h%g),h===l?(_=this._repeat,d=c):(m=Ft(h/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(d=c-d),m=ia(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=h,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(Ft(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(jp(this,u?i:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var M=d<o;if(M!==this._inv){var C=M?o:c-o;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=C?(M?-1:1)/C:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(d/c);if(this._from&&(this.ratio=b=1-b),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!m&&(Zn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(b,f.d),f=f._next;T&&T.render(i<0?i:T._dur*T._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Uu(this,i,s,a),Zn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Zn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Uu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&br(this,1),!s&&!(u&&!o)&&(h||o||p)&&(Zn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){co||Kn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Nh(this,c),u=this._ease(c/this._dur),zS(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Xl(this,0),this.parent||Yp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?wa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!on),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,pr&&pr.vars.overwrite!==!0)._first||wa(this),this.parent&&a!==this.timeline.totalDuration()&&ra(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?mi(i):o,c=this._ptLookup,u=this._pt,h,d,f,_,g,m,p;if((!s||s==="all")&&gS(o,l))return s==="all"&&(this._pt=0),wa(this);for(h=this._op=this._op||[],s!=="all"&&(sn(s)&&(g={},On(s,function(b){return g[b]=1}),s=g),s=GS(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(h[p]=s,_=d,f={}):(f=h[p]=h[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Hl(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&wa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ka(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return ka(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Bt.killTweensOf(i,s,a)},e})(uo);ii(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});On("staggerTo,staggerFrom,staggerFromTo",function(r){qt[r]=function(){var e=new Nn,t=Fu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Uh=function(e,t,n){return e[t]=n},dm=function(e,t,n){return e[t](n)},HS=function(e,t,n,i){return e[t](i.fp,n)},WS=function(e,t,n){return e.setAttribute(t,n)},Oh=function(e,t){return Gt(e[t])?dm:Th(e[t])&&e.setAttribute?WS:Uh},pm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},XS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},mm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Fh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},YS=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},qS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Hl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},$S=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},gm=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Fn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||pm,this.d=l||this,this.set=c||Uh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=$S,this.m=n,this.mt=s,this.tween=i},r})();On(Ph+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Rh[r]=1});ni.TweenMax=ni.TweenLite=qt;ni.TimelineLite=ni.TimelineMax=Nn;Bt=new Nn({sortChildren:!1,defaults:so,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ti.stringFilter=om;var ns=[],gl={},jS=[],ud=0,KS=0,Lc=function(e){return(gl[e]||jS).map(function(t){return t()})},Gu=function(){var e=Date.now(),t=[];e-ud>2&&(Lc("matchMediaInit"),ns.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Ci.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Lc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ud=e,Lc("matchMedia"))},_m=(function(){function r(t,n){this.selector=n&&Bu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=KS++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Gt(n)&&(s=i,i=n,n=Gt);var a=this,o=function(){var c=Lt,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Bu(s)),Lt=a,h=i.apply(a,arguments),Gt(h)&&a._r.push(h),Lt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Gt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Lt;Lt=null,n(this),Lt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof qt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Nn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=ns.length;a--;)ns[a].id===this.id&&ns.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),JS=(function(){function r(t){this.contexts=[],this.scope=t,Lt&&Lt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Gi(n)||(n={matches:n});var a=new _m(0,s||this.scope),o=a.conditions={},l,c,u;Lt&&!a.selector&&(a.selector=Lt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Ci.matchMedia(n[c]),l&&(ns.indexOf(a)<0&&ns.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Gu):l.addEventListener("change",Gu)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Pl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return rm(i)})},timeline:function(e){return new Nn(e)},getTweensOf:function(e,t){return Bt.getTweensOf(e,t)},getProperty:function(e,t,n,i){sn(e)&&(e=mi(e)[0]);var s=Qr(e||{}).get,a=n?Xp:Wp;return n==="native"&&(n=""),e&&(t?a((qn[t]&&qn[t].get||s)(e,t,n,i)):function(o,l,c){return a((qn[o]&&qn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=mi(e),e.length>1){var i=e.map(function(u){return kn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=qn[t],o=Qr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;ks._pt=0,h.init(e,n?u+n:u,ks,0,[e]),h.render(1,h),ks._pt&&Fh(1,ks)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=kn.to(e,ii((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ts(e.ease,so.ease)),sd(so,e||{})},config:function(e){return sd(ti,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!qn[o]&&!ni[o]&&ao(t+" effect requires "+o+" plugin.")}),Rc[t]=function(o,l,c){return n(mi(o),ii(l||{},s),c)},a&&(Nn.prototype[t]=function(o,l,c){return this.add(Rc[t](o,Gi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){pt[e]=ts(t)},parseEase:function(e,t){return arguments.length?ts(e,t):pt},getById:function(e){return Bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Nn(e),i,s;for(n.smoothChildTiming=Un(e.smoothChildTiming),Bt.remove(n),n._dp=0,n._time=n._tTime=Bt._time,i=Bt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof qt&&i.vars.onComplete===i._targets[0]))&&Di(n,i,i._start-i._delay),i=s;return Di(Bt,n,0),n},context:function(e,t){return e?new _m(e,t):Lt},matchMedia:function(e){return new JS(e)},matchMediaRefresh:function(){return ns.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Gu()},addEventListener:function(e,t){var n=gl[e]||(gl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=gl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:CS,wrapYoyo:RS,distribute:Zp,random:em,snap:Qp,normalize:wS,getUnit:dn,clamp:ES,splitColor:sm,toArray:mi,selector:Bu,mapRange:nm,pipe:TS,unitize:AS,interpolate:PS,shuffle:Jp},install:kp,effects:Rc,ticker:Kn,updateRoot:Nn.updateRoot,plugins:qn,globalTimeline:Bt,core:{PropTween:Fn,globals:zp,Tween:qt,Timeline:Nn,Animation:uo,getCache:Qr,_removeLinkedListItem:Hl,reverting:function(){return on},context:function(e){return e&&Lt&&(Lt.data.push(e),e._ctx=Lt),Lt},suppressOverwrites:function(e){return bh=e}}};On("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Pl[r]=qt[r]});Kn.add(Nn.updateRoot);ks=Pl.to({},{duration:0});var ZS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},QS=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=ZS(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Nc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(sn(s)&&(l={},On(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}QS(o,s)}}}},kn=Pl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)on?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Nc("roundProps",ku),Nc("modifiers"),Nc("snap",Qp))||Pl;qt.version=Nn.version=kn.version="3.15.0";Bp=1;Ah()&&sa();pt.Power0;pt.Power1;pt.Power2;pt.Power3;pt.Power4;pt.Linear;pt.Quad;pt.Cubic;pt.Quart;pt.Quint;pt.Strong;pt.Elastic;pt.Back;pt.SteppedEase;pt.Bounce;pt.Sine;pt.Expo;pt.Circ;var hd,mr,Ws,Bh,$r,fd,kh,e1=function(){return typeof window<"u"},nr={},Gr=180/Math.PI,Xs=Math.PI/180,Ps=Math.atan2,dd=1e8,zh=/([A-Z])/g,t1=/(left|right|width|margin|padding|x)/i,n1=/[\s,\(]\S/,Oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},i1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},r1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},s1=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},a1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},vm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},xm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},o1=function(e,t,n){return e.style[t]=n},l1=function(e,t,n){return e.style.setProperty(t,n)},c1=function(e,t,n){return e._gsap[t]=n},u1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},h1=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},f1=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},kt="transform",Bn=kt+"Origin",d1=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in nr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Oi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ji(i,o)}):this.tfm[e]=a.x?a[e]:ji(i,e),e===Bn&&(this.tfm.zOrigin=a.zOrigin);else return Oi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(kt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Bn,t,"")),e=kt}(s||t)&&this.props.push(e,t,s[e])},Mm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},p1=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(zh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=kh(),(!s||!s.isStart)&&!n[kt]&&(Mm(n),i.zOrigin&&n[Bn]&&(n[Bn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},ym=function(e,t){var n={target:e,props:[],revert:p1,save:d1};return e._gsap||kn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Sm,Hu=function(e,t){var n=mr.createElementNS?mr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):mr.createElement(e);return n&&n.style?n:mr.createElement(e)},Qn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(zh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,aa(t)||t,1)||""},pd="O,Moz,ms,Ms,Webkit".split(","),aa=function(e,t,n){var i=t||$r,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(pd[a]+e in s););return a<0?null:(a===3?"ms":a>=0?pd[a]:"")+e},Wu=function(){e1()&&window.document&&(hd=window,mr=hd.document,Ws=mr.documentElement,$r=Hu("div")||{style:{}},Hu("div"),kt=aa(kt),Bn=kt+"Origin",$r.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Sm=!!aa("perspective"),kh=kn.core.reverting,Bh=1)},md=function(e){var t=e.ownerSVGElement,n=Hu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ws.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ws.removeChild(n),s},gd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Em=function(e){var t,n;try{t=e.getBBox()}catch{t=md(e),n=1}return t&&(t.width||t.height)||n||(t=md(e)),t&&!t.width&&!t.x&&!t.y?{x:+gd(e,["x","cx","x1"])||0,y:+gd(e,["y","cy","y1"])||0,width:0,height:0}:t},bm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Em(e))},Tr=function(e,t){if(t){var n=e.style,i;t in nr&&t!==Bn&&(t=kt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(zh,"-$1").toLowerCase())):n.removeAttribute(t)}},gr=function(e,t,n,i,s,a){var o=new Fn(e._pt,t,n,0,1,a?xm:vm);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},_d={deg:1,rad:1,turn:1},m1={grid:1,flex:1},Ar=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=$r.style,l=t1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",_,g,m,p;if(i===a||!s||_d[i]||_d[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&bm(e),(f||a==="%")&&(nr[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],Ht(f?s/_*h:s/100*_);if(o[l?"width":"height"]=h+(d?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===mr||!g.appendChild)&&(g=mr.body),m=g._gsap,m&&f&&m.width&&l&&m.time===Kn.time&&!m.uncache)return Ht(s/m.width*h);if(f&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=h+i,_=e[u],b?e.style[t]=b:Tr(e,t)}else(f||a==="%")&&!m1[Qn(g,"display")]&&(o.position=Qn(e,"position")),g===e&&(o.position="static"),g.appendChild($r),_=$r[u],g.removeChild($r),o.position="absolute";return l&&f&&(m=Qr(g),m.time=Kn.time,m.width=g[u]),Ht(d?_*s/h:_&&s?h/_*s:0)},ji=function(e,t,n,i){var s;return Bh||Wu(),t in Oi&&t!=="transform"&&(t=Oi[t],~t.indexOf(",")&&(t=t.split(",")[0])),nr[t]&&t!=="transform"?(s=fo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Il(Qn(e,Bn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Dl[t]&&Dl[t](e,t,n)||Qn(e,t)||Vp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ar(e,t,s,n)+n:s},g1=function(e,t,n,i){if(!n||n==="none"){var s=aa(t,e,1),a=s&&Qn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Qn(e,"borderTopColor"))}var o=new Fn(this._pt,e.style,t,0,1,mm),l=0,c=0,u,h,d,f,_,g,m,p,b,T,M,C;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Qn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=Qn(e,t)||i,g?e.style[t]=g:Tr(e,t)),u=[n,i],om(u),n=u[0],i=u[1],d=n.match(Bs)||[],C=i.match(Bs)||[],C.length){for(;h=Bs.exec(i);)m=h[0],b=i.substring(l,h.index),_?_=(_+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,M=g.substr((f+"").length),m.charAt(1)==="="&&(m=Hs(f,m)+M),p=parseFloat(m),T=m.substr((p+"").length),l=Bs.lastIndex-T.length,T||(T=T||ti.units[t]||M,l===i.length&&(i+=T,o.e+=T)),M!==T&&(f=Ar(e,t,g,T)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?xm:vm;return Fp.test(i)&&(o.e=0),this._pt=o,o},vd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_1=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=vd[n]||n,t[1]=vd[i]||i,t.join(" ")},v1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],nr[o]&&(l=1,o=o==="transformOrigin"?Bn:kt),Tr(n,o);l&&(Tr(n,kt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",fo(n,1),a.uncache=1,Mm(i)))}},Dl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Fn(e._pt,t,n,0,0,v1);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},ho=[1,0,0,1,0,0],Tm={},Am=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},xd=function(e){var t=Qn(e,kt);return Am(t)?ho:t.substr(7).match(Op).map(Ht)},Gh=function(e,t){var n=e._gsap||Qr(e),i=e.style,s=xd(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ho:s):(s===ho&&!e.offsetParent&&e!==Ws&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ws.appendChild(e)),s=xd(e),l?i.display=l:Tr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ws.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Xu=function(e,t,n,i,s,a){var o=e._gsap,l=s||Gh(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],b=l[5],T=t.split(" "),M=parseFloat(T[0])||0,C=parseFloat(T[1])||0,R,A,D,E;n?l!==ho&&(A=f*m-_*g)&&(D=M*(m/A)+C*(-g/A)+(g*b-m*p)/A,E=M*(-_/A)+C*(f/A)-(f*b-_*p)/A,M=D,C=E):(R=Em(e),M=R.x+(~T[0].indexOf("%")?M/100*R.width:M),C=R.y+(~(T[1]||T[0]).indexOf("%")?C/100*R.height:C)),i||i!==!1&&o.smooth?(p=M-c,b=C-u,o.xOffset=h+(p*f+b*g)-p,o.yOffset=d+(p*_+b*m)-b):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=C,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Bn]="0px 0px",a&&(gr(a,o,"xOrigin",c,M),gr(a,o,"yOrigin",u,C),gr(a,o,"xOffset",h,o.xOffset),gr(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+C)},fo=function(e,t){var n=e._gsap||new cm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Qn(e,Bn)||"0",u,h,d,f,_,g,m,p,b,T,M,C,R,A,D,E,S,N,O,Y,$,X,J,Z,W,he,L,Me,qe,nt,Be,$e;return u=h=d=g=m=p=b=T=M=0,f=_=1,n.svg=!!(e.getCTM&&bm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[kt]!=="none"?l[kt]:"")),i.scale=i.rotate=i.translate="none"),A=Gh(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),Xu(e,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,A)),C=n.xOrigin||0,R=n.yOrigin||0,A!==ho&&(N=A[0],O=A[1],Y=A[2],$=A[3],u=X=A[4],h=J=A[5],A.length===6?(f=Math.sqrt(N*N+O*O),_=Math.sqrt($*$+Y*Y),g=N||O?Ps(O,N)*Gr:0,b=Y||$?Ps(Y,$)*Gr+g:0,b&&(_*=Math.abs(Math.cos(b*Xs))),n.svg&&(u-=C-(C*N+R*Y),h-=R-(C*O+R*$))):($e=A[6],nt=A[7],L=A[8],Me=A[9],qe=A[10],Be=A[11],u=A[12],h=A[13],d=A[14],D=Ps($e,qe),m=D*Gr,D&&(E=Math.cos(-D),S=Math.sin(-D),Z=X*E+L*S,W=J*E+Me*S,he=$e*E+qe*S,L=X*-S+L*E,Me=J*-S+Me*E,qe=$e*-S+qe*E,Be=nt*-S+Be*E,X=Z,J=W,$e=he),D=Ps(-Y,qe),p=D*Gr,D&&(E=Math.cos(-D),S=Math.sin(-D),Z=N*E-L*S,W=O*E-Me*S,he=Y*E-qe*S,Be=$*S+Be*E,N=Z,O=W,Y=he),D=Ps(O,N),g=D*Gr,D&&(E=Math.cos(D),S=Math.sin(D),Z=N*E+O*S,W=X*E+J*S,O=O*E-N*S,J=J*E-X*S,N=Z,X=W),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=Ht(Math.sqrt(N*N+O*O+Y*Y)),_=Ht(Math.sqrt(J*J+$e*$e)),D=Ps(X,J),b=Math.abs(D)>2e-4?D*Gr:0,M=Be?1/(Be<0?-Be:Be):0),n.svg&&(Z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Am(Qn(e,kt)),Z&&e.setAttribute("transform",Z))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(f*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Ht(f),n.scaleY=Ht(_),n.rotation=Ht(g)+o,n.rotationX=Ht(m)+o,n.rotationY=Ht(p)+o,n.skewX=b+o,n.skewY=T+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Bn]=Il(c)),n.xOffset=n.yOffset=0,n.force3D=ti.force3D,n.renderTransform=n.svg?M1:Sm?wm:x1,n.uncache=0,n},Il=function(e){return(e=e.split(" "))[0]+" "+e[1]},Uc=function(e,t,n){var i=dn(t);return Ht(parseFloat(t)+parseFloat(Ar(e,"x",n+"px",i)))+i},x1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,wm(e,t)},Fr="0deg",Sa="0px",Br=") ",wm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,b=n.target,T=n.zOrigin,M="",C=p==="auto"&&e&&e!==1||p===!0;if(T&&(h!==Fr||u!==Fr)){var R=parseFloat(u)*Xs,A=Math.sin(R),D=Math.cos(R),E;R=parseFloat(h)*Xs,E=Math.cos(R),a=Uc(b,a,A*E*-T),o=Uc(b,o,-Math.sin(R)*-T),l=Uc(b,l,D*E*-T+T)}m!==Sa&&(M+="perspective("+m+Br),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(C||a!==Sa||o!==Sa||l!==Sa)&&(M+=l!==Sa||C?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Br),c!==Fr&&(M+="rotate("+c+Br),u!==Fr&&(M+="rotateY("+u+Br),h!==Fr&&(M+="rotateX("+h+Br),(d!==Fr||f!==Fr)&&(M+="skew("+d+", "+f+Br),(_!==1||g!==1)&&(M+="scale("+_+", "+g+Br),b.style[kt]=M||"translate(0, 0)"},M1=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,b=n.forceCSS,T=parseFloat(a),M=parseFloat(o),C,R,A,D,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Xs,c*=Xs,C=Math.cos(l)*h,R=Math.sin(l)*h,A=Math.sin(l-c)*-d,D=Math.cos(l-c)*d,c&&(u*=Xs,E=Math.tan(c-u),E=Math.sqrt(1+E*E),A*=E,D*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),C*=E,R*=E)),C=Ht(C),R=Ht(R),A=Ht(A),D=Ht(D)):(C=h,D=d,R=A=0),(T&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(T=Ar(f,"x",a,"px"),M=Ar(f,"y",o,"px")),(_||g||m||p)&&(T=Ht(T+_-(_*C+g*A)+m),M=Ht(M+g-(_*R+g*D)+p)),(i||s)&&(E=f.getBBox(),T=Ht(T+i/100*E.width),M=Ht(M+s/100*E.height)),E="matrix("+C+","+R+","+A+","+D+","+T+","+M+")",f.setAttribute("transform",E),b&&(f.style[kt]=E)},y1=function(e,t,n,i,s){var a=360,o=sn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Gr:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*dd)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*dd)%a-~~(c/a)*a)),e._pt=d=new Fn(e._pt,t,n,i,c,i1),d.e=u,d.u="deg",e._props.push(n),d},Md=function(e,t){for(var n in t)e[n]=t[n];return e},S1=function(e,t,n){var i=Md({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[kt]=t,o=fo(n,1),Tr(n,kt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[kt],a[kt]=t,o=fo(n,1),a[kt]=c);for(l in nr)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=dn(c),_=dn(u),h=f!==_?Ar(n,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new Fn(e._pt,o,l,h,d-h,Vu),e._pt.u=_||0,e._props.push(l));Md(o,i)};On("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Dl[e>1?"border"+r:r]=function(o,l,c,u,h){var d,f;if(arguments.length<4)return d=a.map(function(_){return ji(o,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,h)}});var Cm={name:"css",register:Wu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,f,_,g,m,p,b,T,M,C,R,A,D,E;Bh||Wu(),this.styles=this.styles||ym(e),D=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(qn[g]&&um(g,t,n,i,e,s)))){if(f=typeof u,_=Dl[g],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=lo(u)),_)_(this,e,g,u,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",yr.lastIndex=0,yr.test(c)||(m=dn(c),p=dn(u),p?m!==p&&(c=Ar(e,g,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),D.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],sn(c)&&~c.indexOf("random(")&&(c=lo(c)),dn(c+"")||c==="auto"||(c+=ti.units[g]||dn(ji(e,g))||""),(c+"").charAt(1)==="="&&(c=ji(e,g))):c=ji(e,g),d=parseFloat(c),b=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),g in Oi&&(g==="autoAlpha"&&(d===1&&ji(e,"visibility")==="hidden"&&h&&(d=0),D.push("visibility",0,o.visibility),gr(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Oi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),T=g in nr,T){if(this.styles.save(g),E=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=Qn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=u,u=Qn(e,"perspective"),S?e.style.perspective=S:Tr(e,"perspective")}h=parseFloat(u)}if(M||(C=e._gsap,C.renderTransform&&!t.parseTransform||fo(e,t.parseTransform),R=t.smoothOrigin!==!1&&C.smooth,M=this._pt=new Fn(this._pt,o,kt,0,1,C.renderTransform,C,0,-1),M.dep=1),g==="scale")this._pt=new Fn(this._pt,C,"scaleY",C.scaleY,(b?Hs(C.scaleY,b+h):h)-C.scaleY||0,Vu),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){D.push(Bn,0,o[Bn]),u=_1(u),C.svg?Xu(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==C.zOrigin&&gr(this,C,"zOrigin",C.zOrigin,p),gr(this,o,g,Il(c),Il(u)));continue}else if(g==="svgOrigin"){Xu(e,u,1,R,0,this);continue}else if(g in Tm){y1(this,C,g,d,b?Hs(d,b+u):u);continue}else if(g==="smoothOrigin"){gr(this,C,"smooth",C.smooth,u);continue}else if(g==="force3D"){C[g]=u;continue}else if(g==="transform"){S1(this,u,e);continue}}else g in o||(g=aa(g)||g);if(T||(h||h===0)&&(d||d===0)&&!n1.test(u)&&g in o)m=(c+"").substr((d+"").length),h||(h=0),p=dn(u)||(g in ti.units?ti.units[g]:m),m!==p&&(d=Ar(e,g,c,p)),this._pt=new Fn(this._pt,T?C:o,g,d,(b?Hs(d,b+h):h)-d,!T&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?a1:Vu),this._pt.u=p||0,T&&E!==u?(this._pt.b=c,this._pt.e=E,this._pt.r=s1):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=r1);else if(g in o)g1.call(this,e,g,c,b?b+u:u);else if(g in e)this.add(e,g,c||e[g],b?b+u:u,i,s);else if(g!=="parseTransform"){Ch(g,u);continue}T||(g in o?D.push(g,0,o[g]):typeof e[g]=="function"?D.push(g,2,e[g]()):D.push(g,1,c||e[g])),a.push(g)}}A&&gm(this)},render:function(e,t){if(t.tween._time||!kh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ji,aliases:Oi,getSetter:function(e,t,n){var i=Oi[t];return i&&i.indexOf(",")<0&&(t=i),t in nr&&t!==Bn&&(e._gsap.x||ji(e,"x"))?n&&fd===n?t==="scale"?u1:c1:(fd=n||{})&&(t==="scale"?h1:f1):e.style&&!Th(e.style[t])?o1:~t.indexOf("-")?l1:Oh(e,t)},core:{_removeProperty:Tr,_getMatrix:Gh}};kn.utils.checkPrefix=aa;kn.core.getStyleSaver=ym;(function(r,e,t,n){var i=On(r+","+e+","+t,function(s){nr[s]=1});On(e,function(s){ti.units[s]="deg",Tm[s]=1}),Oi[i[13]]=r+","+e,On(n,function(s){var a=s.split(":");Oi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");On("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ti.units[r]="px"});kn.registerPlugin(Cm);var wi=kn.registerPlugin(Cm)||kn;wi.core.Tween;function E1(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function b1(r,e,t){return e&&E1(r.prototype,e),r}var an,_l,Jn,_r,vr,Ys,Rm,Vr,qs,Pm,Ji,yi,Dm,Im=function(){return an||typeof window<"u"&&(an=window.gsap)&&an.registerPlugin&&an},Lm=1,zs=[],ft=[],ki=[],Ga=Date.now,Yu=function(e,t){return t},T1=function(){var e=qs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ft),i.push.apply(i,ki),ft=n,ki=i,Yu=function(a,o){return t[a](o)}},Sr=function(e,t){return~ki.indexOf(e)&&ki[ki.indexOf(e)+1][t]},Va=function(e){return!!~Pm.indexOf(e)},yn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},xn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ko="scrollLeft",Jo="scrollTop",qu=function(){return Ji&&Ji.isPressed||ft.cache++},Ll=function(e,t){var n=function i(s){if(s||s===0){Lm&&(Jn.history.scrollRestoration="manual");var a=Ji&&Ji.isPressed;s=i.v=Math.round(s)||(Ji&&Ji.iOS?1:0),e(s),i.cacheID=ft.cache,a&&Yu("ss",s)}else(t||ft.cache!==i.cacheID||Yu("ref"))&&(i.cacheID=ft.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},An={s:Ko,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ll(function(r){return arguments.length?Jn.scrollTo(r,Jt.sc()):Jn.pageXOffset||_r[Ko]||vr[Ko]||Ys[Ko]||0})},Jt={s:Jo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:An,sc:Ll(function(r){return arguments.length?Jn.scrollTo(An.sc(),r):Jn.pageYOffset||_r[Jo]||vr[Jo]||Ys[Jo]||0})},Dn=function(e,t){return(t&&t._ctx&&t._ctx.selector||an.utils.toArray)(e)[0]||(typeof e=="string"&&an.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},A1=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},wr=function(e,t){var n=t.s,i=t.sc;Va(e)&&(e=_r.scrollingElement||vr);var s=ft.indexOf(e),a=i===Jt.sc?1:2;!~s&&(s=ft.push(e)-1),ft[s+a]||yn(e,"scroll",qu);var o=ft[s+a],l=o||(ft[s+a]=Ll(Sr(e,n),!0)||(Va(e)?i:Ll(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=an.getProperty(e,"scrollBehavior")==="smooth"),l},$u=function(e,t,n){var i=e,s=e,a=Ga(),o=a,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=Ga();g||m-a>l?(s=i,i=_,o=a,a=m):n?i+=_:i=s+(_-s)/(m-o)*(a-o)},h=function(){s=i=n?0:i,o=a=0},d=function(_){var g=o,m=s,p=Ga();return(_||_===0)&&_!==i&&u(_),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-g)*1e3};return{update:u,reset:h,getVelocity:d}},Ea=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},yd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Nm=function(){qs=an.core.globals().ScrollTrigger,qs&&qs.core&&T1()},Um=function(e){return an=e||Im(),!_l&&an&&typeof document<"u"&&document.body&&(Jn=window,_r=document,vr=_r.documentElement,Ys=_r.body,Pm=[Jn,_r,vr,Ys],an.utils.clamp,Dm=an.core.context||function(){},Vr="onpointerenter"in Ys?"pointer":"mouse",Rm=Wt.isTouch=Jn.matchMedia&&Jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,yi=Wt.eventTypes=("ontouchstart"in vr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in vr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Lm=0},500),_l=1),qs||Nm(),_l};An.op=Jt;ft.cache=0;var Wt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){_l||Um(an)||console.warn("Please gsap.registerPlugin(Observer)"),qs||Nm();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,b=n.onDrag,T=n.onPress,M=n.onRelease,C=n.onRight,R=n.onLeft,A=n.onUp,D=n.onDown,E=n.onChangeX,S=n.onChangeY,N=n.onChange,O=n.onToggleX,Y=n.onToggleY,$=n.onHover,X=n.onHoverEnd,J=n.onMove,Z=n.ignoreCheck,W=n.isNormalizer,he=n.onGestureStart,L=n.onGestureEnd,Me=n.onWheel,qe=n.onEnable,nt=n.onDisable,Be=n.onClick,$e=n.scrollSpeed,re=n.capture,oe=n.allowClicks,Te=n.lockAxis,le=n.onLockAxis;this.target=o=Dn(o)||vr,this.vars=n,f&&(f=an.utils.toArray(f)),i=i||1e-9,s=s||0,_=_||1,$e=$e||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Jn.getComputedStyle(Ys).lineHeight)||22);var Ce,Ye,G,x,I,k,ce,P=this,se=0,j=0,te=n.passive||!u&&n.passive!==!1,ne=wr(o,An),B=wr(o,Jt),y=ne(),v=B(),U=~a.indexOf("touch")&&!~a.indexOf("pointer")&&yi[0]==="pointerdown",q=Va(o),ae=o.ownerDocument||_r,Q=[0,0,0],Fe=[0,0,0],ve=0,Le=function(){return ve=Ga()},Re=function(De,Ge){return(P.event=De)&&f&&A1(De.target,f)||Ge&&U&&De.pointerType!=="touch"||Z&&Z(De,Ge)},_e=function(){P._vx.reset(),P._vy.reset(),Ye.pause(),h&&h(P)},Ae=function(){var De=P.deltaX=yd(Q),Ge=P.deltaY=yd(Fe),Se=Math.abs(De)>=i,Pe=Math.abs(Ge)>=i;N&&(Se||Pe)&&N(P,De,Ge,Q,Fe),Se&&(C&&P.deltaX>0&&C(P),R&&P.deltaX<0&&R(P),E&&E(P),O&&P.deltaX<0!=se<0&&O(P),se=P.deltaX,Q[0]=Q[1]=Q[2]=0),Pe&&(D&&P.deltaY>0&&D(P),A&&P.deltaY<0&&A(P),S&&S(P),Y&&P.deltaY<0!=j<0&&Y(P),j=P.deltaY,Fe[0]=Fe[1]=Fe[2]=0),(x||G)&&(J&&J(P),G&&(m&&G===1&&m(P),b&&b(P),G=0),x=!1),k&&!(k=!1)&&le&&le(P),I&&(Me(P),I=!1),Ce=0},je=function(De,Ge,Se){Q[Se]+=De,Fe[Se]+=Ge,P._vx.update(De),P._vy.update(Ge),c?Ce||(Ce=requestAnimationFrame(Ae)):Ae()},ze=function(De,Ge){Te&&!ce&&(P.axis=ce=Math.abs(De)>Math.abs(Ge)?"x":"y",k=!0),ce!=="y"&&(Q[2]+=De,P._vx.update(De,!0)),ce!=="x"&&(Fe[2]+=Ge,P._vy.update(Ge,!0)),c?Ce||(Ce=requestAnimationFrame(Ae)):Ae()},ye=function(De){if(!Re(De,1)){De=Ea(De,u);var Ge=De.clientX,Se=De.clientY,Pe=Ge-P.x,Oe=Se-P.y,Xe=P.isDragging;P.x=Ge,P.y=Se,(Xe||(Pe||Oe)&&(Math.abs(P.startX-Ge)>=s||Math.abs(P.startY-Se)>=s))&&(G||(G=Xe?2:1),Xe||(P.isDragging=!0),ze(Pe,Oe))}},Qe=P.onPress=function(pe){Re(pe,1)||pe&&pe.button||(P.axis=ce=null,Ye.pause(),P.isPressed=!0,pe=Ea(pe),se=j=0,P.startX=P.x=pe.clientX,P.startY=P.y=pe.clientY,P._vx.reset(),P._vy.reset(),yn(W?o:ae,yi[1],ye,te,!0),P.deltaX=P.deltaY=0,T&&T(P))},F=P.onRelease=function(pe){if(!Re(pe,1)){xn(W?o:ae,yi[1],ye,!0);var De=!isNaN(P.y-P.startY),Ge=P.isDragging,Se=Ge&&(Math.abs(P.x-P.startX)>3||Math.abs(P.y-P.startY)>3),Pe=Ea(pe);!Se&&De&&(P._vx.reset(),P._vy.reset(),u&&oe&&an.delayedCall(.08,function(){if(Ga()-ve>300&&!pe.defaultPrevented){if(pe.target.click)pe.target.click();else if(ae.createEvent){var Oe=ae.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,Jn,1,Pe.screenX,Pe.screenY,Pe.clientX,Pe.clientY,!1,!1,!1,!1,0,null),pe.target.dispatchEvent(Oe)}}})),P.isDragging=P.isGesturing=P.isPressed=!1,h&&Ge&&!W&&Ye.restart(!0),G&&Ae(),p&&Ge&&p(P),M&&M(P,Se)}},ge=function(De){return De.touches&&De.touches.length>1&&(P.isGesturing=!0)&&he(De,P.isDragging)},xe=function(){return(P.isGesturing=!1)||L(P)},Ie=function(De){if(!Re(De)){var Ge=ne(),Se=B();je((Ge-y)*$e,(Se-v)*$e,1),y=Ge,v=Se,h&&Ye.restart(!0)}},de=function(De){if(!Re(De)){De=Ea(De,u),Me&&(I=!0);var Ge=(De.deltaMode===1?l:De.deltaMode===2?Jn.innerHeight:1)*_;je(De.deltaX*Ge,De.deltaY*Ge,0),h&&!W&&Ye.restart(!0)}},ue=function(De){if(!Re(De)){var Ge=De.clientX,Se=De.clientY,Pe=Ge-P.x,Oe=Se-P.y;P.x=Ge,P.y=Se,x=!0,h&&Ye.restart(!0),(Pe||Oe)&&ze(Pe,Oe)}},K=function(De){P.event=De,$(P)},me=function(De){P.event=De,X(P)},be=function(De){return Re(De)||Ea(De,u)&&Be(P)};Ye=P._dc=an.delayedCall(d||.25,_e).pause(),P.deltaX=P.deltaY=0,P._vx=$u(0,50,!0),P._vy=$u(0,50,!0),P.scrollX=ne,P.scrollY=B,P.isDragging=P.isGesturing=P.isPressed=!1,Dm(this),P.enable=function(pe){return P.isEnabled||(yn(q?ae:o,"scroll",qu),a.indexOf("scroll")>=0&&yn(q?ae:o,"scroll",Ie,te,re),a.indexOf("wheel")>=0&&yn(o,"wheel",de,te,re),(a.indexOf("touch")>=0&&Rm||a.indexOf("pointer")>=0)&&(yn(o,yi[0],Qe,te,re),yn(ae,yi[2],F),yn(ae,yi[3],F),oe&&yn(o,"click",Le,!0,!0),Be&&yn(o,"click",be),he&&yn(ae,"gesturestart",ge),L&&yn(ae,"gestureend",xe),$&&yn(o,Vr+"enter",K),X&&yn(o,Vr+"leave",me),J&&yn(o,Vr+"move",ue)),P.isEnabled=!0,P.isDragging=P.isGesturing=P.isPressed=x=G=!1,P._vx.reset(),P._vy.reset(),y=ne(),v=B(),pe&&pe.type&&Qe(pe),qe&&qe(P)),P},P.disable=function(){P.isEnabled&&(zs.filter(function(pe){return pe!==P&&Va(pe.target)}).length||xn(q?ae:o,"scroll",qu),P.isPressed&&(P._vx.reset(),P._vy.reset(),xn(W?o:ae,yi[1],ye,!0)),xn(q?ae:o,"scroll",Ie,re),xn(o,"wheel",de,re),xn(o,yi[0],Qe,re),xn(ae,yi[2],F),xn(ae,yi[3],F),xn(o,"click",Le,!0),xn(o,"click",be),xn(ae,"gesturestart",ge),xn(ae,"gestureend",xe),xn(o,Vr+"enter",K),xn(o,Vr+"leave",me),xn(o,Vr+"move",ue),P.isEnabled=P.isPressed=P.isDragging=!1,nt&&nt(P))},P.kill=P.revert=function(){P.disable();var pe=zs.indexOf(P);pe>=0&&zs.splice(pe,1),Ji===P&&(Ji=0)},zs.push(P),W&&Va(o)&&(Ji=P),P.enable(g)},b1(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Wt.version="3.15.0";Wt.create=function(r){return new Wt(r)};Wt.register=Um;Wt.getAll=function(){return zs.slice()};Wt.getById=function(r){return zs.filter(function(e){return e.vars.id===r})[0]};Im()&&an.registerPlugin(Wt);var He,Us,ht,Mt,jn,vt,Vh,Nl,po,Ha,Ra,Zo,hn,Yl,ju,bn,Sd,Ed,Os,Om,Oc,Fm,En,Ku,Bm,km,hr,Ju,Hh,$s,Wh,Wa,Zu,Fc,Qo=1,fn=Date.now,Bc=fn(),_i=0,Pa=0,bd=function(e,t,n){var i=Yn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Td=function(e,t){return t&&(!Yn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},w1=function r(){return Pa&&requestAnimationFrame(r)},Ad=function(){return Yl=1},wd=function(){return Yl=0},Ri=function(e){return e},Da=function(e){return Math.round(e*1e5)/1e5||0},zm=function(){return typeof window<"u"},Gm=function(){return He||zm()&&(He=window.gsap)&&He.registerPlugin&&He},ls=function(e){return!!~Vh.indexOf(e)},Vm=function(e){return(e==="Height"?Wh:ht["inner"+e])||jn["client"+e]||vt["client"+e]},Hm=function(e){return Sr(e,"getBoundingClientRect")||(ls(e)?function(){return Sl.width=ht.innerWidth,Sl.height=Wh,Sl}:function(){return Ki(e)})},C1=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Sr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Vm(s):e["client"+s])||0}},R1=function(e,t){return!t||~ki.indexOf(e)?Hm(e):function(){return Sl}},Fi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Sr(e,n))?a()-Hm(e)()[s]:ls(e)?(jn[n]||vt[n])-Vm(i):e[n]-e["offset"+i])},el=function(e,t){for(var n=0;n<Os.length;n+=3)(!t||~t.indexOf(Os[n+1]))&&e(Os[n],Os[n+1],Os[n+2])},Yn=function(e){return typeof e=="string"},pn=function(e){return typeof e=="function"},Ia=function(e){return typeof e=="number"},Hr=function(e){return typeof e=="object"},ba=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ds=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Is=Math.abs,Wm="left",Xm="top",Xh="right",Yh="bottom",is="width",rs="height",Xa="Right",Ya="Left",qa="Top",$a="Bottom",Yt="padding",fi="margin",oa="Width",qh="Height",Kt="px",di=function(e){return ht.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},P1=function(e){var t=di(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Cd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ki=function(e,t){var n=t&&di(e)[ju]!=="matrix(1, 0, 0, 1, 0, 0)"&&He.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ul=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Ym=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},D1=function(e){return function(t){return He.utils.snap(Ym(e),t)}},$h=function(e){var t=He.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},I1=function(e){return function(t,n){return $h(Ym(e))(t,n.direction)}},tl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},nn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},tn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},nl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Rd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},il={toggleActions:"play",anticipatePin:0},Ol={top:0,left:0,center:.5,bottom:1,right:1},vl=function(e,t){if(Yn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Ol?Ol[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},rl=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,_=Mt.createElement("div"),g=ls(n)||Sr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?vt:n.tagName==="IFRAME"?n.contentDocument.body:n,b=e.indexOf("start")!==-1,T=b?c:u,M="border-color:"+T+";font-size:"+h+";color:"+T+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(M+=(i===Jt?Xh:Yh)+":"+(a+parseFloat(d))+"px;"),o&&(M+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=b,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=M,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],xl(_,0,i,b),_},xl=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+oa]=1,s["border"+o+oa]=0,s[n.p]=t+"px",He.set(e,s)},ct=[],Qu={},mo,Pd=function(){return fn()-_i>34&&(mo||(mo=requestAnimationFrame(er)))},Ls=function(){(!En||!En.isPressed||En.startX>vt.clientWidth)&&(ft.cache++,En?mo||(mo=requestAnimationFrame(er)):er(),_i||us("scrollStart"),_i=fn())},kc=function(){km=ht.innerWidth,Bm=ht.innerHeight},La=function(e){ft.cache++,(e===!0||!hn&&!Fm&&!Mt.fullscreenElement&&!Mt.webkitFullscreenElement&&(!Ku||km!==ht.innerWidth||Math.abs(ht.innerHeight-Bm)>ht.innerHeight*.25))&&Nl.restart(!0)},cs={},L1=[],qm=function r(){return tn(at,"scrollEnd",r)||jr(!0)},us=function(e){return cs[e]&&cs[e].map(function(t){return t()})||L1},Xn=[],$m=function(e){for(var t=0;t<Xn.length;t+=5)(!e||Xn[t+4]&&Xn[t+4].query===e)&&(Xn[t].style.cssText=Xn[t+1],Xn[t].getBBox&&Xn[t].setAttribute("transform",Xn[t+2]||""),Xn[t+3].uncache=1)},jm=function(){return ft.forEach(function(e){return pn(e)&&++e.cacheID&&(e.rec=e())})},jh=function(e,t){var n;for(bn=0;bn<ct.length;bn++)n=ct[bn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Wa=!0,t&&$m(t),t||us("revert")},Km=function(e,t){ft.cache++,(t||!Tn)&&ft.forEach(function(n){return pn(n)&&n.cacheID++&&(n.rec=0)}),Yn(e)&&(ht.history.scrollRestoration=Hh=e)},Tn,ss=0,Dd,N1=function(){if(Dd!==ss){var e=Dd=ss;requestAnimationFrame(function(){return e===ss&&jr(!0)})}},Jm=function(){vt.appendChild($s),Wh=!En&&$s.offsetHeight||ht.innerHeight,vt.removeChild($s)},Id=function(e){return po(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},jr=function(e,t){if(jn=Mt.documentElement,vt=Mt.body,Vh=[ht,Mt,jn,vt],_i&&!e&&!Wa){nn(at,"scrollEnd",qm);return}Jm(),Tn=at.isRefreshing=!0,Wa||jm();var n=us("refreshInit");Om&&at.sort(),t||jh(),ft.forEach(function(i){pn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ct.slice(0).forEach(function(i){return i.refresh()}),Wa=!1,ct.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Zu=1,Id(!0),ct.forEach(function(i){var s=Fi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Id(!1),Zu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ft.forEach(function(i){pn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Km(Hh,1),Nl.pause(),ss++,Tn=2,er(2),ct.forEach(function(i){return pn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Tn=at.isRefreshing=!1,us("refresh")},eh=0,Ml=1,ja,er=function(e){if(e===2||!Tn&&!Wa){at.isUpdating=!0,ja&&ja.update(0);var t=ct.length,n=fn(),i=n-Bc>=50,s=t&&ct[0].scroll();if(Ml=eh>s?-1:1,Tn||(eh=s),i&&(_i&&!Yl&&n-_i>200&&(_i=0,us("scrollEnd")),Ra=Bc,Bc=n),Ml<0){for(bn=t;bn-- >0;)ct[bn]&&ct[bn].update(0,i);Ml=1}else for(bn=0;bn<t;bn++)ct[bn]&&ct[bn].update(0,i);at.isUpdating=!1}mo=0},th=[Wm,Xm,Yh,Xh,fi+$a,fi+Xa,fi+qa,fi+Ya,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],yl=th.concat([is,rs,"boxSizing","max"+oa,"max"+qh,"position",fi,Yt,Yt+qa,Yt+Xa,Yt+$a,Yt+Ya]),U1=function(e,t,n){js(n);var i=e._gsap;if(i.spacerIsNative)js(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},zc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=th.length,a=t.style,o=e.style,l;s--;)l=th[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Yh]=o[Xh]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[is]=Ul(e,An)+Kt,a[rs]=Ul(e,Jt)+Kt,a[Yt]=o[fi]=o[Xm]=o[Wm]="0",js(i),o[is]=o["max"+oa]=n[is],o[rs]=o["max"+qh]=n[rs],o[Yt]=n[Yt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},O1=/([A-Z])/g,js=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||He.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(O1,"-$1").toLowerCase())}},sl=function(e){for(var t=yl.length,n=e.style,i=[],s=0;s<t;s++)i.push(yl[s],n[yl[s]]);return i.t=e,i},F1=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Sl={left:0,top:0},Ld=function(e,t,n,i,s,a,o,l,c,u,h,d,f,_){pn(e)&&(e=e(l)),Yn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?vl("0"+e.substr(3),n):0));var g=f?f.time():0,m,p,b;if(f&&f.seek(0),isNaN(e)||(e=+e),Ia(e))f&&(e=He.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),o&&xl(o,n,i,!0);else{pn(t)&&(t=t(l));var T=(e||"0").split(" "),M,C,R,A;b=Dn(t,l)||vt,M=Ki(b)||{},(!M||!M.left&&!M.top)&&di(b).display==="none"&&(A=b.style.display,b.style.display="block",M=Ki(b),A?b.style.display=A:b.style.removeProperty("display")),C=vl(T[0],M[i.d]),R=vl(T[1]||"0",n),e=M[i.p]-c[i.p]-u+C+s-R,o&&xl(o,R,i,n-R<20||o._isStart&&R>20),n-=n-R}if(_&&(l[_]=e||-.001,e<0&&(e=0)),a){var D=e+n,E=a._isStart;m="scroll"+i.d2,xl(a,D,i,E&&D>20||!E&&(h?Math.max(vt[m],jn[m]):a.parentNode[m])<=D+1),h&&(c=Ki(o),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Kt))}return f&&b&&(m=Ki(b),f.seek(d),p=Ki(b),f._caScrollDist=m[i.p]-p[i.p],e=e/f._caScrollDist*d),f&&f.seek(g),f?e:Math.round(e)},B1=/(webkit|moz|length|cssText|inset)/i,Nd=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===vt){e._stOrig=s.cssText,o=di(e);for(a in o)!+a&&!B1.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;He.core.getCache(e).uncache=1,t.appendChild(e)}},Zm=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},al=function(e,t,n){var i={};i[t.p]="+="+n,He.set(e,i)},Ud=function(e,t){var n=wr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,h){var d=a.tween,f=l.onComplete,_={};c=c||n();var g=Zm(n,c,function(){d.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,d&&d.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){ft.cache++,a.tween&&er()},l.onComplete=function(){a.tween=0,f&&f.call(d)},d=a.tween=He.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},nn(e,"wheel",n.wheelHandler),at.isTouch&&nn(e,"touchmove",n.wheelHandler),s},at=(function(){function r(t,n){Us||r.register(He)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ju(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Pa){this.update=this.refresh=this.kill=Ri;return}n=Cd(Yn(n)||Ia(n)||n.nodeType?{trigger:n}:n,il);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,b=s.onSnapComplete,T=s.once,M=s.snap,C=s.pinReparent,R=s.pinSpacer,A=s.containerAnimation,D=s.fastScrollEnd,E=s.preventOverlaps,S=n.horizontal||n.containerAnimation&&n.horizontal!==!1?An:Jt,N=!h&&h!==0,O=Dn(n.scroller||ht),Y=He.core.getCache(O),$=ls(O),X=("pinType"in n?n.pinType:Sr(O,"pinType")||$&&"fixed")==="fixed",J=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Z=N&&n.toggleActions.split(" "),W="markers"in n?n.markers:il.markers,he=$?0:parseFloat(di(O)["border"+S.p2+oa])||0,L=this,Me=n.onRefreshInit&&function(){return n.onRefreshInit(L)},qe=C1(O,$,S),nt=R1(O,$),Be=0,$e=0,re=0,oe=wr(O,S),Te,le,Ce,Ye,G,x,I,k,ce,P,se,j,te,ne,B,y,v,U,q,ae,Q,Fe,ve,Le,Re,_e,Ae,je,ze,ye,Qe,F,ge,xe,Ie,de,ue,K,me;if(L._startClamp=L._endClamp=!1,L._dir=S,m*=45,L.scroller=O,L.scroll=A?A.time.bind(A):oe,Ye=oe(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(Om=1,n.refreshPriority===-9999&&(ja=L)),Y.tweenScroll=Y.tweenScroll||{top:Ud(O,Jt),left:Ud(O,An)},L.tweenTo=Te=Y.tweenScroll[S.p],L.scrubDuration=function(Se){ge=Ia(Se)&&Se,ge?F?F.duration(Se):F=He.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ge,paused:!0,onComplete:function(){return p&&p(L)}}):(F&&F.progress(1).kill(),F=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),ye=0,l||(l=i.vars.id)),M&&((!Hr(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in vt.style&&He.set($?[vt,jn]:O,{scrollBehavior:"auto"}),ft.forEach(function(Se){return pn(Se)&&Se.target===($?Mt.scrollingElement||jn:O)&&(Se.smooth=!1)}),Ce=pn(M.snapTo)?M.snapTo:M.snapTo==="labels"?D1(i):M.snapTo==="labelsDirectional"?I1(i):M.directional!==!1?function(Se,Pe){return $h(M.snapTo)(Se,fn()-$e<500?0:Pe.direction)}:He.utils.snap(M.snapTo),xe=M.duration||{min:.1,max:2},xe=Hr(xe)?Ha(xe.min,xe.max):Ha(xe,xe),Ie=He.delayedCall(M.delay||ge/2||.1,function(){var Se=oe(),Pe=fn()-$e<500,Oe=Te.tween;if((Pe||Math.abs(L.getVelocity())<10)&&!Oe&&!Yl&&Be!==Se){var Xe=(Se-x)/ne,_t=i&&!N?i.totalProgress():Xe,it=Pe?0:(_t-Qe)/(fn()-Ra)*1e3||0,Et=He.utils.clamp(-Xe,1-Xe,Is(it/2)*it/.185),Vt=Xe+(M.inertia===!1?0:Et),Rt,bt,xt=M,zn=xt.onStart,Pt=xt.onInterrupt,_n=xt.onComplete;if(Rt=Ce(Vt,L),Ia(Rt)||(Rt=Vt),bt=Math.max(0,Math.round(x+Rt*ne)),Se<=I&&Se>=x&&bt!==Se){if(Oe&&!Oe._initted&&Oe.data<=Is(bt-Se))return;M.inertia===!1&&(Et=Rt-Xe),Te(bt,{duration:xe(Is(Math.max(Is(Vt-_t),Is(Rt-_t))*.185/it/.05||0)),ease:M.ease||"power3",data:Is(bt-Se),onInterrupt:function(){return Ie.restart(!0)&&Pt&&Ds(L,Pt)},onComplete:function(){L.update(),Be=oe(),i&&!N&&(F?F.resetTo("totalProgress",Rt,i._tTime/i._tDur):i.progress(Rt)),ye=Qe=i&&!N?i.totalProgress():L.progress,b&&b(L),_n&&Ds(L,_n)}},Se,Et*ne,bt-Se-Et*ne),zn&&Ds(L,zn,Te.tween)}}else L.isActive&&Be!==Se&&Ie.restart(!0)}).pause()),l&&(Qu[l]=L),d=L.trigger=Dn(d||f!==!0&&f),me=d&&d._gsap&&d._gsap.stRevert,me&&(me=me(L)),f=f===!0?d:Dn(f),Yn(o)&&(o={targets:d,className:o}),f&&(_===!1||_===fi||(_=!_&&f.parentNode&&f.parentNode.style&&di(f.parentNode).display==="flex"?!1:Yt),L.pin=f,le=He.core.getCache(f),le.spacer?B=le.pinState:(R&&(R=Dn(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),le.spacerIsNative=!!R,R&&(le.spacerState=sl(R))),le.spacer=U=R||Mt.createElement("div"),U.classList.add("pin-spacer"),l&&U.classList.add("pin-spacer-"+l),le.pinState=B=sl(f)),n.force3D!==!1&&He.set(f,{force3D:!0}),L.spacer=U=le.spacer,ze=di(f),Le=ze[_+S.os2],ae=He.getProperty(f),Q=He.quickSetter(f,S.a,Kt),zc(f,U,ze),v=sl(f)),W){j=Hr(W)?Cd(W,Rd):Rd,P=rl("scroller-start",l,O,S,j,0),se=rl("scroller-end",l,O,S,j,0,P),q=P["offset"+S.op.d2];var be=Dn(Sr(O,"content")||O);k=this.markerStart=rl("start",l,be,S,j,q,0,A),ce=this.markerEnd=rl("end",l,be,S,j,q,0,A),A&&(K=He.quickSetter([k,ce],S.a,Kt)),!X&&!(ki.length&&Sr(O,"fixedMarkers")===!0)&&(P1($?vt:O),He.set([P,se],{force3D:!0}),_e=He.quickSetter(P,S.a,Kt),je=He.quickSetter(se,S.a,Kt))}if(A){var pe=A.vars.onUpdate,De=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){L.update(0,0,1),pe&&pe.apply(A,De||[])})}if(L.previous=function(){return ct[ct.indexOf(L)-1]},L.next=function(){return ct[ct.indexOf(L)+1]},L.revert=function(Se,Pe){if(!Pe)return L.kill(!0);var Oe=Se!==!1||!L.enabled,Xe=hn;Oe!==L.isReverted&&(Oe&&(de=Math.max(oe(),L.scroll.rec||0),re=L.progress,ue=i&&i.progress()),k&&[k,ce,P,se].forEach(function(_t){return _t.style.display=Oe?"none":"block"}),Oe&&(hn=L,L.update(Oe)),f&&(!C||!L.isActive)&&(Oe?U1(f,U,B):zc(f,U,di(f),Re)),Oe||L.update(Oe),hn=Xe,L.isReverted=Oe)},L.refresh=function(Se,Pe,Oe,Xe){if(!((hn||!L.enabled)&&!Pe)){if(f&&Se&&_i){nn(r,"scrollEnd",qm);return}!Tn&&Me&&Me(L),hn=L,Te.tween&&!Oe&&(Te.tween.kill(),Te.tween=0),F&&F.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(dt){return dt.vars.immediateRender&&dt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var _t=qe(),it=nt(),Et=A?A.duration():Fi(O,S),Vt=ne<=.01||!ne,Rt=0,bt=Xe||0,xt=Hr(Oe)?Oe.end:n.end,zn=n.endTrigger||d,Pt=Hr(Oe)?Oe.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),_n=L.pinnedContainer=n.pinnedContainer&&Dn(n.pinnedContainer,L),si=d&&Math.max(0,ct.indexOf(L))||0,$t=si,w,V,ee,ie,H,fe,we,Ve,ke,Ze,Je,Ke,rt;for(W&&Hr(Oe)&&(Ke=He.getProperty(P,S.p),rt=He.getProperty(se,S.p));$t-- >0;)fe=ct[$t],fe.end||fe.refresh(0,1)||(hn=L),we=fe.pin,we&&(we===d||we===f||we===_n)&&!fe.isReverted&&(Ze||(Ze=[]),Ze.unshift(fe),fe.revert(!0,!0)),fe!==ct[$t]&&(si--,$t--);for(pn(Pt)&&(Pt=Pt(L)),Pt=bd(Pt,"start",L),x=Ld(Pt,d,_t,S,oe(),k,P,L,it,he,X,Et,A,L._startClamp&&"_startClamp")||(f?-.001:0),pn(xt)&&(xt=xt(L)),Yn(xt)&&!xt.indexOf("+=")&&(~xt.indexOf(" ")?xt=(Yn(Pt)?Pt.split(" ")[0]:"")+xt:(Rt=vl(xt.substr(2),_t),xt=Yn(Pt)?Pt:(A?He.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,x):x)+Rt,zn=d)),xt=bd(xt,"end",L),I=Math.max(x,Ld(xt||(zn?"100% 0":Et),zn,_t,S,oe()+Rt,ce,se,L,it,he,X,Et,A,L._endClamp&&"_endClamp"))||-.001,Rt=0,$t=si;$t--;)fe=ct[$t]||{},we=fe.pin,we&&fe.start-fe._pinPush<=x&&!A&&fe.end>0&&(w=fe.end-(L._startClamp?Math.max(0,fe.start):fe.start),(we===d&&fe.start-fe._pinPush<x||we===_n)&&isNaN(Pt)&&(Rt+=w*(1-fe.progress)),we===f&&(bt+=w));if(x+=Rt,I+=Rt,L._startClamp&&(L._startClamp+=Rt),L._endClamp&&!Tn&&(L._endClamp=I||-.001,I=Math.min(I,Fi(O,S))),ne=I-x||(x-=.01)&&.001,Vt&&(re=He.utils.clamp(0,1,He.utils.normalize(x,I,de))),L._pinPush=bt,k&&Rt&&(w={},w[S.a]="+="+Rt,_n&&(w[S.p]="-="+oe()),He.set([k,ce],w)),f&&!(Zu&&L.end>=Fi(O,S)))w=di(f),ie=S===Jt,ee=oe(),Fe=parseFloat(ae(S.a))+bt,!Et&&I>1&&(Je=($?Mt.scrollingElement||jn:O).style,Je={style:Je,value:Je["overflow"+S.a.toUpperCase()]},$&&di(vt)["overflow"+S.a.toUpperCase()]!=="scroll"&&(Je.style["overflow"+S.a.toUpperCase()]="scroll")),zc(f,U,w),v=sl(f),V=Ki(f,!0),Ve=X&&wr(O,ie?An:Jt)(),_?(Re=[_+S.os2,ne+bt+Kt],Re.t=U,$t=_===Yt?Ul(f,S)+ne+bt:0,$t&&(Re.push(S.d,$t+Kt),U.style.flexBasis!=="auto"&&(U.style.flexBasis=$t+Kt)),js(Re),_n&&ct.forEach(function(dt){dt.pin===_n&&dt.vars.pinSpacing!==!1&&(dt._subPinOffset=!0)}),X&&oe(de)):($t=Ul(f,S),$t&&U.style.flexBasis!=="auto"&&(U.style.flexBasis=$t+Kt)),X&&(H={top:V.top+(ie?ee-x:Ve)+Kt,left:V.left+(ie?Ve:ee-x)+Kt,boxSizing:"border-box",position:"fixed"},H[is]=H["max"+oa]=Math.ceil(V.width)+Kt,H[rs]=H["max"+qh]=Math.ceil(V.height)+Kt,H[fi]=H[fi+qa]=H[fi+Xa]=H[fi+$a]=H[fi+Ya]="0",H[Yt]=w[Yt],H[Yt+qa]=w[Yt+qa],H[Yt+Xa]=w[Yt+Xa],H[Yt+$a]=w[Yt+$a],H[Yt+Ya]=w[Yt+Ya],y=F1(B,H,C),Tn&&oe(0)),i?(ke=i._initted,Oc(1),i.render(i.duration(),!0,!0),ve=ae(S.a)-Fe+ne+bt,Ae=Math.abs(ne-ve)>1,X&&Ae&&y.splice(y.length-2,2),i.render(0,!0,!0),ke||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Oc(0)):ve=ne,Je&&(Je.value?Je.style["overflow"+S.a.toUpperCase()]=Je.value:Je.style.removeProperty("overflow-"+S.a));else if(d&&oe()&&!A)for(V=d.parentNode;V&&V!==vt;)V._pinOffset&&(x-=V._pinOffset,I-=V._pinOffset),V=V.parentNode;Ze&&Ze.forEach(function(dt){return dt.revert(!1,!0)}),L.start=x,L.end=I,Ye=G=Tn?de:oe(),!A&&!Tn&&(Ye<de&&oe(de),L.scroll.rec=0),L.revert(!1,!0),$e=fn(),Ie&&(Be=-1,Ie.restart(!0)),hn=0,i&&N&&(i._initted||ue)&&i.progress()!==ue&&i.progress(ue||0,!0).render(i.time(),!0,!0),(Vt||re!==L.progress||A||g||i&&!i._initted)&&(i&&!N&&(i._initted||re||i.vars.immediateRender!==!1)&&i.totalProgress(A&&x<-.001&&!re?He.utils.normalize(x,I,0):re,!0),L.progress=Vt||(Ye-x)/ne===re?0:re),f&&_&&(U._pinOffset=Math.round(L.progress*ve)),F&&F.invalidate(),isNaN(Ke)||(Ke-=He.getProperty(P,S.p),rt-=He.getProperty(se,S.p),al(P,S,Ke),al(k,S,Ke-(Xe||0)),al(se,S,rt),al(ce,S,rt-(Xe||0))),Vt&&!Tn&&L.update(),u&&!Tn&&!te&&(te=!0,u(L),te=!1)}},L.getVelocity=function(){return(oe()-G)/(fn()-Ra)*1e3||0},L.endAnimation=function(){ba(L.callbackAnimation),i&&(F?F.progress(1):i.paused()?N||ba(i,L.direction<0,1):ba(i,i.reversed()))},L.labelToScroll=function(Se){return i&&i.labels&&(x||L.refresh()||x)+i.labels[Se]/i.duration()*ne||0},L.getTrailing=function(Se){var Pe=ct.indexOf(L),Oe=L.direction>0?ct.slice(0,Pe).reverse():ct.slice(Pe+1);return(Yn(Se)?Oe.filter(function(Xe){return Xe.vars.preventOverlaps===Se}):Oe).filter(function(Xe){return L.direction>0?Xe.end<=x:Xe.start>=I})},L.update=function(Se,Pe,Oe){if(!(A&&!Oe&&!Se)){var Xe=Tn===!0?de:L.scroll(),_t=Se?0:(Xe-x)/ne,it=_t<0?0:_t>1?1:_t||0,Et=L.progress,Vt,Rt,bt,xt,zn,Pt,_n,si;if(Pe&&(G=Ye,Ye=A?oe():Xe,M&&(Qe=ye,ye=i&&!N?i.totalProgress():it)),m&&f&&!hn&&!Qo&&_i&&(!it&&x<Xe+(Xe-G)/(fn()-Ra)*m?it=1e-4:it===1&&I>Xe+(Xe-G)/(fn()-Ra)*m&&(it=.9999)),it!==Et&&L.enabled){if(Vt=L.isActive=!!it&&it<1,Rt=!!Et&&Et<1,Pt=Vt!==Rt,zn=Pt||!!it!=!!Et,L.direction=it>Et?1:-1,L.progress=it,zn&&!hn&&(bt=it&&!Et?0:it===1?1:Et===1?2:3,N&&(xt=!Pt&&Z[bt+1]!=="none"&&Z[bt+1]||Z[bt],si=i&&(xt==="complete"||xt==="reset"||xt in i))),E&&(Pt||si)&&(si||h||!i)&&(pn(E)?E(L):L.getTrailing(E).forEach(function(ee){return ee.endAnimation()})),N||(F&&!hn&&!Qo?(F._dp._time-F._start!==F._time&&F.render(F._dp._time-F._start),F.resetTo?F.resetTo("totalProgress",it,i._tTime/i._tDur):(F.vars.totalProgress=it,F.invalidate().restart())):i&&i.totalProgress(it,!!(hn&&($e||Se)))),f){if(Se&&_&&(U.style[_+S.os2]=Le),!X)Q(Da(Fe+ve*it));else if(zn){if(_n=!Se&&it>Et&&I+1>Xe&&Xe+1>=Fi(O,S),C)if(!Se&&(Vt||_n)){var $t=Ki(f,!0),w=Xe-x;Nd(f,vt,$t.top+(S===Jt?w:0)+Kt,$t.left+(S===Jt?0:w)+Kt)}else Nd(f,U);js(Vt||_n?y:v),Ae&&it<1&&Vt||Q(Fe+(it===1&&!_n?ve:0))}}M&&!Te.tween&&!hn&&!Qo&&Ie.restart(!0),o&&(Pt||T&&it&&(it<1||!Fc))&&po(o.targets).forEach(function(ee){return ee.classList[Vt||T?"add":"remove"](o.className)}),a&&!N&&!Se&&a(L),zn&&!hn?(N&&(si&&(xt==="complete"?i.pause().totalProgress(1):xt==="reset"?i.restart(!0).pause():xt==="restart"?i.restart(!0):i[xt]()),a&&a(L)),(Pt||!Fc)&&(c&&Pt&&Ds(L,c),J[bt]&&Ds(L,J[bt]),T&&(it===1?L.kill(!1,1):J[bt]=0),Pt||(bt=it===1?1:3,J[bt]&&Ds(L,J[bt]))),D&&!Vt&&Math.abs(L.getVelocity())>(Ia(D)?D:2500)&&(ba(L.callbackAnimation),F?F.progress(1):ba(i,xt==="reverse"?1:!it,1))):N&&a&&!hn&&a(L)}if(je){var V=A?Xe/A.duration()*(A._caScrollDist||0):Xe;_e(V+(P._isFlipped?1:0)),je(V)}K&&K(-Xe/A.duration()*(A._caScrollDist||0))}},L.enable=function(Se,Pe){L.enabled||(L.enabled=!0,nn(O,"resize",La),$||nn(O,"scroll",Ls),Me&&nn(r,"refreshInit",Me),Se!==!1&&(L.progress=re=0,Ye=G=Be=oe()),Pe!==!1&&L.refresh())},L.getTween=function(Se){return Se&&Te?Te.tween:F},L.setPositions=function(Se,Pe,Oe,Xe){if(A){var _t=A.scrollTrigger,it=A.duration(),Et=_t.end-_t.start;Se=_t.start+Et*Se/it,Pe=_t.start+Et*Pe/it}L.refresh(!1,!1,{start:Td(Se,Oe&&!!L._startClamp),end:Td(Pe,Oe&&!!L._endClamp)},Xe),L.update()},L.adjustPinSpacing=function(Se){if(Re&&Se){var Pe=Re.indexOf(S.d)+1;Re[Pe]=parseFloat(Re[Pe])+Se+Kt,Re[1]=parseFloat(Re[1])+Se+Kt,js(Re)}},L.disable=function(Se,Pe){if(Se!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,Pe||F&&F.pause(),de=0,le&&(le.uncache=1),Me&&tn(r,"refreshInit",Me),Ie&&(Ie.pause(),Te.tween&&Te.tween.kill()&&(Te.tween=0)),!$)){for(var Oe=ct.length;Oe--;)if(ct[Oe].scroller===O&&ct[Oe]!==L)return;tn(O,"resize",La),$||tn(O,"scroll",Ls)}},L.kill=function(Se,Pe){L.disable(Se,Pe),F&&!Pe&&F.kill(),l&&delete Qu[l];var Oe=ct.indexOf(L);Oe>=0&&ct.splice(Oe,1),Oe===bn&&Ml>0&&bn--,Oe=0,ct.forEach(function(Xe){return Xe.scroller===L.scroller&&(Oe=1)}),Oe||Tn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,Se&&i.revert({kill:!1}),Pe||i.kill()),k&&[k,ce,P,se].forEach(function(Xe){return Xe.parentNode&&Xe.parentNode.removeChild(Xe)}),ja===L&&(ja=0),f&&(le&&(le.uncache=1),Oe=0,ct.forEach(function(Xe){return Xe.pin===f&&Oe++}),Oe||(le.spacer=0)),n.onKill&&n.onKill(L)},ct.push(L),L.enable(!1,!1),me&&me(L),i&&i.add&&!ne){var Ge=L.update;L.update=function(){L.update=Ge,ft.cache++,x||I||L.refresh()},He.delayedCall(.01,L.update),ne=.01,x=I=0}else L.refresh();f&&N1()},r.register=function(n){return Us||(He=n||Gm(),zm()&&window.document&&r.enable(),Us=Pa),Us},r.defaults=function(n){if(n)for(var i in n)il[i]=n[i];return il},r.disable=function(n,i){Pa=0,ct.forEach(function(a){return a[i?"kill":"disable"](n)}),tn(ht,"wheel",Ls),tn(Mt,"scroll",Ls),clearInterval(Zo),tn(Mt,"touchcancel",Ri),tn(vt,"touchstart",Ri),tl(tn,Mt,"pointerdown,touchstart,mousedown",Ad),tl(tn,Mt,"pointerup,touchend,mouseup",wd),Nl.kill(),el(tn);for(var s=0;s<ft.length;s+=3)nl(tn,ft[s],ft[s+1]),nl(tn,ft[s],ft[s+2])},r.enable=function(){if(ht=window,Mt=document,jn=Mt.documentElement,vt=Mt.body,He){if(po=He.utils.toArray,Ha=He.utils.clamp,Ju=He.core.context||Ri,Oc=He.core.suppressOverwrites||Ri,Hh=ht.history.scrollRestoration||"auto",eh=ht.pageYOffset||0,He.core.globals("ScrollTrigger",r),vt){Pa=1,$s=document.createElement("div"),$s.style.height="100vh",$s.style.position="absolute",Jm(),w1(),Wt.register(He),r.isTouch=Wt.isTouch,hr=Wt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ku=Wt.isTouch===1,nn(ht,"wheel",Ls),Vh=[ht,Mt,jn,vt],He.matchMedia?(r.matchMedia=function(u){var h=He.matchMedia(),d;for(d in u)h.add(d,u[d]);return h},He.addEventListener("matchMediaInit",function(){jm(),jh()}),He.addEventListener("matchMediaRevert",function(){return $m()}),He.addEventListener("matchMedia",function(){jr(0,1),us("matchMedia")}),He.matchMedia().add("(orientation: portrait)",function(){return kc(),kc})):console.warn("Requires GSAP 3.11.0 or later"),kc(),nn(Mt,"scroll",Ls);var n=vt.hasAttribute("style"),i=vt.style,s=i.borderTopStyle,a=He.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Ki(vt),Jt.m=Math.round(o.top+Jt.sc())||0,An.m=Math.round(o.left+An.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(vt.setAttribute("style",""),vt.removeAttribute("style")),Zo=setInterval(Pd,250),He.delayedCall(.5,function(){return Qo=0}),nn(Mt,"touchcancel",Ri),nn(vt,"touchstart",Ri),tl(nn,Mt,"pointerdown,touchstart,mousedown",Ad),tl(nn,Mt,"pointerup,touchend,mouseup",wd),ju=He.utils.checkPrefix("transform"),yl.push(ju),Us=fn(),Nl=He.delayedCall(.2,jr).pause(),Os=[Mt,"visibilitychange",function(){var u=ht.innerWidth,h=ht.innerHeight;Mt.hidden?(Sd=u,Ed=h):(Sd!==u||Ed!==h)&&La()},Mt,"DOMContentLoaded",jr,ht,"load",jr,ht,"resize",La],el(nn),ct.forEach(function(u){return u.enable(0,1)}),l=0;l<ft.length;l+=3)nl(tn,ft[l],ft[l+1]),nl(tn,ft[l],ft[l+2])}else if(Mt){var c=function u(){r.enable(),Mt.removeEventListener("DOMContentLoaded",u)};Mt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Fc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Zo)||(Zo=i)&&setInterval(Pd,i),"ignoreMobileResize"in n&&(Ku=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(el(tn)||el(nn,n.autoRefreshEvents||"none"),Fm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Dn(n),a=ft.indexOf(s),o=ls(s);~a&&ft.splice(a,o?6:2),i&&(o?ki.unshift(ht,i,vt,i,jn,i):ki.unshift(s,i))},r.clearMatchMedia=function(n){ct.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Yn(n)?Dn(n):n).getBoundingClientRect(),o=a[s?is:rs]*i||0;return s?a.right-o>0&&a.left+o<ht.innerWidth:a.bottom-o>0&&a.top+o<ht.innerHeight},r.positionInViewport=function(n,i,s){Yn(n)&&(n=Dn(n));var a=n.getBoundingClientRect(),o=a[s?is:rs],l=i==null?o/2:i in Ol?Ol[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/ht.innerWidth:(a.top+l)/ht.innerHeight},r.killAll=function(n){if(ct.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=cs.killAll||[];cs={},i.forEach(function(s){return s()})}},r})();at.version="3.15.0";at.saveStyles=function(r){return r?po(r).forEach(function(e){if(e&&e.style){var t=Xn.indexOf(e);t>=0&&Xn.splice(t,5),Xn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),He.core.getCache(e),Ju())}}):Xn};at.revert=function(r,e){return jh(!r,e)};at.create=function(r,e){return new at(r,e)};at.refresh=function(r){return r?La(!0):(Us||at.register())&&jr(!0)};at.update=function(r){return++ft.cache&&er(r===!0?2:0)};at.clearScrollMemory=Km;at.maxScroll=function(r,e){return Fi(r,e?An:Jt)};at.getScrollFunc=function(r,e){return wr(Dn(r),e?An:Jt)};at.getById=function(r){return Qu[r]};at.getAll=function(){return ct.filter(function(r){return r.vars.id!=="ScrollSmoother"})};at.isScrolling=function(){return!!_i};at.snapDirectional=$h;at.addEventListener=function(r,e){var t=cs[r]||(cs[r]=[]);~t.indexOf(e)||t.push(e)};at.removeEventListener=function(r,e){var t=cs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};at.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var h=[],d=[],f=He.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(_){h.length||f.restart(!0),h.push(_.trigger),d.push(_),s<=h.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&pn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return pn(s)&&(s=s(),nn(at,"refresh",function(){return s=e.batchMax()})),po(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(at.create(c))}),t};var Od=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Gc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Wt.isTouch?" pinch-zoom":""):"none",e===jn&&r(vt,t)},ol={auto:1,scroll:1},k1=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||He.core.getCache(s),o=fn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==vt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ol[(l=di(s)).overflowY]||ol[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!ls(s)&&(ol[(l=di(s)).overflowY]||ol[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Qm=function(e,t,n,i){return Wt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&k1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&nn(Mt,Wt.eventTypes[0],Bd,!1,!0)},onDisable:function(){return tn(Mt,Wt.eventTypes[0],Bd,!0)}})},z1=/(input|label|select|textarea)/i,Fd,Bd=function(e){var t=z1.test(e.target.tagName);(t||Fd)&&(e._gsapAllow=!0,Fd=t)},G1=function(e){Hr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Dn(e.target)||jn,u=He.core.globals().ScrollSmoother,h=u&&u.get(),d=hr&&(e.content&&Dn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=wr(c,Jt),_=wr(c,An),g=1,m=(Wt.isTouch&&ht.visualViewport?ht.visualViewport.scale*ht.visualViewport.width:ht.outerWidth)/ht.innerWidth,p=0,b=pn(i)?function(){return i(o)}:function(){return i||2.8},T,M,C=Qm(c,e.type,!0,s),R=function(){return M=!1},A=Ri,D=Ri,E=function(){l=Fi(c,Jt),D=Ha(hr?1:0,l),n&&(A=Ha(0,Fi(c,An))),T=ss},S=function(){d._gsap.y=Da(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},N=function(){if(M){requestAnimationFrame(R);var W=Da(o.deltaY/2),he=D(f.v-W);if(d&&he!==f.v+f.offset){f.offset=he-f.v;var L=Da((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",d._gsap.y=L+"px",f.cacheID=ft.cache,er()}return!0}f.offset&&S(),M=!0},O,Y,$,X,J=function(){E(),O.isActive()&&O.vars.scrollY>l&&(f()>l?O.progress(1)&&f(l):O.resetTo("scrollY",l))};return d&&He.set(d,{y:"+=0"}),e.ignoreCheck=function(Z){return hr&&Z.type==="touchmove"&&N()||g>1.05&&Z.type!=="touchstart"||o.isGesturing||Z.touches&&Z.touches.length>1},e.onPress=function(){M=!1;var Z=g;g=Da((ht.visualViewport&&ht.visualViewport.scale||1)/m),O.pause(),Z!==g&&Gc(c,g>1.01?!0:n?!1:"x"),Y=_(),$=f(),E(),T=ss},e.onRelease=e.onGestureStart=function(Z,W){if(f.offset&&S(),!W)X.restart(!0);else{ft.cache++;var he=b(),L,Me;n&&(L=_(),Me=L+he*.05*-Z.velocityX/.227,he*=Od(_,L,Me,Fi(c,An)),O.vars.scrollX=A(Me)),L=f(),Me=L+he*.05*-Z.velocityY/.227,he*=Od(f,L,Me,Fi(c,Jt)),O.vars.scrollY=D(Me),O.invalidate().duration(he).play(.01),(hr&&O.vars.scrollY>=l||L>=l-1)&&He.to({},{onUpdate:J,duration:he})}a&&a(Z)},e.onWheel=function(){O._ts&&O.pause(),fn()-p>1e3&&(T=0,p=fn())},e.onChange=function(Z,W,he,L,Me){if(ss!==T&&E(),W&&n&&_(A(L[2]===W?Y+(Z.startX-Z.x):_()+W-L[1])),he){f.offset&&S();var qe=Me[2]===he,nt=qe?$+Z.startY-Z.y:f()+he-Me[1],Be=D(nt);qe&&nt!==Be&&($+=Be-nt),f(Be)}(he||W)&&er()},e.onEnable=function(){Gc(c,n?!1:"x"),at.addEventListener("refresh",J),nn(ht,"resize",J),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),C.enable()},e.onDisable=function(){Gc(c,!0),tn(ht,"resize",J),at.removeEventListener("refresh",J),C.kill()},e.lockAxis=e.lockAxis!==!1,o=new Wt(e),o.iOS=hr,hr&&!f()&&f(1),hr&&He.ticker.add(Ri),X=o._dc,O=He.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Zm(f,f(),function(){return O.pause()})},onUpdate:er,onComplete:X.vars.onComplete}),o};at.sort=function(r){if(pn(r))return ct.sort(r);var e=ht.pageYOffset||0;return at.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ht.innerHeight}),ct.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};at.observe=function(r){return new Wt(r)};at.normalizeScroll=function(r){if(typeof r>"u")return En;if(r===!0&&En)return En.enable();if(r===!1){En&&En.kill(),En=r;return}var e=r instanceof Wt?r:G1(r);return En&&En.target===e.target&&En.kill(),ls(e.target)&&(En=e),e};at.core={_getVelocityProp:$u,_inputObserver:Qm,_scrollers:ft,_proxies:ki,bridge:{ss:function(){_i||us("scrollStart"),_i=fn()},ref:function(){return hn}}};Gm()&&He.registerPlugin(at);wi.registerPlugin(at);function V1(){const r=matchMedia("(prefers-reduced-motion: reduce)"),e=document.querySelector(".motion-control");let t=r.matches,n,i,s=!0;function a(){i?.revert(),n?.revert(),document.documentElement.classList.toggle("reduced",t),e.setAttribute("aria-pressed",String(t)),e.setAttribute("aria-label",t?"Turn animations on":"Turn animations off"),document.querySelector(".motion-label").textContent=t?"Motion off":"Motion on",window.dispatchEvent(new CustomEvent("portfolio-motion",{detail:{disabled:t}})),!t&&(n=wi.context(()=>{s&&(wi.timeline({defaults:{ease:"power3.out"}}).from(".hero h1",{y:65,opacity:0,duration:1.15},0).from(".hero-portrait img",{y:70,opacity:0,duration:1.4},.1).from(".site-header",{opacity:0,duration:.8},.7),s=!1),wi.from(".intro-statement",{opacity:.3,scrollTrigger:{trigger:".intro",start:"top 75%",end:"top 20%",scrub:.8}}),wi.from(".intro-bottom p",{y:35,opacity:0,stagger:.15,duration:.8,ease:"power3.out",scrollTrigger:{trigger:".intro-bottom",start:"top 88%",once:!0}}),document.querySelectorAll(".project-index button").forEach(o=>{wi.from(o,{y:20,opacity:0,duration:.7,scrollTrigger:{trigger:o,start:"top 94%",once:!0}})}),wi.from(".contact-title>span",{y:50,opacity:0,stagger:.12,duration:.85,ease:"power3.out",scrollTrigger:{trigger:".contact",start:"top 75%",once:!0}})}),i=wi.matchMedia(),i.add({desktop:"(min-width: 900px)",mobile:"(max-width: 899px)"},o=>{const l=o.conditions.desktop;return wi.timeline({scrollTrigger:{trigger:".hero",start:"top top",end:()=>`+=${innerHeight*(l?.65:.35)}`,pin:l,scrub:.7,anticipatePin:1}}).to(".name-first",{xPercent:-13,opacity:l?.35:.6,ease:"none"},0).to(".name-last",{xPercent:12,opacity:l?.35:.6,ease:"none"},0).to(".hero-portrait",{scale:l?1.12:1.04,y:l?65:30,ease:"none"},0).to(".hero-side-note,.hero-topline",{opacity:0,ease:"none"},0).to(".hero-progress i",{scaleX:1,ease:"none"},0),()=>{}}),at.refresh())}e.addEventListener("click",()=>{t=!t,a()}),r.addEventListener("change",o=>{t=o.matches,a()}),a(),document.fonts.ready.then(()=>at.refresh()),document.querySelector(".hero-portrait img").addEventListener("load",()=>at.refresh()),document.querySelectorAll(".journey-record,.skill-list details").forEach(o=>o.addEventListener("toggle",()=>at.refresh())),window.addEventListener("pagehide",()=>{i?.revert(),n?.revert()},{once:!0})}const lt=(r,e,t,n,i,s,a="calm")=>({title:r,caption:e,type:t,labels:n,metric:i,metricLabel:s,mood:a}),H1=[[lt("Make every invoice accountable.","Connect hospital invoices to the contract terms that govern them.","invoice-desk",["INVOICE","CONTRACT","EVIDENCE"],"Healthcare","spend intelligence","warm"),lt("Own the whole production system.","Connect the validation pipeline, customer application, and extraction service into one operating platform.","operations-console",["AI PIPELINE","CUSTOMER APP","EXTRACTION"],"1,230+","commits across both app repos","build"),lt("Follow every line to its evidence.","Orchestrate matching, vector retrieval, and graph context across 11 tenants.","line-evidence",["INNGEST","CLAUDE","QDRANT","POSTGRES","NEO4J"],"35K","validated lines · $93.6M","flow"),lt("Verify first. Then route.","Extracted values pass through verification before acceptance, a second pass, or human review.","review-sorter",["VERIFIED","81% ACCEPT","16% RECHECK","3% REVIEW"],"90%","dropped shift rows uncovered","alert"),lt("Bring hidden variance into view.","Audit agents trace invoice rows to excluded contracts and incorrect calculations.","audit-inspection",["3,844 ROWS","713 CHECKS","6 AGENTS"],"$173.5M","hidden variance surfaced","alert"),lt("Give remediation a workforce.","Nine agents run thirty detectors, surface silent failures, and open fix pull requests.","repair-bench",["DETECT","TRIAGE","REPAIR","OPEN PR"],"9","agents · 30 detectors","resolve"),lt("Bring the documents home.","Phoenix pulls invoices and contracts from hospital systems into a deterministic S3 ingestion pipeline.","document-archive",["ERP","BROWSERBASE","INNGEST","S3"],"38 / 38","documents ingested every run","flow"),lt("Keep every tenant in its own world.","Tenant-filtered SQL views and enterprise SSO close the gaps between customer boundaries.","tenant-lockers",["51 VIEWS","TENANT FILTER","WORKOS","ENTRA"],"51","tenant-filtered views","secure"),lt("Answer with boundaries.","Streaming assistance combines topic guardrails with a measured model evaluation.","guarded-assistant",["QUESTION","GUARDRAILS","STREAM"],"8 / 8","Claude evaluation test cases","calm"),lt("Turn findings into action.","Cases, claims, demand letters, and a review workbench connect audit findings to the recovery workflow.","claims-desk",["REVIEW","CASE","CLAIM","LETTER"],"3–6×","faster key queries","resolve"),lt("Recover what the queue left behind.","A recovery job finds stalled invoices; CMS ambulance rates provide a pricing benchmark.","recovery-conveyor",["STALLED","RECOVERED","CMS RATES"],"3,542","stalled invoices found","alert"),lt("Carry the system into production.","Lead hospital cutovers, production releases, and a sales demonstration environment.","release-dock",["CUTOVER","RELEASE","AWS CDK","VERCEL"],"~11","production releases","build"),lt("Build the team around the system.","Daily coordination, PR review, interviews, role definition, and onboarding connect the people doing the work.","team-table",["STANDUP","PR REVIEW","HIRING","ONBOARDING"],"7–9","people in the daily standup","calm")],[lt("One practice. Eight connected services.","Voice, scheduling, records, staff, inventory, billing, analytics, and access work as one platform.","clinic-miniature",["VOICE","SCHEDULE","RECORDS","STAFF","INVENTORY","BILLING","ANALYTICS","ACCESS"],"8","practice services","calm"),lt("Build from the first foundation.","Own architecture, the full-stack application, cloud infrastructure, and production launch as the sole engineer.","blueprint-workshop",["ARCHITECTURE","APPLICATION","CLOUD","LAUNCH"],"End to end","founding engineering","build"),lt("Turn a voice into an appointment.","A multilingual receptionist greets patients, answers from the knowledge base, books visits, and routes calls.","reception-booking",["OPENAI REALTIME","TWILIO","SCHEDULING"],"Realtime","voice receptionist","flow"),lt("Route each request to the right model.","A shared LLM gateway selects models by service and reuses cached prompts.","model-switchboard",["MODEL ROUTING","PROMPT CACHE","RESPONSE"],"25–30%","lower AI inference cost","resolve"),lt("Scale the service, not the ceremony.","Agent-as-a-Lambda connects API Gateway, DynamoDB, Cognito, and CDK across the backend.","serverless-launch",["API GATEWAY","LAMBDA","DYNAMODB","COGNITO","CDK"],"~60%","less new-service delivery time","build"),lt("Give every service a clear structure.","Five modules separate routing, handling, business logic, data models, and resources.","module-toolbox",["ROUTER","HANDLER","SERVICE","MODELS","RESOURCE"],"5","files in the Lambda standard","calm"),lt("Make onboarding resilient.","A DynamoDB schema connects more than twenty-eight tables with lazy initialization and resilient onboarding.","onboarding-cabinet",["28+ TABLES","LAZY INIT","ONBOARDING"],"28+","DynamoDB tables","secure"),lt("Ship the interface without interruption.","A React and TypeScript dashboard moves through GitHub Actions into development and production.","dashboard-handoff",["REACT","TYPESCRIPT","ACTIONS","DEV / PROD"],"Zero downtime","deployment workflow","build"),lt("Take the product beyond the code.","Market research, UX, SEO, Cal.com, Twilio, and go-to-market complete the product lifecycle.","launch-planner",["RESEARCH","UX","INTEGRATE","LAUNCH"],"Full lifecycle","research through go-to-market","warm")],[lt("Bring the business into the model.","Work with leadership and customer success on lead generation and multi-franchise analysis.","franchise-street",["C-SUITE","CUSTOMER SUCCESS","ML WORKFLOWS"],"Business + ML","lead-generation systems","calm"),lt("Teach the model the right tone.","Supervised fine-tuning, LoRA, and preference optimization adapt LLaMA-3 to the domain.","language-tuning",["LLAMA-3 8B","SFT","LORA","DPO"],"25%","better personalization","build"),lt("Put four agents to work.","Inbound, outbound prospecting, FDD targeting, and response agents span acquisition channels.","sales-workstations",["INBOUND","OUTBOUND","FDD TARGET","RESPONDER"],"4","production agents","flow"),lt("Move a lead through the whole journey.","LangChain, Airflow, and CrewAI connect collection, orchestration, scoring, and conversion.","lead-funnel",["LANGCHAIN","AIRFLOW","CREWAI","SCORING"],"500+","leads processed each day","resolve"),lt("Improve the signal. Watch the system.","DeBERTa intent models and Pinecone retrieval run on Azure with deployment and model monitoring.","retrieval-library",["DEBERTA","PINECONE RAG","AZURE","W&B"],"+18% / +20%","model and RAG accuracy gains","calm"),lt("Connect technical work to the next chapter.","As the sole data scientist, support the team’s fundraising with the ML work behind the product.","pitch-room",["DATA SCIENCE","PRODUCT","LEADERSHIP"],"Sole","data scientist","warm")],[lt("Give conversation a shared context.","LLaMA-3-70B, BERT, and spaCy power conversational support through Telegram and a web interface.","conversation-terminals",["LLAMA-3-70B","BERT","SPACY"],"Multimodel","conversational support","calm"),lt("Read more than the words.","Text, speech, and facial-expression inputs inform mood detection and personalized interactions.","multimodal-instruments",["TEXT","SPEECH","EXPRESSION"],"3","input modalities","flow"),lt("Let the response follow the sentiment.","Real-time NLP and Random Forest / SVM mood models adapt the conversation to incoming signals.","sentiment-dial",["NLP","RANDOM FOREST","SVM","RESPONSE"],"Realtime","sentiment adaptation","resolve"),lt("Build protection into the pipeline.","AWS deployment combines encryption, access controls, audit logs, and automated ML workflows.","protected-cloud",["ENCRYPTION","ACCESS","AUDIT LOG","ML PIPELINE"],"AWS","protected deployment","secure")],[lt("Prepare the signal before the model.","Python and C++ pipelines clean client and portfolio data in S3, check consistency, and extract features.","data-refinery",["S3","CLEAN","OUTLIERS","FEATURES"],"Python + C++","data preparation","flow"),lt("Let the experiments compete.","Compare more than ten algorithms with tuning and k-fold validation for risk and portfolio models.","experiment-podium",["XGBOOST","LIGHTGBM","GRADIENT BOOST","NEURAL NET"],"12%","model performance gain","build"),lt("Find the anomaly, reduce the noise.","Risk models surface unusual trading behavior while reducing false alarms.","trading-radar",["TRADING SIGNAL","ANOMALY","REVIEW"],"20%","fewer false positives","alert"),lt("Close the training and serving loop.","SageMaker and Lambda automate retraining; Ray, Databricks, and GPU EC2 serve optimized BERT.","training-deployment",["SAGEMAKER","LAMBDA","RAY","GPU EC2"],"Train → serve","automated ML infrastructure","resolve")],[lt("Bring the useful answer to the top.","A reranking algorithm improves telecom customer-support recommendations.","support-search",["CANDIDATES","RERANK","RECOMMEND"],"Telecom","support recommendations","calm"),lt("Turn live streams into better decisions.","Low-latency C++ features and Airflow ETL improve network models and data loading.","telecom-towers",["C++ STREAMS","FEATURES","AIRFLOW"],"22%","uplift in network optimization","flow"),lt("Keep the live system in sight.","New Relic, Datadog, and Git-based delivery connect monitoring with the release workflow.","network-control-room",["NEW RELIC","DATADOG","GIT CI/CD"],"Realtime","monitoring and delivery","build")]],W1=[{id:"spendrule",company:"SpendRule",year:"2026",theme:"spendrule",business:"Contract intelligence for healthcare purchased services.",title:"Turn contracts<br>into controls.",copy:"I lead the engineering across invoice validation, the customer platform, and document extraction—connecting the evidence to the decision.",metric:"35K",label:"invoice lines validated",url:"https://spendrule.com/product",steps:["Read the terms","Verify each line","Route the exception"]},{id:"infillo",company:"Infillo AI",year:"2025–26",theme:"infillo",business:"An AI front desk for healthcare practices.",title:"A front desk<br>that listens.",copy:"As the founding engineer, I built the platform from architecture to launch: voice, scheduling, patient records, billing, and the services underneath.",metric:"8",label:"practice services built end to end",url:"https://www.infillo.ai/",steps:["Answer the call","Understand the request","Connect the appointment"]},{id:"revscale",company:"RevScale AI",year:"2024–25",theme:"revscale",business:"AI agents for sales and multi-location business growth.",title:"Give growth<br>an engine.",copy:"I fine-tuned language models and shipped agents for inbound, outbound, targeting, and response—connecting personalization with a working lead pipeline.",metric:"500+",label:"leads processed per day",url:"https://revscale.com/",steps:["Find the signal","Coordinate the agents","Build the pipeline"]},{id:"thirdi",company:"Thirdi.co",year:"2024",theme:"thirdi",business:"Custom AI solutions built around business workflows.",title:"Understand<br>the context.",copy:"My work focused on conversational support: combining language, speech, and emotion signals into a multimodal system that could adapt its responses.",metric:"3",label:"modalities: text, speech, and facial emotion",url:"https://thirdi.co/",steps:["Read the signals","Combine the context","Adapt the response"]},{id:"morgan-stanley",company:"Morgan Stanley",employer:"Workmate Inc",year:"2023–24",theme:"morgan-stanley",business:"Morgan Stanley client engagement through Workmate Inc.",title:"Find risk<br>in the signal.",copy:"For the Morgan Stanley engagement, I built data pipelines, risk models, and anomaly detection, then brought them into automated training and serving infrastructure.",metric:"20%",label:"reduction in false positives",url:"https://www.morganstanley.com/about-us",steps:["Prepare the data","Identify anomalies","Refine the signal"]},{id:"capgemini",company:"Capgemini",year:"2021",theme:"capgemini",business:"Business and technology transformation, including telecom networks.",title:"Make the<br>network smarter.",copy:"I worked on telecom recommendation and optimization systems, with low-latency feature extraction, automated data pipelines, and real-time monitoring.",metric:"22%",label:"uplift in network optimization models",url:"https://www.capgemini.com/industries/telecommunications/",steps:["Collect the streams","Extract the features","Optimize the network"]}],X1=["#ff9a48","#5dd9ee","#a7dcb6","#b4c8ff","#9dc7e4","#71d5ff"],Y1=["#352219","#083744","#163825","#293249","#102d43","#113f60"],Fl=W1.map((r,e)=>({...r,accent:X1[e],background:Y1[e],role:Zr.experience[e].title.split(" — ")[0]+(r.employer?" · client engagement through "+r.employer:""),beats:H1[e].map((t,n)=>({...t,source:Zr.experience[e].paragraphs[n].replace(/^- /,""),sourceIndex:n}))}));function q1(r,e,t){const n=`<div class="journey-records-heading"><div><span class="section-tag">The work behind the worlds</span><h2>Experience,<br><em>in detail.</em></h2></div><a href="./resume.txt" download="Naveen-Ganadi-Resume.txt" class="plain-link">Download résumé ${t}</a></div><p class="journey-fallback-note">Explore all six roles below, without camera motion.</p>${Fl.map((i,s)=>{const a=r.experience[s];return`<details class="journey-record" id="record-${i.id}"><summary><span>0${s+1}</span><strong>${i.company}${i.employer?`<small class="journey-client-attribution">Client engagement · via ${i.employer}</small>`:""}</strong><span class="journey-record-role">${e(i.role)}</span><span>${i.year}</span><b>+</b></summary><div class="journey-record-body"><p class="journey-record-meta">${e(a.meta)}</p><p>${i.business}</p>${i.beats.map((o,l)=>`<div class="journey-record-point"><h4>${e(o.title)}</h4><p>${e(o.source)}</p><button data-scene-jump="experience" data-company="${s}" data-point="${l}">Explore this scene ${t}</button></div>`).join("")}<a href="${i.url}" target="_blank" rel="noopener noreferrer">${i.employer?"Client website":"Company website"} ${t}</a></div></details>`}).join("")}<p class="journey-footnote">Company-inspired worlds. Conceptual visualizations of the work described in my résumé.</p>`;return Dp(Fl,{id:"experience",eyebrow:"Six roles. Every chapter of the work.",title:"Step into<br>my <em>experience.</em>",invitation:"Each point becomes a scene.<br>Scroll, or choose what to explore.",records:n},e,t)}const kd=[{name:"agentsmd",url:"https://github.com/Naveen-Sai-Ganadi/agentsmd",description:"Universal CLI to keep AGENTS.md, CLAUDE.md, .cursorrules, .github/copilot-instructions.md, and .windsurfrules in sync.",language:"TypeScript",fork:!1,empty:!1},{name:"ai-debate-arena",url:"https://github.com/Naveen-Sai-Ganadi/ai-debate-arena",description:"Make Claude and ChatGPT debate each other, mediated by Gemini, until they converge — in one desktop window. No API keys.",language:"TypeScript",fork:!1,empty:!1},{name:"slashh-executorch",url:"https://github.com/Naveen-Sai-Ganadi/slashh-executorch",description:"",language:"Python",fork:!1,empty:!1},{name:"slashh",url:"https://github.com/Naveen-Sai-Ganadi/slashh",description:"",language:"TypeScript",fork:!1,empty:!1},{name:"slashh-ui",url:"https://github.com/Naveen-Sai-Ganadi/slashh-ui",description:"",language:"HTML",fork:!1,empty:!1},{name:"slashh-api",url:"https://github.com/Naveen-Sai-Ganadi/slashh-api",description:"",language:"TypeScript",fork:!1,empty:!1},{name:"portfolio",url:"https://github.com/Naveen-Sai-Ganadi/portfolio",description:"",language:"HTML",fork:!1,empty:!1},{name:"load",url:"https://github.com/Naveen-Sai-Ganadi/load",description:"",language:"JavaScript",fork:!1,empty:!1},{name:"GodsEye",url:"https://github.com/Naveen-Sai-Ganadi/GodsEye",description:"",language:"Jupyter Notebook",fork:!1,empty:!1},{name:"Resume_Analyzer",url:"https://github.com/Naveen-Sai-Ganadi/Resume_Analyzer",description:"",language:"JavaScript",fork:!1,empty:!1},{name:"CV_Analyzer",url:"https://github.com/Naveen-Sai-Ganadi/CV_Analyzer",description:"",language:"Python",fork:!1,empty:!1},{name:"MLproject2",url:"https://github.com/Naveen-Sai-Ganadi/MLproject2",description:"",language:"Jupyter Notebook",fork:!1,empty:!1},{name:"End-to-End-MLflow",url:"https://github.com/Naveen-Sai-Ganadi/End-to-End-MLflow",description:"",language:"Python",fork:!1,empty:!1},{name:"mlprojects",url:"https://github.com/Naveen-Sai-Ganadi/mlprojects",description:"",language:"Python",fork:!1,empty:!1},{name:"Facial_Expression_Recognition",url:"https://github.com/Naveen-Sai-Ganadi/Facial_Expression_Recognition",description:"Facial Expression Recognition",language:"Jupyter Notebook",fork:!1,empty:!1},{name:"Pycharm",url:"https://github.com/Naveen-Sai-Ganadi/Pycharm",description:"my python projects",language:"",fork:!1,empty:!0},{name:"Git-example",url:"https://github.com/Naveen-Sai-Ganadi/Git-example",description:"",language:"",fork:!1,empty:!0},{name:"automation",url:"https://github.com/Naveen-Sai-Ganadi/automation",description:"writing automation scripts for some tasks like auto applying for jobs , filtering and sending notifications",language:"",fork:!1,empty:!0},{name:"VacayGuide",url:"https://github.com/Naveen-Sai-Ganadi/VacayGuide",description:"CS554 Project, Vacay Guide Service",language:"JavaScript",fork:!0,empty:!1}],Kh="https://github.com/Naveen-Sai-Ganadi",un=(r,e,t,n,i,s,a="calm")=>({title:r,caption:e,type:t,labels:n,metric:i,metricLabel:s,mood:a,source:e}),ur=(r,e,t,n,i,s)=>({id:r,company:e,year:"GitHub",role:t,accent:n,background:i,url:`${Kh}/${r}`,beats:s,business:t}),Bl=[ur("agentsmd","agentsmd","AI developer tooling · TypeScript","#d6c29c","#302519",[un("Keep the rules in sync.","One AGENTS.md source generates the instruction files used by Claude, Cursor, Copilot, and Windsurf.","config-typewriter",["AGENTS.md","CLAUDE.md","CURSOR","COPILOT","WINDSURF"],"1 → 5","configuration files from one source","flow"),un("Catch drift before it ships.","Linting, quality scoring, and nested-file checks turn configuration quality into a GitHub Actions gate.","config-inspector",["DETECT","SYNC","LINT","AUDIT","CHECK"],"Pre-alpha","CLI + reusable GitHub Action","resolve")]),ur("ai-debate-arena","AI Debate Arena","Desktop experiment · Electron / React","#d0a7f0","#2e1b3c",[un("Make different models challenge an idea.","Claude and ChatGPT exchange arguments while Gemini mediates the conversation in an Electron desktop window.","debate-roundtable",["CLAUDE","GEMINI","CHATGPT"],"3","model conversations","flow"),un("Bring the debate to a conclusion.","Convergence, fixed-turn, and manual modes guide the exchange; the full transcript can be saved to Markdown.","debate-transcript",["ARGUMENT","MEDIATION","CONVERGENCE"],"Markdown","saved debate transcript","resolve")]),ur("slashh-executorch","Voice at the edge","Team hackathon project · Android / ExecuTorch","#55ccea","#113845",[un("Keep the intelligence on the phone.","WavLM analyzes audio while Whisper-Tiny provides text for a local classifier; the Snapdragon Hexagon NPU runs the neural models.","edge-phone",["WAVLM","WHISPER-TINY","HEXAGON NPU"],"On device","no audio leaves the phone","flow"),un("Fuse the signals before reacting.","Audio and text scores feed a fusion model, smoothing, and hysteresis before a sustained signal produces a calming nudge.","audio-mixing",["AUDIO","TEXT","FUSION"],"Voice tension","a reflection tool, not a medical device","calm")]),ur("slashh","Company Brain","Knowledge and agent framework · TypeScript","#b0ce8c","#26371e",[un("Connect knowledge to its sources.","The public core ingests documents, chunks, entities, and relations into a pluggable knowledge layer.","knowledge-library",["DOCUMENTS","VECTORS","GRAPH"],"Source-linked","company knowledge","flow"),un("Let specialists work together.","A supervisor delegates to agents through REST and MCP tools; the graph supports grounded answers with citations.","agent-toolbench",["SUPERVISOR","REST","MCP","CITATIONS"],"Public core","agent and knowledge foundations","resolve")]),ur("load","Load","Form-filling extension · JavaScript","#efb16d","#392517",[un("Move knowledge into the right fields.","A Chrome extension detects forms, reads uploaded knowledge files, and maps relevant information to the page.","browser-autofill",["KNOWLEDGE","FIELD MAP","FORM"],"Chrome","Manifest V3 extension","flow"),un("Show the reasoning before the fill.","Review mode presents proposed answers, reasoning, and confidence before the user confirms the fill.","human-review",["ANALYZE","REVIEW","CONFIRM","FILL"],"User review","before form filling","calm")]),ur("Resume_Analyzer","Resume Analyzer","Full-stack AI application · React / Flask","#9dbefa","#1c2945",[un("Compare experience with the role.","The application uses GPT-4 to analyze a résumé against a job description and return scoring and feedback.","resume-scales",["RESUME","JOB DESCRIPTION","FEEDBACK"],"GPT-4","résumé and role comparison","flow"),un("Connect the analysis to an application.","A React interface, Flask API, MongoDB store, JWT-cookie authentication, and Docker Compose support the workflow.","fullstack-workspace",["REACT","FLASK","MONGODB","DOCKER"],"Full stack","documented application architecture","build")]),ur("GodsEye","GodsEye","Computer vision · Python / TensorFlow","#71d6c3","#123830",[un("Find the face. Read the mask.","An OpenCV camera workflow passes detected faces to a TensorFlow face-mask classification model.","mask-detection",["CAMERA","FACE REGION","MASK MODEL"],"Computer vision","face-mask detection","flow"),un("Train the model behind the detector.","Training and evaluation notebooks prepare the data and export a model for the live camera application.","training-lighttable",["DATA","TRAIN","EVALUATE","EXPORT"],"Notebook → app","training and camera inference","build")]),ur("Facial_Expression_Recognition","Expression Recognition","Research notebook · TensorFlow / Keras","#e5b2c6","#352334",[un("Learn patterns in expression.","A CNN notebook combines exploratory data analysis with facial-expression classification.","expression-study",["FACE INPUT","CNN","EXPRESSION"],"CNN","facial-expression research","flow"),un("Look at the data before the model.","NumPy, Pandas, Matplotlib, and Seaborn support exploration before the TensorFlow / Keras training workflow.","data-exploration-lab",["EXPLORE","VISUALIZE","TRAIN"],"EDA + learning","documented notebook workflow","calm")])];function $1(r,e){const t=`<div class="journey-records-heading"><div><span class="section-tag">From my public GitHub</span><h2>Open the<br><em>source.</em></h2></div><a class="plain-link" href="${Kh}" target="_blank" rel="noopener noreferrer">@Naveen-Sai-Ganadi ${e}</a></div><p class="journey-fallback-note">Explore the projects and repositories below, without camera motion.</p><div class="github-featured-records">${Bl.map((n,i)=>`<details class="journey-record" id="github-record-${n.id}"><summary><span>${String(i+1).padStart(2,"0")}</span><strong>${r(n.company)}</strong><span class="journey-record-role">${r(n.role)}</span><span>Source</span><b>+</b></summary><div class="journey-record-body">${n.beats.map((s,a)=>`<div class="journey-record-point"><h4>${r(s.title)}</h4><p>${r(s.caption)}</p><button data-scene-jump="github" data-company="${i}" data-point="${a}">Explore this scene ${e}</button></div>`).join("")}<a href="${n.url}" target="_blank" rel="noopener noreferrer">View repository ${e}</a></div></details>`).join("")}</div><div class="github-catalog-heading"><h3>All public repositories</h3><span>${kd.length} repositories · reviewed October 13, 2026</span></div><div class="github-catalog">${kd.map(n=>`<a href="${n.url}" target="_blank" rel="noopener noreferrer"><span>${r(n.name)}<small>${r(n.description||(n.empty?"Empty repository":n.fork?"Forked repository":"Source repository"))}</small></span><span>${r(n.empty?"Empty":n.fork?"Fork":n.language||"Code")}</span>${e}</a>`).join("")}</div><p class="journey-footnote">Animated concepts follow the public documentation and source. Repository availability is a snapshot; project software has not been independently run or audited here.</p>`;return Dp(Bl,{id:"github-projects",eyebrow:"Built in the open",title:"Ideas you can<br><em>look inside.</em>",invitation:"Eight project walkthroughs.<br>Explore the idea, then open the source.",records:t},r,e)}const fr=r=>r.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);document.querySelector("#app").innerHTML=`
<a class="skip" href="#main">Skip to content</a>
<header class="site-header"><a href="#home" class="wordmark" aria-label="Naveen Ganadi home">ng<span>●</span></a><nav aria-label="Primary"><a href="#experience">Experience</a><a href="#github-projects">GitHub projects</a><a href="#about">About</a><a href="#contact" class="nav-contact">Let’s talk ${Ai}</a></nav><button class="motion-control" aria-pressed="false" aria-label="Turn animations off"><span class="motion-bars"><i></i><i></i><i></i></span><span class="motion-label">Motion on</span></button></header>
<main id="main">
<section class="hero" id="home" aria-labelledby="hero-title"><div class="hero-stage"><div class="hero-topline"><p>AI & Machine Learning Engineer</p><p>Based in Fort Lauderdale, FL</p></div><div class="hero-circle" aria-hidden="true"></div><h1 id="hero-title"><span class="name-first">Naveen</span><span class="name-last">Ganadi<span class="name-dot">.</span></span></h1><div class="hero-portrait"><img src="./images/naveen-cutout.png" alt="Naveen Ganadi" fetchpriority="high" width="1237" height="1272"></div><div class="hero-side-note"><span>A little curiosity.<br>A lot of ownership.</span><p>I build AI<br>that works<br>in the real world.</p></div><div class="hero-bottom"><a href="#experience" class="explore-link"><span class="circle-arrow">↓</span> Enter the experience</a><p>From the model<br>to everything around it.</p><span class="hero-edition">Selected work<br>2021 — 2026</span></div><div class="hero-progress" aria-hidden="true"><i></i></div></div></section>
${q1(Zr,fr,Ai)}
<section class="intro" id="about"><div class="intro-top"><span class="section-tag">The way I work</span><span class="tiny-cross" aria-hidden="true">+</span></div><p class="intro-statement">A model is only<br>the <em>beginning.</em></p><div class="intro-bottom"><span class="intro-index">↓</span><p>I’m Naveen. I take AI from an experiment to something people can depend on—across healthcare, fintech, and sales automation.</p><p>That means owning the whole journey: the data, the reasoning, the product, and the infrastructure that keeps it running.</p></div><div class="expertise-line"><span>LLM systems</span><span>Agent engineering</span><span>Applied ML</span><span>Cloud & MLOps</span></div></section>
${$1(fr,Ai)}
<section class="more-work"><div class="more-heading"><span class="section-tag">Further explorations</span><h2>Always<br><em>building.</em></h2></div><div class="project-index">${[2,3,4,5].map((r,e)=>{const t=Zr.projects[r];return`<button data-project="${r}" aria-haspopup="dialog"><span class="index-number">0${e+1}</span><span class="index-name">${fr(t.title)}<small>${fr(t.meta)}</small></span><span class="index-stack">${fr(t.paragraphs[1].split(",").slice(0,2).join(" / "))}</span>${Ai}</button>`}).join("")}</div></section>

<section class="capabilities"><div class="capability-heading"><h2>Across<br>the <em>stack.</em></h2><p>Models, systems, and the connective tissue between them.</p></div><div class="skill-list">${Zr.skills.map(r=>{const[e,...t]=r.split(":");return`<details><summary>${fr(e)}<span>+</span></summary><p>${fr(t.join(":"))}</p></details>`}).join("")}</div><div class="education"><div><span class="section-tag">Education</span><h3>M.S. Computer Science</h3><p>Stevens Institute of Technology<br>2022–2023 · GPA 3.5 / 4.0<br>Research Assistant</p></div><div><span class="section-tag">Recognition</span><h3>AI Hackathon Winner</h3><p>NIT AP and JNTUH Sultanpur · 2021<br>Face-mask detection built on ResNet.</p></div></div></section>
<section class="contact" id="contact"><div class="contact-top"><span class="section-tag">A conversation is a good beginning.</span><span>Fort Lauderdale, FL</span></div><a class="contact-title" href="mailto:naveenganadi@gmail.com"><span>Let’s build</span><span><em>something.</em> ${Ai}</span></a><div class="contact-bottom"><a href="mailto:naveenganadi@gmail.com">naveenganadi@gmail.com</a><div><a href="https://www.linkedin.com/in/naveen-g-69227b26a/" target="_blank" rel="noopener noreferrer">LinkedIn ${Ai}</a><a href="${Kh}" target="_blank" rel="noopener noreferrer">GitHub ${Ai}</a><a href="tel:+15512743425">Call ${Ai}</a><a href="./resume.txt" download>Résumé ${Ai}</a></div></div><footer><a href="#home">Naveen Ganadi</a><span>© ${new Date().getFullYear()}</span><a href="#home">Back to the beginning ↑</a></footer></section>
</main><dialog class="project-dialog" aria-labelledby="dialog-title"><div class="dialog-head"><span id="dialog-meta"></span><button class="dialog-close" aria-label="Close project details">Close <span>×</span></button></div><h2 id="dialog-title"></h2><div id="dialog-body"></div><a class="dialog-contact" href="mailto:naveenganadi@gmail.com">Talk about this project ${Ai}</a></dialog>`;const Kr=document.querySelector("dialog");let eg;function Jh(r,e){eg=e,document.querySelector("#dialog-meta").textContent=r.meta,document.querySelector("#dialog-title").textContent=r.title,document.querySelector("#dialog-body").innerHTML=r.paragraphs.map(t=>`<p>${fr(t.replace(/^- /,""))}</p>`).join(""),Kr.showModal(),document.body.classList.add("dialog-open")}document.querySelectorAll("[data-project]").forEach(r=>r.addEventListener("click",()=>Jh(Zr.projects[Number(r.dataset.project)],r)));document.querySelectorAll("[data-experience-detail]").forEach(r=>r.addEventListener("click",()=>Jh(Zr.experience[Number(r.dataset.experienceDetail)],r)));document.querySelectorAll("[data-point-detail]").forEach(r=>r.addEventListener("click",()=>{const t=(r.dataset.pointDetail==="github"?Bl:Fl)[Number(r.dataset.company)],n=t.beats[Number(r.dataset.point)];Jh({title:n.title,meta:t.company+" · "+t.role,paragraphs:[n.source||n.caption]},r)}));document.querySelector(".dialog-close").addEventListener("click",()=>Kr.close());Kr.addEventListener("click",r=>{if(r.target!==Kr)return;const e=Kr.getBoundingClientRect();(r.clientX<e.left||r.clientX>e.right||r.clientY<e.top||r.clientY>e.bottom)&&Kr.close()});Kr.addEventListener("close",()=>{document.body.classList.remove("dialog-open"),eg?.focus()});Ip({selector:"#experience",chapters:Fl,diagnosticsKey:"__journeyStats"});Ip({selector:"#github-projects",chapters:Bl,diagnosticsKey:"__githubStats"});V1();
