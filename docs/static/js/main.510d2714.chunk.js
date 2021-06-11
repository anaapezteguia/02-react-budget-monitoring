(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{13:function(e,t,s){},24:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(7),r=s.n(a),i=(s(13),s(8)),j=s(2),u=s(0),l=function(e){var t=e.message;return Object(u.jsx)("p",{className:"alert alert-danger error",children:t})},b=function(e){var t=e.setBudget,s=e.setRemaining,c=e.setShowQuestion,a=Object(n.useState)(0),r=Object(j.a)(a,2),i=r[0],b=r[1],o=Object(n.useState)(!1),d=Object(j.a)(o,2),O=d[0],m=d[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"What's your budget estimation?"}),O?Object(u.jsx)(l,{message:"Your budget is incorrect"}):null,Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i<1||isNaN(i)?m(!0):(m(!1),t(i),s(i),c(!1))},children:[Object(u.jsx)("input",{type:"number",className:"u-full-width",placeholder:"Write your estimation here",onChange:function(e){b(parseInt(e.target.value))}}),Object(u.jsx)("input",{type:"submit",className:"button-primary u-full-width",value:"Set budget"})]})]})},o=s(15),d=function(e){var t=e.setExpense,s=e.setAddExpense,c=Object(n.useState)(""),a=Object(j.a)(c,2),r=a[0],i=a[1],b=Object(n.useState)(0),d=Object(j.a)(b,2),O=d[0],m=d[1],p=Object(n.useState)(!1),x=Object(j.a)(p,2),h=x[0],g=x[1];return Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),O<1||isNaN(O)||""===r.trim())g(!0);else{g(!1);var n={expenseName:r,expenseAmount:O,id:o.generate()};t(n),s(!0),i(""),m(0)}},children:[Object(u.jsx)("h2",{children:"Write down your expenses"}),h?Object(u.jsx)(l,{message:"Either you left an empty field (they are both required) or your budget is incorrect"}):null,Object(u.jsxs)("div",{className:"campo",children:[Object(u.jsx)("label",{children:"Expense description"}),Object(u.jsx)("input",{type:"text",className:"u-full-width",placeholder:"E.g. Transportation",value:r,onChange:function(e){return i(e.target.value)}})]}),Object(u.jsxs)("div",{className:"campo",children:[Object(u.jsx)("label",{children:"Expense amount"}),Object(u.jsx)("input",{type:"number",className:"u-full-width",placeholder:"E.g. 300",value:O,onChange:function(e){return m(parseInt(e.target.value,10))}})]}),Object(u.jsx)("input",{type:"submit",className:"button-primary u-full-width",value:"Add expense"})]})},O=function(e){var t=e.expense;return Object(u.jsx)("li",{className:"gastos",children:Object(u.jsxs)("p",{children:[t.expenseName,Object(u.jsxs)("span",{className:"gasto",children:["$",t.expenseAmount]})]})})},m=function(e){var t=e.expenses;return Object(u.jsxs)("div",{className:"gastos-realizados",children:[Object(u.jsx)("h2",{children:"Expenses list"}),t.map((function(e){return Object(u.jsx)(O,{expense:e},e.id)}))]})},p=function(e,t){return e/4>t?"alert alert-danger":e/2>t?"alert alert-warning":"alert alert-success"},x=function(e){var t=e.budget,s=e.remaining;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"alert alert-primary",children:["Budget: ",t,"\u20ac"]}),Object(u.jsxs)("div",{className:p(t,s),children:["Remaining: ",s,"\u20ac"]})]})};var h=function(){var e=Object(n.useState)(0),t=Object(j.a)(e,2),s=t[0],c=t[1],a=Object(n.useState)(0),r=Object(j.a)(a,2),l=r[0],o=r[1],O=Object(n.useState)(!0),p=Object(j.a)(O,2),h=p[0],g=p[1],f=Object(n.useState)([]),v=Object(j.a)(f,2),N=v[0],y=v[1],S=Object(n.useState)({}),w=Object(j.a)(S,2),E=w[0],A=w[1],B=Object(n.useState)(!1),C=Object(j.a)(B,2),I=C[0],R=C[1];return Object(n.useEffect)((function(){if(I){y([].concat(Object(i.a)(N),[E]));var e=l-E.expenseAmount;o(e),R(!1)}}),[I,E,N,l]),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{children:"Budget monitoring app"}),Object(u.jsx)("div",{className:"contenido-principal contenido",children:h?Object(u.jsx)(b,{setBudget:c,setRemaining:o,setShowQuestion:g}):Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"one-half column",children:Object(u.jsx)(d,{setExpense:A,setAddExpense:R})}),Object(u.jsxs)("div",{className:"one-half column",children:[Object(u.jsx)(m,{expenses:N}),Object(u.jsx)(x,{budget:s,remaining:l})]})]})})]})})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.510d2714.chunk.js.map