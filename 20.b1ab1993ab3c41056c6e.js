(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{F07p:function(t,e,n){"use strict";n.d(e,"a",(function(){return Y}));var i=n("mrSG"),o=n("138U"),a=(n("IVSH"),n("1T0C")),r=n("VE8E"),c=n("57MG"),l=n("nxqh"),s=n("fXoL"),b=n("ofXK"),u=n("TEn/"),d=n("iLEx"),g=n("sYmb"),f=n("onrW");function p(t,e){if(1&t&&s.Jb(0,"airgap-identicon",15),2&t){var n=s.Xb(2);s.dc("address",n.wallet.receivingPublicAddress)}}function h(t,e){if(1&t&&s.Jb(0,"airgap-currency-symbol",16),2&t){var n=s.Xb(2);s.dc("symbol",n.wallet.protocol.symbol)}}function m(t,e){if(1&t&&s.Jb(0,"airgap-currency-symbol",17),2&t){var n=s.Xb(2);s.dc("symbol",n.wallet.protocol.symbol)}}var y=function(t,e){return{"porfolio-item__margin":t,"font-size__regular":e}};function w(t,e){if(1&t&&(s.Nb(0,"h2",18),s.uc(1),s.Mb()),2&t){var n=s.Xb(2);s.dc("ngClass",s.ic(2,y,!n.isDelegated,n.numberOfDecimalsInBalance>n.smallFontDecimalThreshold)),s.yb(1),s.wc(" ",n.balance," ")}}function v(t,e){1&t&&(s.Nb(0,"h2"),s.Jb(1,"ion-skeleton-text",19),s.Mb())}function M(t,e){1&t&&(s.Nb(0,"ion-badge",24),s.uc(1),s.Yb(2,"translate"),s.Mb()),2&t&&(s.yb(1),s.vc(s.Zb(2,1,"portfolio-item.active")))}function I(t,e){if(1&t&&(s.Nb(0,"h3",22),s.sc(1,M,3,3,"ion-badge",23),s.uc(2),s.Yb(3,"shortenString"),s.Mb()),2&t){var n=s.Xb(3);s.yb(1),s.dc("ngIf",n.isActive),s.yb(1),s.wc(" ",s.Zb(3,2,n.wallet.receivingPublicAddress)," ")}}function N(t,e){if(1&t&&(s.Lb(0),s.Nb(1,"ion-text",20),s.sc(2,I,4,4,"h3",21),s.Mb(),s.Kb()),2&t){s.Xb();var n=s.kc(14),i=s.Xb();s.yb(2),s.dc("ngIf",i.wallet.addresses.length>0)("ngIfElse",n)}}function k(t,e){if(1&t&&(s.Nb(0,"ion-badge",25),s.uc(1),s.Mb()),2&t){var n=s.Xb(2);s.yb(1),s.wc(" ",n.wallet.protocol.options.network.name," ")}}function x(t,e){if(1&t&&(s.Nb(0,"ion-badge",26),s.uc(1),s.Yb(2,"async"),s.Mb()),2&t){var n=s.Xb(2);s.yb(1),s.wc(" ",s.Zb(2,1,n.isDelegated)?"delegated":"undelegated"," ")}}function _(t,e){1&t&&(s.Nb(0,"div"),s.Nb(1,"h3"),s.Jb(2,"ion-skeleton-text",27),s.Mb(),s.Mb())}var P=function(t,e){return{protocolIdentifier:t,currentMarketPrice:e}};function D(t,e){if(1&t&&(s.Nb(0,"p",33),s.uc(1),s.Yb(2,"number"),s.Yb(3,"async"),s.Yb(4,"cryptoToFiat"),s.Mb()),2&t){var n=s.Xb(4);s.yb(1),s.wc(" $",s.ac(2,1,s.Zb(3,4,s.ac(4,6,n.wallet.currentBalance,s.ic(9,P,n.wallet.protocol.identifier,n.wallet.currentMarketPrice))),"1.2-2")," ")}}function O(t,e){if(1&t&&(s.Lb(0),s.sc(1,D,5,12,"p",32),s.Kb()),2&t){var n=s.Xb(3);s.yb(1),s.dc("ngIf",n.wallet.currentMarketPrice.toNumber()>0)}}function B(t,e){1&t&&(s.Nb(0,"p"),s.Jb(1,"ion-skeleton-text",34),s.Mb())}function E(t,e){if(1&t&&(s.Nb(0,"span"),s.uc(1),s.Yb(2,"number"),s.Mb()),2&t){var n=s.Xb(4);s.yb(1),s.wc(" $",s.ac(2,1,null==n.wallet.currentMarketPrice?null:n.wallet.currentMarketPrice.toNumber(),"1.2-4")," ")}}function T(t,e){if(1&t&&(s.Nb(0,"p"),s.Nb(1,"ion-text",20),s.sc(2,E,3,4,"span",9),s.Mb(),s.Mb()),2&t){var n=s.Xb(3);s.yb(2),s.dc("ngIf",(null==n.wallet.currentBalance?null:n.wallet.currentBalance.toNumber())>0&&(null==n.wallet.currentMarketPrice?null:n.wallet.currentMarketPrice.toNumber())>0)}}function X(t,e){1&t&&(s.Nb(0,"p"),s.Jb(1,"ion-skeleton-text",34),s.Mb())}function C(t,e){if(1&t&&(s.Nb(0,"div",28),s.sc(1,O,2,1,"ng-container",29),s.sc(2,B,2,0,"ng-template",null,30,s.tc),s.sc(4,T,3,1,"p",29),s.sc(5,X,2,0,"ng-template",null,31,s.tc),s.Mb()),2&t){var n=s.kc(3),i=s.kc(6),o=s.Xb(2);s.yb(1),s.dc("ngIf",o.wallet.currentBalance&&o.wallet.currentMarketPrice)("ngIfElse",n),s.yb(3),s.dc("ngIf",o.wallet.currentBalance)("ngIfElse",i)}}var A=function(t){return{"icon--rotated":t}};function S(t,e){if(1&t&&s.Jb(0,"ion-icon",35),2&t){var n=s.Xb(2);s.dc("ngClass",s.hc(1,A,n.isExtended))}}function J(t,e){if(1&t&&(s.Nb(0,"ion-item",2),s.Nb(1,"ion-avatar",3),s.sc(2,p,1,1,"airgap-identicon",4),s.sc(3,h,1,1,"airgap-currency-symbol",5),s.sc(4,m,1,1,"airgap-currency-symbol",6),s.Mb(),s.Nb(5,"ion-label"),s.sc(6,w,2,5,"h2",7),s.sc(7,v,2,0,"ng-template",null,8,s.tc),s.sc(9,N,3,2,"ng-container",9),s.sc(10,k,2,1,"ion-badge",10),s.sc(11,x,3,3,"ion-badge",11),s.Yb(12,"async"),s.sc(13,_,3,0,"ng-template",null,12,s.tc),s.Mb(),s.sc(15,C,7,4,"div",13),s.sc(16,S,1,3,"ion-icon",14),s.Mb()),2&t){var n=s.kc(8),i=s.Xb();s.yb(2),s.dc("ngIf",!i.isToken),s.yb(1),s.dc("ngIf",i.isToken),s.yb(1),s.dc("ngIf",!i.isToken),s.yb(2),s.dc("ngIf",i.wallet.currentBalance&&i.wallet.currentMarketPrice)("ngIfElse",n),s.yb(3),s.dc("ngIf",!i.isToken),s.yb(1),s.dc("ngIf",i.wallet.protocol.options.network.type!==i.networkType.MAINNET),s.yb(1),s.dc("ngIf",null!==s.Zb(12,10,i.isDelegated)&&!i.hideDelegationBadge),s.yb(4),s.dc("ngIf",!i.isExpendable&&!i.hideFiatAmounts),s.yb(1),s.dc("ngIf",i.isExpendable)}}function F(t,e){1&t&&(s.Nb(0,"h3"),s.Jb(1,"ion-skeleton-text",38),s.Mb())}function L(t,e){if(1&t&&(s.Nb(0,"ion-item",2),s.Nb(1,"ion-avatar",3),s.Jb(2,"ion-skeleton-text",36),s.Nb(3,"div",37),s.Jb(4,"ion-skeleton-text",36),s.Mb(),s.Mb(),s.Nb(5,"ion-label"),s.Nb(6,"h2"),s.Jb(7,"ion-skeleton-text",19),s.Mb(),s.sc(8,F,2,0,"h3",9),s.Mb(),s.Nb(9,"div",28),s.Nb(10,"p"),s.Jb(11,"ion-skeleton-text",34),s.Mb(),s.Nb(12,"p"),s.Jb(13,"ion-skeleton-text",34),s.Mb(),s.Mb(),s.Mb()),2&t){var n=s.Xb();s.yb(8),s.dc("ngIf",!n.isToken)}}var Y=function(){function t(t,e,n){this.operationsProvider=t,this.accountProvider=e,this.protocolService=n,this.networkType=a.NetworkType,this.isActive=!1,this.showBalances=!0,this.isExpendable=!1,this.isExtended=!1,this.hideFiatAmounts=!1,this.hideDelegationBadge=!1,this.isToken=!1,this.numberOfDecimalsInBalance=0,this.smallFontDecimalThreshold=16,this.defaultMaxDigits=15}return t.prototype.ngOnInit=function(){var t=this;this.updateBalance(),this.updateDelegationStatus(),this.walletChanged=this.accountProvider.walletChangedObservable.subscribe((function(){return Object(i.b)(t,void 0,void 0,(function(){return Object(i.e)(this,(function(t){return this.updateBalance(),this.updateDelegationStatus(),[2]}))}))}))},t.prototype.updateDelegationStatus=function(){return Object(i.b)(this,void 0,void 0,(function(){var t;return Object(i.e)(this,(function(e){switch(e.label){case 0:return void 0===this.wallet||void 0===this.wallet.receivingPublicAddress?[3,3]:Object(r.b)(this.wallet.protocol)?[3,1]:(this.isDelegated=null,[3,3]);case 1:return t=this,[4,this.operationsProvider.getDelegationStatusObservableOfAddress(this.wallet.protocol,this.wallet.receivingPublicAddress)];case 2:t.isDelegated=e.sent(),e.label=3;case 3:return[2]}}))}))},t.prototype.updateBalance=function(){if(void 0!==this.wallet&&void 0!==this.wallet.currentBalance){var t=new o.f(this.protocolService).transformValueOnly(this.wallet.currentBalance,this.wallet.protocol,this.digits());this.balance=t+" "+this.wallet.protocol.symbol;var e=t.split(".");if(2==e.length){var n=e.pop();this.numberOfDecimalsInBalance=n.length}}},t.prototype.digits=function(){return void 0===this.maxDigits?Math.min(this.wallet.protocol.decimals+1,this.defaultMaxDigits):0==this.maxDigits?this.wallet.protocol.decimals+1:this.maxDigits},t.prototype.ngOnDestroy=function(){this.walletChanged.unsubscribe()},t.\u0275fac=function(e){return new(e||t)(s.Ib(l.a),s.Ib(c.a),s.Ib(o.y))},t.\u0275cmp=s.Cb({type:t,selectors:[["portfolio-item"]],inputs:{wallet:"wallet",showBalances:"showBalances",isExpendable:"isExpendable",isExtended:"isExtended",hideFiatAmounts:"hideFiatAmounts",hideDelegationBadge:"hideDelegationBadge",isToken:"isToken",isDelegated:"isDelegated",maxDigits:"maxDigits"},decls:3,vars:2,consts:[["lines","none",4,"ngIf","ngIfElse"],["skeletonWallet",""],["lines","none"],["slot","start"],[3,"address",4,"ngIf"],[3,"symbol",4,"ngIf"],["class","symbol--icon",3,"symbol",4,"ngIf"],["class","font--weight__bold",3,"ngClass",4,"ngIf","ngIfElse"],["syncingHeading",""],[4,"ngIf"],["color","danger","class","badge__margin",4,"ngIf"],["color","secondary",4,"ngIf"],["syncingHeadingLow",""],["slot","end",4,"ngIf"],["slot","end","class","expendable__container","name","chevron-down-outline",3,"ngClass",4,"ngIf"],[3,"address"],[3,"symbol"],[1,"symbol--icon",3,"symbol"],[1,"font--weight__bold",3,"ngClass"],["animated","",2,"width","80%"],["color","blackLight"],["class","typography--mono",4,"ngIf","ngIfElse"],[1,"typography--mono"],["slot","end","color","primary",4,"ngIf"],["slot","end","color","primary"],["color","danger",1,"badge__margin"],["color","secondary"],["animated","",2,"width","60%"],["slot","end"],[4,"ngIf","ngIfElse"],["syncingBalance",""],["syncingPrice",""],["class","ion-text-right font--weight__bold porfolio-item__margin",4,"ngIf"],[1,"ion-text-right","font--weight__bold","porfolio-item__margin"],["animated","",2,"width","40px"],["slot","end","name","chevron-down-outline",1,"expendable__container",3,"ngClass"],["animated",""],[1,"symbol--icon"],["animated","",2,"width","50%"]],template:function(t,e){if(1&t&&(s.sc(0,J,17,12,"ion-item",0),s.sc(1,L,14,1,"ng-template",null,1,s.tc)),2&t){var n=s.kc(2);s.dc("ngIf",e.wallet)("ngIfElse",n)}},directives:[b.t,u.G,u.e,u.M,o.r,o.k,b.q,u.lb,u.tb,u.i,u.B],pipes:[b.b,d.a,g.d,b.g,f.a],styles:[".expendable__container[_ngcontent-%COMP%]{transition-duration:.4s;transition-property:transform}.expendable__container.icon--rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}ion-label[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0}ion-badge[_ngcontent-%COMP%]{margin:4px 0 0}.badge__margin[_ngcontent-%COMP%]{margin:0 6px 0 0}.porfolio-item__margin[_ngcontent-%COMP%]{margin:2px 0 6px}.symbol--icon[_ngcontent-%COMP%]{position:absolute;height:24px;width:24px;left:40px;top:40px}ion-avatar[_ngcontent-%COMP%]{margin:8px 16px 8px 0;min-height:48px;min-width:48px}"]}),t}()},iG6f:function(t,e,n){"use strict";n.r(e),n.d(e,"SubAccountSelectPageModule",(function(){return m}));var i=n("ofXK"),o=n("3Pt+"),a=n("tyNb"),r=n("TEn/"),c=n("sYmb"),l=n("j1ZV"),s=n("mrSG"),b=n("57MG"),u=n("1y+R"),d=n("hPkG"),g=n("fXoL"),f=n("F07p");function p(t,e){if(1&t){var n=g.Ob();g.Lb(0),g.Nb(1,"portfolio-item",8),g.Vb("click",(function(){g.lc(n);var t=e.$implicit;return g.Xb().goToDelegateSelection(t)})),g.Mb(),g.Kb()}if(2&t){var i=e.$implicit;g.yb(1),g.dc("wallet",i)}}var h=function(){function t(t,e,n,i){var o=this;this.router=t,this.route=e,this.accountProvider=n,this.dataService=i,this.route.snapshot.data.special&&(this.wallet=this.route.snapshot.data.special.wallet),this.subWallets=[],this.accountProvider.subWallets.subscribe((function(t){o.subWallets=t.filter((function(t){return t.publicKey===o.wallet.publicKey}))}))}return t.prototype.goToDelegateSelection=function(t){return Object(s.b)(this,void 0,void 0,(function(){return Object(s.e)(this,(function(e){return this.dataService.setData(u.b.DETAIL,{wallet:t}),this.router.navigateByUrl("/delegation-baker-detail/"+u.b.DETAIL).catch(Object(d.b)(d.a.NAVIGATION)),[2]}))}))},t.\u0275fac=function(e){return new(e||t)(g.Ib(a.g),g.Ib(a.a),g.Ib(b.a),g.Ib(u.a))},t.\u0275cmp=g.Cb({type:t,selectors:[["page-sub-account-select"]],decls:17,vars:10,consts:[[1,"ion-no-border"],["fixed","true",1,"ion-no-padding"],["slot","start"],["defaultHref","/"],[1,"ion-padding-horizontal",3,"innerHTML"],[1,"ion-padding"],["ion-text","","color","primary",1,"font--weight__bold"],[4,"ngFor","ngForOf"],["no-lines","","tappable","",3,"wallet","click"]],template:function(t,e){1&t&&(g.Nb(0,"ion-header",0),g.Nb(1,"ion-grid",1),g.Nb(2,"ion-toolbar"),g.Nb(3,"ion-buttons",2),g.Jb(4,"ion-back-button",3),g.Mb(),g.Nb(5,"ion-title"),g.uc(6),g.Yb(7,"translate"),g.Mb(),g.Mb(),g.Mb(),g.Mb(),g.Nb(8,"ion-content"),g.Nb(9,"ion-grid",1),g.Jb(10,"p",4),g.Yb(11,"translate"),g.Nb(12,"ion-row",5),g.Nb(13,"span",6),g.uc(14),g.Yb(15,"translate"),g.Mb(),g.Mb(),g.sc(16,p,2,1,"ng-container",7),g.Mb(),g.Mb()),2&t&&(g.yb(6),g.vc(g.Zb(7,4,"sub-account-select.title")),g.yb(4),g.dc("innerHTML",g.Zb(11,6,"sub-account-select.text"),g.mc),g.yb(4),g.vc(g.Zb(15,8,"sub-account-select.accounts_label")),g.yb(2),g.dc("ngForOf",e.subWallets))},directives:[r.A,r.z,r.yb,r.k,r.f,r.g,r.wb,r.t,r.fb,i.s,f.a],pipes:[c.d],encapsulation:2}),t}(),m=function(){function t(){}return t.\u0275mod=g.Gb({type:t}),t.\u0275inj=g.Fb({factory:function(e){return new(e||t)},imports:[[r.Ab,i.c,o.h,l.a,c.c,a.k.forChild([{path:"",component:h}])]]}),t}()},onrW:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("mrSG"),o=n("kB5k"),a=n("fXoL"),r=n("138U"),c=function(){function t(t){this.protocolService=t}return t.prototype.transform=function(t,e){return Object(i.b)(this,void 0,void 0,(function(){var n;return Object(i.e)(this,(function(i){switch(i.label){case 0:if(!e||!e.currentMarketPrice||!o.BigNumber.isBigNumber(e.currentMarketPrice)||isNaN(e.currentMarketPrice.toNumber())||!e.protocolIdentifier||!t||!o.BigNumber.isBigNumber(t)||isNaN(t.toNumber()))return[2,""];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.protocolService.getProtocol(e.protocolIdentifier)];case 2:return n=i.sent(),[3,4];case 3:return i.sent(),[2,""];case 4:return[2,e.currentMarketPrice.multipliedBy(t.shiftedBy(-1*n.decimals)).toFixed()]}}))}))},t.\u0275fac=function(e){return new(e||t)(a.Ib(r.y))},t.\u0275pipe=a.Hb({name:"cryptoToFiat",type:t,pure:!0}),t}()}}]);