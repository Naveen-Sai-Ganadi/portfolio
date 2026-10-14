import * as T from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const rounded=new RoundedBoxGeometry(1,1,1,2,.055);
const cube=new T.BoxGeometry(1,1,1);
const sphere=new T.SphereGeometry(1,24,16);
function mat(color,metalness=.45,roughness=.3){return new T.MeshStandardMaterial({color,metalness,roughness});}
function glow(color,intensity=2){return new T.MeshStandardMaterial({color,emissive:color,emissiveIntensity:intensity,roughness:.3,metalness:.35});}
function box(parent,size,pos,material,soft=true){const m=new T.Mesh(soft?rounded:cube,material);m.scale.set(...size);m.position.set(...pos);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
function ball(parent,r,pos,material){const m=new T.Mesh(sphere,material);m.scale.setScalar(r);m.position.set(...pos);parent.add(m);return m;}
function tube(parent,points,r,material){const curve=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p)));const mesh=new T.Mesh(new T.TubeGeometry(curve,80,r,7,false),material);parent.add(mesh);return {mesh,curve};}
function label(parent,text,pos,width=2,color='#fff',background=null){
 const c=document.createElement('canvas');c.width=1024;c.height=256;const x=c.getContext('2d');
 if(background){x.fillStyle=background;x.fillRect(0,0,c.width,c.height);}x.fillStyle=color;x.font='500 64px sans-serif';x.textAlign='center';x.textBaseline='middle';x.fillText(text,512,128);
 const texture=new T.CanvasTexture(c);texture.colorSpace=T.SRGBColorSpace;const material=new T.MeshBasicMaterial({map:texture,transparent:!background,depthWrite:false,side:T.DoubleSide});
 const mesh=new T.Mesh(new T.PlaneGeometry(width,width/4),material);mesh.position.set(...pos);parent.add(mesh);return mesh;
}

export {mat,glow,box,ball,tube,label,rounded,cube,sphere};
