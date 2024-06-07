(()=>{"use strict";var e=document.querySelector("#card-template");function t(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",o)}function n(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",o)}function o(e){"Escape"===e.key&&n(document.querySelector(".popup_is-opened"))}function r(e,t,n){var o=t.querySelector(".".concat(n.id,"-error"));n.classList.remove(e.inputErrorClass),o.classList.remove(e.errorClass),o.textContent=""}function c(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(t)?(n.disabled=!1,n.classList.remove(e.inactiveButtonClass)):(n.disabled=!0,n.classList.add(e.inactiveButtonClass))}function a(e,t,n,o){t.forEach((function(t){r(e,o,t),t.value=""})),c(e,t,n)}var u={baseUrl:"https://nomoreparties.co/v1/cohort-42",headers:{authorization:"3c382b25-38b5-4282-b2ef-ceb495a40170","Content-Type":"application/json"}},i={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"submit_inactive",inputErrorClass:"popup__input_type_error",errorClass:"input-error_active"};function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var l=document.forms["edit-profile"],d=document.forms["new-place"],p=document.querySelectorAll(".popup"),f=document.querySelector(".places__list"),m=document.querySelector(".profile__edit-button"),y=document.querySelector(".popup_type_edit"),_=document.querySelector(".profile__add-button"),v=document.querySelector(".popup_type_new-card"),h=l.elements.name,b=l.elements.description,S=document.querySelector(".profile__title"),q=document.querySelector(".profile__description"),g=document.querySelector(".popup_type_image"),C=document.querySelector(".popup__image"),E=document.querySelector(".popup__caption"),L=document.querySelectorAll(".popup__form"),k=Array.from(l.querySelectorAll(".popup__input")),j=l.querySelector(".popup__button"),A=Array.from(d.querySelectorAll(".popup__input")),x=d.querySelector(".popup__button"),w=document.querySelector(".profile__image"),P=d.elements["place-name"],O=d.elements.link,U=document.querySelector(".popup_type_question"),T=document.querySelector(".popup_type_question .button"),B=document.querySelector(".popup_type_new-avatar"),M=document.querySelector(".profile__image"),N=document.forms["edit-avatar"],I=N.elements.link,J=N.querySelector(".popup__button");function D(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"prepend",r=function(t,n,o,r,c){var a=e.content.cloneNode(!0),u=a.querySelector(".card__delete-button"),i=a.querySelector(".card__image"),s=a.querySelector(".card__like-button");return a.querySelector(".card__title").textContent=t,i.src=n,i.alt=t,u.addEventListener("click",o),i.addEventListener("click",r),s.addEventListener("click",c),a}(t,n,t.name,t.link,H);f[o](r)}function H(e){e.target.classList.contains("card__image")&&(t(g),C.src=e.target.src,C.alt=e.target.alt,E.textContent=e.target.alt)}function V(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...";e.preventDefault(),t.textContent=[n]}Promise.all([fetch("".concat(u.baseUrl,"/users/me"),{headers:u.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})),fetch("".concat(u.baseUrl,"/cards"),{headers:u.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,u=[],i=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(o=c.call(n)).done)&&(u.push(o.value),u.length!==t);i=!0);}catch(e){s=!0,r=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw r}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0];o[1].forEach((function(e){D(e,r._id,"append")})),function(e){w.src=e.avatar,S.textContent=e.name,q.textContent=e.about}(r)})).catch((function(e){return console.log(e)})),T.addEventListener("click",(function(){(undefined,fetch("".concat(u.baseUrl+"/cards/"+undefined),{method:"DELETE",headers:u.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(){undefined.remove(),n(U)})).catch((function(e){return console.log(e)}))})),m.addEventListener("click",(function(){t(y),a(i,k,j,l),h.value=S.textContent,b.value=q.textContent,j.disabled=!1,j.classList.remove("submit_inactive")})),l.addEventListener("submit",(function(e){return function(e){var t,o;V(e,j),(t=h,o=b,fetch("".concat(u.baseUrl,"/users/me"),{method:"PATCH",headers:u.headers,body:JSON.stringify({name:t.value,about:o.value})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){S.textContent=e.name,q.textContent=e.about,n(y)})).catch((function(e){return console.log(e)})).finally((function(){j.textContent="Сохранить"}))}(e)})),_.addEventListener("click",(function(){t(v),a(i,A,x,d)})),d.addEventListener("submit",(function(e){!function(e){var t,o;V(e,x),(t=P,o=O,fetch("".concat(u.baseUrl,"/cards"),{method:"POST",headers:u.headers,body:JSON.stringify({name:t.value,link:o.value})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){D(e,e.owner._id),n(v)})).catch((function(e){return console.log(e)})).finally((function(){x.textContent="Сохранить"}))}(e)})),M.addEventListener("click",(function(){t(B),a(i,[I],J,N)})),N.addEventListener("submit",(function(e){var t;V(e,J),(t=I,fetch("".concat(u.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:u.headers,body:JSON.stringify({avatar:t.value})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){M.src=e.avatar,n(B)})).catch((function(e){return console.log(e)})).finally((function(){J.textContent="Сохранить"}))})),function(e,t){t.forEach((function(t){!function(e,t){var n=Array.from(t.querySelectorAll(e.inputSelector)),o=t.querySelector(e.submitButtonSelector);n.forEach((function(a){a.addEventListener("input",(function(){!function(e,t,n){n.validity.patternMismatch?n.setCustomValidity(n.dataset.errorMessage):n.setCustomValidity(""),n.validity.valid?r(e,t,n):function(e,t,n,o){var r=t.querySelector(".".concat(n.id,"-error"));n.classList.add(e.inputErrorClass),r.classList.add(e.errorClass),r.textContent=o}(e,t,n,n.validationMessage)}(e,t,a),c(e,n,o)}))}))}(e,t)}))}(i,L),p.forEach((function(e){e.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_is-opened")||t.target.classList.contains("popup__close"))&&n(e)}))}))})();