(this.webpackJsonpfullstack2020=this.webpackJsonpfullstack2020||[]).push([[0],{16:function(t,n,e){t.exports=e(38)},38:function(t,n,e){"use strict";e.r(n);var a=e(0),o=e.n(a),r=e(14),c=e.n(r),u=e(15),i=e(1),l=e(2),f=e.n(l),m=function(t){var n=t.note,e=t.toggleImportance,a=n.important?"make not important":"make important";return o.a.createElement("li",null,n.content,o.a.createElement("button",{onClick:e},a))},p=function(){return f.a.get("/api/notes").then((function(t){return t.data}))},s=function(t){return f.a.post("/api/notes",t).then((function(t){return t.data}))},d=function(t,n){return f.a.put("".concat("/api/notes","/").concat(t),n).then((function(t){return t.data}))},h=function(){var t=Object(a.useState)([]),n=Object(i.a)(t,2),e=n[0],r=n[1],c=Object(a.useState)(""),l=Object(i.a)(c,2),f=l[0],h=l[1],b=Object(a.useState)(!0),E=Object(i.a)(b,2),v=E[0],g=E[1];Object(a.useEffect)((function(){p().then((function(t){r(t)}))}),[]);var k=v?e:e.filter((function(t){return t.important}));return o.a.createElement("div",null,o.a.createElement("h1",null,"Notes"),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return g(!v)}},"show ",v?"important":"all")),o.a.createElement("ul",null,k.map((function(t,n){return o.a.createElement(m,{key:n,note:t,toggleImportance:function(){return function(t){"http://localhost:3001/notes/".concat(t);var n=e.find((function(n){return n.id===t})),a=Object(u.a)({},n,{important:!n.important});d(t,a).then((function(n){r(e.map((function(e){return e.id!==t?e:n})))})).catch((function(a){alert("the note '".concat(n.content,"' was already deleted from server")),r(e.filter((function(n){return n.id!==t})))}))}(t.id)}})}))),o.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n={content:f,date:(new Date).toISOString(),important:Math.random()>.5,id:e.length+1};s(n).then((function(t){r(e.concat(t)),h("")}))}},o.a.createElement("input",{value:f,onChange:function(t){h(t.target.value)}}),o.a.createElement("button",{type:"submit"},"save")))};e(4);c.a.render(o.a.createElement(h,null),document.getElementById("root"))},4:function(t,n,e){}},[[16,1,2]]]);
//# sourceMappingURL=main.cbd2d28c.chunk.js.map