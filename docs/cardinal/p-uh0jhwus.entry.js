import{r as t,h as s}from"./p-a1b3783e.js";const l=class{constructor(s){t(this,s),this.title="",this.decoratorControllers=[]}receivedControllersDescription(t){const s=t.detail;t.stopImmediatePropagation(),s&&s.length>0&&(this.decoratorControllers=JSON.parse(JSON.stringify(s)))}render(){let t=this.decoratorControllers.map(t=>{const l=`Required : ${t.controllerInteraction.required}`;return s("psk-hoc",{title:t.eventName},s("p",{class:"subtitle"},s("i",null,`${t.eventName}: CustomEvent`)),s("p",{class:"subtitle"},s("b",null,l)),s("p",null,t.description),t.specialNote?s("p",null,s("b",null,"Note: ",t.specialNote)):null)});return s("psk-chapter",{title:this.title,id:this.title.replace(/( |:|\/|\.)/g,"-").toLowerCase()},t)}};export{l as psk_controller_descriptor};