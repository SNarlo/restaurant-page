!function(){"use strict";function t(t,e){const n=document.createElement("input");return n.type="radio",n.checked=!0,n.name="tabs",n.setAttribute("id",t),n.textContent=e,n}function e(t,e){const n=document.createElement("label");return n.setAttribute("for",t),n.innerText=e,n}function n(t,e){const n=document.createElement("div");n.setAttribute("id",e),n.setAttribute("class",t);const i=document.createElement("h3");return n.appendChild(i),n}(function(){const i=document.querySelector(".content"),c=function(t){const e=document.createElement("header");e.setAttribute("id","header");const n=document.createElement("img");return n.setAttribute("id","logo"),e.appendChild(n),e}(),u=function(i){const c=document.createElement("div");c.setAttribute("class","tabs");const u=t("home","Home"),d=t("menu","Menu"),s=t("contact-us","Contact Us"),o=e("home","Home"),r=e("menu","Menu"),a=e("contact-us","Contact Us"),l=n("tab","homeMenu"),m=n("tab","menuMenu"),p=n("tab","contactUsMenu");return c.appendChild(u),c.appendChild(o),c.appendChild(l),c.appendChild(d),c.appendChild(r),c.appendChild(m),c.appendChild(s),c.appendChild(a),c.appendChild(p),c}();c.appendChild(u),i.appendChild(c);const d=function(t){const e=document.createElement("footer");return e.setAttribute("id","footer"),e}();i.appendChild(d)})(),function(){const t=document.getElementById("homeMenu"),e=function(t){const e=document.createElement("div");return e.setAttribute("id","home-text-box"),e}(),n=function(t){const e=document.createElement("p");return e.setAttribute("id","home-copy"),e.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum efficitur maximus. Nulla mollis leo dui, et volutpat nulla ultrices ac. Ut venenatis quis felis aliquam porta. Morbi eu vulputate nulla. Mauris pulvinar, urna id rhoncus tempor, enim mauris porta mi, eget ",e}(),i=function(t){const e=document.createElement("h2");return e.innerText="This is The Pizza Bar",e.setAttribute("id","home-heading"),e.setAttribute("class","heading"),e}(),c=function(t){const e=document.createElement("div");e.setAttribute("class","images");const n=document.createElement("img"),i=document.createElement("img"),c=document.createElement("img");return n.setAttribute("class",t),n.setAttribute("id","pizza"),i.setAttribute("class",t),i.setAttribute("id","chef"),c.setAttribute("class",t),c.setAttribute("id","drink"),n.src="../dist/imgs/rustic-pizza.jpeg",i.src="../dist/imgs/chef.jpeg",c.src="../dist/imgs/drink.jpeg",e.appendChild(n),e.appendChild(i),e.appendChild(c),e}("home-img");e.appendChild(i),e.appendChild(n),t.appendChild(c),t.appendChild(e),t.style.display="flex"}()}();