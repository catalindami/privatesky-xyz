System.register(["./p-52cd94a3.system.js","./p-c62e9b99.system.js","./p-9c9f006b.system.js","./p-5f414978.system.js"],function(t){"use strict";var e,o,r,n,s;return{setters:[function(t){e=t.r;o=t.c;r=t.h;n=t.g},function(){},function(t){s=t.i},function(){}],execute:function(){var i=function(){function t(){this.controllers={};this.pendingControllerRequests={}}t.prototype.registerController=function(t,e){this.controllers[t]=e;this._fullFillPreviousRequests(t)};t.prototype._fullFillPreviousRequests=function(t){if(this.pendingControllerRequests[t]){while(this.pendingControllerRequests[t].length){var e=this.pendingControllerRequests[t].pop();e.resolve(this.controllers[t])}}};t.prototype.getController=function(t){var e=this;var o=new Promise(function(o,r){if(e.controllers[t]){o(e.controllers[t])}else{if(!e.pendingControllerRequests[t]){e.pendingControllerRequests[t]=[]}e.pendingControllerRequests[t].push({resolve:o,reject:r})}});return o};return t}();var l=new i;var u=t("psk_app_root",function(){function t(t){var r=this;e(this,t);this.mobileLayout=false;this.componentCode="";this.hasSlot=false;if(this.controller){var n=this.controller;l.getController(n).then(function(t){new t(r.host)})}else{console.log("No controller added to app-root")}this.routeChangedEvent=o(this,"routeChanged",7);this.cfReadyEvent=o(this,"controllerFactoryIsReady",7)}t.prototype.componentWillLoad=function(){this.cfReadyEvent.emit(l);var t=this.host.innerHTML;t=t.replace(/\s/g,"");if(t.length){this.hasSlot=true}};t.prototype.render=function(){var t="psk-default-renderer";var e=r(t,{historyType:this.historyType});return this.hasSlot?r("slot",null):e};Object.defineProperty(t.prototype,"host",{get:function(){return n(this)},enumerable:true,configurable:true});return t}());s(u)}}});