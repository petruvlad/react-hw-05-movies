"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[845],{845:function(e,n,r){r.r(n);var t=r(861),a=r(439),c=r(757),i=r.n(c),s=r(791),u=r(340),o=r(145),l=r(184);n.default=function(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),r=n[0],c=n[1],d=(0,s.useState)(!0),h=(0,a.Z)(d,2),f=h[0],p=h[1],v=(0,s.useState)(null),j=(0,a.Z)(v,2),m=j[0],Z=j[1];return u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.headers.common.Authorization="Bearer ".concat(o.U),(0,s.useEffect)((function(){var e=function(){var e=(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/trending/all/day");case 3:n=e.sent,console.dir(n.data),c(n.data.results),p(!1),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error fetching data:",e.t0),Z("An error occurred while fetching data."),p(!1);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),f?(0,l.jsx)("p",{children:"Loading..."}):m?(0,l.jsx)("p",{children:m}):(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Trending Movies"}),(0,l.jsx)("ul",{children:r.map((function(e){return(0,l.jsx)("li",{children:e.title||e.name},e.id)}))})]})}},145:function(e,n,r){r.d(n,{U:function(){return t}});var t="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjcyOGY5YWJhN2EyZTIwZDk3ODlhNjQ2YzQzOWRmNyIsInN1YiI6IjY1OWVlM2RmOTFiNTMwMDFmZGYxZGJjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R65JM528KagKKuKzP5k7z5UK3DB5XnauXjVE2dbamz8"}}]);
//# sourceMappingURL=845.e325f884.chunk.js.map