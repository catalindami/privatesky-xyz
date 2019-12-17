System.register(["./p-226ad382.system.js","./p-aeccb4b3.system.js","./p-628cfddf.system.js","./p-10cd4a4b.system.js","./p-7db317d0.system.js","./p-9e7e5912.system.js"],function(t){"use strict";var e,n,r,o,l,i,s;return{setters:[function(t){e=t.r;n=t.h;r=t.g},function(){},function(t){o=t.c},function(t){l=t.T},function(t){i=t.C},function(t){s=t.C}],execute:function(){var a=undefined&&undefined.__decorate||function(t,e,n,r){var o=arguments.length,l=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")l=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)if(i=t[s])l=(o<3?i(l):o>3?i(e,n,l):i(e,n))||l;return o>3&&l&&Object.defineProperty(e,n,l),l};var c=t("psk_button",function(){function t(t){e(this,t);this.label=null;this.buttonClass="btn btn-primary";this.eventName=null;this.eventData=null;this.disabled=false}t.prototype.render=function(){var t=this;return n("button",{onClick:function(e){if(t.eventName){e.preventDefault();e.stopImmediatePropagation();o(t.eventName,{bubbles:true,composed:true,cancelable:true,detail:t.eventData},true)}},class:this.buttonClass,disabled:this.disabled},this.label&&this.label,n("slot",null))};return t}());a([i()],c.prototype,"label",void 0);var u=undefined&&undefined.__decorate||function(t,e,n,r){var o=arguments.length,l=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")l=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)if(i=t[s])l=(o<3?i(l):o>3?i(e,n,l):i(e,n))||l;return o>3&&l&&Object.defineProperty(e,n,l),l};var p=t("psk_container",function(){function t(t){var n=this;e(this,t);this.parentHost=null;var r=this.controllerName?this.controllerName:"Controller";s.getController(r).then(function(t){if(n.parentHost){n.controller=new t(n.parentHost);return}n.controller=new t(n._host)})}t.prototype.render=function(){return[n("slot",null),this.htmlFilePath&&n("psk-page-loader",{pageUrl:this.htmlFilePath}),this.controller&&this.controllerScript&&this.controller.executeScript(this.controller,this.controllerScript)]};t.prototype.componentWillLoad=function(){if(this.parentHost){this.__getInnerController.call(this,this.parentHost)}else{this.__getInnerController.call(this,this._host)}};t.prototype.__getInnerController=function(t){var e=t.querySelector("script");if(e!==null){this.controllerScript=e.innerHTML;e.innerHTML=""}};Object.defineProperty(t.prototype,"_host",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());u([l({isMandatory:false,description:["This property is a string that will permit the developer to choose his own controller.","If no value is sent then the null default value will be taken and the component will use the basic Controller."],propertyType:"string",defaultValue:"null"})],p.prototype,"controllerName",void 0);u([l({description:["This property is the page url (html) that will be passed to the psk-page-loader component","This component will sent a get request to that url in order to get the content of that url."],isMandatory:false,propertyType:"string",defaultValue:"null"})],p.prototype,"htmlFilePath",void 0)}}});