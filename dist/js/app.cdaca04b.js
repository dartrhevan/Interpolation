(function(t){function e(e){for(var r,i,l=e[0],u=e[1],c=e[2],s=0,v=[];s<l.length;s++)i=l[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&v.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(v.length)v.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,l=1;l<n.length;l++){var u=n[l];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"85ec":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Points")],1)},a=[],i=n("d225"),l=n("308d"),u=n("6bb5"),c=n("4e2b"),f=n("9ab4"),s=n("60a3"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"points"}},[n("table",{attrs:{border:"1"}},[t._m(0),n("tbody",[t._l(t.points,(function(e){return n("tr",[n("td",[t._v(t._s(e.x))]),n("td",[t._v(t._s(e.y))]),n("td",[n("button",{on:{click:function(n){return t.del(e)}}},[t._v("Delete")])])])})),n("tr",[t._m(1),t._m(2),n("td",[n("button",{ref:"but",on:{click:function(e){return t.add()}}},[t._v("Add")])])])],2)]),n("button",{on:{click:function(e){return t.calcLagrange()}}},[t._v("CalcLagrange")]),n("button",{on:{click:function(e){return t.calcNewton()}}},[t._v("CalcNewton")]),n("button",{on:{click:function(e){return t.calcSplains()}}},[t._v("calcSplains")]),n("button",{on:{click:function(e){return t.calcMMS()}}},[t._v("calcMMS")]),n("br"),n("button",{on:{click:function(e){return t.fillMMS()}}},[t._v("FillMMS")]),n("button",{on:{click:function(e){return t.fillSplains()}}},[t._v("FillSplains")]),n("button",{on:{click:function(e){return t.fillNL()}}},[t._v("FillNL")]),n("br"),t._v(" Result:"),n("label",{attrs:{id:"res"}}),null!=t.splains?n("details",[t._v(" Splains "),n("br"),t._l(t.splains,(function(e){return n("div",[t._v(" "+t._s(e.x1)+" - "+t._s(e.x2)+": y = "+t._s(e.a)+" + "+t._s(e.b)+"(x - "+t._s(e.x2)+") + "+t._s(e.c)+"(x - "+t._s(e.x2)+")^2 + "+t._s(e.d)+"(x - "+t._s(e.x2)+")^3 ")])})),n("input",{attrs:{type:"text",placeholder:"x",value:"0",id:"x"}}),n("button",{on:{click:function(e){t.$refs.y.innerHTML=t.splainF()}}},[t._v("Calc")]),t._v("f(x)="),n("label",{ref:"y"})],2):t._e()])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("td",[t._v("X")]),n("td",[t._v("Y")]),n("td")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("input",{attrs:{id:"xf"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("input",{attrs:{id:"yf"}})])}],h=(n("7514"),n("c5f6"),n("5df2"),n("b0b4")),y=function t(e,n){Object(i["a"])(this,t),this.x=e,this.y=n},p=(n("6b54"),n("ac4d"),n("8a81"),n("ac6a"),n("5df3"),n("f400"),function(){function t(e,n){Object(i["a"])(this,t),this.power=e,this.coef=n}return Object(h["a"])(t,[{key:"add",value:function(e){var n=e;if(n instanceof w){var r=new w;Object.assign(r,n);var o=r.letters,a=!0,i=!1,l=void 0;try{for(var u,c=o[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var f=u.value;if(f[0]===this.power)return f[1].coef+=this.coef,n;o.set(this.power,this)}}catch(d){i=!0,l=d}finally{try{a||null==c.return||c.return()}finally{if(i)throw l}}return r}var s=new t(0,0);if(Object.assign(s,n),this.power===s.power)return s.coef+=this.coef,s;var v=Object.assign(this);return new w(s,v)}},{key:"mul",value:function(e){if(e instanceof w){var n=new w;Object.assign(n,e);var r=n.letters,o=!0,a=!1,i=void 0;try{for(var l,u=r[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){var c=l.value;c[0]+=this.power,c[1].coef*=this.coef}}catch(s){a=!0,i=s}finally{try{o||null==u.return||u.return()}finally{if(a)throw i}}return n}var f=new t(0,0);return Object.assign(f,e),f.coef*=this.coef,f.power+=this.power,f}},{key:"toString",value:function(){return this.power>1?"".concat(this.coef,"x^").concat(this.power):1===this.power?"".concat(this.coef,"x"):"".concat(this.coef)}}]),t}()),w=function(){function t(){Object(i["a"])(this,t),this._letters=new Map;for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];for(var o=0,a=n;o<a.length;o++){var l=a[o];this._letters.set(l.power,l)}}return Object(h["a"])(t,[{key:"add",value:function(e){var n=new t,r=this.letters,o=!0,a=!1,i=void 0;try{for(var l,u=r[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){var c=l.value;t.copyLetter(n,c[1])}}catch(_){a=!0,i=_}finally{try{o||null==u.return||u.return()}finally{if(a)throw i}}if(e instanceof t){var f=new t;f=Object.assign(f,e);var s=f.letters,v=!0,d=!1,h=void 0;try{for(var y,w=s[Symbol.iterator]();!(v=(y=w.next()).done);v=!0){var b=y.value;t.addLetterToClouse(n,b[1])}}catch(_){d=!0,h=_}finally{try{v||null==w.return||w.return()}finally{if(d)throw h}}}else{var g=new p(e.power,e.coef);t.addLetterToClouse(n,g)}return n}},{key:"mul",value:function(e){var n=new t;if(e instanceof t){var r=new t,o=this._letters,a=!0,i=!1,l=void 0;try{for(var u,c=o[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var f=u.value;t.copyLetter(r,f[1])}}catch(N){i=!0,l=N}finally{try{a||null==c.return||c.return()}finally{if(i)throw l}}var s=new t,v=e.letters,d=!0,h=!1,y=void 0;try{for(var p,w=v[Symbol.iterator]();!(d=(p=w.next()).done);d=!0){var b=p.value;t.copyLetter(s,b[1])}}catch(N){h=!0,y=N}finally{try{d||null==w.return||w.return()}finally{if(h)throw y}}var g=!0,_=!1,x=void 0;try{for(var m,O=r.letters[Symbol.iterator]();!(g=(m=O.next()).done);g=!0){var k=m.value,j=s.mul(k[1]);n=n.add(j)}}catch(N){_=!0,x=N}finally{try{g||null==O.return||O.return()}finally{if(_)throw x}}}else{var S=e,M=this.letters,L=!0,P=!1,$=void 0;try{for(var T,E=M[Symbol.iterator]();!(L=(T=E.next()).done);L=!0){var F=T.value;t.copyLetter(n,F[1])}}catch(N){P=!0,$=N}finally{try{L||null==E.return||E.return()}finally{if(P)throw $}}t.mullLetterToClouse(n,S)}return n}},{key:"get_letter",value:function(t){return this._letters.get(t)}},{key:"shrinkToFit",value:function(){}},{key:"reverse",value:function(){for(var t=0;t<this._letters.size/2;t++){var e=this._letters.get(t);this._letters.set(t,this._letters.get(this._letters.size-t)),this._letters.set(this._letters.size-t,e)}}},{key:"toString",value:function(){var t="",e=new p(0,0),n=!0,r=!1,o=void 0;try{for(var a,i=this._letters[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var l=a.value;l[1]!==e&&(t+=l[1].coef>=0?"+"+l[1]:l[1])}}catch(u){r=!0,o=u}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return t}},{key:"letters",get:function(){return this._letters}}],[{key:"addLetterToClouse",value:function(t,e){t._letters.has(e.power)?t._letters.get(e.power).coef+=e.coef:t._letters.set(e.power,e)}},{key:"copyLetter",value:function(t,e){var n=new p(e.power,e.coef);t._letters.set(n.power,n)}},{key:"mullLetterToClouse",value:function(t,e){var n=!0,r=!1,o=void 0;try{for(var a,i=t.letters[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var l=a.value;l[1].power=e.power+l[1].power,l[1].coef=e.coef*l[1].coef}}catch(u){r=!0,o=u}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}}}]),t}(),b=function t(e,n,r,o,a,l){Object(i["a"])(this,t),this.x1=e,this.x2=n,this.a=r,this.b=o,this.c=a,this.d=l};function g(t,e){for(var n=new w(new p(0,1)),r=0;r<e.length;r++)if(r!=t){var o=new w(new p(1,1),new p(0,-e[r].x));n=n.mul(o)}return n.mul(new p(0,1/_(t,e)))}function _(t,e){for(var n=e[t].x,r=1,o=0;o<e.length;o++)o!=t&&(r*=n-e[o].x);return r}function x(t){for(var e=new w,n=0;n<t.length;n++){var r=g(n,t);console.log(r.toString()),e=e.add(r.mul(new p(0,t[n].y)))}return e.toString()}function m(t,e,n){return n[t].y}function O(t,e,n){return j[t]+(2*e[t]*k[t]+k[t]*e[t-1])/3}var k=[],j=[];function S(t){for(var e=[],n=[],r=[],o=t.length-1,a=1;a<=o;a++)k[a]=t[a].x-t[a-1].x,j[a]=(t[a].y-t[a-1].y)/k[a];e[1]=-k[2]/(2*(k[1]+k[2])),n[1]=1.5*(j[2]-j[1])/(k[1]+k[2]);for(var i=2;i<o;i++)e[i]=-k[i+1]/(k[i]*e[i-1]+2*(k[i]+k[i+1])),n[i]=(3*(j[i+1]-j[i])-k[i]*n[i-1])/(k[i]*e[i-1]+2*(k[i]+k[i+1]));r[0]=0,r[o]=0;for(var l=o-1;l>=1;l--)r[l]=l===o-1?n[l]:e[l]*r[l+1]+n[l];return r}function M(t,e,n){return(e[t]-e[t-1])/(3*k[t])}function L(t){for(var e=S(t),n=[],r=1;r<t.length;r++)n.push(new b(t[r-1].x,t[r].x,m(r,e,t),O(r,e,t),e[r],M(r,e,t)));return n}function P(t,e){return e.a+e.b*(t-e.x2)+e.c*Math.pow(t-e.x2,2)+e.d*Math.pow(t-e.x2,3)}function $(t){var e=0,n=t.length,r=new w,o=T(t.length,t);do{if(0===e)r=r.add(new p(0,t[e].y));else{for(var a=new w,i=0;i<e;i++)a=0===i?a.add(new p(1,1).add(new p(0,-t[i].x))):a.mul(new p(1,1).add(new p(0,-t[i].x)));a=a.mul(new p(0,o[0][e])),r=r.add(a)}e++}while(e<n);return r.toString()}function T(t,e){for(var n=new Array,r=0;r<t;r++)n.push(new Array(t));for(var o=0;o<t;o++)for(var a=0;a<t;a++)0===o?n[a][o]=e[a].y:a<e.length-o&&(n[a][o]=(n[a+1][o-1]-n[a][o-1])/(e[o+a].x-e[a].x));return n}function E(t){function e(t){function e(t,e){for(var n=0;n<t.length;n++){var r=t[n];t[n]=e[n],e[n]=r}}for(var n=function(n){var r=t.find((function(t){for(var e=0;e<n;e++)if(0!=t[e])return!1;return!0}));r!==t[n]&&e(r,t[n])},r=1;r<t.length;r++)n(r)}for(var n=0;n<t.length-1;n++)if(0!==t[n][n])for(var r=n+1;r<t.length;r++)for(var o=t[r][n]/t[n][n],a=0;a<t[r].length;a++)t[r][a]=Number((t[r][a]-t[n][a]*o).toFixed(15));e(t),console.log(t)}function F(t){for(var e=t.length-1;e>=0;e--){t[e][t.length]/=t[e][e],t[e][e]=1;for(var n=e-1;n>=0;n--)for(var r=t[n][e]/t[e][e],o=t.length;o>=0;o--)t[n][o]=Number((t[n][o]-t[e][o]*r).toFixed(15))}console.log(t)}function N(t){return E(t),F(t),t.map((function(t){return t[t.length-1]}))}function C(t){var e=I(t),n=H(t),r=A(t),o=z(t);console.log("x: ".concat(e," y: ").concat(n," x^2: ").concat(r," xy: ").concat(o));var a=N([[r,e,o],[e,t.length,n]]);return"y = ".concat(a[0],"x + ").concat(a[1])}function B(t){return""}function I(t){return t.map((function(t){return t.x})).reduce((function(t,e){return t+e}))}function A(t){return t.map((function(t){return t.x*t.x})).reduce((function(t,e){return t+e}))}function H(t){return t.map((function(t){return t.y})).reduce((function(t,e){return t+e}))}function z(t){return t.map((function(t){return t.y*t.x})).reduce((function(t,e){return t+e}))}var J=function(t){function e(){return Object(i["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(h["a"])(e,[{key:"fillMMS",value:function(){this.$data.points=[new y(-1,1),new y(0,3),new y(1,5),new y(3,9),new y(4,11)]}},{key:"fillSplains",value:function(){this.$data.points=[new y(1,.8),new y(1.2,2),new y(1.4,2.8),new y(1.6,4),new y(1.8,5.2),new y(2,6)]}},{key:"fillNL",value:function(){this.$data.points=[new y(0,2),new y(2,0),new y(3,4)]}},{key:"calcLagrange",value:function(){var t=document.getElementById("res");t.innerHTML=x(this.getPoints())}},{key:"calcMMS",value:function(){var t=document.getElementById("res");t.innerHTML="<br/> Linear: ".concat(C(this.getPoints())," <br/> Polinomial: ").concat(B(this.getPoints()))}},{key:"calcNewton",value:function(){var t=document.getElementById("res");t.innerHTML=$(this.getPoints())}},{key:"calcSplains",value:function(){this.$data.splains=L(this.getPoints())}},{key:"data",value:function(){return{points:[new y(0,2),new y(2,0),new y(3,4)],splains:null}}},{key:"splainF",value:function(){var t=Number.parseFloat(document.getElementById("x").value);console.log(t),console.log(this.$data.splains);var e=this.$data.splains.find((function(e){return e.x2>=t&&e.x1<=t}));return null===e||void 0===e?(alert("Out of bound exception"),null):P(t,e)}},{key:"getPoints",value:function(){return this.$data.points}},{key:"del",value:function(t){var e=this.getPoints();e.splice(e.indexOf(t),1)}},{key:"add",value:function(){this.$data.points.push(new y(Number.parseFloat(document.getElementById("xf").value),Number.parseFloat(document.getElementById("yf").value)))}}]),e}(s["b"]);J=Object(f["a"])([Object(s["a"])({components:{}})],J);var D=J,R=D,X=n("2877"),Y=Object(X["a"])(R,v,d,!1,null,"643949fe",null),q=Y.exports,G=function(t){function e(){return Object(i["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),e}(s["b"]);G=Object(f["a"])([Object(s["a"])({components:{Points:q}})],G);var K=G,Q=K,U=(n("034f"),Object(X["a"])(Q,o,a,!1,null,null,null)),V=U.exports;r["default"].config.productionTip=!0,new r["default"]({render:function(t){return t(V)}}).$mount("#app")}});
//# sourceMappingURL=app.cdaca04b.js.map