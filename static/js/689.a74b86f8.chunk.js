"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[689],{975:function(e,r,t){t.r(r);var n=t(861),c=t(439),a=t(757),i=t.n(a),s=t(791),u=t(340),o=t(184);r.default=function(){var e=(0,s.useState)([]),r=(0,c.Z)(e,2),t=r[0],a=r[1],h=(0,s.useState)(!0),l=(0,c.Z)(h,2),d=l[0],f=l[1],v=(0,s.useState)(null),p=(0,c.Z)(v,2),x=p[0],m=p[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movies/get-movie-credits");case 3:r=e.sent,a(r.data),f(!1),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching data:",e.t0),m("An error occurred while fetching data."),f(!1);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),d?(0,o.jsx)("p",{children:"Loading..."}):x?(0,o.jsx)("p",{children:x}):(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Movie Credits"}),(0,o.jsx)("ul",{children:t.map((function(e){return(0,o.jsx)("li",{children:e.actorName},e.id)}))})]})}}}]);
//# sourceMappingURL=689.a74b86f8.chunk.js.map