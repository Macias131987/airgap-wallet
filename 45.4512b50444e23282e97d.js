(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{kQdy:function(e,t,n){"use strict";n.r(t),n.d(t,"startInputShims",(function(){return g}));var r=n("RQB8"),o=n.n(r),a=n("20ZU"),i=n("gHap"),u=new WeakMap,c=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;u.has(e)!==n&&(n?d(e,t,r):l(e,t))},s=function(e){return e===e.getRootNode().activeElement},d=function(e,t,n){var r=t.parentNode,o=t.cloneNode(!1);o.classList.add("cloned-input"),o.tabIndex=-1,r.appendChild(o),u.set(e,o);var a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d(".concat(a,"px,").concat(n,"px,0) scale(0)")},l=function(e,t){var n=u.get(e);n&&(u.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},f=function(e,t,n){if(!n||!t)return function(){};var r=function(n){s(t)&&c(e,t,n)},o=function(){return c(e,t,!1)},a=function(){return r(!0)},i=function(){return r(!1)};return n.addEventListener("ionScrollStart",a),n.addEventListener("ionScrollEnd",i),t.addEventListener("blur",o),function(){n.removeEventListener("ionScrollStart",a),n.removeEventListener("ionScrollEnd",i),t.addEventListener("ionBlur",o)}},p="input, textarea, [no-blur]",v=function(e,t,n){var r=e.closest("ion-item,[ion-item]")||e;return m(r.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)},m=function(e,t,n,r){var o=e.top,a=e.bottom,i=t.top,u=i+15,c=Math.min(t.bottom,r-n)-15-a,s=u-o,d=Math.round(c<0?-c:s>0?-s:0),l=Math.min(d,o-i),f=Math.abs(l);return{scrollAmount:l,scrollDuration:Math.min(400,Math.max(150,f/.3)),scrollPadding:n,inputSafeY:4-(o-u)}},h=function(e,t,n,r,o){var a,u=function(e){a=Object(i.k)(e)},c=function(u){if(a){var c=Object(i.k)(u);E(6,a,c)||s(t)||(u.preventDefault(),u.stopPropagation(),w(e,t,n,r,o))}};return e.addEventListener("touchstart",u,!0),e.addEventListener("touchend",c,!0),function(){e.removeEventListener("touchstart",u,!0),e.removeEventListener("touchend",c,!0)}},w=function(){var e=Object(a.a)(o.a.mark((function e(t,n,r,i,u){var s,d,l,f,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r||i){e.next=2;break}return e.abrupt("return");case 2:if(s=v(t,r||i,u),!(r&&Math.abs(s.scrollAmount)<4)){e.next=6;break}return n.focus(),e.abrupt("return");case 6:if(c(t,n,!0,s.inputSafeY),n.focus(),"undefined"==typeof window){e.next=21;break}if(l=function(){var e=Object(a.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==d&&clearTimeout(d),window.removeEventListener("ionKeyboardDidShow",f),window.removeEventListener("ionKeyboardDidShow",l),!r){e.next=6;break}return e.next=6,r.scrollByPoint(0,s.scrollAmount,s.scrollDuration);case 6:c(t,n,!1,s.inputSafeY),n.focus();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function e(){window.removeEventListener("ionKeyboardDidShow",e),window.addEventListener("ionKeyboardDidShow",l)},!r){e.next=20;break}return e.next=14,r.getScrollElement();case 14:if(!(s.scrollAmount>(p=e.sent).scrollHeight-p.clientHeight-p.scrollTop)){e.next=20;break}return"password"===n.type?(s.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",f)):window.addEventListener("ionKeyboardDidShow",l),d=setTimeout(l,1e3),e.abrupt("return");case 20:l();case 21:case"end":return e.stop()}}),e)})));return function(t,n,r,o,a){return e.apply(this,arguments)}}(),E=function(e,t,n){if(t&&n){var r=t.x-n.x,o=t.y-n.y;return r*r+o*o>e*e}return!1},b=function(e,t){if("INPUT"===e.tagName&&!(e.parentElement&&"ION-INPUT"===e.parentElement.tagName||e.parentElement&&e.parentElement.parentElement&&"ION-SEARCHBAR"===e.parentElement.parentElement.tagName)){var n=e.closest("ion-content");if(null!==n){var r=n.$ionPaddingTimer;r&&clearTimeout(r),t>0?n.style.setProperty("--keyboard-offset","".concat(t,"px")):n.$ionPaddingTimer=setTimeout((function(){n.style.setProperty("--keyboard-offset","0px")}),120)}}},g=function(e){var t=document,n=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),i=e.getBoolean("hideCaretOnScroll",!0),u=e.getBoolean("inputBlurring",!0),c=e.getBoolean("scrollPadding",!0),s=Array.from(t.querySelectorAll("ion-input, ion-textarea")),d=new WeakMap,l=new WeakMap,v=function(){var e=Object(a.a)(o.a.mark((function e(t){var a,u,c,s,p,v;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.componentOnReady){e.next=3;break}return e.next=3,t.componentOnReady();case 3:if(u=(a=t.shadowRoot||t).querySelector("input")||a.querySelector("textarea"),c=t.closest("ion-content"),s=c?null:t.closest("ion-footer"),u){e.next=9;break}return e.abrupt("return");case 9:c&&i&&!d.has(t)&&(p=f(t,u,c),d.set(t,p)),(c||s)&&r&&!l.has(t)&&(v=h(t,u,c,s,n),l.set(t,v));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();u&&function(){var e=!0,t=!1,n=document;n.addEventListener("ionScrollStart",(function(){t=!0})),n.addEventListener("focusin",(function(){e=!0}),!0),n.addEventListener("touchend",(function(r){if(t)t=!1;else{var o=n.activeElement;if(o&&!o.matches(p)){var a=r.target;a!==o&&(a.matches(p)||a.closest(p)||(e=!1,setTimeout((function(){e||o.blur()}),50)))}}}),!1)}(),c&&function(e){var t=document;t.addEventListener("focusin",(function(t){b(t.target,e)})),t.addEventListener("focusout",(function(e){b(e.target,0)}))}(n);for(var m=0,w=s;m<w.length;m++)v(w[m]);t.addEventListener("ionInputDidLoad",(function(e){v(e.detail)})),t.addEventListener("ionInputDidUnload",(function(e){!function(e){if(i){var t=d.get(e);t&&t(),d.delete(e)}if(r){var n=l.get(e);n&&n(),l.delete(e)}}(e.detail)}))}}}]);