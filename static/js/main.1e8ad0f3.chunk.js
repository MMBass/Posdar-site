(this["webpackJsonpposdar.site"]=this["webpackJsonpposdar.site"]||[]).push([[0],{41:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},69:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(32),r=n.n(s),i=(n(41),n(4)),o=n(33),j=n.n(o).a.create({baseURL:"https://posdar.herokuapp.com",headers:{"X-Custom-Header":"foobar"}}),u=n(17),l=n(3),d=(n(60),n(61),n(62),n(0));var b=function(){return Object(d.jsxs)("nav",{id:"Nav",children:[Object(d.jsx)(u.b,{to:"/",className:"links",children:"Add Task"}),Object(d.jsx)(u.b,{to:"/list",className:"links",children:"Tasks List"})]})};var O=function(){return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h1",{children:"Posdar"}),Object(d.jsx)(b,{})]})},h=(n(69),Object(c.createContext)(["darkgray",""]));var x=function(){var e=Object(c.useContext)(h),t=e.message,n=e.setMessage;function a(){n(["darkgray",""])}return Object(c.useEffect)((function(){setTimeout((function(){a()}),3e3)})),t[1].length<1?null:Object(d.jsxs)("div",{id:"Banner",style:{backgroundColor:t[0]},children:[Object(d.jsx)("strong",{onClick:function(){return a()},children:"X"}),Object(d.jsx)("p",{children:t[1]})]})},f=n(9),p=n.n(f),m=n(11),g=n(14),v=n(12),k=n(36),C=n(15),S=n.n(C);n(21),n(89);var w=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(i.a)(s,2),o=r[0],u=r[1],l=Object(c.useState)([""]),b=Object(i.a)(l,2),O=b[0],x=b[1],f=Object(c.useState)(!1),C=Object(i.a)(f,2),w=C[0],y=C[1],T=Object(c.useState)(!1),N=Object(i.a)(T,2),L=N[0],E=N[1],F=Object(c.useContext)(h),M=(F.message,F.setMessage),A=function(e){a(Object(v.a)(Object(v.a)({},n),{},Object(g.a)({},e.target.name,e.target.value)))},B=function(){var e=Object(m.a)(p.a.mark((function e(t){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),E(!0),y(!0),e.next=5,j.post("/register",n,{headers:{"x-api-key":n.apiKey,"user-name":n.userName}}).catch((function(e){M(["#ff5e5e","Something went wrong"])}));case 5:(c=e.sent)&&(I(),200===c.status?M(["#883997",c.data.message]):M(["darkgray",c.data.message])),y(!1),E(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){Array.from(document.querySelectorAll("#saveTasksForm input")).forEach((function(e){return e.value=""})),a([])};return Object(d.jsxs)("form",{id:"saveTasksForm",onSubmit:B,children:[Object(d.jsx)("h2",{children:"Add task"}),Object(d.jsx)("input",{name:"userName",placeholder:"User name",onChange:A,required:!0}),Object(d.jsx)("input",{name:"group",placeholder:"Group ID",onChange:A,required:!0}),Object(d.jsx)("input",{name:"apiKey",placeholder:"Api key",onChange:A,required:!0}),Object(d.jsx)("input",{name:"email",placeholder:"Email",onChange:A,required:!0}),Object(d.jsx)("input",{name:"time",placeholder:"Time between requests",onChange:A,disabled:!0}),Object(d.jsx)("h4",{children:"What to look for?"}),Object(d.jsxs)("div",{id:"add-text-div",children:[Object(d.jsx)("p",{children:" Add another text "}),Object(d.jsx)("button",{type:"button",onClick:function(){x([].concat(Object(k.a)(O),[""]))},children:"+"})]}),Object(d.jsx)("p",{id:"must",children:"* accepts letters or numbers"}),O.map((function(e,t){return Object(d.jsx)("input",{name:"text"+(t+1),placeholder:"Text "+(t+1),onChange:function(e){return function(e,t){var c=o;c[t]=e.target.value,u(c),a(Object(v.a)(Object(v.a)({},n),{},{text:o}))}(e,t)}},t)})),Object(d.jsx)("br",{}),Object(d.jsxs)("button",{type:"submit",id:"submitButton",disabled:L,children:[Object(d.jsx)(S.a,{visible:w,type:"TailSpin",color:"#000000",height:20,width:20,timeout:3e3,style:{display:"inline",marginRight:"12px"}}),"Save"]})]})};n(90);var y=function(e){var t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(!1),o=Object(i.a)(r,2),u=o[0],l=o[1],b=Object(c.useState)(!1),O=Object(i.a)(b,2),x=O[0],f=O[1],k=Object(c.useContext)(h),C=(k.message,k.setMessage),w=function(e){s(Object(v.a)(Object(v.a)({},a),{},Object(g.a)({},e.target.name,e.target.value)))},y=function(){var t=Object(m.a)(p.a.mark((function t(n){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),n.preventDefault(),t.next=4,j.get("/register",{headers:a}).catch((function(e){console.log(e),C(["#ff5e5e","Something went wrong"])}));case 4:(c=t.sent)&&(e.setFatherTasks(c.data.tasks),c.headers["access-token"]&&window.localStorage.setItem("at",c.headers["access-token"]),l(!0)),f(!1);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return u?null:Object(d.jsxs)("form",{id:"getTasksForm",onSubmit:y,children:[Object(d.jsx)("h4",{children:"*You must be connected to see the your tasks"}),Object(d.jsx)("input",{name:"user-name",placeholder:"User name",onChange:w}),Object(d.jsx)("input",{name:"x-api-key",placeholder:"Api key",onChange:w}),Object(d.jsx)("br",{}),Object(d.jsxs)("button",{type:"submit",id:"getButton",children:[Object(d.jsx)(S.a,{visible:x,type:"TailSpin",color:"#000000",height:20,width:20,timeout:3e3,style:{display:"inline",marginRight:"12px"}}),"Get"]})]})},T=(n(91),Object(c.createContext)(!1));var N=function(e){var t=Object(c.useContext)(T),n=t.LoaderC,a=t.setLoaderC;return Object(d.jsx)("div",{className:"TaskCard",children:e.group?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("u",{children:"Group:"}),"   ",e.group]}),Object(d.jsx)("p",{children:Object(d.jsx)("u",{children:"Text:"})}),e.text.map((function(e){return Object(d.jsx)("small",{className:"txt",children:e})})),Object(d.jsxs)("small",{children:[Object(d.jsx)("u",{children:"Email:"}),"   ",e.email]}),Object(d.jsxs)("small",{children:[Object(d.jsx)("u",{children:"Task-id:"}),"   ",e._id]}),Object(d.jsxs)("button",{className:"dl-btn",onClick:function(){return function(){var t=window.localStorage.getItem("at");t&&(a(e._id),e.delTask(e._id)),t||console.error("ls item missing. please login again")}()},children:[Object(d.jsx)(S.a,{visible:n==e._id,type:"TailSpin",color:"#fff",height:20,width:20,timeout:3e3,style:{display:"inline",marginRight:"12px"}})," DELETE "]})]}):Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"emptyCard",children:[Object(d.jsx)("p",{}),Object(d.jsx)("p",{}),Object(d.jsx)("p",{}),Object(d.jsx)("small",{}),Object(d.jsx)("small",{})]})})})};n(92);var L=function(e){var t=Object(c.useContext)(T),n=(t.LoaderC,t.setLoaderC);return Object(d.jsx)("div",{className:"modalBackground",children:Object(d.jsxs)("div",{className:"modalContainer",children:[Object(d.jsx)("div",{className:"titleCloseBtn",children:Object(d.jsx)("button",{onClick:function(){e.setOpenModal(!1),n(!1)},children:"X"})}),Object(d.jsx)("div",{className:"modalTitle",children:Object(d.jsx)("p",{children:e.title})}),Object(d.jsxs)("div",{className:"modalFooter",children:[Object(d.jsx)("button",{onClick:function(){e.setOpenModal(!1),n(!1)},id:"cancelBtn",children:"Cancel"}),Object(d.jsx)("button",{onClick:function(){e.delEnd(),e.setOpenModal(!1)},children:"Continue"})]})]})})};n(93);var E=function(e){var t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(!1),o=Object(i.a)(r,2),u=o[0],l=o[1],b=Object(c.useState)(""),O=Object(i.a)(b,2),x=O[0],f=O[1],g=Object(c.useState)(!1),v=Object(i.a)(g,2),k=v[0],C=v[1],S=Object(c.useContext)(h),w=(S.message,S.setMessage),E=Object(c.useContext)(T),F=(E.LoaderC,E.setLoaderC);Object(c.useEffect)(Object(m.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C(!1),!(t=window.localStorage.getItem("at"))){e.next=8;break}return s([" "]),e.next=6,j.get("/register",{headers:{"x-access-token":t}}).catch((function(e){console.log(e),s([]),w(["#ff5e5e","Something went wrong"]),window.localStorage.removeItem("at")}));case 6:(n=e.sent)&&s(n.data.tasks);case 8:case"end":return e.stop()}}),e)}))),[k]);var M=function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(!0),f(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.localStorage.getItem("at"),e.next=3,j.delete("/register",{headers:{"t-id":x,"x-access-token":t}}).catch((function(e){w(["#ff5e5e","Something went wrong"]),F(!1)}));case 3:(n=e.sent)&&200==n.status&&(w(["#ff5e5e","Deleted"]),s([]),f(""),C(!0),F(!1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a[0]?a[0]?Object(d.jsxs)("div",{id:"TasksList",children:[Object(d.jsx)("h2",{children:"Your Saved Tasks"}),a.map((function(e){return Object(d.jsx)(N,{_id:e._id,date:e.date,group:e.group,email:e.email,text:e.text,delTask:M,setOpenModal:l},e._id)})),u&&Object(d.jsx)(L,{setOpenModal:l,delEnd:A,title:"Are You Sure?"})]}):void 0:Object(d.jsxs)("div",{id:"TasksList",children:[Object(d.jsx)("h2",{children:"Your Saved Tasks"}),Object(d.jsx)(y,{setFatherTasks:s}),Object(d.jsx)(N,{})]})};n(94);var F=function(){return Object(d.jsx)("div",{id:"NoMatch",children:Object(d.jsx)("h1",{children:"Nothing Here"})})};n(95);var M=function(){return Object(d.jsx)("div",{className:"footer"})};var A=function(){var e=Object(c.useState)(["darkgray",""]),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(i.a)(s,2),o=r[0],b=r[1],f=Object(c.useState)(!0),p=Object(i.a)(f,2),m=p[0],g=p[1];return Object(c.useEffect)((function(){!0===m&&j.get("/").then((function(e){200===e.status&&(a(["darkgray","server is on"]),g(!1))})).catch((function(e){console.log(e),a(["#ff5e5e","server error"])}))}),[]),Object(d.jsx)(h.Provider,{value:{message:n,setMessage:a},children:Object(d.jsx)(T.Provider,{value:{LoaderC:o,setLoaderC:b},children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)(O,{}),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",children:Object(d.jsx)(w,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/list",children:Object(d.jsx)(E,{})}),Object(d.jsx)(l.a,{path:"*",children:Object(d.jsx)(F,{})})]}),Object(d.jsx)(x,{}),Object(d.jsx)(M,{})]})]})})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root")),B()}},[[96,1,2]]]);
//# sourceMappingURL=main.1e8ad0f3.chunk.js.map