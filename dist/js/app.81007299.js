(function(t){function e(e){for(var r,i,l=e[0],u=e[1],c=e[2],f=0,v=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&v.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);s&&s(e);while(v.length)v.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var r=n("c21b"),a=n.n(r);a.a},c21b:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Points")],1)},o=[],i=n("d225"),l=n("308d"),u=n("6bb5"),c=n("4e2b"),s=n("9ab4"),f=n("60a3"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"points"}},[n("table",{attrs:{border:"1"}},[t._m(0),n("tbody",[t._l(t.points,function(e){return n("tr",[n("td",[t._v(t._s(e.x))]),n("td",[t._v(t._s(e.y))]),n("td",[n("button",{on:{click:function(n){t.del(e)}}},[t._v("Delete")])])])}),t._m(1),n("tr",[n("button",{ref:"but",on:{click:function(e){t.add()}}},[t._v("Add")])])],2)]),n("button",{on:{click:function(e){t.calcLagrange()}}},[t._v("CalcLagrange")]),n("button",{on:{click:function(e){t.calcNewton()}}},[t._v("CalcNewton")]),n("button",{on:{click:function(e){t.calcSplains()}}},[t._v("calcSplains")]),null!=t.splains?n("details",[t._v("\n        Splains\n        "),n("br"),t._l(t.splains,function(e){return n("div",[t._v("\n            "+t._s(e.x1)+" - "+t._s(e.x2)+": y = "+t._s(e.a)+" + "+t._s(e.b)+"(x - "+t._s(e.x1)+") + "+t._s(e.c)+"(x - "+t._s(e.x1)+")^2 + "+t._s(e.d)+"(x - "+t._s(e.x1)+")^3\n        ")])}),n("input",{attrs:{type:"text"}}),n("button",[t._v("Calc")])],2):t._e()])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("td",[t._v("X")]),n("td",[t._v("Y")]),n("td")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[n("input",{attrs:{id:"xf"}})]),n("td",[n("input",{attrs:{id:"yf"}})]),n("td")])}],h=(n("c5f6"),n("5df2"),n("b0b4")),p=function t(e,n){Object(i["a"])(this,t),this.x=e,this.y=n},b=(n("6b54"),n("ac4d"),n("8a81"),n("ac6a"),n("5df3"),n("f400"),function(){function t(e,n){Object(i["a"])(this,t),this.power=e,this.coef=n}return Object(h["a"])(t,[{key:"add",value:function(e){var n=e;if(n instanceof y){var r=new y;Object.assign(r,n);var a=r.letters,o=!0,i=!1,l=void 0;try{for(var u,c=a[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var s=u.value;if(s[0]===this.power)return s[1].coef+=this.coef,n;a.set(this.power,this)}}catch(t){i=!0,l=t}finally{try{o||null==c.return||c.return()}finally{if(i)throw l}}return r}var f=new t(0,0);if(Object.assign(f,n),this.power===f.power)return f.coef+=this.coef,f;var v=Object.assign(this);return new y(f,v)}},{key:"mul",value:function(e){if(e instanceof y){var n=new y;Object.assign(n,e);var r=n.letters,a=!0,o=!1,i=void 0;try{for(var l,u=r[Symbol.iterator]();!(a=(l=u.next()).done);a=!0){var c=l.value;c[0]+=this.power,c[1].coef*=this.coef}}catch(t){o=!0,i=t}finally{try{a||null==u.return||u.return()}finally{if(o)throw i}}return n}var s=new t(0,0);return Object.assign(s,e),s.coef*=this.coef,s.power+=this.power,s}},{key:"toString",value:function(){return"".concat(this.coef,"x^").concat(this.power)}}]),t}()),y=function(){function t(){Object(i["a"])(this,t),this._letters=new Map;for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];for(var a=0,o=n;a<o.length;a++){var l=o[a];this._letters.set(l.power,l)}}return Object(h["a"])(t,[{key:"add",value:function(e){var n=new t;if(Object.assign(n,this),e instanceof t){var r=new t;Object.assign(r,e);var a=r.letters,o=!0,i=!1,l=void 0;try{for(var u,c=a[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var s=u.value;t.addLetterToClouse(n,s[1])}}catch(t){i=!0,l=t}finally{try{o||null==c.return||c.return()}finally{if(i)throw l}}}else{var f=new b(0,0);Object.assign(f,e);var v=f;t.addLetterToClouse(n,v)}return n}},{key:"mul",value:function(e){var n=new t;if(e instanceof t){var r=e,a=!0,o=!1,i=void 0;try{for(var l,u=this._letters[Symbol.iterator]();!(a=(l=u.next()).done);a=!0){var c=l.value;n.add(r.mul(c[1]))}}catch(t){o=!0,i=t}finally{try{a||null==u.return||u.return()}finally{if(o)throw i}}}else{var s=new b(0,0);Object.assign(s,e),Object.assign(n,this),t.mullLetterToClouse(n,s)}return n}},{key:"get_letter",value:function(t){return this._letters.get(t)}},{key:"shrinkToFit",value:function(){}},{key:"toString",value:function(){var t="",e=!0,n=!1,r=void 0;try{for(var a,o=this._letters[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var i=a.value;t+=i[1].coef>0?"+"+i[1]:i[1]}}catch(t){n=!0,r=t}finally{try{e||null==o.return||o.return()}finally{if(n)throw r}}return t}},{key:"letters",get:function(){return this._letters}}],[{key:"addLetterToClouse",value:function(t,e){t._letters.has(e.power)?t._letters.get(e.power).coef+=e.coef:t._letters.set(e.power,e)}},{key:"mullLetterToClouse",value:function(t,e){var n=!0,r=!1,a=void 0;try{for(var o,i=t.letters[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var l=o.value;l[1]=e.mul(l[1])}}catch(t){r=!0,a=t}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}}}]),t}();function w(t,e){for(var n=0===t?new y(new b(1,1),new b(0,-e[t].x)):new y,r=1;r<e.length;r++)if(r!=t){var a=new y(new b(1,1),new b(0,-e[r].x));console.log(a.toString()),n=n.mul(a)}return n.mul(new b(0,1/_(t,e)))}function _(t,e){for(var n=e[t].x,r=1,a=0;a<e.length;a++)a!=t&&(r*=n-e[a].x);return r}function g(t){console.log(t);for(var e=new y,n=0;n<t.length;n++){var r=w(n,t);console.log(r.toString()),e=e.add(r.mul(new b(0,t[n].y)))}return e.toString()}function O(t){return"calcNewton"}var j=function t(e,n,r,a,o,l){Object(i["a"])(this,t),this.x1=e,this.x2=n,this.a=r,this.b=a,this.c=o,this.d=l},m=function(t){function e(){return Object(i["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(h["a"])(e,[{key:"calcLagrange",value:function(){alert(g(this.getPoints()))}},{key:"calcNewton",value:function(){alert(O(this.getPoints()))}},{key:"calcSplains",value:function(){alert("Splains"),this.$data.splains=[new j(0,1,1,2,3,4),new j(1,3,5,6,1,0),new j(3,3.2,1,0,7,4)]}},{key:"data",value:function(){return{points:[new p(0,3),new p(1,2)],splains:null}}},{key:"getPoints",value:function(){return this.$data.points}},{key:"del",value:function(t){var e=this.getPoints();e.splice(e.indexOf(t),1)}},{key:"add",value:function(){this.$data.points.push(new p(Number.parseFloat(document.getElementById("xf").value),Number.parseFloat(document.getElementById("yf").value)))}}]),e}(f["b"]);m=s["a"]([Object(f["a"])({components:{}})],m);var x=m,k=x,S=n("2877"),P=Object(S["a"])(k,v,d,!1,null,"36aeb415",null),T=P.exports,C=function(t){function e(){return Object(i["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),e}(f["b"]);C=s["a"]([Object(f["a"])({components:{Points:T}})],C);var L=C,$=L,E=(n("034f"),Object(S["a"])($,a,o,!1,null,null,null)),N=E.exports;r["default"].config.productionTip=!0,new r["default"]({render:function(t){return t(N)}}).$mount("#app")}});
//# sourceMappingURL=app.81007299.js.map