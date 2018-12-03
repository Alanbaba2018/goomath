!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("goo",[],e):"object"==typeof exports?exports.goo=e():t.goo=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),o=function(){function t(){}return t.degreeToRadius=function(t){return Math.PI*t/180},t.radiusToDegree=function(t){return t/Math.PI*180},t.getDotMultiply=function(t,e){return t.x*e.x+t.y*e.y},t.getCrossMultiply=function(t,e){return t.x*e.y-t.y*e.x},t.isZero=function(t){return Math.abs(t)<=r.default.Zero},t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=function(){function t(t,e){this.x=t,this.y=e}return t.prototype.add=function(t){return this.x+=Number(t.x),this.y+=Number(t.y),this},t.prototype.substract=function(t){return this.x-=Number(t.x),this.y-=Number(t.y),this},t.prototype.normalize=function(){var e=this.getModelLength();return 0===e?new t(0,0):new t(this.x/e,this.y/e)},t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.rotate=function(t){var e=r.default.degreeToRadius(t),n=this.x*Math.cos(e)-this.y*Math.sin(e),o=this.x*Math.sin(e)+this.y*Math.cos(e);return this.x=n,this.y=o,this},t.prototype.scale=function(t){return this.x*=t,this.y*=t,this},t.prototype.getModelLength=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1);e.Vector2=r.default;var o=n(4);e.Line=o.default;var i=n(5);e.Geometry_Type=i.Geometry_Type;var u=n(0);e.Operation=u.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={Zero:1e-5,PI:Math.PI,PI2:2*Math.PI}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=n(0),i=function(){function t(t,e){this.v0=new r.default(t.x,t.y),this.v1=new r.default(e.x,e.y)}return t.prototype.getDirVector=function(){var t=this.v1.x-this.v0.x,e=this.v1.y-this.v0.y;return new r.default(t,e)},t.prototype.getDirection=function(){return this.getDirVector().normalize()},t.prototype.getLineLength=function(){return this.getDirVector().getModelLength()},t.prototype.getBBox=function(){},t.getPedalPointOfLine=function(t,e,n){var i=new r.default(t.x-e.x,t.y-e.y),u=new r.default(n.x-e.x,n.y-e.y),s=o.default.getDotMultiply(i,u)/u.getModelLength();return new r.default(e.x,e.y).add(u.normalize().scale(s))},t.getDistanceOfPtToLine=function(t,e,n){var i=new r.default(t.x-e.x,t.y-e.y),u=new r.default(n.x-e.x,n.y-e.y),s=o.default.getCrossMultiply(i,u);return Math.abs(s/u.getModelLength())},t.isPointAtLine=function(t,e){},t.isParalled=function(t,e){var n=t.getDirection(),r=e.getDirection(),i=o.default.getCrossMultiply(n,r);return o.default.isZero(i)},t.isCollinear=function(e,n){var r=e.getDirection(),i=new t(e.v0,n.v0).getDirection(),u=o.default.getCrossMultiply(r,i);return this.isParalled(e,n)&&o.default.isZero(u)},t.isInsersect=function(t,e){return!this.isParalled(t,e)},t.getInsersectPt=function(t,e){if(this.isParalled(t,e))return this.isCollinear(t,e)?void console.warn("These lines is collinear"):void console.warn("These lines is paralled");var n=t.getDirVector(),i=e.getDirVector(),u=new r.default(e.v0.x-t.v0.x,e.v0.y-t.v0.y),s=new r.default(e.v1.x-t.v0.x,e.v1.y-t.v0.y),a=Math.abs(o.default.getCrossMultiply(n,u)),l=Math.abs(o.default.getCrossMultiply(n,s)),f=0;return f=this.isInsersectOfSegment(t,e)?a/(a+l):a/(a-l),e.v0.clone().add(i.clone().scale(f))},t.isInsersectOfSegment=function(t,e){var n=t.getDirVector(),o=e.getDirVector(),i=new r.default(e.v0.x-t.v0.x,e.v0.y-t.v0.y),u=new r.default(e.v1.x-t.v0.x,e.v1.y-t.v0.y),s=new r.default(t.v0.x-e.v0.x,t.v0.y-e.v0.y),a=new r.default(t.v1.x-e.v0.x,t.v1.y-e.v0.y);return this.isBothSide(n,i,u)&&this.isBothSide(o,s,a)},t.isBothSide=function(t,e,n){return o.default.getCrossMultiply(t,e)*o.default.getCrossMultiply(t,n)<=0},t}();e.default=i},function(t,e,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.VECTOR=0]="VECTOR",t[t.LINE=1]="LINE",t[t.BOX=2]="BOX"}(r||(r={})),e.Geometry_Type=r}])});