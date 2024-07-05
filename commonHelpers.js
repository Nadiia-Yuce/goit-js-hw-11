import{S as p,i as a}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function d(o){const s=`https://pixabay.com/api/?key=44778240-802eb20b46cf6f3dc26aab8d1&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function m(o){return o.map(({webformatURL:s,largeImageURL:r,tags:l,likes:e,views:t,comments:i,downloads:f})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${r}">
      <img class="gallery-img" src="${s}" alt="${l}" />
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
          Downloads<span class="accent">${f}</span>
        </li>
      </ul>
      </a>
    </li>`).join("")}const g="/goit-js-hw-11/assets/error-9bc150ed.svg",y="/goit-js-hw-11/assets/caution-4e670f25.svg",n=document.querySelector(".form"),c=document.querySelector(".gallery"),u=document.querySelector(".loader-wrap"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});n.addEventListener("submit",b);function b(o){o.preventDefault(),c.innerHTML="";const s=n.elements.input.value.toLowerCase().trim();if(s===""){a.warning({title:"Caution",titleColor:"white",titleSize:"16px",message:"Please, fill out the field!",messageColor:"white",messageSize:"16px",position:"topRight",backgroundColor:"#ffa000",iconUrl:y,close:!1,closeOnClick:!0});return}u.style.display="flex",d(s).then(r=>{r.hits.length===0?a.error({title:"Error",titleColor:"white",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",messageSize:"16px",position:"bottomRight",backgroundColor:"#ef4040",iconUrl:g,close:!1,closeOnClick:!0}):(c.innerHTML=m(r.hits),h.refresh())}).catch(r=>console.log(r)).finally(()=>{n.reset(),u.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
