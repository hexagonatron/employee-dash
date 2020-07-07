(this["webpackJsonpemployee-dash"]=this["webpackJsonpemployee-dash"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a.n(c),o=(a(13),a(1));a(14);var s=function(e){var t=e.label,a=e.change;return r.a.createElement("div",{className:"custom-switch"},r.a.createElement("input",{type:"checkbox",id:"switch",value:"",onChange:a}),r.a.createElement("label",{htmlFor:"switch"},t))};var i=function(e){var t=e.darkModeToggle;return r.a.createElement("nav",{className:"navbar justify-content-between"},r.a.createElement("div",{className:"navbar-content"},r.a.createElement("h1",null,r.a.createElement("i",{className:"fas fa-address-book"})," Employee Directory")),r.a.createElement("div",{className:"navbar-content"},r.a.createElement(s,{label:r.a.createElement("i",{className:"fas fa-moon"}),change:t})))},m=a(7),u=a(6),d=a.n(u),f=function(e){var t=e.updateFilter;return r.a.createElement("div",{className:"content"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search by name",onChange:function(e){t({name:e.target.value})}}))},E=function(e){var t=e.employee;return r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("img",{src:t.picture.thumbnail,alt:"".concat(t.name.first)})),r.a.createElement("td",null,t.name.first," ",t.name.last),r.a.createElement("td",null,t.dob.age),r.a.createElement("td",{className:"text-right"},t.location.country," ",r.a.createElement("img",{src:"https://www.countryflags.io/".concat(t.nat,"/flat/16.png"),alt:"flag"})))},h=function(e){var t=e.field,a=e.sortClickHandler,n=e.sortObj,c=n.field!==t?"fa fa-sort":"asc"===n.order?"fa fa-sort-up":"fa fa-sort-down";return r.a.createElement("i",{className:c,"aria-hidden":"true",onClick:a,"data-field":t})};var b=function(e){var t=e.employees,a=e.sortClickHandler,n=e.sortObj;return r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Avatar"),r.a.createElement("th",null,"Name",r.a.createElement(h,{field:"name",sortClickHandler:a,sortObj:n})),r.a.createElement("th",null,"Age",r.a.createElement(h,{field:"age",sortClickHandler:a,sortObj:n})),r.a.createElement("th",{className:"text-right"},"Country",r.a.createElement(h,{field:"country",sortClickHandler:a,sortObj:n})))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement(E,{employee:e,key:t})}))))},v=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({field:"name",order:"asc"}),s=Object(o.a)(l,2),i=s[0],u=s[1],E=Object(n.useState)({name:""}),h=Object(o.a)(E,2),v=h[0],g=h[1],p=Object(n.useState)([]),y=Object(o.a)(p,2),w=y[0],j=y[1];Object(n.useEffect)((function(){d()("https://randomuser.me/api?results=50").then((function(e){return e.json()})).then((function(e){console.log(e),c(e.results)}))}),[]),Object(n.useEffect)((function(){var e=Object(m.a)(a);e.length&&v.name&&(e=e.filter((function(e){return e.name.first.toLowerCase().includes(v.name.toLowerCase())})));var t={name:function(e,t){var a="".concat(e.name.first," ").concat(e.name.last).toLowerCase(),n="".concat(t.name.first," ").concat(t.name.last).toLowerCase();return a<n?-1:a>n?1:0},age:function(e,t){return e.dob.age-t.dob.age},country:function(e,t){return e.location.country<t.location.country?-1:e.location.country>t.location.country?1:0}};e.length&&i&&(e=e.sort((function(e,a){var n=t[i.field](e,a);return n="dsc"===i.order?-1*n:n}))),j(e)}),[a,i,v]);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"content"},r.a.createElement(f,{updateFilter:g}),r.a.createElement(b,{employees:w,sortClickHandler:function(e){var t=e.target.dataset.field;console.log(t),i.field===t&&"asc"===i.order?u({field:t,order:"dsc"}):u({field:t,order:"asc"})},sortObj:i})))};var g=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"page-wrapper ".concat(a?"dark-mode":"")},r.a.createElement("div",{className:"content-wrapper"},r.a.createElement(i,{darkModeToggle:function(e){console.log(e.target.checked),c(e.target.checked)}}),r.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.e8bf5ccd.chunk.js.map