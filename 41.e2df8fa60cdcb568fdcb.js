(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"/IzN":function(e,t,n){"use strict";n.r(t),n.d(t,"SettingsBeaconPageModule",(function(){return g}));var i=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),c=n("sYmb"),s=n("tyNb"),b=n("mrSG"),a=n("q3zY"),u=n("fXoL");function l(e,t){1&e&&(u.Nb(0,"div",9),u.Jb(1,"img",10),u.Nb(2,"p"),u.uc(3),u.Yb(4,"translate"),u.Mb(),u.Mb()),2&e&&(u.yb(3),u.wc(" ",u.Zb(4,1,"settings-beacon.no-peers")," "))}function d(e,t){if(1&e){var n=u.Ob();u.Nb(0,"ion-item-sliding"),u.Nb(1,"ion-item"),u.uc(2),u.Mb(),u.Nb(3,"ion-item-options",11),u.Nb(4,"ion-item-option",12),u.Vb("click",(function(){u.lc(n);var e=t.$implicit;return u.Xb().removePeer(e)})),u.uc(5),u.Yb(6,"translate"),u.Mb(),u.Mb(),u.Mb()}if(2&e){var i=t.$implicit;u.yb(2),u.wc(" ",i.name," "),u.yb(3),u.vc(u.Zb(6,2,"settings-beacon.delete_label"))}}var f=[{path:"",component:function(){function e(e){this.beaconService=e,this.connectedPeers=[]}return e.prototype.ngOnInit=function(){return Object(b.b)(this,void 0,void 0,(function(){return Object(b.e)(this,(function(e){switch(e.label){case 0:return[4,this.loadPeers()];case 1:return e.sent(),[2]}}))}))},e.prototype.loadPeers=function(){return Object(b.b)(this,void 0,void 0,(function(){var e;return Object(b.e)(this,(function(t){switch(t.label){case 0:return e=this,[4,this.beaconService.getPeers()];case 1:return e.connectedPeers=t.sent(),[2]}}))}))},e.prototype.removePeer=function(e){return Object(b.b)(this,void 0,void 0,(function(){return Object(b.e)(this,(function(t){switch(t.label){case 0:return[4,this.beaconService.removePeer(e)];case 1:return t.sent(),[4,this.loadPeers()];case 2:return t.sent(),[2]}}))}))},e.prototype.removeAllPeers=function(){return Object(b.b)(this,void 0,void 0,(function(){return Object(b.e)(this,(function(e){switch(e.label){case 0:return[4,this.beaconService.removeAllPeers()];case 1:return e.sent(),[4,this.loadPeers()];case 2:return e.sent(),[2]}}))}))},e.\u0275fac=function(t){return new(t||e)(u.Ib(a.a))},e.\u0275cmp=u.Cb({type:e,selectors:[["settings-beacon"]],decls:17,vars:8,consts:[[1,"ion-no-border"],["fixed","true",1,"ion-no-padding"],["slot","start"],["defaultHref","/tabs/settings"],["slot","end"],[3,"click"],["class","empty-list ion-padding-horizontal",4,"ngIf"],["lines","none"],[4,"ngFor","ngForOf"],[1,"empty-list","ion-padding-horizontal"],["src","assets/img/empty-state-no-transaction.svg",1,"ion-padding-vertical"],["side","end"],["color","danger",3,"click"]],template:function(e,t){1&e&&(u.Nb(0,"ion-header",0),u.Nb(1,"ion-grid",1),u.Nb(2,"ion-toolbar"),u.Nb(3,"ion-buttons",2),u.Jb(4,"ion-back-button",3),u.Mb(),u.Nb(5,"ion-title"),u.uc(6),u.Yb(7,"translate"),u.Mb(),u.Nb(8,"ion-buttons",4),u.Nb(9,"ion-button",5),u.Vb("click",(function(){return t.removeAllPeers()})),u.uc(10),u.Yb(11,"translate"),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Nb(12,"ion-content"),u.Nb(13,"ion-grid",1),u.sc(14,l,5,3,"div",6),u.Nb(15,"ion-list",7),u.sc(16,d,7,4,"ion-item-sliding",8),u.Mb(),u.Mb(),u.Mb()),2&e&&(u.yb(6),u.vc(u.Zb(7,4,"settings-beacon.title")),u.yb(4),u.vc(u.Zb(11,6,"settings-beacon.remove-all_label")),u.yb(4),u.dc("ngIf",0===t.connectedPeers.length),u.yb(2),u.dc("ngForOf",t.connectedPeers))},directives:[r.A,r.z,r.yb,r.k,r.f,r.g,r.wb,r.j,r.t,i.t,r.N,i.s,r.L,r.G,r.K,r.J],pipes:[c.d],styles:[".empty-list[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;font-weight:100;font-size:1.4rem;height:50%}"]}),e}()}],p=function(){function e(){}return e.\u0275mod=u.Gb({type:e}),e.\u0275inj=u.Fb({factory:function(t){return new(t||e)},imports:[[s.k.forChild(f)],s.k]}),e}(),g=function(){function e(){}return e.\u0275mod=u.Gb({type:e}),e.\u0275inj=u.Fb({factory:function(t){return new(t||e)},imports:[[i.c,o.h,r.Ab,c.c,p]]}),e}()}}]);