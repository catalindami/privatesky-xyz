import{r as t,h as s}from"./p-2972acc2.js";import{C as e}from"./p-a863d93b.js";const o=class{constructor(s){t(this,s),this.buttonClass="btn btn-primary",this.disabled=!1}render(){return s("button",{onClick:()=>{this.eventEmitter.emit(this.eventData)},class:this.buttonClass,disabled:this.disabled},s("slot",{name:"button_content"}),this.label?this.label:null)}};!function(t,s,e,o){var n,i=arguments.length,c=i<3?s:null===o?o=Object.getOwnPropertyDescriptor(s,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,s,e,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(c=(i<3?n(c):i>3?n(s,e,c):n(s,e))||c);i>3&&c&&Object.defineProperty(s,e,c)}([e()],o.prototype,"label",void 0);export{o as psk_button};