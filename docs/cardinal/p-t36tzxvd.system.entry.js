System.register(["./p-0b2166d8.system.js","./p-4c48f288.system.js","./p-9f6f8884.system.js","./p-8abcb78c.system.js"],(function(t){"use strict";var e,o,n,r;return{setters:[function(t){e=t.r;o=t.h;n=t.g},function(){},function(t){r=t.i},function(){}],execute:function(){var s=t("github_pages_router",function(){function t(t){e(this,t);this.routes=null}t.prototype.componentWillLoad=function(){var t={};var e=function(o){o.forEach((function(o){if(o.children){e(o.children)}else{var n=o.path,r=o.component,s=o.componentProps;t[n]={component:r,componentProps:s}}}));return t};this.routes=e(this.pages)};t.prototype.locationChanged=function(t){this.currentRoute=t};t.prototype.render=function(){console.log(this.routes,this.currentRoute.search);if(this.routes[this.currentRoute.search]){var t=this.routes[this.currentRoute.search].component;console.log(t,this.routes[this.currentRoute.search].componentProps.pageUrl);return o("stencil-route",{component:this.routes[this.currentRoute.search].component,componentProps:this.routes[this.currentRoute.search].componentProps})}};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["locationChanged"]}},enumerable:true,configurable:true});return t}());r(s)}}}));