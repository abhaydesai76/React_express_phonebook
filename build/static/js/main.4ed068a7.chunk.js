(this.webpackJsonpfullstack2020=this.webpackJsonpfullstack2020||[]).push([[0],{11:function(e,t,n){},25:function(e,t,n){e.exports=n(51)},51:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(23),c=n.n(r),u=(n(8),n(9),n(24),n(5)),o=function(e){var t=e.message;return null===t?null:l.a.createElement("div",{className:"error"},t)},i=(l.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),r=Object(u.a)(n,2),c=r[0],o=r[1],i={display:c?"none":""},m={display:c?"":"none"},d=function(){o(!c)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:d}})),l.a.createElement("div",null,l.a.createElement("div",{style:i},l.a.createElement("button",{onClick:d},e.buttonLabel)),l.a.createElement("div",{style:m,className:"togglableContent"},e.children,l.a.createElement("button",{onClick:d},"cancel")))})),n(6)),m=n.n(i),d=(n(11),n(54)),s=n(53),f=n(55),E=function(){return m.a.get("/api/persons").then((function(e){return e.data}))},b=function(e){return m.a.post("/api/persons",e).then((function(e){return e.data}))},h=function(e,t){return m.a.put("".concat("/api/persons","/").concat(e),t).then((function(e){return e.data}))},p=function(e){return m.a.delete("".concat("/api/persons","/").concat(e)).then((function(e){return e.data}))},w=function(e){return l.a.createElement("div",null,"filter shown with ",l.a.createElement("input",{onChange:e.handleChange}))},v=function(e){return l.a.createElement("div",null,l.a.createElement(d.a,{onSubmit:e.addPersonDetails},l.a.createElement(s.a,{striped:!0,bordered:!0},l.a.createElement("thead",null),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(d.a.Text,{muted:!0},l.a.createElement("b",null,"Name :"))),l.a.createElement("td",null,l.a.createElement(d.a.Control,{value:e.newName,onChange:e.handleNameChange}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(d.a.Text,{muted:!0},l.a.createElement("b",null,"Number :"))),l.a.createElement("td",null,l.a.createElement(d.a.Control,{value:e.newNumber,onChange:e.handleNumberChange}))),l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement("div",null,l.a.createElement(f.a,{type:"submit"},"Add"))))))))},C=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(u.a)(c,2),m=i[0],d=i[1],C=Object(a.useState)(""),g=Object(u.a)(C,2),N=g[0],O=g[1],j=Object(a.useState)(""),L=Object(u.a)(j,2),y=L[0],T=L[1],k=Object(a.useState)(null),S=Object(u.a)(k,2),D=S[0],x=S[1];Object(a.useEffect)((function(){E().then((function(e){r(e)})).catch((function(e){x(e.response.data.error),setTimeout((function(){x(null)}),5e3)}))}),[]);var A=function(e,t){var n=e.filter((function(e){return e.name.toLocaleLowerCase()===t.name.toLocaleLowerCase()}));h(n[0].id,t).then((function(n){r(e.map((function(e){return e.id!==n.id?e:n}))),d(""),O(""),x("Updated ".concat(t.name)),setTimeout((function(){x(null)}),5e3)})).catch((function(t){x(t.response.data.error),setTimeout((function(){x(null)}),5e3),r(e.filter((function(e){return e.id!==n[0].id})))}))},P=function(e){return l.a.createElement("div",null,l.a.createElement(s.a,{striped:!0,bordered:!0},l.a.createElement("thead",null),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Name")),l.a.createElement("td",null,l.a.createElement("b",null,"Number")),l.a.createElement("td",null,l.a.createElement("b",null,"Action"))),e.personsToShow.map((function(t,n){return l.a.createElement("tr",{key:n},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.number),l.a.createElement("td",null,l.a.createElement(f.a,{onClick:function(){return I(e.personsToShow,t.id)}},"Delete")))})))))},I=function(e,t){window.alert("Delete "+e.find((function(e){return e.id===t})).name+" with id ".concat(t," ?"));var n=e.filter((function(e){return e.id!==t}));p(t).then((function(e){d(""),O("")})).catch((function(e){x(e.response.data.error),setTimeout((function(){x(null)}),5e3)})),r(n)},J=""===y?n:n.filter((function(e){return-1!==e.name.toLocaleLowerCase().indexOf(y.toLocaleLowerCase())}));return l.a.createElement("div",null,l.a.createElement(s.a,{striped:!0,bordered:!0},l.a.createElement("thead",null,l.a.createElement("h2",null,"Phonebook")),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement(o,{message:D})),l.a.createElement("tr",null,l.a.createElement(w,{handleChange:function(e){T(e.target.value)}})),l.a.createElement("tr",null,l.a.createElement("h3",null,"Add a new person & number"),l.a.createElement(v,{newName:m,newNumber:N,addPersonDetails:function(e){e.preventDefault();var t={name:m,number:N};n.find((function(e){return e.name.toLocaleLowerCase()===m.toLocaleLowerCase()}))?!0===window.confirm("".concat(m," is already added to phonebook, replace the old number with a new one?"))?(window.alert("time to update record"),A(n,t)):window.alert("doesn't want to update"):(r(n.concat(t)),b(t).then((function(e){r(n.concat(e)),d(""),O(""),x("Added ".concat(m)),setTimeout((function(){x(null)}),5e3)})).catch((function(e){x(e.response.data.error),setTimeout((function(){x(null)}),5e3),r(n)})))},handleNameChange:function(e){d(e.target.value)},handleNumberChange:function(e){O(e.target.value)}})),l.a.createElement("tr",null,l.a.createElement("h3",null,"Numbers"),l.a.createElement(P,{personsToShow:J})))))};c.a.render(l.a.createElement(C,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.4ed068a7.chunk.js.map