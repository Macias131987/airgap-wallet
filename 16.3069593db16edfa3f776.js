(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"2Eq5":function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n("+A10");var i=n("fXoL"),o=n("TEn/"),a=n("ofXK"),l=n("138U");function r(e,t){if(1&e){var n=i.Ob();i.Nb(0,"img",14),i.Vb("error",(function(){return i.lc(n),i.Xb().widget.onInvalidLogo()})),i.Mb()}if(2&e){var o=i.Xb();i.dc("src",o.widget.logo,i.nc)}}function s(e,t){if(1&e&&i.Jb(0,"airgap-identicon",15),2&e){var n=i.Xb();i.dc("address",n.widget.address)}}var b=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Cb({type:e,selectors:[["widget-account-summary"]],inputs:{widget:"widget"},decls:22,vars:6,consts:[["lines","none",1,"ion-no-padding","ion-no-margin"],["slot","start"],[3,"src","error",4,"ngIf"],[3,"address",4,"ngIf"],["color","black"],[1,"ion-no-padding"],["size","9",1,"ion-no-padding"],[1,"font--weight__bold"],["size","3",1,"ion-text-end","ion-no-padding"],[1,"ion-no-margin"],["size","4",1,"ion-no-padding"],["color","blackLight"],[1,"ion-no-margin","typography--mono"],["size","8",1,"ion-text-end","ion-no-padding"],[3,"src","error"],[3,"address"]],template:function(e,t){1&e&&(i.Nb(0,"ion-item",0),i.Nb(1,"ion-avatar",1),i.sc(2,r,1,1,"img",2),i.sc(3,s,1,1,"airgap-identicon",3),i.Mb(),i.Nb(4,"ion-label"),i.Nb(5,"ion-text",4),i.Nb(6,"ion-row",5),i.Nb(7,"ion-col",6),i.Nb(8,"h2",7),i.uc(9),i.Mb(),i.Mb(),i.Nb(10,"ion-col",8),i.Nb(11,"p",9),i.uc(12),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Nb(13,"ion-row",5),i.Nb(14,"ion-col",10),i.Nb(15,"ion-text",11),i.Nb(16,"p",12),i.uc(17),i.Mb(),i.Mb(),i.Mb(),i.Nb(18,"ion-col",13),i.Nb(19,"ion-text",11),i.Nb(20,"p",9),i.uc(21),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb()),2&e&&(i.yb(2),i.dc("ngIf",t.widget.logo),i.yb(1),i.dc("ngIf",!t.widget.logo),i.yb(6),i.wc(" ",t.widget.header[0]," "),i.yb(3),i.wc(" ",t.widget.header[1]," "),i.yb(5),i.wc(" ",t.widget.description[0]," "),i.yb(4),i.wc(" ",t.widget.description[1]," "))},directives:[o.G,o.e,a.t,o.M,o.tb,o.fb,o.s,l.r],styles:[""]}),e}()},lbWX:function(e,t,n){"use strict";n.r(t),n.d(t,"DelegationListPageModule",(function(){return _}));var i=n("138U"),o=n("ofXK"),a=n("3Pt+"),l=n("tyNb"),r=n("TEn/"),s=n("sYmb"),b=n("j1ZV"),c=n("iTUp"),d=n("mrSG"),g=n("lqTi"),u=n("nxqh"),p=n("hPkG"),f=n("oCjk"),h=n("fXoL"),M=n("2Eq5");function v(e,t){if(1&e){var n=h.Ob();h.Nb(0,"div",15),h.Vb("click",(function(){h.lc(n);var e=t.$implicit;return h.Xb(3).navigateToDetails(e.address)})),h.Jb(1,"widget-account-summary",16),h.Mb()}if(2&e){var i=t.$implicit;h.yb(1),h.dc("widget",i)}}var N=function(e){return{delegateeLabelPlural:e}};function m(e,t){if(1&e&&(h.Nb(0,"ion-list",12),h.Nb(1,"ion-list-header"),h.Nb(2,"ion-label"),h.Nb(3,"ion-text",13),h.uc(4),h.Yb(5,"translate"),h.Yb(6,"translate"),h.Mb(),h.Mb(),h.Mb(),h.sc(7,v,2,1,"div",14),h.Mb()),2&e){var n=h.Xb(2);h.yb(4),h.wc(" ",h.ac(5,2,"delegation-list.your-delegatees_label",h.hc(7,N,h.Zb(6,5,n.areMultipleDelegationsSupported?n.delegateeLabelPlural:n.delegateeLabel)))," "),h.yb(3),h.dc("ngForOf",n.currentDelegatees)}}function w(e,t){if(1&e&&(h.Lb(0),h.sc(1,m,8,9,"ion-list",11),h.Kb()),2&e){var n=h.Xb();h.yb(1),h.dc("ngIf",n.currentDelegatees.length>0)}}function y(e,t){if(1&e&&(h.Nb(0,"ion-list",12),h.Nb(1,"ion-list-header"),h.Nb(2,"ion-label"),h.Nb(3,"ion-text",13),h.uc(4),h.Yb(5,"translate"),h.Yb(6,"translate"),h.Mb(),h.Mb(),h.Mb(),h.Nb(7,"ion-item"),h.Nb(8,"ion-avatar",2),h.Jb(9,"airgap-identicon"),h.Mb(),h.Nb(10,"ion-label"),h.Nb(11,"ion-text"),h.Nb(12,"ion-row",17),h.Nb(13,"ion-col",18),h.Nb(14,"h2"),h.Jb(15,"ion-skeleton-text",19),h.Mb(),h.Mb(),h.Nb(16,"ion-col",20),h.Jb(17,"ion-skeleton-text",21),h.Mb(),h.Mb(),h.Mb(),h.Nb(18,"ion-row",17),h.Nb(19,"ion-col",22),h.Nb(20,"ion-text"),h.Jb(21,"ion-skeleton-text",19),h.Mb(),h.Mb(),h.Nb(22,"ion-col",23),h.Nb(23,"ion-text"),h.Nb(24,"p",24),h.Jb(25,"ion-skeleton-text",21),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb()),2&e){var n=h.Xb();h.yb(4),h.wc(" ",h.ac(5,1,"delegation-list.your-delegatees_label",h.hc(6,N,h.Zb(6,4,n.delegateeLabelPlural)))," ")}}function D(e,t){if(1&e){var n=h.Ob();h.Nb(0,"div",15),h.Vb("click",(function(){h.lc(n);var e=t.$implicit;return h.Xb(2).navigateToDetails(e.address)})),h.Jb(1,"widget-account-summary",16),h.Mb()}if(2&e){var i=t.$implicit;h.yb(1),h.dc("widget",i)}}function I(e,t){if(1&e&&(h.Nb(0,"p",28),h.uc(1),h.Yb(2,"translate"),h.Yb(3,"translate"),h.Mb()),2&e){var n=h.Xb(2);h.yb(1),h.wc(" ",h.ac(2,1,"delegation-list.not-supported_text",h.hc(6,N,h.Zb(3,4,n.delegateeLabelPlural)))," ")}}function L(e,t){if(1&e){var n=h.Ob();h.Nb(0,"ion-infinite-scroll",29),h.Vb("ionInfinite",(function(){return h.lc(n),h.Xb(2).loadMoreItems()})),h.Jb(1,"ion-infinite-scroll-content"),h.Mb()}if(2&e){var i=h.Xb(2);h.dc("disabled",i.displayedDelegatees.length>=i.filteredDelegatees.length)}}function k(e,t){if(1&e){var n=h.Ob();h.Nb(0,"ion-button",30),h.Vb("click",(function(){return h.lc(n),h.Xb(2).loadMoreItems()})),h.uc(1),h.Yb(2,"translate"),h.Mb()}2&e&&(h.yb(1),h.wc(" ",h.Zb(2,1,"delegation-list.load-more_label")," "))}function O(e,t){if(1&e&&(h.Lb(0),h.Nb(1,"ion-list",12),h.Nb(2,"ion-list-header"),h.Nb(3,"ion-label"),h.Nb(4,"ion-text",13),h.uc(5),h.Yb(6,"translate"),h.Yb(7,"translate"),h.Mb(),h.Mb(),h.Mb(),h.sc(8,D,2,1,"div",14),h.Mb(),h.sc(9,I,4,8,"p",25),h.sc(10,L,2,1,"ion-infinite-scroll",26),h.sc(11,k,3,3,"ion-button",27),h.Kb()),2&e){var n=h.Xb();h.yb(5),h.wc(" ",h.ac(6,5,"delegation-list.known-delegatees_label",h.hc(10,N,h.Zb(7,8,n.delegateeLabelPlural)))," "),h.yb(3),h.dc("ngForOf",n.displayedDelegatees),h.yb(1),h.dc("ngIf",0===n.knownDelegatees.length),h.yb(1),h.dc("ngIf",!n.isDesktop),h.yb(1),h.dc("ngIf",n.isDesktop&&n.displayedDelegatees.length<n.filteredDelegatees.length)}}function x(e,t){if(1&e&&(h.Nb(0,"ion-list",12),h.Nb(1,"ion-list-header"),h.Nb(2,"ion-label"),h.Nb(3,"ion-text",13),h.uc(4),h.Yb(5,"translate"),h.Yb(6,"translate"),h.Mb(),h.Mb(),h.Mb(),h.Nb(7,"ion-item"),h.Nb(8,"ion-avatar",2),h.Jb(9,"airgap-identicon"),h.Mb(),h.Nb(10,"ion-label"),h.Nb(11,"ion-text"),h.Nb(12,"ion-row",17),h.Nb(13,"ion-col",18),h.Nb(14,"h2"),h.Jb(15,"ion-skeleton-text",19),h.Mb(),h.Mb(),h.Nb(16,"ion-col",20),h.Jb(17,"ion-skeleton-text",21),h.Mb(),h.Mb(),h.Mb(),h.Nb(18,"ion-row",17),h.Nb(19,"ion-col",22),h.Nb(20,"ion-text"),h.Jb(21,"ion-skeleton-text",19),h.Mb(),h.Mb(),h.Nb(22,"ion-col",23),h.Nb(23,"ion-text"),h.Nb(24,"p",24),h.Jb(25,"ion-skeleton-text",21),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb()),2&e){var n=h.Xb();h.yb(4),h.wc(" ",h.ac(5,1,"delegation-list.known-delegatees_label",h.hc(6,N,h.Zb(6,4,n.delegateeLabelPlural)))," ")}}var P=[{path:"",component:function(){function e(e,t,n,i,o,a){this.route=e,this.navController=t,this.operations=n,this.popoverController=i,this.ngZone=o,this.platform=a,this.searchTerm="",this.currentDelegatees=[],this.knownDelegatees=[],this.filteredDelegatees=[],this.displayedDelegatees=[],this.isDesktop=this.platform.is("desktop")}return Object.defineProperty(e.prototype,"itemLoadingStep",{get:function(){return this.isDesktop?e.DESKTOP_ITEM_LOADING_STEP:e.DEFAULT_ITEM_LOADING_STEP},enumerable:!1,configurable:!0}),e.prototype.ngOnInit=function(){var e=this;if(this.route.snapshot.data.special){var t=this.route.snapshot.data.special;this.wallet=t.wallet,this.delegateeLabel=t.delegateeLabel,this.delegateeLabelPlural=t.delegateeLabelPlural,this.areMultipleDelegationsSupported=t.areMultipleDelegationsSupported,this.callback=t.callback,this.operations.getDelegateesSummary(this.wallet,t.currentDelegatees).then((function(n){e.currentDelegatees=n.filter((function(e){return void 0!==e.address&&t.currentDelegatees.includes(e.address)})),e.knownDelegatees=n.filter((function(e){return!t.currentDelegatees.includes(e.address)})),e.filteredDelegatees=e.knownDelegatees,e.ngZone.run((function(){e.loadMoreItems(e.itemLoadingStep)}))}))}},e.prototype.presentPopover=function(e){return Object(d.b)(this,void 0,void 0,(function(){var t,n=this;return Object(d.e)(this,(function(i){switch(i.label){case 0:return[4,this.popoverController.create({component:g.a,componentProps:{delegateeLabel:this.delegateeLabel,delegateeLabelPlural:this.delegateeLabelPlural},event:e,translucent:!0})];case 1:return(t=i.sent()).onDidDismiss().then((function(e){var t=e.data;return Object(d.b)(n,void 0,void 0,(function(){return Object(d.e)(this,(function(e){return Object(f.b)(t,"delegateeAddress")?this.navigateToDetails(t.delegateeAddress):console.log("Unknown option selected."),[2]}))}))})).catch(Object(p.b)(p.a.IONIC_ALERT)),[2,t.present().catch(Object(p.b)(p.a.NAVIGATION))]}}))}))},e.prototype.setFilteredItems=function(e){this.filteredDelegatees=0===e.length?this.knownDelegatees:this.knownDelegatees.filter((function(t){var n=e.toLowerCase(),i=t.address.toLowerCase().includes(n),o=t.header[0].toLowerCase().includes(n);return i||o})),this.displayedDelegatees=this.getFilteredDlegatees()},e.prototype.loadMoreItems=function(e){return void 0===e&&(e=this.itemLoadingStep),Object(d.b)(this,void 0,void 0,(function(){return Object(d.e)(this,(function(t){switch(t.label){case 0:return 0===this.searchTerm.length&&(this.displayedDelegatees=Object(d.g)(this.displayedDelegatees,this.getFilteredDlegatees(Math.max(this.displayedDelegatees.length-1,0),e)).filter((function(e,t,n){return n.indexOf(e)===t}))),this.infiniteScroll?[4,this.infiniteScroll.complete()]:[3,2];case 1:t.sent(),this.displayedDelegatees.length===this.knownDelegatees.length&&(this.infiniteScroll.disabled=!0),t.label=2;case 2:return[2]}}))}))},e.prototype.navigateToDetails=function(e){this.callback(e),this.navController.pop()},e.prototype.getFilteredDlegatees=function(e,t){return void 0===e&&(e=0),void 0===t&&(t=this.itemLoadingStep),this.filteredDelegatees.slice(0,e+t)},e.DEFAULT_ITEM_LOADING_STEP=10,e.DESKTOP_ITEM_LOADING_STEP=30,e.\u0275fac=function(t){return new(t||e)(h.Ib(l.a),h.Ib(r.Eb),h.Ib(u.a),h.Ib(r.Jb),h.Ib(h.z),h.Ib(r.Ib))},e.\u0275cmp=h.Cb({type:e,selectors:[["delegation-list"]],viewQuery:function(e,t){var n;1&e&&h.yc(r.D,!0),2&e&&h.jc(n=h.Wb())&&(t.infiniteScroll=n.first)},decls:22,vars:13,consts:[[1,"ion-no-border"],["fixed","true",1,"ion-no-padding"],["slot","start"],["defaultHref","/"],["slot","end"],["color","secondary",3,"click"],["name","ellipsis-vertical-outline"],[3,"ngModel","ngModelChange","ionChange"],[4,"ngIf","ngIfElse"],["currentLoadingTemplate",""],["filteredLoadingTemplate",""],["lines","none",4,"ngIf"],["lines","none"],["color","primary",1,"font--weight__bold","ion-ion-text"],["class","ion-padding-horizontal",3,"click",4,"ngFor","ngForOf"],[1,"ion-padding-horizontal",3,"click"],[3,"widget"],[1,"ion-no-padding"],["size","9",1,"ion-no-padding"],["animated","",2,"width","80%"],["size","3",1,"ion-no-padding"],["animated","",2,"width","100%"],["size","4",1,"ion-no-padding"],["size","8",1,"ion-no-padding"],[1,"ion-no-margin"],["class","ion-padding-horizontal",4,"ngIf"],[3,"disabled","ionInfinite",4,"ngIf"],["fill","outline","expand","block",3,"click",4,"ngIf"],[1,"ion-padding-horizontal"],[3,"disabled","ionInfinite"],["fill","outline","expand","block",3,"click"]],template:function(e,t){if(1&e&&(h.Nb(0,"ion-header",0),h.Nb(1,"ion-grid",1),h.Nb(2,"ion-toolbar"),h.Nb(3,"ion-buttons",2),h.Jb(4,"ion-back-button",3),h.Mb(),h.Nb(5,"ion-title"),h.uc(6),h.Yb(7,"translate"),h.Yb(8,"translate"),h.Mb(),h.Nb(9,"ion-buttons",4),h.Nb(10,"ion-button",5),h.Vb("click",(function(e){return t.presentPopover(e)})),h.Jb(11,"ion-icon",6),h.Mb(),h.Mb(),h.Mb(),h.Nb(12,"ion-toolbar"),h.Nb(13,"ion-searchbar",7),h.Vb("ngModelChange",(function(e){return t.searchTerm=e}))("ionChange",(function(){return t.setFilteredItems(t.searchTerm)})),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Nb(14,"ion-content"),h.Nb(15,"ion-grid",1),h.sc(16,w,2,1,"ng-container",8),h.sc(17,y,26,8,"ng-template",null,9,h.tc),h.sc(19,O,12,12,"ng-container",8),h.sc(20,x,26,8,"ng-template",null,10,h.tc),h.Mb(),h.Mb()),2&e){var n=h.kc(18),i=h.kc(21);h.yb(6),h.vc(h.ac(7,6,"delegation-list.title",h.hc(11,N,h.Zb(8,9,t.delegateeLabelPlural)))),h.yb(7),h.dc("ngModel",t.searchTerm),h.yb(3),h.dc("ngIf",t.currentDelegatees)("ngIfElse",n),h.yb(3),h.dc("ngIf",t.displayedDelegatees)("ngIfElse",i)}},directives:[r.A,r.z,r.yb,r.k,r.f,r.g,r.wb,r.j,r.B,r.gb,r.Nb,a.m,a.p,r.t,o.t,r.N,r.O,r.M,r.tb,o.s,M.a,r.G,r.e,i.r,r.fb,r.s,r.lb,r.D,r.E],pipes:[s.d],styles:[".sc-ion-label-ios-s[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .sc-ion-label-md-s[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.list-ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-bottom:8px}"]}),e}()}],_=function(){function e(){}return e.\u0275mod=h.Gb({type:e}),e.\u0275inj=h.Fb({factory:function(t){return new(t||e)},imports:[[o.c,a.h,r.Ab,s.c,b.a,c.a,l.k.forChild(P),i.d]]}),e}()},lqTi:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("mrSG"),o=n("fXoL"),a=n("TEn/"),l=n("sYmb"),r=n("ofXK"),s=function(e){return{delegateeLabel:e}};function b(e,t){if(1&e&&(o.Nb(0,"span"),o.uc(1),o.Yb(2,"translate"),o.Yb(3,"translate"),o.Mb()),2&e){var n=o.Xb();o.yb(1),o.wc(" ",o.ac(2,1,"delegate-edit-popover.change-delegatee_label",o.hc(6,s,o.Zb(3,4,n.delegateeLabel)))," ")}}var c=function(){function e(e,t,n,i){this.alertController=e,this.popoverController=t,this.navParams=n,this.translateService=i;var o=this.navParams.get("delegateeLabel"),a=this.navParams.get("delegateeLabelPlural");this.delegateeLabel=void 0!==o?o:"delegation-detail.default-delegatee-label",this.delegateeLabelPlural=void 0!==a?a:"delegation-detail.default-delegatee-label-plural"}return e.prototype.changeDelegatee=function(){return Object(i.b)(this,void 0,void 0,(function(){var e;return Object(i.e)(this,(function(t){switch(t.label){case 0:return[4,this.createAlertOptions()];case 1:return e=t.sent(),[4,this.alertController.create(e)];case 2:return[4,t.sent().present()];case 3:return t.sent(),[2]}}))}))},e.prototype.createAlertOptions=function(){return Object(i.b)(this,void 0,void 0,(function(){var e=this;return Object(i.e)(this,(function(t){return[2,{header:this.translateService.instant("delegate-edit-popover.delegation-settings_label"),message:this.translateService.instant("delegate-edit-popover.change-alert.text",{delegateeLabel:this.translateService.instant(this.delegateeLabel)}),inputs:[{name:"delegateeAddress",id:"delegatee-address",placeholder:this.translateService.instant("delegate-edit-popover.change-alert.placeholder_text",{delegateeLabel:this.translateService.instant(this.delegateeLabel)})}],buttons:[{text:this.translateService.instant("delegate-edit-popover.change-alert.cancel_label"),role:"cancel",cssClass:"secondary",handler:function(){e.popoverController.dismiss()}},{text:this.translateService.instant("delegate-edit-popover.change-alert.set-delegatee_label",{delegateeLabel:this.translateService.instant(this.delegateeLabel)}),handler:function(t){return e.popoverController.dismiss({delegateeAddress:t.delegateeAddress}),!0}}]}]}))}))},e.\u0275fac=function(t){return new(t||e)(o.Ib(a.a),o.Ib(a.Jb),o.Ib(a.Gb),o.Ib(l.e))},e.\u0275cmp=o.Cb({type:e,selectors:[["app-delegate-edit-popover"]],decls:8,vars:4,consts:[["lines","none","no-detail","",1,"ion-no-padding","ion-no-margin"],["button","","detail","false",3,"click"],["name","create-outline","color","dark","slot","end"],[4,"ngIf"]],template:function(e,t){1&e&&(o.Nb(0,"ion-list",0),o.Nb(1,"ion-list-header"),o.Nb(2,"ion-label"),o.uc(3),o.Yb(4,"translate"),o.Mb(),o.Mb(),o.Nb(5,"ion-item",1),o.Vb("click",(function(){return t.changeDelegatee()})),o.Jb(6,"ion-icon",2),o.sc(7,b,4,8,"span",3),o.Mb(),o.Mb()),2&e&&(o.yb(3),o.vc(o.Zb(4,2,"delegate-edit-popover.delegation-settings_label")),o.yb(4),o.dc("ngIf",t.delegateeLabel))},directives:[a.N,a.O,a.M,a.G,a.B,r.t],pipes:[l.d],styles:[""]}),e}()}}]);