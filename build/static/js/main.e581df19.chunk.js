(this.webpackJsonpfullstack2020=this.webpackJsonpfullstack2020||[]).push([[0],{16:function(e,n,t){e.exports=t(38)},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),u=t.n(o),c=(t(15),t(1)),l=t(2),i=t.n(l),m=function(){return i.a.get("/api/persons").then((function(e){return e.data}))},s=function(e){return i.a.post("/api/persons",e).then((function(e){return e.data}))},d=function(e,n){return i.a.put("".concat("/api/persons","/").concat(e),n).then((function(e){return e.data}))},f=function(e){return i.a.delete("".concat("/api/persons","/").concat(e)).then((function(e){return e.data}))},h=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)},p=(t(4),function(e){return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{onChange:e.handleChange}))}),w=function(e){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.addPersonDetails},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("p",null),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("p",null),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Add"))))},b=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),l=Object(c.a)(u,2),i=l[0],b=l[1],E=Object(a.useState)(""),v=Object(c.a)(E,2),g=v[0],C=v[1],L=Object(a.useState)(""),O=Object(c.a)(L,2),j=O[0],N=O[1],S=Object(a.useState)(null),T=Object(c.a)(S,2),k=T[0],y=T[1];Object(a.useEffect)((function(){m().then((function(e){o(e)})).catch((function(e){y(e.response.data.error),setTimeout((function(){y(null)}),5e3)}))}),[]);var D=function(e,n){var t=e.filter((function(e){return e.name.toLocaleLowerCase()===n.name.toLocaleLowerCase()}));d(t[0].id,n).then((function(t){o(e.map((function(e){return e.id!==t.id?e:t}))),b(""),C(""),y("Updated ".concat(n.name)),setTimeout((function(){y(null)}),5e3)})).catch((function(n){y(n.response.data.error),setTimeout((function(){y(null)}),5e3),o(e.filter((function(e){return e.id!==t[0].id})))}))},A=function(e){return r.a.createElement("div",null,r.a.createElement("ul",null,e.personsToShow.map((function(n,t){return r.a.createElement("li",{key:t},n.name," ",n.number," ",r.a.createElement("button",{onClick:function(){return P(e.personsToShow,n.id)}},"delete"))}))))},P=function(e,n){window.alert("Delete "+e.find((function(e){return e.id===n})).name+" with id ".concat(n," ?"));var t=e.filter((function(e){return e.id!==n}));f(n).then((function(e){b(""),C("")})).catch((function(e){y(e.response.data.error),setTimeout((function(){y(null)}),5e3)})),o(t)},x=""===j?t:t.filter((function(e){return-1!==e.name.toLocaleLowerCase().indexOf(j.toLocaleLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(h,{message:k}),r.a.createElement(p,{handleChange:function(e){N(e.target.value)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(w,{newName:i,newNumber:g,addPersonDetails:function(e){e.preventDefault();var n={name:i,number:g};t.find((function(e){return e.name.toLocaleLowerCase()===i.toLocaleLowerCase()}))?!0===window.confirm("".concat(i," is already added to phonebook, replace the old number with a new one?"))?(window.alert("time to update record"),D(t,n)):window.alert("doesn't want to update"):(o(t.concat(n)),s(n).then((function(e){o(t.concat(e)),b(""),C(""),y("Added ".concat(i)),setTimeout((function(){y(null)}),5e3)})).catch((function(e){y(e.response.data.error),setTimeout((function(){y(null)}),5e3),o(t)})))},handleNameChange:function(e){b(e.target.value)},handleNumberChange:function(e){C(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(A,{personsToShow:x}))};u.a.render(r.a.createElement(b,null),document.getElementById("root"))},4:function(e,n,t){}},[[16,1,2]]]);
//# sourceMappingURL=main.e581df19.chunk.js.map