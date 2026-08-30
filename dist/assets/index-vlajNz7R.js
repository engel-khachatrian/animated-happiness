(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const i=document.querySelector(".cta");i==null||i.addEventListener("click",()=>{const n=document.createElement("div");n.className="burst-layer";for(let t=0;t<16;t+=1){const o=document.createElement("span");o.className="burst-heart",o.textContent=["💖","✨","💛","🌟"][t%4],o.style.left="50%",o.style.top="50%";const c=360/16*t,e=70+t%4*18,r=Math.cos(c*Math.PI/180)*e,s=Math.sin(c*Math.PI/180)*e;o.style.setProperty("--dx",`${r}px`),o.style.setProperty("--dy",`${s}px`),o.style.animationDelay=`${t*.03}s`,n.appendChild(o)}document.body.appendChild(n),setTimeout(()=>{n.remove()},900)});const a=document.querySelector(".hero"),l=document.querySelectorAll(".floating-note");a==null||a.addEventListener("pointermove",n=>{const t=a.getBoundingClientRect(),o=(n.clientX-t.left)/t.width-.5,c=(n.clientY-t.top)/t.height-.5;l.forEach((e,r)=>{const s=(r+1)*8,u=o*s,f=c*s;e.style.transform=`translate(${u}px, ${f}px)`})});a==null||a.addEventListener("pointerleave",()=>{l.forEach(n=>{n.style.transform="translate(0, 0)"})});const d=document.createElement("style");d.textContent=`
  .burst-layer {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 20;
  }

  .burst-heart {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    animation: burstOut 0.8s ease-out forwards;
  }

  @keyframes burstOut {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.3);
    }
    18% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(1.2);
    }
  }
`;document.head.appendChild(d);
