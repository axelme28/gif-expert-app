(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(7),a=n.n(c),i=(n(15),n(2)),o=n(9),s=n(0),u=function(t){var e=t.setCategory,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],u=c[1];return Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),console.log("Submit Done"),a.trim().length>2&&(e((function(t){return[a].concat(Object(o.a)(t))})),u(""))},children:Object(s.jsx)("input",{type:"text",value:a,onChange:function(t){u(t.target.value)}})})},j=n(10),d=function(t){var e=t.title,n=t.url;return console.log({title:e,url:n}),Object(s.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(s.jsx)("img",{src:n,alt:e}),Object(s.jsx)("p",{children:e})]})},l=n(6),b=n.n(l),p=n(8),f=function(){var t=Object(p.a)(b.a.mark((function t(e){var n,r,c,a,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=wwCTCV6Lk0sqYGFLpORGasZCKor4DEhK&q=".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),console.log(i),t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){f(t).then((function(t){setTimeout((function(){a({data:t,loading:!1},3e3)}))}))}),[t]),c}(e),c=n.data,a=n.loading;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{children:e}),a&&Object(s.jsx)("p",{children:"Loading"}),Object(s.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(s.jsx)(d,Object(j.a)({},t),t.id)}))})]})},h=function(){var t=Object(r.useState)(["Rick and Mory"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"GifExpertApp"}),Object(s.jsx)("hr",{}),Object(s.jsx)("h3",{children:"Add Category"}),Object(s.jsx)(u,{setCategory:c}),Object(s.jsx)("ol",{children:n.map((function(t){return Object(s.jsx)(O,{category:t},t)}))})]})};a.a.render(Object(s.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.dfe4f65e.chunk.js.map