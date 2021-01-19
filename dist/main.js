!function(){"use strict";function e(e,t){const n=document.createElement("input");return n.type="radio",n.checked=!0,n.name="tabs",n.setAttribute("id",e),n.textContent=t,n}function t(e,t){const n=document.createElement("label");return n.setAttribute("for",e),n.innerText=t,n}function n(e,t){const n=document.createElement("div");n.setAttribute("id",t),n.setAttribute("class",e);const i=document.createElement("h3");return n.appendChild(i),n}var i=function(){const e=document.getElementById("menuMenu"),t=document.getElementById("contactUsMenu");e.innerHTML="",t.innerHTML="",e.style.display="none",t.style.display="none";const n=document.getElementById("homeMenu");n.innerHTML="",n.style.display="flex";const i=function(e){const t=document.createElement("div");return t.setAttribute("id","home-text-box"),t}(),c=function(e){const t=document.createElement("p");return t.setAttribute("id","home-copy"),t.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum efficitur maximus. Nulla mollis leo dui, et volutpat nulla ultrices ac. Ut venenatis quis felis aliquam porta. Morbi eu vulputate nulla. Mauris pulvinar, urna id rhoncus tempor, enim mauris porta mi, eget ",t}(),d=function(e){const t=document.createElement("div");t.className="heading-div";const n=document.createElement("h2");n.innerText="This is ",n.setAttribute("id","home-heading"),n.setAttribute("class","heading");const i=document.createElement("span");return i.className="underline--magical",i.textContent="The Pizza Bar",t.appendChild(n),t.appendChild(i),t}(),o=function(e){const t=document.createElement("div");t.setAttribute("class","images");const n=document.createElement("img");return n.setAttribute("class","home-img"),n.setAttribute("id","images"),n.src="../dist/imgs/combined-images.svg",t.appendChild(n),t}(),a=function(e){const t=document.createElement("button");return t.className="reservation",t.innerHTML="Make a Reservation",t.id="reservation-button",t}();i.appendChild(d),i.appendChild(c),i.appendChild(a),n.appendChild(o),n.appendChild(i)},c=function(){const e=document.getElementById("homeMenu"),t=document.getElementById("contactUsMenu");e.innerHTML="",t.innerHTML="",e.style.display="none",t.style.display="none";const n=document.getElementById("menuMenu");n.innerHTML="",n.style.display="flex";const i=function(e){const t=document.createElement("div");t.className="menu-parent";const n=document.createElement("img");return n.className="menu-img",n.src="../dist/imgs/Menu-Desktop.svg",t.appendChild(n),t}();n.appendChild(i)},d=function(){const e=document.getElementById("homeMenu"),t=document.getElementById("menuMenu");e.innerHTML="",t.innerHTML="",e.style.display="none",t.style.display="none";const n=document.getElementById("contactUsMenu");n.innerHTML="",n.style.display="flex";const i=function(){const e=document.createElement("div");e.setAttribute("id","contact-copy-div");const t=document.createElement("h1");t.textContent="Find Us Here",t.setAttribute("id","contact-us-heading");const n=document.createElement("p"),i=document.createElement("p"),c=document.createElement("p");return n.setAttribute("id","days"),i.setAttribute("id","hours"),c.setAttribute("id","address"),n.textContent="Monday - Sunday",i.textContent="Lunch: 10am - 4pm  |  Dinner: 6pm - 11pm",c.textContent="123 Fake St, Fake York City",e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(c),e}();n.appendChild(i);const c=function(){const e=document.createElement("img");return e.setAttribute("id","contact-img"),e.src="../dist/imgs/rooftop-bar.jpg",e}();c.setAttribute("id","bar-img"),n.appendChild(c)};(function(){const i=document.querySelector(".content"),c=function(e){const t=document.createElement("header");t.setAttribute("id","header");const n=document.createElement("img");return n.setAttribute("id","logo"),t.appendChild(n),t}(),d=function(i){const c=document.createElement("div");c.setAttribute("class","tabs");const d=e("home","Home"),o=e("menu","Menu"),a=e("contact-us","Contact Us"),s=t("home","Home");s.id="home-tab";const u=t("menu","Menu");u.id="menu-tab";const m=t("contact-us","Contact Us");m.id="contact-tab";const r=n("tab","homeMenu"),l=n("tab","menuMenu"),p=n("tab","contactUsMenu");return c.appendChild(d),c.appendChild(s),c.appendChild(r),c.appendChild(o),c.appendChild(u),c.appendChild(l),c.appendChild(a),c.appendChild(m),c.appendChild(p),c}();c.appendChild(d),i.appendChild(c);const o=function(e){const t=document.createElement("footer");return t.setAttribute("id","footer"),t}();i.appendChild(o)})(),i(),document.getElementById("home-tab").addEventListener("click",i),document.getElementById("menu-tab").addEventListener("click",c),document.getElementById("contact-tab").addEventListener("click",d)}();