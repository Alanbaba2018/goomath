!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("goo",[],e):"object"==typeof exports?exports.goo=e():t.goo=e()}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(3),o=function(){function t(){}return t.degreeToRadius=function(t){return Math.PI*t/180},t.radiusToDegree=function(t){return t/Math.PI*180},t.getDotMultiply=function(t,e){return t.x*e.x+t.y*e.y},t.getCrossMultiply=function(t,e){return t.x*e.y-t.y*e.x},t.isZero=function(t){return Math.abs(t)<=n.default.Zero},t}();e.default=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),o=function(){function t(t,e){"number"==typeof t&&"number"==typeof e?(this.x=t,this.y=e):t instanceof Array&&t.length>1&&void 0===e?(this.x=t[0],this.y=t[1]):(t.hasOwnProperty("x")&&t.hasOwnProperty("y")||console.error("Vector constructor call a error."),this.x=t.x,this.y=t.y)}return t.lerp=function(e,r,n){var o=new t(r.x-e.x,r.y-r.y);return e.add(o.scale(n))},t.prototype.add=function(t){return this.x+=Number(t.x),this.y+=Number(t.y),this},t.prototype.substract=function(t){return this.x-=Number(t.x),this.y-=Number(t.y),this},t.prototype.normalize=function(){var e=this.getModelLength();return 0===e?new t(0,0):new t(this.x/e,this.y/e)},t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.rotate=function(t){var e=n.default.degreeToRadius(t),r=this.x*Math.cos(e)-this.y*Math.sin(e),o=this.x*Math.sin(e)+this.y*Math.cos(e);return this.x=r,this.y=o,this},t.prototype.scale=function(t){return this.x*=t,this.y*=t,this},t.prototype.getModelLength=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},t}();e.default=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(3),o=r(1),i=r(0),u=function(){function t(){}return t.isZero=function(t){return Math.abs(t)<=n.default.Zero},t.isSamePoint=function(t,e){var r=Array.isArray(t)?t:[t.x,t.y],n=Array.isArray(e)?e:[e.x,e.y];return this.isZero(r[0]-n[0])&&this.isZero(r[1]-n[1])},t.getDistance=function(t,e){var r=Array.isArray(t)?t:[t.x,t.y],n=Array.isArray(e)?e:[e.x,e.y];return Math.sqrt(Math.pow(r[0]-n[0],2)+Math.pow(r[1]-n[1],2))},t.transformPointToArray=function(t){return Array.isArray(t)?t:[t.x,t.y]},t.isLeftOfLine=function(t,e,r){var n,u=[new o.default(e),new o.default(r)],a=u[0],s=u[1];a.y>s.y&&(a=(n=[s,a])[0],s=n[1]);var f=new o.default(s.x-a.x,s.y-a.y),l=new o.default(t[0]-a.x,t[1]-a.y);return i.default.getCrossMultiply(f,l)>0},t}();e.default=u},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={Zero:1e-5,PI:Math.PI,PI2:2*Math.PI}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e,r,n){void 0===r&&(r=0),void 0===n&&(n=0),this.x=t,this.y=e,this.width=r,this.height=n}return t.isOverlaped=function(t,e){return t.isOverlaped(e)},t.prototype.getCenter=function(){return{x:this.x+this.width/2,y:this.y+this.height/2}},t.prototype.isOverlaped=function(t){var e=this.getCenter(),r=t.getCenter();return Math.abs(r.x-e.x)<(this.width+t.width)/2&&Math.abs(r.y-e.y)<(this.height+t.height)/2},t.prototype.contain=function(t){return t[0]>this.x&&t[1]>this.y&&t[0]<this.x+this.width&&t[1]<this.y+this.height},t}();e.default=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(4),o=r(2),i=function(){function t(t){this.coordinates=this.transformToArray(t)}return t.prototype.getBound=function(){for(var t=Number.MAX_VALUE,e=Number.MAX_VALUE,r=-Number.MAX_VALUE,o=-Number.MAX_VALUE,i=0,u=this.coordinates;i<u.length;i++){var a=u[i];t=Math.min(t,a[0]),e=Math.min(e,a[1]),r=Math.max(r,a[0]),o=Math.max(o,a[1])}return new n.default(t,e,r-t,o-e)},t.prototype.transformToArray=function(t){return t.map(function(t){return o.default.transformPointToArray(t)})},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1);e.Vector2=n.default;var o=r(4);e.Bound=o.default;var i=r(7);e.Geometry_Type=i.Geometry_Type;var u=r(0);e.Operation=u.default;var a=r(8);e.Line=a.default;var s=r(5);e.Polyline=s.default;var f=r(9);e.Polygon=f.default},function(t,e,r){"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.VECTOR=0]="VECTOR",t[t.LINE=1]="LINE",t[t.BOX=2]="BOX"}(n||(n={})),e.Geometry_Type=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1),o=r(0),i=r(2),u=function(){function t(t,e){t=i.default.transformPointToArray(t),e=i.default.transformPointToArray(e),this.v0=new n.default(t[0],t[1]),this.v1=new n.default(e[0],e[1])}return t.getPedalPointOfLine=function(t,e,r){var i=new n.default(t.x-e.x,t.y-e.y),u=new n.default(r.x-e.x,r.y-e.y),a=o.default.getDotMultiply(i,u)/u.getModelLength();return new n.default(e.x,e.y).add(u.normalize().scale(a))},t.getDistanceOfPtToLine=function(t,e,r){var i=new n.default(t.x-e.x,t.y-e.y),u=new n.default(r.x-e.x,r.y-e.y),a=o.default.getCrossMultiply(i,u);return Math.abs(a/u.getModelLength())},t.isPointAtLine=function(t,e){return!1},t.isParalled=function(t,e){var r=t.getDirection(),n=e.getDirection(),i=o.default.getCrossMultiply(r,n);return o.default.isZero(i)},t.isCollinear=function(e,r){var n=e.getDirection(),i=new t(e.v0,r.v0).getDirection(),u=o.default.getCrossMultiply(n,i);return this.isParalled(e,r)&&o.default.isZero(u)},t.isInsersect=function(t,e){return!this.isParalled(t,e)},t.getInsersectPt=function(t,e){if(this.isParalled(t,e))return this.isCollinear(t,e)?void console.warn("These lines is collinear"):void console.warn("These lines is paralled");var r=t.getDirVector(),i=e.getDirVector(),u=new n.default(e.v0.x-t.v0.x,e.v0.y-t.v0.y),a=new n.default(e.v1.x-t.v0.x,e.v1.y-t.v0.y),s=Math.abs(o.default.getCrossMultiply(r,u)),f=Math.abs(o.default.getCrossMultiply(r,a)),l=0;return l=this.isBothSide(r,u,a)?s/(s+f):s/(s-f),e.v0.clone().add(i.clone().scale(l))},t.isInsersectOfSegment=function(t,e){var r=t.getDirVector(),o=e.getDirVector(),i=new n.default(e.v0.x-t.v0.x,e.v0.y-t.v0.y),u=new n.default(e.v1.x-t.v0.x,e.v1.y-t.v0.y),a=new n.default(t.v0.x-e.v0.x,t.v0.y-e.v0.y),s=new n.default(t.v1.x-e.v0.x,t.v1.y-e.v0.y);return this.isBothSide(r,i,u)&&this.isBothSide(o,a,s)},t.isBothSide=function(t,e,r){return o.default.getCrossMultiply(t,e)*o.default.getCrossMultiply(t,r)<=0},t.prototype.getDirVector=function(){var t=this.v1.x-this.v0.x,e=this.v1.y-this.v0.y;return new n.default(t,e)},t.prototype.getDirection=function(){return this.getDirVector().normalize()},t.prototype.getLineLength=function(){return this.getDirVector().getModelLength()},t}();e.default=u},function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var i=r(5),u=r(2),a=function(t){function e(e){var r=t.call(this,e)||this;return r._cleanData(),r}return o(e,t),e.prototype.contain=function(t){t=u.default.transformPointToArray(t);var e=this.getBound();if(this.coordinates.length<4||!e.contain(t))return!1;for(var r=0,n=this.coordinates.length,o=0;o<n-1;++o){var i=this.coordinates[o],a=this.coordinates[o+1];this._isWithInTrapezoid(t,i,a)&&r++}return r%2==1},e.prototype._cleanData=function(){var t=this.coordinates.length;t<3?console.error("Points contained by polygon is too few"):u.default.isSamePoint(this.coordinates[0],this.coordinates[t-1])||this.coordinates.push(this.coordinates[0])},e.prototype._isWithInTrapezoid=function(t,e,r){var n=Math.max(e[1],r[1]),o=Math.min(e[1],r[1]);return u.default.isLeftOfLine(t,e,r)&&t[1]>o&&t[1]<n},e}(i.default);e.default=a}])});