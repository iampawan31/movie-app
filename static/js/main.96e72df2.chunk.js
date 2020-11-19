(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),i=n(7),s=n.n(i),o=(n(15),n(9)),l=n(6),u=n.n(l),j=n(8),d=n(4),m=(n(17),n(18),function(e){var t=e.favouriteComponent;return Object(c.jsx)(r.a.Fragment,{children:e.movies.map((function(n,a){return Object(c.jsxs)("div",{className:"image-container d-flex justify-content-start m-3",children:[Object(c.jsx)("img",{src:n.Poster,alt:"movie"}),Object(c.jsx)("div",{onClick:function(){return e.handleFavouritesClick(n)},className:"overlay d-flex align-items-center justify-content-center",children:Object(c.jsx)(t,{})})]})}))})});var v=function(e){return Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("h1",{children:e.heading})})};var f=function(e){return Object(c.jsx)("div",{className:"col col-sm-4",children:Object(c.jsx)("input",{type:"text",className:"form-control",value:e.value,onChange:function(t){return e.setSearchValue(t.target.value)},placeholder:"Type to search..."})})};var h=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("span",{className:"mr-2",children:"Add to Favourites"}),Object(c.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-heart-fill",fill:"red",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})]})};var b=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),s=Object(d.a)(i,2),l=s[0],b=s[1],x=Object(a.useState)([]),O=Object(d.a)(x,2),p=O[0],g=O[1],w=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://www.omdbapi.com/?s=".concat(t,"&apikey=f6737fd6"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:(a=e.sent).Search&&r(a.Search);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(e){localStorage.setItem("react-movie-app-favourites",JSON.stringify(e))};return Object(a.useEffect)((function(){w(l)}),[l]),Object(c.jsxs)("div",{className:"container-fluid movie-app",children:[Object(c.jsxs)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:[Object(c.jsx)(v,{heading:"Movies"}),Object(c.jsx)(f,{searchValue:l,setSearchValue:b})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(m,{movies:n,favouriteComponent:h,handleFavouritesClick:function(e){var t=[].concat(Object(o.a)(p),[e]);g(t),C(t)}})}),Object(c.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:Object(c.jsx)(v,{heading:"Favourites"})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(m,{movies:p,handleFavouritesClick:function(e){var t=p.filter((function(t){return t.imdbID!==e.imdbID}));g(t),C(t)},favouriteComponent:h})})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),x()}},[[19,1,2]]]);
//# sourceMappingURL=main.96e72df2.chunk.js.map