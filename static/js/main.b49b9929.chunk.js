(this["webpackJsonpj-web"]=this["webpackJsonpj-web"]||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),s=a.n(r),i=(a(16),a(1)),c=a(2),l=a(4),u=a(3),m=(a(6),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"top-bar-main"},o.a.createElement("div",{className:"top-bar-name"},"JOURNEY"),o.a.createElement("div",{className:"top-bar-caption"},"A light weight browser for us"))}}]),a}(o.a.Component)),g=a(10),h=a(5),p=function(e){return o.a.createElement("a",{href:e.url,className:"single-link-main"},e.name)},d=a(9),f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).clearTagInput=function(){document.getElementById("tagInput").value=""},n.searchButtonClick=function(){n.addToAllowedTags(n.state.tag),n.setState({tag:""}),n.clearTagInput()},n.handleKeyDown=function(e){"Enter"===e.key&&(n.addToAllowedTags(n.state.tag),n.setState({tag:""}),n.clearTagInput())},n.showLink=function(e){var t,a,o,r=n.state.allowedTags;if(0===r.length)return!0;for(t=0;t<r.length;t++){for(o=!1,a=0;a<e.length;a++)if(r[t]===e[a]){o=!0;break}if(!1===o)return!1}return!0},n.addToAllowedTags=function(e){if(""!==e){var t,a=!1;for(t=0;t<e.length;t++)if("a"<=e[t]&&e[t]<="z"||"A"<=e[t]&&e[t]<="Z"){a=!0;break}if(!1!==a){var o=n.state.allowedTags;n.setState({allowedTags:[].concat(Object(g.a)(o),[e])})}}},n.state={tag:"",allowedTags:[]},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState({tag:e.target.value})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"main-content"},o.a.createElement("div",{className:"input-link-main"},o.a.createElement("input",{id:"tagInput",type:"text",name:"tagInput",value:this.state.value,onChange:this.handleChange,className:"input-link",onKeyDown:this.handleKeyDown}),o.a.createElement("button",{type:"button",name:"search",onClick:this.searchButtonClick,className:"link-search-button"},"S")),o.a.createElement("div",{className:"show-tags"},this.state.allowedTags.map((function(e){return o.a.createElement("div",{key:e,className:"show-tag"},"#",e)}))),o.a.createElement("div",{className:"all-links"},d.map((function(t){return e.showLink(t.tags)?o.a.createElement(p,{key:t.url,url:t.url,name:t.name}):o.a.createElement("div",{key:t.url})}))))}}]),a}(o.a.Component),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={src:"https://journey-cp.github.io"},n}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"app-main"},o.a.createElement(m,null),o.a.createElement(f,null))}}]),a}(o.a.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/j-web",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/j-web","/service-worker.js");v?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(t,e)}))}}()},6:function(e,t,a){},9:function(e){e.exports=JSON.parse('[{"name":"journey","url":"https://journey-cp.github.io","tags":["journey","homepage","main"]},{"name":"harsha","url":"https://sharshach.github.io","tags":["personal","harsha","chilukuri"]},{"name":"sita","url":"https://saisitaram2000.github.io","tags":["personal","sita"]},{"name":"abhi","url":"https://abhirangana.github.io","tags":["abhi","personal"]},{"name":"simple chatapp","url":"https://simple--chat-application.herokuapp.com/","tags":["sita","chat","peer"]},{"name":"mail us(nitdgp only)","url":"mailto:journey@btech.nitdgp.ac.in","tags":["mail","contact","meet"]},{"name":"mail us","url":"mailto:journeynitdgp@gmail.com","tags":["mail","contact","meet"]},{"name":"mail us (DEV)","url":"mailto:hash@googlegroups.com","tags":["mail","contact","meet"]},{"name":"Drive Sem 5 CS","url":"https://drive.google.com/drive/folders/1uSkvWsjzkPrub6q8fQSILj_edUxjNVt8","tags":["drive","cs","j3","sem5","sem","acadamic","study"]},{"name":"Drive Sem 6 CS","url":"https://drive.google.com/drive/folders/1-idgPJJ1xVFNNSneGrQSnY-Kazb3omx_","tags":["drive","cs","j3","sem6","sem","acadamic","study"]},{"name":"Dice Game","url":"https://saisitaram2000.github.io/pig-game/","tags":["game","sita"]},{"name":"google group tech","url":"https://groups.google.com/a/btech.nitdgp.ac.in/g/journey","tags":["nit","google","group","journey","code","mail"]},{"name":"jobstocker","url":"https://jobstocker.web.app","tags":["job","intern","share","stocker","jobstocker"]},{"name":"Rock Paper Scissors","url":"https://sriramsasi03.github.io/RPS/","tags":["game","small","project","smallproject","sriram"]},{"name":"NOTES","url":"https://journey-cp.github.io/NOTES/","tags":["study","notes","learn","j10"]},{"name":"coding practice problems","url":"https://journey-cp.github.io/j10/","tags":["study","notes","learn","j10"]},{"name":"Coding Concepts","url":"https://journey-cp.github.io/LEARN/","tags":["study","notes","learn","j10"]},{"name":"Space X projects","url":"https://spacexmissions-v3.web.app/","tags":["sita","space","spacex","react","project"]},{"name":"Developers Profile","url":"https://developers-profiles.herokuapp.com/","tags":["vinay","react","express","mongodb","project","developer","share"]},{"name":"Qr Food Order","url":"https://journey-restaurant.herokuapp.com/","tags":["abhi","harsha","sita","react","express","mongodb","project"]}]')}},[[11,1,2]]]);
//# sourceMappingURL=main.b49b9929.chunk.js.map