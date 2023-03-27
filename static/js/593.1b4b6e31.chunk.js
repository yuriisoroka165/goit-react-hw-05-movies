"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[593],{174:function(n,e,t){t.d(e,{e:function(){return f}});var r,o,a,i,c=t(689),s=t(87),u=t(168),l=t(444),p=l.ZP.div(r||(r=(0,u.Z)(["\n    margin-top: 30px;\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    grid-template-rows: repeat(4, 1fr);\n    grid-column-gap: 15px;\n    grid-row-gap: 15px;\n    color: var(--global-black-color);\n"]))),d=l.ZP.div(o||(o=(0,u.Z)(["\n    // outline: 1px solid blue;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n\n    > a {\n        display: flex;\n        flex-direction: column;\n        text-decoration: none;\n        font-weight: 500;\n        color: var(--global-black-color);\n    }\n"]))),h=l.ZP.h6(a||(a=(0,u.Z)(["\n    margin-top: 5px;\n"]))),x=l.ZP.p(i||(i=(0,u.Z)(["\n    font-size: 8px;\n"]))),m=t(184);function f(n){var e=n.movies,t=(0,c.TH)();return(0,m.jsx)(p,{children:e.map((function(n){return n.poster_path?(0,m.jsxs)(d,{children:[(0,m.jsxs)(s.rU,{to:"/"===t.pathname?"movies/".concat(n.id):"".concat(n.id),state:{from:t},children:[(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w154/".concat(n.poster_path),alt:"".concat(n.name)}),(0,m.jsx)(h,{children:n.original_title})]}),(0,m.jsxs)(x,{children:["Release date: ",n.release_date]})]},n.id):null}))})}},593:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,o,a,i=t(165),c=t(861),s=t(439),u=t(791),l=t(87),p=t(596),d=(t(462),t(84)),h=t(168),x=t(444),m=x.ZP.form(r||(r=(0,h.Z)(["\n    margin-top: 20px;\n"]))),f=x.ZP.input(o||(o=(0,h.Z)(["\n    width: 200px;\n    height: 40px;\n    margin-right: 5px;\n    border: none;\n    border-radius: 5px;\n    padding: 8px;\n    box-shadow: var(--input-box-shadow);\n\n    &:focus {\n        outline: none;\n    }\n"]))),v=x.ZP.button(a||(a=(0,h.Z)(["\n    width: 80px;\n    height: 40px;\n    margin-bottom: 10px;\n    background-color: var(--global-green-color);\n    border: none;\n    border-radius: 5px;\n    box-shadow: var(--input-box-shadow);\n    cursor: pointer;\n"]))),g=t(184);function b(n){var e=n.onSubmit;return(0,g.jsxs)(m,{onSubmit:e,children:[(0,g.jsx)(f,{type:"text",name:"query",autoFocus:!0,placeholder:"Search movie"}),(0,g.jsx)(v,{type:"submit",children:"Search"})]})}var Z=t(174);var w=function(){var n,e=(0,u.useState)([]),t=(0,s.Z)(e,2),r=t[0],o=t[1],a=(0,u.useState)(null),h=(0,s.Z)(a,2),x=h[0],m=h[1],f=(0,l.lr)(),v=(0,s.Z)(f,2),w=v[0],y=v[1],j=null!==(n=w.get("query"))&&void 0!==n?n:"";return(0,u.useEffect)((function(){if(j){var n=function(){var n=(0,c.Z)((0,i.Z)().mark((function n(){var e,t;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.Z)("search/movie","&query=".concat(j));case 3:e=n.sent,t=e.results,o(t),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),m(n.t0.message),p.Am.error("Fetch error: ".concat(n.t0));case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}}),[j]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h1",{children:"Welcome to Movies Page"}),(0,g.jsx)(b,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget,t=e.elements.query.value;y(""!==t?{query:t}:{}),e.reset()}}),0===r.length&&""!==j&&(0,g.jsx)("p",{children:"We don't have any movies for query: ".concat(j,"!")}),0!==r.length&&(0,g.jsx)(Z.e,{movies:r}),x&&(0,g.jsx)(p.Ix,{autoClose:3e3})]})}},84:function(n,e,t){t.d(e,{Z:function(){return s}});var r=t(165),o=t(861),a=t(243),i="2146ba70e3259479566e1b682a61e224";function c(){return c=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,c,s,u=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:"",o=u.length>2&&void 0!==u[2]?u[2]:i,n.next=4,a.Z.get("https://api.themoviedb.org/3/".concat(e,"?api_key=").concat(o).concat(t),{withCredentials:!1});case 4:return c=n.sent,s=c.data,n.abrupt("return",s);case 7:case"end":return n.stop()}}),n)}))),c.apply(this,arguments)}var s=function(n){return c.apply(this,arguments)}}}]);
//# sourceMappingURL=593.1b4b6e31.chunk.js.map