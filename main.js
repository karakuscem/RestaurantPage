(()=>{"use strict";var e={917:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const c=i},28:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap);"]),i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap);"]),i.push([e.id,":root {\n    font-size: 1.2rem;\n    font-family: 'PT Sans Narrow', sans-serif;\n    --nav-primary: rgb(226, 102, 0);\n    --text-primary: rgb(0, 0, 0);\n    --text-secondary: rgb(255, 255, 255);\n    --bg-color: rgb(70, 6, 38);\n}\n\n\nbody {\n    /* Bacground img at home and contacts */\n    background: var(--bg-color);\n    background-repeat: no-repeat;\n    background-size: 2133px 1205px;\n    display: flex;\n    flex-direction: column;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    padding: 25px;\n    background-color: var(--nav-primary);\n    color: var(--text-primary);\n}\n\n.logo {\n    font-size: 1.5rem;\n    font-family: 'Fredoka One', cursive;\n}\n\n.navbar {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n\n.btn {\n    width: 100px;\n    height: 30px;\n    border: none;\n    border-radius: 10px;\n    background-color: var(--nav-primary);\n    font-size: 1rem;\n    cursor: pointer;\n}\n\n.btn:hover,\n.btn:focus {\n    color: rgb(161, 12, 57);\n}\n\n.mainContent {\n    /* Margin top 20% home and contacts */\n    display: flex;\n    justify-content: center;\n    color: var(--text-secondary);\n}\n\n.home {\n    margin-top: 20%;\n    display: flex;\n    flex-direction: column;\n}\n\n.home > h2 {\n    display: flex;\n    justify-content: center;\n    font-size: 3rem;\n}\n.homeSmallWriting {\n    display: flex;\n    justify-content: center;\n    font-size: 1.5rem;\n    margin-top: 10px;\n}\n\n.homeOrder {\n    width: 150px;\n    height: 50px;\n    align-self: center;\n    border: none;\n    border-radius: 10px;\n    margin-top: 10px;\n    cursor: pointer;\n}\n\n.homeAdress {\n    display: flex;\n    flex-direction: column;\n}\n\n.adressItem {\n    justify-content: center;\n    margin-top: 30px;\n    display: flex;\n    flex-direction: row;\n}\n\n.adressImg {\n    margin-right: 10px;\n}\n\n.secondHour {\n    margin-left: 10px;\n}\n\n.menu {\n    display: flex;\n    flex-direction: column;\n    margin-top: 50px;\n    background-color: rgb(196, 170, 138);\n    border-radius: 10px;\n}\n\n.menuItem {\n    display: flex;\n    flex-direction: row;\n}\n\nimg {\n    width: calc(200px + 0.5vw);\n    height: calc(200px + 0.5vw);\n}\n\n.menuContent {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin: 20px;\n}\n\n.menuTop {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.menuTop + .menuBot {\n    margin-top: 10px;\n    border-top: 2px dashed black;\n}\n\n.contact {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 10%;\n    font-size: 1.3rem;\n}\n\n.phone + .contactAdress {\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n\n.contactImg {\n    width: 35vw;\n    height: 55vh;\n}\n\nfooter {\n    margin-top: 150px;\n    background-color: black;\n    opacity: 0.5;\n    display: flex;\n    flex-direction: column;\n}\n\n.footerWriting {\n    font-size: 1.2rem;\n    text-align: center;\n    color: white;\n}\n\na {\n    text-decoration: none;\n    color: white;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},777:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(777),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(917),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var f=t(28),g={};g.styleTagTransform=p(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=l(),n()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const y=function(){document.body.style.background="url(img/background.jpg)",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundSize="2133px 1205px";const e=document.querySelector(".content"),n=document.createElement("div");e.innerHTML="",n.classList.add("mainContent"),e.appendChild(n);const t=document.createElement("div");t.classList.add("home"),n.appendChild(t);const o=document.createElement("h2");o.classList.add("homeHeader"),o.innerHTML="Best burger in town!",t.appendChild(o);const r=document.createElement("p");r.classList.add("homeSmallWriting"),r.innerHTML="Made with love and passion!",t.appendChild(r);const a=document.createElement("button");a.classList.add("homeOrder"),a.innerHTML="Order Now!",t.appendChild(a);const i=document.createElement("div");i.classList.add("homeAdress"),t.appendChild(i);const c=document.createElement("div");c.classList.add("adressItem"),i.appendChild(c);const s=document.createElement("div");s.classList.add("adressImg"),c.appendChild(s);const d=document.createElement("i");d.classList.add("fa-solid","fa-location-pin","fa-lg"),d.style.color="rgb(160, 18, 42",s.appendChild(d);const l=document.createElement("p");l.innerHTML="325 S Camino Del Rio Durango, Colorado 81303",c.appendChild(l);const u=document.createElement("div");u.classList.add("hours","adressItem"),i.appendChild(u);const p=document.createElement("div");p.classList.add("adressImg"),u.appendChild(p);const m=document.createElement("i");m.style.color="rgb(160, 18, 42",m.classList.add("fa-solid","fa-clock","fa-lg"),p.appendChild(m);const h=document.createElement("p");h.classList.add("firstHour"),h.innerHTML="Mon-Thurs: 8am-8pm",u.appendChild(h);const f=document.createElement("p");f.classList.add("secondHour"),f.innerHTML="Fri-Sun: 8am-11pm",u.appendChild(f),document.querySelector(".footerDate").innerHTML=(new Date).getFullYear(),document.querySelector("footer").style.marginTop="150px"};y();const b=document.querySelector(".homeButton"),v=document.querySelector(".menuButton"),x=document.querySelector(".contactButton");b.addEventListener("click",(e=>{y()})),v.addEventListener("click",(e=>{!function(){document.body.style.background="var(--bg-color)";const e=document.querySelector(".content"),n=document.createElement("div");e.innerHTML="",n.classList.add("mainContent"),e.appendChild(n);const t=document.createElement("div");t.classList.add("menu"),n.appendChild(t),document.querySelector(".footerDate").innerHTML=(new Date).getFullYear(),document.querySelector("footer").style.marginTop="150px";const o=["Steakhouse Burger Menu","Double Texas Smokehouse Burger Menu","Chicken Barbecue Deluxe Burger Menu","Texas Smokehouse Burger Menu","Triple Whopper Menu","Whopper Menu"],r=["$3.50","$4.50","$2.50","$4.50","$5.50","$3"],a=["Huge Steakhouse meat, special sauce, cheddar cheese, tomatoes, mayonnaise, lettuce and crispy coated onions are a flavor that will challenge your patience. Enjoy the BK Steakhouse Burger® Menu as you wish, with delicious fries and a drink!","A delicious choice with 2 layers of Whopper® meat, smoked meat, barbecue sauce, cheddar cheese and crispy coated onions. Enjoy the Double Texas Smokehouse Burger® Menu with delicious fries and a drink the way you want!","Enjoy the flavor alternative of Burger King with chicken burger meat, small sesame sandwich bread, cheddar cheese, barbecue sauce and crispy coated onions, along with delicious french fries and a drink as you wish!","A delicious choice with Whopper® meat, smoked meat, cheddar cheese, barbecue sauce and crispy coated onions. delicious potatoes Enjoy the Texas Smokehouse Burger® Menu with fries and a drink the way you want!","A delicious selection of 3 Whopper® meats, large sesame sandwich buns, pickled cucumbers, ketchup, mayonnaise, cucumber salad, tomatoes and onions. Enjoy the Triple Whopper® Menu with delicious fries and a drink your way!","A Burger King® classic with whopper® meat, large sesame buns, pickled cucumbers, ketchup, mayonnaise, chopped lettuce, tomato and onion. Enjoy the Whopper® Menu with delicious fries and a drink the way you want!"];for(let e=0;e<6;e++){const n=document.createElement("div");n.classList.add("menuItem",`${e}`),t.appendChild(n);const i=document.createElement("div");i.classList.add("img"),n.appendChild(i);const c=document.createElement("img");c.src=`img/${e}.png`,i.appendChild(c);const s=document.createElement("div");s.classList.add("menuContent"),n.appendChild(s);const d=document.createElement("div");d.classList.add("menuTop"),s.appendChild(d);const l=document.createElement("h3");l.classList.add("menuHeader"),l.innerHTML=o[e],d.appendChild(l);const u=document.createElement("h3");u.classList.add("menuPrice"),u.innerHTML=r[e],d.appendChild(u);const p=document.createElement("div");p.classList.add("menuBot"),s.appendChild(p);const m=document.createElement("p");m.classList.add("menuDesc"),m.innerHTML=a[e],p.appendChild(m)}}()})),x.addEventListener("click",(e=>{!function(){document.body.style.background="url(img/background.jpg)",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundSize="2133px 1205px";const e=document.querySelector(".content"),n=document.createElement("div");e.innerHTML="",n.classList.add("mainContent"),e.appendChild(n);const t=document.createElement("div");t.classList.add("contact"),n.appendChild(t);const o=document.createElement("p");o.classList.add("phone"),o.innerHTML="📞 123 456 789",t.appendChild(o);const r=document.createElement("p");r.classList.add("contactAdress"),r.innerHTML="🏠 325 S Camino Del Rio Durango, Colorado 81303",t.appendChild(r);const a=document.createElement("img");a.src="img/loc.png",a.style.width="25vw",a.style.height="45vh",t.appendChild(a),document.querySelector(".footerDate").innerHTML=(new Date).getFullYear(),document.querySelector("footer").style.marginTop="250px"}()}))})()})();