(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(5),c=a(2),s=a(7),u=(a(14),a(1)),o=a(9),l=a.n(o),d=a(0),m=function(e){var t=e.user;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},j=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user;return Object(d.jsxs)("article",{"data-id":a,className:l()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(d.jsx)(m,{user:r})]})},b=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(j,{todo:e},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function O(e){return h.find((function(t){return t.id===e}))||null}var p=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:O(e.userId)})})),f=function(){var e=Object(u.useState)(Object(r.a)(p)),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(u.useState)(""),s=Object(c.a)(i,2),o=s[0],l=s[1],m=Object(u.useState)(!1),j=Object(c.a)(m,2),f=j[0],x=j[1],v=Object(u.useState)(0),S=Object(c.a)(v,2),y=S[0],I=S[1],N=Object(u.useState)(!1),g=Object(c.a)(N,2),A=g[0],C=g[1],D=/(?:(?![\t-\r 0-9A-Za-z\xA0\u0404\u0406\u0407\u0410-\u044F\u0454\u0456\u0457\u0490\u0491\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S])|[\u0401\u042A\u042B\u042D\u044A\u044B\u044D\u0451]/g,_=function(){var e=a.map((function(e){return e.id}));return Math.max.apply(Math,Object(r.a)(e))+1};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){if(e.preventDefault(),x(!o),C(!y),o&&y){var t={id:_(),title:o,completed:!1,userId:y,user:O(y)};n([].concat(Object(r.a)(a),[t])),l(""),I(0),x(!1),C(!1)}},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"titleInput",children:"Title:\xa0"}),Object(d.jsx)("input",{id:"titleInput",placeholder:"Enter a title",type:"text","data-cy":"titleInput",value:o,onChange:function(e){var t=e.target.value.replace(D,"");t!==o&&(l(t),x(!1))}}),f&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"userSelect",children:"User:\xa0"}),Object(d.jsxs)("select",{id:"userSelect","data-cy":"userSelect",value:y,onChange:function(e){I(+e.target.value),C(!1)},children:[Object(d.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),h.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),A&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(d.jsx)(b,{todos:a})]})};i.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5d605318.chunk.js.map