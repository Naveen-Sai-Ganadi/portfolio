import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function initMotion(){
 const os=matchMedia('(prefers-reduced-motion: reduce)'),toggle=document.querySelector('.motion-control');
 let disabled=os.matches,ctx,media,firstRun=true;
 function configure(){
  media?.revert();ctx?.revert();document.documentElement.classList.toggle('reduced',disabled);
  toggle.setAttribute('aria-pressed',String(disabled));toggle.setAttribute('aria-label',disabled?'Turn animations on':'Turn animations off');document.querySelector('.motion-label').textContent=disabled?'Motion off':'Motion on';
  window.dispatchEvent(new CustomEvent('portfolio-motion',{detail:{disabled}}));
  if(disabled)return;
  ctx=gsap.context(()=>{
   if(firstRun){gsap.timeline({defaults:{ease:'power3.out'}}).from('.hero h1',{y:65,opacity:0,duration:1.15},0).from('.hero-portrait img',{y:70,opacity:0,duration:1.4},.1).from('.site-header',{opacity:0,duration:.8},.7);firstRun=false;}
   gsap.from('.intro-statement',{opacity:.3,scrollTrigger:{trigger:'.intro',start:'top 75%',end:'top 20%',scrub:.8}});
   gsap.from('.intro-bottom p',{y:35,opacity:0,stagger:.15,duration:.8,ease:'power3.out',scrollTrigger:{trigger:'.intro-bottom',start:'top 88%',once:true}});
   document.querySelectorAll('.project-index button').forEach(row=>{gsap.from(row,{y:20,opacity:0,duration:.7,scrollTrigger:{trigger:row,start:'top 94%',once:true}});});
   gsap.from('.contact-title>span',{y:50,opacity:0,stagger:.12,duration:.85,ease:'power3.out',scrollTrigger:{trigger:'.contact',start:'top 75%',once:true}});
  });
  media=gsap.matchMedia();
  media.add({desktop:'(min-width: 900px)',mobile:'(max-width: 899px)'},context=>{
   const desktop=context.conditions.desktop;
   const hero=gsap.timeline({scrollTrigger:{trigger:'.hero',start:'top top',end:()=>`+=${innerHeight*(desktop?.65:.35)}`,pin:desktop,scrub:.7,anticipatePin:1}});
   hero.to('.name-first',{xPercent:-13,opacity:desktop?.35:.6,ease:'none'},0).to('.name-last',{xPercent:12,opacity:desktop?.35:.6,ease:'none'},0).to('.hero-portrait',{scale:desktop?1.12:1.04,y:desktop?65:30,ease:'none'},0).to('.hero-side-note,.hero-topline',{opacity:0,ease:'none'},0).to('.hero-progress i',{scaleX:1,ease:'none'},0);
   return ()=>{};
  });
  ScrollTrigger.refresh();
 }
 toggle.addEventListener('click',()=>{disabled=!disabled;configure();});os.addEventListener('change',e=>{disabled=e.matches;configure();});
 configure();document.fonts.ready.then(()=>ScrollTrigger.refresh());
 document.querySelector('.hero-portrait img').addEventListener('load',()=>ScrollTrigger.refresh());
 document.querySelectorAll('.journey-record,.skill-list details').forEach(d=>d.addEventListener('toggle',()=>ScrollTrigger.refresh()));
 window.addEventListener('pagehide',()=>{media?.revert();ctx?.revert();},{once:true});
}
