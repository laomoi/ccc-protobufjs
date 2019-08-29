/*
merge long.js, bytebuffer.js,protobuf.js	
*/
	
/*long.js start===========*/
	
!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?exports.Long=i():t.Long=i()}("undefined"!=typeof self?self:this,function(){return function(t){function i(h){if(n[h])return n[h].exports;var e=n[h]={i:h,l:!1,exports:{}};return t[h].call(e.exports,e,e.exports,i),e.l=!0,e.exports}var n={};return i.m=t,i.c=n,i.d=function(t,n,h){i.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:h})},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="",i(i.s=0)}([function(t,i){function n(t,i,n){this.low=0|t,this.high=0|i,this.unsigned=!!n}function h(t){return!0===(t&&t.__isLong__)}function e(t,i){var n,h,e;return i?(t>>>=0,(e=0<=t&&t<256)&&(h=l[t])?h:(n=r(t,(0|t)<0?-1:0,!0),e&&(l[t]=n),n)):(t|=0,(e=-128<=t&&t<128)&&(h=f[t])?h:(n=r(t,t<0?-1:0,!1),e&&(f[t]=n),n))}function s(t,i){if(isNaN(t))return i?p:m;if(i){if(t<0)return p;if(t>=c)return q}else{if(t<=-w)return _;if(t+1>=w)return E}return t<0?s(-t,i).neg():r(t%d|0,t/d|0,i)}function r(t,i,h){return new n(t,i,h)}function o(t,i,n){if(0===t.length)throw Error("empty string");if("NaN"===t||"Infinity"===t||"+Infinity"===t||"-Infinity"===t)return m;if("number"==typeof i?(n=i,i=!1):i=!!i,(n=n||10)<2||36<n)throw RangeError("radix");var h;if((h=t.indexOf("-"))>0)throw Error("interior hyphen");if(0===h)return o(t.substring(1),i,n).neg();for(var e=s(a(n,8)),r=m,u=0;u<t.length;u+=8){var g=Math.min(8,t.length-u),f=parseInt(t.substring(u,u+g),n);if(g<8){var l=s(a(n,g));r=r.mul(l).add(s(f))}else r=r.mul(e),r=r.add(s(f))}return r.unsigned=i,r}function u(t,i){return"number"==typeof t?s(t,i):"string"==typeof t?o(t,i):r(t.low,t.high,"boolean"==typeof i?i:t.unsigned)}t.exports=n;var g=null;try{g=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(t){}n.prototype.__isLong__,Object.defineProperty(n.prototype,"__isLong__",{value:!0}),n.isLong=h;var f={},l={};n.fromInt=e,n.fromNumber=s,n.fromBits=r;var a=Math.pow;n.fromString=o,n.fromValue=u;var d=4294967296,c=d*d,w=c/2,v=e(1<<24),m=e(0);n.ZERO=m;var p=e(0,!0);n.UZERO=p;var y=e(1);n.ONE=y;var b=e(1,!0);n.UONE=b;var N=e(-1);n.NEG_ONE=N;var E=r(-1,2147483647,!1);n.MAX_VALUE=E;var q=r(-1,-1,!0);n.MAX_UNSIGNED_VALUE=q;var _=r(0,-2147483648,!1);n.MIN_VALUE=_;var B=n.prototype;B.toInt=function(){return this.unsigned?this.low>>>0:this.low},B.toNumber=function(){return this.unsigned?(this.high>>>0)*d+(this.low>>>0):this.high*d+(this.low>>>0)},B.toString=function(t){if((t=t||10)<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(this.eq(_)){var i=s(t),n=this.div(i),h=n.mul(i).sub(this);return n.toString(t)+h.toInt().toString(t)}return"-"+this.neg().toString(t)}for(var e=s(a(t,6),this.unsigned),r=this,o="";;){var u=r.div(e),g=r.sub(u.mul(e)).toInt()>>>0,f=g.toString(t);if(r=u,r.isZero())return f+o;for(;f.length<6;)f="0"+f;o=""+f+o}},B.getHighBits=function(){return this.high},B.getHighBitsUnsigned=function(){return this.high>>>0},B.getLowBits=function(){return this.low},B.getLowBitsUnsigned=function(){return this.low>>>0},B.getNumBitsAbs=function(){if(this.isNegative())return this.eq(_)?64:this.neg().getNumBitsAbs();for(var t=0!=this.high?this.high:this.low,i=31;i>0&&0==(t&1<<i);i--);return 0!=this.high?i+33:i+1},B.isZero=function(){return 0===this.high&&0===this.low},B.eqz=B.isZero,B.isNegative=function(){return!this.unsigned&&this.high<0},B.isPositive=function(){return this.unsigned||this.high>=0},B.isOdd=function(){return 1==(1&this.low)},B.isEven=function(){return 0==(1&this.low)},B.equals=function(t){return h(t)||(t=u(t)),(this.unsigned===t.unsigned||this.high>>>31!=1||t.high>>>31!=1)&&(this.high===t.high&&this.low===t.low)},B.eq=B.equals,B.notEquals=function(t){return!this.eq(t)},B.neq=B.notEquals,B.ne=B.notEquals,B.lessThan=function(t){return this.comp(t)<0},B.lt=B.lessThan,B.lessThanOrEqual=function(t){return this.comp(t)<=0},B.lte=B.lessThanOrEqual,B.le=B.lessThanOrEqual,B.greaterThan=function(t){return this.comp(t)>0},B.gt=B.greaterThan,B.greaterThanOrEqual=function(t){return this.comp(t)>=0},B.gte=B.greaterThanOrEqual,B.ge=B.greaterThanOrEqual,B.compare=function(t){if(h(t)||(t=u(t)),this.eq(t))return 0;var i=this.isNegative(),n=t.isNegative();return i&&!n?-1:!i&&n?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1},B.comp=B.compare,B.negate=function(){return!this.unsigned&&this.eq(_)?_:this.not().add(y)},B.neg=B.negate,B.add=function(t){h(t)||(t=u(t));var i=this.high>>>16,n=65535&this.high,e=this.low>>>16,s=65535&this.low,o=t.high>>>16,g=65535&t.high,f=t.low>>>16,l=65535&t.low,a=0,d=0,c=0,w=0;return w+=s+l,c+=w>>>16,w&=65535,c+=e+f,d+=c>>>16,c&=65535,d+=n+g,a+=d>>>16,d&=65535,a+=i+o,a&=65535,r(c<<16|w,a<<16|d,this.unsigned)},B.subtract=function(t){return h(t)||(t=u(t)),this.add(t.neg())},B.sub=B.subtract,B.multiply=function(t){if(this.isZero())return m;if(h(t)||(t=u(t)),g){return r(g.mul(this.low,this.high,t.low,t.high),g.get_high(),this.unsigned)}if(t.isZero())return m;if(this.eq(_))return t.isOdd()?_:m;if(t.eq(_))return this.isOdd()?_:m;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(v)&&t.lt(v))return s(this.toNumber()*t.toNumber(),this.unsigned);var i=this.high>>>16,n=65535&this.high,e=this.low>>>16,o=65535&this.low,f=t.high>>>16,l=65535&t.high,a=t.low>>>16,d=65535&t.low,c=0,w=0,p=0,y=0;return y+=o*d,p+=y>>>16,y&=65535,p+=e*d,w+=p>>>16,p&=65535,p+=o*a,w+=p>>>16,p&=65535,w+=n*d,c+=w>>>16,w&=65535,w+=e*a,c+=w>>>16,w&=65535,w+=o*l,c+=w>>>16,w&=65535,c+=i*d+n*a+e*l+o*f,c&=65535,r(p<<16|y,c<<16|w,this.unsigned)},B.mul=B.multiply,B.divide=function(t){if(h(t)||(t=u(t)),t.isZero())throw Error("division by zero");if(g){if(!this.unsigned&&-2147483648===this.high&&-1===t.low&&-1===t.high)return this;return r((this.unsigned?g.div_u:g.div_s)(this.low,this.high,t.low,t.high),g.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?p:m;var i,n,e;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return p;if(t.gt(this.shru(1)))return b;e=p}else{if(this.eq(_)){if(t.eq(y)||t.eq(N))return _;if(t.eq(_))return y;return i=this.shr(1).div(t).shl(1),i.eq(m)?t.isNegative()?y:N:(n=this.sub(t.mul(i)),e=i.add(n.div(t)))}if(t.eq(_))return this.unsigned?p:m;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();e=m}for(n=this;n.gte(t);){i=Math.max(1,Math.floor(n.toNumber()/t.toNumber()));for(var o=Math.ceil(Math.log(i)/Math.LN2),f=o<=48?1:a(2,o-48),l=s(i),d=l.mul(t);d.isNegative()||d.gt(n);)i-=f,l=s(i,this.unsigned),d=l.mul(t);l.isZero()&&(l=y),e=e.add(l),n=n.sub(d)}return e},B.div=B.divide,B.modulo=function(t){if(h(t)||(t=u(t)),g){return r((this.unsigned?g.rem_u:g.rem_s)(this.low,this.high,t.low,t.high),g.get_high(),this.unsigned)}return this.sub(this.div(t).mul(t))},B.mod=B.modulo,B.rem=B.modulo,B.not=function(){return r(~this.low,~this.high,this.unsigned)},B.and=function(t){return h(t)||(t=u(t)),r(this.low&t.low,this.high&t.high,this.unsigned)},B.or=function(t){return h(t)||(t=u(t)),r(this.low|t.low,this.high|t.high,this.unsigned)},B.xor=function(t){return h(t)||(t=u(t)),r(this.low^t.low,this.high^t.high,this.unsigned)},B.shiftLeft=function(t){return h(t)&&(t=t.toInt()),0==(t&=63)?this:t<32?r(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):r(0,this.low<<t-32,this.unsigned)},B.shl=B.shiftLeft,B.shiftRight=function(t){return h(t)&&(t=t.toInt()),0==(t&=63)?this:t<32?r(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):r(this.high>>t-32,this.high>=0?0:-1,this.unsigned)},B.shr=B.shiftRight,B.shiftRightUnsigned=function(t){return h(t)&&(t=t.toInt()),0==(t&=63)?this:t<32?r(this.low>>>t|this.high<<32-t,this.high>>>t,this.unsigned):32===t?r(this.high,0,this.unsigned):r(this.high>>>t-32,0,this.unsigned)},B.shru=B.shiftRightUnsigned,B.shr_u=B.shiftRightUnsigned,B.rotateLeft=function(t){var i;return h(t)&&(t=t.toInt()),0==(t&=63)?this:32===t?r(this.high,this.low,this.unsigned):t<32?(i=32-t,r(this.low<<t|this.high>>>i,this.high<<t|this.low>>>i,this.unsigned)):(t-=32,i=32-t,r(this.high<<t|this.low>>>i,this.low<<t|this.high>>>i,this.unsigned))},B.rotl=B.rotateLeft,B.rotateRight=function(t){var i;return h(t)&&(t=t.toInt()),0==(t&=63)?this:32===t?r(this.high,this.low,this.unsigned):t<32?(i=32-t,r(this.high<<i|this.low>>>t,this.low<<i|this.high>>>t,this.unsigned)):(t-=32,i=32-t,r(this.low<<i|this.high>>>t,this.high<<i|this.low>>>t,this.unsigned))},B.rotr=B.rotateRight,B.toSigned=function(){return this.unsigned?r(this.low,this.high,!1):this},B.toUnsigned=function(){return this.unsigned?this:r(this.low,this.high,!0)},B.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()},B.toBytesLE=function(){var t=this.high,i=this.low;return[255&i,i>>>8&255,i>>>16&255,i>>>24,255&t,t>>>8&255,t>>>16&255,t>>>24]},B.toBytesBE=function(){var t=this.high,i=this.low;return[t>>>24,t>>>16&255,t>>>8&255,255&t,i>>>24,i>>>16&255,i>>>8&255,255&i]},n.fromBytes=function(t,i,h){return h?n.fromBytesLE(t,i):n.fromBytesBE(t,i)},n.fromBytesLE=function(t,i){return new n(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,i)},n.fromBytesBE=function(t,i){return new n(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],i)}}])});
//# sourceMappingURL=long.js.map
	
	
	
	
/*long.js end===========*/
	
