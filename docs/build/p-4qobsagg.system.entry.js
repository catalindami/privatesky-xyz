System.register(["./p-24276ee4.system.js"],(function(e){"use strict";var t,s;return{setters:[function(e){t=e.r;s=e.h}],execute:function(){var r=e("enter_csb_name",function(){function e(e){t(this,e)}e.prototype.componentWillLoad=function(){if(!this.stepProperties){this.stepProperties={csbName:"",stepPhase:"csb-name"};this.onPropertiesChange(this.stepProperties)}};e.prototype.handleInputChange=function(e){this.stepProperties.csbName=e.target.value;this.onPropertiesChange(this.stepProperties)};e.prototype.render=function(){return s("div",{class:"content clearfix"},s("section",{role:"tabpanel",class:"body"},s("div",{class:"inner"},s("div",{class:"wizard-header"},s("h3",{class:"heading"},"Enter your Cloud safe box name")),s("div",{class:"form-row"},s("div",{class:"form-holder form-holder-2"},s("label",{htmlFor:"csb-name"},"Enter CSB Name"),s("input",{type:"text",name:"csb-name",id:"csb-name",class:"form-control",placeholder:"Enter a name for your cloud safe box",value:this.stepProperties.csbName,onKeyUp:this.handleInputChange.bind(this),required:true}))))))};return e}())}}}));