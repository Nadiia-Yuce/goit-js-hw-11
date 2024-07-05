import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(o){const s=`https://pixabay.com/api/?key=44778240-802eb20b46cf6f3dc26aab8d1&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function m(o){return o.map(({webformatURL:s,largeImageURL:r,tags:n,likes:e,views:t,comments:i,downloads:u})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${r}">
      <img class="gallery-img" src="${s}" alt="${n}" />
      </a>
      <ul class="card-info">
        <li class="card-info-item">
          Likes<span class="accent">${e}</span>
        </li>
        <li class="card-info-item">
          Views<span class="accent">${t}</span>
        </li>
        <li class="card-info-item">
          Comments<span class="accent">${i}</span>
        </li>
        <li class="card-info-item">
          Downloads<span class="accent">${u}</span>
        </li>
      </ul>
    </li>`).join("")}const d="/goit-js-hw-11/assets/error-9bc150ed.svg",p="/goit-js-hw-11/assets/caution-4e670f25.svg",l=document.querySelector(".form"),c=document.querySelector(".gallery");l.addEventListener("submit",g);function g(o){o.preventDefault(),c.innerHTML="";const s=l.elements.input.value.toLowerCase().trim();if(s===""){a.warning({title:"Caution",titleColor:"white",titleSize:"16px",message:"Please, fill out the field!",messageColor:"white",messageSize:"16px",position:"topRight",backgroundColor:"#ffa000",iconUrl:p,close:!1,closeOnClick:!0});return}f(s).then(r=>{r.hits.length===0?a.error({title:"Error",titleColor:"white",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",messageSize:"16px",position:"topRight",backgroundColor:"#ef4040",iconUrl:d,close:!1,closeOnClick:!0}):c.innerHTML=m(r.hits)}).catch(r=>console.log(r)).finally(()=>l.reset())}
//# sourceMappingURL=commonHelpers.js.map
