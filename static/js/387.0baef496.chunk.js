"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a,c,o=e(165),i=e(861),p=e(439),s=e(689),l=e(791),u=e(596),d=(e(462),e(168)),h=e(444),f=h.ZP.div(r||(r=(0,d.Z)(["\n    padding: 10px;\n    padding-top: 20px;\n\n    > h2 {\n        margin-bottom: 10px;\n    }\n\n    > p {\n        color: var(--global-black-color);\n    }\n"]))),m=h.ZP.ul(a||(a=(0,d.Z)(["\n    display: grid;\n    grid-template-columns: repeat(9, 1fr);\n    grid-template-rows: repeat(4, 1fr);\n    grid-column-gap: 15px;\n    grid-row-gap: 15px;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n"]))),g=h.ZP.li(c||(c=(0,d.Z)(["\n    display: flex;\n    flex-direction: column;\n    // justify-content: space-between;\n\n    > h4 {\n        margin-top: 5px;\n        color: var(--global-black-color);\n    }\n\n    > p {\n        margin-top: 10px;\n        font-size: 12px;\n        font-weight: 500;\n    }\n"]))),x=e(84),v=e(184);var Z=function(){var n=(0,s.UO)().movieId,t=(0,l.useState)([]),e=(0,p.Z)(t,2),r=e[0],a=e[1],c=(0,l.useState)(null),d=(0,p.Z)(c,2),h=d[0],Z=d[1];return(0,l.useEffect)((function(){var t=function(){var t=(0,i.Z)((0,o.Z)().mark((function t(){var e,r;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,x.Z)("/movie/".concat(n,"/credits"));case 3:e=t.sent,r=e.cast,a(r),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),Z(t.t0.message),u.Am.error("Fetch error: ".concat(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,v.jsxs)(f,{children:[h&&(0,v.jsx)(u.Ix,{autoClose:3e3}),(0,v.jsx)("h2",{children:"Cast"}),(0,v.jsx)(m,{children:r.map((function(n){return n.profile_path?(0,v.jsxs)(g,{children:[(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w154/".concat(n.profile_path),alt:"".concat(n.name)}),(0,v.jsx)("h4",{children:n.name}),(0,v.jsxs)("p",{children:["Character: ",n.character]})]},n.id):null}))})]})}},84:function(n,t,e){e.d(t,{Z:function(){return p}});var r=e(165),a=e(861),c=e(243),o="2146ba70e3259479566e1b682a61e224";function i(){return i=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a,i,p,s=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:"",a=s.length>2&&void 0!==s[2]?s[2]:o,n.next=4,c.Z.get("https://api.themoviedb.org/3/".concat(t,"?api_key=").concat(a).concat(e),{withCredentials:!1});case 4:return i=n.sent,p=i.data,n.abrupt("return",p);case 7:case"end":return n.stop()}}),n)}))),i.apply(this,arguments)}var p=function(n){return i.apply(this,arguments)}}}]);
//# sourceMappingURL=387.0baef496.chunk.js.map