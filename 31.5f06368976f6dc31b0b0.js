(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{awK3:function(t,e,i){"use strict";i.r(e),i.d(e,"LedgerSignPageModule",function(){return I});var n=i("138U"),o=i("ofXK"),r=i("tyNb"),a=i("TEn/"),s=i("sYmb"),c=i("j1ZV"),l=i("iTUp"),d=i("mrSG"),b=i("RKiA"),g=i("kB5k"),h=i.n(g),p=i("1y+R"),f=i("z26V"),u=i("hPkG"),m=i("fXoL");const S=function(t){return{protocol:t,maxDigits:void 0}},y=function(t){return{protocol:t}};function T(t,e){if(1&t&&(m.Qb(0),m.Sb(1,"ion-row",9),m.Sb(2,"ion-col",10),m.Sb(3,"h5"),m.yc(4),m.dc(5,"async"),m.dc(6,"amountConverter"),m.Rb(),m.Rb(),m.Sb(7,"ion-col",10),m.Sb(8,"h5"),m.yc(9),m.Rb(),m.Rb(),m.Sb(10,"ion-col",10),m.Sb(11,"h5"),m.yc(12),m.dc(13,"async"),m.dc(14,"feeConverter"),m.Rb(),m.Rb(),m.Sb(15,"ion-col",11),m.Sb(16,"small"),m.yc(17,"Amount"),m.Rb(),m.Rb(),m.Sb(18,"ion-col",11),m.Sb(19,"small"),m.yc(20,"Operations"),m.Rb(),m.Rb(),m.Sb(21,"ion-col",11),m.Sb(22,"small"),m.yc(23,"Fee"),m.Rb(),m.Rb(),m.Rb(),m.Pb()),2&t){const t=m.cc();m.Cb(4),m.Ac(" ",m.ec(5,3,m.fc(6,5,t.aggregatedInfo.totalAmount.toFixed(),m.mc(13,S,t.airGapTxs[0].protocolIdentifier)))," "),m.Cb(5),m.zc(t.aggregatedInfo.numberOfTxs),m.Cb(3),m.zc(m.ec(13,8,m.fc(14,10,t.aggregatedInfo.totalFees.toFixed(),m.mc(15,y,t.airGapTxs[0].protocolIdentifier))))}}function R(t,e){1&t&&m.Ob(0,"airgap-from-to",13),2&t&&m.ic("transaction",e.$implicit)}function w(t,e){if(1&t&&(m.Qb(0),m.wc(1,R,1,1,"airgap-from-to",12),m.Pb()),2&t){const t=m.cc();m.Cb(1),m.ic("ngForOf",t.airGapTxs)}}const x=function(t){return{title:t}};let v=(()=>{class t{constructor(t,e,i,n,o,r,a){if(this.router=t,this.route=e,this.dataService=i,this.alertCtrl=n,this.loadingController=o,this.translateService=r,this.ledgerService=a,this.wallet=null,this.airGapTxs=null,this.route.snapshot.data.special){const t=this.route.snapshot.data.special;this.wallet=t.wallet,this.airGapTxs=t.airGapTxs,this.unsignedTx=t.data,this.airGapTxs.length>1&&this.airGapTxs.every(t=>t.protocolIdentifier===this.airGapTxs[0].protocolIdentifier)&&(this.aggregatedInfo={numberOfTxs:this.airGapTxs.length,totalAmount:this.airGapTxs.map(t=>new h.a(t.amount)).filter(t=>!t.isNaN()).reduce((t,e)=>t.plus(e),new h.a(0)),totalFees:this.airGapTxs.reduce((t,e)=>t.plus(e.fee),new h.a(0))},console.log("aggregatedInfo",this.aggregatedInfo))}this.connectWithLedger()}connectWithLedger(){return Object(d.a)(this,void 0,void 0,function*(){yield this.showLoader("Connecting device...");try{yield this.ledgerService.openConnection(this.wallet.protocol.identifier)}catch(t){console.warn(t),this.promptError(t)}finally{this.dismissLoader()}})}signTx(){return Object(d.a)(this,void 0,void 0,function*(){yield this.showLoader("Signing transaction...");try{const t=yield this.ledgerService.signTransaction(this.wallet.protocol.identifier,this.unsignedTx),e={id:Object(b.generateId)(8),type:b.IACMessageType.MessageSignResponse,protocol:this.wallet.protocol.identifier,payload:{transaction:t,accountIdentifier:this.wallet.publicKey.substr(-6)}};this.dataService.setData(p.b.TRANSACTION,{messageDefinitionObjects:[e]}),this.router.navigateByUrl(`/transaction-confirm/${p.b.TRANSACTION}`).catch(Object(u.b)(u.a.NAVIGATION))}catch(t){console.warn(t),this.promptError(t)}finally{this.dismissLoader()}})}promptError(t){return Object(d.a)(this,void 0,void 0,function*(){let e;if("string"==typeof t){if("Rejected"===t)return;e=t}else e=t instanceof Error?t.message:this.translateService.instant("ledger-sign.error-alert.unknown");(yield this.alertCtrl.create({header:this.translateService.instant("ledger-sign.error-alert.header"),message:e,buttons:[{text:this.translateService.instant("ledger-sign.error-alert.confirm")}]})).present().catch(Object(u.b)(u.a.IONIC_ALERT))})}showLoader(t){return Object(d.a)(this,void 0,void 0,function*(){this.dismissLoader(),this.loader=yield this.loadingController.create({message:t}),yield this.loader.present().catch(Object(u.b)(u.a.IONIC_LOADER))})}dismissLoader(){this.loader&&(this.loader.dismiss().catch(Object(u.b)(u.a.IONIC_LOADER)),this.loader=null)}}return t.\u0275fac=function(e){return new(e||t)(m.Nb(r.g),m.Nb(r.a),m.Nb(p.a),m.Nb(a.a),m.Nb(a.lb),m.Nb(s.d),m.Nb(f.a))},t.\u0275cmp=m.Hb({type:t,selectors:[["page-ledger-sign"]],decls:20,vars:16,consts:[[1,"ion-no-border"],["fixed","true",1,"ion-no-padding"],["slot","start"],["defaultHref","/"],[1,"ion-padding","ion-margin-bottom"],[3,"innerHTML"],[4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed"],["id","confirm","size","default","color","primary","shape","round",3,"click"],[1,"ion-padding-bottom","ion-text-center"],["size","4",1,"content--align__center-center"],["size","4"],["class","ion-padding-horizontal",3,"transaction",4,"ngFor","ngForOf"],[1,"ion-padding-horizontal",3,"transaction"]],template:function(t,e){1&t&&(m.Sb(0,"ion-header",0),m.Sb(1,"ion-grid",1),m.Sb(2,"ion-toolbar"),m.Sb(3,"ion-buttons",2),m.Ob(4,"ion-back-button",3),m.Rb(),m.Sb(5,"ion-title"),m.yc(6),m.dc(7,"translate"),m.dc(8,"uppercase"),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(9,"ion-content",4),m.Sb(10,"ion-grid",1),m.Sb(11,"ion-row"),m.Ob(12,"h5",5),m.dc(13,"translate"),m.Rb(),m.wc(14,T,24,17,"ng-container",6),m.wc(15,w,2,1,"ng-container",6),m.Rb(),m.Sb(16,"ion-fab",7),m.Sb(17,"ion-button",8),m.ac("click",function(){return e.signTx()}),m.yc(18),m.dc(19,"translate"),m.Rb(),m.Rb(),m.Rb()),2&t&&(m.Cb(6),m.zc(m.fc(7,5,"ledger-sign.title",m.mc(14,x,m.ec(8,8,e.wallet.protocol.identifier)))),m.Cb(6),m.ic("innerHTML",m.ec(13,10,"ledger-sign.text"),m.rc),m.Cb(2),m.ic("ngIf",e.airGapTxs&&e.airGapTxs.length>1),m.Cb(1),m.ic("ngIf",e.airGapTxs),m.Cb(3),m.Ac(" ",m.ec(19,12,"ledger-sign.confirm_label")," "))},directives:[a.v,a.u,a.ib,a.j,a.f,a.g,a.gb,a.q,a.Q,o.o,a.r,a.i,a.p,o.n,n.o],pipes:[s.c,o.t,o.b,n.g,n.n],styles:[""]}),t})(),I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.Lb({type:t}),t.\u0275inj=m.Kb({imports:[[a.jb,o.c,c.a,s.b,l.a,n.e,r.j.forChild([{path:"",component:v}])]]}),t})()}}]);