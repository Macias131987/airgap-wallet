(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{SLyW:function(n,t,e){"use strict";e.r(t),e.d(t,"KEYBOARD_DID_CLOSE",(function(){return o})),e.d(t,"KEYBOARD_DID_OPEN",(function(){return i})),e.d(t,"copyVisualViewport",(function(){return D})),e.d(t,"keyboardDidClose",(function(){return b})),e.d(t,"keyboardDidOpen",(function(){return p})),e.d(t,"keyboardDidResize",(function(){return w})),e.d(t,"resetKeyboardAssist",(function(){return a})),e.d(t,"setKeyboardClose",(function(){return h})),e.d(t,"setKeyboardOpen",(function(){return c})),e.d(t,"startKeyboardAssist",(function(){return s})),e.d(t,"trackViewportChanges",(function(){return v}));var i="ionKeyboardDidShow",o="ionKeyboardDidHide",r={},u={},d=!1,a=function(){r={},u={},d=!1},s=function(n){f(n),n.visualViewport&&(u=D(n.visualViewport),n.visualViewport.onresize=function(){v(n),p()||w(n)?c(n):b(n)&&h(n)})},f=function(n){n.addEventListener("keyboardDidShow",(function(t){return c(n,t)})),n.addEventListener("keyboardDidHide",(function(){return h(n)}))},c=function(n,t){g(n,t),d=!0},h=function(n){y(n),d=!1},p=function(){return!d&&r.width===u.width&&(r.height-u.height)*u.scale>150},w=function(n){return d&&!b(n)},b=function(n){return d&&u.height===n.innerHeight},g=function(n,t){var e=new CustomEvent(i,{detail:{keyboardHeight:t?t.keyboardHeight:n.innerHeight-u.height}});n.dispatchEvent(e)},y=function(n){var t=new CustomEvent(o);n.dispatchEvent(t)},v=function(n){r=Object.assign({},u),u=D(n.visualViewport)},D=function(n){return{width:Math.round(n.width),height:Math.round(n.height),offsetTop:n.offsetTop,offsetLeft:n.offsetLeft,pageTop:n.pageTop,pageLeft:n.pageLeft,scale:n.scale}}}}]);