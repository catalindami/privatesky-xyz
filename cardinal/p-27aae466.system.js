System.register(["./p-226ad382.system.js","./p-aeccb4b3.system.js","./p-628cfddf.system.js"],function(e){"use strict";var n,t,i,r,s,o;return{setters:[function(e){n=e.g},function(e){t=e.b;i=e.c;r=e.d;s=e.e},function(e){o=e.c}],execute:function(){e("T",c);function c(e){return function(c,a){var f=c.connectedCallback,l=c.render;var u="psk-send-events";var v=t;var p=i;var d="definedEvents";c.connectedCallback=function(){var t=this;var i=n(t);if(e.controllerInteraction){p=r;d="definedControllers";v=s;u="psk-send-controllers"}if(i.hasAttribute(p)){if(!t.componentDefinitions){t.componentDefinitions={};t.componentDefinitions[d]=[Object.assign({},e,{eventName:String(a)})];return f&&f.call(t)}var o=t.componentDefinitions;var c=Object.assign({},e,{eventName:String(a)});if(o&&o.hasOwnProperty(v)){var l=o[v].slice();l.push(c);o[v]=l.slice()}else{o[v]=[c]}t.componentDefinitions=Object.assign({},o)}return f&&f.call(t)};c.render=function(){var e=this;if(!e.componentDefinitions||!(e.componentDefinitions&&e.componentDefinitions[v])){return l&&l.call(e)}var n=e.componentDefinitions[v];if(n){n=n.reverse()}o(u,{composed:true,bubbles:true,cancelable:true,detail:n},true)}}}}}});