/*
 Copyright 2013-2014 Daniel Wirtz <dcode@dcode.io>

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
    var ByteBuffer = function(capacity, littleEndian, noAssert) {
        if (typeof capacity === 'undefined')
            capacity = ByteBuffer.DEFAULT_CAPACITY;
        if (typeof littleEndian === 'undefined')
            littleEndian = ByteBuffer.DEFAULT_ENDIAN;
        if (typeof noAssert === 'undefined')
            noAssert = ByteBuffer.DEFAULT_NOASSERT;
        if (!noAssert) {
            capacity = capacity | 0;
            if (capacity < 0)
                throw RangeError("Illegal capacity");
            littleEndian = !!littleEndian;
            noAssert = !!noAssert;
        }

        /**
         * Backing ArrayBuffer.
         * @type {!ArrayBuffer}
         * @expose
         */
        this.buffer = capacity === 0 ? EMPTY_BUFFER : new ArrayBuffer(capacity);

        /**
         * Uint8Array utilized to manipulate the backing buffer. Becomes `null` if the backing buffer has a capacity of `0`.
         * @type {?Uint8Array}
         * @expose
         */
        this.view = capacity === 0 ? null : new Uint8Array(this.buffer);

        /**
         * Absolute read/write offset.
         * @type {number}
         * @expose
         * @see ByteBuffer#flip
         * @see ByteBuffer#clear
         */
        this.offset = 0;

        /**
         * Marked offset.
         * @type {number}
         * @expose
         * @see ByteBuffer#mark
         * @see ByteBuffer#reset
         */
        this.markedOffset = -1;

        /**
         * Absolute limit of the contained data. Set to the backing buffer's capacity upon allocation.
         * @type {number}
         * @expose
         * @see ByteBuffer#flip
         * @see ByteBuffer#clear
         */
        this.limit = capacity;

        /**
         * Whether to use little endian byte order, defaults to `false` for big endian.
         * @type {boolean}
         * @expose
         */
        this.littleEndian = littleEndian;

        /**
         * Whether to skip assertions of offsets and values, defaults to `false`.
         * @type {boolean}
         * @expose
         */
        this.noAssert = noAssert;
    };

    /**
     * ByteBuffer version.
     * @type {string}
     * @const
     * @expose
     */
    ByteBuffer.VERSION = "5.0.1";

    /**
     * Little endian constant that can be used instead of its boolean value. Evaluates to `true`.
     * @type {boolean}
     * @const
     * @expose
     */
    ByteBuffer.LITTLE_ENDIAN = true;

    /**
     * Big endian constant that can be used instead of its boolean value. Evaluates to `false`.
     * @type {boolean}
     * @const
     * @expose
     */
    ByteBuffer.BIG_ENDIAN = false;

    /**
     * Default initial capacity of `16`.
     * @type {number}
     * @expose
     */
    ByteBuffer.DEFAULT_CAPACITY = 16;

    /**
     * Default endianess of `false` for big endian.
     * @type {boolean}
     * @expose
     */
    ByteBuffer.DEFAULT_ENDIAN = ByteBuffer.BIG_ENDIAN;

    /**
     * Default no assertions flag of `false`.
     * @type {boolean}
     * @expose
     */
    ByteBuffer.DEFAULT_NOASSERT = false;

    /**
     * A `Long` class for representing a 64-bit two's-complement integer value. May be `null` if Long.js has not been loaded
     *  and int64 support is not available.
     * @type {?Long}
     * @const
     * @see https://github.com/dcodeIO/long.js
     * @expose
     */
    ByteBuffer.Long = Long || null;

    /**
     * @alias ByteBuffer.prototype
     * @inner
     */
    var ByteBufferPrototype = ByteBuffer.prototype;

    /**
     * An indicator used to reliably determine if an object is a ByteBuffer or not.
     * @type {boolean}
     * @const
     * @expose
     * @private
     */
    ByteBufferPrototype.__isByteBuffer__;

    Object.defineProperty(ByteBufferPrototype, "__isByteBuffer__", {
        value: true,
        enumerable: false,
        configurable: false
    });

    // helpers

    /**
     * @type {!ArrayBuffer}
     * @inner
     */
    var EMPTY_BUFFER = new ArrayBuffer(0);

    /**
     * String.fromCharCode reference for compile-time renaming.
     * @type {function(...number):string}
     * @inner
     */
    var stringFromCharCode = String.fromCharCode;

    /**
     * Creates a source function for a string.
     * @param {string} s String to read from
     * @returns {function():number|null} Source function returning the next char code respectively `null` if there are
     *  no more characters left.
     * @throws {TypeError} If the argument is invalid
     * @inner
     */
    function stringSource(s) {
        var i=0; return function() {
            return i < s.length ? s.charCodeAt(i++) : null;
        };
    }

    /**
     * Creates a destination function for a string.
     * @returns {function(number=):undefined|string} Destination function successively called with the next char code.
     *  Returns the final string when called without arguments.
     * @inner
     */
    function stringDestination() {
        var cs = [], ps = []; return function() {
            if (arguments.length === 0)
                return ps.join('')+stringFromCharCode.apply(String, cs);
            if (cs.length + arguments.length > 1024)
                ps.push(stringFromCharCode.apply(String, cs)),
                    cs.length = 0;
            Array.prototype.push.apply(cs, arguments);
        };
    }

    /**
     * Gets the accessor type.
     * @returns {Function} `Buffer` under node.js, `Uint8Array` respectively `DataView` in the browser (classes)
     * @expose
     */
    ByteBuffer.accessor = function() {
        return Uint8Array;
    };
    /**
     * Allocates a new ByteBuffer backed by a buffer of the specified capacity.
     * @param {number=} capacity Initial capacity. Defaults to {@link ByteBuffer.DEFAULT_CAPACITY}.
     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
     * @returns {!ByteBuffer}
     * @expose
     */
    ByteBuffer.allocate = function(capacity, littleEndian, noAssert) {
        return new ByteBuffer(capacity, littleEndian, noAssert);
    };

    /**
     * Concatenates multiple ByteBuffers into one.
     * @param {!Array.<!ByteBuffer|!ArrayBuffer|!Uint8Array|string>} buffers Buffers to concatenate
     * @param {(string|boolean)=} encoding String encoding if `buffers` contains a string ("base64", "hex", "binary",
     *  defaults to "utf8")
     * @param {boolean=} littleEndian Whether to use little or big endian byte order for the resulting ByteBuffer. Defaults
     *  to {@link ByteBuffer.DEFAULT_ENDIAN}.
     * @param {boolean=} noAssert Whether to skip assertions of offsets and values for the resulting ByteBuffer. Defaults to
     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
     * @returns {!ByteBuffer} Concatenated ByteBuffer
     * @expose
     */
    ByteBuffer.concat = function(buffers, encoding, littleEndian, noAssert) {
        if (typeof encoding === 'boolean' || typeof encoding !== 'string') {
            noAssert = littleEndian;
            littleEndian = encoding;
            encoding = undefined;
        }
        var capacity = 0;
        for (var i=0, k=buffers.length, length; i<k; ++i) {
            if (!ByteBuffer.isByteBuffer(buffers[i]))
                buffers[i] = ByteBuffer.wrap(buffers[i], encoding);
            length = buffers[i].limit - buffers[i].offset;
            if (length > 0) capacity += length;
        }
        if (capacity === 0)
            return new ByteBuffer(0, littleEndian, noAssert);
        var bb = new ByteBuffer(capacity, littleEndian, noAssert),
            bi;
        i=0; while (i<k) {
            bi = buffers[i++];
            length = bi.limit - bi.offset;
            if (length <= 0) continue;
            bb.view.set(bi.view.subarray(bi.offset, bi.limit), bb.offset);
            bb.offset += length;
        }
        bb.limit = bb.offset;
        bb.offset = 0;
        return bb;
    };

    /**
     * Tests if the specified type is a ByteBuffer.
     * @param {*} bb ByteBuffer to test
     * @returns {boolean} `true` if it is a ByteBuffer, otherwise `false`
     * @expose
     */
    ByteBuffer.isByteBuffer = function(bb) {
        return (bb && bb["__isByteBuffer__"]) === true;
    };
    /**
     * Gets the backing buffer type.
     * @returns {Function} `Buffer` under node.js, `ArrayBuffer` in the browser (classes)
     * @expose
     */
    ByteBuffer.type = function() {
        return ArrayBuffer;
    };
    /**
     * Wraps a buffer or a string. Sets the allocated ByteBuffer's {@link ByteBuffer#offset} to `0` and its
     *  {@link ByteBuffer#limit} to the length of the wrapped data.
     * @param {!ByteBuffer|!ArrayBuffer|!Uint8Array|string|!Array.<number>} buffer Anything that can be wrapped
     * @param {(string|boolean)=} encoding String encoding if `buffer` is a string ("base64", "hex", "binary", defaults to
     *  "utf8")
     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
     * @returns {!ByteBuffer} A ByteBuffer wrapping `buffer`
     * @expose
     */
    ByteBuffer.wrap = function(buffer, encoding, littleEndian, noAssert) {
        if (typeof encoding !== 'string') {
            noAssert = littleEndian;
            littleEndian = encoding;
            encoding = undefined;
        }
        if (typeof buffer === 'string') {
            if (typeof encoding === 'undefined')
                encoding = "utf8";
            switch (encoding) {
                case "base64":
                    return ByteBuffer.fromBase64(buffer, littleEndian);
                case "hex":
                    return ByteBuffer.fromHex(buffer, littleEndian);
                case "binary":
                    return ByteBuffer.fromBinary(buffer, littleEndian);
                case "utf8":
                    return ByteBuffer.fromUTF8(buffer, littleEndian);
                case "debug":
                    return ByteBuffer.fromDebug(buffer, littleEndian);
                default:
                    throw Error("Unsupported encoding: "+encoding);
            }
        }
        if (buffer === null || typeof buffer !== 'object')
            throw TypeError("Illegal buffer");
        var bb;
        if (ByteBuffer.isByteBuffer(buffer)) {
            bb = ByteBufferPrototype.clone.call(buffer);
            bb.markedOffset = -1;
            return bb;
        }
        if (buffer instanceof Uint8Array) { // Extract ArrayBuffer from Uint8Array
            bb = new ByteBuffer(0, littleEndian, noAssert);
            if (buffer.length > 0) { // Avoid references to more than one EMPTY_BUFFER
                bb.buffer = buffer.buffer;
                bb.offset = buffer.byteOffset;
                bb.limit = buffer.byteOffset + buffer.byteLength;
                bb.view = new Uint8Array(buffer.buffer);
            }
        } else if (buffer instanceof ArrayBuffer) { // Reuse ArrayBuffer
            bb = new ByteBuffer(0, littleEndian, noAssert);
            if (buffer.byteLength > 0) {
                bb.buffer = buffer;
                bb.offset = 0;
                bb.limit = buffer.byteLength;
                bb.view = buffer.byteLength > 0 ? new Uint8Array(buffer) : null;
            }
        } else if (Object.prototype.toString.call(buffer) === "[object Array]") { // Create from octets
            bb = new ByteBuffer(buffer.length, littleEndian, noAssert);
            bb.limit = buffer.length;
            for (var i=0; i<buffer.length; ++i)
                bb.view[i] = buffer[i];
        } else
            throw TypeError("Illegal buffer"); // Otherwise fail
        return bb;
    };

    /**
     * Writes the array as a bitset.
     * @param {Array<boolean>} value Array of booleans to write
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `length` if omitted.
     * @returns {!ByteBuffer}
     * @expose
     */
    ByteBufferPrototype.writeBitSet = function(value, offset) {
      var relative = typeof offset === 'undefined';
      if (relative) offset = this.offset;
      if (!this.noAssert) {
        if (!(value instanceof Array))
          throw TypeError("Illegal BitSet: Not an array");
        if (typeof offset !== 'number' || offset % 1 !== 0)
            throw TypeError("Illegal offset: "+offset+" (not an integer)");
        offset >>>= 0;
        if (offset < 0 || offset + 0 > this.buffer.byteLength)
            throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
      }

      var start = offset,
          bits = value.length,
          bytes = (bits >> 3),
          bit = 0,
          k;

      offset += this.writeVarint32(bits,offset);

      while(bytes--) {
        k = (!!value[bit++] & 1) |
            ((!!value[bit++] & 1) << 1) |
            ((!!value[bit++] & 1) << 2) |
            ((!!value[bit++] & 1) << 3) |
            ((!!value[bit++] & 1) << 4) |
            ((!!value[bit++] & 1) << 5) |
            ((!!value[bit++] & 1) << 6) |
            ((!!value[bit++] & 1) << 7);
        this.writeByte(k,offset++);
      }

      if(bit < bits) {
        var m = 0; k = 0;
        while(bit < bits) k = k | ((!!value[bit++] & 1) << (m++));
        this.writeByte(k,offset++);
      }

      if (relative) {
        this.offset = offset;
        return this;
      }
      return offset - start;
    }

    /**
     * Reads a BitSet as an array of booleans.
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `length` if omitted.
     * @returns {Array<boolean>
     * @expose
     */
    ByteBufferPrototype.readBitSet = function(offset) {
      var relative = typeof offset === 'undefined';
      if (relative) offset = this.offset;

      var ret = this.readVarint32(offset),
          bits = ret.value,
          bytes = (bits >> 3),
          bit = 0,
          value = [],
          k;

      offset += ret.length;

      while(bytes--) {
        k = this.readByte(offset++);
        value[bit++] = !!(k & 0x01);
        value[bit++] = !!(k & 0x02);
        value[bit++] = !!(k & 0x04);
        value[bit++] = !!(k & 0x08);
        value[bit++] = !!(k & 0x10);
        value[bit++] = !!(k & 0x20);
        value[bit++] = !!(k & 0x40);
        value[bit++] = !!(k & 0x80);
      }

      if(bit < bits) {
        var m = 0;
        k = this.readByte(offset++);
        while(bit < bits) value[bit++] = !!((k >> (m++)) & 1);
      }

      if (relative) {
        this.offset = offset;
      }
      return value;
    }
    /**
     * Reads the specified number of bytes.
     * @param {number} length Number of bytes to read
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `length` if omitted.
     * @returns {!ByteBuffer}
     * @expose
     */
    ByteBufferPrototype.readBytes = function(length, offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + length > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+length+") <= "+this.buffer.byteLength);
        }
        var slice = this.slice(offset, offset + length);
        if (relative) this.offset += length;
        return slice;
    };


    // types/ints/int8

    /**
     * Writes an 8bit signed integer.
     * @param {number} value Value to write
     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
     * @returns {!ByteBuffer} this
     * @expose
     */
    ByteBufferPrototype.writeInt8 = function(value, offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof value !== 'number' || value % 1 !== 0)
                throw TypeError("Illegal value: "+value+" (not an integer)");
            value |= 0;
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
        }
        offset += 1;
        var capacity0 = this.buffer.byteLength;
        if (offset > capacity0)
            this.resize((capacity0 *= 2) > offset ? capacity0 : offset);
        offset -= 1;
        this.view[offset] = value;
        if (relative) this.offset += 1;
        return this;
    };

    /**
     * Writes an 8bit signed integer. This is an alias of {@link ByteBuffer#writeInt8}.
     * @function
     * @param {number} value Value to write
     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
     * @returns {!ByteBuffer} this
     * @expose
     */
    ByteBufferPrototype.writeByte = ByteBufferPrototype.writeInt8;

    /**
     * Reads an 8bit signed integer.
     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
     * @returns {number} Value read
     * @expose
     */
    ByteBufferPrototype.readInt8 = function(offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 1 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
        }
        var value = this.view[offset];
        if ((value & 0x80) === 0x80) value = -(0xFF - value + 1); // Cast to signed
        if (relative) this.offset += 1;
        return value;
    };

    /**
     * Reads an 8bit signed integer. This is an alias of {@link ByteBuffer#readInt8}.
     * @function
     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
     * @returns {number} Value read
     * @expose
     */
    ByteBufferPrototype.readByte = ByteBufferPrototype.readInt8;

    /**
     * Writes an 8bit unsigned integer.
     * @param {number} value Value to write
     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
     * @returns {!ByteBuffer} this
     * @expose
     */
    ByteBufferPrototype.writeUint8 = function(value, offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof value !== 'number' || value % 1 !== 0)
                throw TypeError("Illegal value: "+value+" (not an integer)");
            value >>>= 0;
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
        }
        offset += 1;
        var capacity1 = this.buffer.byteLength;
        if (offset > capacity1)
            this.resize((capacity1 *= 2) > offset ? capacity1 : offset);
        offset -= 1;
        this.view[offset] = value;
        if (relative) this.offset += 1;
        return this;
    };

    /**
     * Writes an 8bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint8}.
     * @function
     * @param {number} value Value to write
     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
     * @returns {!ByteBuffer} this
     * @expose
     */
    ByteBufferPrototype.writeUInt8 = ByteBufferPrototype.writeUint8;

    /**
     * Reads an 8bit unsigned integer.
     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
     * @returns {number} Value read
     * @expose
     */
    ByteBufferPrototype.readUint8 = function(offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 1 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
        }
        var value = this.view[offset];
        if (relative) this.offset += 1;
        return value;
    };

    /**
     * Reads an 8bit unsigned integer. This is an alias of {@link ByteBuffer#readUint8}.
     * @function
     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
     * @returns {number} Value read
     * @expose
     */
    ByteBufferPrototype.readUInt8 = ByteBufferPrototype.readUint8;

    // types/ints/int16

    /**
     * Writes a 16bit signed integer.
     * @param {number} value Value to write
     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
     * @throws {TypeError} If `offset` or `value` is not a valid number
     * @throws {RangeError} If `offset` is out of bounds
     * @expose
     */
    ByteBufferPrototype.writeInt16 = function(value, offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof value !== 'number' || value % 1 !== 0)
                throw TypeError("Illegal value: "+value+" (not an integer)");
            value |= 0;
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
        }
        offset += 2;
        var capacity2 = this.buffer.byteLength;
        if (offset > capacity2)
            this.resize((capacity2 *= 2) > offset ? capacity2 : offset);
        offset -= 2;
        if (this.littleEndian) {
            this.view[offset+1] = (value & 0xFF00) >>> 8;
            this.view[offset  ] =  value & 0x00FF;
        } else {
            this.view[offset]   = (value & 0xFF00) >>> 8;
            this.view[offset+1] =  value & 0x00FF;
        }
        if (relative) this.offset += 2;
        return this;
    };

    /**
     * Writes a 16bit signed integer. This is an alias of {@link ByteBuffer#writeInt16}.
     * @function
     * @param {number} value Value to write
     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
     * @throws {TypeError} If `offset` or `value` is not a valid number
     * @throws {RangeError} If `offset` is out of bounds
     * @expose
     */
    ByteBufferPrototype.writeShort = ByteBufferPrototype.writeInt16;

    /**
     * Reads a 16bit signed integer.
     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
     * @returns {number} Value read
     * @throws {TypeError} If `offset` is not a valid number
     * @throws {RangeError} If `offset` is out of bounds
     * @expose
     */
    ByteBufferPrototype.readInt16 = function(offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 2 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+2+") <= "+this.buffer.byteLength);
        }
        var value = 0;
        if (this.littleEndian) {
            value  = this.view[offset  ];
            value |= this.view[offset+1] << 8;
        } else {
            value  = this.view[offset  ] << 8;
            value |= this.view[offset+1];
        }
        if ((value & 0x8000) === 0x8000) value = -(0xFFFF - value + 1); // Cast to signed
        if (relative) this.offset += 2;
        return value;
    };

    /**
     * Reads a 16bit signed integer. This is an alias of {@link ByteBuffer#readInt16}.
     * @function
     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
     * @returns {number} Value read
     * @throws {TypeError} If `offset` is not a valid number
     * @throws {RangeError} If `offset` is out of bounds
     * @expose
     */
    ByteBufferPrototype.readShort = ByteBufferPrototype.readInt16;

    /**
     * Writes a 16bit unsigned integer.
     * @param {number} value Value to write
     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
     * @throws {TypeError} If `offset` or `value` is not a valid number
     * @throws {RangeError} If `offset` is out of bounds
     * @expose
     */
    ByteBufferPrototype.writeUint16 = function(value, offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof value !== 'number' || value % 1 !== 0)
                throw TypeError("Illegal value: "+value+" (not an integer)");
            value >>>= 0;
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
        }
        offset += 2;
        var capacity3 = this.buffer.byteLength;
        if (offset > capacity3)
            this.resize((capacity3 *= 2) > offset ? capacity3 : offset);
        offset -= 2;
        if (this.littleEndian) {
            this.view[offset+1] = (value & 0xFF00) >>> 8;
            this.view[offset  ] =  value & 0x00FF;
        } else {
            this.view[offset]   = (value & 0xFF00) >>> 8;
            this.view[offset+1] =  value & 0x00FF;
        }
        if (relative) this.offset += 2;
        return this;
    };

    /**
     * Writes a 16bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint16}.
     * @function
     * @param {number} value Value to write
     * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
     * @throws {TypeError} If `offset` or `value` is not a valid number
     * @throws {RangeError} If `offset` is out of bounds
     * @expose
     */
    ByteBufferPrototype.writeUInt16 = ByteBufferPrototype.writeUint16;

    /**
     * Reads a 16bit unsigned integer.
     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
     * @returns {number} Value read
     * @throws {TypeError} If `offset` is not a valid number
     * @throws {RangeError} If `offset` is out of bounds
     * @expose
     */
    ByteBufferPrototype.readUint16 = function(offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 2 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+2+") <= "+this.buffer.byteLength);
        }
        var value = 0;
        if (this.littleEndian) {
            value  = this.view[offset  ];
            value |= this.view[offset+1] << 8;
        } else {
            value  = this.view[offset  ] << 8;
            value |= this.view[offset+1];
        }
        if (relative) this.offset += 2;
        return value;
    };

    /**
     * Reads a 16bit unsigned integer. This is an alias of {@link ByteBuffer#readUint16}.
     * @function
     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
     * @returns {number} Value read
     * @throws {TypeError} If `offset` is not a valid number
     * @throws {RangeError} If `offset` is out of bounds
     * @expose
     */
    ByteBufferPrototype.readUInt16 = ByteBufferPrototype.readUint16;

    // types/ints/int32

    /**
     * Writes a 32bit signed integer.
     * @param {number} value Value to write
     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
     * @expose
     */
    ByteBufferPrototype.writeInt32 = function(value, offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof value !== 'number' || value % 1 !== 0)
                throw TypeError("Illegal value: "+value+" (not an integer)");
            value |= 0;
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
        }
        offset += 4;
        var capacity4 = this.buffer.byteLength;
        if (offset > capacity4)
            this.resize((capacity4 *= 2) > offset ? capacity4 : offset);
        offset -= 4;
        if (this.littleEndian) {
            this.view[offset+3] = (value >>> 24) & 0xFF;
            this.view[offset+2] = (value >>> 16) & 0xFF;
            this.view[offset+1] = (value >>>  8) & 0xFF;
            this.view[offset  ] =  value         & 0xFF;
        } else {
            this.view[offset  ] = (value >>> 24) & 0xFF;
            this.view[offset+1] = (value >>> 16) & 0xFF;
            this.view[offset+2] = (value >>>  8) & 0xFF;
            this.view[offset+3] =  value         & 0xFF;
        }
        if (relative) this.offset += 4;
        return this;
    };

    /**
     * Writes a 32bit signed integer. This is an alias of {@link ByteBuffer#writeInt32}.
     * @param {number} value Value to write
     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
     * @expose
     */
    ByteBufferPrototype.writeInt = ByteBufferPrototype.writeInt32;

    /**
     * Reads a 32bit signed integer.
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
     * @returns {number} Value read
     * @expose
     */
    ByteBufferPrototype.readInt32 = function(offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 4 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+4+") <= "+this.buffer.byteLength);
        }
        var value = 0;
        if (this.littleEndian) {
            value  = this.view[offset+2] << 16;
            value |= this.view[offset+1] <<  8;
            value |= this.view[offset  ];
            value += this.view[offset+3] << 24 >>> 0;
        } else {
            value  = this.view[offset+1] << 16;
            value |= this.view[offset+2] <<  8;
            value |= this.view[offset+3];
            value += this.view[offset  ] << 24 >>> 0;
        }
        value |= 0; // Cast to signed
        if (relative) this.offset += 4;
        return value;
    };

    /**
     * Reads a 32bit signed integer. This is an alias of {@link ByteBuffer#readInt32}.
     * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `4` if omitted.
     * @returns {number} Value read
     * @expose
     */
    ByteBufferPrototype.readInt = ByteBufferPrototype.readInt32;

    /**
     * Writes a 32bit unsigned integer.
     * @param {number} value Value to write
     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
     * @expose
     */
    ByteBufferPrototype.writeUint32 = function(value, offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof value !== 'number' || value % 1 !== 0)
                throw TypeError("Illegal value: "+value+" (not an integer)");
            value >>>= 0;
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
        }
        offset += 4;
        var capacity5 = this.buffer.byteLength;
        if (offset > capacity5)
            this.resize((capacity5 *= 2) > offset ? capacity5 : offset);
        offset -= 4;
        if (this.littleEndian) {
            this.view[offset+3] = (value >>> 24) & 0xFF;
            this.view[offset+2] = (value >>> 16) & 0xFF;
            this.view[offset+1] = (value >>>  8) & 0xFF;
            this.view[offset  ] =  value         & 0xFF;
        } else {
            this.view[offset  ] = (value >>> 24) & 0xFF;
            this.view[offset+1] = (value >>> 16) & 0xFF;
            this.view[offset+2] = (value >>>  8) & 0xFF;
            this.view[offset+3] =  value         & 0xFF;
        }
        if (relative) this.offset += 4;
        return this;
    };

    /**
     * Writes a 32bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint32}.
     * @function
     * @param {number} value Value to write
     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
     * @expose
     */
    ByteBufferPrototype.writeUInt32 = ByteBufferPrototype.writeUint32;

    /**
     * Reads a 32bit unsigned integer.
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
     * @returns {number} Value read
     * @expose
     */
    ByteBufferPrototype.readUint32 = function(offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 4 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+4+") <= "+this.buffer.byteLength);
        }
        var value = 0;
        if (this.littleEndian) {
            value  = this.view[offset+2] << 16;
            value |= this.view[offset+1] <<  8;
            value |= this.view[offset  ];
            value += this.view[offset+3] << 24 >>> 0;
        } else {
            value  = this.view[offset+1] << 16;
            value |= this.view[offset+2] <<  8;
            value |= this.view[offset+3];
            value += this.view[offset  ] << 24 >>> 0;
        }
        if (relative) this.offset += 4;
        return value;
    };

    /**
     * Reads a 32bit unsigned integer. This is an alias of {@link ByteBuffer#readUint32}.
     * @function
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
     * @returns {number} Value read
     * @expose
     */
    ByteBufferPrototype.readUInt32 = ByteBufferPrototype.readUint32;

    // types/ints/int64

    if (Long) {

        /**
         * Writes a 64bit signed integer.
         * @param {number|!Long} value Value to write
         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.writeInt64 = function(value, offset) {
            var relative = typeof offset === 'undefined';
            if (relative) offset = this.offset;
            if (!this.noAssert) {
                if (typeof value === 'number')
                    value = Long.fromNumber(value);
                else if (typeof value === 'string')
                    value = Long.fromString(value);
                else if (!(value && value instanceof Long))
                    throw TypeError("Illegal value: "+value+" (not an integer or Long)");
                if (typeof offset !== 'number' || offset % 1 !== 0)
                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
                offset >>>= 0;
                if (offset < 0 || offset + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
            }
            if (typeof value === 'number')
                value = Long.fromNumber(value);
            else if (typeof value === 'string')
                value = Long.fromString(value);
            offset += 8;
            var capacity6 = this.buffer.byteLength;
            if (offset > capacity6)
                this.resize((capacity6 *= 2) > offset ? capacity6 : offset);
            offset -= 8;
            var lo = value.low,
                hi = value.high;
            if (this.littleEndian) {
                this.view[offset+3] = (lo >>> 24) & 0xFF;
                this.view[offset+2] = (lo >>> 16) & 0xFF;
                this.view[offset+1] = (lo >>>  8) & 0xFF;
                this.view[offset  ] =  lo         & 0xFF;
                offset += 4;
                this.view[offset+3] = (hi >>> 24) & 0xFF;
                this.view[offset+2] = (hi >>> 16) & 0xFF;
                this.view[offset+1] = (hi >>>  8) & 0xFF;
                this.view[offset  ] =  hi         & 0xFF;
            } else {
                this.view[offset  ] = (hi >>> 24) & 0xFF;
                this.view[offset+1] = (hi >>> 16) & 0xFF;
                this.view[offset+2] = (hi >>>  8) & 0xFF;
                this.view[offset+3] =  hi         & 0xFF;
                offset += 4;
                this.view[offset  ] = (lo >>> 24) & 0xFF;
                this.view[offset+1] = (lo >>> 16) & 0xFF;
                this.view[offset+2] = (lo >>>  8) & 0xFF;
                this.view[offset+3] =  lo         & 0xFF;
            }
            if (relative) this.offset += 8;
            return this;
        };

        /**
         * Writes a 64bit signed integer. This is an alias of {@link ByteBuffer#writeInt64}.
         * @param {number|!Long} value Value to write
         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.writeLong = ByteBufferPrototype.writeInt64;

        /**
         * Reads a 64bit signed integer.
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
         * @returns {!Long}
         * @expose
         */
        ByteBufferPrototype.readInt64 = function(offset) {
            var relative = typeof offset === 'undefined';
            if (relative) offset = this.offset;
            if (!this.noAssert) {
                if (typeof offset !== 'number' || offset % 1 !== 0)
                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
                offset >>>= 0;
                if (offset < 0 || offset + 8 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+8+") <= "+this.buffer.byteLength);
            }
            var lo = 0,
                hi = 0;
            if (this.littleEndian) {
                lo  = this.view[offset+2] << 16;
                lo |= this.view[offset+1] <<  8;
                lo |= this.view[offset  ];
                lo += this.view[offset+3] << 24 >>> 0;
                offset += 4;
                hi  = this.view[offset+2] << 16;
                hi |= this.view[offset+1] <<  8;
                hi |= this.view[offset  ];
                hi += this.view[offset+3] << 24 >>> 0;
            } else {
                hi  = this.view[offset+1] << 16;
                hi |= this.view[offset+2] <<  8;
                hi |= this.view[offset+3];
                hi += this.view[offset  ] << 24 >>> 0;
                offset += 4;
                lo  = this.view[offset+1] << 16;
                lo |= this.view[offset+2] <<  8;
                lo |= this.view[offset+3];
                lo += this.view[offset  ] << 24 >>> 0;
            }
            var value = new Long(lo, hi, false);
            if (relative) this.offset += 8;
            return value;
        };

        /**
         * Reads a 64bit signed integer. This is an alias of {@link ByteBuffer#readInt64}.
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
         * @returns {!Long}
         * @expose
         */
        ByteBufferPrototype.readLong = ByteBufferPrototype.readInt64;

        /**
         * Writes a 64bit unsigned integer.
         * @param {number|!Long} value Value to write
         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.writeUint64 = function(value, offset) {
            var relative = typeof offset === 'undefined';
            if (relative) offset = this.offset;
            if (!this.noAssert) {
                if (typeof value === 'number')
                    value = Long.fromNumber(value);
                else if (typeof value === 'string')
                    value = Long.fromString(value);
                else if (!(value && value instanceof Long))
                    throw TypeError("Illegal value: "+value+" (not an integer or Long)");
                if (typeof offset !== 'number' || offset % 1 !== 0)
                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
                offset >>>= 0;
                if (offset < 0 || offset + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
            }
            if (typeof value === 'number')
                value = Long.fromNumber(value);
            else if (typeof value === 'string')
                value = Long.fromString(value);
            offset += 8;
            var capacity7 = this.buffer.byteLength;
            if (offset > capacity7)
                this.resize((capacity7 *= 2) > offset ? capacity7 : offset);
            offset -= 8;
            var lo = value.low,
                hi = value.high;
            if (this.littleEndian) {
                this.view[offset+3] = (lo >>> 24) & 0xFF;
                this.view[offset+2] = (lo >>> 16) & 0xFF;
                this.view[offset+1] = (lo >>>  8) & 0xFF;
                this.view[offset  ] =  lo         & 0xFF;
                offset += 4;
                this.view[offset+3] = (hi >>> 24) & 0xFF;
                this.view[offset+2] = (hi >>> 16) & 0xFF;
                this.view[offset+1] = (hi >>>  8) & 0xFF;
                this.view[offset  ] =  hi         & 0xFF;
            } else {
                this.view[offset  ] = (hi >>> 24) & 0xFF;
                this.view[offset+1] = (hi >>> 16) & 0xFF;
                this.view[offset+2] = (hi >>>  8) & 0xFF;
                this.view[offset+3] =  hi         & 0xFF;
                offset += 4;
                this.view[offset  ] = (lo >>> 24) & 0xFF;
                this.view[offset+1] = (lo >>> 16) & 0xFF;
                this.view[offset+2] = (lo >>>  8) & 0xFF;
                this.view[offset+3] =  lo         & 0xFF;
            }
            if (relative) this.offset += 8;
            return this;
        };

        /**
         * Writes a 64bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint64}.
         * @function
         * @param {number|!Long} value Value to write
         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.writeUInt64 = ByteBufferPrototype.writeUint64;

        /**
         * Reads a 64bit unsigned integer.
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
         * @returns {!Long}
         * @expose
         */
        ByteBufferPrototype.readUint64 = function(offset) {
            var relative = typeof offset === 'undefined';
            if (relative) offset = this.offset;
            if (!this.noAssert) {
                if (typeof offset !== 'number' || offset % 1 !== 0)
                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
                offset >>>= 0;
                if (offset < 0 || offset + 8 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+8+") <= "+this.buffer.byteLength);
            }
            var lo = 0,
                hi = 0;
            if (this.littleEndian) {
                lo  = this.view[offset+2] << 16;
                lo |= this.view[offset+1] <<  8;
                lo |= this.view[offset  ];
                lo += this.view[offset+3] << 24 >>> 0;
                offset += 4;
                hi  = this.view[offset+2] << 16;
                hi |= this.view[offset+1] <<  8;
                hi |= this.view[offset  ];
                hi += this.view[offset+3] << 24 >>> 0;
            } else {
                hi  = this.view[offset+1] << 16;
                hi |= this.view[offset+2] <<  8;
                hi |= this.view[offset+3];
                hi += this.view[offset  ] << 24 >>> 0;
                offset += 4;
                lo  = this.view[offset+1] << 16;
                lo |= this.view[offset+2] <<  8;
                lo |= this.view[offset+3];
                lo += this.view[offset  ] << 24 >>> 0;
            }
            var value = new Long(lo, hi, true);
            if (relative) this.offset += 8;
            return value;
        };

        /**
         * Reads a 64bit unsigned integer. This is an alias of {@link ByteBuffer#readUint64}.
         * @function
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
         * @returns {!Long}
         * @expose
         */
        ByteBufferPrototype.readUInt64 = ByteBufferPrototype.readUint64;

    } // Long


    // types/floats/float32

    /*
     ieee754 - https://github.com/feross/ieee754

     The MIT License (MIT)

     Copyright (c) Feross Aboukhadijeh

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:

     The above copyright notice and this permission notice shall be included in
     all copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     THE SOFTWARE.
    */

    /**
     * Reads an IEEE754 float from a byte array.
     * @param {!Array} buffer
     * @param {number} offset
     * @param {boolean} isLE
     * @param {number} mLen
     * @param {number} nBytes
     * @returns {number}
     * @inner
     */
    function ieee754_read(buffer, offset, isLE, mLen, nBytes) {
        var e, m,
            eLen = nBytes * 8 - mLen - 1,
            eMax = (1 << eLen) - 1,
            eBias = eMax >> 1,
            nBits = -7,
            i = isLE ? (nBytes - 1) : 0,
            d = isLE ? -1 : 1,
            s = buffer[offset + i];

        i += d;

        e = s & ((1 << (-nBits)) - 1);
        s >>= (-nBits);
        nBits += eLen;
        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

        m = e & ((1 << (-nBits)) - 1);
        e >>= (-nBits);
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

        if (e === 0) {
            e = 1 - eBias;
        } else if (e === eMax) {
            return m ? NaN : ((s ? -1 : 1) * Infinity);
        } else {
            m = m + Math.pow(2, mLen);
            e = e - eBias;
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    }

    /**
     * Writes an IEEE754 float to a byte array.
     * @param {!Array} buffer
     * @param {number} value
     * @param {number} offset
     * @param {boolean} isLE
     * @param {number} mLen
     * @param {number} nBytes
     * @inner
     */
    function ieee754_write(buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c,
            eLen = nBytes * 8 - mLen - 1,
            eMax = (1 << eLen) - 1,
            eBias = eMax >> 1,
            rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
            i = isLE ? 0 : (nBytes - 1),
            d = isLE ? 1 : -1,
            s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

        value = Math.abs(value);

        if (isNaN(value) || value === Infinity) {
            m = isNaN(value) ? 1 : 0;
            e = eMax;
        } else {
            e = Math.floor(Math.log(value) / Math.LN2);
            if (value * (c = Math.pow(2, -e)) < 1) {
                e--;
                c *= 2;
            }
            if (e + eBias >= 1) {
                value += rt / c;
            } else {
                value += rt * Math.pow(2, 1 - eBias);
            }
            if (value * c >= 2) {
                e++;
                c /= 2;
            }

            if (e + eBias >= eMax) {
                m = 0;
                e = eMax;
            } else if (e + eBias >= 1) {
                m = (value * c - 1) * Math.pow(2, mLen);
                e = e + eBias;
            } else {
                m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                e = 0;
            }
        }

        for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

        e = (e << mLen) | m;
        eLen += mLen;
        for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

        buffer[offset + i - d] |= s * 128;
    }

    /**
     * Writes a 32bit float.
     * @param {number} value Value to write
     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
     * @returns {!ByteBuffer} this
     * @expose
     */
    ByteBufferPrototype.writeFloat32 = function(value, offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof value !== 'number')
                throw TypeError("Illegal value: "+value+" (not a number)");
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
        }
        offset += 4;
        var capacity8 = this.buffer.byteLength;
        if (offset > capacity8)
            this.resize((capacity8 *= 2) > offset ? capacity8 : offset);
        offset -= 4;
        ieee754_write(this.view, value, offset, this.littleEndian, 23, 4);
        if (relative) this.offset += 4;
        return this;
    };

    /**
     * Writes a 32bit float. This is an alias of {@link ByteBuffer#writeFloat32}.
     * @function
     * @param {number} value Value to write
     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
     * @returns {!ByteBuffer} this
     * @expose
     */
    ByteBufferPrototype.writeFloat = ByteBufferPrototype.writeFloat32;

    /**
     * Reads a 32bit float.
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
     * @returns {number}
     * @expose
     */
    ByteBufferPrototype.readFloat32 = function(offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 4 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+4+") <= "+this.buffer.byteLength);
        }
        var value = ieee754_read(this.view, offset, this.littleEndian, 23, 4);
        if (relative) this.offset += 4;
        return value;
    };

    /**
     * Reads a 32bit float. This is an alias of {@link ByteBuffer#readFloat32}.
     * @function
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
     * @returns {number}
     * @expose
     */
    ByteBufferPrototype.readFloat = ByteBufferPrototype.readFloat32;

    // types/floats/float64

    /**
     * Writes a 64bit float.
     * @param {number} value Value to write
     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
     * @returns {!ByteBuffer} this
     * @expose
     */
    ByteBufferPrototype.writeFloat64 = function(value, offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof value !== 'number')
                throw TypeError("Illegal value: "+value+" (not a number)");
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
        }
        offset += 8;
        var capacity9 = this.buffer.byteLength;
        if (offset > capacity9)
            this.resize((capacity9 *= 2) > offset ? capacity9 : offset);
        offset -= 8;
        ieee754_write(this.view, value, offset, this.littleEndian, 52, 8);
        if (relative) this.offset += 8;
        return this;
    };

    /**
     * Writes a 64bit float. This is an alias of {@link ByteBuffer#writeFloat64}.
     * @function
     * @param {number} value Value to write
     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
     * @returns {!ByteBuffer} this
     * @expose
     */
    ByteBufferPrototype.writeDouble = ByteBufferPrototype.writeFloat64;

    /**
     * Reads a 64bit float.
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
     * @returns {number}
     * @expose
     */
    ByteBufferPrototype.readFloat64 = function(offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 8 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+8+") <= "+this.buffer.byteLength);
        }
        var value = ieee754_read(this.view, offset, this.littleEndian, 52, 8);
        if (relative) this.offset += 8;
        return value;
    };

    /**
     * Reads a 64bit float. This is an alias of {@link ByteBuffer#readFloat64}.
     * @function
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
     * @returns {number}
     * @expose
     */
    ByteBufferPrototype.readDouble = ByteBufferPrototype.readFloat64;


    // types/varints/varint32

    /**
     * Maximum number of bytes required to store a 32bit base 128 variable-length integer.
     * @type {number}
     * @const
     * @expose
     */
    ByteBuffer.MAX_VARINT32_BYTES = 5;

    /**
     * Calculates the actual number of bytes required to store a 32bit base 128 variable-length integer.
     * @param {number} value Value to encode
     * @returns {number} Number of bytes required. Capped to {@link ByteBuffer.MAX_VARINT32_BYTES}
     * @expose
     */
    ByteBuffer.calculateVarint32 = function(value) {
        // ref: src/google/protobuf/io/coded_stream.cc
        value = value >>> 0;
             if (value < 1 << 7 ) return 1;
        else if (value < 1 << 14) return 2;
        else if (value < 1 << 21) return 3;
        else if (value < 1 << 28) return 4;
        else                      return 5;
    };

    /**
     * Zigzag encodes a signed 32bit integer so that it can be effectively used with varint encoding.
     * @param {number} n Signed 32bit integer
     * @returns {number} Unsigned zigzag encoded 32bit integer
     * @expose
     */
    ByteBuffer.zigZagEncode32 = function(n) {
        return (((n |= 0) << 1) ^ (n >> 31)) >>> 0; // ref: src/google/protobuf/wire_format_lite.h
    };

    /**
     * Decodes a zigzag encoded signed 32bit integer.
     * @param {number} n Unsigned zigzag encoded 32bit integer
     * @returns {number} Signed 32bit integer
     * @expose
     */
    ByteBuffer.zigZagDecode32 = function(n) {
        return ((n >>> 1) ^ -(n & 1)) | 0; // // ref: src/google/protobuf/wire_format_lite.h
    };

    /**
     * Writes a 32bit base 128 variable-length integer.
     * @param {number} value Value to write
     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
     *  written if omitted.
     * @returns {!ByteBuffer|number} this if `offset` is omitted, else the actual number of bytes written
     * @expose
     */
    ByteBufferPrototype.writeVarint32 = function(value, offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof value !== 'number' || value % 1 !== 0)
                throw TypeError("Illegal value: "+value+" (not an integer)");
            value |= 0;
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
        }
        var size = ByteBuffer.calculateVarint32(value),
            b;
        offset += size;
        var capacity10 = this.buffer.byteLength;
        if (offset > capacity10)
            this.resize((capacity10 *= 2) > offset ? capacity10 : offset);
        offset -= size;
        value >>>= 0;
        while (value >= 0x80) {
            b = (value & 0x7f) | 0x80;
            this.view[offset++] = b;
            value >>>= 7;
        }
        this.view[offset++] = value;
        if (relative) {
            this.offset = offset;
            return this;
        }
        return size;
    };

    /**
     * Writes a zig-zag encoded (signed) 32bit base 128 variable-length integer.
     * @param {number} value Value to write
     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
     *  written if omitted.
     * @returns {!ByteBuffer|number} this if `offset` is omitted, else the actual number of bytes written
     * @expose
     */
    ByteBufferPrototype.writeVarint32ZigZag = function(value, offset) {
        return this.writeVarint32(ByteBuffer.zigZagEncode32(value), offset);
    };

    /**
     * Reads a 32bit base 128 variable-length integer.
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
     *  written if omitted.
     * @returns {number|!{value: number, length: number}} The value read if offset is omitted, else the value read
     *  and the actual number of bytes read.
     * @throws {Error} If it's not a valid varint. Has a property `truncated = true` if there is not enough data available
     *  to fully decode the varint.
     * @expose
     */
    ByteBufferPrototype.readVarint32 = function(offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 1 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
        }
        var c = 0,
            value = 0 >>> 0,
            b;
        do {
            if (!this.noAssert && offset > this.limit) {
                var err = Error("Truncated");
                err['truncated'] = true;
                throw err;
            }
            b = this.view[offset++];
            if (c < 5)
                value |= (b & 0x7f) << (7*c);
            ++c;
        } while ((b & 0x80) !== 0);
        value |= 0;
        if (relative) {
            this.offset = offset;
            return value;
        }
        return {
            "value": value,
            "length": c
        };
    };

    /**
     * Reads a zig-zag encoded (signed) 32bit base 128 variable-length integer.
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
     *  written if omitted.
     * @returns {number|!{value: number, length: number}} The value read if offset is omitted, else the value read
     *  and the actual number of bytes read.
     * @throws {Error} If it's not a valid varint
     * @expose
     */
    ByteBufferPrototype.readVarint32ZigZag = function(offset) {
        var val = this.readVarint32(offset);
        if (typeof val === 'object')
            val["value"] = ByteBuffer.zigZagDecode32(val["value"]);
        else
            val = ByteBuffer.zigZagDecode32(val);
        return val;
    };

    // types/varints/varint64

    if (Long) {

        /**
         * Maximum number of bytes required to store a 64bit base 128 variable-length integer.
         * @type {number}
         * @const
         * @expose
         */
        ByteBuffer.MAX_VARINT64_BYTES = 10;

        /**
         * Calculates the actual number of bytes required to store a 64bit base 128 variable-length integer.
         * @param {number|!Long} value Value to encode
         * @returns {number} Number of bytes required. Capped to {@link ByteBuffer.MAX_VARINT64_BYTES}
         * @expose
         */
        ByteBuffer.calculateVarint64 = function(value) {
            if (typeof value === 'number')
                value = Long.fromNumber(value);
            else if (typeof value === 'string')
                value = Long.fromString(value);
            // ref: src/google/protobuf/io/coded_stream.cc
            var part0 = value.toInt() >>> 0,
                part1 = value.shiftRightUnsigned(28).toInt() >>> 0,
                part2 = value.shiftRightUnsigned(56).toInt() >>> 0;
            if (part2 == 0) {
                if (part1 == 0) {
                    if (part0 < 1 << 14)
                        return part0 < 1 << 7 ? 1 : 2;
                    else
                        return part0 < 1 << 21 ? 3 : 4;
                } else {
                    if (part1 < 1 << 14)
                        return part1 < 1 << 7 ? 5 : 6;
                    else
                        return part1 < 1 << 21 ? 7 : 8;
                }
            } else
                return part2 < 1 << 7 ? 9 : 10;
        };

        /**
         * Zigzag encodes a signed 64bit integer so that it can be effectively used with varint encoding.
         * @param {number|!Long} value Signed long
         * @returns {!Long} Unsigned zigzag encoded long
         * @expose
         */
        ByteBuffer.zigZagEncode64 = function(value) {
            if (typeof value === 'number')
                value = Long.fromNumber(value, false);
            else if (typeof value === 'string')
                value = Long.fromString(value, false);
            else if (value.unsigned !== false) value = value.toSigned();
            // ref: src/google/protobuf/wire_format_lite.h
            return value.shiftLeft(1).xor(value.shiftRight(63)).toUnsigned();
        };

        /**
         * Decodes a zigzag encoded signed 64bit integer.
         * @param {!Long|number} value Unsigned zigzag encoded long or JavaScript number
         * @returns {!Long} Signed long
         * @expose
         */
        ByteBuffer.zigZagDecode64 = function(value) {
            if (typeof value === 'number')
                value = Long.fromNumber(value, false);
            else if (typeof value === 'string')
                value = Long.fromString(value, false);
            else if (value.unsigned !== false) value = value.toSigned();
            // ref: src/google/protobuf/wire_format_lite.h
            return value.shiftRightUnsigned(1).xor(value.and(Long.ONE).toSigned().negate()).toSigned();
        };

        /**
         * Writes a 64bit base 128 variable-length integer.
         * @param {number|Long} value Value to write
         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
         *  written if omitted.
         * @returns {!ByteBuffer|number} `this` if offset is omitted, else the actual number of bytes written.
         * @expose
         */
        ByteBufferPrototype.writeVarint64 = function(value, offset) {
            var relative = typeof offset === 'undefined';
            if (relative) offset = this.offset;
            if (!this.noAssert) {
                if (typeof value === 'number')
                    value = Long.fromNumber(value);
                else if (typeof value === 'string')
                    value = Long.fromString(value);
                else if (!(value && value instanceof Long))
                    throw TypeError("Illegal value: "+value+" (not an integer or Long)");
                if (typeof offset !== 'number' || offset % 1 !== 0)
                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
                offset >>>= 0;
                if (offset < 0 || offset + 0 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
            }
            if (typeof value === 'number')
                value = Long.fromNumber(value, false);
            else if (typeof value === 'string')
                value = Long.fromString(value, false);
            else if (value.unsigned !== false) value = value.toSigned();
            var size = ByteBuffer.calculateVarint64(value),
                part0 = value.toInt() >>> 0,
                part1 = value.shiftRightUnsigned(28).toInt() >>> 0,
                part2 = value.shiftRightUnsigned(56).toInt() >>> 0;
            offset += size;
            var capacity11 = this.buffer.byteLength;
            if (offset > capacity11)
                this.resize((capacity11 *= 2) > offset ? capacity11 : offset);
            offset -= size;
            switch (size) {
                case 10: this.view[offset+9] = (part2 >>>  7) & 0x01;
                case 9 : this.view[offset+8] = size !== 9 ? (part2       ) | 0x80 : (part2       ) & 0x7F;
                case 8 : this.view[offset+7] = size !== 8 ? (part1 >>> 21) | 0x80 : (part1 >>> 21) & 0x7F;
                case 7 : this.view[offset+6] = size !== 7 ? (part1 >>> 14) | 0x80 : (part1 >>> 14) & 0x7F;
                case 6 : this.view[offset+5] = size !== 6 ? (part1 >>>  7) | 0x80 : (part1 >>>  7) & 0x7F;
                case 5 : this.view[offset+4] = size !== 5 ? (part1       ) | 0x80 : (part1       ) & 0x7F;
                case 4 : this.view[offset+3] = size !== 4 ? (part0 >>> 21) | 0x80 : (part0 >>> 21) & 0x7F;
                case 3 : this.view[offset+2] = size !== 3 ? (part0 >>> 14) | 0x80 : (part0 >>> 14) & 0x7F;
                case 2 : this.view[offset+1] = size !== 2 ? (part0 >>>  7) | 0x80 : (part0 >>>  7) & 0x7F;
                case 1 : this.view[offset  ] = size !== 1 ? (part0       ) | 0x80 : (part0       ) & 0x7F;
            }
            if (relative) {
                this.offset += size;
                return this;
            } else {
                return size;
            }
        };

        /**
         * Writes a zig-zag encoded 64bit base 128 variable-length integer.
         * @param {number|Long} value Value to write
         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
         *  written if omitted.
         * @returns {!ByteBuffer|number} `this` if offset is omitted, else the actual number of bytes written.
         * @expose
         */
        ByteBufferPrototype.writeVarint64ZigZag = function(value, offset) {
            return this.writeVarint64(ByteBuffer.zigZagEncode64(value), offset);
        };

        /**
         * Reads a 64bit base 128 variable-length integer. Requires Long.js.
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
         *  read if omitted.
         * @returns {!Long|!{value: Long, length: number}} The value read if offset is omitted, else the value read and
         *  the actual number of bytes read.
         * @throws {Error} If it's not a valid varint
         * @expose
         */
        ByteBufferPrototype.readVarint64 = function(offset) {
            var relative = typeof offset === 'undefined';
            if (relative) offset = this.offset;
            if (!this.noAssert) {
                if (typeof offset !== 'number' || offset % 1 !== 0)
                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
                offset >>>= 0;
                if (offset < 0 || offset + 1 > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
            }
            // ref: src/google/protobuf/io/coded_stream.cc
            var start = offset,
                part0 = 0,
                part1 = 0,
                part2 = 0,
                b  = 0;
            b = this.view[offset++]; part0  = (b & 0x7F)      ; if ( b & 0x80                                                   ) {
            b = this.view[offset++]; part0 |= (b & 0x7F) <<  7; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
            b = this.view[offset++]; part0 |= (b & 0x7F) << 14; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
            b = this.view[offset++]; part0 |= (b & 0x7F) << 21; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
            b = this.view[offset++]; part1  = (b & 0x7F)      ; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
            b = this.view[offset++]; part1 |= (b & 0x7F) <<  7; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
            b = this.view[offset++]; part1 |= (b & 0x7F) << 14; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
            b = this.view[offset++]; part1 |= (b & 0x7F) << 21; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
            b = this.view[offset++]; part2  = (b & 0x7F)      ; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
            b = this.view[offset++]; part2 |= (b & 0x7F) <<  7; if ((b & 0x80) || (this.noAssert && typeof b === 'undefined')) {
            throw Error("Buffer overrun"); }}}}}}}}}}
            var value = Long.fromBits(part0 | (part1 << 28), (part1 >>> 4) | (part2) << 24, false);
            if (relative) {
                this.offset = offset;
                return value;
            } else {
                return {
                    'value': value,
                    'length': offset-start
                };
            }
        };

        /**
         * Reads a zig-zag encoded 64bit base 128 variable-length integer. Requires Long.js.
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
         *  read if omitted.
         * @returns {!Long|!{value: Long, length: number}} The value read if offset is omitted, else the value read and
         *  the actual number of bytes read.
         * @throws {Error} If it's not a valid varint
         * @expose
         */
        ByteBufferPrototype.readVarint64ZigZag = function(offset) {
            var val = this.readVarint64(offset);
            if (val && val['value'] instanceof Long)
                val["value"] = ByteBuffer.zigZagDecode64(val["value"]);
            else
                val = ByteBuffer.zigZagDecode64(val);
            return val;
        };

    } // Long


    // types/strings/cstring

    /**
     * Writes a NULL-terminated UTF8 encoded string. For this to work the specified string must not contain any NULL
     *  characters itself.
     * @param {string} str String to write
     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
     *  contained in `str` + 1 if omitted.
     * @returns {!ByteBuffer|number} this if offset is omitted, else the actual number of bytes written
     * @expose
     */
    ByteBufferPrototype.writeCString = function(str, offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        var i,
            k = str.length;
        if (!this.noAssert) {
            if (typeof str !== 'string')
                throw TypeError("Illegal str: Not a string");
            for (i=0; i<k; ++i) {
                if (str.charCodeAt(i) === 0)
                    throw RangeError("Illegal str: Contains NULL-characters");
            }
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
        }
        // UTF8 strings do not contain zero bytes in between except for the zero character, so:
        k = utfx.calculateUTF16asUTF8(stringSource(str))[1];
        offset += k+1;
        var capacity12 = this.buffer.byteLength;
        if (offset > capacity12)
            this.resize((capacity12 *= 2) > offset ? capacity12 : offset);
        offset -= k+1;
        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
            this.view[offset++] = b;
        }.bind(this));
        this.view[offset++] = 0;
        if (relative) {
            this.offset = offset;
            return this;
        }
        return k;
    };

    /**
     * Reads a NULL-terminated UTF8 encoded string. For this to work the string read must not contain any NULL characters
     *  itself.
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
     *  read if omitted.
     * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
     *  read and the actual number of bytes read.
     * @expose
     */
    ByteBufferPrototype.readCString = function(offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 1 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
        }
        var start = offset,
            temp;
        // UTF8 strings do not contain zero bytes in between except for the zero character itself, so:
        var sd, b = -1;
        utfx.decodeUTF8toUTF16(function() {
            if (b === 0) return null;
            if (offset >= this.limit)
                throw RangeError("Illegal range: Truncated data, "+offset+" < "+this.limit);
            b = this.view[offset++];
            return b === 0 ? null : b;
        }.bind(this), sd = stringDestination(), true);
        if (relative) {
            this.offset = offset;
            return sd();
        } else {
            return {
                "string": sd(),
                "length": offset - start
            };
        }
    };

    // types/strings/istring

    /**
     * Writes a length as uint32 prefixed UTF8 encoded string.
     * @param {string} str String to write
     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
     *  written if omitted.
     * @returns {!ByteBuffer|number} `this` if `offset` is omitted, else the actual number of bytes written
     * @expose
     * @see ByteBuffer#writeVarint32
     */
    ByteBufferPrototype.writeIString = function(str, offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof str !== 'string')
                throw TypeError("Illegal str: Not a string");
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
        }
        var start = offset,
            k;
        k = utfx.calculateUTF16asUTF8(stringSource(str), this.noAssert)[1];
        offset += 4+k;
        var capacity13 = this.buffer.byteLength;
        if (offset > capacity13)
            this.resize((capacity13 *= 2) > offset ? capacity13 : offset);
        offset -= 4+k;
        if (this.littleEndian) {
            this.view[offset+3] = (k >>> 24) & 0xFF;
            this.view[offset+2] = (k >>> 16) & 0xFF;
            this.view[offset+1] = (k >>>  8) & 0xFF;
            this.view[offset  ] =  k         & 0xFF;
        } else {
            this.view[offset  ] = (k >>> 24) & 0xFF;
            this.view[offset+1] = (k >>> 16) & 0xFF;
            this.view[offset+2] = (k >>>  8) & 0xFF;
            this.view[offset+3] =  k         & 0xFF;
        }
        offset += 4;
        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
            this.view[offset++] = b;
        }.bind(this));
        if (offset !== start + 4 + k)
            throw RangeError("Illegal range: Truncated data, "+offset+" == "+(offset+4+k));
        if (relative) {
            this.offset = offset;
            return this;
        }
        return offset - start;
    };

    /**
     * Reads a length as uint32 prefixed UTF8 encoded string.
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
     *  read if omitted.
     * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
     *  read and the actual number of bytes read.
     * @expose
     * @see ByteBuffer#readVarint32
     */
    ByteBufferPrototype.readIString = function(offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 4 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+4+") <= "+this.buffer.byteLength);
        }
        var start = offset;
        var len = this.readUint32(offset);
        var str = this.readUTF8String(len, ByteBuffer.METRICS_BYTES, offset += 4);
        offset += str['length'];
        if (relative) {
            this.offset = offset;
            return str['string'];
        } else {
            return {
                'string': str['string'],
                'length': offset - start
            };
        }
    };

    // types/strings/utf8string

    /**
     * Metrics representing number of UTF8 characters. Evaluates to `c`.
     * @type {string}
     * @const
     * @expose
     */
    ByteBuffer.METRICS_CHARS = 'c';

    /**
     * Metrics representing number of bytes. Evaluates to `b`.
     * @type {string}
     * @const
     * @expose
     */
    ByteBuffer.METRICS_BYTES = 'b';

    /**
     * Writes an UTF8 encoded string.
     * @param {string} str String to write
     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} if omitted.
     * @returns {!ByteBuffer|number} this if offset is omitted, else the actual number of bytes written.
     * @expose
     */
    ByteBufferPrototype.writeUTF8String = function(str, offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
        }
        var k;
        var start = offset;
        k = utfx.calculateUTF16asUTF8(stringSource(str))[1];
        offset += k;
        var capacity14 = this.buffer.byteLength;
        if (offset > capacity14)
            this.resize((capacity14 *= 2) > offset ? capacity14 : offset);
        offset -= k;
        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
            this.view[offset++] = b;
        }.bind(this));
        if (relative) {
            this.offset = offset;
            return this;
        }
        return offset - start;
    };

    /**
     * Writes an UTF8 encoded string. This is an alias of {@link ByteBuffer#writeUTF8String}.
     * @function
     * @param {string} str String to write
     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} if omitted.
     * @returns {!ByteBuffer|number} this if offset is omitted, else the actual number of bytes written.
     * @expose
     */
    ByteBufferPrototype.writeString = ByteBufferPrototype.writeUTF8String;

    /**
     * Calculates the number of UTF8 characters of a string. JavaScript itself uses UTF-16, so that a string's
     *  `length` property does not reflect its actual UTF8 size if it contains code points larger than 0xFFFF.
     * @param {string} str String to calculate
     * @returns {number} Number of UTF8 characters
     * @expose
     */
    ByteBuffer.calculateUTF8Chars = function(str) {
        return utfx.calculateUTF16asUTF8(stringSource(str))[0];
    };

    /**
     * Calculates the number of UTF8 bytes of a string.
     * @param {string} str String to calculate
     * @returns {number} Number of UTF8 bytes
     * @expose
     */
    ByteBuffer.calculateUTF8Bytes = function(str) {
        return utfx.calculateUTF16asUTF8(stringSource(str))[1];
    };

    /**
     * Calculates the number of UTF8 bytes of a string. This is an alias of {@link ByteBuffer.calculateUTF8Bytes}.
     * @function
     * @param {string} str String to calculate
     * @returns {number} Number of UTF8 bytes
     * @expose
     */
    ByteBuffer.calculateString = ByteBuffer.calculateUTF8Bytes;

    /**
     * Reads an UTF8 encoded string.
     * @param {number} length Number of characters or bytes to read.
     * @param {string=} metrics Metrics specifying what `length` is meant to count. Defaults to
     *  {@link ByteBuffer.METRICS_CHARS}.
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
     *  read if omitted.
     * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
     *  read and the actual number of bytes read.
     * @expose
     */
    ByteBufferPrototype.readUTF8String = function(length, metrics, offset) {
        if (typeof metrics === 'number') {
            offset = metrics;
            metrics = undefined;
        }
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (typeof metrics === 'undefined') metrics = ByteBuffer.METRICS_CHARS;
        if (!this.noAssert) {
            if (typeof length !== 'number' || length % 1 !== 0)
                throw TypeError("Illegal length: "+length+" (not an integer)");
            length |= 0;
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
        }
        var i = 0,
            start = offset,
            sd;
        if (metrics === ByteBuffer.METRICS_CHARS) { // The same for node and the browser
            sd = stringDestination();
            utfx.decodeUTF8(function() {
                return i < length && offset < this.limit ? this.view[offset++] : null;
            }.bind(this), function(cp) {
                ++i; utfx.UTF8toUTF16(cp, sd);
            });
            if (i !== length)
                throw RangeError("Illegal range: Truncated data, "+i+" == "+length);
            if (relative) {
                this.offset = offset;
                return sd();
            } else {
                return {
                    "string": sd(),
                    "length": offset - start
                };
            }
        } else if (metrics === ByteBuffer.METRICS_BYTES) {
            if (!this.noAssert) {
                if (typeof offset !== 'number' || offset % 1 !== 0)
                    throw TypeError("Illegal offset: "+offset+" (not an integer)");
                offset >>>= 0;
                if (offset < 0 || offset + length > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= "+offset+" (+"+length+") <= "+this.buffer.byteLength);
            }
            var k = offset + length;
            utfx.decodeUTF8toUTF16(function() {
                return offset < k ? this.view[offset++] : null;
            }.bind(this), sd = stringDestination(), this.noAssert);
            if (offset !== k)
                throw RangeError("Illegal range: Truncated data, "+offset+" == "+k);
            if (relative) {
                this.offset = offset;
                return sd();
            } else {
                return {
                    'string': sd(),
                    'length': offset - start
                };
            }
        } else
            throw TypeError("Unsupported metrics: "+metrics);
    };

    /**
     * Reads an UTF8 encoded string. This is an alias of {@link ByteBuffer#readUTF8String}.
     * @function
     * @param {number} length Number of characters or bytes to read
     * @param {number=} metrics Metrics specifying what `n` is meant to count. Defaults to
     *  {@link ByteBuffer.METRICS_CHARS}.
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
     *  read if omitted.
     * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
     *  read and the actual number of bytes read.
     * @expose
     */
    ByteBufferPrototype.readString = ByteBufferPrototype.readUTF8String;

    // types/strings/vstring

    /**
     * Writes a length as varint32 prefixed UTF8 encoded string.
     * @param {string} str String to write
     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
     *  written if omitted.
     * @returns {!ByteBuffer|number} `this` if `offset` is omitted, else the actual number of bytes written
     * @expose
     * @see ByteBuffer#writeVarint32
     */
    ByteBufferPrototype.writeVString = function(str, offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof str !== 'string')
                throw TypeError("Illegal str: Not a string");
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
        }
        var start = offset,
            k, l;
        k = utfx.calculateUTF16asUTF8(stringSource(str), this.noAssert)[1];
        l = ByteBuffer.calculateVarint32(k);
        offset += l+k;
        var capacity15 = this.buffer.byteLength;
        if (offset > capacity15)
            this.resize((capacity15 *= 2) > offset ? capacity15 : offset);
        offset -= l+k;
        offset += this.writeVarint32(k, offset);
        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
            this.view[offset++] = b;
        }.bind(this));
        if (offset !== start+k+l)
            throw RangeError("Illegal range: Truncated data, "+offset+" == "+(offset+k+l));
        if (relative) {
            this.offset = offset;
            return this;
        }
        return offset - start;
    };

    /**
     * Reads a length as varint32 prefixed UTF8 encoded string.
     * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
     *  read if omitted.
     * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
     *  read and the actual number of bytes read.
     * @expose
     * @see ByteBuffer#readVarint32
     */
    ByteBufferPrototype.readVString = function(offset) {
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 1 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+1+") <= "+this.buffer.byteLength);
        }
        var start = offset;
        var len = this.readVarint32(offset);
        var str = this.readUTF8String(len['value'], ByteBuffer.METRICS_BYTES, offset += len['length']);
        offset += str['length'];
        if (relative) {
            this.offset = offset;
            return str['string'];
        } else {
            return {
                'string': str['string'],
                'length': offset - start
            };
        }
    };


    /**
     * Appends some data to this ByteBuffer. This will overwrite any contents behind the specified offset up to the appended
     *  data's length.
     * @param {!ByteBuffer|!ArrayBuffer|!Uint8Array|string} source Data to append. If `source` is a ByteBuffer, its offsets
     *  will be modified according to the performed read operation.
     * @param {(string|number)=} encoding Encoding if `data` is a string ("base64", "hex", "binary", defaults to "utf8")
     * @param {number=} offset Offset to append at. Will use and increase {@link ByteBuffer#offset} by the number of bytes
     *  written if omitted.
     * @returns {!ByteBuffer} this
     * @expose
     * @example A relative `<01 02>03.append(<04 05>)` will result in `<01 02 04 05>, 04 05|`
     * @example An absolute `<01 02>03.append(04 05>, 1)` will result in `<01 04>05, 04 05|`
     */
    ByteBufferPrototype.append = function(source, encoding, offset) {
        if (typeof encoding === 'number' || typeof encoding !== 'string') {
            offset = encoding;
            encoding = undefined;
        }
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
        }
        if (!(source instanceof ByteBuffer))
            source = ByteBuffer.wrap(source, encoding);
        var length = source.limit - source.offset;
        if (length <= 0) return this; // Nothing to append
        offset += length;
        var capacity16 = this.buffer.byteLength;
        if (offset > capacity16)
            this.resize((capacity16 *= 2) > offset ? capacity16 : offset);
        offset -= length;
        this.view.set(source.view.subarray(source.offset, source.limit), offset);
        source.offset += length;
        if (relative) this.offset += length;
        return this;
    };

    /**
     * Appends this ByteBuffer's contents to another ByteBuffer. This will overwrite any contents at and after the
        specified offset up to the length of this ByteBuffer's data.
     * @param {!ByteBuffer} target Target ByteBuffer
     * @param {number=} offset Offset to append to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
     *  read if omitted.
     * @returns {!ByteBuffer} this
     * @expose
     * @see ByteBuffer#append
     */
    ByteBufferPrototype.appendTo = function(target, offset) {
        target.append(this, offset);
        return this;
    };

    /**
     * Writes a payload of bytes. This is an alias of {@link ByteBuffer#append}.
     * @function
     * @param {!ByteBuffer|!ArrayBuffer|!Uint8Array|string} source Data to write. If `source` is a ByteBuffer, its offsets
     *  will be modified according to the performed read operation.
     * @param {(string|number)=} encoding Encoding if `data` is a string ("base64", "hex", "binary", defaults to "utf8")
     * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
     *  written if omitted.
     * @returns {!ByteBuffer} this
     * @expose
     */
    ByteBufferPrototype.writeBytes = ByteBufferPrototype.append;
    /**
     * Enables or disables assertions of argument types and offsets. Assertions are enabled by default but you can opt to
     *  disable them if your code already makes sure that everything is valid.
     * @param {boolean} assert `true` to enable assertions, otherwise `false`
     * @returns {!ByteBuffer} this
     * @expose
     */
    ByteBufferPrototype.assert = function(assert) {
        this.noAssert = !assert;
        return this;
    };

    /**
     * Gets the capacity of this ByteBuffer's backing buffer.
     * @returns {number} Capacity of the backing buffer
     * @expose
     */
    ByteBufferPrototype.capacity = function() {
        return this.buffer.byteLength;
    };
    /**
     * Clears this ByteBuffer's offsets by setting {@link ByteBuffer#offset} to `0` and {@link ByteBuffer#limit} to the
     *  backing buffer's capacity. Discards {@link ByteBuffer#markedOffset}.
     * @returns {!ByteBuffer} this
     * @expose
     */
    ByteBufferPrototype.clear = function() {
        this.offset = 0;
        this.limit = this.buffer.byteLength;
        this.markedOffset = -1;
        return this;
    };

    /**
     * Creates a cloned instance of this ByteBuffer, preset with this ByteBuffer's values for {@link ByteBuffer#offset},
     *  {@link ByteBuffer#markedOffset} and {@link ByteBuffer#limit}.
     * @param {boolean=} copy Whether to copy the backing buffer or to return another view on the same, defaults to `false`
     * @returns {!ByteBuffer} Cloned instance
     * @expose
     */
    ByteBufferPrototype.clone = function(copy) {
        var bb = new ByteBuffer(0, this.littleEndian, this.noAssert);
        if (copy) {
            bb.buffer = new ArrayBuffer(this.buffer.byteLength);
            bb.view = new Uint8Array(bb.buffer);
        } else {
            bb.buffer = this.buffer;
            bb.view = this.view;
        }
        bb.offset = this.offset;
        bb.markedOffset = this.markedOffset;
        bb.limit = this.limit;
        return bb;
    };

    /**
     * Compacts this ByteBuffer to be backed by a {@link ByteBuffer#buffer} of its contents' length. Contents are the bytes
     *  between {@link ByteBuffer#offset} and {@link ByteBuffer#limit}. Will set `offset = 0` and `limit = capacity` and
     *  adapt {@link ByteBuffer#markedOffset} to the same relative position if set.
     * @param {number=} begin Offset to start at, defaults to {@link ByteBuffer#offset}
     * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}
     * @returns {!ByteBuffer} this
     * @expose
     */
    ByteBufferPrototype.compact = function(begin, end) {
        if (typeof begin === 'undefined') begin = this.offset;
        if (typeof end === 'undefined') end = this.limit;
        if (!this.noAssert) {
            if (typeof begin !== 'number' || begin % 1 !== 0)
                throw TypeError("Illegal begin: Not an integer");
            begin >>>= 0;
            if (typeof end !== 'number' || end % 1 !== 0)
                throw TypeError("Illegal end: Not an integer");
            end >>>= 0;
            if (begin < 0 || begin > end || end > this.buffer.byteLength)
                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
        }
        if (begin === 0 && end === this.buffer.byteLength)
            return this; // Already compacted
        var len = end - begin;
        if (len === 0) {
            this.buffer = EMPTY_BUFFER;
            this.view = null;
            if (this.markedOffset >= 0) this.markedOffset -= begin;
            this.offset = 0;
            this.limit = 0;
            return this;
        }
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        view.set(this.view.subarray(begin, end));
        this.buffer = buffer;
        this.view = view;
        if (this.markedOffset >= 0) this.markedOffset -= begin;
        this.offset = 0;
        this.limit = len;
        return this;
    };

    /**
     * Creates a copy of this ByteBuffer's contents. Contents are the bytes between {@link ByteBuffer#offset} and
     *  {@link ByteBuffer#limit}.
     * @param {number=} begin Begin offset, defaults to {@link ByteBuffer#offset}.
     * @param {number=} end End offset, defaults to {@link ByteBuffer#limit}.
     * @returns {!ByteBuffer} Copy
     * @expose
     */
    ByteBufferPrototype.copy = function(begin, end) {
        if (typeof begin === 'undefined') begin = this.offset;
        if (typeof end === 'undefined') end = this.limit;
        if (!this.noAssert) {
            if (typeof begin !== 'number' || begin % 1 !== 0)
                throw TypeError("Illegal begin: Not an integer");
            begin >>>= 0;
            if (typeof end !== 'number' || end % 1 !== 0)
                throw TypeError("Illegal end: Not an integer");
            end >>>= 0;
            if (begin < 0 || begin > end || end > this.buffer.byteLength)
                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
        }
        if (begin === end)
            return new ByteBuffer(0, this.littleEndian, this.noAssert);
        var capacity = end - begin,
            bb = new ByteBuffer(capacity, this.littleEndian, this.noAssert);
        bb.offset = 0;
        bb.limit = capacity;
        if (bb.markedOffset >= 0) bb.markedOffset -= begin;
        this.copyTo(bb, 0, begin, end);
        return bb;
    };

    /**
     * Copies this ByteBuffer's contents to another ByteBuffer. Contents are the bytes between {@link ByteBuffer#offset} and
     *  {@link ByteBuffer#limit}.
     * @param {!ByteBuffer} target Target ByteBuffer
     * @param {number=} targetOffset Offset to copy to. Will use and increase the target's {@link ByteBuffer#offset}
     *  by the number of bytes copied if omitted.
     * @param {number=} sourceOffset Offset to start copying from. Will use and increase {@link ByteBuffer#offset} by the
     *  number of bytes copied if omitted.
     * @param {number=} sourceLimit Offset to end copying from, defaults to {@link ByteBuffer#limit}
     * @returns {!ByteBuffer} this
     * @expose
     */
    ByteBufferPrototype.copyTo = function(target, targetOffset, sourceOffset, sourceLimit) {
        var relative,
            targetRelative;
        if (!this.noAssert) {
            if (!ByteBuffer.isByteBuffer(target))
                throw TypeError("Illegal target: Not a ByteBuffer");
        }
        targetOffset = (targetRelative = typeof targetOffset === 'undefined') ? target.offset : targetOffset | 0;
        sourceOffset = (relative = typeof sourceOffset === 'undefined') ? this.offset : sourceOffset | 0;
        sourceLimit = typeof sourceLimit === 'undefined' ? this.limit : sourceLimit | 0;

        if (targetOffset < 0 || targetOffset > target.buffer.byteLength)
            throw RangeError("Illegal target range: 0 <= "+targetOffset+" <= "+target.buffer.byteLength);
        if (sourceOffset < 0 || sourceLimit > this.buffer.byteLength)
            throw RangeError("Illegal source range: 0 <= "+sourceOffset+" <= "+this.buffer.byteLength);

        var len = sourceLimit - sourceOffset;
        if (len === 0)
            return target; // Nothing to copy

        target.ensureCapacity(targetOffset + len);

        target.view.set(this.view.subarray(sourceOffset, sourceLimit), targetOffset);

        if (relative) this.offset += len;
        if (targetRelative) target.offset += len;

        return this;
    };

    /**
     * Makes sure that this ByteBuffer is backed by a {@link ByteBuffer#buffer} of at least the specified capacity. If the
     *  current capacity is exceeded, it will be doubled. If double the current capacity is less than the required capacity,
     *  the required capacity will be used instead.
     * @param {number} capacity Required capacity
     * @returns {!ByteBuffer} this
     * @expose
     */
    ByteBufferPrototype.ensureCapacity = function(capacity) {
        var current = this.buffer.byteLength;
        if (current < capacity)
            return this.resize((current *= 2) > capacity ? current : capacity);
        return this;
    };

    /**
     * Overwrites this ByteBuffer's contents with the specified value. Contents are the bytes between
     *  {@link ByteBuffer#offset} and {@link ByteBuffer#limit}.
     * @param {number|string} value Byte value to fill with. If given as a string, the first character is used.
     * @param {number=} begin Begin offset. Will use and increase {@link ByteBuffer#offset} by the number of bytes
     *  written if omitted. defaults to {@link ByteBuffer#offset}.
     * @param {number=} end End offset, defaults to {@link ByteBuffer#limit}.
     * @returns {!ByteBuffer} this
     * @expose
     * @example `someByteBuffer.clear().fill(0)` fills the entire backing buffer with zeroes
     */
    ByteBufferPrototype.fill = function(value, begin, end) {
        var relative = typeof begin === 'undefined';
        if (relative) begin = this.offset;
        if (typeof value === 'string' && value.length > 0)
            value = value.charCodeAt(0);
        if (typeof begin === 'undefined') begin = this.offset;
        if (typeof end === 'undefined') end = this.limit;
        if (!this.noAssert) {
            if (typeof value !== 'number' || value % 1 !== 0)
                throw TypeError("Illegal value: "+value+" (not an integer)");
            value |= 0;
            if (typeof begin !== 'number' || begin % 1 !== 0)
                throw TypeError("Illegal begin: Not an integer");
            begin >>>= 0;
            if (typeof end !== 'number' || end % 1 !== 0)
                throw TypeError("Illegal end: Not an integer");
            end >>>= 0;
            if (begin < 0 || begin > end || end > this.buffer.byteLength)
                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
        }
        if (begin >= end)
            return this; // Nothing to fill
        while (begin < end) this.view[begin++] = value;
        if (relative) this.offset = begin;
        return this;
    };

    /**
     * Makes this ByteBuffer ready for a new sequence of write or relative read operations. Sets `limit = offset` and
     *  `offset = 0`. Make sure always to flip a ByteBuffer when all relative read or write operations are complete.
     * @returns {!ByteBuffer} this
     * @expose
     */
    ByteBufferPrototype.flip = function() {
        this.limit = this.offset;
        this.offset = 0;
        return this;
    };
    /**
     * Marks an offset on this ByteBuffer to be used later.
     * @param {number=} offset Offset to mark. Defaults to {@link ByteBuffer#offset}.
     * @returns {!ByteBuffer} this
     * @throws {TypeError} If `offset` is not a valid number
     * @throws {RangeError} If `offset` is out of bounds
     * @see ByteBuffer#reset
     * @expose
     */
    ByteBufferPrototype.mark = function(offset) {
        offset = typeof offset === 'undefined' ? this.offset : offset;
        if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
        }
        this.markedOffset = offset;
        return this;
    };
    /**
     * Sets the byte order.
     * @param {boolean} littleEndian `true` for little endian byte order, `false` for big endian
     * @returns {!ByteBuffer} this
     * @expose
     */
    ByteBufferPrototype.order = function(littleEndian) {
        if (!this.noAssert) {
            if (typeof littleEndian !== 'boolean')
                throw TypeError("Illegal littleEndian: Not a boolean");
        }
        this.littleEndian = !!littleEndian;
        return this;
    };

    /**
     * Switches (to) little endian byte order.
     * @param {boolean=} littleEndian Defaults to `true`, otherwise uses big endian
     * @returns {!ByteBuffer} this
     * @expose
     */
    ByteBufferPrototype.LE = function(littleEndian) {
        this.littleEndian = typeof littleEndian !== 'undefined' ? !!littleEndian : true;
        return this;
    };

    /**
     * Switches (to) big endian byte order.
     * @param {boolean=} bigEndian Defaults to `true`, otherwise uses little endian
     * @returns {!ByteBuffer} this
     * @expose
     */
    ByteBufferPrototype.BE = function(bigEndian) {
        this.littleEndian = typeof bigEndian !== 'undefined' ? !bigEndian : false;
        return this;
    };
    /**
     * Prepends some data to this ByteBuffer. This will overwrite any contents before the specified offset up to the
     *  prepended data's length. If there is not enough space available before the specified `offset`, the backing buffer
     *  will be resized and its contents moved accordingly.
     * @param {!ByteBuffer|string|!ArrayBuffer} source Data to prepend. If `source` is a ByteBuffer, its offset will be
     *  modified according to the performed read operation.
     * @param {(string|number)=} encoding Encoding if `data` is a string ("base64", "hex", "binary", defaults to "utf8")
     * @param {number=} offset Offset to prepend at. Will use and decrease {@link ByteBuffer#offset} by the number of bytes
     *  prepended if omitted.
     * @returns {!ByteBuffer} this
     * @expose
     * @example A relative `00<01 02 03>.prepend(<04 05>)` results in `<04 05 01 02 03>, 04 05|`
     * @example An absolute `00<01 02 03>.prepend(<04 05>, 2)` results in `04<05 02 03>, 04 05|`
     */
    ByteBufferPrototype.prepend = function(source, encoding, offset) {
        if (typeof encoding === 'number' || typeof encoding !== 'string') {
            offset = encoding;
            encoding = undefined;
        }
        var relative = typeof offset === 'undefined';
        if (relative) offset = this.offset;
        if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: "+offset+" (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= "+offset+" (+"+0+") <= "+this.buffer.byteLength);
        }
        if (!(source instanceof ByteBuffer))
            source = ByteBuffer.wrap(source, encoding);
        var len = source.limit - source.offset;
        if (len <= 0) return this; // Nothing to prepend
        var diff = len - offset;
        if (diff > 0) { // Not enough space before offset, so resize + move
            var buffer = new ArrayBuffer(this.buffer.byteLength + diff);
            var view = new Uint8Array(buffer);
            view.set(this.view.subarray(offset, this.buffer.byteLength), len);
            this.buffer = buffer;
            this.view = view;
            this.offset += diff;
            if (this.markedOffset >= 0) this.markedOffset += diff;
            this.limit += diff;
            offset += diff;
        } else {
            var arrayView = new Uint8Array(this.buffer);
        }
        this.view.set(source.view.subarray(source.offset, source.limit), offset - len);

        source.offset = source.limit;
        if (relative)
            this.offset -= len;
        return this;
    };

    /**
     * Prepends this ByteBuffer to another ByteBuffer. This will overwrite any contents before the specified offset up to the
     *  prepended data's length. If there is not enough space available before the specified `offset`, the backing buffer
     *  will be resized and its contents moved accordingly.
     * @param {!ByteBuffer} target Target ByteBuffer
     * @param {number=} offset Offset to prepend at. Will use and decrease {@link ByteBuffer#offset} by the number of bytes
     *  prepended if omitted.
     * @returns {!ByteBuffer} this
     * @expose
     * @see ByteBuffer#prepend
     */
    ByteBufferPrototype.prependTo = function(target, offset) {
        target.prepend(this, offset);
        return this;
    };
    /**
     * Prints debug information about this ByteBuffer's contents.
     * @param {function(string)=} out Output function to call, defaults to console.log
     * @expose
     */
    ByteBufferPrototype.printDebug = function(out) {
        if (typeof out !== 'function') out = console.log.bind(console);
        out(
            this.toString()+"\n"+
            "-------------------------------------------------------------------\n"+
            this.toDebug(/* columns */ true)
        );
    };

    /**
     * Gets the number of remaining readable bytes. Contents are the bytes between {@link ByteBuffer#offset} and
     *  {@link ByteBuffer#limit}, so this returns `limit - offset`.
     * @returns {number} Remaining readable bytes. May be negative if `offset > limit`.
     * @expose
     */
    ByteBufferPrototype.remaining = function() {
        return this.limit - this.offset;
    };
    /**
     * Resets this ByteBuffer's {@link ByteBuffer#offset}. If an offset has been marked through {@link ByteBuffer#mark}
     *  before, `offset` will be set to {@link ByteBuffer#markedOffset}, which will then be discarded. If no offset has been
     *  marked, sets `offset = 0`.
     * @returns {!ByteBuffer} this
     * @see ByteBuffer#mark
     * @expose
     */
    ByteBufferPrototype.reset = function() {
        if (this.markedOffset >= 0) {
            this.offset = this.markedOffset;
            this.markedOffset = -1;
        } else {
            this.offset = 0;
        }
        return this;
    };
    /**
     * Resizes this ByteBuffer to be backed by a buffer of at least the given capacity. Will do nothing if already that
     *  large or larger.
     * @param {number} capacity Capacity required
     * @returns {!ByteBuffer} this
     * @throws {TypeError} If `capacity` is not a number
     * @throws {RangeError} If `capacity < 0`
     * @expose
     */
    ByteBufferPrototype.resize = function(capacity) {
        if (!this.noAssert) {
            if (typeof capacity !== 'number' || capacity % 1 !== 0)
                throw TypeError("Illegal capacity: "+capacity+" (not an integer)");
            capacity |= 0;
            if (capacity < 0)
                throw RangeError("Illegal capacity: 0 <= "+capacity);
        }
        if (this.buffer.byteLength < capacity) {
            var buffer = new ArrayBuffer(capacity);
            var view = new Uint8Array(buffer);
            view.set(this.view);
            this.buffer = buffer;
            this.view = view;
        }
        return this;
    };
    /**
     * Reverses this ByteBuffer's contents.
     * @param {number=} begin Offset to start at, defaults to {@link ByteBuffer#offset}
     * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}
     * @returns {!ByteBuffer} this
     * @expose
     */
    ByteBufferPrototype.reverse = function(begin, end) {
        if (typeof begin === 'undefined') begin = this.offset;
        if (typeof end === 'undefined') end = this.limit;
        if (!this.noAssert) {
            if (typeof begin !== 'number' || begin % 1 !== 0)
                throw TypeError("Illegal begin: Not an integer");
            begin >>>= 0;
            if (typeof end !== 'number' || end % 1 !== 0)
                throw TypeError("Illegal end: Not an integer");
            end >>>= 0;
            if (begin < 0 || begin > end || end > this.buffer.byteLength)
                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
        }
        if (begin === end)
            return this; // Nothing to reverse
        Array.prototype.reverse.call(this.view.subarray(begin, end));
        return this;
    };
    /**
     * Skips the next `length` bytes. This will just advance
     * @param {number} length Number of bytes to skip. May also be negative to move the offset back.
     * @returns {!ByteBuffer} this
     * @expose
     */
    ByteBufferPrototype.skip = function(length) {
        if (!this.noAssert) {
            if (typeof length !== 'number' || length % 1 !== 0)
                throw TypeError("Illegal length: "+length+" (not an integer)");
            length |= 0;
        }
        var offset = this.offset + length;
        if (!this.noAssert) {
            if (offset < 0 || offset > this.buffer.byteLength)
                throw RangeError("Illegal length: 0 <= "+this.offset+" + "+length+" <= "+this.buffer.byteLength);
        }
        this.offset = offset;
        return this;
    };

    /**
     * Slices this ByteBuffer by creating a cloned instance with `offset = begin` and `limit = end`.
     * @param {number=} begin Begin offset, defaults to {@link ByteBuffer#offset}.
     * @param {number=} end End offset, defaults to {@link ByteBuffer#limit}.
     * @returns {!ByteBuffer} Clone of this ByteBuffer with slicing applied, backed by the same {@link ByteBuffer#buffer}
     * @expose
     */
    ByteBufferPrototype.slice = function(begin, end) {
        if (typeof begin === 'undefined') begin = this.offset;
        if (typeof end === 'undefined') end = this.limit;
        if (!this.noAssert) {
            if (typeof begin !== 'number' || begin % 1 !== 0)
                throw TypeError("Illegal begin: Not an integer");
            begin >>>= 0;
            if (typeof end !== 'number' || end % 1 !== 0)
                throw TypeError("Illegal end: Not an integer");
            end >>>= 0;
            if (begin < 0 || begin > end || end > this.buffer.byteLength)
                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
        }
        var bb = this.clone();
        bb.offset = begin;
        bb.limit = end;
        return bb;
    };
    /**
     * Returns a copy of the backing buffer that contains this ByteBuffer's contents. Contents are the bytes between
     *  {@link ByteBuffer#offset} and {@link ByteBuffer#limit}.
     * @param {boolean=} forceCopy If `true` returns a copy, otherwise returns a view referencing the same memory if
     *  possible. Defaults to `false`
     * @returns {!ArrayBuffer} Contents as an ArrayBuffer
     * @expose
     */
    ByteBufferPrototype.toBuffer = function(forceCopy) {
        var offset = this.offset,
            limit = this.limit;
        if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0)
                throw TypeError("Illegal offset: Not an integer");
            offset >>>= 0;
            if (typeof limit !== 'number' || limit % 1 !== 0)
                throw TypeError("Illegal limit: Not an integer");
            limit >>>= 0;
            if (offset < 0 || offset > limit || limit > this.buffer.byteLength)
                throw RangeError("Illegal range: 0 <= "+offset+" <= "+limit+" <= "+this.buffer.byteLength);
        }
        // NOTE: It's not possible to have another ArrayBuffer reference the same memory as the backing buffer. This is
        // possible with Uint8Array#subarray only, but we have to return an ArrayBuffer by contract. So:
        if (!forceCopy && offset === 0 && limit === this.buffer.byteLength)
            return this.buffer;
        if (offset === limit)
            return EMPTY_BUFFER;
        var buffer = new ArrayBuffer(limit - offset);
        new Uint8Array(buffer).set(new Uint8Array(this.buffer).subarray(offset, limit), 0);
        return buffer;
    };

    /**
     * Returns a raw buffer compacted to contain this ByteBuffer's contents. Contents are the bytes between
     *  {@link ByteBuffer#offset} and {@link ByteBuffer#limit}. This is an alias of {@link ByteBuffer#toBuffer}.
     * @function
     * @param {boolean=} forceCopy If `true` returns a copy, otherwise returns a view referencing the same memory.
     *  Defaults to `false`
     * @returns {!ArrayBuffer} Contents as an ArrayBuffer
     * @expose
     */
    ByteBufferPrototype.toArrayBuffer = ByteBufferPrototype.toBuffer;

    /**
     * Converts the ByteBuffer's contents to a string.
     * @param {string=} encoding Output encoding. Returns an informative string representation if omitted but also allows
     *  direct conversion to "utf8", "hex", "base64" and "binary" encoding. "debug" returns a hex representation with
     *  highlighted offsets.
     * @param {number=} begin Offset to begin at, defaults to {@link ByteBuffer#offset}
     * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}
     * @returns {string} String representation
     * @throws {Error} If `encoding` is invalid
     * @expose
     */
    ByteBufferPrototype.toString = function(encoding, begin, end) {
        if (typeof encoding === 'undefined')
            return "ByteBufferAB(offset="+this.offset+",markedOffset="+this.markedOffset+",limit="+this.limit+",capacity="+this.capacity()+")";
        if (typeof encoding === 'number')
            encoding = "utf8",
            begin = encoding,
            end = begin;
        switch (encoding) {
            case "utf8":
                return this.toUTF8(begin, end);
            case "base64":
                return this.toBase64(begin, end);
            case "hex":
                return this.toHex(begin, end);
            case "binary":
                return this.toBinary(begin, end);
            case "debug":
                return this.toDebug();
            case "columns":
                return this.toColumns();
            default:
                throw Error("Unsupported encoding: "+encoding);
        }
    };

    // lxiv-embeddable

    /**
     * lxiv-embeddable (c) 2014 Daniel Wirtz <dcode@dcode.io>
     * Released under the Apache License, Version 2.0
     * see: https://github.com/dcodeIO/lxiv for details
     */
    var lxiv = function() {
        "use strict";

        /**
         * lxiv namespace.
         * @type {!Object.<string,*>}
         * @exports lxiv
         */
        var lxiv = {};

        /**
         * Character codes for output.
         * @type {!Array.<number>}
         * @inner
         */
        var aout = [
            65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
            81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102,
            103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
            119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47
        ];

        /**
         * Character codes for input.
         * @type {!Array.<number>}
         * @inner
         */
        var ain = [];
        for (var i=0, k=aout.length; i<k; ++i)
            ain[aout[i]] = i;

        /**
         * Encodes bytes to base64 char codes.
         * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if
         *  there are no more bytes left.
         * @param {!function(number)} dst Characters destination as a function successively called with each encoded char
         *  code.
         */
        lxiv.encode = function(src, dst) {
            var b, t;
            while ((b = src()) !== null) {
                dst(aout[(b>>2)&0x3f]);
                t = (b&0x3)<<4;
                if ((b = src()) !== null) {
                    t |= (b>>4)&0xf;
                    dst(aout[(t|((b>>4)&0xf))&0x3f]);
                    t = (b&0xf)<<2;
                    if ((b = src()) !== null)
                        dst(aout[(t|((b>>6)&0x3))&0x3f]),
                        dst(aout[b&0x3f]);
                    else
                        dst(aout[t&0x3f]),
                        dst(61);
                } else
                    dst(aout[t&0x3f]),
                    dst(61),
                    dst(61);
            }
        };

        /**
         * Decodes base64 char codes to bytes.
         * @param {!function():number|null} src Characters source as a function returning the next char code respectively
         *  `null` if there are no more characters left.
         * @param {!function(number)} dst Bytes destination as a function successively called with the next byte.
         * @throws {Error} If a character code is invalid
         */
        lxiv.decode = function(src, dst) {
            var c, t1, t2;
            function fail(c) {
                throw Error("Illegal character code: "+c);
            }
            while ((c = src()) !== null) {
                t1 = ain[c];
                if (typeof t1 === 'undefined') fail(c);
                if ((c = src()) !== null) {
                    t2 = ain[c];
                    if (typeof t2 === 'undefined') fail(c);
                    dst((t1<<2)>>>0|(t2&0x30)>>4);
                    if ((c = src()) !== null) {
                        t1 = ain[c];
                        if (typeof t1 === 'undefined')
                            if (c === 61) break; else fail(c);
                        dst(((t2&0xf)<<4)>>>0|(t1&0x3c)>>2);
                        if ((c = src()) !== null) {
                            t2 = ain[c];
                            if (typeof t2 === 'undefined')
                                if (c === 61) break; else fail(c);
                            dst(((t1&0x3)<<6)>>>0|t2);
                        }
                    }
                }
            }
        };

        /**
         * Tests if a string is valid base64.
         * @param {string} str String to test
         * @returns {boolean} `true` if valid, otherwise `false`
         */
        lxiv.test = function(str) {
            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(str);
        };

        return lxiv;
    }();

    // encodings/base64

    /**
     * Encodes this ByteBuffer's contents to a base64 encoded string.
     * @param {number=} begin Offset to begin at, defaults to {@link ByteBuffer#offset}.
     * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}.
     * @returns {string} Base64 encoded string
     * @throws {RangeError} If `begin` or `end` is out of bounds
     * @expose
     */
    ByteBufferPrototype.toBase64 = function(begin, end) {
        if (typeof begin === 'undefined')
            begin = this.offset;
        if (typeof end === 'undefined')
            end = this.limit;
        begin = begin | 0; end = end | 0;
        if (begin < 0 || end > this.capacity || begin > end)
            throw RangeError("begin, end");
        var sd; lxiv.encode(function() {
            return begin < end ? this.view[begin++] : null;
        }.bind(this), sd = stringDestination());
        return sd();
    };

    /**
     * Decodes a base64 encoded string to a ByteBuffer.
     * @param {string} str String to decode
     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
     * @returns {!ByteBuffer} ByteBuffer
     * @expose
     */
    ByteBuffer.fromBase64 = function(str, littleEndian) {
        if (typeof str !== 'string')
            throw TypeError("str");
        var bb = new ByteBuffer(str.length/4*3, littleEndian),
            i = 0;
        lxiv.decode(stringSource(str), function(b) {
            bb.view[i++] = b;
        });
        bb.limit = i;
        return bb;
    };

    /**
     * Encodes a binary string to base64 like `window.btoa` does.
     * @param {string} str Binary string
     * @returns {string} Base64 encoded string
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.btoa
     * @expose
     */
    ByteBuffer.btoa = function(str) {
        return ByteBuffer.fromBinary(str).toBase64();
    };

    /**
     * Decodes a base64 encoded string to binary like `window.atob` does.
     * @param {string} b64 Base64 encoded string
     * @returns {string} Binary string
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.atob
     * @expose
     */
    ByteBuffer.atob = function(b64) {
        return ByteBuffer.fromBase64(b64).toBinary();
    };

    // encodings/binary

    /**
     * Encodes this ByteBuffer to a binary encoded string, that is using only characters 0x00-0xFF as bytes.
     * @param {number=} begin Offset to begin at. Defaults to {@link ByteBuffer#offset}.
     * @param {number=} end Offset to end at. Defaults to {@link ByteBuffer#limit}.
     * @returns {string} Binary encoded string
     * @throws {RangeError} If `offset > limit`
     * @expose
     */
    ByteBufferPrototype.toBinary = function(begin, end) {
        if (typeof begin === 'undefined')
            begin = this.offset;
        if (typeof end === 'undefined')
            end = this.limit;
        begin |= 0; end |= 0;
        if (begin < 0 || end > this.capacity() || begin > end)
            throw RangeError("begin, end");
        if (begin === end)
            return "";
        var chars = [],
            parts = [];
        while (begin < end) {
            chars.push(this.view[begin++]);
            if (chars.length >= 1024)
                parts.push(String.fromCharCode.apply(String, chars)),
                chars = [];
        }
        return parts.join('') + String.fromCharCode.apply(String, chars);
    };

    /**
     * Decodes a binary encoded string, that is using only characters 0x00-0xFF as bytes, to a ByteBuffer.
     * @param {string} str String to decode
     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
     * @returns {!ByteBuffer} ByteBuffer
     * @expose
     */
    ByteBuffer.fromBinary = function(str, littleEndian) {
        if (typeof str !== 'string')
            throw TypeError("str");
        var i = 0,
            k = str.length,
            charCode,
            bb = new ByteBuffer(k, littleEndian);
        while (i<k) {
            charCode = str.charCodeAt(i);
            if (charCode > 0xff)
                throw RangeError("illegal char code: "+charCode);
            bb.view[i++] = charCode;
        }
        bb.limit = k;
        return bb;
    };

    // encodings/debug

    /**
     * Encodes this ByteBuffer to a hex encoded string with marked offsets. Offset symbols are:
     * * `<` : offset,
     * * `'` : markedOffset,
     * * `>` : limit,
     * * `|` : offset and limit,
     * * `[` : offset and markedOffset,
     * * `]` : markedOffset and limit,
     * * `!` : offset, markedOffset and limit
     * @param {boolean=} columns If `true` returns two columns hex + ascii, defaults to `false`
     * @returns {string|!Array.<string>} Debug string or array of lines if `asArray = true`
     * @expose
     * @example `>00'01 02<03` contains four bytes with `limit=0, markedOffset=1, offset=3`
     * @example `00[01 02 03>` contains four bytes with `offset=markedOffset=1, limit=4`
     * @example `00|01 02 03` contains four bytes with `offset=limit=1, markedOffset=-1`
     * @example `|` contains zero bytes with `offset=limit=0, markedOffset=-1`
     */
    ByteBufferPrototype.toDebug = function(columns) {
        var i = -1,
            k = this.buffer.byteLength,
            b,
            hex = "",
            asc = "",
            out = "";
        while (i<k) {
            if (i !== -1) {
                b = this.view[i];
                if (b < 0x10) hex += "0"+b.toString(16).toUpperCase();
                else hex += b.toString(16).toUpperCase();
                if (columns)
                    asc += b > 32 && b < 127 ? String.fromCharCode(b) : '.';
            }
            ++i;
            if (columns) {
                if (i > 0 && i % 16 === 0 && i !== k) {
                    while (hex.length < 3*16+3) hex += " ";
                    out += hex+asc+"\n";
                    hex = asc = "";
                }
            }
            if (i === this.offset && i === this.limit)
                hex += i === this.markedOffset ? "!" : "|";
            else if (i === this.offset)
                hex += i === this.markedOffset ? "[" : "<";
            else if (i === this.limit)
                hex += i === this.markedOffset ? "]" : ">";
            else
                hex += i === this.markedOffset ? "'" : (columns || (i !== 0 && i !== k) ? " " : "");
        }
        if (columns && hex !== " ") {
            while (hex.length < 3*16+3)
                hex += " ";
            out += hex + asc + "\n";
        }
        return columns ? out : hex;
    };

    /**
     * Decodes a hex encoded string with marked offsets to a ByteBuffer.
     * @param {string} str Debug string to decode (not be generated with `columns = true`)
     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
     * @returns {!ByteBuffer} ByteBuffer
     * @expose
     * @see ByteBuffer#toDebug
     */
    ByteBuffer.fromDebug = function(str, littleEndian, noAssert) {
        var k = str.length,
            bb = new ByteBuffer(((k+1)/3)|0, littleEndian, noAssert);
        var i = 0, j = 0, ch, b,
            rs = false, // Require symbol next
            ho = false, hm = false, hl = false, // Already has offset (ho), markedOffset (hm), limit (hl)?
            fail = false;
        while (i<k) {
            switch (ch = str.charAt(i++)) {
                case '!':
                    if (!noAssert) {
                        if (ho || hm || hl) {
                            fail = true;
                            break;
                        }
                        ho = hm = hl = true;
                    }
                    bb.offset = bb.markedOffset = bb.limit = j;
                    rs = false;
                    break;
                case '|':
                    if (!noAssert) {
                        if (ho || hl) {
                            fail = true;
                            break;
                        }
                        ho = hl = true;
                    }
                    bb.offset = bb.limit = j;
                    rs = false;
                    break;
                case '[':
                    if (!noAssert) {
                        if (ho || hm) {
                            fail = true;
                            break;
                        }
                        ho = hm = true;
                    }
                    bb.offset = bb.markedOffset = j;
                    rs = false;
                    break;
                case '<':
                    if (!noAssert) {
                        if (ho) {
                            fail = true;
                            break;
                        }
                        ho = true;
                    }
                    bb.offset = j;
                    rs = false;
                    break;
                case ']':
                    if (!noAssert) {
                        if (hl || hm) {
                            fail = true;
                            break;
                        }
                        hl = hm = true;
                    }
                    bb.limit = bb.markedOffset = j;
                    rs = false;
                    break;
                case '>':
                    if (!noAssert) {
                        if (hl) {
                            fail = true;
                            break;
                        }
                        hl = true;
                    }
                    bb.limit = j;
                    rs = false;
                    break;
                case "'":
                    if (!noAssert) {
                        if (hm) {
                            fail = true;
                            break;
                        }
                        hm = true;
                    }
                    bb.markedOffset = j;
                    rs = false;
                    break;
                case ' ':
                    rs = false;
                    break;
                default:
                    if (!noAssert) {
                        if (rs) {
                            fail = true;
                            break;
                        }
                    }
                    b = parseInt(ch+str.charAt(i++), 16);
                    if (!noAssert) {
                        if (isNaN(b) || b < 0 || b > 255)
                            throw TypeError("Illegal str: Not a debug encoded string");
                    }
                    bb.view[j++] = b;
                    rs = true;
            }
            if (fail)
                throw TypeError("Illegal str: Invalid symbol at "+i);
        }
        if (!noAssert) {
            if (!ho || !hl)
                throw TypeError("Illegal str: Missing offset or limit");
            if (j<bb.buffer.byteLength)
                throw TypeError("Illegal str: Not a debug encoded string (is it hex?) "+j+" < "+k);
        }
        return bb;
    };

    // encodings/hex

    /**
     * Encodes this ByteBuffer's contents to a hex encoded string.
     * @param {number=} begin Offset to begin at. Defaults to {@link ByteBuffer#offset}.
     * @param {number=} end Offset to end at. Defaults to {@link ByteBuffer#limit}.
     * @returns {string} Hex encoded string
     * @expose
     */
    ByteBufferPrototype.toHex = function(begin, end) {
        begin = typeof begin === 'undefined' ? this.offset : begin;
        end = typeof end === 'undefined' ? this.limit : end;
        if (!this.noAssert) {
            if (typeof begin !== 'number' || begin % 1 !== 0)
                throw TypeError("Illegal begin: Not an integer");
            begin >>>= 0;
            if (typeof end !== 'number' || end % 1 !== 0)
                throw TypeError("Illegal end: Not an integer");
            end >>>= 0;
            if (begin < 0 || begin > end || end > this.buffer.byteLength)
                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
        }
        var out = new Array(end - begin),
            b;
        while (begin < end) {
            b = this.view[begin++];
            if (b < 0x10)
                out.push("0", b.toString(16));
            else out.push(b.toString(16));
        }
        return out.join('');
    };

    /**
     * Decodes a hex encoded string to a ByteBuffer.
     * @param {string} str String to decode
     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
     * @returns {!ByteBuffer} ByteBuffer
     * @expose
     */
    ByteBuffer.fromHex = function(str, littleEndian, noAssert) {
        if (!noAssert) {
            if (typeof str !== 'string')
                throw TypeError("Illegal str: Not a string");
            if (str.length % 2 !== 0)
                throw TypeError("Illegal str: Length not a multiple of 2");
        }
        var k = str.length,
            bb = new ByteBuffer((k / 2) | 0, littleEndian),
            b;
        for (var i=0, j=0; i<k; i+=2) {
            b = parseInt(str.substring(i, i+2), 16);
            if (!noAssert)
                if (!isFinite(b) || b < 0 || b > 255)
                    throw TypeError("Illegal str: Contains non-hex characters");
            bb.view[j++] = b;
        }
        bb.limit = j;
        return bb;
    };

    // utfx-embeddable

    /**
     * utfx-embeddable (c) 2014 Daniel Wirtz <dcode@dcode.io>
     * Released under the Apache License, Version 2.0
     * see: https://github.com/dcodeIO/utfx for details
     */
    var utfx = function() {
        "use strict";

        /**
         * utfx namespace.
         * @inner
         * @type {!Object.<string,*>}
         */
        var utfx = {};

        /**
         * Maximum valid code point.
         * @type {number}
         * @const
         */
        utfx.MAX_CODEPOINT = 0x10FFFF;

        /**
         * Encodes UTF8 code points to UTF8 bytes.
         * @param {(!function():number|null) | number} src Code points source, either as a function returning the next code point
         *  respectively `null` if there are no more code points left or a single numeric code point.
         * @param {!function(number)} dst Bytes destination as a function successively called with the next byte
         */
        utfx.encodeUTF8 = function(src, dst) {
            var cp = null;
            if (typeof src === 'number')
                cp = src,
                src = function() { return null; };
            while (cp !== null || (cp = src()) !== null) {
                if (cp < 0x80)
                    dst(cp&0x7F);
                else if (cp < 0x800)
                    dst(((cp>>6)&0x1F)|0xC0),
                    dst((cp&0x3F)|0x80);
                else if (cp < 0x10000)
                    dst(((cp>>12)&0x0F)|0xE0),
                    dst(((cp>>6)&0x3F)|0x80),
                    dst((cp&0x3F)|0x80);
                else
                    dst(((cp>>18)&0x07)|0xF0),
                    dst(((cp>>12)&0x3F)|0x80),
                    dst(((cp>>6)&0x3F)|0x80),
                    dst((cp&0x3F)|0x80);
                cp = null;
            }
        };

        /**
         * Decodes UTF8 bytes to UTF8 code points.
         * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if there
         *  are no more bytes left.
         * @param {!function(number)} dst Code points destination as a function successively called with each decoded code point.
         * @throws {RangeError} If a starting byte is invalid in UTF8
         * @throws {Error} If the last sequence is truncated. Has an array property `bytes` holding the
         *  remaining bytes.
         */
        utfx.decodeUTF8 = function(src, dst) {
            var a, b, c, d, fail = function(b) {
                b = b.slice(0, b.indexOf(null));
                var err = Error(b.toString());
                err.name = "TruncatedError";
                err['bytes'] = b;
                throw err;
            };
            while ((a = src()) !== null) {
                if ((a&0x80) === 0)
                    dst(a);
                else if ((a&0xE0) === 0xC0)
                    ((b = src()) === null) && fail([a, b]),
                    dst(((a&0x1F)<<6) | (b&0x3F));
                else if ((a&0xF0) === 0xE0)
                    ((b=src()) === null || (c=src()) === null) && fail([a, b, c]),
                    dst(((a&0x0F)<<12) | ((b&0x3F)<<6) | (c&0x3F));
                else if ((a&0xF8) === 0xF0)
                    ((b=src()) === null || (c=src()) === null || (d=src()) === null) && fail([a, b, c ,d]),
                    dst(((a&0x07)<<18) | ((b&0x3F)<<12) | ((c&0x3F)<<6) | (d&0x3F));
                else throw RangeError("Illegal starting byte: "+a);
            }
        };

        /**
         * Converts UTF16 characters to UTF8 code points.
         * @param {!function():number|null} src Characters source as a function returning the next char code respectively
         *  `null` if there are no more characters left.
         * @param {!function(number)} dst Code points destination as a function successively called with each converted code
         *  point.
         */
        utfx.UTF16toUTF8 = function(src, dst) {
            var c1, c2 = null;
            while (true) {
                if ((c1 = c2 !== null ? c2 : src()) === null)
                    break;
                if (c1 >= 0xD800 && c1 <= 0xDFFF) {
                    if ((c2 = src()) !== null) {
                        if (c2 >= 0xDC00 && c2 <= 0xDFFF) {
                            dst((c1-0xD800)*0x400+c2-0xDC00+0x10000);
                            c2 = null; continue;
                        }
                    }
                }
                dst(c1);
            }
            if (c2 !== null) dst(c2);
        };

        /**
         * Converts UTF8 code points to UTF16 characters.
         * @param {(!function():number|null) | number} src Code points source, either as a function returning the next code point
         *  respectively `null` if there are no more code points left or a single numeric code point.
         * @param {!function(number)} dst Characters destination as a function successively called with each converted char code.
         * @throws {RangeError} If a code point is out of range
         */
        utfx.UTF8toUTF16 = function(src, dst) {
            var cp = null;
            if (typeof src === 'number')
                cp = src, src = function() { return null; };
            while (cp !== null || (cp = src()) !== null) {
                if (cp <= 0xFFFF)
                    dst(cp);
                else
                    cp -= 0x10000,
                    dst((cp>>10)+0xD800),
                    dst((cp%0x400)+0xDC00);
                cp = null;
            }
        };

        /**
         * Converts and encodes UTF16 characters to UTF8 bytes.
         * @param {!function():number|null} src Characters source as a function returning the next char code respectively `null`
         *  if there are no more characters left.
         * @param {!function(number)} dst Bytes destination as a function successively called with the next byte.
         */
        utfx.encodeUTF16toUTF8 = function(src, dst) {
            utfx.UTF16toUTF8(src, function(cp) {
                utfx.encodeUTF8(cp, dst);
            });
        };

        /**
         * Decodes and converts UTF8 bytes to UTF16 characters.
         * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if there
         *  are no more bytes left.
         * @param {!function(number)} dst Characters destination as a function successively called with each converted char code.
         * @throws {RangeError} If a starting byte is invalid in UTF8
         * @throws {Error} If the last sequence is truncated. Has an array property `bytes` holding the remaining bytes.
         */
        utfx.decodeUTF8toUTF16 = function(src, dst) {
            utfx.decodeUTF8(src, function(cp) {
                utfx.UTF8toUTF16(cp, dst);
            });
        };

        /**
         * Calculates the byte length of an UTF8 code point.
         * @param {number} cp UTF8 code point
         * @returns {number} Byte length
         */
        utfx.calculateCodePoint = function(cp) {
            return (cp < 0x80) ? 1 : (cp < 0x800) ? 2 : (cp < 0x10000) ? 3 : 4;
        };

        /**
         * Calculates the number of UTF8 bytes required to store UTF8 code points.
         * @param {(!function():number|null)} src Code points source as a function returning the next code point respectively
         *  `null` if there are no more code points left.
         * @returns {number} The number of UTF8 bytes required
         */
        utfx.calculateUTF8 = function(src) {
            var cp, l=0;
            while ((cp = src()) !== null)
                l += (cp < 0x80) ? 1 : (cp < 0x800) ? 2 : (cp < 0x10000) ? 3 : 4;
            return l;
        };

        /**
         * Calculates the number of UTF8 code points respectively UTF8 bytes required to store UTF16 char codes.
         * @param {(!function():number|null)} src Characters source as a function returning the next char code respectively
         *  `null` if there are no more characters left.
         * @returns {!Array.<number>} The number of UTF8 code points at index 0 and the number of UTF8 bytes required at index 1.
         */
        utfx.calculateUTF16asUTF8 = function(src) {
            var n=0, l=0;
            utfx.UTF16toUTF8(src, function(cp) {
                ++n; l += (cp < 0x80) ? 1 : (cp < 0x800) ? 2 : (cp < 0x10000) ? 3 : 4;
            });
            return [n,l];
        };

        return utfx;
    }();

    // encodings/utf8

    /**
     * Encodes this ByteBuffer's contents between {@link ByteBuffer#offset} and {@link ByteBuffer#limit} to an UTF8 encoded
     *  string.
     * @returns {string} Hex encoded string
     * @throws {RangeError} If `offset > limit`
     * @expose
     */
    ByteBufferPrototype.toUTF8 = function(begin, end) {
        if (typeof begin === 'undefined') begin = this.offset;
        if (typeof end === 'undefined') end = this.limit;
        if (!this.noAssert) {
            if (typeof begin !== 'number' || begin % 1 !== 0)
                throw TypeError("Illegal begin: Not an integer");
            begin >>>= 0;
            if (typeof end !== 'number' || end % 1 !== 0)
                throw TypeError("Illegal end: Not an integer");
            end >>>= 0;
            if (begin < 0 || begin > end || end > this.buffer.byteLength)
                throw RangeError("Illegal range: 0 <= "+begin+" <= "+end+" <= "+this.buffer.byteLength);
        }
        var sd; try {
            utfx.decodeUTF8toUTF16(function() {
                return begin < end ? this.view[begin++] : null;
            }.bind(this), sd = stringDestination());
        } catch (e) {
            if (begin !== end)
                throw RangeError("Illegal range: Truncated data, "+begin+" != "+end);
        }
        return sd();
    };

    /**
     * Decodes an UTF8 encoded string to a ByteBuffer.
     * @param {string} str String to decode
     * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
     *  {@link ByteBuffer.DEFAULT_ENDIAN}.
     * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
     *  {@link ByteBuffer.DEFAULT_NOASSERT}.
     * @returns {!ByteBuffer} ByteBuffer
     * @expose
     */
    ByteBuffer.fromUTF8 = function(str, littleEndian, noAssert) {
        if (!noAssert)
            if (typeof str !== 'string')
                throw TypeError("Illegal str: Not a string");
        var bb = new ByteBuffer(utfx.calculateUTF16asUTF8(stringSource(str), true)[1], littleEndian, noAssert),
            i = 0;
        utfx.encodeUTF16toUTF8(stringSource(str), function(b) {
            bb.view[i++] = b;
        });
        bb.limit = i;
        return bb;
    };

