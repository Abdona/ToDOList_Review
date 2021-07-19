/* eslint-disable */
(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>o});var i=n(645),r=n.n(i)()((function(t){return t[1]}));r.push([t.id,'body {\n  background-color: #f4f5f7;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n#List {\n  background-color: white;\n  width: 100%;\n  max-width: 450px;\n  margin: 150px auto;\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\n}\n\n#TaskInput {\n  border: none;\n  padding: 22px;\n  width: 100%;\n  display: block;\n  height: 30px;\n  border-bottom: 1px solid #f0f0f0;\n}\n\n#TaskInput:focus {\n  outline: none;\n}\n\n.ListItem {\n  border-bottom: 1px solid #f0f0f0;\n  padding: 13px;\n}\n\n.ListItem img {\n  width: 20px;\n  height: 20px;\n  float: right;\n  opacity: 0.3;\n}\n\n.ListItem img:hover {\n  cursor: move;\n}\n\n.ListItem input {\n  float: left;\n  margin-right: 19px;\n}\n\n.ListItem input::after {\n  content: " ";\n  clear: right;\n}\n\n#taskcont {\n  display: inline;\n}\n\n.hint {\n  background: #fea;\n}\n\n.active {\n  background: #ffd4d4;\n}\n\n.Clear a {\n  margin: 0;\n  padding: 20px;\n  text-align: center;\n  text-decoration: none;\n  color: black;\n  display: block;\n}\n\n#taskcont textarea {\n  word-wrap: break-word;\n  overflow: hidden;\n  resize: none;\n  border: none;\n  height: 18px;\n}\n\n#taskcont textarea:focus {\n  outline: none;\n}\n\n#ListContainer {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.Clear {\n  margin: 0;\n  background-color: #f0f0f0;\n}\n\n#List-title {\n  border-bottom: 1px solid #f0f0f0;\n  padding: 2px;\n  margin-left: 2px;\n}\n\n#List-title p {\n  margin-left: 10px;\n}\n',""]);const o=r},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);i&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},379:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var o={},a=[],s=0;s<t.length;s++){var c=t[s],l=i.base?c[0]+i.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(e[p].references++,e[p].updater(f)):e.push({identifier:u,updater:r(f,i),references:1}),a.push(u)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var o=i(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<o.length;a++){var s=n(o[a]);e[s].references--}for(var c=i(t,r),l=0;l<o.length;l++){var d=n(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i=n.css,r=n.media,o=n.sourceMap;r?t.setAttribute("media",r):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,t)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},533:(t,e,n)=>{t.exports=n.p+"2b9d327dccb65150ac7f.svg"}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={id:i,exports:{}};return t[i](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})();var i={};(()=>{n.d(i,{D:()=>v});var t=n(379),e=n.n(t),r=n(795),o=n.n(r),a=n(569),s=n.n(a),c=n(565),l=n.n(c),d=n(216),u=n.n(d),p=n(589),f=n.n(p),h=n(426),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=u(),e()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;class m{constructor(t,e,n){this.description=t,this.status=e,this.id=n}}var b=n(533);const v=new class{constructor(t){this.TaskListCollection=t,this.Task1=[],this.length=0}addTask(t,e=!0){!0===e&&(this.length+=1,this.TaskListCollection.push(t));const n=document.createElement("li");n.setAttribute("id",t.id),n.setAttribute("class","ListItem");const i=document.createElement("textarea");i.setAttribute("maxlength","255"),i.setAttribute("contenteditable","true"),i.addEventListener("change",(()=>{!function(t){const e=document.getElementById(2*t.id);t.description=e.value,v.AddToStorage()}(t)})),i.innerHTML=t.description,i.setAttribute("id",2*t.id);const r=document.createElement("input");r.setAttribute("type","checkbox"),r.setAttribute("id",3*t.id),r.addEventListener("click",(()=>{!function(t){const e=document.getElementById(2*t.id);!1===t.status?(e.style.color="rgba(0, 0, 0, 0.45)",e.style.textDecoration="line-through"):(e.style.textDecoration="none",e.style.color="black"),t.status=!t.status,v.AddToStorage()}(t)}));const o=document.createElement("img");o.setAttribute("src",b);const a=document.createElement("div");a.setAttribute("id","taskcont"),document.getElementById("ListContainer").appendChild(n).appendChild(r),document.getElementById("ListContainer").appendChild(n).appendChild(a).appendChild(i),document.getElementById("ListContainer").appendChild(n).appendChild(o),function(){const t=document.getElementById("ListContainer").getElementsByTagName("li");let e=null;for(const n of t)n.draggable=!0,n.addEventListener("dragstart",(function(){e=this})),n.addEventListener("dragstart",(function(){e=this})),n.addEventListener("dragover",(t=>{t.preventDefault()})),n.addEventListener("drop",(function(n){if(n.preventDefault(),this!==e){let n=0,i=0;for(let r=0;r<t.length;r++)e===t[r]&&(n=r),this===t[r]&&(i=r);if(n<i){this.parentNode.insertBefore(e,this.nextSibling);const t=[],n=document.getElementById("ListContainer").getElementsByTagName("li");for(const e of n){const n=e.getElementsByTagName("div")[0].getElementsByTagName("textarea")[0].value,i=e.getElementsByTagName("input")[0].checked;t.push({description:n,status:i,id:e.id})}localStorage.setItem("library",JSON.stringify(t))}else{this.parentNode.insertBefore(e,this);const t=[],n=document.getElementById("ListContainer").getElementsByTagName("li");for(const e of n){const n=e.getElementsByTagName("div")[0].getElementsByTagName("textarea")[0].value,i=e.getElementsByTagName("input")[0].checked;t.push({description:n,status:i,id:e.id})}localStorage.setItem("library",JSON.stringify(t))}}}))}()}clearCompleted(){const t=this.TaskListCollection.filter((t=>!1===t.status));this.length=t.length,localStorage.setItem("length",JSON.stringify(this.length));for(const t in this.TaskListCollection)!0===this.TaskListCollection[t].status&&document.getElementById(this.TaskListCollection[t].id).remove();this.TaskListCollection=t,localStorage.setItem("library",JSON.stringify(this.TaskListCollection))}CheckSelectonref(t){const e=document.getElementById(2*t.id),n=document.getElementById(3*t.id);!0===t.status&&(n.checked=!0,e.style.textDecoration="line-through")}AddToStorage(){localStorage.setItem("length",JSON.stringify(this.length)),localStorage.setItem("library",JSON.stringify(this.TaskListCollection))}ShowTasks(){for(const t in this.TaskListCollection)this.length+=1,this.addTask(this.TaskListCollection[t],!1),this.CheckSelectonref(this.TaskListCollection[t])}}(JSON.parse(localStorage.getItem("library"))||[]);v.ShowTasks(),document.getElementById("clearall").onclick=function(){v.clearCompleted()},document.getElementById("TaskInput").addEventListener("change",(()=>{!function(){const t=document.getElementById("TaskInput"),e=Math.floor(1e3*Math.random()),n=new m(t.value,!1,e);t.value="",v.addTask(n),v.AddToStorage()}()}))})()})();