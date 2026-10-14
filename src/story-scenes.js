import * as T from 'three';
import {buildSemanticScene} from './semantic-scenes.js';
import {mat,glow,box,ball,tube,label,rounded,cube,sphere} from './journey-worlds.js';
const shared=new Set([rounded,cube,sphere]);
const clamp=T.MathUtils.clamp;
const ease=(a,b,x)=>{const p=clamp((x-a)/(b-a),0,1);return p*p*(3-2*p);};
export function disposeStory(group){const materials=new Set(),geometries=new Set();group.traverse(o=>{if(o.geometry&&!shared.has(o.geometry))geometries.add(o.geometry);if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>materials.add(m));});geometries.forEach(g=>g.dispose());materials.forEach(m=>{for(const v of Object.values(m))if(v?.isTexture)v.dispose();m.dispose();});group.removeFromParent();}
export function buildStoryScene(beat,accent){
 const item=buildSemanticScene(beat,accent),group=new T.Group();group.add(item.group);
 return {group,update:item.update,dispose(){disposeStory(group);}};
}

export function buildStoryRooms(scene,chapters){
 return chapters.map((chapter,index)=>{
  const group=new T.Group();group.position.z=-index*44;scene.add(group);const floorMat=mat(chapter.background,.45,.37),ribMat=mat('#425264',.75,.3),illum=glow(chapter.accent,.9);
  box(group,[32,.35,44],[0,-4,-9],floorMat);const fins=[];
  for(let j=0;j<6;j++){const z=10-j*8;for(const side of [-1,1]){const f=box(group,[.25,12,.35],[side*11,2,z],ribMat);fins.push(f);box(group,[.045,9,.05],[side*10.85,2,z+.2],illum,false);}box(group,[22,.18,.3],[0,8,z],ribMat);}
  for(const s of [-1,1])box(group,[.027,.015,43],[s*7,-3.81,-9],illum,false);
  const frame=new T.Group();frame.position.z=-19;group.add(frame);box(frame,[.2,10,.3],[-6,1,0],ribMat);box(frame,[.2,10,.3],[6,1,0],ribMat);box(frame,[12.2,.2,.3],[0,6,0],ribMat);label(frame,chapter.company.toUpperCase(),[0,5.2,.2],6,chapter.accent);
  const stage=new T.Group();stage.position.set(2.2,-.1,0);group.add(stage);const cache=new Map();
  function ensure(i){if(!cache.has(i)){const item=buildStoryScene(chapter.beats[i],chapter.accent);stage.add(item.group);cache.set(i,item);}return cache.get(i);}
  function update(point,p){const next=point+1<chapter.beats.length?point+1:null,blend=next===null?0:ease(.8,1,p);ensure(point);if(p>.68&&next!==null)ensure(next);
   cache.forEach((item,i)=>{item.group.visible=i===point||(blend>0&&i===next);if(item.group.visible){const nextScene=i===next;item.update(nextScene?0:p);const shift=nextScene?1-blend:-blend;item.group.position.set(shift*9,0,-Math.abs(shift)*5);item.group.rotation.y=shift*.55;item.group.scale.setScalar(1-Math.abs(shift)*.25);}});
   for(const [i,item] of cache)if(Math.abs(i-point)>1){item.dispose();cache.delete(i);}
   fins.forEach((f,i)=>{f.scale.y=10.5+Math.sin(point*.8+i*.9+p)*1.5;});
  }
  return {group,update,floorMat,cache,ensure,dispose(){cache.forEach(x=>x.dispose());cache.clear();}};
 });
}