/*!
 * protobuf.js v6.8.8 (c) 2016, daniel wirtz
 * compiled thu, 19 jul 2018 00:33:26 utc
 * licensed under the bsd-3-clause license
 * see: https://github.com/dcodeio/protobuf.js for details
 */
!function(g){"use strict";var r,e,t,i;r={1:[function(t,i){i.exports=function(t,i){var n=Array(arguments.length-1),s=0,r=2,u=!0;for(;r<arguments.length;)n[s++]=arguments[r++];return new Promise(function(r,e){n[s]=function(t){if(u)if(u=!1,t)e(t);else{for(var i=Array(arguments.length-1),n=0;n<i.length;)i[n++]=arguments[n];r.apply(null,i)}};try{t.apply(i||null,n)}catch(t){u&&(u=!1,e(t))}})}},{}],2:[function(t,i,n){var r=n;r.length=function(t){var i=t.length;if(!i)return 0;for(var n=0;1<--i%4&&"="===t.charAt(i);)++n;return Math.ceil(3*t.length)/4-n};for(var h=Array(64),f=Array(123),e=0;e<64;)f[h[e]=e<26?e+65:e<52?e+71:e<62?e-4:e-59|43]=e++;r.encode=function(t,i,n){for(var r,e=null,s=[],u=0,o=0;i<n;){var f=t[i++];switch(o){case 0:s[u++]=h[f>>2],r=(3&f)<<4,o=1;break;case 1:s[u++]=h[r|f>>4],r=(15&f)<<2,o=2;break;case 2:s[u++]=h[r|f>>6],s[u++]=h[63&f],o=0}8191<u&&((e||(e=[])).push(String.fromCharCode.apply(String,s)),u=0)}return o&&(s[u++]=h[r],s[u++]=61,1===o&&(s[u++]=61)),e?(u&&e.push(String.fromCharCode.apply(String,s.slice(0,u))),e.join("")):String.fromCharCode.apply(String,s.slice(0,u))};var c="invalid encoding";r.decode=function(t,i,n){for(var r,e=n,s=0,u=0;u<t.length;){var o=t.charCodeAt(u++);if(61===o&&1<s)break;if((o=f[o])===g)throw Error(c);switch(s){case 0:r=o,s=1;break;case 1:i[n++]=r<<2|(48&o)>>4,r=o,s=2;break;case 2:i[n++]=(15&r)<<4|(60&o)>>2,r=o,s=3;break;case 3:i[n++]=(3&r)<<6|o,s=0}}if(1===s)throw Error(c);return n-e},r.test=function(t){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)}},{}],3:[function(t,i){function a(i,n){"string"==typeof i&&(n=i,i=g);var f=[];function h(t){if("string"!=typeof t){var i=c();if(a.verbose&&console.log("codegen: "+i),i="return "+i,t){for(var n=Object.keys(t),r=Array(n.length+1),e=Array(n.length),s=0;s<n.length;)r[s]=n[s],e[s]=t[n[s++]];return r[s]=i,Function.apply(null,r).apply(null,e)}return Function(i)()}for(var u=Array(arguments.length-1),o=0;o<u.length;)u[o]=arguments[++o];if(o=0,t=t.replace(/%([%dfijs])/g,function(t,i){var n=u[o++];switch(i){case"d":case"f":return+n+"";case"i":return Math.floor(n)+"";case"j":return JSON.stringify(n);case"s":return n+""}return"%"}),o!==u.length)throw Error("parameter count mismatch");return f.push(t),h}function c(t){return"function "+(t||n||"")+"("+(i&&i.join(",")||"")+"){\n  "+f.join("\n  ")+"\n}"}return h.toString=c,h}(i.exports=a).verbose=!1},{}],4:[function(t,i){function n(){this.t={}}(i.exports=n).prototype.on=function(t,i,n){return(this.t[t]||(this.t[t]=[])).push({fn:i,ctx:n||this}),this},n.prototype.off=function(t,i){if(t===g)this.t={};else if(i===g)this.t[t]=[];else for(var n=this.t[t],r=0;r<n.length;)n[r].fn===i?n.splice(r,1):++r;return this},n.prototype.emit=function(t){var i=this.t[t];if(i){for(var n=[],r=1;r<arguments.length;)n.push(arguments[r++]);for(r=0;r<i.length;)i[r].fn.apply(i[r++].ctx,n)}return this}},{}],5:[function(t,i){i.exports=o;var s=t(1),u=t(7)("fs");function o(n,r,e){return"function"==typeof r?(e=r,r={}):r||(r={}),e?!r.xhr&&u&&u.readFile?u.readFile(n,function(t,i){return t&&"undefined"!=typeof XMLHttpRequest?o.xhr(n,r,e):t?e(t):e(null,r.binary?i:i.toString("utf8"))}):o.xhr(n,r,e):s(o,this,n,r)}o.xhr=function(t,n,r){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4!==e.readyState)return g;if(0!==e.status&&200!==e.status)return r(Error("status "+e.status));if(n.binary){var t=e.response;if(!t){t=[];for(var i=0;i<e.responseText.length;++i)t.push(255&e.responseText.charCodeAt(i))}return r(null,"undefined"!=typeof Uint8Array?new Uint8Array(t):t)}return r(null,e.responseText)},n.binary&&("overrideMimeType"in e&&e.overrideMimeType("text/plain; charset=x-user-defined"),e.responseType="arraybuffer"),e.open("GET",t),e.send()}},{1:1,7:7}],6:[function(t,i){function n(o){return"undefined"!=typeof Float32Array?function(){var r=new Float32Array([-0]),e=new Uint8Array(r.buffer),t=128===e[3];function i(t,i,n){r[0]=t,i[n]=e[0],i[n+1]=e[1],i[n+2]=e[2],i[n+3]=e[3]}function n(t,i,n){r[0]=t,i[n]=e[3],i[n+1]=e[2],i[n+2]=e[1],i[n+3]=e[0]}function s(t,i){return e[0]=t[i],e[1]=t[i+1],e[2]=t[i+2],e[3]=t[i+3],r[0]}function u(t,i){return e[3]=t[i],e[2]=t[i+1],e[1]=t[i+2],e[0]=t[i+3],r[0]}o.writeFloatLE=t?i:n,o.writeFloatBE=t?n:i,o.readFloatLE=t?s:u,o.readFloatBE=t?u:s}():function(){function t(t,i,n,r){var e=i<0?1:0;if(e&&(i=-i),0===i)t(0<1/i?0:2147483648,n,r);else if(isNaN(i))t(2143289344,n,r);else if(34028234663852886e22<i)t((e<<31|2139095040)>>>0,n,r);else if(i<11754943508222875e-54)t((e<<31|Math.round(i/1401298464324817e-60))>>>0,n,r);else{var s=Math.floor(Math.log(i)/Math.LN2);t((e<<31|s+127<<23|8388607&Math.round(i*Math.pow(2,-s)*8388608))>>>0,n,r)}}function i(t,i,n){var r=t(i,n),e=2*(r>>31)+1,s=r>>>23&255,u=8388607&r;return 255===s?u?NaN:e*(1/0):0===s?1401298464324817e-60*e*u:e*Math.pow(2,s-150)*(u+8388608)}o.writeFloatLE=t.bind(null,r),o.writeFloatBE=t.bind(null,e),o.readFloatLE=i.bind(null,s),o.readFloatBE=i.bind(null,u)}(),"undefined"!=typeof Float64Array?function(){var r=new Float64Array([-0]),e=new Uint8Array(r.buffer),t=128===e[7];function i(t,i,n){r[0]=t,i[n]=e[0],i[n+1]=e[1],i[n+2]=e[2],i[n+3]=e[3],i[n+4]=e[4],i[n+5]=e[5],i[n+6]=e[6],i[n+7]=e[7]}function n(t,i,n){r[0]=t,i[n]=e[7],i[n+1]=e[6],i[n+2]=e[5],i[n+3]=e[4],i[n+4]=e[3],i[n+5]=e[2],i[n+6]=e[1],i[n+7]=e[0]}function s(t,i){return e[0]=t[i],e[1]=t[i+1],e[2]=t[i+2],e[3]=t[i+3],e[4]=t[i+4],e[5]=t[i+5],e[6]=t[i+6],e[7]=t[i+7],r[0]}function u(t,i){return e[7]=t[i],e[6]=t[i+1],e[5]=t[i+2],e[4]=t[i+3],e[3]=t[i+4],e[2]=t[i+5],e[1]=t[i+6],e[0]=t[i+7],r[0]}o.writeDoubleLE=t?i:n,o.writeDoubleBE=t?n:i,o.readDoubleLE=t?s:u,o.readDoubleBE=t?u:s}():function(){function t(t,i,n,r,e,s){var u=r<0?1:0;if(u&&(r=-r),0===r)t(0,e,s+i),t(0<1/r?0:2147483648,e,s+n);else if(isNaN(r))t(0,e,s+i),t(2146959360,e,s+n);else if(17976931348623157e292<r)t(0,e,s+i),t((u<<31|2146435072)>>>0,e,s+n);else{var o;if(r<22250738585072014e-324)t((o=r/5e-324)>>>0,e,s+i),t((u<<31|o/4294967296)>>>0,e,s+n);else{var f=Math.floor(Math.log(r)/Math.LN2);1024===f&&(f=1023),t(4503599627370496*(o=r*Math.pow(2,-f))>>>0,e,s+i),t((u<<31|f+1023<<20|1048576*o&1048575)>>>0,e,s+n)}}}function i(t,i,n,r,e){var s=t(r,e+i),u=t(r,e+n),o=2*(u>>31)+1,f=u>>>20&2047,h=4294967296*(1048575&u)+s;return 2047===f?h?NaN:o*(1/0):0===f?5e-324*o*h:o*Math.pow(2,f-1075)*(h+4503599627370496)}o.writeDoubleLE=t.bind(null,r,0,4),o.writeDoubleBE=t.bind(null,e,4,0),o.readDoubleLE=i.bind(null,s,0,4),o.readDoubleBE=i.bind(null,u,4,0)}(),o}function r(t,i,n){i[n]=255&t,i[n+1]=t>>>8&255,i[n+2]=t>>>16&255,i[n+3]=t>>>24}function e(t,i,n){i[n]=t>>>24,i[n+1]=t>>>16&255,i[n+2]=t>>>8&255,i[n+3]=255&t}function s(t,i){return(t[i]|t[i+1]<<8|t[i+2]<<16|t[i+3]<<24)>>>0}function u(t,i){return(t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3])>>>0}i.exports=n(n)},{}],7:[function(t,i,n){function r(t){try{var i=eval("require")(t);if(i&&(i.length||Object.keys(i).length))return i}catch(t){}return null}i.exports=r},{}],8:[function(t,i,n){var r=n,s=r.isAbsolute=function(t){return/^(?:\/|\w+:)/.test(t)},e=r.normalize=function(t){var i=(t=t.replace(/\\/g,"/").replace(/\/{2,}/g,"/")).split("/"),n=s(t),r="";n&&(r=i.shift()+"/");for(var e=0;e<i.length;)".."===i[e]?0<e&&".."!==i[e-1]?i.splice(--e,2):n?i.splice(e,1):++e:"."===i[e]?i.splice(e,1):++e;return r+i.join("/")};r.resolve=function(t,i,n){return n||(i=e(i)),s(i)?i:(n||(t=e(t)),(t=t.replace(/(?:\/|^)[^/]+$/,"")).length?e(t+"/"+i):i)}},{}],9:[function(t,i){i.exports=function(n,r,t){var e=t||8192,s=e>>>1,u=null,o=e;return function(t){if(t<1||s<t)return n(t);e<o+t&&(u=n(e),o=0);var i=r.call(u,o,o+=t);return 7&o&&(o=1+(7|o)),i}}},{}],10:[function(t,i,n){var r=n;r.length=function(t){for(var i=0,n=0,r=0;r<t.length;++r)(n=t.charCodeAt(r))<128?i+=1:n<2048?i+=2:55296==(64512&n)&&56320==(64512&t.charCodeAt(r+1))?(++r,i+=4):i+=3;return i},r.read=function(t,i,n){if(n-i<1)return"";for(var r,e=null,s=[],u=0;i<n;)(r=t[i++])<128?s[u++]=r:191<r&&r<224?s[u++]=(31&r)<<6|63&t[i++]:239<r&&r<365?(r=((7&r)<<18|(63&t[i++])<<12|(63&t[i++])<<6|63&t[i++])-65536,s[u++]=55296+(r>>10),s[u++]=56320+(1023&r)):s[u++]=(15&r)<<12|(63&t[i++])<<6|63&t[i++],8191<u&&((e||(e=[])).push(String.fromCharCode.apply(String,s)),u=0);return e?(u&&e.push(String.fromCharCode.apply(String,s.slice(0,u))),e.join("")):String.fromCharCode.apply(String,s.slice(0,u))},r.write=function(t,i,n){for(var r,e,s=n,u=0;u<t.length;++u)(r=t.charCodeAt(u))<128?i[n++]=r:(r<2048?i[n++]=r>>6|192:(55296==(64512&r)&&56320==(64512&(e=t.charCodeAt(u+1)))?(r=65536+((1023&r)<<10)+(1023&e),++u,i[n++]=r>>18|240,i[n++]=r>>12&63|128):i[n++]=r>>12|224,i[n++]=r>>6&63|128),i[n++]=63&r|128);return n-s}},{}],11:[function(t,i,n){var r=n,l=t(14),v=t(33);function u(t,i,n,r){if(i.resolvedType)if(i.resolvedType instanceof l){t("switch(d%s){",r);for(var e=i.resolvedType.values,s=Object.keys(e),u=0;u<s.length;++u)i.repeated&&e[s[u]]===i.typeDefault&&t("default:"),t("case%j:",s[u])("case %i:",e[s[u]])("m%s=%j",r,e[s[u]])("break");t("}")}else t('if(typeof d%s!=="object")',r)("throw TypeError(%j)",i.fullName+": object expected")("m%s=types[%i].fromObject(d%s)",r,n,r);else{var o=!1;switch(i.type){case"double":case"float":t("m%s=Number(d%s)",r,r);break;case"uint32":case"fixed32":t("m%s=d%s>>>0",r,r);break;case"int32":case"sint32":case"sfixed32":t("m%s=d%s|0",r,r);break;case"uint64":o=!0;case"int64":case"sint64":case"fixed64":case"sfixed64":t("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j",r,r,o)('else if(typeof d%s==="string")',r)("m%s=parseInt(d%s,10)",r,r)('else if(typeof d%s==="number")',r)("m%s=d%s",r,r)('else if(typeof d%s==="object")',r)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)",r,r,r,o?"true":"");break;case"bytes":t('if(typeof d%s==="string")',r)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)",r,r,r)("else if(d%s.length)",r)("m%s=d%s",r,r);break;case"string":t("m%s=String(d%s)",r,r);break;case"bool":t("m%s=Boolean(d%s)",r,r)}}return t}function d(t,i,n,r){if(i.resolvedType)i.resolvedType instanceof l?t("d%s=o.enums===String?types[%i].values[m%s]:m%s",r,n,r,r):t("d%s=types[%i].toObject(m%s,o)",r,n,r);else{var e=!1;switch(i.type){case"double":case"float":t("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s",r,r,r,r);break;case"uint64":e=!0;case"int64":case"sint64":case"fixed64":case"sfixed64":t('if(typeof m%s==="number")',r)("d%s=o.longs===String?String(m%s):m%s",r,r,r)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s",r,r,r,r,e?"true":"",r);break;case"bytes":t("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s",r,r,r,r,r);break;default:t("d%s=m%s",r,r)}}return t}r.fromObject=function(t){var i=t.fieldsArray,n=v.codegen(["d"],t.name+"$fromObject")("if(d instanceof this.ctor)")("return d");if(!i.length)return n("return new this.ctor");n("var m=new this.ctor");for(var r=0;r<i.length;++r){var e=i[r].resolve(),s=v.safeProp(e.name);e.map?(n("if(d%s){",s)('if(typeof d%s!=="object")',s)("throw TypeError(%j)",e.fullName+": object expected")("m%s={}",s)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){",s),u(n,e,r,s+"[ks[i]]")("}")("}")):e.repeated?(n("if(d%s){",s)("if(!Array.isArray(d%s))",s)("throw TypeError(%j)",e.fullName+": array expected")("m%s=[]",s)("for(var i=0;i<d%s.length;++i){",s),u(n,e,r,s+"[i]")("}")("}")):(e.resolvedType instanceof l||n("if(d%s!=null){",s),u(n,e,r,s),e.resolvedType instanceof l||n("}"))}return n("return m")},r.toObject=function(t){var i=t.fieldsArray.slice().sort(v.compareFieldsById);if(!i.length)return v.codegen()("return {}");for(var n=v.codegen(["m","o"],t.name+"$toObject")("if(!o)")("o={}")("var d={}"),r=[],e=[],s=[],u=0;u<i.length;++u)i[u].partOf||(i[u].resolve().repeated?r:i[u].map?e:s).push(i[u]);if(r.length){for(n("if(o.arrays||o.defaults){"),u=0;u<r.length;++u)n("d%s=[]",v.safeProp(r[u].name));n("}")}if(e.length){for(n("if(o.objects||o.defaults){"),u=0;u<e.length;++u)n("d%s={}",v.safeProp(e[u].name));n("}")}if(s.length){for(n("if(o.defaults){"),u=0;u<s.length;++u){var o=s[u],f=v.safeProp(o.name);if(o.resolvedType instanceof l)n("d%s=o.enums===String?%j:%j",f,o.resolvedType.valuesById[o.typeDefault],o.typeDefault);else if(o.long)n("if(util.Long){")("var n=new util.Long(%i,%i,%j)",o.typeDefault.low,o.typeDefault.high,o.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n",f)("}else")("d%s=o.longs===String?%j:%i",f,o.typeDefault.toString(),o.typeDefault.toNumber());else if(o.bytes){var h="["+Array.prototype.slice.call(o.typeDefault).join(",")+"]";n("if(o.bytes===String)d%s=%j",f,String.fromCharCode.apply(String,o.typeDefault))("else{")("d%s=%s",f,h)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)",f,f)("}")}else n("d%s=%j",f,o.typeDefault)}n("}")}var c=!1;for(u=0;u<i.length;++u){o=i[u];var a=t.i.indexOf(o);f=v.safeProp(o.name);o.map?(c||(c=!0,n("var ks2")),n("if(m%s&&(ks2=Object.keys(m%s)).length){",f,f)("d%s={}",f)("for(var j=0;j<ks2.length;++j){"),d(n,o,a,f+"[ks2[j]]")("}")):o.repeated?(n("if(m%s&&m%s.length){",f,f)("d%s=[]",f)("for(var j=0;j<m%s.length;++j){",f),d(n,o,a,f+"[j]")("}")):(n("if(m%s!=null&&m.hasOwnProperty(%j)){",f,o.name),d(n,o,a,f),o.partOf&&n("if(o.oneofs)")("d%s=%j",v.safeProp(o.partOf.name),o.name)),n("}")}return n("return d")}},{14:14,33:33}],12:[function(t,i){i.exports=function(t){var i=h.codegen(["r","l"],t.name+"$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor"+(t.fieldsArray.filter(function(t){return t.map}).length?",k":""))("while(r.pos<c){")("var t=r.uint32()");t.group&&i("if((t&7)===4)")("break");i("switch(t>>>3){");for(var n=0;n<t.fieldsArray.length;++n){var r=t.i[n].resolve(),e=r.resolvedType instanceof o?"int32":r.type,s="m"+h.safeProp(r.name);i("case %i:",r.id),r.map?(i("r.skip().pos++")("if(%s===util.emptyObject)",s)("%s={}",s)("k=r.%s()",r.keyType)("r.pos++"),f.long[r.keyType]!==g?f.basic[e]===g?i('%s[typeof k==="object"?util.longToHash(k):k]=types[%i].decode(r,r.uint32())',s,n):i('%s[typeof k==="object"?util.longToHash(k):k]=r.%s()',s,e):f.basic[e]===g?i("%s[k]=types[%i].decode(r,r.uint32())",s,n):i("%s[k]=r.%s()",s,e)):r.repeated?(i("if(!(%s&&%s.length))",s,s)("%s=[]",s),f.packed[e]!==g&&i("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())",s,e)("}else"),f.basic[e]===g?i(r.resolvedType.group?"%s.push(types[%i].decode(r))":"%s.push(types[%i].decode(r,r.uint32()))",s,n):i("%s.push(r.%s())",s,e)):f.basic[e]===g?i(r.resolvedType.group?"%s=types[%i].decode(r)":"%s=types[%i].decode(r,r.uint32())",s,n):i("%s=r.%s()",s,e),i("break")}for(i("default:")("r.skipType(t&7)")("break")("}")("}"),n=0;n<t.i.length;++n){var u=t.i[n];u.required&&i("if(!m.hasOwnProperty(%j))",u.name)("throw util.ProtocolError(%j,{instance:m})","missing required '"+u.name+"'")}return i("return m")};var o=t(14),f=t(32),h=t(33)},{14:14,32:32,33:33}],13:[function(t,i){i.exports=function(t){for(var i,n=a.codegen(["m","w"],t.name+"$encode")("if(!w)")("w=Writer.create()"),r=t.fieldsArray.slice().sort(a.compareFieldsById),e=0;e<r.length;++e){var s=r[e].resolve(),u=t.i.indexOf(s),o=s.resolvedType instanceof h?"int32":s.type,f=c.basic[o];i="m"+a.safeProp(s.name),s.map?(n("if(%s!=null&&m.hasOwnProperty(%j)){",i,s.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){",i)("w.uint32(%i).fork().uint32(%i).%s(ks[i])",(s.id<<3|2)>>>0,8|c.mapKey[s.keyType],s.keyType),f===g?n("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()",u,i):n(".uint32(%i).%s(%s[ks[i]]).ldelim()",16|f,o,i),n("}")("}")):s.repeated?(n("if(%s!=null&&%s.length){",i,i),s.packed&&c.packed[o]!==g?n("w.uint32(%i).fork()",(s.id<<3|2)>>>0)("for(var i=0;i<%s.length;++i)",i)("w.%s(%s[i])",o,i)("w.ldelim()"):(n("for(var i=0;i<%s.length;++i)",i),f===g?l(n,s,u,i+"[i]"):n("w.uint32(%i).%s(%s[i])",(s.id<<3|f)>>>0,o,i)),n("}")):(s.optional&&n("if(%s!=null&&m.hasOwnProperty(%j))",i,s.name),f===g?l(n,s,u,i):n("w.uint32(%i).%s(%s)",(s.id<<3|f)>>>0,o,i))}return n("return w")};var h=t(14),c=t(32),a=t(33);function l(t,i,n,r){return i.resolvedType.group?t("types[%i].encode(%s,w.uint32(%i)).uint32(%i)",n,r,(i.id<<3|3)>>>0,(i.id<<3|4)>>>0):t("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()",n,r,(i.id<<3|2)>>>0)}},{14:14,32:32,33:33}],14:[function(t,i){i.exports=e;var o=t(22);((e.prototype=Object.create(o.prototype)).constructor=e).className="Enum";var n=t(21),r=t(33);function e(t,i,n,r,e){if(o.call(this,t,n),i&&"object"!=typeof i)throw TypeError("values must be an object");if(this.valuesById={},this.values=Object.create(this.valuesById),this.comment=r,this.comments=e||{},this.reserved=g,i)for(var s=Object.keys(i),u=0;u<s.length;++u)"number"==typeof i[s[u]]&&(this.valuesById[this.values[s[u]]=i[s[u]]]=s[u])}e.fromJSON=function(t,i){var n=new e(t,i.values,i.options,i.comment,i.comments);return n.reserved=i.reserved,n},e.prototype.toJSON=function(t){var i=!!t&&!!t.keepComments;return r.toObject(["options",this.options,"values",this.values,"reserved",this.reserved&&this.reserved.length?this.reserved:g,"comment",i?this.comment:g,"comments",i?this.comments:g])},e.prototype.add=function(t,i,n){if(!r.isString(t))throw TypeError("name must be a string");if(!r.isInteger(i))throw TypeError("id must be an integer");if(this.values[t]!==g)throw Error("duplicate name '"+t+"' in "+this);if(this.isReservedId(i))throw Error("id "+i+" is reserved in "+this);if(this.isReservedName(t))throw Error("name '"+t+"' is reserved in "+this);if(this.valuesById[i]!==g){if(!this.options||!this.options.allow_alias)throw Error("duplicate id "+i+" in "+this);this.values[t]=i}else this.valuesById[this.values[t]=i]=t;return this.comments[t]=n||null,this},e.prototype.remove=function(t){if(!r.isString(t))throw TypeError("name must be a string");var i=this.values[t];if(null==i)throw Error("name '"+t+"' does not exist in "+this);return delete this.valuesById[i],delete this.values[t],delete this.comments[t],this},e.prototype.isReservedId=function(t){return n.isReservedId(this.reserved,t)},e.prototype.isReservedName=function(t){return n.isReservedName(this.reserved,t)}},{21:21,22:22,33:33}],15:[function(t,i){i.exports=u;var o=t(22);((u.prototype=Object.create(o.prototype)).constructor=u).className="Field";var n,r=t(14),f=t(32),h=t(33),c=/^required|optional|repeated$/;function u(t,i,n,r,e,s,u){if(h.isObject(r)?(u=e,s=r,r=e=g):h.isObject(e)&&(u=s,s=e,e=g),o.call(this,t,s),!h.isInteger(i)||i<0)throw TypeError("id must be a non-negative integer");if(!h.isString(n))throw TypeError("type must be a string");if(r!==g&&!c.test(r=r.toString().toLowerCase()))throw TypeError("rule must be a string rule");if(e!==g&&!h.isString(e))throw TypeError("extend must be a string");this.rule=r&&"optional"!==r?r:g,this.type=n,this.id=i,this.extend=e||g,this.required="required"===r,this.optional=!this.required,this.repeated="repeated"===r,this.map=!1,this.message=null,this.partOf=null,this.typeDefault=null,this.defaultValue=null,this.long=!!h.Long&&f.long[n]!==g,this.bytes="bytes"===n,this.resolvedType=null,this.extensionField=null,this.declaringField=null,this.n=null,this.comment=u}u.fromJSON=function(t,i){return new u(t,i.id,i.type,i.rule,i.extend,i.options,i.comment)},Object.defineProperty(u.prototype,"packed",{get:function(){return null===this.n&&(this.n=!1!==this.getOption("packed")),this.n}}),u.prototype.setOption=function(t,i,n){return"packed"===t&&(this.n=null),o.prototype.setOption.call(this,t,i,n)},u.prototype.toJSON=function(t){var i=!!t&&!!t.keepComments;return h.toObject(["rule","optional"!==this.rule&&this.rule||g,"type",this.type,"id",this.id,"extend",this.extend,"options",this.options,"comment",i?this.comment:g])},u.prototype.resolve=function(){if(this.resolved)return this;if((this.typeDefault=f.defaults[this.type])===g&&(this.resolvedType=(this.declaringField?this.declaringField.parent:this.parent).lookupTypeOrEnum(this.type),this.resolvedType instanceof n?this.typeDefault=null:this.typeDefault=this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]),this.options&&null!=this.options.default&&(this.typeDefault=this.options.default,this.resolvedType instanceof r&&"string"==typeof this.typeDefault&&(this.typeDefault=this.resolvedType.values[this.typeDefault])),this.options&&(!0!==this.options.packed&&(this.options.packed===g||!this.resolvedType||this.resolvedType instanceof r)||delete this.options.packed,Object.keys(this.options).length||(this.options=g)),this.long)this.typeDefault=h.Long.fromNumber(this.typeDefault,"u"===this.type.charAt(0)),Object.freeze&&Object.freeze(this.typeDefault);else if(this.bytes&&"string"==typeof this.typeDefault){var t;h.base64.test(this.typeDefault)?h.base64.decode(this.typeDefault,t=h.newBuffer(h.base64.length(this.typeDefault)),0):h.utf8.write(this.typeDefault,t=h.newBuffer(h.utf8.length(this.typeDefault)),0),this.typeDefault=t}return this.map?this.defaultValue=h.emptyObject:this.repeated?this.defaultValue=h.emptyArray:this.defaultValue=this.typeDefault,this.parent instanceof n&&(this.parent.ctor.prototype[this.name]=this.defaultValue),o.prototype.resolve.call(this)},u.d=function(n,r,e,s){return"function"==typeof r?r=h.decorateType(r).name:r&&"object"==typeof r&&(r=h.decorateEnum(r).name),function(t,i){h.decorateType(t.constructor).add(new u(i,n,r,e,{default:s}))}},u.r=function(t){n=t}},{14:14,22:22,32:32,33:33}],16:[function(t,i){var r=i.exports=t(17);r.build="light",r.load=function(t,i,n){return"function"==typeof i?(n=i,i=new r.Root):i||(i=new r.Root),i.load(t,n)},r.loadSync=function(t,i){return i||(i=new r.Root),i.loadSync(t)},r.encoder=t(13),r.decoder=t(12),r.verifier=t(36),r.converter=t(11),r.ReflectionObject=t(22),r.Namespace=t(21),r.Root=t(26),r.Enum=t(14),r.Type=t(31),r.Field=t(15),r.OneOf=t(23),r.MapField=t(18),r.Service=t(30),r.Method=t(20),r.Message=t(19),r.wrappers=t(37),r.types=t(32),r.util=t(33),r.ReflectionObject.r(r.Root),r.Namespace.r(r.Type,r.Service,r.Enum),r.Root.r(r.Type),r.Field.r(r.Type)},{11:11,12:12,13:13,14:14,15:15,17:17,18:18,19:19,20:20,21:21,22:22,23:23,26:26,30:30,31:31,32:32,33:33,36:36,37:37}],17:[function(t,i,n){var r=n;function e(){r.Reader.r(r.BufferReader),r.util.r()}r.build="minimal",r.Writer=t(38),r.BufferWriter=t(39),r.Reader=t(24),r.BufferReader=t(25),r.util=t(35),r.rpc=t(28),r.roots=t(27),r.configure=e,r.Writer.r(r.BufferWriter),e()},{24:24,25:25,27:27,28:28,35:35,38:38,39:39}],18:[function(t,i){i.exports=s;var u=t(15);((s.prototype=Object.create(u.prototype)).constructor=s).className="MapField";var n=t(32),o=t(33);function s(t,i,n,r,e,s){if(u.call(this,t,i,r,g,g,e,s),!o.isString(n))throw TypeError("keyType must be a string");this.keyType=n,this.resolvedKeyType=null,this.map=!0}s.fromJSON=function(t,i){return new s(t,i.id,i.keyType,i.type,i.options,i.comment)},s.prototype.toJSON=function(t){var i=!!t&&!!t.keepComments;return o.toObject(["keyType",this.keyType,"type",this.type,"id",this.id,"extend",this.extend,"options",this.options,"comment",i?this.comment:g])},s.prototype.resolve=function(){if(this.resolved)return this;if(n.mapKey[this.keyType]===g)throw Error("invalid key type: "+this.keyType);return u.prototype.resolve.call(this)},s.d=function(n,r,e){return"function"==typeof e?e=o.decorateType(e).name:e&&"object"==typeof e&&(e=o.decorateEnum(e).name),function(t,i){o.decorateType(t.constructor).add(new s(i,n,r,e))}}},{15:15,32:32,33:33}],19:[function(t,i){i.exports=r;var n=t(35);function r(t){if(t)for(var i=Object.keys(t),n=0;n<i.length;++n)this[i[n]]=t[i[n]]}r.create=function(t){return this.$type.create(t)},r.encode=function(t,i){return this.$type.encode(t,i)},r.encodeDelimited=function(t,i){return this.$type.encodeDelimited(t,i)},r.decode=function(t){return this.$type.decode(t)},r.decodeDelimited=function(t){return this.$type.decodeDelimited(t)},r.verify=function(t){return this.$type.verify(t)},r.fromObject=function(t){return this.$type.fromObject(t)},r.toObject=function(t,i){return this.$type.toObject(t,i)},r.prototype.toJSON=function(){return this.$type.toObject(this,n.toJSONOptions)}},{35:35}],20:[function(t,i){i.exports=n;var f=t(22);((n.prototype=Object.create(f.prototype)).constructor=n).className="Method";var h=t(33);function n(t,i,n,r,e,s,u,o){if(h.isObject(e)?(u=e,e=s=g):h.isObject(s)&&(u=s,s=g),i!==g&&!h.isString(i))throw TypeError("type must be a string");if(!h.isString(n))throw TypeError("requestType must be a string");if(!h.isString(r))throw TypeError("responseType must be a string");f.call(this,t,u),this.type=i||"rpc",this.requestType=n,this.requestStream=!!e||g,this.responseType=r,this.responseStream=!!s||g,this.resolvedRequestType=null,this.resolvedResponseType=null,this.comment=o}n.fromJSON=function(t,i){return new n(t,i.type,i.requestType,i.responseType,i.requestStream,i.responseStream,i.options,i.comment)},n.prototype.toJSON=function(t){var i=!!t&&!!t.keepComments;return h.toObject(["type","rpc"!==this.type&&this.type||g,"requestType",this.requestType,"requestStream",this.requestStream,"responseType",this.responseType,"responseStream",this.responseStream,"options",this.options,"comment",i?this.comment:g])},n.prototype.resolve=function(){return this.resolved?this:(this.resolvedRequestType=this.parent.lookupType(this.requestType),this.resolvedResponseType=this.parent.lookupType(this.responseType),f.prototype.resolve.call(this))}},{22:22,33:33}],21:[function(t,i){i.exports=h;var n=t(22);((h.prototype=Object.create(n.prototype)).constructor=h).className="Namespace";var e,s,u,o=t(15),f=t(33);function r(t,i){if(!t||!t.length)return g;for(var n={},r=0;r<t.length;++r)n[t[r].name]=t[r].toJSON(i);return n}function h(t,i){n.call(this,t,i),this.nested=g,this.e=null}function c(t){return t.e=null,t}h.fromJSON=function(t,i){return new h(t,i.options).addJSON(i.nested)},h.arrayToJSON=r,h.isReservedId=function(t,i){if(t)for(var n=0;n<t.length;++n)if("string"!=typeof t[n]&&t[n][0]<=i&&t[n][1]>=i)return!0;return!1},h.isReservedName=function(t,i){if(t)for(var n=0;n<t.length;++n)if(t[n]===i)return!0;return!1},Object.defineProperty(h.prototype,"nestedArray",{get:function(){return this.e||(this.e=f.toArray(this.nested))}}),h.prototype.toJSON=function(t){return f.toObject(["options",this.options,"nested",r(this.nestedArray,t)])},h.prototype.addJSON=function(t){if(t)for(var i,n=Object.keys(t),r=0;r<n.length;++r)i=t[n[r]],this.add((i.fields!==g?e.fromJSON:i.values!==g?u.fromJSON:i.methods!==g?s.fromJSON:i.id!==g?o.fromJSON:h.fromJSON)(n[r],i));return this},h.prototype.get=function(t){return this.nested&&this.nested[t]||null},h.prototype.getEnum=function(t){if(this.nested&&this.nested[t]instanceof u)return this.nested[t].values;throw Error("no such enum: "+t)},h.prototype.add=function(t){if(!(t instanceof o&&t.extend!==g||t instanceof e||t instanceof u||t instanceof s||t instanceof h))throw TypeError("object must be a valid nested object");if(this.nested){var i=this.get(t.name);if(i){if(!(i instanceof h&&t instanceof h)||i instanceof e||i instanceof s)throw Error("duplicate name '"+t.name+"' in "+this);for(var n=i.nestedArray,r=0;r<n.length;++r)t.add(n[r]);this.remove(i),this.nested||(this.nested={}),t.setOptions(i.options,!0)}}else this.nested={};return(this.nested[t.name]=t).onAdd(this),c(this)},h.prototype.remove=function(t){if(!(t instanceof n))throw TypeError("object must be a ReflectionObject");if(t.parent!==this)throw Error(t+" is not a member of "+this);return delete this.nested[t.name],Object.keys(this.nested).length||(this.nested=g),t.onRemove(this),c(this)},h.prototype.define=function(t,i){if(f.isString(t))t=t.split(".");else if(!Array.isArray(t))throw TypeError("illegal path");if(t&&t.length&&""===t[0])throw Error("path must be relative");for(var n=this;0<t.length;){var r=t.shift();if(n.nested&&n.nested[r]){if(!((n=n.nested[r])instanceof h))throw Error("path conflicts with non-namespace objects")}else n.add(n=new h(r))}return i&&n.addJSON(i),n},h.prototype.resolveAll=function(){for(var t=this.nestedArray,i=0;i<t.length;)t[i]instanceof h?t[i++].resolveAll():t[i++].resolve();return this.resolve()},h.prototype.lookup=function(t,i,n){if("boolean"==typeof i?(n=i,i=g):i&&!Array.isArray(i)&&(i=[i]),f.isString(t)&&t.length){if("."===t)return this.root;t=t.split(".")}else if(!t.length)return this;if(""===t[0])return this.root.lookup(t.slice(1),i);var r=this.get(t[0]);if(r){if(1===t.length){if(!i||-1<i.indexOf(r.constructor))return r}else if(r instanceof h&&(r=r.lookup(t.slice(1),i,!0)))return r}else for(var e=0;e<this.nestedArray.length;++e)if(this.e[e]instanceof h&&(r=this.e[e].lookup(t,i,!0)))return r;return null===this.parent||n?null:this.parent.lookup(t,i)},h.prototype.lookupType=function(t){var i=this.lookup(t,[e]);if(!i)throw Error("no such type: "+t);return i},h.prototype.lookupEnum=function(t){var i=this.lookup(t,[u]);if(!i)throw Error("no such Enum '"+t+"' in "+this);return i},h.prototype.lookupTypeOrEnum=function(t){var i=this.lookup(t,[e,u]);if(!i)throw Error("no such Type or Enum '"+t+"' in "+this);return i},h.prototype.lookupService=function(t){var i=this.lookup(t,[s]);if(!i)throw Error("no such Service '"+t+"' in "+this);return i},h.r=function(t,i,n){e=t,s=i,u=n}},{15:15,22:22,33:33}],22:[function(t,i){(i.exports=e).className="ReflectionObject";var n,r=t(33);function e(t,i){if(!r.isString(t))throw TypeError("name must be a string");if(i&&!r.isObject(i))throw TypeError("options must be an object");this.options=i,this.name=t,this.parent=null,this.resolved=!1,this.comment=null,this.filename=null}Object.defineProperties(e.prototype,{root:{get:function(){for(var t=this;null!==t.parent;)t=t.parent;return t}},fullName:{get:function(){for(var t=[this.name],i=this.parent;i;)t.unshift(i.name),i=i.parent;return t.join(".")}}}),e.prototype.toJSON=function(){throw Error()},e.prototype.onAdd=function(t){this.parent&&this.parent!==t&&this.parent.remove(this),this.parent=t,this.resolved=!1;var i=t.root;i instanceof n&&i.u(this)},e.prototype.onRemove=function(t){var i=t.root;i instanceof n&&i.o(this),this.parent=null,this.resolved=!1},e.prototype.resolve=function(){return this.resolved||this.root instanceof n&&(this.resolved=!0),this},e.prototype.getOption=function(t){return this.options?this.options[t]:g},e.prototype.setOption=function(t,i,n){return n&&this.options&&this.options[t]!==g||((this.options||(this.options={}))[t]=i),this},e.prototype.setOptions=function(t,i){if(t)for(var n=Object.keys(t),r=0;r<n.length;++r)this.setOption(n[r],t[n[r]],i);return this},e.prototype.toString=function(){var t=this.constructor.className,i=this.fullName;return i.length?t+" "+i:t},e.r=function(t){n=t}},{33:33}],23:[function(t,i){i.exports=s;var e=t(22);((s.prototype=Object.create(e.prototype)).constructor=s).className="OneOf";var n=t(15),r=t(33);function s(t,i,n,r){if(Array.isArray(i)||(n=i,i=g),e.call(this,t,n),i!==g&&!Array.isArray(i))throw TypeError("fieldNames must be an Array");this.oneof=i||[],this.fieldsArray=[],this.comment=r}function u(t){if(t.parent)for(var i=0;i<t.fieldsArray.length;++i)t.fieldsArray[i].parent||t.parent.add(t.fieldsArray[i])}s.fromJSON=function(t,i){return new s(t,i.oneof,i.options,i.comment)},s.prototype.toJSON=function(t){var i=!!t&&!!t.keepComments;return r.toObject(["options",this.options,"oneof",this.oneof,"comment",i?this.comment:g])},s.prototype.add=function(t){if(!(t instanceof n))throw TypeError("field must be a Field");return t.parent&&t.parent!==this.parent&&t.parent.remove(t),this.oneof.push(t.name),this.fieldsArray.push(t),u(t.partOf=this),this},s.prototype.remove=function(t){if(!(t instanceof n))throw TypeError("field must be a Field");var i=this.fieldsArray.indexOf(t);if(i<0)throw Error(t+" is not a member of "+this);return this.fieldsArray.splice(i,1),-1<(i=this.oneof.indexOf(t.name))&&this.oneof.splice(i,1),t.partOf=null,this},s.prototype.onAdd=function(t){e.prototype.onAdd.call(this,t);for(var i=0;i<this.oneof.length;++i){var n=t.get(this.oneof[i]);n&&!n.partOf&&(n.partOf=this).fieldsArray.push(n)}u(this)},s.prototype.onRemove=function(t){for(var i,n=0;n<this.fieldsArray.length;++n)(i=this.fieldsArray[n]).parent&&i.parent.remove(i);e.prototype.onRemove.call(this,t)},s.d=function(){for(var n=Array(arguments.length),t=0;t<arguments.length;)n[t]=arguments[t++];return function(t,i){r.decorateType(t.constructor).add(new s(i,n)),Object.defineProperty(t,i,{get:r.oneOfGetter(n),set:r.oneOfSetter(n)})}}},{15:15,22:22,33:33}],24:[function(t,i){i.exports=o;var n,r=t(35),e=r.LongBits,s=r.utf8;function u(t,i){return RangeError("index out of range: "+t.pos+" + "+(i||1)+" > "+t.len)}function o(t){this.buf=t,this.pos=0,this.len=t.length}var f,h="undefined"!=typeof Uint8Array?function(t){if(t instanceof Uint8Array||Array.isArray(t))return new o(t);throw Error("illegal buffer")}:function(t){if(Array.isArray(t))return new o(t);throw Error("illegal buffer")};function c(){var t=new e(0,0),i=0;if(!(4<this.len-this.pos)){for(;i<3;++i){if(this.pos>=this.len)throw u(this);if(t.lo=(t.lo|(127&this.buf[this.pos])<<7*i)>>>0,this.buf[this.pos++]<128)return t}return t.lo=(t.lo|(127&this.buf[this.pos++])<<7*i)>>>0,t}for(;i<4;++i)if(t.lo=(t.lo|(127&this.buf[this.pos])<<7*i)>>>0,this.buf[this.pos++]<128)return t;if(t.lo=(t.lo|(127&this.buf[this.pos])<<28)>>>0,t.hi=(t.hi|(127&this.buf[this.pos])>>4)>>>0,this.buf[this.pos++]<128)return t;if(i=0,4<this.len-this.pos){for(;i<5;++i)if(t.hi=(t.hi|(127&this.buf[this.pos])<<7*i+3)>>>0,this.buf[this.pos++]<128)return t}else for(;i<5;++i){if(this.pos>=this.len)throw u(this);if(t.hi=(t.hi|(127&this.buf[this.pos])<<7*i+3)>>>0,this.buf[this.pos++]<128)return t}throw Error("invalid varint encoding")}function a(t,i){return(t[i-4]|t[i-3]<<8|t[i-2]<<16|t[i-1]<<24)>>>0}function l(){if(this.pos+8>this.len)throw u(this,8);return new e(a(this.buf,this.pos+=4),a(this.buf,this.pos+=4))}o.create=r.Buffer?function(t){return(o.create=function(t){return r.Buffer.isBuffer(t)?new n(t):h(t)})(t)}:h,o.prototype.f=r.Array.prototype.subarray||r.Array.prototype.slice,o.prototype.uint32=(f=4294967295,function(){if(f=(127&this.buf[this.pos])>>>0,this.buf[this.pos++]<128)return f;if(f=(f|(127&this.buf[this.pos])<<7)>>>0,this.buf[this.pos++]<128)return f;if(f=(f|(127&this.buf[this.pos])<<14)>>>0,this.buf[this.pos++]<128)return f;if(f=(f|(127&this.buf[this.pos])<<21)>>>0,this.buf[this.pos++]<128)return f;if(f=(f|(15&this.buf[this.pos])<<28)>>>0,this.buf[this.pos++]<128)return f;if((this.pos+=5)>this.len)throw this.pos=this.len,u(this,10);return f}),o.prototype.int32=function(){return 0|this.uint32()},o.prototype.sint32=function(){var t=this.uint32();return t>>>1^-(1&t)|0},o.prototype.bool=function(){return 0!==this.uint32()},o.prototype.fixed32=function(){if(this.pos+4>this.len)throw u(this,4);return a(this.buf,this.pos+=4)},o.prototype.sfixed32=function(){if(this.pos+4>this.len)throw u(this,4);return 0|a(this.buf,this.pos+=4)},o.prototype.float=function(){if(this.pos+4>this.len)throw u(this,4);var t=r.float.readFloatLE(this.buf,this.pos);return this.pos+=4,t},o.prototype.double=function(){if(this.pos+8>this.len)throw u(this,4);var t=r.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,t},o.prototype.bytes=function(){var t=this.uint32(),i=this.pos,n=this.pos+t;if(n>this.len)throw u(this,t);return this.pos+=t,Array.isArray(this.buf)?this.buf.slice(i,n):i===n?new this.buf.constructor(0):this.f.call(this.buf,i,n)},o.prototype.string=function(){var t=this.bytes();return s.read(t,0,t.length)},o.prototype.skip=function(t){if("number"==typeof t){if(this.pos+t>this.len)throw u(this,t);this.pos+=t}else do{if(this.pos>=this.len)throw u(this)}while(128&this.buf[this.pos++]);return this},o.prototype.skipType=function(t){switch(t){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;4!=(t=7&this.uint32());)this.skipType(t);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+t+" at offset "+this.pos)}return this},o.r=function(t){n=t;var i=r.Long?"toLong":"toNumber";r.merge(o.prototype,{int64:function(){return c.call(this)[i](!1)},uint64:function(){return c.call(this)[i](!0)},sint64:function(){return c.call(this).zzDecode()[i](!1)},fixed64:function(){return l.call(this)[i](!0)},sfixed64:function(){return l.call(this)[i](!1)}})}},{35:35}],25:[function(t,i){i.exports=e;var n=t(24);(e.prototype=Object.create(n.prototype)).constructor=e;var r=t(35);function e(t){n.call(this,t)}r.Buffer&&(e.prototype.f=r.Buffer.prototype.slice),e.prototype.string=function(){var t=this.uint32();return this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+t,this.len))}},{24:24,35:35}],26:[function(t,i){i.exports=n;var r=t(21);((n.prototype=Object.create(r.prototype)).constructor=n).className="Root";var e,v,d,s=t(15),u=t(14),o=t(23),b=t(33);function n(t){r.call(this,"",t),this.deferred=[],this.files=[]}function y(){}n.fromJSON=function(t,i){return i||(i=new n),t.options&&i.setOptions(t.options),i.addJSON(t.nested)},n.prototype.resolvePath=b.path.resolve,n.prototype.load=function t(i,s,u){"function"==typeof s&&(u=s,s=g);var o=this;if(!u)return b.asPromise(t,o,i,s);var f=u===y;function h(t,i){if(u){var n=u;if(u=null,f)throw t;n(t,i)}}function c(t,i){try{if(b.isString(i)&&"{"===i.charAt(0)&&(i=JSON.parse(i)),b.isString(i)){v.filename=t;var n,r=v(i,o,s),e=0;if(r.imports)for(;e<r.imports.length;++e)(n=o.resolvePath(t,r.imports[e]))&&a(n);if(r.weakImports)for(e=0;e<r.weakImports.length;++e)(n=o.resolvePath(t,r.weakImports[e]))&&a(n,!0)}else o.setOptions(i.options).addJSON(i.nested)}catch(t){h(t)}f||l||h(null,o)}function a(n,r){var t=n.lastIndexOf("google/protobuf/");if(-1<t){var i=n.substring(t);i in d&&(n=i)}if(!(-1<o.files.indexOf(n)))if(o.files.push(n),n in d)f?c(n,d[n]):(++l,setTimeout(function(){--l,c(n,d[n])}));else if(f){var e;try{e=b.fs.readFileSync(n).toString("utf8")}catch(t){return void(r||h(t))}c(n,e)}else++l,b.fetch(n,function(t,i){--l,u&&(t?r?l||h(null,o):h(t):c(n,i))})}var l=0;b.isString(i)&&(i=[i]);for(var n,r=0;r<i.length;++r)(n=o.resolvePath("",i[r]))&&a(n);return f?o:(l||h(null,o),g)},n.prototype.loadSync=function(t,i){if(!b.isNode)throw Error("not supported");return this.load(t,i,y)},n.prototype.resolveAll=function(){if(this.deferred.length)throw Error("unresolvable extensions: "+this.deferred.map(function(t){return"'extend "+t.extend+"' in "+t.parent.fullName}).join(", "));return r.prototype.resolveAll.call(this)};var f=/^[A-Z]/;function h(t,i){var n=i.parent.lookup(i.extend);if(n){var r=new s(i.fullName,i.id,i.type,i.rule,g,i.options);return(r.declaringField=i).extensionField=r,n.add(r),!0}return!1}n.prototype.u=function(t){if(t instanceof s)t.extend===g||t.extensionField||h(0,t)||this.deferred.push(t);else if(t instanceof u)f.test(t.name)&&(t.parent[t.name]=t.values);else if(!(t instanceof o)){if(t instanceof e)for(var i=0;i<this.deferred.length;)h(0,this.deferred[i])?this.deferred.splice(i,1):++i;for(var n=0;n<t.nestedArray.length;++n)this.u(t.e[n]);f.test(t.name)&&(t.parent[t.name]=t)}},n.prototype.o=function(t){if(t instanceof s){if(t.extend!==g)if(t.extensionField)t.extensionField.parent.remove(t.extensionField),t.extensionField=null;else{var i=this.deferred.indexOf(t);-1<i&&this.deferred.splice(i,1)}}else if(t instanceof u)f.test(t.name)&&delete t.parent[t.name];else if(t instanceof r){for(var n=0;n<t.nestedArray.length;++n)this.o(t.e[n]);f.test(t.name)&&delete t.parent[t.name]}},n.r=function(t,i,n){e=t,v=i,d=n}},{14:14,15:15,21:21,23:23,33:33}],27:[function(t,i){i.exports={}},{}],28:[function(t,i,n){n.Service=t(29)},{29:29}],29:[function(t,i){i.exports=n;var o=t(35);function n(t,i,n){if("function"!=typeof t)throw TypeError("rpcImpl must be a function");o.EventEmitter.call(this),this.rpcImpl=t,this.requestDelimited=!!i,this.responseDelimited=!!n}((n.prototype=Object.create(o.EventEmitter.prototype)).constructor=n).prototype.rpcCall=function t(n,i,r,e,s){if(!e)throw TypeError("request must be specified");var u=this;if(!s)return o.asPromise(t,u,n,i,r,e);if(!u.rpcImpl)return setTimeout(function(){s(Error("already ended"))},0),g;try{return u.rpcImpl(n,i[u.requestDelimited?"encodeDelimited":"encode"](e).finish(),function(t,i){if(t)return u.emit("error",t,n),s(t);if(null===i)return u.end(!0),g;if(!(i instanceof r))try{i=r[u.responseDelimited?"decodeDelimited":"decode"](i)}catch(t){return u.emit("error",t,n),s(t)}return u.emit("data",i,n),s(null,i)})}catch(t){return u.emit("error",t,n),setTimeout(function(){s(t)},0),g}},n.prototype.end=function(t){return this.rpcImpl&&(t||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this}},{35:35}],30:[function(t,i){i.exports=u;var r=t(21);((u.prototype=Object.create(r.prototype)).constructor=u).className="Service";var s=t(20),o=t(33),f=t(28);function u(t,i){r.call(this,t,i),this.methods={},this.h=null}function n(t){return t.h=null,t}u.fromJSON=function(t,i){var n=new u(t,i.options);if(i.methods)for(var r=Object.keys(i.methods),e=0;e<r.length;++e)n.add(s.fromJSON(r[e],i.methods[r[e]]));return i.nested&&n.addJSON(i.nested),n.comment=i.comment,n},u.prototype.toJSON=function(t){var i=r.prototype.toJSON.call(this,t),n=!!t&&!!t.keepComments;return o.toObject(["options",i&&i.options||g,"methods",r.arrayToJSON(this.methodsArray,t)||{},"nested",i&&i.nested||g,"comment",n?this.comment:g])},Object.defineProperty(u.prototype,"methodsArray",{get:function(){return this.h||(this.h=o.toArray(this.methods))}}),u.prototype.get=function(t){return this.methods[t]||r.prototype.get.call(this,t)},u.prototype.resolveAll=function(){for(var t=this.methodsArray,i=0;i<t.length;++i)t[i].resolve();return r.prototype.resolve.call(this)},u.prototype.add=function(t){if(this.get(t.name))throw Error("duplicate name '"+t.name+"' in "+this);return t instanceof s?n((this.methods[t.name]=t).parent=this):r.prototype.add.call(this,t)},u.prototype.remove=function(t){if(t instanceof s){if(this.methods[t.name]!==t)throw Error(t+" is not a member of "+this);return delete this.methods[t.name],t.parent=null,n(this)}return r.prototype.remove.call(this,t)},u.prototype.create=function(t,i,n){for(var r,e=new f.Service(t,i,n),s=0;s<this.methodsArray.length;++s){var u=o.lcFirst((r=this.h[s]).resolve().name).replace(/[^$\w_]/g,"");e[u]=o.codegen(["r","c"],o.isReserved(u)?u+"_":u)("return this.rpcCall(m,q,s,r,c)")({m:r,q:r.resolvedRequestType.ctor,s:r.resolvedResponseType.ctor})}return e}},{20:20,21:21,28:28,33:33}],31:[function(t,i){i.exports=w;var u=t(21);((w.prototype=Object.create(u.prototype)).constructor=w).className="Type";var o=t(14),f=t(23),h=t(15),c=t(18),a=t(30),e=t(19),s=t(24),l=t(38),v=t(33),d=t(13),b=t(12),y=t(36),p=t(11),m=t(37);function w(t,i){u.call(this,t,i),this.fields={},this.oneofs=g,this.extensions=g,this.reserved=g,this.group=g,this.c=null,this.i=null,this.a=null,this.l=null}function n(t){return t.c=t.i=t.a=null,delete t.encode,delete t.decode,delete t.verify,t}Object.defineProperties(w.prototype,{fieldsById:{get:function(){if(this.c)return this.c;this.c={};for(var t=Object.keys(this.fields),i=0;i<t.length;++i){var n=this.fields[t[i]],r=n.id;if(this.c[r])throw Error("duplicate id "+r+" in "+this);this.c[r]=n}return this.c}},fieldsArray:{get:function(){return this.i||(this.i=v.toArray(this.fields))}},oneofsArray:{get:function(){return this.a||(this.a=v.toArray(this.oneofs))}},ctor:{get:function(){return this.l||(this.ctor=w.generateConstructor(this)())},set:function(t){var i=t.prototype;i instanceof e||((t.prototype=new e).constructor=t,v.merge(t.prototype,i)),t.$type=t.prototype.$type=this,v.merge(t,e,!0),this.l=t;for(var n=0;n<this.fieldsArray.length;++n)this.i[n].resolve();var r={};for(n=0;n<this.oneofsArray.length;++n)r[this.a[n].resolve().name]={get:v.oneOfGetter(this.a[n].oneof),set:v.oneOfSetter(this.a[n].oneof)};n&&Object.defineProperties(t.prototype,r)}}}),w.generateConstructor=function(t){for(var i,n=v.codegen(["p"],t.name),r=0;r<t.fieldsArray.length;++r)(i=t.i[r]).map?n("this%s={}",v.safeProp(i.name)):i.repeated&&n("this%s=[]",v.safeProp(i.name));return n("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]")},w.fromJSON=function(t,i){var n=new w(t,i.options);n.extensions=i.extensions,n.reserved=i.reserved;for(var r=Object.keys(i.fields),e=0;e<r.length;++e)n.add((void 0!==i.fields[r[e]].keyType?c.fromJSON:h.fromJSON)(r[e],i.fields[r[e]]));if(i.oneofs)for(r=Object.keys(i.oneofs),e=0;e<r.length;++e)n.add(f.fromJSON(r[e],i.oneofs[r[e]]));if(i.nested)for(r=Object.keys(i.nested),e=0;e<r.length;++e){var s=i.nested[r[e]];n.add((s.id!==g?h.fromJSON:s.fields!==g?w.fromJSON:s.values!==g?o.fromJSON:s.methods!==g?a.fromJSON:u.fromJSON)(r[e],s))}return i.extensions&&i.extensions.length&&(n.extensions=i.extensions),i.reserved&&i.reserved.length&&(n.reserved=i.reserved),i.group&&(n.group=!0),i.comment&&(n.comment=i.comment),n},w.prototype.toJSON=function(t){var i=u.prototype.toJSON.call(this,t),n=!!t&&!!t.keepComments;return v.toObject(["options",i&&i.options||g,"oneofs",u.arrayToJSON(this.oneofsArray,t),"fields",u.arrayToJSON(this.fieldsArray.filter(function(t){return!t.declaringField}),t)||{},"extensions",this.extensions&&this.extensions.length?this.extensions:g,"reserved",this.reserved&&this.reserved.length?this.reserved:g,"group",this.group||g,"nested",i&&i.nested||g,"comment",n?this.comment:g])},w.prototype.resolveAll=function(){for(var t=this.fieldsArray,i=0;i<t.length;)t[i++].resolve();var n=this.oneofsArray;for(i=0;i<n.length;)n[i++].resolve();return u.prototype.resolveAll.call(this)},w.prototype.get=function(t){return this.fields[t]||this.oneofs&&this.oneofs[t]||this.nested&&this.nested[t]||null},w.prototype.add=function(t){if(this.get(t.name))throw Error("duplicate name '"+t.name+"' in "+this);if(t instanceof h&&t.extend===g){if(this.c?this.c[t.id]:this.fieldsById[t.id])throw Error("duplicate id "+t.id+" in "+this);if(this.isReservedId(t.id))throw Error("id "+t.id+" is reserved in "+this);if(this.isReservedName(t.name))throw Error("name '"+t.name+"' is reserved in "+this);return t.parent&&t.parent.remove(t),(this.fields[t.name]=t).message=this,t.onAdd(this),n(this)}return t instanceof f?(this.oneofs||(this.oneofs={}),(this.oneofs[t.name]=t).onAdd(this),n(this)):u.prototype.add.call(this,t)},w.prototype.remove=function(t){if(t instanceof h&&t.extend===g){if(!this.fields||this.fields[t.name]!==t)throw Error(t+" is not a member of "+this);return delete this.fields[t.name],t.parent=null,t.onRemove(this),n(this)}if(t instanceof f){if(!this.oneofs||this.oneofs[t.name]!==t)throw Error(t+" is not a member of "+this);return delete this.oneofs[t.name],t.parent=null,t.onRemove(this),n(this)}return u.prototype.remove.call(this,t)},w.prototype.isReservedId=function(t){return u.isReservedId(this.reserved,t)},w.prototype.isReservedName=function(t){return u.isReservedName(this.reserved,t)},w.prototype.create=function(t){return new this.ctor(t)},w.prototype.setup=function(){for(var t=this.fullName,i=[],n=0;n<this.fieldsArray.length;++n)i.push(this.i[n].resolve().resolvedType);this.encode=d(this)({Writer:l,types:i,util:v}),this.decode=b(this)({Reader:s,types:i,util:v}),this.verify=y(this)({types:i,util:v}),this.fromObject=p.fromObject(this)({types:i,util:v}),this.toObject=p.toObject(this)({types:i,util:v});var r=m[t];if(r){var e=Object.create(this);e.fromObject=this.fromObject,this.fromObject=r.fromObject.bind(e),e.toObject=this.toObject,this.toObject=r.toObject.bind(e)}return this},w.prototype.encode=function(t,i){return this.setup().encode(t,i)},w.prototype.encodeDelimited=function(t,i){return this.encode(t,i&&i.len?i.fork():i).ldelim()},w.prototype.decode=function(t,i){return this.setup().decode(t,i)},w.prototype.decodeDelimited=function(t){return t instanceof s||(t=s.create(t)),this.decode(t,t.uint32())},w.prototype.verify=function(t){return this.setup().verify(t)},w.prototype.fromObject=function(t){return this.setup().fromObject(t)},w.prototype.toObject=function(t,i){return this.setup().toObject(t,i)},w.d=function(i){return function(t){v.decorateType(t,i)}}},{11:11,12:12,13:13,14:14,15:15,18:18,19:19,21:21,23:23,24:24,30:30,33:33,36:36,37:37,38:38}],32:[function(t,i,n){var r=n,e=t(33),s=["double","float","int32","uint32","sint32","fixed32","sfixed32","int64","uint64","sint64","fixed64","sfixed64","bool","string","bytes"];function u(t,i){var n=0,r={};for(i|=0;n<t.length;)r[s[n+i]]=t[n++];return r}r.basic=u([1,5,0,0,0,5,5,0,0,0,1,1,0,2,2]),r.defaults=u([0,0,0,0,0,0,0,0,0,0,0,0,!1,"",e.emptyArray,null]),r.long=u([0,0,0,1,1],7),r.mapKey=u([0,0,0,5,5,0,0,0,1,1,0,2],2),r.packed=u([1,5,0,0,0,5,5,0,0,0,1,1,0])},{33:33}],33:[function(r,t){var e,n,s=t.exports=r(35),i=r(27);s.codegen=r(3),s.fetch=r(5),s.path=r(8),s.fs=s.inquire("fs"),s.toArray=function(t){if(t){for(var i=Object.keys(t),n=Array(i.length),r=0;r<i.length;)n[r]=t[i[r++]];return n}return[]},s.toObject=function(t){for(var i={},n=0;n<t.length;){var r=t[n++],e=t[n++];e!==g&&(i[r]=e)}return i};var u=/\\/g,o=/"/g;s.isReserved=function(t){return/^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)},s.safeProp=function(t){return!/^[$\w_]+$/.test(t)||s.isReserved(t)?'["'+t.replace(u,"\\\\").replace(o,'\\"')+'"]':"."+t},s.ucFirst=function(t){return t.charAt(0).toUpperCase()+t.substring(1)};var f=/_([a-z])/g;s.camelCase=function(t){return t.substring(0,1)+t.substring(1).replace(f,function(t,i){return i.toUpperCase()})},s.compareFieldsById=function(t,i){return t.id-i.id},s.decorateType=function(t,i){if(t.$type)return i&&t.$type.name!==i&&(s.decorateRoot.remove(t.$type),t.$type.name=i,s.decorateRoot.add(t.$type)),t.$type;e||(e=r(31));var n=new e(i||t.name);return s.decorateRoot.add(n),n.ctor=t,Object.defineProperty(t,"$type",{value:n,enumerable:!1}),Object.defineProperty(t.prototype,"$type",{value:n,enumerable:!1}),n};var h=0;s.decorateEnum=function(t){if(t.$type)return t.$type;n||(n=r(14));var i=new n("Enum"+h++,t);return s.decorateRoot.add(i),Object.defineProperty(t,"$type",{value:i,enumerable:!1}),i},Object.defineProperty(s,"decorateRoot",{get:function(){return i.decorated||(i.decorated=new(r(26)))}})},{14:14,26:26,27:27,3:3,31:31,35:35,5:5,8:8}],34:[function(t,i){i.exports=e;var n=t(35);function e(t,i){this.lo=t>>>0,this.hi=i>>>0}var s=e.zero=new e(0,0);s.toNumber=function(){return 0},s.zzEncode=s.zzDecode=function(){return this},s.length=function(){return 1};var r=e.zeroHash="\0\0\0\0\0\0\0\0";e.fromNumber=function(t){if(0===t)return s;var i=t<0;i&&(t=-t);var n=t>>>0,r=(t-n)/4294967296>>>0;return i&&(r=~r>>>0,n=~n>>>0,4294967295<++n&&(n=0,4294967295<++r&&(r=0))),new e(n,r)},e.from=function(t){if("number"==typeof t)return e.fromNumber(t);if(n.isString(t)){if(!n.Long)return e.fromNumber(parseInt(t,10));t=n.Long.fromString(t)}return t.low||t.high?new e(t.low>>>0,t.high>>>0):s},e.prototype.toNumber=function(t){if(!t&&this.hi>>>31){var i=1+~this.lo>>>0,n=~this.hi>>>0;return i||(n=n+1>>>0),-(i+4294967296*n)}return this.lo+4294967296*this.hi},e.prototype.toLong=function(t){return n.Long?new n.Long(0|this.lo,0|this.hi,!!t):{low:0|this.lo,high:0|this.hi,unsigned:!!t}};var u=String.prototype.charCodeAt;e.fromHash=function(t){return t===r?s:new e((u.call(t,0)|u.call(t,1)<<8|u.call(t,2)<<16|u.call(t,3)<<24)>>>0,(u.call(t,4)|u.call(t,5)<<8|u.call(t,6)<<16|u.call(t,7)<<24)>>>0)},e.prototype.toHash=function(){return String.fromCharCode(255&this.lo,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,255&this.hi,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},e.prototype.zzEncode=function(){var t=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^t)>>>0,this.lo=(this.lo<<1^t)>>>0,this},e.prototype.zzDecode=function(){var t=-(1&this.lo);return this.lo=((this.lo>>>1|this.hi<<31)^t)>>>0,this.hi=(this.hi>>>1^t)>>>0,this},e.prototype.length=function(){var t=this.lo,i=(this.lo>>>28|this.hi<<4)>>>0,n=this.hi>>>24;return 0===n?0===i?t<16384?t<128?1:2:t<2097152?3:4:i<16384?i<128?5:6:i<2097152?7:8:n<128?9:10}},{35:35}],35:[function(t,i,n){var r=n;function e(t,i,n){for(var r=Object.keys(i),e=0;e<r.length;++e)t[r[e]]!==g&&n||(t[r[e]]=i[r[e]]);return t}function s(t){function n(t,i){if(!(this instanceof n))return new n(t,i);Object.defineProperty(this,"message",{get:function(){return t}}),Error.captureStackTrace?Error.captureStackTrace(this,n):Object.defineProperty(this,"stack",{value:Error().stack||""}),i&&e(this,i)}return(n.prototype=Object.create(Error.prototype)).constructor=n,Object.defineProperty(n.prototype,"name",{get:function(){return t}}),n.prototype.toString=function(){return this.name+": "+this.message},n}r.asPromise=t(1),r.base64=t(2),r.EventEmitter=t(4),r.float=t(6),r.inquire=t(7),r.utf8=t(10),r.pool=t(9),r.LongBits=t(34),r.global="undefined"!=typeof window&&window||"undefined"!=typeof global&&global||"undefined"!=typeof self&&self||this,r.emptyArray=Object.freeze?Object.freeze([]):[],r.emptyObject=Object.freeze?Object.freeze({}):{},r.isNode=!!(r.global.process&&r.global.process.versions&&r.global.process.versions.node),r.isInteger=Number.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t},r.isString=function(t){return"string"==typeof t||t instanceof String},r.isObject=function(t){return t&&"object"==typeof t},r.isset=r.isSet=function(t,i){var n=t[i];return!(null==n||!t.hasOwnProperty(i))&&("object"!=typeof n||0<(Array.isArray(n)?n.length:Object.keys(n).length))},r.Buffer=function(){try{var t=r.inquire("buffer").Buffer;return t.prototype.utf8Write?t:null}catch(t){return null}}(),r.v=null,r.b=null,r.newBuffer=function(t){return"number"==typeof t?r.Buffer?r.b(t):new r.Array(t):r.Buffer?r.v(t):"undefined"==typeof Uint8Array?t:new Uint8Array(t)},r.Array="undefined"!=typeof Uint8Array?Uint8Array:Array,r.Long=r.global.dcodeIO&&r.global.dcodeIO.Long||r.global.Long||r.inquire("long"),r.key2Re=/^true|false|0|1$/,r.key32Re=/^-?(?:0|[1-9][0-9]*)$/,r.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,r.longToHash=function(t){return t?r.LongBits.from(t).toHash():r.LongBits.zeroHash},r.longFromHash=function(t,i){var n=r.LongBits.fromHash(t);return r.Long?r.Long.fromBits(n.lo,n.hi,i):n.toNumber(!!i)},r.merge=e,r.lcFirst=function(t){return t.charAt(0).toLowerCase()+t.substring(1)},r.newError=s,r.ProtocolError=s("ProtocolError"),r.oneOfGetter=function(t){for(var n={},i=0;i<t.length;++i)n[t[i]]=1;return function(){for(var t=Object.keys(this),i=t.length-1;-1<i;--i)if(1===n[t[i]]&&this[t[i]]!==g&&null!==this[t[i]])return t[i]}},r.oneOfSetter=function(n){return function(t){for(var i=0;i<n.length;++i)n[i]!==t&&delete this[n[i]]}},r.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},r.r=function(){var n=r.Buffer;n?(r.v=n.from!==Uint8Array.from&&n.from||function(t,i){return new n(t,i)},r.b=n.allocUnsafe||function(t){return new n(t)}):r.v=r.b=null}},{1:1,10:10,2:2,34:34,4:4,6:6,7:7,9:9}],36:[function(t,i){i.exports=function(t){var i=f.codegen(["m"],t.name+"$verify")('if(typeof m!=="object"||m===null)')("return%j","object expected"),n=t.oneofsArray,r={};n.length&&i("var p={}");for(var e=0;e<t.fieldsArray.length;++e){var s=t.i[e].resolve(),u="m"+f.safeProp(s.name);if(s.optional&&i("if(%s!=null&&m.hasOwnProperty(%j)){",u,s.name),s.map)i("if(!util.isObject(%s))",u)("return%j",h(s,"object"))("var k=Object.keys(%s)",u)("for(var i=0;i<k.length;++i){"),a(i,s,"k[i]"),c(i,s,e,u+"[k[i]]")("}");else if(s.repeated)i("if(!Array.isArray(%s))",u)("return%j",h(s,"array"))("for(var i=0;i<%s.length;++i){",u),c(i,s,e,u+"[i]")("}");else{if(s.partOf){var o=f.safeProp(s.partOf.name);1===r[s.partOf.name]&&i("if(p%s===1)",o)("return%j",s.partOf.name+": multiple values"),r[s.partOf.name]=1,i("p%s=1",o)}c(i,s,e,u)}s.optional&&i("}")}return i("return null")};var u=t(14),f=t(33);function h(t,i){return t.name+": "+i+(t.repeated&&"array"!==i?"[]":t.map&&"object"!==i?"{k:"+t.keyType+"}":"")+" expected"}function c(t,i,n,r){if(i.resolvedType)if(i.resolvedType instanceof u){t("switch(%s){",r)("default:")("return%j",h(i,"enum value"));for(var e=Object.keys(i.resolvedType.values),s=0;s<e.length;++s)t("case %i:",i.resolvedType.values[e[s]]);t("break")("}")}else t("{")("var e=types[%i].verify(%s);",n,r)("if(e)")("return%j+e",i.name+".")("}");else switch(i.type){case"int32":case"uint32":case"sint32":case"fixed32":case"sfixed32":t("if(!util.isInteger(%s))",r)("return%j",h(i,"integer"));break;case"int64":case"uint64":case"sint64":case"fixed64":case"sfixed64":t("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))",r,r,r,r)("return%j",h(i,"integer|Long"));break;case"float":case"double":t('if(typeof %s!=="number")',r)("return%j",h(i,"number"));break;case"bool":t('if(typeof %s!=="boolean")',r)("return%j",h(i,"boolean"));break;case"string":t("if(!util.isString(%s))",r)("return%j",h(i,"string"));break;case"bytes":t('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))',r,r,r)("return%j",h(i,"buffer"))}return t}function a(t,i,n){switch(i.keyType){case"int32":case"uint32":case"sint32":case"fixed32":case"sfixed32":t("if(!util.key32Re.test(%s))",n)("return%j",h(i,"integer key"));break;case"int64":case"uint64":case"sint64":case"fixed64":case"sfixed64":t("if(!util.key64Re.test(%s))",n)("return%j",h(i,"integer|Long key"));break;case"bool":t("if(!util.key2Re.test(%s))",n)("return%j",h(i,"boolean key"))}return t}},{14:14,33:33}],37:[function(t,i,n){var r=n,s=t(19);r[".google.protobuf.Any"]={fromObject:function(t){if(t&&t["@type"]){var i=this.lookup(t["@type"]);if(i){var n="."===t["@type"].charAt(0)?t["@type"].substr(1):t["@type"];return this.create({type_url:"/"+n,value:i.encode(i.fromObject(t)).finish()})}}return this.fromObject(t)},toObject:function(t,i){if(i&&i.json&&t.type_url&&t.value){var n=t.type_url.substring(t.type_url.lastIndexOf("/")+1),r=this.lookup(n);r&&(t=r.decode(t.value))}if(!(t instanceof this.ctor)&&t instanceof s){var e=t.$type.toObject(t,i);return e["@type"]=t.$type.fullName,e}return this.toObject(t,i)}}},{19:19}],38:[function(t,i){i.exports=c;var n,r=t(35),e=r.LongBits,s=r.base64,u=r.utf8;function o(t,i,n){this.fn=t,this.len=i,this.next=g,this.val=n}function f(){}function h(t){this.head=t.head,this.tail=t.tail,this.len=t.len,this.next=t.states}function c(){this.len=0,this.head=new o(f,0,0),this.tail=this.head,this.states=null}function a(t,i,n){i[n]=255&t}function l(t,i){this.len=t,this.next=g,this.val=i}function v(t,i,n){for(;t.hi;)i[n++]=127&t.lo|128,t.lo=(t.lo>>>7|t.hi<<25)>>>0,t.hi>>>=7;for(;127<t.lo;)i[n++]=127&t.lo|128,t.lo=t.lo>>>7;i[n++]=t.lo}function d(t,i,n){i[n]=255&t,i[n+1]=t>>>8&255,i[n+2]=t>>>16&255,i[n+3]=t>>>24}c.create=r.Buffer?function(){return(c.create=function(){return new n})()}:function(){return new c},c.alloc=function(t){return new r.Array(t)},r.Array!==Array&&(c.alloc=r.pool(c.alloc,r.Array.prototype.subarray)),c.prototype.y=function(t,i,n){return this.tail=this.tail.next=new o(t,i,n),this.len+=i,this},(l.prototype=Object.create(o.prototype)).fn=function(t,i,n){for(;127<t;)i[n++]=127&t|128,t>>>=7;i[n]=t},c.prototype.uint32=function(t){return this.len+=(this.tail=this.tail.next=new l((t>>>=0)<128?1:t<16384?2:t<2097152?3:t<268435456?4:5,t)).len,this},c.prototype.int32=function(t){return t<0?this.y(v,10,e.fromNumber(t)):this.uint32(t)},c.prototype.sint32=function(t){return this.uint32((t<<1^t>>31)>>>0)},c.prototype.int64=c.prototype.uint64=function(t){var i=e.from(t);return this.y(v,i.length(),i)},c.prototype.sint64=function(t){var i=e.from(t).zzEncode();return this.y(v,i.length(),i)},c.prototype.bool=function(t){return this.y(a,1,t?1:0)},c.prototype.sfixed32=c.prototype.fixed32=function(t){return this.y(d,4,t>>>0)},c.prototype.sfixed64=c.prototype.fixed64=function(t){var i=e.from(t);return this.y(d,4,i.lo).y(d,4,i.hi)},c.prototype.float=function(t){return this.y(r.float.writeFloatLE,4,t)},c.prototype.double=function(t){return this.y(r.float.writeDoubleLE,8,t)};var b=r.Array.prototype.set?function(t,i,n){i.set(t,n)}:function(t,i,n){for(var r=0;r<t.length;++r)i[n+r]=t[r]};c.prototype.bytes=function(t){var i=t.length>>>0;if(!i)return this.y(a,1,0);if(r.isString(t)){var n=c.alloc(i=s.length(t));s.decode(t,n,0),t=n}return this.uint32(i).y(b,i,t)},c.prototype.string=function(t){var i=u.length(t);return i?this.uint32(i).y(u.write,i,t):this.y(a,1,0)},c.prototype.fork=function(){return this.states=new h(this),this.head=this.tail=new o(f,0,0),this.len=0,this},c.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new o(f,0,0),this.len=0),this},c.prototype.ldelim=function(){var t=this.head,i=this.tail,n=this.len;return this.reset().uint32(n),n&&(this.tail.next=t.next,this.tail=i,this.len+=n),this},c.prototype.finish=function(){for(var t=this.head.next,i=this.constructor.alloc(this.len),n=0;t;)t.fn(t.val,i,n),n+=t.len,t=t.next;return i},c.r=function(t){n=t}},{35:35}],39:[function(t,i){i.exports=s;var n=t(38);(s.prototype=Object.create(n.prototype)).constructor=s;var r=t(35),e=r.Buffer;function s(){n.call(this)}s.alloc=function(t){return(s.alloc=r.b)(t)};var u=e&&e.prototype instanceof Uint8Array&&"set"===e.prototype.set.name?function(t,i,n){i.set(t,n)}:function(t,i,n){if(t.copy)t.copy(i,n,0,t.length);else for(var r=0;r<t.length;)i[n++]=t[r++]};function o(t,i,n){t.length<40?r.utf8.write(t,i,n):i.utf8Write(t,n)}s.prototype.bytes=function(t){r.isString(t)&&(t=r.v(t,"base64"));var i=t.length>>>0;return this.uint32(i),i&&this.y(u,i,t),this},s.prototype.string=function(t){var i=e.byteLength(t);return this.uint32(i),i&&this.y(o,i,t),this}},{35:35,38:38}]},e={},t=[16],i=function t(i){var n=e[i];return n||r[i][0].call(n=e[i]={exports:{}},t,n,n.exports),n.exports}(t[0]),i.util.global.protobuf=i,"function"==typeof define&&define.amd&&define(["long"],function(t){return t&&t.isLong&&(i.util.Long=t,i.configure()),i}),"object"==typeof module&&module&&module.exports&&(module.exports=i)}();
//# sourceMappingURL=protobuf.min.js.map