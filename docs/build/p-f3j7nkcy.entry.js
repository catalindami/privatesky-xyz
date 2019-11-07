import{r as e,h as t}from"./p-2972acc2.js";import{C as i}from"./p-a863d93b.js";import"./p-c662d4c5.js";import"./p-6b201bb2.js";import{T as o}from"./p-f4b07de4.js";var a=function(e,t,i,o){var a,l=arguments.length,s=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(l<3?a(s):l>3?a(t,i,s):a(t,i))||s);return l>3&&s&&Object.defineProperty(t,i,s),s};const l=["Bytes","KB","MB","GB","TB"],s=class{constructor(t){e(this,t),this.files=[],this.removeFileFromList=null}static bytesToSize(e){if(0==e)return"0 Byte";let t=parseInt(String(Math.floor(Math.log(e)/Math.log(1024))));return Math.round(e/Math.pow(1024,t))+" "+l[t]}render(){return this.files&&0!==this.files.length?this.files.map((e,i)=>{let o=null;switch(e.name.substr(e.name.lastIndexOf(".")+1)){case"pdf":o="fa-file-pdf-o";break;case"xls":o="fa-file-excel-o";break;case"doc":o="fa-file-word-o";break;case"jpg":case"png":o="fa-file-picture-o";break;default:o="fa-file-o"}return t("button",{type:"button",class:"btn btn-primary mr-2 mt-2"},t("span",{class:`icon mr-1 fa ${o}`}),e.name,t("span",{class:"badge badge-light ml-1"},s.bytesToSize(e.size)),null!==this.removeFileFromList&&t("span",{class:"fa fa-remove fa-2x pull-right",onClick:e=>{e.preventDefault(),e.stopImmediatePropagation(),this.removeFileFromList(i)}}))}):t("h5",null,"No attachments available!")}};a([i(),o({description:"This parameter holds the files that can be downloaded. They can be downloaded one by one by clicking on the desired file, or all at the same time.",specialNote:"WgFile is a custom type. Inside it, the following information can be stored:\n\t\t\tname of the file,\n\t\t\tsize of the file,\n\t\t\ttype of the file (by extension),\n\t\t\t? content of the file",isMandatory:!0,propertyType:"array of WgFile items (WgFile[])"})],s.prototype,"files",void 0),a([o({description:"If this property is given to the component, then a red X will be displayed on the right of each file card giving the possibility to remove the file (this functionality should be implemented by the programmer providing him the possibility to have custom behavior before the deletion of the file).",specialNote:"The function will receive one parameter, the index of the file in the WgFile array.",isMandatory:!1,propertyType:"Function",defaultValue:"null"})],s.prototype,"removeFileFromList",void 0);export{s as psk_attachments_list};