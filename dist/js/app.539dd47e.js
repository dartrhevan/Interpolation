(function(t){function e(e){for(var r,l,i=e[0],u=e[1],c=e[2],f=0,v=[];f<i.length;f++)l=i[f],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&v.push(o[l][0]),o[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);s&&s(e);while(v.length)v.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},o={app:0},a=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var s=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var r=n("c21b"),o=n.n(r);o.a},c21b:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Points")],1)},a=[],l=n("d225"),i=n("308d"),u=n("6bb5"),c=n("4e2b"),s=n("9ab4"),f=n("60a3"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"points"}},[n("table",{attrs:{border:"1"}},[t._m(0),n("tbody",[t._l(t.points,function(e){return n("tr",[n("td",[t._v(t._s(e.x))]),n("td",[t._v(t._s(e.y))]),n("td",[n("button",{on:{click:function(n){t.del(e)}}},[t._v("Delete")])])])}),n("tr",[t._m(1),t._m(2),n("td",[n("button",{ref:"but",on:{click:function(e){t.add()}}},[t._v("Add")])])])],2)]),n("button",{on:{click:function(e){t.calcLagrange()}}},[t._v("CalcLagrange")]),n("button",{on:{click:function(e){t.calcNewton()}}},[t._v("CalcNewton")]),n("button",{on:{click:function(e){t.calcSplains()}}},[t._v("calcSplains")]),n("br"),t._v("\n    Result:"),n("label",{attrs:{id:"res"}}),null!=t.splains?n("details",[t._v("\n        Splains\n        "),n("br"),t._l(t.splains,function(e){return n("div",[t._v("\n            "+t._s(e.x1)+" - "+t._s(e.x2)+": y = "+t._s(e.a)+" + "+t._s(e.b)+"(x - "+t._s(e.x1)+") + "+t._s(e.c)+"(x - "+t._s(e.x1)+")^2 + "+t._s(e.d)+"(x - "+t._s(e.x1)+")^3\n        ")])}),n("input",{attrs:{type:"text",placeholder:"x",value:"0",id:"x"}}),n("button",{on:{click:function(e){t.$refs.y.innerHTML=t.splainF()}}},[t._v("Calc")]),t._v("f(x)="),n("label",{ref:"y"})],2):t._e()])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("td",[t._v("X")]),n("td",[t._v("Y")]),n("td")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("input",{attrs:{id:"xf"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("input",{attrs:{id:"yf"}})])}],y=(n("7514"),n("c5f6"),n("5df2"),n("b0b4")),p=function t(e,n){Object(l["a"])(this,t),this.x=e,this.y=n},h=(n("55dd"),n("6b54"),n("ac4d"),n("8a81"),n("ac6a"),n("5df3"),n("f400"),function(){function t(e,n){Object(l["a"])(this,t),this.power=e,this.coef=n}return Object(y["a"])(t,[{key:"add",value:function(e){var n=e;if(n instanceof b){var r=new b;Object.assign(r,n);var o=r.letters,a=!0,l=!1,i=void 0;try{for(var u,c=o[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var s=u.value;if(s[0]===this.power)return s[1].coef+=this.coef,n;o.set(this.power,this)}}catch(t){l=!0,i=t}finally{try{a||null==c.return||c.return()}finally{if(l)throw i}}return r}var f=new t(0,0);if(Object.assign(f,n),this.power===f.power)return f.coef+=this.coef,f;var v=Object.assign(this);return new b(f,v)}},{key:"mul",value:function(e){if(e instanceof b){var n=new b;Object.assign(n,e);var r=n.letters,o=!0,a=!1,l=void 0;try{for(var i,u=r[Symbol.iterator]();!(o=(i=u.next()).done);o=!0){var c=i.value;c[0]+=this.power,c[1].coef*=this.coef}}catch(t){a=!0,l=t}finally{try{o||null==u.return||u.return()}finally{if(a)throw l}}return n}var s=new t(0,0);return Object.assign(s,e),s.coef*=this.coef,s.power+=this.power,s}},{key:"toString",value:function(){return"".concat(this.coef,"x^").concat(this.power)}}]),t}()),b=function(){function t(){Object(l["a"])(this,t),this._letters=new Map;for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];for(var o=0,a=n;o<a.length;o++){var i=a[o];this._letters.set(i.power,i)}}return Object(y["a"])(t,[{key:"add",value:function(e){var n=new t,r=this.letters,o=!0,a=!1,l=void 0;try{for(var i,u=r[Symbol.iterator]();!(o=(i=u.next()).done);o=!0){var c=i.value;t.copyLetter(n,c[1])}}catch(t){a=!0,l=t}finally{try{o||null==u.return||u.return()}finally{if(a)throw l}}if(e instanceof t){var s=new t;s=Object.assign(s,e);var f=s.letters,v=!0,d=!1,y=void 0;try{for(var p,b=f[Symbol.iterator]();!(v=(p=b.next()).done);v=!0){var w=p.value;t.addLetterToClouse(n,w[1])}}catch(t){d=!0,y=t}finally{try{v||null==b.return||b.return()}finally{if(d)throw y}}}else{var _=new h(e.power,e.coef);t.addLetterToClouse(n,_)}return n}},{key:"mul",value:function(e){var n=new t;if(e instanceof t){var r=new t,o=this._letters,a=!0,l=!1,i=void 0;try{for(var u,c=o[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var s=u.value;t.copyLetter(r,s[1])}}catch(t){l=!0,i=t}finally{try{a||null==c.return||c.return()}finally{if(l)throw i}}var f=new t,v=e.letters,d=!0,y=!1,p=void 0;try{for(var h,b=v[Symbol.iterator]();!(d=(h=b.next()).done);d=!0){var w=h.value;t.copyLetter(f,w[1])}}catch(t){y=!0,p=t}finally{try{d||null==b.return||b.return()}finally{if(y)throw p}}var _=!0,g=!1,x=void 0;try{for(var m,O=r.letters[Symbol.iterator]();!(_=(m=O.next()).done);_=!0){var j=m.value,k=f.mul(j[1]);n=n.add(k)}}catch(t){g=!0,x=t}finally{try{_||null==O.return||O.return()}finally{if(g)throw x}}}else{var S=e,L=this.letters,P=!0,T=!1,$=void 0;try{for(var E,M=L[Symbol.iterator]();!(P=(E=M.next()).done);P=!0){var C=E.value;t.copyLetter(n,C[1])}}catch(t){T=!0,$=t}finally{try{P||null==M.return||M.return()}finally{if(T)throw $}}t.mullLetterToClouse(n,S)}return n}},{key:"get_letter",value:function(t){return this._letters.get(t)}},{key:"shrinkToFit",value:function(){}},{key:"toString",value:function(){var t="",e=!0,n=!1,r=void 0;try{for(var o,a=this._letters[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var l=o.value;t+=l[1].coef>=0?"+"+l[1]:l[1]}}catch(t){n=!0,r=t}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}return t}},{key:"letters",get:function(){return this._letters}}],[{key:"addLetterToClouse",value:function(t,e){t._letters.has(e.power)?t._letters.get(e.power).coef+=e.coef:t._letters.set(e.power,e)}},{key:"copyLetter",value:function(t,e){var n=new h(e.power,e.coef);t._letters.set(n.power,n)}},{key:"mullLetterToClouse",value:function(t,e){var n=!0,r=!1,o=void 0;try{for(var a,l=t.letters[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var i=a.value;i[1].power=e.power+i[1].power,i[1].coef=e.coef*i[1].coef}}catch(t){r=!0,o=t}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}}}]),t}(),w=function t(e,n,r,o,a,i){Object(l["a"])(this,t),this.x1=e,this.x2=n,this.a=r,this.b=o,this.c=a,this.d=i};function _(t,e){var n=0===t?new b(new h(1,1),new h(0,-e[t].x)):new b;0===t&&console.log(n.toString());for(var r=1;r<e.length;r++)if(r!=t){var o=new b(new h(1,1),new h(0,-e[r].x));console.log(o.toString()),n=n.mul(o)}return n.mul(new h(0,1/g(t,e)))}function g(t,e){for(var n=e[t].x,r=1,o=0;o<e.length;o++)o!=t&&(r*=n-e[o].x);return console.log("div: ".concat(r)),r}function x(t){console.log(t);for(var e=new b,n=0;n<t.length;n++){var r=_(n,t);console.log(r.toString()),e=e.add(r.mul(new h(0,t[n].y)))}return e.toString()}function m(t){return t=t.sort(function(t,e){return t.x-e.x}),[new w(0,1,1,2,3,4),new w(1,3,5,6,1,0),new w(3,3.2,1,0,7,4)]}function O(t,e){return e.a+e.b*(t-e.x1)+e.c*Math.pow(t-e.x1,2)+e.d*Math.pow(t-e.x1,3)}function j(t){return"calcNewton"}var k=function(t){function e(){return Object(l["a"])(this,e),Object(i["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(y["a"])(e,[{key:"calcLagrange",value:function(){var t=document.getElementById("res");t.innerHTML=x(this.getPoints())}},{key:"calcNewton",value:function(){var t=document.getElementById("res");t.innerHTML=j(this.getPoints())}},{key:"calcSplains",value:function(){this.$data.splains=m(this.getPoints())}},{key:"data",value:function(){return{points:[new p(0,3),new p(1,2)],splains:null}}},{key:"splainF",value:function(){var t=Number.parseFloat(document.getElementById("x").value);console.log(t),console.log(this.$data.splains);var e=this.$data.splains.find(function(e){return e.x2>=t&&e.x1<=t});return null===e||void 0===e?(alert("Out of bound exception"),null):O(t,e)}},{key:"getPoints",value:function(){return this.$data.points}},{key:"del",value:function(t){var e=this.getPoints();e.splice(e.indexOf(t),1)}},{key:"add",value:function(){this.$data.points.push(new p(Number.parseFloat(document.getElementById("xf").value),Number.parseFloat(document.getElementById("yf").value)))}}]),e}(f["b"]);k=s["a"]([Object(f["a"])({components:{}})],k);var S=k,L=S,P=n("2877"),T=Object(P["a"])(L,v,d,!1,null,"420cec7d",null),$=T.exports,E=function(t){function e(){return Object(l["a"])(this,e),Object(i["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),e}(f["b"]);E=s["a"]([Object(f["a"])({components:{Points:$}})],E);var M=E,C=M,N=(n("034f"),Object(P["a"])(C,o,a,!1,null,null,null)),F=N.exports;r["default"].config.productionTip=!0,new r["default"]({render:function(t){return t(F)}}).$mount("#app")}});
//# sourceMappingURL=app.539dd47e.js.map