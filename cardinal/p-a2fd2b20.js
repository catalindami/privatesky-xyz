import{g as e}from"./p-bd5842d7.js";import{D as t,a as r,c as n}from"./p-20ed7f93.js";function s(s){return function(i,o){const{connectedCallback:c,render:p}=i;i.connectedCallback=function(){let n=this;if(e(n).hasAttribute(t)){if(!n.componentDefinitions)return n.componentDefinitions={definedProperties:[Object.assign({},s,{propertyName:String(o)})]},c&&c.call(n);let e=n.componentDefinitions;const t=Object.assign({},s,{propertyName:String(o)});if(e&&e.hasOwnProperty(r)){let n=[...e[r]];n.push(t),e[r]=[...n]}else e[r]=[t];n.componentDefinitions=Object.assign({},e)}return c&&c.call(n)},i.render=function(){if(!this.componentDefinitions||!this.componentDefinitions||!this.componentDefinitions[r])return p&&p.call(this);let e=this.componentDefinitions[r];e&&(e=e.reverse()),n("psk-send-props",{composed:!0,bubbles:!0,cancelable:!0,detail:e},!0)}}}export{s as T};