import * as T from 'three';
import {objectKit} from './semantic-objects.js';
const mix=T.MathUtils.lerp;
const ease=(p,a=0,b=1)=>{const v=T.MathUtils.clamp((p-a)/(b-a),0,1);return v*v*(3-2*v);};

export function buildSemanticScene(beat,accent){
 const root=new T.Group(),k=objectKit(accent),animations=[];
 const {group,box,ball,line,ring,text,sheet,folder,screen,laptop,desk,magnifier,stamp,tray,calendar,handset,phone,microphone,server,database,chip,gear,wrench,lock,safe,person,chair,book,cabinet,conveyor,scanner,envelope,building,antenna,dish,camera,head,scales,robotArm,hourglass,radar}=k;
 const anim=fn=>animations.push(fn), caption=(t,x,y,z,w=2.6)=>text(root,t,[x,y,z],w);
 const flat=(g,angle=-Math.PI/2)=>{g.rotation.x=angle;return g;};
 switch(beat.type){
 // SpendRule: tangible artifacts of contract operations.
 case 'invoice-desk': {
  desk(root,0,-1.8,0,1.1);const invoice=sheet(root,-1.6,.25,.6,'INVOICE',1.1),contract=book(root,1.5,.2,-.1,'CONTRACT',1.3);invoice.rotation.z=.06;contract.rotation.y=-.2;const lens=magnifier(root,-1.9,.7,1.25,.75);const seal=stamp(root,2,-1.55,1, .8);anim(p=>{lens.position.y=mix(1,-.65,ease(p));lens.position.x=-1.7+Math.sin(p*Math.PI)*.3;seal.position.y=-1.25-Math.sin(ease(p,.6,1)*Math.PI)*.3;});break;
 }
 case 'operations-console': {
  desk(root,-.7,-1.9,0);screen(root,-1.25,.35,0,'VALIDATION',1.1,'chart');server(root,3,-.1,-.6,.8,'EXTRACTION');const controls=group(root,-1.3,-1.68,1);for(let i=0;i<4;i++){const dial=ring(controls,.14,.035,[-.7+i*.5,0,0],k.steel);dial.rotation.x=-Math.PI/2;}const pulse=ball(root,.1,[-2,.9,.2],k.lit);anim(p=>pulse.position.x=-2+p*1.5);caption('CUSTOMER APPLICATION',-.7,2.1,-.4,3);break;
 }
 case 'line-evidence': {
  const contract=book(root,1.6,.15,-.25,'CONTRACT TERMS',1.45);
  const receipt=group(root,-1.9,.15,.5);box(receipt,[1.65,3.6,.06],[0,0,0],k.ivory);text(receipt,'LINE ITEMS',[0,1.38,.05],1.4,'#173440');
  for(let i=0;i<10;i++){box(receipt,[1.2,.025,.025],[0,1.02-i*.25,.05],k.ink,false);}
  const selected=box(receipt,[1.52,.19,.04],[0,.27,.06],k.color);
  const bookmark=box(contract,[.2,1.2,.035],[.5,-.6,.29],k.red,false);
  const thread=k.tube(root,[[-1.1,.42,.6],[0,.42,1.4],[1,.1,1.2],[2.3,-.6,.2]],.025,k.color);
  const trace=ball(root,.09,[-1.1,.42,.6],k.lit),v=new T.Vector3();
  anim(p=>{thread.curve.getPoint(ease(p),v);trace.position.copy(v);selected.position.y=.77-ease(p)*.75;bookmark.position.y=-.6-ease(p)*.2;});
  caption('A LINE. ITS SOURCE. ITS TERMS.',0,-2.6,.3,4.4);break;
 }
 case 'review-sorter': {
  conveyor(root,0,-1.6,0);scanner(root,-1.2,-1.5,0,.9);const receipts=['ACCEPT','RECHECK','REVIEW'].map(t=>flat(sheet(root,-3.3,-1.34,0,t,.38)));anim(p=>receipts.forEach((g,i)=>{const t=ease(p,i*.07,.65+i*.12),branch=ease(t,.55,1);g.position.set(mix(-3.3,2.5,t),mix(-1.34,[-.55,-1.15,-1.75][i],branch),mix(0,[-1.6,0,1.7][i],branch));}));const bins=[tray(root,2.5,-.7,-1.6,'ACCEPT',.7),tray(root,2.6,-1.3,0,'RECHECK',.7),tray(root,2.5,-1.9,1.7,'REVIEW',.7)];anim(p=>{bins.forEach((g,i)=>g.rotation.z=Math.sin(p*5+i)*.03);});caption('VERIFY',-1.2,1.5,0,2);break;
 }
 case 'audit-inspection': {
  sheet(root,-2,.3,-.15,'AUDIT LEDGER',1.35);const hidden=sheet(root,-2,.3,-.35,'EXCLUDED ROWS',1.2);
  const calculator=group(root,2,.1,.5);box(calculator,[2.25,3.25,.45],[0,0,0],k.steel);box(calculator,[1.82,.66,.035],[0,1.02,.25],k.ink);text(calculator,'VARIANCE',[0,1.02,.28],1.6);
  for(let r=0;r<4;r++)for(let c=0;c<3;c++)box(calculator,[.43,.38,.12],[(c-1)*.57,.31-r*.56,.28],c===2?k.color:k.ivory);
  const result=box(root,[1.45,.22,.04],[-2,-.46,.1],k.red);
  anim(p=>{hidden.position.x=mix(-2,-.1,ease(p));hidden.rotation.z=ease(p)*-.12;result.position.y=.7-ease(p)*1.3;calculator.rotation.y=-.15+ease(p)*.25;});break;
 }
 case 'repair-bench': {
  desk(root,0,-1.7,0);const broken=gear(root,0,.15,.25,1.05),tool=wrench(root,2,.8,.8,1.1);const arm=robotArm(root,-2.8,-.1,-.3,.9);screen(root,2.3,.15,-1.6,'FIX → PR',.6);anim(p=>{broken.rotation.z=ease(p)*Math.PI*.7;tool.rotation.z=-.9+ease(p)*1.2;arm.userData.elbow.rotation.z=-.3+Math.sin(p*Math.PI)*.5;});break;
 }
 case 'document-archive': {
  const archive=cabinet(root,2,0,-.6,1.1);const stack=folder(root,-2,-.7,.6,'HOSPITAL ERP',1.1);const paper=sheet(root,-2,1,.5,'DOCUMENT',.75);anim(p=>{paper.position.x=mix(-2,2,ease(p));paper.position.y=Math.sin(p*Math.PI)*1.2+.4;paper.rotation.y=ease(p)*Math.PI/2;archive.userData.drawers[1].position.z=.85+Math.sin(p*Math.PI)*1.1;});caption('DETERMINISTIC INGESTION',0,-2.7,1,4);break;
 }
 case 'tenant-lockers': {
  const vaults=[safe(root,-2.7,0,0,.65),safe(root,0,0,-.45,.75),safe(root,2.7,0,0,.65)];const key=lock(root,0,.1,2,.65);['TENANT A','TENANT B','TENANT C'].forEach((t,i)=>caption(t,(i-1)*2.7,2,.2,2));anim(p=>{vaults[1].userData.door.rotation.y=-ease(p)*.7;key.rotation.y=-.2+p*.4;});break;
 }
 case 'guarded-assistant': {
  laptop(root,-1.5,-.25,0,'ASSISTANT',1.35);const guard=lock(root,2,.3,.6,1.2);const gate=ring(root,2.2,.05,[-1.5,0,-.6],k.color,Math.PI*1.6);gate.rotation.z=.6;const reply=sheet(root,-1.4,1,1.1,'GROUNDED ANSWER',.62);anim(p=>{reply.position.y=mix(-.5,1.1,ease(p));reply.scale.setScalar(.45+.17*ease(p));guard.rotation.y=-.2+ease(p)*.4;});break;
 }
 case 'claims-desk': {
  desk(root,0,-1.7,0);folder(root,-2,-.1,0,'CASE',1.1);const letter=sheet(root,.4,.15,.3,'DEMAND LETTER',1);envelope(root,2.3,-.65,1,.8);const seal=stamp(root,.4,2,.5,.8);anim(p=>{seal.position.y=mix(2,.55,ease(p,.2,.65))+Math.sin(ease(p,.65,1)*Math.PI)*.7;letter.rotation.z=-.04+ease(p)*.04;});break;
 }
 case 'recovery-conveyor': {
  conveyor(root,0,-1.7,0);const clock=hourglass(root,-2.7,1,.1,.8),arm=robotArm(root,1,.1,-.8,1.1);const invoice=flat(sheet(root,-1,-1.45,.1,'STALLED',.6));tray(root,2.9,-1.4,.1,'RECOVERED',.8);anim(p=>{clock.rotation.z=ease(p)*Math.PI;invoice.position.x=mix(-1,2.9,ease(p));invoice.position.y=-1.45+Math.sin(p*Math.PI)*2;arm.userData.elbow.rotation.z=-.4+ease(p)*1.1;});break;
 }
 case 'release-dock': {
  server(root,-2,.2,-.5,.85,'PRODUCTION');const ramp=box(root,[3.8,.18,2],[1.5,-1.7,0],k.steel);const crate=box(root,[1.3,1.3,1.3],[2.6,-.8,0],k.color);text(crate,'RELEASE',[0,0,.52],1,'#152e3a');const flag=sheet(root,-2.2,1.1,1.05,'CUTOVER',.45);anim(p=>{crate.position.x=mix(2.6,-1.6,ease(p));crate.rotation.y=ease(p)*Math.PI*.5;flag.position.y=.9+ease(p)*.5;});break;
 }
 case 'team-table': {
  desk(root,0,-.6,0,.9);laptop(root,0,.35,0,'PR REVIEW',.65);const people=[];for(let i=0;i<6;i++){const a=i/6*Math.PI*2;const personModel=person(root,Math.cos(a)*3,-.2,Math.sin(a)*1.9,.9);personModel.rotation.y=-a-Math.PI/2;people.push(personModel);}anim(p=>people.forEach((g,i)=>g.rotation.z=Math.sin(p*Math.PI+i)*.045));break;
 }
 // Infillo: practice operations, voice, scheduling, and shipping a real interface.
 case 'clinic-miniature': {
  building(root,0,.1,-.6,1.3,true);calendar(root,3.15,.1,.8,.62);handset(root,-3,.1,.8,.8);const visitor=person(root,0,-1.4,2,.6);anim(p=>{visitor.position.z=2-ease(p)*.7;visitor.position.x=-1+ease(p);});break;
 }
 case 'blueprint-workshop': {
  desk(root,0,-1.7,0,1.05);const plan=flat(sheet(root,-.4,-1.53,.2,'PLATFORM PLAN',1.4));const ruler=box(root,[3.5,.06,.23],[0,-1.46,1.1],k.steel);for(let i=0;i<15;i++)box(root,[.018,.015,.14],[-1.5+i*.2,-1.42,1.1],k.ink,false);const small=building(root,1.9,-.5,-.3,.52,true);const pencil=line(root,[-2,-.8,1],[-1.3,1.4,1],.09,k.color);anim(p=>{pencil.position.x=ease(p)*1.4;small.position.y=-.7+ease(p)*.4;});break;
 }
 case 'reception-booking': {
  const receiver=handset(root,-2.8,.4,0,1.1),agenda=calendar(root,1.7,.2,0,1.1);const cursor=group(root,1.7,0,.3);line(cursor,[0,0,0],[.3,-.6,0],.06,k.steel);line(cursor,[0,0,0],[.6,-.3,0],.06,k.steel);anim(p=>{receiver.rotation.z=-.15+Math.sin(p*Math.PI)*.2;cursor.position.set(mix(-.2,2.25,ease(p)),mix(1.5,-.2,ease(p)),.4);agenda.userData.appointment.scale.setScalar(.05+.95*ease(p,.5,.8));});break;
 }
 case 'model-switchboard': {
  const board=group(root);box(board,[5.5,3.1,.55],[0,0,0],k.ivory);const sockets=[];['REALTIME','REASONING','CACHE'].forEach((t,i)=>{const x=(i-1)*1.7;ring(board,.35,.09,[x,.2,.35],k.steel);text(board,t,[x,1.1,.35],1.5,'#173342');sockets.push(x);});const plug=group(root,-1.7,.2,1);k.cylinder(plug,.22,.65,[0,0,0],k.rubber).rotation.x=Math.PI/2;const cord=k.tube(root,[[-3,-2.3,.5],[-2,-2,1],[-1,-.8,1],[-1.7,.2,1]],.08,k.rubber);anim(p=>{plug.position.x=mix(-1.7,1.7,ease(p));plug.position.z=1-Math.sin(p*Math.PI)*.4;});break;
 }
 case 'serverless-launch': {
  const rack=server(root,-2,.1,-.4,.9,'ON DEMAND');const arm=robotArm(root,2,-.2,-.6,.95);const unit=chip(root,1.8,.4,.4,.7,'LAMBDA');const dock=box(root,[2.5,.2,2.3],[2,-1.85,0],k.ivory);anim(p=>{unit.position.y=-.4+ease(p)*1.8;unit.rotation.y=ease(p)*.5;arm.userData.elbow.rotation.z=-.2+ease(p)*.6;});break;
 }
 case 'module-toolbox': {
  box(root,[6.4,1.65,2.7],[0,-.95,0],k.color);const lid=group(root,0,-.12,-1.3);box(lid,[6.4,2.3,.16],[0,1.15,0],k.color);const modules=['ROUTER','HANDLER','SERVICE','MODELS','RESOURCE'].map((t,i)=>book(root,(i-2)*1.12,.35,.2,t,.62));anim(p=>{lid.rotation.x=-ease(p)*.3;modules.forEach((g,i)=>g.position.y=.35+Math.sin(ease(p,i*.07,.6+i*.07)*Math.PI)*.8);});break;
 }
 case 'onboarding-cabinet': {
  const db=cabinet(root,-1.7,.1,-.4,1.1);const badge=sheet(root,2,.2,.6,'NEW PRACTICE',.95);person(root,2,.65,.73,.42);const key=lock(root,1.8,-1.4,.8,.45);anim(p=>{db.userData.drawers[2].position.z=.85+ease(p)*1.1;badge.position.x=2-ease(p)*.4;key.rotation.y=p*.5;});break;
 }
 case 'dashboard-handoff': {
  screen(root,-2,.3,-.2,'DEVELOPMENT',.95,'form');screen(root,2,.3,-.2,'PRODUCTION',.95,'form');const release=chip(root,0,-1,.8,.43,'BUILD');const lever=gear(root,0,1.6,0,.5);anim(p=>{release.position.x=mix(-1.8,1.8,ease(p));release.position.y=-1+Math.sin(p*Math.PI)*1.5;lever.rotation.z=ease(p)*Math.PI;});break;
 }
 case 'launch-planner': {
  desk(root,0,-1.8,0);calendar(root,-2,.3,-.3,.85);laptop(root,1,.15,.2,'LAUNCH PLAN',.85,'chart');const megaphone=group(root,3,.8,.6);const horn=k.mesh(megaphone,new T.ConeGeometry(.65,1.5,24,1,true),k.color);horn.rotation.z=-Math.PI/2;line(megaphone,[-.4,0,0],[-.4,-.8,0],.12,k.rubber);anim(p=>{megaphone.rotation.z=Math.sin(p*Math.PI)*.2;});break;
 }
 // RevScale: sales work, language tuning, search, and presenting the result.
 case 'franchise-street': {
  for(let i=0;i<3;i++)building(root,(i-1)*2.7,-.2,Math.abs(i-1)*-.7,.7);const customers=[person(root,-2,-1.3,1.4,.55),person(root,0,-1.3,1.8,.55),person(root,2,-1.3,1.4,.55)];anim(p=>customers.forEach((g,i)=>{g.position.z=1.7-ease(p)*.5;g.rotation.y=(i-1)*.2;}));break;
 }
 case 'language-tuning': {
  const model=chip(root,0,.5,0,1.15,'LLAMA-3');const sliders=[];for(let i=0;i<3;i++){const x=(i-1)*1.35;box(root,[.1,1.7,.08],[x,-1.5,.4],k.steel);sliders.push(box(root,[.55,.2,.2],[x,-1.5,.5],k.color));}book(root,-3,-.2,.2,'DOMAIN DATA',.75);caption('SFT  /  LoRA  /  DPO',0,2.7,0,3.8);anim(p=>{sliders.forEach((g,i)=>g.position.y=-1.5+Math.sin(p*Math.PI+i)*.6);model.rotation.y=-.15+p*.3;});break;
 }
 case 'sales-workstations': {
  const desks=[];for(let i=0;i<4;i++){const x=(i-1.5)*2;const g=group(root,x,Math.abs(i-1.5)*-.4,0,.6);desk(g,0,-1.5,0,.7);if(i===0)handset(g,0,.4,.3);if(i===1)envelope(g,0,.2,.3);if(i===2)folder(g,0,.3,.3,'FDD');if(i===3)laptop(g,0,.2,.3,'RESPOND');text(g,['INBOUND','OUTBOUND','TARGET','RESPOND'][i],[0,2.2,0],2.7);desks.push(g);}anim(p=>desks.forEach((g,i)=>g.position.y=Math.abs(i-1.5)*-.4+Math.sin(p*Math.PI+i)*.09));break;
 }
 case 'lead-funnel': {
  const funnel=k.mesh(root,new T.ConeGeometry(2.3,2.3,32,1,true),new T.MeshStandardMaterial({color:accent,metalness:.5,roughness:.3,side:T.DoubleSide}),[0,.8,0]);funnel.rotation.z=Math.PI;k.cylinder(root,.35,1.25,[0,-.9,0],k.steel);const leads=Array.from({length:7},(_,i)=>sheet(root,Math.cos(i)*2,2.7,Math.sin(i), 'LEAD',.25));tray(root,0,-2.1,0,'QUALIFIED',1.2);anim(p=>leads.forEach((g,i)=>{const t=(p*.7+i/7)%1;g.position.set(Math.cos(i)*2*(1-t),2.9-t*4.4,Math.sin(i)*(1-t));g.rotation.z=t*.5;}));break;
 }
 case 'retrieval-library': {
  box(root,[6.4,.18,1.5],[0,-1.4,0],k.wood);for(let i=0;i<6;i++){const b=book(root,(i-2.5)*1,.15,-.3,['INTENT','CONTEXT','SOURCE','QUERY','RAG','EVAL'][i],.62);b.rotation.y=-.2;}const lens=magnifier(root,-2,.5,1,.9),monitor=screen(root,2.3,1.7,-1,'EVALUATION',.55,'chart');anim(p=>lens.position.x=mix(-2,2,ease(p)));break;
 }
 case 'pitch-room': {
  const easel=screen(root,.2,.8,-.5,'ML PRODUCT',1.35,'chart');line(root,[-1,-.7,-.5],[-1.7,-2.5,.2],.07,k.steel);line(root,[1,-.7,-.5],[1.7,-2.5,.2],.07,k.steel);const presenter=person(root,-3,-.7,.4,1.25);folder(root,2.9,-.65,1,'RESEARCH',.8);anim(p=>presenter.rotation.y=-.15+ease(p)*.3);break;
 }
 // Thirdi: actual conversational and multimodal instruments.
 case 'conversation-terminals': {
  phone(root,-2,0,0,.9);laptop(root,1.6,-.25,0,'WEB CONVERSATION',1.2);const typing=Array.from({length:3},(_,i)=>ball(root,.1,[.7+i*.38,.3,1.25],k.lit));anim(p=>typing.forEach((g,i)=>g.position.y=.3+Math.sin(p*8+i)*.1));break;
 }
 case 'multimodal-instruments': {
  microphone(root,-3,-.1,.1,.9);camera(root,3,.4,-.1,.7);book(root,0,.2,0,'TEXT',1.05);const bridge=ring(root,2.1,.065,[0,.3,-1.2],k.color,Math.PI);anim(p=>{bridge.rotation.z=ease(p)*.15;});caption('SPEECH   /   LANGUAGE   /   EXPRESSION',0,-2.65,.2,6.8);break;
 }
 case 'sentiment-dial': {
  const gauge=group(root,-1.7,.3,0);k.mesh(gauge,new T.CircleGeometry(1.9,48),k.ivory);ring(gauge,1.9,.1,[0,0,.03],k.steel);for(let i=0;i<11;i++){const a=Math.PI*.15+i*Math.PI*.07;line(gauge,[Math.cos(a)*1.5,Math.sin(a)*1.5,.06],[Math.cos(a)*1.7,Math.sin(a)*1.7,.06],.035,k.ink);}const needle=group(gauge);line(needle,[0,0,.1],[1.25,.7,.1],.055,k.color);ball(gauge,.15,[0,0,.12],k.steel);text(gauge,'SENTIMENT',[0,-.85,.07],2.3,'#173440');phone(root,2.4,.05,0,.85);anim(p=>needle.rotation.z=mix(1.2,-.2,ease(p)));break;
 }
 case 'protected-cloud': {
  const vault=safe(root,0,-.2,0,1.2);const bookLog=book(root,-3,-.5,1,'AUDIT LOG',.8);const cloud=group(root,0,2.3,-.5);for(let i=0;i<5;i++)ball(cloud,.55+Math.sin(i)*.15,[(i-2)*.62,Math.sin(i)*.18,0],k.ivory);const pad=lock(root,2.7,.25,1,.8);anim(p=>{vault.userData.door.rotation.y=-.65+ease(p)*.65;pad.rotation.y=ease(p)*.3;});break;
 }
 // Financial engineering and telecom each get their own physical vocabulary.
 case 'data-refinery': {
  database(root,-2.8,.15,0,.85,'S3');const sieve=group(root,0,.1,0);for(const y of [-.7,0,.7]){const r=ring(sieve,1.2,.08,[0,y,0],k.steel);r.rotation.x=Math.PI/2;for(let i=-2;i<=2;i++)line(sieve,[-.9,y,i*.3],[.9,y,i*.3],.02,k.steel);}const data=Array.from({length:9},(_,i)=>ball(root,.12,[(i%3-1)*.5,1.9,(Math.floor(i/3)-1)*.5],i%4?k.color:k.red));tray(root,2.8,-1.6,0,'FEATURES',.9);anim(p=>data.forEach((g,i)=>{const t=(p+i*.08)%1;g.position.y=1.9-t*3.4;g.position.x=(i%3-1)*.5+(t>.65?(t-.65)*6:0);}));break;
 }
 case 'experiment-podium': {
  const names=['XGBOOST','LIGHTGBM','NEURAL NET'];for(let i=0;i<3;i++){const h=[1.4,2.3,.9][i];box(root,[1.9,h,1.8],[(i-1)*2.4,-2+h/2,0],k.ivory);text(root,names[i],[(i-1)*2.4,-1.75+h/2,.92],1.7,'#173440');const m=chip(root,(i-1)*2.4,h-.6,0,.55,names[i]);anim(p=>m.position.y=h-.6+Math.sin(ease(p)*Math.PI)*.35);}const medallion=ring(root,.42,.12,[0,2.8,.2],k.color);anim(p=>medallion.rotation.y=ease(p)*Math.PI*2);break;
 }
 case 'trading-radar': {
  const scope=radar(root,.8,.4,0,1.1);const anomalies=[];for(let i=0;i<8;i++)anomalies.push(ball(scope,.07,[Math.sin(i*2)*1.7,Math.cos(i*3)*1.5,.08],i===3?k.red:k.green));const log=folder(root,-3,-.2,.6,'REVIEW',.8);anim(p=>{scope.userData.sweep.rotation.z=-p*Math.PI*2;anomalies.forEach((g,i)=>g.scale.setScalar(i===3?.07+.04*Math.sin(p*Math.PI):.07));});break;
 }
 case 'training-deployment': {
  const engine=gear(root,-2,.8,0,1.1);chip(root,-2,.8,.25,.65,'TRAIN');server(root,2,-.1,-.3,.85,'SERVE');const belt=k.tube(root,[[-2,-.7,0],[-1,-1.8,0],[1,-1.8,0],[2,-.7,0]],.12,k.rubber);const model=chip(root,-2,-.8,.7,.35,'MODEL');anim(p=>{engine.rotation.z=p*Math.PI;model.position.x=mix(-2,2,ease(p));model.position.y=-.8-Math.sin(p*Math.PI);});break;
 }
 case 'support-search': {
  const terminal=screen(root,0,.4,0,'SUPPORT SEARCH',1.5);const answers=['MATCH 03','MATCH 02','BEST ANSWER'].map((t,i)=>sheet(root,(i-1)*2.1,-1.35,1,t,.55));const lens=magnifier(root,2,1,1,.65);anim(p=>{answers.forEach((g,i)=>{g.position.y=-1.35+(i===2?ease(p)*1.25:0);g.position.z=1+(i===2?ease(p)*.8:0);});lens.position.x=2-ease(p)*2.7;});break;
 }
 case 'telecom-towers': {
  const towers=[antenna(root,-2.5,-.3,-.3,.85),antenna(root,2.6,-.8,.4,.7)];dish(root,0,-.6,.6,.8);const waves=[];for(let i=0;i<4;i++){const r=ring(root,.45+i*.34,.026,[-2.5,2.15,-.3],k.lit,Math.PI*.9);r.rotation.y=.45;r.rotation.z=-Math.PI*.45;waves.push(r);}anim(p=>waves.forEach((g,i)=>g.scale.setScalar(.8+((p+i*.17)%1)*.55)));break;
 }
 case 'network-control-room': {
  desk(root,0,-1.65,.3,1.1);screen(root,-2,0,-.6,'LATENCY',.82,'chart');screen(root,.1,.85,-.8,'LIVE NETWORK',.95,'chart');screen(root,2.4,-.1,-.5,'RELEASES',.78);const beacon=ball(root,.13,[2.6,1.6,-.3],k.green);const consoleGear=gear(root,-2.2,-1.35,1.2,.3);anim(p=>consoleGear.rotation.z=p*Math.PI);break;
 }
 // Public repositories: match the actual tools and workflows, not the résumé diagrams.
 case 'config-typewriter': {
  const terminal=laptop(root,-1.9,.1,0,'AGENTS.md',1.2);const files=['CLAUDE','CURSOR','COPILOT','WINDSURF'].map((t,i)=>sheet(root,1.8+i*.22,-.15+i*.16,-i*.2,t,.7));anim(p=>files.forEach((g,i)=>{g.position.x=1.6+ease(p)*(i-1.5)*.7;g.rotation.z=(i-1.5)*.045*ease(p);}));break;
 }
 case 'config-inspector': {
  const clipboard=folder(root,-1,.1,0,'CONFIG AUDIT',1.3);const paper=sheet(root,-1,.1,.5,'CHECK RESULTS',1.1);const lens=magnifier(root,-1,1.1,1,.8),seal=stamp(root,2,.1,.5,1.4);for(let i=0;i<3;i++)k.check(root,.1,.4-i*.4,.6,.17);anim(p=>{lens.position.y=1.1-p*1.5;seal.position.y=.6-Math.sin(p*Math.PI)*.4;});break;
 }
 case 'debate-roundtable': {
  k.cylinder(root,2.6,.2,[0,-1.1,0],k.wood);const positions=[[-2,.2,.2],[0,.8,-1.6],[2,.2,.2]];positions.forEach((v,i)=>{const mic=microphone(root,...v,.68);caption(['CLAUDE','GEMINI','CHATGPT'][i],v[0],v[1]+1.5,v[2],1.8);anim(p=>mic.rotation.z=Math.sin(p*Math.PI*2-i)*.035);});const notes=flat(sheet(root,0,-.96,.6,'DISCUSSION',.7));break;
 }
 case 'debate-transcript': {
  const printer=group(root,-1,0,0);box(printer,[3.2,1.7,2],[0,0,0],k.ivory);box(printer,[2.6,.18,.15],[0,.1,1.04],k.rubber);box(printer,[1.6,.1,.7],[0,.91,-.3],k.ink);const transcript=sheet(root,-1,-.85,1.4,'TRANSCRIPT.md',.9);const timer=hourglass(root,2.3,.2,0,1);anim(p=>{transcript.position.y=-.25-ease(p)*1.3;timer.rotation.z=ease(p)*Math.PI;});break;
 }
 case 'edge-phone': {
  const device=phone(root,0,0,0,1.2,'ON DEVICE');const npu=chip(root,2.8,-.3,.2,.75,'HEXAGON');microphone(root,-2.8,-.2,.3,.7);anim(p=>{device.rotation.y=-.22+ease(p)*.44;npu.rotation.y=-.25+ease(p)*.5;device.userData.wave.children.forEach((g,i)=>g.scale.y=.2+Math.abs(Math.sin(i*.6+p*6))*1.5);});break;
 }
 case 'audio-mixing': {
  const mixer=group(root,0,-.25,0);box(mixer,[5.1,3.5,.55],[0,0,0],k.ink);const sliders=[];['AUDIO','TEXT','FUSION'].forEach((t,i)=>{const x=(i-1)*1.5;text(mixer,t,[x,1.35,.31],1.3);box(mixer,[.065,1.8,.03],[x,-.1,.31],k.steel);sliders.push(box(mixer,[.55,.2,.16],[x,-.1,.4],k.color));for(let j=0;j<5;j++)box(mixer,[.18,.09,.03],[x+.45,-.8+j*.3,.32],k.lit,false);});const earphone=handset(root,3.6,.1,.3,.65);anim(p=>sliders.forEach((g,i)=>g.position.y=-.3+Math.sin(p*Math.PI+i)*.6));break;
 }
 case 'knowledge-library': {
  for(const y of [-1.5,1.1])box(root,[6.4,.16,1.4],[0,y,0],k.wood);const books=[];for(let i=0;i<7;i++)books.push(book(root,(i-3)*.85,-.15,-.1,['DOCS','WIKI','NOTES','SOURCE','VECTOR','GRAPH','CITE'][i],.6));const bookmark=sheet(root,0,.7,1,'CITATION',.6);anim(p=>{books[3].position.z=-.1+ease(p)*.8;bookmark.position.y=.7+ease(p)*.5;});break;
 }
 case 'agent-toolbench': {
  desk(root,0,-1.8,0);const robot=robotArm(root,-2,.1,-.7,1.2);wrench(root,.4,-.15,.6,.8);const rest=gear(root,2,.2,0,.9);const connector=group(root,0,1.3,.3);box(connector,[1.6,.7,.6],[0,0,0],k.steel);for(let i=0;i<4;i++)box(connector,[.08,.5,.08],[-.45+i*.3,.5,0],k.color);text(connector,'MCP',[0,0,.32],1.2,'#173440');anim(p=>{robot.userData.elbow.rotation.z=-.4+ease(p)*.7;rest.rotation.z=-ease(p)*Math.PI;});break;
 }
 case 'browser-autofill': {
  screen(root,.5,.4,-.25,'CHROME · FORM',1.45,'form');const knowledge=folder(root,-3,-.3,.5,'KNOWLEDGE',.8);const pen=line(root,[1,-1,.7],[1.6,.9,.7],.095,k.color);anim(p=>pen.position.y=mix(.55,-.55,ease(p)));break;
 }
 case 'human-review': {
  const clipboard=folder(root,-.6,.1,0,'PROPOSED ANSWERS',1.3);const paper=sheet(root,-.6,.1,.45,'REVIEW',1.1);const checkmark=group(root,2.3,.15,.7);k.check(checkmark,0,0,0,.9);const lens=magnifier(root,-.7,.4,1,.72);anim(p=>{lens.position.y=.7-ease(p)*1.1;checkmark.scale.setScalar(.15+.85*ease(p,.4,.8));});break;
 }
 case 'resume-scales': {
  const balance=scales(root,0,.2,0,1.3);const resume=sheet(balance.userData.beam,-1.9,-.8,0,'RESUME',.55),job=sheet(balance.userData.beam,1.9,-.8,0,'JOB ROLE',.55);anim(p=>balance.userData.beam.rotation.z=mix(-.18,.04,ease(p)));break;
 }
 case 'fullstack-workspace': {
  laptop(root,-2,-.15,.4,'REACT',1.1,'form');server(root,1.1,-.1,-1,.7,'FLASK');database(root,3.15,-.9,.5,.7,'MONGODB');const key=lock(root,.4,1.5,1,.55);anim(p=>key.rotation.y=-.3+p*.6);break;
 }
 case 'mask-detection': {
  const bust=head(root,1.6,.1,0,1.35,true);const lens=camera(root,-2.4,.15,1,1);lens.rotation.y=.38;const focus=group(root,1.6,.6,1.2);for(const a of [-1,1])for(const b of [-1,1]){line(focus,[a*.95,b*1.2,0],[a*.6,b*1.2,0],.035,k.green);line(focus,[a*.95,b*1.2,0],[a*.95,b*.85,0],.035,k.green);}anim(p=>focus.scale.setScalar(1.1-ease(p)*.15));break;
 }
 case 'training-lighttable': {
  const table=desk(root,0,-1.7,0);for(let i=0;i<3;i++){const photo=group(root,(i-1)*1.7,-.6,.15,.52);sheet(photo,0,0,0,'TRAINING',1.1);head(photo,0,0,.2,.6,i%2===0);}const trainer=chip(root,0,1.5,-.6,.65,'TENSORFLOW');anim(p=>trainer.rotation.y=-.3+ease(p)*.6);break;
 }
 case 'expression-study': {
  const heads=[head(root,-2.5,0,-.5,.9),head(root,0,0,.4,1.1),head(root,2.5,0,-.5,.9)];heads[0].userData.mouth.rotation.z=Math.PI;heads[2].userData.mouth.scale.y=.1;['EXPRESSION A','EXPRESSION B','EXPRESSION C'].forEach((t,i)=>caption(t,(i-1)*2.5,-2.05,.4,2));anim(p=>heads.forEach((g,i)=>g.rotation.y=(i-1)*-.18+Math.sin(p*Math.PI)*.1));break;
 }
 case 'data-exploration-lab': {
  const notebook=book(root,-2.2,.2,.3,'EDA NOTEBOOK',1.4);screen(root,1.4,.3,-.2,'DISTRIBUTIONS',1.25,'chart');const lens=magnifier(root,-2,.4,1.2,.65);const colorSamples=[k.color,k.red,k.green];for(let i=0;i<3;i++)k.cylinder(root,.25,.15,[i*.65+.7,-1.65,1],colorSamples[i]);anim(p=>lens.position.y=.8-ease(p)*1.2);break;
 }
 default: throw new Error(`No semantic scene for ${beat.type}`);
 }
 root.userData.objectScene=beat.type;
 return {group:root,update(p){animations.forEach(fn=>fn(p));root.rotation.y=-.06+ease(p)*.12;}};
}
