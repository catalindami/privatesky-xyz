System.register(["./p-0b2166d8.system.js"],(function(e){"use strict";var o;return{setters:[function(e){o=e.g}],execute:function(){e("C",t);function t(){return function(e){var t=e.componentWillLoad;e.componentWillLoad=function(){var e=this;var n=o(this);if(!n||!n.shadowRoot){return t&&t.call(this)}else{if(typeof globalConfig!=="undefined"&&typeof globalConfig.theme==="string"){var l=n.tagName.toLowerCase();return new Promise((function(o){console.log(l);var r="/themes/"+globalConfig.theme+"/components/"+l+"/"+l+".css";var s=document.createElement("link");s.setAttribute("rel","stylesheet");s.setAttribute("href",r);n.shadowRoot.prepend(s);var i=false;s.onload=function(){console.log(l+" loaded");i=true;o(t&&t.call(e))};s.onerror=function(){console.log("File "+r+" was not found");i=true;o(t&&t.call(e))};setTimeout((function(){if(i===false){o(t&&t.call(e))}}),100)}))}else{console.error("Theme or globalConfig is not defind!")}}}}}}}}));