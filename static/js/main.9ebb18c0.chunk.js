(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(8),i=a.n(s),o=(a(14),a(1)),c=a(6),l=a(2);a(15),a(5);var u=function(t){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Kanban"),!t.isOpenCreateTaskForm&&r.a.createElement("button",{className:"btn btn-primary",onClick:t.openCreateTaskForm},"Create Task"),t.isOpenCreateTaskForm&&r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Enter task name:"),r.a.createElement("input",{type:"text",className:"form-control",value:t.taskInput,onChange:t.onTaskChange}),r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Enter priority"),r.a.createElement("input",{type:"text",className:"form-control",value:t.priorityInput,onChange:t.onPriorityChange})),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:t.taskSubmit,disabled:!t.isActiveButtonTaskCreate},"Submit"),r.a.createElement("button",{className:"btn btn-secondary",onClick:t.taskReset},"Cancel")))};var m=function(t){return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group list-group-horizontal"},t.statuses.map((function(e,a){return 0===a?r.a.createElement("li",{className:"list-group-item",key:e.name},r.a.createElement("div",{className:"col-sm"},e.name,r.a.createElement("ul",{className:"list-group"},t.tasks.filter((function(t){return t.status===e.name})).sort((function(t,e){return t.priority-e.priority})).map((function(e){return r.a.createElement("li",{key:e.id,className:"list-group-item"},"Task: ",e.name," Priority: ",e.priority,r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return t.onStatusChangeRight(e.id)}},"\u25b6\ufe0f"))}))))):a===t.statuses.length-1?r.a.createElement("li",{className:"list-group-item",key:e.name},r.a.createElement("div",{className:"col-sm"},e.name,r.a.createElement("ul",{className:"list-group"},t.tasks.filter((function(t){return t.status===e.name})).sort((function(t,e){return t.priority-e.priority})).map((function(e){return r.a.createElement("li",{key:e.id,className:"list-group-item"},"Task: ",e.name," Priority: ",e.priority,r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return t.onStatusChangeLeft(e.id)}},"\u25c0\ufe0f"))}))))):r.a.createElement("li",{className:"list-group-item",key:e.name},r.a.createElement("div",{className:"col-sm"},e.name,r.a.createElement("ul",{className:"list-group"},t.tasks.filter((function(t){return t.status===e.name})).sort((function(t,e){return t.priority-e.priority})).map((function(e){return r.a.createElement("li",{key:e.id,className:"list-group-item"},"Task: ",e.name," Priority: ",e.priority,r.a.createElement("br",null),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){return t.onStatusChangeLeft(e.id)}},"\u25c0\ufe0f"),r.a.createElement("button",{onClick:function(){return t.onStatusChangeRight(e.id)}},"\u25b6\ufe0f")))})))))})))))};var E=function(){var t=[{id:1,name:"Create F1",priority:9,status:"TODO"},{id:2,name:"Edit F2",priority:2,status:"REVIEW"},{id:3,name:"Remove F3",priority:7,status:"DONE"},{id:4,name:"Create F4",priority:7,status:"IN PROGRESS"},{id:5,name:"Edit F5",priority:10,status:"TODO"}],e=Object(n.useState)(!1),a=Object(l.a)(e,2),s=a[0],i=a[1],E=Object(n.useState)(!1),p=Object(l.a)(E,2),b=p[0],O=p[1],d=Object(n.useState)(),f=Object(l.a)(d,2),k=f[0],g=f[1],y=Object(n.useState)(""),h=Object(l.a)(y,2),N=h[0],v=h[1],C=Object(n.useState)(t),S=Object(l.a)(C,2),j=S[0],R=S[1],I=function(){g(""),v(""),i(!1),O(!1)};return r.a.createElement("div",{className:"container"},r.a.createElement(u,{openCreateTaskForm:function(){i(!0)},onTaskChange:function(t){t.target.value.length,g(t.target.value)},taskSubmit:function(e){var a=[].concat(t);a.push({id:Math.random(),name:k,priority:N,status:"TODO"}),R(a),I()},taskReset:I,isOpenCreateTaskForm:s,taskInput:k,isActiveButtonTaskCreate:b,onPriorityChange:function(t){O(t.target.value.length>=1),v(t.target.value)},priorityInput:N}),r.a.createElement(m,{tasks:j,statuses:[{name:"TODO"},{name:"IN PROGRESS"},{name:"REVIEW"},{name:"DONE"}],onStatusChangeRight:function(t){var e=Object(c.a)(j).map((function(e){return e.id===t&&"TODO"===e.status?Object(o.a)(Object(o.a)({},e),{},{status:"IN PROGRESS"}):e.id===t&&"IN PROGRESS"===e.status?Object(o.a)(Object(o.a)({},e),{},{status:"REVIEW"}):e.id===t&&"REVIEW"===e.status?Object(o.a)(Object(o.a)({},e),{},{status:"DONE"}):e}));R(e)},onStatusChangeLeft:function(t){var e=Object(c.a)(j).map((function(e){return e.id===t&&"DONE"===e.status?Object(o.a)(Object(o.a)({},e),{},{status:"REVIEW"}):e.id===t&&"REVIEW"===e.status?Object(o.a)(Object(o.a)({},e),{},{status:"IN PROGRESS"}):e.id===t&&"IN PROGRESS"===e.status?Object(o.a)(Object(o.a)({},e),{},{status:"TODO"}):e}));R(e)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},5:function(t,e,a){},9:function(t,e,a){t.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.9ebb18c0.chunk.js.map