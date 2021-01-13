!function(){"use strict";function e(e,t){const n=document.createElement("input");return n.type="radio",n.checked=!0,n.name="tabs",n.setAttribute("id",e),n.textContent=t,n}function t(e,t){const n=document.createElement("label");return n.setAttribute("for",e),n.innerText=t,n}function n(e,t){const n=document.createElement("div");n.setAttribute("id",t),n.setAttribute("class",e);const i=document.createElement("h3");return n.appendChild(i),n}var i=function(){const e=document.getElementById("menuMenu"),t=document.getElementById("contactUsMenu");e.innerHTML="",t.innerHTML="",e.style.display="none",t.style.display="none";const n=document.getElementById("homeMenu");n.innerHTML="",n.style.display="flex";const i=function(e){const t=document.createElement("div");return t.setAttribute("id","home-text-box"),t}(),c=function(e){const t=document.createElement("p");return t.setAttribute("id","home-copy"),t.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum efficitur maximus. Nulla mollis leo dui, et volutpat nulla ultrices ac. Ut venenatis quis felis aliquam porta. Morbi eu vulputate nulla. Mauris pulvinar, urna id rhoncus tempor, enim mauris porta mi, eget ",t}(),o=function(e){const t=document.createElement("div");t.className="heading-div";const n=document.createElement("h2");n.innerText="This is ",n.setAttribute("id","home-heading"),n.setAttribute("class","heading");const i=document.createElement("span");return i.className="underline--magical",i.textContent="The Pizza Bar",t.appendChild(n),t.appendChild(i),t}(),d=function(e){const t=document.createElement("div");t.setAttribute("class","images");const n=document.createElement("img");return n.setAttribute("class","home-img"),n.setAttribute("id","images"),n.src="../dist/imgs/combined-images.svg",t.appendChild(n),t}(),a=function(e){const t=document.createElement("button");return t.className="reservation",t.innerHTML="Make a Reservation",t.id="reservation-button",t}();i.appendChild(o),i.appendChild(c),i.appendChild(a),n.appendChild(d),n.appendChild(i)},c=function(){const e=document.getElementById("homeMenu"),t=document.getElementById("contactUsMenu");e.innerHTML="",t.innerHTML="",e.style.display="none",t.style.display="none";const n=document.getElementById("menuMenu");n.innerHTML="",n.style.display="flex";const i=function(e){const t=document.createElement("div");t.className="menu-parent";const n=document.createElement("div");n.className=e;const i=document.createElement("div");return i.className=e,t.appendChild(n),t.appendChild(i),t}("menu-columns");n.appendChild(i)};(function(){const i=document.querySelector(".content"),c=function(e){const t=document.createElement("header");t.setAttribute("id","header");const n=document.createElement("img");return n.setAttribute("id","logo"),t.appendChild(n),t}(),o=function(i){const c=document.createElement("div");c.setAttribute("class","tabs");const o=e("home","Home"),d=e("menu","Menu"),a=e("contact-us","Contact Us"),s=t("home","Home");s.id="home-tab";const u=t("menu","Menu");u.id="menu-tab";const m=t("contact-us","Contact Us");m.id="contact-tab";const l=n("tab","homeMenu"),r=n("tab","menuMenu"),p=n("tab","contactUsMenu");return c.appendChild(o),c.appendChild(s),c.appendChild(l),c.appendChild(d),c.appendChild(u),c.appendChild(r),c.appendChild(a),c.appendChild(m),c.appendChild(p),c}();c.appendChild(o),i.appendChild(c);const d=function(e){const t=document.createElement("footer");return t.setAttribute("id","footer"),t}();i.appendChild(d)})(),i(),document.getElementById("home-tab").addEventListener("click",i),document.getElementById("menu-tab").addEventListener("click",c)}();