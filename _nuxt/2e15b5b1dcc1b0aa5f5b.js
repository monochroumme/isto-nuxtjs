(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{241:function(t,e,n){t.exports=n.p+"img/9a7d383.png"},242:function(t,e,n){t.exports=n.p+"img/ed4e7b9.png"},243:function(t,e,n){t.exports=n.p+"img/1a22d2c.png"},276:function(t,e,n){"use strict";n.r(e);var _=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"_404__center__slides"},[e("img",{attrs:{src:n(241)}}),this._v(" "),e("img",{attrs:{src:n(242)}}),this._v(" "),e("img",{attrs:{src:n(243)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"_404__center__text"},[e("div",{staticClass:"_404__center--left"}),this._v(" "),e("div",{staticClass:"_404__center--right"}),this._v(" "),e("span",{staticClass:"_404__center__text__entity"},[this._v("Страница не найдена")]),this._v(" "),e("span",{staticClass:"_404__center__text__entity"},[this._v("Страница не найдена")])])}],r={components:{Blob:n(231).a},mounted:function(){var t=this;this.$bus.$emit("showLogo"),this.$bus.$emit("showNav"),this.$bus.$emit("showLangs"),setTimeout((function(){t.$bus.$emit("headerNoBg","b")}),1);var e,i,n,_=document.getElementsByClassName("_404__center__text__entity"),r=document.getElementsByClassName("_404__center__text")[0],o=1.4*_[0].offsetWidth,c=[0,o];setInterval((function(){for(e=t.$refs.center.offsetWidth/window.innerWidth,o=1.4*_[0].offsetWidth,i=0;i<c.length;i++)c[i]-=1,_[i].style.transform="translateX(".concat(c[i],"px)"),c[i]<-(window.innerWidth*(1-e)/2+_[i].offsetWidth)&&(c[i]=0==i?c[c.length-1]+o:c[i-1]+o)}),1e3/60);var l=document.getElementsByClassName("_404__center__slides")[0].children,d=0;function h(){_[0].offsetWidth*c.length<1.2*window.innerWidth&&((n=document.createElement("div")).classList.add("_404__center__text__entity"),n.innerHTML="Страница не найдена",r.appendChild(n),_=document.getElementsByClassName("_404__center__text__entity"),c.push(c[c.length-1]+o))}setInterval((function(){0==d?l[l.length-1].style.opacity=0:l[d-1].style.opacity=0,l[d].style.opacity=1,++d>l.length-1&&(d=0)}),5e3),h(),window.addEventListener("resize",h)}},o=n(26),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_404"},[n("div",{ref:"center",staticClass:"_404__center"},[t._m(0)]),t._v(" "),t._m(1),t._v(" "),n("a",{staticClass:"_404__learn-more learn-more",attrs:{href:"#"},on:{mouseenter:function(e){return t.$bus.blobMove(0)},mouseleave:function(e){return t.$bus.blobStop(0)}}},[n("div",{staticClass:"learn-more__ellipse"},[n("div",{staticClass:"blob"},[n("svg",{staticStyle:{width:"170px",height:"140px",left:"0px",top:"0"},attrs:{id:"blob0",viewBox:"0 0 170 140"}},[n("Blob",{attrs:{color:"#000000"}})],1)])]),t._v(" "),n("span",[t._v("на главную")])])])}),_,!1,null,null,null);e.default=component.exports}}]);