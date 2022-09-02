var index = (function () {
  'use strict';

  function _mergeNamespaces(n, m) {
    m.forEach(function (e) {
      e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
        if (k !== 'default' && !(k in n)) {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    });
    return Object.freeze(n);
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }

        return desc.value;
      };
    }

    return _get.apply(this, arguments);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var PACKET_TYPES = Object.create(null); // no Map = no polyfill

  PACKET_TYPES["open"] = "0";
  PACKET_TYPES["close"] = "1";
  PACKET_TYPES["ping"] = "2";
  PACKET_TYPES["pong"] = "3";
  PACKET_TYPES["message"] = "4";
  PACKET_TYPES["upgrade"] = "5";
  PACKET_TYPES["noop"] = "6";
  var PACKET_TYPES_REVERSE = Object.create(null);
  Object.keys(PACKET_TYPES).forEach(function (key) {
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
  });
  var ERROR_PACKET = {
    type: "error",
    data: "parser error"
  };

  var withNativeBlob$1 = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
  var withNativeArrayBuffer$2 = typeof ArrayBuffer === "function"; // ArrayBuffer.isView method is not defined in IE10

  var isView$1 = function isView(obj) {
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
  };

  var encodePacket = function encodePacket(_ref, supportsBinary, callback) {
    var type = _ref.type,
        data = _ref.data;

    if (withNativeBlob$1 && data instanceof Blob) {
      if (supportsBinary) {
        return callback(data);
      } else {
        return encodeBlobAsBase64(data, callback);
      }
    } else if (withNativeArrayBuffer$2 && (data instanceof ArrayBuffer || isView$1(data))) {
      if (supportsBinary) {
        return callback(data);
      } else {
        return encodeBlobAsBase64(new Blob([data]), callback);
      }
    } // plain string


    return callback(PACKET_TYPES[type] + (data || ""));
  };

  var encodeBlobAsBase64 = function encodeBlobAsBase64(data, callback) {
    var fileReader = new FileReader();

    fileReader.onload = function () {
      var content = fileReader.result.split(",")[1];
      callback("b" + content);
    };

    return fileReader.readAsDataURL(data);
  };

  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'; // Use a lookup table to find the index.

  var lookup$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);

  for (var i$1 = 0; i$1 < chars.length; i$1++) {
    lookup$1[chars.charCodeAt(i$1)] = i$1;
  }
  var decode$1 = function decode(base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i,
        p = 0,
        encoded1,
        encoded2,
        encoded3,
        encoded4;

    if (base64[base64.length - 1] === '=') {
      bufferLength--;

      if (base64[base64.length - 2] === '=') {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
        bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i += 4) {
      encoded1 = lookup$1[base64.charCodeAt(i)];
      encoded2 = lookup$1[base64.charCodeAt(i + 1)];
      encoded3 = lookup$1[base64.charCodeAt(i + 2)];
      encoded4 = lookup$1[base64.charCodeAt(i + 3)];
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return arraybuffer;
  };

  var withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";

  var decodePacket = function decodePacket(encodedPacket, binaryType) {
    if (typeof encodedPacket !== "string") {
      return {
        type: "message",
        data: mapBinary(encodedPacket, binaryType)
      };
    }

    var type = encodedPacket.charAt(0);

    if (type === "b") {
      return {
        type: "message",
        data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
      };
    }

    var packetType = PACKET_TYPES_REVERSE[type];

    if (!packetType) {
      return ERROR_PACKET;
    }

    return encodedPacket.length > 1 ? {
      type: PACKET_TYPES_REVERSE[type],
      data: encodedPacket.substring(1)
    } : {
      type: PACKET_TYPES_REVERSE[type]
    };
  };

  var decodeBase64Packet = function decodeBase64Packet(data, binaryType) {
    if (withNativeArrayBuffer$1) {
      var decoded = decode$1(data);
      return mapBinary(decoded, binaryType);
    } else {
      return {
        base64: true,
        data: data
      }; // fallback for old browsers
    }
  };

  var mapBinary = function mapBinary(data, binaryType) {
    switch (binaryType) {
      case "blob":
        return data instanceof ArrayBuffer ? new Blob([data]) : data;

      case "arraybuffer":
      default:
        return data;
      // assuming the data is already an ArrayBuffer
    }
  };

  var SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text

  var encodePayload = function encodePayload(packets, callback) {
    // some packets may be added to the array while encoding, so the initial length must be saved
    var length = packets.length;
    var encodedPackets = new Array(length);
    var count = 0;
    packets.forEach(function (packet, i) {
      // force base64 encoding for binary packets
      encodePacket(packet, false, function (encodedPacket) {
        encodedPackets[i] = encodedPacket;

        if (++count === length) {
          callback(encodedPackets.join(SEPARATOR));
        }
      });
    });
  };

  var decodePayload = function decodePayload(encodedPayload, binaryType) {
    var encodedPackets = encodedPayload.split(SEPARATOR);
    var packets = [];

    for (var i = 0; i < encodedPackets.length; i++) {
      var decodedPacket = decodePacket(encodedPackets[i], binaryType);
      packets.push(decodedPacket);

      if (decodedPacket.type === "error") {
        break;
      }
    }

    return packets;
  };

  var protocol$1 = 4;

  /**
   * Initialize a new `Emitter`.
   *
   * @api public
   */
  function Emitter(obj) {
    if (obj) return mixin(obj);
  }
  /**
   * Mixin the emitter properties.
   *
   * @param {Object} obj
   * @return {Object}
   * @api private
   */

  function mixin(obj) {
    for (var key in Emitter.prototype) {
      obj[key] = Emitter.prototype[key];
    }

    return obj;
  }
  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */


  Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
    return this;
  };
  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */


  Emitter.prototype.once = function (event, fn) {
    function on() {
      this.off(event, on);
      fn.apply(this, arguments);
    }

    on.fn = fn;
    this.on(event, on);
    return this;
  };
  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */


  Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {}; // all

    if (0 == arguments.length) {
      this._callbacks = {};
      return this;
    } // specific event


    var callbacks = this._callbacks['$' + event];
    if (!callbacks) return this; // remove all handlers

    if (1 == arguments.length) {
      delete this._callbacks['$' + event];
      return this;
    } // remove specific handler


    var cb;

    for (var i = 0; i < callbacks.length; i++) {
      cb = callbacks[i];

      if (cb === fn || cb.fn === fn) {
        callbacks.splice(i, 1);
        break;
      }
    } // Remove event specific arrays for event types that no
    // one is subscribed for to avoid memory leak.


    if (callbacks.length === 0) {
      delete this._callbacks['$' + event];
    }

    return this;
  };
  /**
   * Emit `event` with the given args.
   *
   * @param {String} event
   * @param {Mixed} ...
   * @return {Emitter}
   */


  Emitter.prototype.emit = function (event) {
    this._callbacks = this._callbacks || {};
    var args = new Array(arguments.length - 1),
        callbacks = this._callbacks['$' + event];

    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }

    if (callbacks) {
      callbacks = callbacks.slice(0);

      for (var i = 0, len = callbacks.length; i < len; ++i) {
        callbacks[i].apply(this, args);
      }
    }

    return this;
  }; // alias used for reserved events (protected method)


  Emitter.prototype.emitReserved = Emitter.prototype.emit;
  /**
   * Return array of callbacks for `event`.
   *
   * @param {String} event
   * @return {Array}
   * @api public
   */

  Emitter.prototype.listeners = function (event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks['$' + event] || [];
  };
  /**
   * Check if this emitter has `event` handlers.
   *
   * @param {String} event
   * @return {Boolean}
   * @api public
   */


  Emitter.prototype.hasListeners = function (event) {
    return !!this.listeners(event).length;
  };

  var globalThisShim = function () {
    if (typeof self !== "undefined") {
      return self;
    } else if (typeof window !== "undefined") {
      return window;
    } else {
      return Function("return this")();
    }
  }();

  function pick(obj) {
    for (var _len = arguments.length, attr = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      attr[_key - 1] = arguments[_key];
    }

    return attr.reduce(function (acc, k) {
      if (obj.hasOwnProperty(k)) {
        acc[k] = obj[k];
      }

      return acc;
    }, {});
  } // Keep a reference to the real timeout functions so they can be used when overridden

  var NATIVE_SET_TIMEOUT = setTimeout;
  var NATIVE_CLEAR_TIMEOUT = clearTimeout;
  function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
      obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
      obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
    } else {
      obj.setTimeoutFn = setTimeout.bind(globalThisShim);
      obj.clearTimeoutFn = clearTimeout.bind(globalThisShim);
    }
  } // base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)

  var BASE64_OVERHEAD = 1.33; // we could also have used `new Blob([obj]).size`, but it isn't supported in IE9

  function byteLength(obj) {
    if (typeof obj === "string") {
      return utf8Length(obj);
    } // arraybuffer or blob


    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
  }

  function utf8Length(str) {
    var c = 0,
        length = 0;

    for (var i = 0, l = str.length; i < l; i++) {
      c = str.charCodeAt(i);

      if (c < 0x80) {
        length += 1;
      } else if (c < 0x800) {
        length += 2;
      } else if (c < 0xd800 || c >= 0xe000) {
        length += 3;
      } else {
        i++;
        length += 4;
      }
    }

    return length;
  }

  var TransportError = /*#__PURE__*/function (_Error) {
    _inherits(TransportError, _Error);

    var _super = _createSuper(TransportError);

    function TransportError(reason, description, context) {
      var _this;

      _classCallCheck(this, TransportError);

      _this = _super.call(this, reason);
      _this.description = description;
      _this.context = context;
      _this.type = "TransportError";
      return _this;
    }

    return _createClass(TransportError);
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  var Transport = /*#__PURE__*/function (_Emitter) {
    _inherits(Transport, _Emitter);

    var _super2 = _createSuper(Transport);

    /**
     * Transport abstract constructor.
     *
     * @param {Object} options.
     * @api private
     */
    function Transport(opts) {
      var _this2;

      _classCallCheck(this, Transport);

      _this2 = _super2.call(this);
      _this2.writable = false;
      installTimerFunctions(_assertThisInitialized(_this2), opts);
      _this2.opts = opts;
      _this2.query = opts.query;
      _this2.readyState = "";
      _this2.socket = opts.socket;
      return _this2;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @api protected
     */


    _createClass(Transport, [{
      key: "onError",
      value: function onError(reason, description, context) {
        _get(_getPrototypeOf(Transport.prototype), "emitReserved", this).call(this, "error", new TransportError(reason, description, context));

        return this;
      }
      /**
       * Opens the transport.
       *
       * @api public
       */

    }, {
      key: "open",
      value: function open() {
        if ("closed" === this.readyState || "" === this.readyState) {
          this.readyState = "opening";
          this.doOpen();
        }

        return this;
      }
      /**
       * Closes the transport.
       *
       * @api public
       */

    }, {
      key: "close",
      value: function close() {
        if ("opening" === this.readyState || "open" === this.readyState) {
          this.doClose();
          this.onClose();
        }

        return this;
      }
      /**
       * Sends multiple packets.
       *
       * @param {Array} packets
       * @api public
       */

    }, {
      key: "send",
      value: function send(packets) {
        if ("open" === this.readyState) {
          this.write(packets);
        }
      }
      /**
       * Called upon open
       *
       * @api protected
       */

    }, {
      key: "onOpen",
      value: function onOpen() {
        this.readyState = "open";
        this.writable = true;

        _get(_getPrototypeOf(Transport.prototype), "emitReserved", this).call(this, "open");
      }
      /**
       * Called with data.
       *
       * @param {String} data
       * @api protected
       */

    }, {
      key: "onData",
      value: function onData(data) {
        var packet = decodePacket(data, this.socket.binaryType);
        this.onPacket(packet);
      }
      /**
       * Called with a decoded packet.
       *
       * @api protected
       */

    }, {
      key: "onPacket",
      value: function onPacket(packet) {
        _get(_getPrototypeOf(Transport.prototype), "emitReserved", this).call(this, "packet", packet);
      }
      /**
       * Called upon close.
       *
       * @api protected
       */

    }, {
      key: "onClose",
      value: function onClose(details) {
        this.readyState = "closed";

        _get(_getPrototypeOf(Transport.prototype), "emitReserved", this).call(this, "close", details);
      }
    }]);

    return Transport;
  }(Emitter);

  // imported from https://github.com/unshiftio/yeast

  var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
      length = 64,
      map = {};
  var seed = 0,
      i = 0,
      prev;
  /**
   * Return a string representing the specified number.
   *
   * @param {Number} num The number to convert.
   * @returns {String} The string representation of the number.
   * @api public
   */

  function encode$1(num) {
    var encoded = '';

    do {
      encoded = alphabet[num % length] + encoded;
      num = Math.floor(num / length);
    } while (num > 0);

    return encoded;
  }
  /**
   * Yeast: A tiny growing id generator.
   *
   * @returns {String} A unique id.
   * @api public
   */

  function yeast() {
    var now = encode$1(+new Date());
    if (now !== prev) return seed = 0, prev = now;
    return now + '.' + encode$1(seed++);
  } //
  // Map each character to its index.
  //

  for (; i < length; i++) {
    map[alphabet[i]] = i;
  }

  // imported from https://github.com/galkn/querystring

  /**
   * Compiles a querystring
   * Returns string representation of the object
   *
   * @param {Object}
   * @api private
   */
  function encode(obj) {
    var str = '';

    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        if (str.length) str += '&';
        str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
      }
    }

    return str;
  }
  /**
   * Parses a simple querystring into an object
   *
   * @param {String} qs
   * @api private
   */

  function decode(qs) {
    var qry = {};
    var pairs = qs.split('&');

    for (var i = 0, l = pairs.length; i < l; i++) {
      var pair = pairs[i].split('=');
      qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }

    return qry;
  }

  // imported from https://github.com/component/has-cors
  var value = false;

  try {
    value = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
  } catch (err) {// if XMLHttp support is disabled in IE then it will throw
    // when trying to create
  }

  var hasCORS = value;

  // browser shim for xmlhttprequest module
  function XHR(opts) {
    var xdomain = opts.xdomain; // XMLHttpRequest can be disabled on IE

    try {
      if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
        return new XMLHttpRequest();
      }
    } catch (e) {}

    if (!xdomain) {
      try {
        return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
      } catch (e) {}
    }
  }

  function empty() {}

  var hasXHR2 = function () {
    var xhr = new XHR({
      xdomain: false
    });
    return null != xhr.responseType;
  }();

  var Polling = /*#__PURE__*/function (_Transport) {
    _inherits(Polling, _Transport);

    var _super = _createSuper(Polling);

    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @api public
     */
    function Polling(opts) {
      var _this;

      _classCallCheck(this, Polling);

      _this = _super.call(this, opts);
      _this.polling = false;

      if (typeof location !== "undefined") {
        var isSSL = "https:" === location.protocol;
        var port = location.port; // some user agents have empty `location.port`

        if (!port) {
          port = isSSL ? "443" : "80";
        }

        _this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
        _this.xs = opts.secure !== isSSL;
      }
      /**
       * XHR supports binary
       */


      var forceBase64 = opts && opts.forceBase64;
      _this.supportsBinary = hasXHR2 && !forceBase64;
      return _this;
    }
    /**
     * Transport name.
     */


    _createClass(Polling, [{
      key: "name",
      get: function get() {
        return "polling";
      }
      /**
       * Opens the socket (triggers polling). We write a PING message to determine
       * when the transport is open.
       *
       * @api private
       */

    }, {
      key: "doOpen",
      value: function doOpen() {
        this.poll();
      }
      /**
       * Pauses polling.
       *
       * @param {Function} callback upon buffers are flushed and transport is paused
       * @api private
       */

    }, {
      key: "pause",
      value: function pause(onPause) {
        var _this2 = this;

        this.readyState = "pausing";

        var pause = function pause() {
          _this2.readyState = "paused";
          onPause();
        };

        if (this.polling || !this.writable) {
          var total = 0;

          if (this.polling) {
            total++;
            this.once("pollComplete", function () {
              --total || pause();
            });
          }

          if (!this.writable) {
            total++;
            this.once("drain", function () {
              --total || pause();
            });
          }
        } else {
          pause();
        }
      }
      /**
       * Starts polling cycle.
       *
       * @api public
       */

    }, {
      key: "poll",
      value: function poll() {
        this.polling = true;
        this.doPoll();
        this.emitReserved("poll");
      }
      /**
       * Overloads onData to detect payloads.
       *
       * @api private
       */

    }, {
      key: "onData",
      value: function onData(data) {
        var _this3 = this;

        var callback = function callback(packet) {
          // if its the first message we consider the transport open
          if ("opening" === _this3.readyState && packet.type === "open") {
            _this3.onOpen();
          } // if its a close packet, we close the ongoing requests


          if ("close" === packet.type) {
            _this3.onClose({
              description: "transport closed by the server"
            });

            return false;
          } // otherwise bypass onData and handle the message


          _this3.onPacket(packet);
        }; // decode payload


        decodePayload(data, this.socket.binaryType).forEach(callback); // if an event did not trigger closing

        if ("closed" !== this.readyState) {
          // if we got data we're not polling
          this.polling = false;
          this.emitReserved("pollComplete");

          if ("open" === this.readyState) {
            this.poll();
          }
        }
      }
      /**
       * For polling, send a close packet.
       *
       * @api private
       */

    }, {
      key: "doClose",
      value: function doClose() {
        var _this4 = this;

        var close = function close() {
          _this4.write([{
            type: "close"
          }]);
        };

        if ("open" === this.readyState) {
          close();
        } else {
          // in case we're trying to close while
          // handshaking is in progress (GH-164)
          this.once("open", close);
        }
      }
      /**
       * Writes a packets payload.
       *
       * @param {Array} data packets
       * @param {Function} drain callback
       * @api private
       */

    }, {
      key: "write",
      value: function write(packets) {
        var _this5 = this;

        this.writable = false;
        encodePayload(packets, function (data) {
          _this5.doWrite(data, function () {
            _this5.writable = true;

            _this5.emitReserved("drain");
          });
        });
      }
      /**
       * Generates uri for connection.
       *
       * @api private
       */

    }, {
      key: "uri",
      value: function uri() {
        var query = this.query || {};
        var schema = this.opts.secure ? "https" : "http";
        var port = ""; // cache busting is forced

        if (false !== this.opts.timestampRequests) {
          query[this.opts.timestampParam] = yeast();
        }

        if (!this.supportsBinary && !query.sid) {
          query.b64 = 1;
        } // avoid port if default for schema


        if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) {
          port = ":" + this.opts.port;
        }

        var encodedQuery = encode(query);
        var ipv6 = this.opts.hostname.indexOf(":") !== -1;
        return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
      }
      /**
       * Creates a request.
       *
       * @param {String} method
       * @api private
       */

    }, {
      key: "request",
      value: function request() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        Object.assign(opts, {
          xd: this.xd,
          xs: this.xs
        }, this.opts);
        return new Request(this.uri(), opts);
      }
      /**
       * Sends data.
       *
       * @param {String} data to send.
       * @param {Function} called upon flush.
       * @api private
       */

    }, {
      key: "doWrite",
      value: function doWrite(data, fn) {
        var _this6 = this;

        var req = this.request({
          method: "POST",
          data: data
        });
        req.on("success", fn);
        req.on("error", function (xhrStatus, context) {
          _this6.onError("xhr post error", xhrStatus, context);
        });
      }
      /**
       * Starts a poll cycle.
       *
       * @api private
       */

    }, {
      key: "doPoll",
      value: function doPoll() {
        var _this7 = this;

        var req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", function (xhrStatus, context) {
          _this7.onError("xhr poll error", xhrStatus, context);
        });
        this.pollXhr = req;
      }
    }]);

    return Polling;
  }(Transport);
  var Request = /*#__PURE__*/function (_Emitter) {
    _inherits(Request, _Emitter);

    var _super2 = _createSuper(Request);

    /**
     * Request constructor
     *
     * @param {Object} options
     * @api public
     */
    function Request(uri, opts) {
      var _this8;

      _classCallCheck(this, Request);

      _this8 = _super2.call(this);
      installTimerFunctions(_assertThisInitialized(_this8), opts);
      _this8.opts = opts;
      _this8.method = opts.method || "GET";
      _this8.uri = uri;
      _this8.async = false !== opts.async;
      _this8.data = undefined !== opts.data ? opts.data : null;

      _this8.create();

      return _this8;
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @api private
     */


    _createClass(Request, [{
      key: "create",
      value: function create() {
        var _this9 = this;

        var opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts.xdomain = !!this.opts.xd;
        opts.xscheme = !!this.opts.xs;
        var xhr = this.xhr = new XHR(opts);

        try {
          xhr.open(this.method, this.uri, this.async);

          try {
            if (this.opts.extraHeaders) {
              xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);

              for (var i in this.opts.extraHeaders) {
                if (this.opts.extraHeaders.hasOwnProperty(i)) {
                  xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
                }
              }
            }
          } catch (e) {}

          if ("POST" === this.method) {
            try {
              xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
            } catch (e) {}
          }

          try {
            xhr.setRequestHeader("Accept", "*/*");
          } catch (e) {} // ie6 check


          if ("withCredentials" in xhr) {
            xhr.withCredentials = this.opts.withCredentials;
          }

          if (this.opts.requestTimeout) {
            xhr.timeout = this.opts.requestTimeout;
          }

          xhr.onreadystatechange = function () {
            if (4 !== xhr.readyState) return;

            if (200 === xhr.status || 1223 === xhr.status) {
              _this9.onLoad();
            } else {
              // make sure the `error` event handler that's user-set
              // does not throw in the same tick and gets caught here
              _this9.setTimeoutFn(function () {
                _this9.onError(typeof xhr.status === "number" ? xhr.status : 0);
              }, 0);
            }
          };

          xhr.send(this.data);
        } catch (e) {
          // Need to defer since .create() is called directly from the constructor
          // and thus the 'error' event can only be only bound *after* this exception
          // occurs.  Therefore, also, we cannot throw here at all.
          this.setTimeoutFn(function () {
            _this9.onError(e);
          }, 0);
          return;
        }

        if (typeof document !== "undefined") {
          this.index = Request.requestsCount++;
          Request.requests[this.index] = this;
        }
      }
      /**
       * Called upon error.
       *
       * @api private
       */

    }, {
      key: "onError",
      value: function onError(err) {
        this.emitReserved("error", err, this.xhr);
        this.cleanup(true);
      }
      /**
       * Cleans up house.
       *
       * @api private
       */

    }, {
      key: "cleanup",
      value: function cleanup(fromError) {
        if ("undefined" === typeof this.xhr || null === this.xhr) {
          return;
        }

        this.xhr.onreadystatechange = empty;

        if (fromError) {
          try {
            this.xhr.abort();
          } catch (e) {}
        }

        if (typeof document !== "undefined") {
          delete Request.requests[this.index];
        }

        this.xhr = null;
      }
      /**
       * Called upon load.
       *
       * @api private
       */

    }, {
      key: "onLoad",
      value: function onLoad() {
        var data = this.xhr.responseText;

        if (data !== null) {
          this.emitReserved("data", data);
          this.emitReserved("success");
          this.cleanup();
        }
      }
      /**
       * Aborts the request.
       *
       * @api public
       */

    }, {
      key: "abort",
      value: function abort() {
        this.cleanup();
      }
    }]);

    return Request;
  }(Emitter);
  Request.requestsCount = 0;
  Request.requests = {};
  /**
   * Aborts pending requests when unloading the window. This is needed to prevent
   * memory leaks (e.g. when using IE) and to ensure that no spurious error is
   * emitted.
   */

  if (typeof document !== "undefined") {
    // @ts-ignore
    if (typeof attachEvent === "function") {
      // @ts-ignore
      attachEvent("onunload", unloadHandler);
    } else if (typeof addEventListener === "function") {
      var terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
      addEventListener(terminationEvent, unloadHandler, false);
    }
  }

  function unloadHandler() {
    for (var i in Request.requests) {
      if (Request.requests.hasOwnProperty(i)) {
        Request.requests[i].abort();
      }
    }
  }

  var nextTick = function () {
    var isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";

    if (isPromiseAvailable) {
      return function (cb) {
        return Promise.resolve().then(cb);
      };
    } else {
      return function (cb, setTimeoutFn) {
        return setTimeoutFn(cb, 0);
      };
    }
  }();
  var WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
  var usingBrowserWebSocket = true;
  var defaultBinaryType = "arraybuffer";

  var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
  var WS = /*#__PURE__*/function (_Transport) {
    _inherits(WS, _Transport);

    var _super = _createSuper(WS);

    /**
     * WebSocket transport constructor.
     *
     * @api {Object} connection options
     * @api public
     */
    function WS(opts) {
      var _this;

      _classCallCheck(this, WS);

      _this = _super.call(this, opts);
      _this.supportsBinary = !opts.forceBase64;
      return _this;
    }
    /**
     * Transport name.
     *
     * @api public
     */


    _createClass(WS, [{
      key: "name",
      get: function get() {
        return "websocket";
      }
      /**
       * Opens socket.
       *
       * @api private
       */

    }, {
      key: "doOpen",
      value: function doOpen() {
        if (!this.check()) {
          // let probe timeout
          return;
        }

        var uri = this.uri();
        var protocols = this.opts.protocols; // React Native only supports the 'headers' option, and will print a warning if anything else is passed

        var opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");

        if (this.opts.extraHeaders) {
          opts.headers = this.opts.extraHeaders;
        }

        try {
          this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
        } catch (err) {
          return this.emitReserved("error", err);
        }

        this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
        this.addEventListeners();
      }
      /**
       * Adds event listeners to the socket
       *
       * @api private
       */

    }, {
      key: "addEventListeners",
      value: function addEventListeners() {
        var _this2 = this;

        this.ws.onopen = function () {
          if (_this2.opts.autoUnref) {
            _this2.ws._socket.unref();
          }

          _this2.onOpen();
        };

        this.ws.onclose = function (closeEvent) {
          return _this2.onClose({
            description: "websocket connection closed",
            context: closeEvent
          });
        };

        this.ws.onmessage = function (ev) {
          return _this2.onData(ev.data);
        };

        this.ws.onerror = function (e) {
          return _this2.onError("websocket error", e);
        };
      }
      /**
       * Writes data to socket.
       *
       * @param {Array} array of packets.
       * @api private
       */

    }, {
      key: "write",
      value: function write(packets) {
        var _this3 = this;

        this.writable = false; // encodePacket efficient as it uses WS framing
        // no need for encodePayload

        var _loop = function _loop(i) {
          var packet = packets[i];
          var lastPacket = i === packets.length - 1;
          encodePacket(packet, _this3.supportsBinary, function (data) {
            // always create a new object (GH-437)
            var opts = {};
            // have a chance of informing us about it yet, in that case send will
            // throw an error


            try {
              if (usingBrowserWebSocket) {
                // TypeError is thrown when passing the second argument on Safari
                _this3.ws.send(data);
              }
            } catch (e) {}

            if (lastPacket) {
              // fake drain
              // defer to next tick to allow Socket to clear writeBuffer
              nextTick(function () {
                _this3.writable = true;

                _this3.emitReserved("drain");
              }, _this3.setTimeoutFn);
            }
          });
        };

        for (var i = 0; i < packets.length; i++) {
          _loop(i);
        }
      }
      /**
       * Closes socket.
       *
       * @api private
       */

    }, {
      key: "doClose",
      value: function doClose() {
        if (typeof this.ws !== "undefined") {
          this.ws.close();
          this.ws = null;
        }
      }
      /**
       * Generates uri for connection.
       *
       * @api private
       */

    }, {
      key: "uri",
      value: function uri() {
        var query = this.query || {};
        var schema = this.opts.secure ? "wss" : "ws";
        var port = ""; // avoid port if default for schema

        if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) {
          port = ":" + this.opts.port;
        } // append timestamp to URI


        if (this.opts.timestampRequests) {
          query[this.opts.timestampParam] = yeast();
        } // communicate binary support capabilities


        if (!this.supportsBinary) {
          query.b64 = 1;
        }

        var encodedQuery = encode(query);
        var ipv6 = this.opts.hostname.indexOf(":") !== -1;
        return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
      }
      /**
       * Feature detection for WebSocket.
       *
       * @return {Boolean} whether this transport is available.
       * @api public
       */

    }, {
      key: "check",
      value: function check() {
        return !!WebSocket;
      }
    }]);

    return WS;
  }(Transport);

  var transports = {
    websocket: WS,
    polling: Polling
  };

  // imported from https://github.com/galkn/parseuri

  /**
   * Parses an URI
   *
   * @author Steven Levithan <stevenlevithan.com> (MIT license)
   * @api private
   */
  var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
  var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
  function parse(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
      str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
      uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
      uri.source = src;
      uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
      uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
      uri.ipv6uri = true;
    }

    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
  }

  function pathNames(obj, path) {
    var regx = /\/{2,9}/g,
        names = path.replace(regx, "/").split("/");

    if (path.substr(0, 1) == '/' || path.length === 0) {
      names.splice(0, 1);
    }

    if (path.substr(path.length - 1, 1) == '/') {
      names.splice(names.length - 1, 1);
    }

    return names;
  }

  function queryKey(uri, query) {
    var data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
      if ($1) {
        data[$1] = $2;
      }
    });
    return data;
  }

  var Socket$1 = /*#__PURE__*/function (_Emitter) {
    _inherits(Socket, _Emitter);

    var _super = _createSuper(Socket);

    /**
     * Socket constructor.
     *
     * @param {String|Object} uri or options
     * @param {Object} opts - options
     * @api public
     */
    function Socket(uri) {
      var _this;

      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Socket);

      _this = _super.call(this);

      if (uri && "object" === _typeof(uri)) {
        opts = uri;
        uri = null;
      }

      if (uri) {
        uri = parse(uri);
        opts.hostname = uri.host;
        opts.secure = uri.protocol === "https" || uri.protocol === "wss";
        opts.port = uri.port;
        if (uri.query) opts.query = uri.query;
      } else if (opts.host) {
        opts.hostname = parse(opts.host).host;
      }

      installTimerFunctions(_assertThisInitialized(_this), opts);
      _this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;

      if (opts.hostname && !opts.port) {
        // if no port is specified manually, use the protocol default
        opts.port = _this.secure ? "443" : "80";
      }

      _this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
      _this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : _this.secure ? "443" : "80");
      _this.transports = opts.transports || ["polling", "websocket"];
      _this.readyState = "";
      _this.writeBuffer = [];
      _this.prevBufferLen = 0;
      _this.opts = Object.assign({
        path: "/engine.io",
        agent: false,
        withCredentials: false,
        upgrade: true,
        timestampParam: "t",
        rememberUpgrade: false,
        rejectUnauthorized: true,
        perMessageDeflate: {
          threshold: 1024
        },
        transportOptions: {},
        closeOnBeforeunload: true
      }, opts);
      _this.opts.path = _this.opts.path.replace(/\/$/, "") + "/";

      if (typeof _this.opts.query === "string") {
        _this.opts.query = decode(_this.opts.query);
      } // set on handshake


      _this.id = null;
      _this.upgrades = null;
      _this.pingInterval = null;
      _this.pingTimeout = null; // set on heartbeat

      _this.pingTimeoutTimer = null;

      if (typeof addEventListener === "function") {
        if (_this.opts.closeOnBeforeunload) {
          // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
          // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
          // closed/reloaded)
          addEventListener("beforeunload", function () {
            if (_this.transport) {
              // silently close the transport
              _this.transport.removeAllListeners();

              _this.transport.close();
            }
          }, false);
        }

        if (_this.hostname !== "localhost") {
          _this.offlineEventListener = function () {
            _this.onClose("transport close", {
              description: "network connection lost"
            });
          };

          addEventListener("offline", _this.offlineEventListener, false);
        }
      }

      _this.open();

      return _this;
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} transport name
     * @return {Transport}
     * @api private
     */


    _createClass(Socket, [{
      key: "createTransport",
      value: function createTransport(name) {
        var query = Object.assign({}, this.opts.query); // append engine.io protocol identifier

        query.EIO = protocol$1; // transport name

        query.transport = name; // session id if we already have one

        if (this.id) query.sid = this.id;
        var opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
          query: query,
          socket: this,
          hostname: this.hostname,
          secure: this.secure,
          port: this.port
        });
        return new transports[name](opts);
      }
      /**
       * Initializes transport to use and starts probe.
       *
       * @api private
       */

    }, {
      key: "open",
      value: function open() {
        var _this2 = this;

        var transport;

        if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
          transport = "websocket";
        } else if (0 === this.transports.length) {
          // Emit error on next tick so it can be listened to
          this.setTimeoutFn(function () {
            _this2.emitReserved("error", "No transports available");
          }, 0);
          return;
        } else {
          transport = this.transports[0];
        }

        this.readyState = "opening"; // Retry with the next transport if the transport is disabled (jsonp: false)

        try {
          transport = this.createTransport(transport);
        } catch (e) {
          this.transports.shift();
          this.open();
          return;
        }

        transport.open();
        this.setTransport(transport);
      }
      /**
       * Sets the current transport. Disables the existing one (if any).
       *
       * @api private
       */

    }, {
      key: "setTransport",
      value: function setTransport(transport) {
        var _this3 = this;

        if (this.transport) {
          this.transport.removeAllListeners();
        } // set up transport


        this.transport = transport; // set up transport listeners

        transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", function (reason) {
          return _this3.onClose("transport close", reason);
        });
      }
      /**
       * Probes a transport.
       *
       * @param {String} transport name
       * @api private
       */

    }, {
      key: "probe",
      value: function probe(name) {
        var _this4 = this;

        var transport = this.createTransport(name);
        var failed = false;
        Socket.priorWebsocketSuccess = false;

        var onTransportOpen = function onTransportOpen() {
          if (failed) return;
          transport.send([{
            type: "ping",
            data: "probe"
          }]);
          transport.once("packet", function (msg) {
            if (failed) return;

            if ("pong" === msg.type && "probe" === msg.data) {
              _this4.upgrading = true;

              _this4.emitReserved("upgrading", transport);

              if (!transport) return;
              Socket.priorWebsocketSuccess = "websocket" === transport.name;

              _this4.transport.pause(function () {
                if (failed) return;
                if ("closed" === _this4.readyState) return;
                cleanup();

                _this4.setTransport(transport);

                transport.send([{
                  type: "upgrade"
                }]);

                _this4.emitReserved("upgrade", transport);

                transport = null;
                _this4.upgrading = false;

                _this4.flush();
              });
            } else {
              var err = new Error("probe error"); // @ts-ignore

              err.transport = transport.name;

              _this4.emitReserved("upgradeError", err);
            }
          });
        };

        function freezeTransport() {
          if (failed) return; // Any callback called by transport should be ignored since now

          failed = true;
          cleanup();
          transport.close();
          transport = null;
        } // Handle any error that happens while probing


        var onerror = function onerror(err) {
          var error = new Error("probe error: " + err); // @ts-ignore

          error.transport = transport.name;
          freezeTransport();

          _this4.emitReserved("upgradeError", error);
        };

        function onTransportClose() {
          onerror("transport closed");
        } // When the socket is closed while we're probing


        function onclose() {
          onerror("socket closed");
        } // When the socket is upgraded while we're probing


        function onupgrade(to) {
          if (transport && to.name !== transport.name) {
            freezeTransport();
          }
        } // Remove all listeners on the transport and on self


        var cleanup = function cleanup() {
          transport.removeListener("open", onTransportOpen);
          transport.removeListener("error", onerror);
          transport.removeListener("close", onTransportClose);

          _this4.off("close", onclose);

          _this4.off("upgrading", onupgrade);
        };

        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        transport.open();
      }
      /**
       * Called when connection is deemed open.
       *
       * @api private
       */

    }, {
      key: "onOpen",
      value: function onOpen() {
        this.readyState = "open";
        Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush(); // we check for `readyState` in case an `open`
        // listener already closed the socket

        if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
          var i = 0;
          var l = this.upgrades.length;

          for (; i < l; i++) {
            this.probe(this.upgrades[i]);
          }
        }
      }
      /**
       * Handles a packet.
       *
       * @api private
       */

    }, {
      key: "onPacket",
      value: function onPacket(packet) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
          this.emitReserved("packet", packet); // Socket is live - any packet counts

          this.emitReserved("heartbeat");

          switch (packet.type) {
            case "open":
              this.onHandshake(JSON.parse(packet.data));
              break;

            case "ping":
              this.resetPingTimeout();
              this.sendPacket("pong");
              this.emitReserved("ping");
              this.emitReserved("pong");
              break;

            case "error":
              var err = new Error("server error"); // @ts-ignore

              err.code = packet.data;
              this.onError(err);
              break;

            case "message":
              this.emitReserved("data", packet.data);
              this.emitReserved("message", packet.data);
              break;
          }
        }
      }
      /**
       * Called upon handshake completion.
       *
       * @param {Object} data - handshake obj
       * @api private
       */

    }, {
      key: "onHandshake",
      value: function onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this.upgrades = this.filterUpgrades(data.upgrades);
        this.pingInterval = data.pingInterval;
        this.pingTimeout = data.pingTimeout;
        this.maxPayload = data.maxPayload;
        this.onOpen(); // In case open handler closes socket

        if ("closed" === this.readyState) return;
        this.resetPingTimeout();
      }
      /**
       * Sets and resets ping timeout timer based on server pings.
       *
       * @api private
       */

    }, {
      key: "resetPingTimeout",
      value: function resetPingTimeout() {
        var _this5 = this;

        this.clearTimeoutFn(this.pingTimeoutTimer);
        this.pingTimeoutTimer = this.setTimeoutFn(function () {
          _this5.onClose("ping timeout");
        }, this.pingInterval + this.pingTimeout);

        if (this.opts.autoUnref) {
          this.pingTimeoutTimer.unref();
        }
      }
      /**
       * Called on `drain` event
       *
       * @api private
       */

    }, {
      key: "onDrain",
      value: function onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen); // setting prevBufferLen = 0 is very important
        // for example, when upgrading, upgrade packet is sent over,
        // and a nonzero prevBufferLen could cause problems on `drain`

        this.prevBufferLen = 0;

        if (0 === this.writeBuffer.length) {
          this.emitReserved("drain");
        } else {
          this.flush();
        }
      }
      /**
       * Flush write buffers.
       *
       * @api private
       */

    }, {
      key: "flush",
      value: function flush() {
        if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
          var packets = this.getWritablePackets();
          this.transport.send(packets); // keep track of current length of writeBuffer
          // splice writeBuffer and callbackBuffer on `drain`

          this.prevBufferLen = packets.length;
          this.emitReserved("flush");
        }
      }
      /**
       * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
       * long-polling)
       *
       * @private
       */

    }, {
      key: "getWritablePackets",
      value: function getWritablePackets() {
        var shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;

        if (!shouldCheckPayloadSize) {
          return this.writeBuffer;
        }

        var payloadSize = 1; // first packet type

        for (var i = 0; i < this.writeBuffer.length; i++) {
          var data = this.writeBuffer[i].data;

          if (data) {
            payloadSize += byteLength(data);
          }

          if (i > 0 && payloadSize > this.maxPayload) {
            return this.writeBuffer.slice(0, i);
          }

          payloadSize += 2; // separator + packet type
        }

        return this.writeBuffer;
      }
      /**
       * Sends a message.
       *
       * @param {String} message.
       * @param {Function} callback function.
       * @param {Object} options.
       * @return {Socket} for chaining.
       * @api public
       */

    }, {
      key: "write",
      value: function write(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
      }
    }, {
      key: "send",
      value: function send(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
      }
      /**
       * Sends a packet.
       *
       * @param {String} packet type.
       * @param {String} data.
       * @param {Object} options.
       * @param {Function} callback function.
       * @api private
       */

    }, {
      key: "sendPacket",
      value: function sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
          fn = data;
          data = undefined;
        }

        if ("function" === typeof options) {
          fn = options;
          options = null;
        }

        if ("closing" === this.readyState || "closed" === this.readyState) {
          return;
        }

        options = options || {};
        options.compress = false !== options.compress;
        var packet = {
          type: type,
          data: data,
          options: options
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn) this.once("flush", fn);
        this.flush();
      }
      /**
       * Closes the connection.
       *
       * @api public
       */

    }, {
      key: "close",
      value: function close() {
        var _this6 = this;

        var close = function close() {
          _this6.onClose("forced close");

          _this6.transport.close();
        };

        var cleanupAndClose = function cleanupAndClose() {
          _this6.off("upgrade", cleanupAndClose);

          _this6.off("upgradeError", cleanupAndClose);

          close();
        };

        var waitForUpgrade = function waitForUpgrade() {
          // wait for upgrade to finish since we can't send packets while pausing a transport
          _this6.once("upgrade", cleanupAndClose);

          _this6.once("upgradeError", cleanupAndClose);
        };

        if ("opening" === this.readyState || "open" === this.readyState) {
          this.readyState = "closing";

          if (this.writeBuffer.length) {
            this.once("drain", function () {
              if (_this6.upgrading) {
                waitForUpgrade();
              } else {
                close();
              }
            });
          } else if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        }

        return this;
      }
      /**
       * Called upon transport error
       *
       * @api private
       */

    }, {
      key: "onError",
      value: function onError(err) {
        Socket.priorWebsocketSuccess = false;
        this.emitReserved("error", err);
        this.onClose("transport error", err);
      }
      /**
       * Called upon transport close.
       *
       * @api private
       */

    }, {
      key: "onClose",
      value: function onClose(reason, description) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
          // clear timers
          this.clearTimeoutFn(this.pingTimeoutTimer); // stop event from firing again for transport

          this.transport.removeAllListeners("close"); // ensure transport won't stay open

          this.transport.close(); // ignore further transport communication

          this.transport.removeAllListeners();

          if (typeof removeEventListener === "function") {
            removeEventListener("offline", this.offlineEventListener, false);
          } // set ready state


          this.readyState = "closed"; // clear session id

          this.id = null; // emit close event

          this.emitReserved("close", reason, description); // clean buffers after, so users can still
          // grab the buffers on `close` event

          this.writeBuffer = [];
          this.prevBufferLen = 0;
        }
      }
      /**
       * Filters upgrades, returning only those matching client transports.
       *
       * @param {Array} server upgrades
       * @api private
       *
       */

    }, {
      key: "filterUpgrades",
      value: function filterUpgrades(upgrades) {
        var filteredUpgrades = [];
        var i = 0;
        var j = upgrades.length;

        for (; i < j; i++) {
          if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
        }

        return filteredUpgrades;
      }
    }]);

    return Socket;
  }(Emitter);
  Socket$1.protocol = protocol$1;

  Socket$1.protocol;

  /**
   * URL parser.
   *
   * @param uri - url
   * @param path - the request path of the connection
   * @param loc - An object meant to mimic window.location.
   *        Defaults to window.location.
   * @public
   */

  function url(uri) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var loc = arguments.length > 2 ? arguments[2] : undefined;
    var obj = uri; // default to window.location

    loc = loc || typeof location !== "undefined" && location;
    if (null == uri) uri = loc.protocol + "//" + loc.host; // relative path support

    if (typeof uri === "string") {
      if ("/" === uri.charAt(0)) {
        if ("/" === uri.charAt(1)) {
          uri = loc.protocol + uri;
        } else {
          uri = loc.host + uri;
        }
      }

      if (!/^(https?|wss?):\/\//.test(uri)) {
        if ("undefined" !== typeof loc) {
          uri = loc.protocol + "//" + uri;
        } else {
          uri = "https://" + uri;
        }
      } // parse


      obj = parse(uri);
    } // make sure we treat `localhost:80` and `localhost` equally


    if (!obj.port) {
      if (/^(http|ws)$/.test(obj.protocol)) {
        obj.port = "80";
      } else if (/^(http|ws)s$/.test(obj.protocol)) {
        obj.port = "443";
      }
    }

    obj.path = obj.path || "/";
    var ipv6 = obj.host.indexOf(":") !== -1;
    var host = ipv6 ? "[" + obj.host + "]" : obj.host; // define unique id

    obj.id = obj.protocol + "://" + host + ":" + obj.port + path; // define href

    obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
  }

  var withNativeArrayBuffer = typeof ArrayBuffer === "function";

  var isView = function isView(obj) {
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
  };

  var toString = Object.prototype.toString;
  var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
  var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
  /**
   * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
   *
   * @private
   */

  function isBinary(obj) {
    return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
  }
  function hasBinary(obj, toJSON) {
    if (!obj || _typeof(obj) !== "object") {
      return false;
    }

    if (Array.isArray(obj)) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (hasBinary(obj[i])) {
          return true;
        }
      }

      return false;
    }

    if (isBinary(obj)) {
      return true;
    }

    if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
      return hasBinary(obj.toJSON(), true);
    }

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
        return true;
      }
    }

    return false;
  }

  /**
   * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
   *
   * @param {Object} packet - socket.io event packet
   * @return {Object} with deconstructed packet and list of buffers
   * @public
   */

  function deconstructPacket(packet) {
    var buffers = [];
    var packetData = packet.data;
    var pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'

    return {
      packet: pack,
      buffers: buffers
    };
  }

  function _deconstructPacket(data, buffers) {
    if (!data) return data;

    if (isBinary(data)) {
      var placeholder = {
        _placeholder: true,
        num: buffers.length
      };
      buffers.push(data);
      return placeholder;
    } else if (Array.isArray(data)) {
      var newData = new Array(data.length);

      for (var i = 0; i < data.length; i++) {
        newData[i] = _deconstructPacket(data[i], buffers);
      }

      return newData;
    } else if (_typeof(data) === "object" && !(data instanceof Date)) {
      var _newData = {};

      for (var key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          _newData[key] = _deconstructPacket(data[key], buffers);
        }
      }

      return _newData;
    }

    return data;
  }
  /**
   * Reconstructs a binary packet from its placeholder packet and buffers
   *
   * @param {Object} packet - event packet with placeholders
   * @param {Array} buffers - binary buffers to put in placeholder positions
   * @return {Object} reconstructed packet
   * @public
   */


  function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    packet.attachments = undefined; // no longer useful

    return packet;
  }

  function _reconstructPacket(data, buffers) {
    if (!data) return data;

    if (data && data._placeholder === true) {
      var isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;

      if (isIndexValid) {
        return buffers[data.num]; // appropriate buffer (should be natural order anyway)
      } else {
        throw new Error("illegal attachments");
      }
    } else if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        data[i] = _reconstructPacket(data[i], buffers);
      }
    } else if (_typeof(data) === "object") {
      for (var key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          data[key] = _reconstructPacket(data[key], buffers);
        }
      }
    }

    return data;
  }

  /**
   * Protocol version.
   *
   * @public
   */

  var protocol = 5;
  var PacketType;

  (function (PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
  })(PacketType || (PacketType = {}));
  /**
   * A socket.io Encoder instance
   */


  var Encoder = /*#__PURE__*/function () {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */
    function Encoder(replacer) {
      _classCallCheck(this, Encoder);

      this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */


    _createClass(Encoder, [{
      key: "encode",
      value: function encode(obj) {
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
          if (hasBinary(obj)) {
            obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
            return this.encodeAsBinary(obj);
          }
        }

        return [this.encodeAsString(obj)];
      }
      /**
       * Encode packet as string.
       */

    }, {
      key: "encodeAsString",
      value: function encodeAsString(obj) {
        // first is type
        var str = "" + obj.type; // attachments if we have them

        if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
          str += obj.attachments + "-";
        } // if we have a namespace other than `/`
        // we append it followed by a comma `,`


        if (obj.nsp && "/" !== obj.nsp) {
          str += obj.nsp + ",";
        } // immediately followed by the id


        if (null != obj.id) {
          str += obj.id;
        } // json data


        if (null != obj.data) {
          str += JSON.stringify(obj.data, this.replacer);
        }

        return str;
      }
      /**
       * Encode packet as 'buffer sequence' by removing blobs, and
       * deconstructing packet into object with placeholders and
       * a list of buffers.
       */

    }, {
      key: "encodeAsBinary",
      value: function encodeAsBinary(obj) {
        var deconstruction = deconstructPacket(obj);
        var pack = this.encodeAsString(deconstruction.packet);
        var buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list

        return buffers; // write all the buffers
      }
    }]);

    return Encoder;
  }();
  /**
   * A socket.io Decoder instance
   *
   * @return {Object} decoder
   */

  var Decoder = /*#__PURE__*/function (_Emitter) {
    _inherits(Decoder, _Emitter);

    var _super = _createSuper(Decoder);

    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */
    function Decoder(reviver) {
      var _this;

      _classCallCheck(this, Decoder);

      _this = _super.call(this);
      _this.reviver = reviver;
      return _this;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */


    _createClass(Decoder, [{
      key: "add",
      value: function add(obj) {
        var packet;

        if (typeof obj === "string") {
          if (this.reconstructor) {
            throw new Error("got plaintext data when reconstructing a packet");
          }

          packet = this.decodeString(obj);

          if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
            // binary packet's json
            this.reconstructor = new BinaryReconstructor(packet); // no attachments, labeled binary but no binary data to follow

            if (packet.attachments === 0) {
              _get(_getPrototypeOf(Decoder.prototype), "emitReserved", this).call(this, "decoded", packet);
            }
          } else {
            // non-binary full packet
            _get(_getPrototypeOf(Decoder.prototype), "emitReserved", this).call(this, "decoded", packet);
          }
        } else if (isBinary(obj) || obj.base64) {
          // raw binary data
          if (!this.reconstructor) {
            throw new Error("got binary data when not reconstructing a packet");
          } else {
            packet = this.reconstructor.takeBinaryData(obj);

            if (packet) {
              // received final buffer
              this.reconstructor = null;

              _get(_getPrototypeOf(Decoder.prototype), "emitReserved", this).call(this, "decoded", packet);
            }
          }
        } else {
          throw new Error("Unknown type: " + obj);
        }
      }
      /**
       * Decode a packet String (JSON data)
       *
       * @param {String} str
       * @return {Object} packet
       */

    }, {
      key: "decodeString",
      value: function decodeString(str) {
        var i = 0; // look up type

        var p = {
          type: Number(str.charAt(0))
        };

        if (PacketType[p.type] === undefined) {
          throw new Error("unknown packet type " + p.type);
        } // look up attachments if type binary


        if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
          var start = i + 1;

          while (str.charAt(++i) !== "-" && i != str.length) {}

          var buf = str.substring(start, i);

          if (buf != Number(buf) || str.charAt(i) !== "-") {
            throw new Error("Illegal attachments");
          }

          p.attachments = Number(buf);
        } // look up namespace (if any)


        if ("/" === str.charAt(i + 1)) {
          var _start = i + 1;

          while (++i) {
            var c = str.charAt(i);
            if ("," === c) break;
            if (i === str.length) break;
          }

          p.nsp = str.substring(_start, i);
        } else {
          p.nsp = "/";
        } // look up id


        var next = str.charAt(i + 1);

        if ("" !== next && Number(next) == next) {
          var _start2 = i + 1;

          while (++i) {
            var _c = str.charAt(i);

            if (null == _c || Number(_c) != _c) {
              --i;
              break;
            }

            if (i === str.length) break;
          }

          p.id = Number(str.substring(_start2, i + 1));
        } // look up json data


        if (str.charAt(++i)) {
          var payload = this.tryParse(str.substr(i));

          if (Decoder.isPayloadValid(p.type, payload)) {
            p.data = payload;
          } else {
            throw new Error("invalid payload");
          }
        }

        return p;
      }
    }, {
      key: "tryParse",
      value: function tryParse(str) {
        try {
          return JSON.parse(str, this.reviver);
        } catch (e) {
          return false;
        }
      }
    }, {
      key: "destroy",
      value:
      /**
       * Deallocates a parser's resources
       */
      function destroy() {
        if (this.reconstructor) {
          this.reconstructor.finishedReconstruction();
        }
      }
    }], [{
      key: "isPayloadValid",
      value: function isPayloadValid(type, payload) {
        switch (type) {
          case PacketType.CONNECT:
            return _typeof(payload) === "object";

          case PacketType.DISCONNECT:
            return payload === undefined;

          case PacketType.CONNECT_ERROR:
            return typeof payload === "string" || _typeof(payload) === "object";

          case PacketType.EVENT:
          case PacketType.BINARY_EVENT:
            return Array.isArray(payload) && payload.length > 0;

          case PacketType.ACK:
          case PacketType.BINARY_ACK:
            return Array.isArray(payload);
        }
      }
    }]);

    return Decoder;
  }(Emitter);
  /**
   * A manager of a binary event's 'buffer sequence'. Should
   * be constructed whenever a packet of type BINARY_EVENT is
   * decoded.
   *
   * @param {Object} packet
   * @return {BinaryReconstructor} initialized reconstructor
   */

  var BinaryReconstructor = /*#__PURE__*/function () {
    function BinaryReconstructor(packet) {
      _classCallCheck(this, BinaryReconstructor);

      this.packet = packet;
      this.buffers = [];
      this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */


    _createClass(BinaryReconstructor, [{
      key: "takeBinaryData",
      value: function takeBinaryData(binData) {
        this.buffers.push(binData);

        if (this.buffers.length === this.reconPack.attachments) {
          // done with buffer list
          var packet = reconstructPacket(this.reconPack, this.buffers);
          this.finishedReconstruction();
          return packet;
        }

        return null;
      }
      /**
       * Cleans up binary packet reconstruction variables.
       */

    }, {
      key: "finishedReconstruction",
      value: function finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
      }
    }]);

    return BinaryReconstructor;
  }();

  var parser = /*#__PURE__*/Object.freeze({
    __proto__: null,
    protocol: protocol,
    get PacketType () { return PacketType; },
    Encoder: Encoder,
    Decoder: Decoder
  });

  function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
      obj.off(ev, fn);
    };
  }

  /**
   * Internal events.
   * These events can't be emitted by the user.
   */

  var RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1
  });
  var Socket = /*#__PURE__*/function (_Emitter) {
    _inherits(Socket, _Emitter);

    var _super = _createSuper(Socket);

    /**
     * `Socket` constructor.
     *
     * @public
     */
    function Socket(io, nsp, opts) {
      var _this;

      _classCallCheck(this, Socket);

      _this = _super.call(this);
      _this.connected = false;
      _this.receiveBuffer = [];
      _this.sendBuffer = [];
      _this.ids = 0;
      _this.acks = {};
      _this.flags = {};
      _this.io = io;
      _this.nsp = nsp;

      if (opts && opts.auth) {
        _this.auth = opts.auth;
      }

      if (_this.io._autoConnect) _this.open();
      return _this;
    }
    /**
     * Whether the socket is currently disconnected
     */


    _createClass(Socket, [{
      key: "disconnected",
      get: function get() {
        return !this.connected;
      }
      /**
       * Subscribe to open, close and packet events
       *
       * @private
       */

    }, {
      key: "subEvents",
      value: function subEvents() {
        if (this.subs) return;
        var io = this.io;
        this.subs = [on(io, "open", this.onopen.bind(this)), on(io, "packet", this.onpacket.bind(this)), on(io, "error", this.onerror.bind(this)), on(io, "close", this.onclose.bind(this))];
      }
      /**
       * Whether the Socket will try to reconnect when its Manager connects or reconnects
       */

    }, {
      key: "active",
      get: function get() {
        return !!this.subs;
      }
      /**
       * "Opens" the socket.
       *
       * @public
       */

    }, {
      key: "connect",
      value: function connect() {
        if (this.connected) return this;
        this.subEvents();
        if (!this.io["_reconnecting"]) this.io.open(); // ensure open

        if ("open" === this.io._readyState) this.onopen();
        return this;
      }
      /**
       * Alias for connect()
       */

    }, {
      key: "open",
      value: function open() {
        return this.connect();
      }
      /**
       * Sends a `message` event.
       *
       * @return self
       * @public
       */

    }, {
      key: "send",
      value: function send() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        args.unshift("message");
        this.emit.apply(this, args);
        return this;
      }
      /**
       * Override `emit`.
       * If the event is in `events`, it's emitted normally.
       *
       * @return self
       * @public
       */

    }, {
      key: "emit",
      value: function emit(ev) {
        if (RESERVED_EVENTS.hasOwnProperty(ev)) {
          throw new Error('"' + ev + '" is a reserved event name');
        }

        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        args.unshift(ev);
        var packet = {
          type: PacketType.EVENT,
          data: args
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false; // event ack callback

        if ("function" === typeof args[args.length - 1]) {
          var id = this.ids++;
          var ack = args.pop();

          this._registerAckCallback(id, ack);

          packet.id = id;
        }

        var isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
        var discardPacket = this.flags["volatile"] && (!isTransportWritable || !this.connected);

        if (discardPacket) ; else if (this.connected) {
          this.notifyOutgoingListeners(packet);
          this.packet(packet);
        } else {
          this.sendBuffer.push(packet);
        }

        this.flags = {};
        return this;
      }
      /**
       * @private
       */

    }, {
      key: "_registerAckCallback",
      value: function _registerAckCallback(id, ack) {
        var _this2 = this;

        var timeout = this.flags.timeout;

        if (timeout === undefined) {
          this.acks[id] = ack;
          return;
        } // @ts-ignore


        var timer = this.io.setTimeoutFn(function () {
          delete _this2.acks[id];

          for (var i = 0; i < _this2.sendBuffer.length; i++) {
            if (_this2.sendBuffer[i].id === id) {
              _this2.sendBuffer.splice(i, 1);
            }
          }

          ack.call(_this2, new Error("operation has timed out"));
        }, timeout);

        this.acks[id] = function () {
          // @ts-ignore
          _this2.io.clearTimeoutFn(timer);

          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          ack.apply(_this2, [null].concat(args));
        };
      }
      /**
       * Sends a packet.
       *
       * @param packet
       * @private
       */

    }, {
      key: "packet",
      value: function packet(_packet) {
        _packet.nsp = this.nsp;

        this.io._packet(_packet);
      }
      /**
       * Called upon engine `open`.
       *
       * @private
       */

    }, {
      key: "onopen",
      value: function onopen() {
        var _this3 = this;

        if (typeof this.auth == "function") {
          this.auth(function (data) {
            _this3.packet({
              type: PacketType.CONNECT,
              data: data
            });
          });
        } else {
          this.packet({
            type: PacketType.CONNECT,
            data: this.auth
          });
        }
      }
      /**
       * Called upon engine or manager `error`.
       *
       * @param err
       * @private
       */

    }, {
      key: "onerror",
      value: function onerror(err) {
        if (!this.connected) {
          this.emitReserved("connect_error", err);
        }
      }
      /**
       * Called upon engine `close`.
       *
       * @param reason
       * @param description
       * @private
       */

    }, {
      key: "onclose",
      value: function onclose(reason, description) {
        this.connected = false;
        delete this.id;
        this.emitReserved("disconnect", reason, description);
      }
      /**
       * Called with socket packet.
       *
       * @param packet
       * @private
       */

    }, {
      key: "onpacket",
      value: function onpacket(packet) {
        var sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace) return;

        switch (packet.type) {
          case PacketType.CONNECT:
            if (packet.data && packet.data.sid) {
              var id = packet.data.sid;
              this.onconnect(id);
            } else {
              this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
            }

            break;

          case PacketType.EVENT:
          case PacketType.BINARY_EVENT:
            this.onevent(packet);
            break;

          case PacketType.ACK:
          case PacketType.BINARY_ACK:
            this.onack(packet);
            break;

          case PacketType.DISCONNECT:
            this.ondisconnect();
            break;

          case PacketType.CONNECT_ERROR:
            this.destroy();
            var err = new Error(packet.data.message); // @ts-ignore

            err.data = packet.data.data;
            this.emitReserved("connect_error", err);
            break;
        }
      }
      /**
       * Called upon a server event.
       *
       * @param packet
       * @private
       */

    }, {
      key: "onevent",
      value: function onevent(packet) {
        var args = packet.data || [];

        if (null != packet.id) {
          args.push(this.ack(packet.id));
        }

        if (this.connected) {
          this.emitEvent(args);
        } else {
          this.receiveBuffer.push(Object.freeze(args));
        }
      }
    }, {
      key: "emitEvent",
      value: function emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
          var listeners = this._anyListeners.slice();

          var _iterator = _createForOfIteratorHelper(listeners),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var listener = _step.value;
              listener.apply(this, args);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        _get(_getPrototypeOf(Socket.prototype), "emit", this).apply(this, args);
      }
      /**
       * Produces an ack callback to emit with an event.
       *
       * @private
       */

    }, {
      key: "ack",
      value: function ack(id) {
        var self = this;
        var sent = false;
        return function () {
          // prevent double callbacks
          if (sent) return;
          sent = true;

          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          self.packet({
            type: PacketType.ACK,
            id: id,
            data: args
          });
        };
      }
      /**
       * Called upon a server acknowlegement.
       *
       * @param packet
       * @private
       */

    }, {
      key: "onack",
      value: function onack(packet) {
        var ack = this.acks[packet.id];

        if ("function" === typeof ack) {
          ack.apply(this, packet.data);
          delete this.acks[packet.id];
        }
      }
      /**
       * Called upon server connect.
       *
       * @private
       */

    }, {
      key: "onconnect",
      value: function onconnect(id) {
        this.id = id;
        this.connected = true;
        this.emitBuffered();
        this.emitReserved("connect");
      }
      /**
       * Emit buffered events (received and emitted).
       *
       * @private
       */

    }, {
      key: "emitBuffered",
      value: function emitBuffered() {
        var _this4 = this;

        this.receiveBuffer.forEach(function (args) {
          return _this4.emitEvent(args);
        });
        this.receiveBuffer = [];
        this.sendBuffer.forEach(function (packet) {
          _this4.notifyOutgoingListeners(packet);

          _this4.packet(packet);
        });
        this.sendBuffer = [];
      }
      /**
       * Called upon server disconnect.
       *
       * @private
       */

    }, {
      key: "ondisconnect",
      value: function ondisconnect() {
        this.destroy();
        this.onclose("io server disconnect");
      }
      /**
       * Called upon forced client/server side disconnections,
       * this method ensures the manager stops tracking us and
       * that reconnections don't get triggered for this.
       *
       * @private
       */

    }, {
      key: "destroy",
      value: function destroy() {
        if (this.subs) {
          // clean subscriptions to avoid reconnections
          this.subs.forEach(function (subDestroy) {
            return subDestroy();
          });
          this.subs = undefined;
        }

        this.io["_destroy"](this);
      }
      /**
       * Disconnects the socket manually.
       *
       * @return self
       * @public
       */

    }, {
      key: "disconnect",
      value: function disconnect() {
        if (this.connected) {
          this.packet({
            type: PacketType.DISCONNECT
          });
        } // remove socket from pool


        this.destroy();

        if (this.connected) {
          // fire events
          this.onclose("io client disconnect");
        }

        return this;
      }
      /**
       * Alias for disconnect()
       *
       * @return self
       * @public
       */

    }, {
      key: "close",
      value: function close() {
        return this.disconnect();
      }
      /**
       * Sets the compress flag.
       *
       * @param compress - if `true`, compresses the sending data
       * @return self
       * @public
       */

    }, {
      key: "compress",
      value: function compress(_compress) {
        this.flags.compress = _compress;
        return this;
      }
      /**
       * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
       * ready to send messages.
       *
       * @returns self
       * @public
       */

    }, {
      key: "volatile",
      get: function get() {
        this.flags["volatile"] = true;
        return this;
      }
      /**
       * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
       * given number of milliseconds have elapsed without an acknowledgement from the server:
       *
       * ```
       * socket.timeout(5000).emit("my-event", (err) => {
       *   if (err) {
       *     // the server did not acknowledge the event in the given delay
       *   }
       * });
       * ```
       *
       * @returns self
       * @public
       */

    }, {
      key: "timeout",
      value: function timeout(_timeout) {
        this.flags.timeout = _timeout;
        return this;
      }
      /**
       * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
       * callback.
       *
       * @param listener
       * @public
       */

    }, {
      key: "onAny",
      value: function onAny(listener) {
        this._anyListeners = this._anyListeners || [];

        this._anyListeners.push(listener);

        return this;
      }
      /**
       * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
       * callback. The listener is added to the beginning of the listeners array.
       *
       * @param listener
       * @public
       */

    }, {
      key: "prependAny",
      value: function prependAny(listener) {
        this._anyListeners = this._anyListeners || [];

        this._anyListeners.unshift(listener);

        return this;
      }
      /**
       * Removes the listener that will be fired when any event is emitted.
       *
       * @param listener
       * @public
       */

    }, {
      key: "offAny",
      value: function offAny(listener) {
        if (!this._anyListeners) {
          return this;
        }

        if (listener) {
          var listeners = this._anyListeners;

          for (var i = 0; i < listeners.length; i++) {
            if (listener === listeners[i]) {
              listeners.splice(i, 1);
              return this;
            }
          }
        } else {
          this._anyListeners = [];
        }

        return this;
      }
      /**
       * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
       * e.g. to remove listeners.
       *
       * @public
       */

    }, {
      key: "listenersAny",
      value: function listenersAny() {
        return this._anyListeners || [];
      }
      /**
       * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
       * callback.
       *
       * @param listener
       *
       * <pre><code>
       *
       * socket.onAnyOutgoing((event, ...args) => {
       *   console.log(event);
       * });
       *
       * </pre></code>
       *
       * @public
       */

    }, {
      key: "onAnyOutgoing",
      value: function onAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];

        this._anyOutgoingListeners.push(listener);

        return this;
      }
      /**
       * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
       * callback. The listener is added to the beginning of the listeners array.
       *
       * @param listener
       *
       * <pre><code>
       *
       * socket.prependAnyOutgoing((event, ...args) => {
       *   console.log(event);
       * });
       *
       * </pre></code>
       *
       * @public
       */

    }, {
      key: "prependAnyOutgoing",
      value: function prependAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];

        this._anyOutgoingListeners.unshift(listener);

        return this;
      }
      /**
       * Removes the listener that will be fired when any event is emitted.
       *
       * @param listener
       *
       * <pre><code>
       *
       * const handler = (event, ...args) => {
       *   console.log(event);
       * }
       *
       * socket.onAnyOutgoing(handler);
       *
       * // then later
       * socket.offAnyOutgoing(handler);
       *
       * </pre></code>
       *
       * @public
       */

    }, {
      key: "offAnyOutgoing",
      value: function offAnyOutgoing(listener) {
        if (!this._anyOutgoingListeners) {
          return this;
        }

        if (listener) {
          var listeners = this._anyOutgoingListeners;

          for (var i = 0; i < listeners.length; i++) {
            if (listener === listeners[i]) {
              listeners.splice(i, 1);
              return this;
            }
          }
        } else {
          this._anyOutgoingListeners = [];
        }

        return this;
      }
      /**
       * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
       * e.g. to remove listeners.
       *
       * @public
       */

    }, {
      key: "listenersAnyOutgoing",
      value: function listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
      }
      /**
       * Notify the listeners for each packet sent
       *
       * @param packet
       *
       * @private
       */

    }, {
      key: "notifyOutgoingListeners",
      value: function notifyOutgoingListeners(packet) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
          var listeners = this._anyOutgoingListeners.slice();

          var _iterator2 = _createForOfIteratorHelper(listeners),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var listener = _step2.value;
              listener.apply(this, packet.data);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    }]);

    return Socket;
  }(Emitter);

  /**
   * Initialize backoff timer with `opts`.
   *
   * - `min` initial timeout in milliseconds [100]
   * - `max` max timeout [10000]
   * - `jitter` [0]
   * - `factor` [2]
   *
   * @param {Object} opts
   * @api public
   */
  function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
  }
  /**
   * Return the backoff duration.
   *
   * @return {Number}
   * @api public
   */

  Backoff.prototype.duration = function () {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);

    if (this.jitter) {
      var rand = Math.random();
      var deviation = Math.floor(rand * this.jitter * ms);
      ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }

    return Math.min(ms, this.max) | 0;
  };
  /**
   * Reset the number of attempts.
   *
   * @api public
   */


  Backoff.prototype.reset = function () {
    this.attempts = 0;
  };
  /**
   * Set the minimum duration
   *
   * @api public
   */


  Backoff.prototype.setMin = function (min) {
    this.ms = min;
  };
  /**
   * Set the maximum duration
   *
   * @api public
   */


  Backoff.prototype.setMax = function (max) {
    this.max = max;
  };
  /**
   * Set the jitter
   *
   * @api public
   */


  Backoff.prototype.setJitter = function (jitter) {
    this.jitter = jitter;
  };

  var Manager = /*#__PURE__*/function (_Emitter) {
    _inherits(Manager, _Emitter);

    var _super = _createSuper(Manager);

    function Manager(uri, opts) {
      var _this;

      _classCallCheck(this, Manager);

      var _a;

      _this = _super.call(this);
      _this.nsps = {};
      _this.subs = [];

      if (uri && "object" === _typeof(uri)) {
        opts = uri;
        uri = undefined;
      }

      opts = opts || {};
      opts.path = opts.path || "/socket.io";
      _this.opts = opts;
      installTimerFunctions(_assertThisInitialized(_this), opts);

      _this.reconnection(opts.reconnection !== false);

      _this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);

      _this.reconnectionDelay(opts.reconnectionDelay || 1000);

      _this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);

      _this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);

      _this.backoff = new Backoff({
        min: _this.reconnectionDelay(),
        max: _this.reconnectionDelayMax(),
        jitter: _this.randomizationFactor()
      });

      _this.timeout(null == opts.timeout ? 20000 : opts.timeout);

      _this._readyState = "closed";
      _this.uri = uri;

      var _parser = opts.parser || parser;

      _this.encoder = new _parser.Encoder();
      _this.decoder = new _parser.Decoder();
      _this._autoConnect = opts.autoConnect !== false;
      if (_this._autoConnect) _this.open();
      return _this;
    }

    _createClass(Manager, [{
      key: "reconnection",
      value: function reconnection(v) {
        if (!arguments.length) return this._reconnection;
        this._reconnection = !!v;
        return this;
      }
    }, {
      key: "reconnectionAttempts",
      value: function reconnectionAttempts(v) {
        if (v === undefined) return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
      }
    }, {
      key: "reconnectionDelay",
      value: function reconnectionDelay(v) {
        var _a;

        if (v === undefined) return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
        return this;
      }
    }, {
      key: "randomizationFactor",
      value: function randomizationFactor(v) {
        var _a;

        if (v === undefined) return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
        return this;
      }
    }, {
      key: "reconnectionDelayMax",
      value: function reconnectionDelayMax(v) {
        var _a;

        if (v === undefined) return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
        return this;
      }
    }, {
      key: "timeout",
      value: function timeout(v) {
        if (!arguments.length) return this._timeout;
        this._timeout = v;
        return this;
      }
      /**
       * Starts trying to reconnect if reconnection is enabled and we have not
       * started reconnecting yet
       *
       * @private
       */

    }, {
      key: "maybeReconnectOnOpen",
      value: function maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
          // keeps reconnection from firing twice for the same reconnection loop
          this.reconnect();
        }
      }
      /**
       * Sets the current transport `socket`.
       *
       * @param {Function} fn - optional, callback
       * @return self
       * @public
       */

    }, {
      key: "open",
      value: function open(fn) {
        var _this2 = this;

        if (~this._readyState.indexOf("open")) return this;
        this.engine = new Socket$1(this.uri, this.opts);
        var socket = this.engine;
        var self = this;
        this._readyState = "opening";
        this.skipReconnect = false; // emit `open`

        var openSubDestroy = on(socket, "open", function () {
          self.onopen();
          fn && fn();
        }); // emit `error`

        var errorSub = on(socket, "error", function (err) {
          self.cleanup();
          self._readyState = "closed";

          _this2.emitReserved("error", err);

          if (fn) {
            fn(err);
          } else {
            // Only do this if there is no fn to handle the error
            self.maybeReconnectOnOpen();
          }
        });

        if (false !== this._timeout) {
          var timeout = this._timeout;

          if (timeout === 0) {
            openSubDestroy(); // prevents a race condition with the 'open' event
          } // set timer


          var timer = this.setTimeoutFn(function () {
            openSubDestroy();
            socket.close(); // @ts-ignore

            socket.emit("error", new Error("timeout"));
          }, timeout);

          if (this.opts.autoUnref) {
            timer.unref();
          }

          this.subs.push(function subDestroy() {
            clearTimeout(timer);
          });
        }

        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
      }
      /**
       * Alias for open()
       *
       * @return self
       * @public
       */

    }, {
      key: "connect",
      value: function connect(fn) {
        return this.open(fn);
      }
      /**
       * Called upon transport open.
       *
       * @private
       */

    }, {
      key: "onopen",
      value: function onopen() {
        // clear old subs
        this.cleanup(); // mark as open

        this._readyState = "open";
        this.emitReserved("open"); // add new subs

        var socket = this.engine;
        this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
      }
      /**
       * Called upon a ping.
       *
       * @private
       */

    }, {
      key: "onping",
      value: function onping() {
        this.emitReserved("ping");
      }
      /**
       * Called with data.
       *
       * @private
       */

    }, {
      key: "ondata",
      value: function ondata(data) {
        this.decoder.add(data);
      }
      /**
       * Called when parser fully decodes a packet.
       *
       * @private
       */

    }, {
      key: "ondecoded",
      value: function ondecoded(packet) {
        this.emitReserved("packet", packet);
      }
      /**
       * Called upon socket error.
       *
       * @private
       */

    }, {
      key: "onerror",
      value: function onerror(err) {
        this.emitReserved("error", err);
      }
      /**
       * Creates a new socket for the given `nsp`.
       *
       * @return {Socket}
       * @public
       */

    }, {
      key: "socket",
      value: function socket(nsp, opts) {
        var socket = this.nsps[nsp];

        if (!socket) {
          socket = new Socket(this, nsp, opts);
          this.nsps[nsp] = socket;
        }

        return socket;
      }
      /**
       * Called upon a socket close.
       *
       * @param socket
       * @private
       */

    }, {
      key: "_destroy",
      value: function _destroy(socket) {
        var nsps = Object.keys(this.nsps);

        for (var _i = 0, _nsps = nsps; _i < _nsps.length; _i++) {
          var nsp = _nsps[_i];
          var _socket = this.nsps[nsp];

          if (_socket.active) {
            return;
          }
        }

        this._close();
      }
      /**
       * Writes a packet.
       *
       * @param packet
       * @private
       */

    }, {
      key: "_packet",
      value: function _packet(packet) {
        var encodedPackets = this.encoder.encode(packet);

        for (var i = 0; i < encodedPackets.length; i++) {
          this.engine.write(encodedPackets[i], packet.options);
        }
      }
      /**
       * Clean up transport subscriptions and packet buffer.
       *
       * @private
       */

    }, {
      key: "cleanup",
      value: function cleanup() {
        this.subs.forEach(function (subDestroy) {
          return subDestroy();
        });
        this.subs.length = 0;
        this.decoder.destroy();
      }
      /**
       * Close the current socket.
       *
       * @private
       */

    }, {
      key: "_close",
      value: function _close() {
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
        if (this.engine) this.engine.close();
      }
      /**
       * Alias for close()
       *
       * @private
       */

    }, {
      key: "disconnect",
      value: function disconnect() {
        return this._close();
      }
      /**
       * Called upon engine close.
       *
       * @private
       */

    }, {
      key: "onclose",
      value: function onclose(reason, description) {
        this.cleanup();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason, description);

        if (this._reconnection && !this.skipReconnect) {
          this.reconnect();
        }
      }
      /**
       * Attempt a reconnection.
       *
       * @private
       */

    }, {
      key: "reconnect",
      value: function reconnect() {
        var _this3 = this;

        if (this._reconnecting || this.skipReconnect) return this;
        var self = this;

        if (this.backoff.attempts >= this._reconnectionAttempts) {
          this.backoff.reset();
          this.emitReserved("reconnect_failed");
          this._reconnecting = false;
        } else {
          var delay = this.backoff.duration();
          this._reconnecting = true;
          var timer = this.setTimeoutFn(function () {
            if (self.skipReconnect) return;

            _this3.emitReserved("reconnect_attempt", self.backoff.attempts); // check again for the case socket closed in above events


            if (self.skipReconnect) return;
            self.open(function (err) {
              if (err) {
                self._reconnecting = false;
                self.reconnect();

                _this3.emitReserved("reconnect_error", err);
              } else {
                self.onreconnect();
              }
            });
          }, delay);

          if (this.opts.autoUnref) {
            timer.unref();
          }

          this.subs.push(function subDestroy() {
            clearTimeout(timer);
          });
        }
      }
      /**
       * Called upon successful reconnect.
       *
       * @private
       */

    }, {
      key: "onreconnect",
      value: function onreconnect() {
        var attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
      }
    }]);

    return Manager;
  }(Emitter);

  /**
   * Managers cache.
   */

  var cache = {};

  function lookup(uri, opts) {
    if (_typeof(uri) === "object") {
      opts = uri;
      uri = undefined;
    }

    opts = opts || {};
    var parsed = url(uri, opts.path || "/socket.io");
    var source = parsed.source;
    var id = parsed.id;
    var path = parsed.path;
    var sameNamespace = cache[id] && path in cache[id]["nsps"];
    var newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
    var io;

    if (newConnection) {
      io = new Manager(source, opts);
    } else {
      if (!cache[id]) {
        cache[id] = new Manager(source, opts);
      }

      io = cache[id];
    }

    if (parsed.query && !opts.query) {
      opts.query = parsed.queryKey;
    }

    return io.socket(parsed.path, opts);
  } // so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
  // namespace (e.g. `io.connect(...)`), for backward compatibility


  Object.assign(lookup, {
    Manager: Manager,
    Socket: Socket,
    io: lookup,
    connect: lookup
  });

  let canvas$1;
  let ctx;
  class Canvas {
    constructor() {
      canvas$1 = document.createElement("canvas");
      document.body.appendChild(canvas$1);

      canvas$1.width = window.innerWidth;
      canvas$1.height = window.innerHeight;
      ctx = canvas$1.getContext("2d", { willReadFrequently: true });
      this.clear();
    }

    get element() {
      return canvas$1;
    }

    clear() {
      const w = canvas$1.width;
      const h = canvas$1.height;
      ctx.clearRect(0, 0, w, h);
      // ctx.fillStyle = "#222";
      // ctx.fillRect(0, 0, w, h);
      let id = this.getRegion(0, 0, w, h);
      ctx.putImageData(this.grain(id, 24, false), 0, 0);
    }

    putImage(img, x, y) {
      return ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        x,
        y,
        img.width,
        img.height
      );
    }

    getRegion(x, y, w, h) {
      let idata = ctx.getImageData(x, y, w, h);
      return idata;
    }

    grain(imgData, amount, alpha = false) {
      let id = imgData.data.length;
      while (id >= 0) {
        var noise = ~~((Math.random() - 0.5) * amount);
        imgData.data[id] += noise;
        imgData.data[id + 1] += noise;
        imgData.data[id + 2] += noise;
        if (alpha) imgData.data[id + 3] += noise;
        id -= 4;
      }
      return imgData;
    }
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var hammer = {exports: {}};

  (function (module) {
    (function (window, document, exportName, undefined$1) {

      var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
      var TEST_ELEMENT = document.createElement('div');
      var TYPE_FUNCTION = 'function';
      var round = Math.round;
      var abs = Math.abs;
      var now = Date.now;
      /**
       * set a timeout with a given scope
       * @param {Function} fn
       * @param {Number} timeout
       * @param {Object} context
       * @returns {number}
       */

      function setTimeoutContext(fn, timeout, context) {
        return setTimeout(bindFn(fn, context), timeout);
      }
      /**
       * if the argument is an array, we want to execute the fn on each entry
       * if it aint an array we don't want to do a thing.
       * this is used by all the methods that accept a single and array argument.
       * @param {*|Array} arg
       * @param {String} fn
       * @param {Object} [context]
       * @returns {Boolean}
       */


      function invokeArrayArg(arg, fn, context) {
        if (Array.isArray(arg)) {
          each(arg, context[fn], context);
          return true;
        }

        return false;
      }
      /**
       * walk objects and arrays
       * @param {Object} obj
       * @param {Function} iterator
       * @param {Object} context
       */


      function each(obj, iterator, context) {
        var i;

        if (!obj) {
          return;
        }

        if (obj.forEach) {
          obj.forEach(iterator, context);
        } else if (obj.length !== undefined$1) {
          i = 0;

          while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
          }
        } else {
          for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
          }
        }
      }
      /**
       * wrap a method with a deprecation warning and stack trace
       * @param {Function} method
       * @param {String} name
       * @param {String} message
       * @returns {Function} A new function wrapping the supplied method.
       */


      function deprecate(method, name, message) {
        var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
        return function () {
          var e = new Error('get-stack-trace');
          var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '').replace(/^\s+at\s+/gm, '').replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
          var log = window.console && (window.console.warn || window.console.log);

          if (log) {
            log.call(window.console, deprecationMessage, stack);
          }

          return method.apply(this, arguments);
        };
      }
      /**
       * extend object.
       * means that properties in dest will be overwritten by the ones in src.
       * @param {Object} target
       * @param {...Object} objects_to_assign
       * @returns {Object} target
       */


      var assign;

      if (typeof Object.assign !== 'function') {
        assign = function assign(target) {
          if (target === undefined$1 || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
          }

          var output = Object(target);

          for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];

            if (source !== undefined$1 && source !== null) {
              for (var nextKey in source) {
                if (source.hasOwnProperty(nextKey)) {
                  output[nextKey] = source[nextKey];
                }
              }
            }
          }

          return output;
        };
      } else {
        assign = Object.assign;
      }
      /**
       * extend object.
       * means that properties in dest will be overwritten by the ones in src.
       * @param {Object} dest
       * @param {Object} src
       * @param {Boolean} [merge=false]
       * @returns {Object} dest
       */


      var extend = deprecate(function extend(dest, src, merge) {
        var keys = Object.keys(src);
        var i = 0;

        while (i < keys.length) {
          if (!merge || merge && dest[keys[i]] === undefined$1) {
            dest[keys[i]] = src[keys[i]];
          }

          i++;
        }

        return dest;
      }, 'extend', 'Use `assign`.');
      /**
       * merge the values from src in the dest.
       * means that properties that exist in dest will not be overwritten by src
       * @param {Object} dest
       * @param {Object} src
       * @returns {Object} dest
       */

      var merge = deprecate(function merge(dest, src) {
        return extend(dest, src, true);
      }, 'merge', 'Use `assign`.');
      /**
       * simple class inheritance
       * @param {Function} child
       * @param {Function} base
       * @param {Object} [properties]
       */

      function inherit(child, base, properties) {
        var baseP = base.prototype,
            childP;
        childP = child.prototype = Object.create(baseP);
        childP.constructor = child;
        childP._super = baseP;

        if (properties) {
          assign(childP, properties);
        }
      }
      /**
       * simple function bind
       * @param {Function} fn
       * @param {Object} context
       * @returns {Function}
       */


      function bindFn(fn, context) {
        return function boundFn() {
          return fn.apply(context, arguments);
        };
      }
      /**
       * let a boolean value also be a function that must return a boolean
       * this first item in args will be used as the context
       * @param {Boolean|Function} val
       * @param {Array} [args]
       * @returns {Boolean}
       */


      function boolOrFn(val, args) {
        if (_typeof(val) == TYPE_FUNCTION) {
          return val.apply(args ? args[0] || undefined$1 : undefined$1, args);
        }

        return val;
      }
      /**
       * use the val2 when val1 is undefined
       * @param {*} val1
       * @param {*} val2
       * @returns {*}
       */


      function ifUndefined(val1, val2) {
        return val1 === undefined$1 ? val2 : val1;
      }
      /**
       * addEventListener with multiple events at once
       * @param {EventTarget} target
       * @param {String} types
       * @param {Function} handler
       */


      function addEventListeners(target, types, handler) {
        each(splitStr(types), function (type) {
          target.addEventListener(type, handler, false);
        });
      }
      /**
       * removeEventListener with multiple events at once
       * @param {EventTarget} target
       * @param {String} types
       * @param {Function} handler
       */


      function removeEventListeners(target, types, handler) {
        each(splitStr(types), function (type) {
          target.removeEventListener(type, handler, false);
        });
      }
      /**
       * find if a node is in the given parent
       * @method hasParent
       * @param {HTMLElement} node
       * @param {HTMLElement} parent
       * @return {Boolean} found
       */


      function hasParent(node, parent) {
        while (node) {
          if (node == parent) {
            return true;
          }

          node = node.parentNode;
        }

        return false;
      }
      /**
       * small indexOf wrapper
       * @param {String} str
       * @param {String} find
       * @returns {Boolean} found
       */


      function inStr(str, find) {
        return str.indexOf(find) > -1;
      }
      /**
       * split string on whitespace
       * @param {String} str
       * @returns {Array} words
       */


      function splitStr(str) {
        return str.trim().split(/\s+/g);
      }
      /**
       * find if a array contains the object using indexOf or a simple polyFill
       * @param {Array} src
       * @param {String} find
       * @param {String} [findByKey]
       * @return {Boolean|Number} false when not found, or the index
       */


      function inArray(src, find, findByKey) {
        if (src.indexOf && !findByKey) {
          return src.indexOf(find);
        } else {
          var i = 0;

          while (i < src.length) {
            if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
              return i;
            }

            i++;
          }

          return -1;
        }
      }
      /**
       * convert array-like objects to real arrays
       * @param {Object} obj
       * @returns {Array}
       */


      function toArray(obj) {
        return Array.prototype.slice.call(obj, 0);
      }
      /**
       * unique array with objects based on a key (like 'id') or just by the array's value
       * @param {Array} src [{id:1},{id:2},{id:1}]
       * @param {String} [key]
       * @param {Boolean} [sort=False]
       * @returns {Array} [{id:1},{id:2}]
       */


      function uniqueArray(src, key, sort) {
        var results = [];
        var values = [];
        var i = 0;

        while (i < src.length) {
          var val = key ? src[i][key] : src[i];

          if (inArray(values, val) < 0) {
            results.push(src[i]);
          }

          values[i] = val;
          i++;
        }

        if (sort) {
          if (!key) {
            results = results.sort();
          } else {
            results = results.sort(function sortUniqueArray(a, b) {
              return a[key] > b[key];
            });
          }
        }

        return results;
      }
      /**
       * get the prefixed property
       * @param {Object} obj
       * @param {String} property
       * @returns {String|Undefined} prefixed
       */


      function prefixed(obj, property) {
        var prefix, prop;
        var camelProp = property[0].toUpperCase() + property.slice(1);
        var i = 0;

        while (i < VENDOR_PREFIXES.length) {
          prefix = VENDOR_PREFIXES[i];
          prop = prefix ? prefix + camelProp : property;

          if (prop in obj) {
            return prop;
          }

          i++;
        }

        return undefined$1;
      }
      /**
       * get a unique id
       * @returns {number} uniqueId
       */


      var _uniqueId = 1;

      function uniqueId() {
        return _uniqueId++;
      }
      /**
       * get the window object of an element
       * @param {HTMLElement} element
       * @returns {DocumentView|Window}
       */


      function getWindowForElement(element) {
        var doc = element.ownerDocument || element;
        return doc.defaultView || doc.parentWindow || window;
      }

      var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
      var SUPPORT_TOUCH = ('ontouchstart' in window);
      var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined$1;
      var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
      var INPUT_TYPE_TOUCH = 'touch';
      var INPUT_TYPE_PEN = 'pen';
      var INPUT_TYPE_MOUSE = 'mouse';
      var INPUT_TYPE_KINECT = 'kinect';
      var COMPUTE_INTERVAL = 25;
      var INPUT_START = 1;
      var INPUT_MOVE = 2;
      var INPUT_END = 4;
      var INPUT_CANCEL = 8;
      var DIRECTION_NONE = 1;
      var DIRECTION_LEFT = 2;
      var DIRECTION_RIGHT = 4;
      var DIRECTION_UP = 8;
      var DIRECTION_DOWN = 16;
      var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
      var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
      var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
      var PROPS_XY = ['x', 'y'];
      var PROPS_CLIENT_XY = ['clientX', 'clientY'];
      /**
       * create new input type manager
       * @param {Manager} manager
       * @param {Function} callback
       * @returns {Input}
       * @constructor
       */

      function Input(manager, callback) {
        var self = this;
        this.manager = manager;
        this.callback = callback;
        this.element = manager.element;
        this.target = manager.options.inputTarget; // smaller wrapper around the handler, for the scope and the enabled state of the manager,
        // so when disabled the input events are completely bypassed.

        this.domHandler = function (ev) {
          if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
          }
        };

        this.init();
      }

      Input.prototype = {
        /**
         * should handle the inputEvent data and trigger the callback
         * @virtual
         */
        handler: function handler() {},

        /**
         * bind the events
         */
        init: function init() {
          this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
          this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
          this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
        },

        /**
         * unbind the events
         */
        destroy: function destroy() {
          this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
          this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
          this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
        }
      };
      /**
       * create new input type manager
       * called by the Manager constructor
       * @param {Hammer} manager
       * @returns {Input}
       */

      function createInputInstance(manager) {
        var Type;
        var inputClass = manager.options.inputClass;

        if (inputClass) {
          Type = inputClass;
        } else if (SUPPORT_POINTER_EVENTS) {
          Type = PointerEventInput;
        } else if (SUPPORT_ONLY_TOUCH) {
          Type = TouchInput;
        } else if (!SUPPORT_TOUCH) {
          Type = MouseInput;
        } else {
          Type = TouchMouseInput;
        }

        return new Type(manager, inputHandler);
      }
      /**
       * handle input events
       * @param {Manager} manager
       * @param {String} eventType
       * @param {Object} input
       */


      function inputHandler(manager, eventType, input) {
        var pointersLen = input.pointers.length;
        var changedPointersLen = input.changedPointers.length;
        var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
        var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
        input.isFirst = !!isFirst;
        input.isFinal = !!isFinal;

        if (isFirst) {
          manager.session = {};
        } // source event is the normalized value of the domEvents
        // like 'touchstart, mouseup, pointerdown'


        input.eventType = eventType; // compute scale, rotation etc

        computeInputData(manager, input); // emit secret event

        manager.emit('hammer.input', input);
        manager.recognize(input);
        manager.session.prevInput = input;
      }
      /**
       * extend the data with some usable properties like scale, rotate, velocity etc
       * @param {Object} manager
       * @param {Object} input
       */


      function computeInputData(manager, input) {
        var session = manager.session;
        var pointers = input.pointers;
        var pointersLength = pointers.length; // store the first input to calculate the distance and direction

        if (!session.firstInput) {
          session.firstInput = simpleCloneInputData(input);
        } // to compute scale and rotation we need to store the multiple touches


        if (pointersLength > 1 && !session.firstMultiple) {
          session.firstMultiple = simpleCloneInputData(input);
        } else if (pointersLength === 1) {
          session.firstMultiple = false;
        }

        var firstInput = session.firstInput;
        var firstMultiple = session.firstMultiple;
        var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
        var center = input.center = getCenter(pointers);
        input.timeStamp = now();
        input.deltaTime = input.timeStamp - firstInput.timeStamp;
        input.angle = getAngle(offsetCenter, center);
        input.distance = getDistance(offsetCenter, center);
        computeDeltaXY(session, input);
        input.offsetDirection = getDirection(input.deltaX, input.deltaY);
        var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
        input.overallVelocityX = overallVelocity.x;
        input.overallVelocityY = overallVelocity.y;
        input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
        input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
        input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
        input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
        computeIntervalInputData(session, input); // find the correct target

        var target = manager.element;

        if (hasParent(input.srcEvent.target, target)) {
          target = input.srcEvent.target;
        }

        input.target = target;
      }

      function computeDeltaXY(session, input) {
        var center = input.center;
        var offset = session.offsetDelta || {};
        var prevDelta = session.prevDelta || {};
        var prevInput = session.prevInput || {};

        if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
          prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
          };
          offset = session.offsetDelta = {
            x: center.x,
            y: center.y
          };
        }

        input.deltaX = prevDelta.x + (center.x - offset.x);
        input.deltaY = prevDelta.y + (center.y - offset.y);
      }
      /**
       * velocity is calculated every x ms
       * @param {Object} session
       * @param {Object} input
       */


      function computeIntervalInputData(session, input) {
        var last = session.lastInterval || input,
            deltaTime = input.timeStamp - last.timeStamp,
            velocity,
            velocityX,
            velocityY,
            direction;

        if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined$1)) {
          var deltaX = input.deltaX - last.deltaX;
          var deltaY = input.deltaY - last.deltaY;
          var v = getVelocity(deltaTime, deltaX, deltaY);
          velocityX = v.x;
          velocityY = v.y;
          velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
          direction = getDirection(deltaX, deltaY);
          session.lastInterval = input;
        } else {
          // use latest velocity info if it doesn't overtake a minimum period
          velocity = last.velocity;
          velocityX = last.velocityX;
          velocityY = last.velocityY;
          direction = last.direction;
        }

        input.velocity = velocity;
        input.velocityX = velocityX;
        input.velocityY = velocityY;
        input.direction = direction;
      }
      /**
       * create a simple clone from the input used for storage of firstInput and firstMultiple
       * @param {Object} input
       * @returns {Object} clonedInputData
       */


      function simpleCloneInputData(input) {
        // make a simple copy of the pointers because we will get a reference if we don't
        // we only need clientXY for the calculations
        var pointers = [];
        var i = 0;

        while (i < input.pointers.length) {
          pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
          };
          i++;
        }

        return {
          timeStamp: now(),
          pointers: pointers,
          center: getCenter(pointers),
          deltaX: input.deltaX,
          deltaY: input.deltaY
        };
      }
      /**
       * get the center of all the pointers
       * @param {Array} pointers
       * @return {Object} center contains `x` and `y` properties
       */


      function getCenter(pointers) {
        var pointersLength = pointers.length; // no need to loop when only one touch

        if (pointersLength === 1) {
          return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
          };
        }

        var x = 0,
            y = 0,
            i = 0;

        while (i < pointersLength) {
          x += pointers[i].clientX;
          y += pointers[i].clientY;
          i++;
        }

        return {
          x: round(x / pointersLength),
          y: round(y / pointersLength)
        };
      }
      /**
       * calculate the velocity between two points. unit is in px per ms.
       * @param {Number} deltaTime
       * @param {Number} x
       * @param {Number} y
       * @return {Object} velocity `x` and `y`
       */


      function getVelocity(deltaTime, x, y) {
        return {
          x: x / deltaTime || 0,
          y: y / deltaTime || 0
        };
      }
      /**
       * get the direction between two points
       * @param {Number} x
       * @param {Number} y
       * @return {Number} direction
       */


      function getDirection(x, y) {
        if (x === y) {
          return DIRECTION_NONE;
        }

        if (abs(x) >= abs(y)) {
          return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
        }

        return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
      }
      /**
       * calculate the absolute distance between two points
       * @param {Object} p1 {x, y}
       * @param {Object} p2 {x, y}
       * @param {Array} [props] containing x and y keys
       * @return {Number} distance
       */


      function getDistance(p1, p2, props) {
        if (!props) {
          props = PROPS_XY;
        }

        var x = p2[props[0]] - p1[props[0]],
            y = p2[props[1]] - p1[props[1]];
        return Math.sqrt(x * x + y * y);
      }
      /**
       * calculate the angle between two coordinates
       * @param {Object} p1
       * @param {Object} p2
       * @param {Array} [props] containing x and y keys
       * @return {Number} angle
       */


      function getAngle(p1, p2, props) {
        if (!props) {
          props = PROPS_XY;
        }

        var x = p2[props[0]] - p1[props[0]],
            y = p2[props[1]] - p1[props[1]];
        return Math.atan2(y, x) * 180 / Math.PI;
      }
      /**
       * calculate the rotation degrees between two pointersets
       * @param {Array} start array of pointers
       * @param {Array} end array of pointers
       * @return {Number} rotation
       */


      function getRotation(start, end) {
        return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
      }
      /**
       * calculate the scale factor between two pointersets
       * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
       * @param {Array} start array of pointers
       * @param {Array} end array of pointers
       * @return {Number} scale
       */


      function getScale(start, end) {
        return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
      }

      var MOUSE_INPUT_MAP = {
        mousedown: INPUT_START,
        mousemove: INPUT_MOVE,
        mouseup: INPUT_END
      };
      var MOUSE_ELEMENT_EVENTS = 'mousedown';
      var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
      /**
       * Mouse events input
       * @constructor
       * @extends Input
       */

      function MouseInput() {
        this.evEl = MOUSE_ELEMENT_EVENTS;
        this.evWin = MOUSE_WINDOW_EVENTS;
        this.pressed = false; // mousedown state

        Input.apply(this, arguments);
      }

      inherit(MouseInput, Input, {
        /**
         * handle mouse events
         * @param {Object} ev
         */
        handler: function MEhandler(ev) {
          var eventType = MOUSE_INPUT_MAP[ev.type]; // on start we want to have the left mouse button down

          if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
          }

          if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
          } // mouse must be down


          if (!this.pressed) {
            return;
          }

          if (eventType & INPUT_END) {
            this.pressed = false;
          }

          this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
          });
        }
      });
      var POINTER_INPUT_MAP = {
        pointerdown: INPUT_START,
        pointermove: INPUT_MOVE,
        pointerup: INPUT_END,
        pointercancel: INPUT_CANCEL,
        pointerout: INPUT_CANCEL
      }; // in IE10 the pointer types is defined as an enum

      var IE10_POINTER_TYPE_ENUM = {
        2: INPUT_TYPE_TOUCH,
        3: INPUT_TYPE_PEN,
        4: INPUT_TYPE_MOUSE,
        5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816

      };
      var POINTER_ELEMENT_EVENTS = 'pointerdown';
      var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel'; // IE10 has prefixed support, and case-sensitive

      if (window.MSPointerEvent && !window.PointerEvent) {
        POINTER_ELEMENT_EVENTS = 'MSPointerDown';
        POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
      }
      /**
       * Pointer events input
       * @constructor
       * @extends Input
       */


      function PointerEventInput() {
        this.evEl = POINTER_ELEMENT_EVENTS;
        this.evWin = POINTER_WINDOW_EVENTS;
        Input.apply(this, arguments);
        this.store = this.manager.session.pointerEvents = [];
      }

      inherit(PointerEventInput, Input, {
        /**
         * handle mouse events
         * @param {Object} ev
         */
        handler: function PEhandler(ev) {
          var store = this.store;
          var removePointer = false;
          var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
          var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
          var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
          var isTouch = pointerType == INPUT_TYPE_TOUCH; // get index of the event in the store

          var storeIndex = inArray(store, ev.pointerId, 'pointerId'); // start and mouse must be down

          if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
              store.push(ev);
              storeIndex = store.length - 1;
            }
          } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
          } // it not found, so the pointer hasn't been down (so it's probably a hover)


          if (storeIndex < 0) {
            return;
          } // update the event in the store


          store[storeIndex] = ev;
          this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
          });

          if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
          }
        }
      });
      var SINGLE_TOUCH_INPUT_MAP = {
        touchstart: INPUT_START,
        touchmove: INPUT_MOVE,
        touchend: INPUT_END,
        touchcancel: INPUT_CANCEL
      };
      var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
      var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
      /**
       * Touch events input
       * @constructor
       * @extends Input
       */

      function SingleTouchInput() {
        this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
        this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
        this.started = false;
        Input.apply(this, arguments);
      }

      inherit(SingleTouchInput, Input, {
        handler: function TEhandler(ev) {
          var type = SINGLE_TOUCH_INPUT_MAP[ev.type]; // should we handle the touch events?

          if (type === INPUT_START) {
            this.started = true;
          }

          if (!this.started) {
            return;
          }

          var touches = normalizeSingleTouches.call(this, ev, type); // when done, reset the started state

          if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
          }

          this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
          });
        }
      });
      /**
       * @this {TouchInput}
       * @param {Object} ev
       * @param {Number} type flag
       * @returns {undefined|Array} [all, changed]
       */

      function normalizeSingleTouches(ev, type) {
        var all = toArray(ev.touches);
        var changed = toArray(ev.changedTouches);

        if (type & (INPUT_END | INPUT_CANCEL)) {
          all = uniqueArray(all.concat(changed), 'identifier', true);
        }

        return [all, changed];
      }

      var TOUCH_INPUT_MAP = {
        touchstart: INPUT_START,
        touchmove: INPUT_MOVE,
        touchend: INPUT_END,
        touchcancel: INPUT_CANCEL
      };
      var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
      /**
       * Multi-user touch events input
       * @constructor
       * @extends Input
       */

      function TouchInput() {
        this.evTarget = TOUCH_TARGET_EVENTS;
        this.targetIds = {};
        Input.apply(this, arguments);
      }

      inherit(TouchInput, Input, {
        handler: function MTEhandler(ev) {
          var type = TOUCH_INPUT_MAP[ev.type];
          var touches = getTouches.call(this, ev, type);

          if (!touches) {
            return;
          }

          this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
          });
        }
      });
      /**
       * @this {TouchInput}
       * @param {Object} ev
       * @param {Number} type flag
       * @returns {undefined|Array} [all, changed]
       */

      function getTouches(ev, type) {
        var allTouches = toArray(ev.touches);
        var targetIds = this.targetIds; // when there is only one touch, the process can be simplified

        if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
          targetIds[allTouches[0].identifier] = true;
          return [allTouches, allTouches];
        }

        var i,
            targetTouches,
            changedTouches = toArray(ev.changedTouches),
            changedTargetTouches = [],
            target = this.target; // get target touches from touches

        targetTouches = allTouches.filter(function (touch) {
          return hasParent(touch.target, target);
        }); // collect touches

        if (type === INPUT_START) {
          i = 0;

          while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
          }
        } // filter changed touches to only contain touches that exist in the collected target ids


        i = 0;

        while (i < changedTouches.length) {
          if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
          } // cleanup removed touches


          if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
          }

          i++;
        }

        if (!changedTargetTouches.length) {
          return;
        }

        return [// merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
      }
      /**
       * Combined touch and mouse input
       *
       * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
       * This because touch devices also emit mouse events while doing a touch.
       *
       * @constructor
       * @extends Input
       */


      var DEDUP_TIMEOUT = 2500;
      var DEDUP_DISTANCE = 25;

      function TouchMouseInput() {
        Input.apply(this, arguments);
        var handler = bindFn(this.handler, this);
        this.touch = new TouchInput(this.manager, handler);
        this.mouse = new MouseInput(this.manager, handler);
        this.primaryTouch = null;
        this.lastTouches = [];
      }

      inherit(TouchMouseInput, Input, {
        /**
         * handle mouse and touch events
         * @param {Hammer} manager
         * @param {String} inputEvent
         * @param {Object} inputData
         */
        handler: function TMEhandler(manager, inputEvent, inputData) {
          var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH,
              isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;

          if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
          } // when we're in a touch event, record touches to  de-dupe synthetic mouse event


          if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
          } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
          }

          this.callback(manager, inputEvent, inputData);
        },

        /**
         * remove the event listeners
         */
        destroy: function destroy() {
          this.touch.destroy();
          this.mouse.destroy();
        }
      });

      function recordTouches(eventType, eventData) {
        if (eventType & INPUT_START) {
          this.primaryTouch = eventData.changedPointers[0].identifier;
          setLastTouch.call(this, eventData);
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
          setLastTouch.call(this, eventData);
        }
      }

      function setLastTouch(eventData) {
        var touch = eventData.changedPointers[0];

        if (touch.identifier === this.primaryTouch) {
          var lastTouch = {
            x: touch.clientX,
            y: touch.clientY
          };
          this.lastTouches.push(lastTouch);
          var lts = this.lastTouches;

          var removeLastTouch = function removeLastTouch() {
            var i = lts.indexOf(lastTouch);

            if (i > -1) {
              lts.splice(i, 1);
            }
          };

          setTimeout(removeLastTouch, DEDUP_TIMEOUT);
        }
      }

      function isSyntheticEvent(eventData) {
        var x = eventData.srcEvent.clientX,
            y = eventData.srcEvent.clientY;

        for (var i = 0; i < this.lastTouches.length; i++) {
          var t = this.lastTouches[i];
          var dx = Math.abs(x - t.x),
              dy = Math.abs(y - t.y);

          if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
          }
        }

        return false;
      }

      var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
      var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined$1; // magical touchAction value

      var TOUCH_ACTION_COMPUTE = 'compute';
      var TOUCH_ACTION_AUTO = 'auto';
      var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented

      var TOUCH_ACTION_NONE = 'none';
      var TOUCH_ACTION_PAN_X = 'pan-x';
      var TOUCH_ACTION_PAN_Y = 'pan-y';
      var TOUCH_ACTION_MAP = getTouchActionProps();
      /**
       * Touch Action
       * sets the touchAction property or uses the js alternative
       * @param {Manager} manager
       * @param {String} value
       * @constructor
       */

      function TouchAction(manager, value) {
        this.manager = manager;
        this.set(value);
      }

      TouchAction.prototype = {
        /**
         * set the touchAction value on the element or enable the polyfill
         * @param {String} value
         */
        set: function set(value) {
          // find out the touch-action by the event handlers
          if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
          }

          if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
          }

          this.actions = value.toLowerCase().trim();
        },

        /**
         * just re-set the touchAction value
         */
        update: function update() {
          this.set(this.manager.options.touchAction);
        },

        /**
         * compute the value for the touchAction property based on the recognizer's settings
         * @returns {String} value
         */
        compute: function compute() {
          var actions = [];
          each(this.manager.recognizers, function (recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
              actions = actions.concat(recognizer.getTouchAction());
            }
          });
          return cleanTouchActions(actions.join(' '));
        },

        /**
         * this method is called on each input cycle and provides the preventing of the browser behavior
         * @param {Object} input
         */
        preventDefaults: function preventDefaults(input) {
          var srcEvent = input.srcEvent;
          var direction = input.offsetDirection; // if the touch action did prevented once this session

          if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
          }

          var actions = this.actions;
          var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
          var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
          var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

          if (hasNone) {
            //do not prevent defaults if this is a tap gesture
            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
              return;
            }
          }

          if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
          }

          if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
            return this.preventSrc(srcEvent);
          }
        },

        /**
         * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
         * @param {Object} srcEvent
         */
        preventSrc: function preventSrc(srcEvent) {
          this.manager.session.prevented = true;
          srcEvent.preventDefault();
        }
      };
      /**
       * when the touchActions are collected they are not a valid value, so we need to clean things up. *
       * @param {String} actions
       * @returns {*}
       */

      function cleanTouchActions(actions) {
        // none
        if (inStr(actions, TOUCH_ACTION_NONE)) {
          return TOUCH_ACTION_NONE;
        }

        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y); // if both pan-x and pan-y are set (different recognizers
        // for different directions, e.g. horizontal pan but vertical swipe?)
        // we need none (as otherwise with pan-x pan-y combined none of these
        // recognizers will work, since the browser would handle all panning

        if (hasPanX && hasPanY) {
          return TOUCH_ACTION_NONE;
        } // pan-x OR pan-y


        if (hasPanX || hasPanY) {
          return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
        } // manipulation


        if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
          return TOUCH_ACTION_MANIPULATION;
        }

        return TOUCH_ACTION_AUTO;
      }

      function getTouchActionProps() {
        if (!NATIVE_TOUCH_ACTION) {
          return false;
        }

        var touchMap = {};
        var cssSupports = window.CSS && window.CSS.supports;
        ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function (val) {
          // If css.supports is not supported but there is native touch-action assume it supports
          // all values. This is the case for IE 10 and 11.
          touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
        });
        return touchMap;
      }
      /**
       * Recognizer flow explained; *
       * All recognizers have the initial state of POSSIBLE when a input session starts.
       * The definition of a input session is from the first input until the last input, with all it's movement in it. *
       * Example session for mouse-input: mousedown -> mousemove -> mouseup
       *
       * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
       * which determines with state it should be.
       *
       * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
       * POSSIBLE to give it another change on the next cycle.
       *
       *               Possible
       *                  |
       *            +-----+---------------+
       *            |                     |
       *      +-----+-----+               |
       *      |           |               |
       *   Failed      Cancelled          |
       *                          +-------+------+
       *                          |              |
       *                      Recognized       Began
       *                                         |
       *                                      Changed
       *                                         |
       *                                  Ended/Recognized
       */


      var STATE_POSSIBLE = 1;
      var STATE_BEGAN = 2;
      var STATE_CHANGED = 4;
      var STATE_ENDED = 8;
      var STATE_RECOGNIZED = STATE_ENDED;
      var STATE_CANCELLED = 16;
      var STATE_FAILED = 32;
      /**
       * Recognizer
       * Every recognizer needs to extend from this class.
       * @constructor
       * @param {Object} options
       */

      function Recognizer(options) {
        this.options = assign({}, this.defaults, options || {});
        this.id = uniqueId();
        this.manager = null; // default is enable true

        this.options.enable = ifUndefined(this.options.enable, true);
        this.state = STATE_POSSIBLE;
        this.simultaneous = {};
        this.requireFail = [];
      }

      Recognizer.prototype = {
        /**
         * @virtual
         * @type {Object}
         */
        defaults: {},

        /**
         * set options
         * @param {Object} options
         * @return {Recognizer}
         */
        set: function set(options) {
          assign(this.options, options); // also update the touchAction, in case something changed about the directions/enabled state

          this.manager && this.manager.touchAction.update();
          return this;
        },

        /**
         * recognize simultaneous with an other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        recognizeWith: function recognizeWith(otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
          }

          var simultaneous = this.simultaneous;
          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);

          if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
          }

          return this;
        },

        /**
         * drop the simultaneous link. it doesnt remove the link on the other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        dropRecognizeWith: function dropRecognizeWith(otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
          }

          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
          delete this.simultaneous[otherRecognizer.id];
          return this;
        },

        /**
         * recognizer can only run when an other is failing
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        requireFailure: function requireFailure(otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
          }

          var requireFail = this.requireFail;
          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);

          if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
          }

          return this;
        },

        /**
         * drop the requireFailure link. it does not remove the link on the other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        dropRequireFailure: function dropRequireFailure(otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
          }

          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
          var index = inArray(this.requireFail, otherRecognizer);

          if (index > -1) {
            this.requireFail.splice(index, 1);
          }

          return this;
        },

        /**
         * has require failures boolean
         * @returns {boolean}
         */
        hasRequireFailures: function hasRequireFailures() {
          return this.requireFail.length > 0;
        },

        /**
         * if the recognizer can recognize simultaneous with an other recognizer
         * @param {Recognizer} otherRecognizer
         * @returns {Boolean}
         */
        canRecognizeWith: function canRecognizeWith(otherRecognizer) {
          return !!this.simultaneous[otherRecognizer.id];
        },

        /**
         * You should use `tryEmit` instead of `emit` directly to check
         * that all the needed recognizers has failed before emitting.
         * @param {Object} input
         */
        emit: function emit(input) {
          var self = this;
          var state = this.state;

          function emit(event) {
            self.manager.emit(event, input);
          } // 'panstart' and 'panmove'


          if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
          }

          emit(self.options.event); // simple 'eventName' events

          if (input.additionalEvent) {
            // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
          } // panend and pancancel


          if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
          }
        },

        /**
         * Check that all the require failure recognizers has failed,
         * if true, it emits a gesture event,
         * otherwise, setup the state to FAILED.
         * @param {Object} input
         */
        tryEmit: function tryEmit(input) {
          if (this.canEmit()) {
            return this.emit(input);
          } // it's failing anyway


          this.state = STATE_FAILED;
        },

        /**
         * can we emit?
         * @returns {boolean}
         */
        canEmit: function canEmit() {
          var i = 0;

          while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
              return false;
            }

            i++;
          }

          return true;
        },

        /**
         * update the recognizer
         * @param {Object} inputData
         */
        recognize: function recognize(inputData) {
          // make a new copy of the inputData
          // so we can change the inputData without messing up the other recognizers
          var inputDataClone = assign({}, inputData); // is is enabled and allow recognizing?

          if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
          } // reset when we've reached the end


          if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
          }

          this.state = this.process(inputDataClone); // the recognizer has recognized a gesture
          // so trigger an event

          if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
          }
        },

        /**
         * return the state of the recognizer
         * the actual recognizing happens in this method
         * @virtual
         * @param {Object} inputData
         * @returns {Const} STATE
         */
        process: function process(inputData) {},
        // jshint ignore:line

        /**
         * return the preferred touch-action
         * @virtual
         * @returns {Array}
         */
        getTouchAction: function getTouchAction() {},

        /**
         * called when the gesture isn't allowed to recognize
         * like when another is being recognized or it is disabled
         * @virtual
         */
        reset: function reset() {}
      };
      /**
       * get a usable string, used as event postfix
       * @param {Const} state
       * @returns {String} state
       */

      function stateStr(state) {
        if (state & STATE_CANCELLED) {
          return 'cancel';
        } else if (state & STATE_ENDED) {
          return 'end';
        } else if (state & STATE_CHANGED) {
          return 'move';
        } else if (state & STATE_BEGAN) {
          return 'start';
        }

        return '';
      }
      /**
       * direction cons to string
       * @param {Const} direction
       * @returns {String}
       */


      function directionStr(direction) {
        if (direction == DIRECTION_DOWN) {
          return 'down';
        } else if (direction == DIRECTION_UP) {
          return 'up';
        } else if (direction == DIRECTION_LEFT) {
          return 'left';
        } else if (direction == DIRECTION_RIGHT) {
          return 'right';
        }

        return '';
      }
      /**
       * get a recognizer by name if it is bound to a manager
       * @param {Recognizer|String} otherRecognizer
       * @param {Recognizer} recognizer
       * @returns {Recognizer}
       */


      function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
        var manager = recognizer.manager;

        if (manager) {
          return manager.get(otherRecognizer);
        }

        return otherRecognizer;
      }
      /**
       * This recognizer is just used as a base for the simple attribute recognizers.
       * @constructor
       * @extends Recognizer
       */


      function AttrRecognizer() {
        Recognizer.apply(this, arguments);
      }

      inherit(AttrRecognizer, Recognizer, {
        /**
         * @namespace
         * @memberof AttrRecognizer
         */
        defaults: {
          /**
           * @type {Number}
           * @default 1
           */
          pointers: 1
        },

        /**
         * Used to check if it the recognizer receives valid input, like input.distance > 10.
         * @memberof AttrRecognizer
         * @param {Object} input
         * @returns {Boolean} recognized
         */
        attrTest: function attrTest(input) {
          var optionPointers = this.options.pointers;
          return optionPointers === 0 || input.pointers.length === optionPointers;
        },

        /**
         * Process the input and return the state for the recognizer
         * @memberof AttrRecognizer
         * @param {Object} input
         * @returns {*} State
         */
        process: function process(input) {
          var state = this.state;
          var eventType = input.eventType;
          var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
          var isValid = this.attrTest(input); // on cancel input and we've recognized before, return STATE_CANCELLED

          if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
          } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
              return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
              return STATE_BEGAN;
            }

            return state | STATE_CHANGED;
          }

          return STATE_FAILED;
        }
      });
      /**
       * Pan
       * Recognized when the pointer is down and moved in the allowed direction.
       * @constructor
       * @extends AttrRecognizer
       */

      function PanRecognizer() {
        AttrRecognizer.apply(this, arguments);
        this.pX = null;
        this.pY = null;
      }

      inherit(PanRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof PanRecognizer
         */
        defaults: {
          event: 'pan',
          threshold: 10,
          pointers: 1,
          direction: DIRECTION_ALL
        },
        getTouchAction: function getTouchAction() {
          var direction = this.options.direction;
          var actions = [];

          if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
          }

          if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
          }

          return actions;
        },
        directionTest: function directionTest(input) {
          var options = this.options;
          var hasMoved = true;
          var distance = input.distance;
          var direction = input.direction;
          var x = input.deltaX;
          var y = input.deltaY; // lock to axis?

          if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
              direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
              hasMoved = x != this.pX;
              distance = Math.abs(input.deltaX);
            } else {
              direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
              hasMoved = y != this.pY;
              distance = Math.abs(input.deltaY);
            }
          }

          input.direction = direction;
          return hasMoved && distance > options.threshold && direction & options.direction;
        },
        attrTest: function attrTest(input) {
          return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
        },
        emit: function emit(input) {
          this.pX = input.deltaX;
          this.pY = input.deltaY;
          var direction = directionStr(input.direction);

          if (direction) {
            input.additionalEvent = this.options.event + direction;
          }

          this._super.emit.call(this, input);
        }
      });
      /**
       * Pinch
       * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
       * @constructor
       * @extends AttrRecognizer
       */

      function PinchRecognizer() {
        AttrRecognizer.apply(this, arguments);
      }

      inherit(PinchRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof PinchRecognizer
         */
        defaults: {
          event: 'pinch',
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function getTouchAction() {
          return [TOUCH_ACTION_NONE];
        },
        attrTest: function attrTest(input) {
          return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
        },
        emit: function emit(input) {
          if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
          }

          this._super.emit.call(this, input);
        }
      });
      /**
       * Press
       * Recognized when the pointer is down for x ms without any movement.
       * @constructor
       * @extends Recognizer
       */

      function PressRecognizer() {
        Recognizer.apply(this, arguments);
        this._timer = null;
        this._input = null;
      }

      inherit(PressRecognizer, Recognizer, {
        /**
         * @namespace
         * @memberof PressRecognizer
         */
        defaults: {
          event: 'press',
          pointers: 1,
          time: 251,
          // minimal time of the pointer to be pressed
          threshold: 9 // a minimal movement is ok, but keep it low

        },
        getTouchAction: function getTouchAction() {
          return [TOUCH_ACTION_AUTO];
        },
        process: function process(input) {
          var options = this.options;
          var validPointers = input.pointers.length === options.pointers;
          var validMovement = input.distance < options.threshold;
          var validTime = input.deltaTime > options.time;
          this._input = input; // we only allow little movement
          // and we've reached an end event, so a tap is possible

          if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
            this.reset();
          } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function () {
              this.state = STATE_RECOGNIZED;
              this.tryEmit();
            }, options.time, this);
          } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
          }

          return STATE_FAILED;
        },
        reset: function reset() {
          clearTimeout(this._timer);
        },
        emit: function emit(input) {
          if (this.state !== STATE_RECOGNIZED) {
            return;
          }

          if (input && input.eventType & INPUT_END) {
            this.manager.emit(this.options.event + 'up', input);
          } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
          }
        }
      });
      /**
       * Rotate
       * Recognized when two or more pointer are moving in a circular motion.
       * @constructor
       * @extends AttrRecognizer
       */

      function RotateRecognizer() {
        AttrRecognizer.apply(this, arguments);
      }

      inherit(RotateRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof RotateRecognizer
         */
        defaults: {
          event: 'rotate',
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function getTouchAction() {
          return [TOUCH_ACTION_NONE];
        },
        attrTest: function attrTest(input) {
          return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
        }
      });
      /**
       * Swipe
       * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
       * @constructor
       * @extends AttrRecognizer
       */

      function SwipeRecognizer() {
        AttrRecognizer.apply(this, arguments);
      }

      inherit(SwipeRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof SwipeRecognizer
         */
        defaults: {
          event: 'swipe',
          threshold: 10,
          velocity: 0.3,
          direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
          pointers: 1
        },
        getTouchAction: function getTouchAction() {
          return PanRecognizer.prototype.getTouchAction.call(this);
        },
        attrTest: function attrTest(input) {
          var direction = this.options.direction;
          var velocity;

          if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
          } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
          } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
          }

          return this._super.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers == this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
        },
        emit: function emit(input) {
          var direction = directionStr(input.offsetDirection);

          if (direction) {
            this.manager.emit(this.options.event + direction, input);
          }

          this.manager.emit(this.options.event, input);
        }
      });
      /**
       * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
       * between the given interval and position. The delay option can be used to recognize multi-taps without firing
       * a single tap.
       *
       * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
       * multi-taps being recognized.
       * @constructor
       * @extends Recognizer
       */

      function TapRecognizer() {
        Recognizer.apply(this, arguments); // previous time and center,
        // used for tap counting

        this.pTime = false;
        this.pCenter = false;
        this._timer = null;
        this._input = null;
        this.count = 0;
      }

      inherit(TapRecognizer, Recognizer, {
        /**
         * @namespace
         * @memberof PinchRecognizer
         */
        defaults: {
          event: 'tap',
          pointers: 1,
          taps: 1,
          interval: 300,
          // max time between the multi-tap taps
          time: 250,
          // max time of the pointer to be down (like finger on the screen)
          threshold: 9,
          // a minimal movement is ok, but keep it low
          posThreshold: 10 // a multi-tap can be a bit off the initial position

        },
        getTouchAction: function getTouchAction() {
          return [TOUCH_ACTION_MANIPULATION];
        },
        process: function process(input) {
          var options = this.options;
          var validPointers = input.pointers.length === options.pointers;
          var validMovement = input.distance < options.threshold;
          var validTouchTime = input.deltaTime < options.time;
          this.reset();

          if (input.eventType & INPUT_START && this.count === 0) {
            return this.failTimeout();
          } // we only allow little movement
          // and we've reached an end event, so a tap is possible


          if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
              return this.failTimeout();
            }

            var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
              this.count = 1;
            } else {
              this.count += 1;
            }

            this._input = input; // if tap count matches we have recognized it,
            // else it has began recognizing...

            var tapCount = this.count % options.taps;

            if (tapCount === 0) {
              // no failing requirements, immediately trigger the tap event
              // or wait as long as the multitap interval to trigger
              if (!this.hasRequireFailures()) {
                return STATE_RECOGNIZED;
              } else {
                this._timer = setTimeoutContext(function () {
                  this.state = STATE_RECOGNIZED;
                  this.tryEmit();
                }, options.interval, this);
                return STATE_BEGAN;
              }
            }
          }

          return STATE_FAILED;
        },
        failTimeout: function failTimeout() {
          this._timer = setTimeoutContext(function () {
            this.state = STATE_FAILED;
          }, this.options.interval, this);
          return STATE_FAILED;
        },
        reset: function reset() {
          clearTimeout(this._timer);
        },
        emit: function emit() {
          if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
          }
        }
      });
      /**
       * Simple way to create a manager with a default set of recognizers.
       * @param {HTMLElement} element
       * @param {Object} [options]
       * @constructor
       */

      function Hammer(element, options) {
        options = options || {};
        options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
        return new Manager(element, options);
      }
      /**
       * @const {string}
       */


      Hammer.VERSION = '2.0.7';
      /**
       * default settings
       * @namespace
       */

      Hammer.defaults = {
        /**
         * set if DOM events are being triggered.
         * But this is slower and unused by simple implementations, so disabled by default.
         * @type {Boolean}
         * @default false
         */
        domEvents: false,

        /**
         * The value for the touchAction property/fallback.
         * When set to `compute` it will magically set the correct value based on the added recognizers.
         * @type {String}
         * @default compute
         */
        touchAction: TOUCH_ACTION_COMPUTE,

        /**
         * @type {Boolean}
         * @default true
         */
        enable: true,

        /**
         * EXPERIMENTAL FEATURE -- can be removed/changed
         * Change the parent input target element.
         * If Null, then it is being set the to main element.
         * @type {Null|EventTarget}
         * @default null
         */
        inputTarget: null,

        /**
         * force an input class
         * @type {Null|Function}
         * @default null
         */
        inputClass: null,

        /**
         * Default recognizer setup when calling `Hammer()`
         * When creating a new Manager these will be skipped.
         * @type {Array}
         */
        preset: [// RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {
          enable: false
        }], [PinchRecognizer, {
          enable: false
        }, ['rotate']], [SwipeRecognizer, {
          direction: DIRECTION_HORIZONTAL
        }], [PanRecognizer, {
          direction: DIRECTION_HORIZONTAL
        }, ['swipe']], [TapRecognizer], [TapRecognizer, {
          event: 'doubletap',
          taps: 2
        }, ['tap']], [PressRecognizer]],

        /**
         * Some CSS properties can be used to improve the working of Hammer.
         * Add them to this method and they will be set when creating a new Manager.
         * @namespace
         */
        cssProps: {
          /**
           * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
           * @type {String}
           * @default 'none'
           */
          userSelect: 'none',

          /**
           * Disable the Windows Phone grippers when pressing an element.
           * @type {String}
           * @default 'none'
           */
          touchSelect: 'none',

          /**
           * Disables the default callout shown when you touch and hold a touch target.
           * On iOS, when you touch and hold a touch target such as a link, Safari displays
           * a callout containing information about the link. This property allows you to disable that callout.
           * @type {String}
           * @default 'none'
           */
          touchCallout: 'none',

          /**
           * Specifies whether zooming is enabled. Used by IE10>
           * @type {String}
           * @default 'none'
           */
          contentZooming: 'none',

          /**
           * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
           * @type {String}
           * @default 'none'
           */
          userDrag: 'none',

          /**
           * Overrides the highlight color shown when the user taps a link or a JavaScript
           * clickable element in iOS. This property obeys the alpha value, if specified.
           * @type {String}
           * @default 'rgba(0,0,0,0)'
           */
          tapHighlightColor: 'rgba(0,0,0,0)'
        }
      };
      var STOP = 1;
      var FORCED_STOP = 2;
      /**
       * Manager
       * @param {HTMLElement} element
       * @param {Object} [options]
       * @constructor
       */

      function Manager(element, options) {
        this.options = assign({}, Hammer.defaults, options || {});
        this.options.inputTarget = this.options.inputTarget || element;
        this.handlers = {};
        this.session = {};
        this.recognizers = [];
        this.oldCssProps = {};
        this.element = element;
        this.input = createInputInstance(this);
        this.touchAction = new TouchAction(this, this.options.touchAction);
        toggleCssProps(this, true);
        each(this.options.recognizers, function (item) {
          var recognizer = this.add(new item[0](item[1]));
          item[2] && recognizer.recognizeWith(item[2]);
          item[3] && recognizer.requireFailure(item[3]);
        }, this);
      }

      Manager.prototype = {
        /**
         * set options
         * @param {Object} options
         * @returns {Manager}
         */
        set: function set(options) {
          assign(this.options, options); // Options that need a little more setup

          if (options.touchAction) {
            this.touchAction.update();
          }

          if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
          }

          return this;
        },

        /**
         * stop recognizing for this session.
         * This session will be discarded, when a new [input]start event is fired.
         * When forced, the recognizer cycle is stopped immediately.
         * @param {Boolean} [force]
         */
        stop: function stop(force) {
          this.session.stopped = force ? FORCED_STOP : STOP;
        },

        /**
         * run the recognizers!
         * called by the inputHandler function on every movement of the pointers (touches)
         * it walks through all the recognizers and tries to detect the gesture that is being made
         * @param {Object} inputData
         */
        recognize: function recognize(inputData) {
          var session = this.session;

          if (session.stopped) {
            return;
          } // run the touch-action polyfill


          this.touchAction.preventDefaults(inputData);
          var recognizer;
          var recognizers = this.recognizers; // this holds the recognizer that is being recognized.
          // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
          // if no recognizer is detecting a thing, it is set to `null`

          var curRecognizer = session.curRecognizer; // reset when the last recognizer is recognized
          // or when we're in a new session

          if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
            curRecognizer = session.curRecognizer = null;
          }

          var i = 0;

          while (i < recognizers.length) {
            recognizer = recognizers[i]; // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.

            if (session.stopped !== FORCED_STOP && ( // 1
            !curRecognizer || recognizer == curRecognizer || // 2
            recognizer.canRecognizeWith(curRecognizer))) {
              // 3
              recognizer.recognize(inputData);
            } else {
              recognizer.reset();
            } // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer


            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
              curRecognizer = session.curRecognizer = recognizer;
            }

            i++;
          }
        },

        /**
         * get a recognizer by its event name.
         * @param {Recognizer|String} recognizer
         * @returns {Recognizer|Null}
         */
        get: function get(recognizer) {
          if (recognizer instanceof Recognizer) {
            return recognizer;
          }

          var recognizers = this.recognizers;

          for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
              return recognizers[i];
            }
          }

          return null;
        },

        /**
         * add a recognizer to the manager
         * existing recognizers with the same event name will be removed
         * @param {Recognizer} recognizer
         * @returns {Recognizer|Manager}
         */
        add: function add(recognizer) {
          if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
          } // remove existing


          var existing = this.get(recognizer.options.event);

          if (existing) {
            this.remove(existing);
          }

          this.recognizers.push(recognizer);
          recognizer.manager = this;
          this.touchAction.update();
          return recognizer;
        },

        /**
         * remove a recognizer by name or instance
         * @param {Recognizer|String} recognizer
         * @returns {Manager}
         */
        remove: function remove(recognizer) {
          if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
          }

          recognizer = this.get(recognizer); // let's make sure this recognizer exists

          if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
              recognizers.splice(index, 1);
              this.touchAction.update();
            }
          }

          return this;
        },

        /**
         * bind event
         * @param {String} events
         * @param {Function} handler
         * @returns {EventEmitter} this
         */
        on: function on(events, handler) {
          if (events === undefined$1) {
            return;
          }

          if (handler === undefined$1) {
            return;
          }

          var handlers = this.handlers;
          each(splitStr(events), function (event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
          });
          return this;
        },

        /**
         * unbind event, leave emit blank to remove all handlers
         * @param {String} events
         * @param {Function} [handler]
         * @returns {EventEmitter} this
         */
        off: function off(events, handler) {
          if (events === undefined$1) {
            return;
          }

          var handlers = this.handlers;
          each(splitStr(events), function (event) {
            if (!handler) {
              delete handlers[event];
            } else {
              handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
          });
          return this;
        },

        /**
         * emit event to the listeners
         * @param {String} event
         * @param {Object} data
         */
        emit: function emit(event, data) {
          // we also want to trigger dom events
          if (this.options.domEvents) {
            triggerDomEvent(event, data);
          } // no handlers, so skip it all


          var handlers = this.handlers[event] && this.handlers[event].slice();

          if (!handlers || !handlers.length) {
            return;
          }

          data.type = event;

          data.preventDefault = function () {
            data.srcEvent.preventDefault();
          };

          var i = 0;

          while (i < handlers.length) {
            handlers[i](data);
            i++;
          }
        },

        /**
         * destroy the manager and unbinds all events
         * it doesn't unbind dom events, that is the user own responsibility
         */
        destroy: function destroy() {
          this.element && toggleCssProps(this, false);
          this.handlers = {};
          this.session = {};
          this.input.destroy();
          this.element = null;
        }
      };
      /**
       * add/remove the css properties as defined in manager.options.cssProps
       * @param {Manager} manager
       * @param {Boolean} add
       */

      function toggleCssProps(manager, add) {
        var element = manager.element;

        if (!element.style) {
          return;
        }

        var prop;
        each(manager.options.cssProps, function (value, name) {
          prop = prefixed(element.style, name);

          if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
          } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
          }
        });

        if (!add) {
          manager.oldCssProps = {};
        }
      }
      /**
       * trigger dom event
       * @param {String} event
       * @param {Object} data
       */


      function triggerDomEvent(event, data) {
        var gestureEvent = document.createEvent('Event');
        gestureEvent.initEvent(event, true, true);
        gestureEvent.gesture = data;
        data.target.dispatchEvent(gestureEvent);
      }

      assign(Hammer, {
        INPUT_START: INPUT_START,
        INPUT_MOVE: INPUT_MOVE,
        INPUT_END: INPUT_END,
        INPUT_CANCEL: INPUT_CANCEL,
        STATE_POSSIBLE: STATE_POSSIBLE,
        STATE_BEGAN: STATE_BEGAN,
        STATE_CHANGED: STATE_CHANGED,
        STATE_ENDED: STATE_ENDED,
        STATE_RECOGNIZED: STATE_RECOGNIZED,
        STATE_CANCELLED: STATE_CANCELLED,
        STATE_FAILED: STATE_FAILED,
        DIRECTION_NONE: DIRECTION_NONE,
        DIRECTION_LEFT: DIRECTION_LEFT,
        DIRECTION_RIGHT: DIRECTION_RIGHT,
        DIRECTION_UP: DIRECTION_UP,
        DIRECTION_DOWN: DIRECTION_DOWN,
        DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
        DIRECTION_VERTICAL: DIRECTION_VERTICAL,
        DIRECTION_ALL: DIRECTION_ALL,
        Manager: Manager,
        Input: Input,
        TouchAction: TouchAction,
        TouchInput: TouchInput,
        MouseInput: MouseInput,
        PointerEventInput: PointerEventInput,
        TouchMouseInput: TouchMouseInput,
        SingleTouchInput: SingleTouchInput,
        Recognizer: Recognizer,
        AttrRecognizer: AttrRecognizer,
        Tap: TapRecognizer,
        Pan: PanRecognizer,
        Swipe: SwipeRecognizer,
        Pinch: PinchRecognizer,
        Rotate: RotateRecognizer,
        Press: PressRecognizer,
        on: addEventListeners,
        off: removeEventListeners,
        each: each,
        merge: merge,
        extend: extend,
        assign: assign,
        inherit: inherit,
        bindFn: bindFn,
        prefixed: prefixed
      }); // this prevents errors when Hammer is loaded in the presence of an AMD
      //  style loader but by script tag, not by the loader.

      var freeGlobal = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}; // jshint ignore:line

      freeGlobal.Hammer = Hammer;

      if (typeof undefined$1 === 'function' && undefined$1.amd) {
        undefined$1(function () {
          return Hammer;
        });
      } else if (module.exports) {
        module.exports = Hammer;
      } else {
        window[exportName] = Hammer;
      }
    })(window, document, 'Hammer');
  })(hammer);

  var Hammer = hammer.exports;

  class DrawingPad {
    constructor(settings) {
      this.ctx = this.getContext(512, 512);
      this.canvas = this.ctx.canvas;
      this.hide();

      this.brush = settings;
      this.resetBrush();

      //listen to changes in the params
      settings.bindings.brush_size.on("change", this.resetBrush.bind(this));
      settings.bindings.softness.on("change", this.resetBrush.bind(this));

      let mc = new Hammer(this.canvas);
      mc.on("panstart pan panend", (e) => {
        this.update(e);
      });
      this._locked = false;
    }
    get locked() {
      return this._locked;
    }
    set locked(v) {
      this._locked = v;
    }

    clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    resize(w, h) {
      this.canvas.width = w;
      this.canvas.height = h;
    }

    show() {
      this.canvas.classList.remove("fade-out");
      this.canvas.classList.add("fade-in");
      this.locked = false;
    }

    hide() {
      this.canvas.classList.add("fade-out");
      this.canvas.classList.remove("fade-in");
      this.locked = true;
    }

    resetBrush() {
      let soft = this.brush.softness;
      let size = this.brush.brush_size;
      let r = size / 2;
      this.brush.pattern = this.ctx.createRadialGradient(r, r, 0, r, r, r);
      this.brush.pattern.addColorStop(0, `rgba(255,255,255,${soft})`);
      this.brush.pattern.addColorStop(1, `rgba(255,255,255,0)`);
    }

    update(e) {
      if (this.locked) return;

      let rect = this.canvas.getBoundingClientRect();
      let size = this.brush.brush_size;
      let x = ~~(e.center.x - size / 2) - rect.x;
      let y = ~~(e.center.y - size / 2) - rect.y;
      if (this.brush.pattern == undefined) {
        this.resetBrush();
      }
      this.ctx.fillStyle = this.brush.pattern;
      this.ctx.globalAlpha = this.brush.alpha;
      this.ctx.save();
      this.ctx.globalCompositeOperation = "lighten";
      this.ctx.translate(x, y);
      this.ctx.fillRect(0, 0, size, size);
      this.ctx.restore();
    }

    getContext(w, h) {
      const canvas = document.createElement("canvas");
      canvas.width = w || window.innerWidth;
      canvas.height = h || window.innerHeight;
      return canvas.getContext("2d", { willReadFrequently: true });
    }
  }

  const history$1 = [];
  let _canvas;

  class History {
    constructor(canvas, ui) {
      _canvas = canvas;
      ui.on("undo", () => {
        this.popState();
      });
      ui.on("redo", () => {}); //TODO
    }

    pushState(rect, canvas) {
      const ctx = document
        .createElement("canvas")
        .getContext("2d", { willReadFrequently: true });
      const x = ~~rect.x;
      const y = ~~rect.y;
      const w = ~~rect.width;
      const h = ~~rect.height;
      ctx.canvas.width = w;
      ctx.canvas.height = h;
      ctx.drawImage(canvas.element, x, y, w, h, 0, 0, w, h);
      const state = { canvas: ctx.canvas, rect: { x, y, w, h } };
      history$1.push(state);
      return state;
    }

    popState() {
      if (history$1.length <= 0) return;
      const state = history$1.pop();
      _canvas.putImage(state.canvas, state.rect.x, state.rect.y);
    }
  }

  // list of prompts
  const prompts_list = [
    "an oil tanker drydock constructed in a field in the countryside by John Constable and Tyler Edlin, artstation",
    "ww1 warship in drydock near an European village countryside landscape by Casper David Friedrich, artstation",
    "cossacks marching near a warship in the countryside landscape by Tyler Edlin and Caspar David Friedrich, artstation",
    "a crashed warship, a fishing village on the river in a mountain landscape by Casper David Friedrich, warship on artstation, mountain landsape on artstation, village on artstation",
    "a flower field landscape, an abandoned building in a field, a mural of flowers on the side of an abandoned building, a rusty car, trending on artstation, cinematic lighting, vibrant",
    "a shipwreck on a sci-fi alien desert landscape, german romanticism, artstation, digital art, magical realism, moody palette, contrasting",
    "shipwreck on a twisted alien landscape, abandoned twisted alien landscape by Casper David Friedrich, whispy clouds, planets and stars in the sky, artstation",
    "a flower field landscape, an abandoned castle in a field, a mural of flowers on the side of an abandoned castle, petals flying in the breeze, butterflies, artstation, cinematic lighting, vibrant",
    "an abandoned skyscraper in a field of flowers, petals flying in the breeze, flowers made of metal shards, cinematic lighting, vibrant",
    "an abandoned skyscraper in a field in an autumn pastoral landscape, cinematic lighting, vibrant, surrealism, deviantart",
    "an abandoned boat in a frozen winter wonderland lake, snowflakes drifting in the breeze, impressionism, magical realism",
    "a sailboat docked at a boathouse, snowflakes drifting in the breeze, cinematic lighting, vibrant, winter wonderland",
    "an abandoned building in a field of flowers landscape by caspar david friedrich and RHADS, artstation, cinematic lighting",
    "an iridescent cottage on a crumbling cliffside by the sea, by Tyler Edlin and Andreas Rocha, deviantart, digital painting",
    "a surreal digital art illustraiton of an abandoned castle in a field of flowers landscape by Victo Ngai, flowers, butterflies",
    "a glowing obelisk on a mountain by Alejandro Burdisio and Tyler Edlin and RHADS, digital paintnig, award-winning",
    "ruins of an abandoned medieval city in wasteland landscape by Felix Kelly and Richard Anderson, oil on canvas, american romanticism",
    "an abandoned city in a tropical swamp landscape by Gediminas Pranckevicius and Jacek Yerka, murals of tropical flowers, artstation, vibrant, cinematic lighting",
    "an abandoned city in a lakes and field of flowers landscape, oil on canvas, award-winning, textured, moody palette, deviantart",
    "an abandoned building in a field of flowers by Jean Delville and Thomas Kinkade, a mural of flowers on an abandoned building, highly detailed matte painting, vibrant",
    "an abandoned cathedral in a field of flowers by Jean Delville and John Atkinson Grimshaw, highly detailed matte painting, german romanticism",
    "streets of the abandoned city overgrown with blooming vines by Jean Delville and John Atkinson Grimshaw and Gilbert Williams, concept art",
    "lightning storm over the grand canyon, dramatic scenery, cinematic lighting, graphic illustration, by Gilbert Williams and RHADS",
    "swirling green plasma, infinite celestial sea of darkness, deviantart, digital art, contrasting, simple subject",
    "swarm of green fireflies over a dark nightscape landscape by Gilbert Williams and Beeple, digital painting, award winning, artstation",
    "a dark wizard tower photographed by ansel adams and painted by RHADS, oil on canvas",
    "an aquarium in a dimly lit room, abandoned industrial room, low hanging flourescent light, digital painting, contest-winner",
    "an aquarium in a dimly lit abandoned industrial room, low hanging fluorescent light, artstation",
    "imposing glowing sci-fi neon obelisks on a snowy landscape, falling snow, oil on canvas, artstation",
    "60's mainframes in a dimly lit abandoned industrial room, low hanging fluorescent light, digital art, clean, dark, high-contrast, moody palette",
    "60's mainframes in a dimly lit abandoned industrial room, face renders on computer screens with face renders, low hanging fluorescent light, trending on artstation",
    "a cylinder aquarium in a dimly lit abandoned warehouse, low hanging fluorescent light, lab equipment, trending on artstation",
    "a tropical aquarium in a dimly lit abandoned atrium, skylights, trending on artstation, steampunk",
    "an aquarium in an atrium, a crowd gathers, skylights, trending on artstation, steampunk, victorian",
    "a panel aquarium in a dim abandoned warehouse, low hanging fluorescent light, artstation, digital art, 35mm photograph",
    "abandoned cyberpunk lab, an aquarium in a dimly lit cyberpunk lab, low hanging fluorescent light, by Syd Mead and James Turrell",
    "intricate crumbling ivy covered wall by claude monet, detailed impressionism painting, artstation",
    "a majestic dieselpunk battlemech standing near a russian orthodox church on a snowing landscape, by Gilbert Williams and Barclay Shaw, concept art",
    "an imposing dieselpunk mech in the autumn countryside by Ivan Aivazovsky and Greg Rutkowski, trending on artstation, cinematic lighting",
    "an imposing clockwork elephant mech on an arctic landscape by Ivan Aivazovsky and Greg Rutkowski, digital painting, highly detailed, award winning concept art",
    "a space marine bear by Ivan Aivazovsky and Greg Rutkowski, warhammer 40k",
    "a space marine bear by george stubbs and greg rutkowski, warhammer 40k, illustration",
    "post-industrial smokestacks on lava flows across the wasteland with belching smoke filling the sky, red lighting lacing the clouds, by Ivan Aivazovsky and Greg Rutkowski, artstation",
    "giant sinister twisted rose vines cover the wizard tower in the forest by tyler edlin and gilbert williams, highly detailed matte painting, surrealism ",
    "an imposing lighthouse in a nebula by tyler edlin and RHADS, artstation, oil on canvas, magical realism, science fiction concept art",
    "a beautiful painting of a circular portal opening to a flower ocean dimension embedded in an asteroid floating in a nebula by RHADS, trending on deviantart, vibrant",
    "a beautiful painting of a tree on an asteroid in a vast nebula by Albert Bierstadt and Tyler Edlin and RHADS",
    "a painting of an ancient magical mystical willow tree on an asteroid in a vast nebula by Tyler Edlin and RHADS and Gilbert Williams",
    "a stunning portrait of a woman pondering the wilderness by RHADS and Gilbert Williams, artstation, digital painting",
    "an abandoned building on an asteroid in a vast nebula by Tyler Edlin and John Harris and Hubert Robert, concept art, impressionism, watercolor",
    "a spanish galleon sailing on a vast and beautiful nebula by ivan aivazovsky and John Harris, celestial sea",
    "a beautiful painting of a sailboat sailing on a nebula by RHADS and Gilbert Williams, deviantart",
    "whales swimming through vast and beautiful clouds by RHADS and Ross Tran and Albert Bierdstat, artstation, god rays, surrealism",
    "inside an abandoned 1980's mall, retrowave, 35mm photograph, Memphis Design, HD photograph, octane soft render",
    "empty waiting room with yellow wallpaper, found photograph, by ansel adams, washed out color",
    "empty unsettling waiting room with yellow wallpaper, 3d room render, trending on artstation",
    "an imposing mech standing in a wheat field on an overcast summer day by john constable, artstation",
    "a beautiful painting of an abandoned rusty cyberpunk city, neon signs, in the style of syd mead and greg rutkowski, artstation",
    "an abandoned and decaying city screenprint by dan mumford, cuberpunk style, blinking neon signs, artstation",
    "a illustration of a diner on the street corner of a rusty cyberpunk city, neon signs, trending on artstation",
    "a diorama of colorful soil layers, waterfalls between layers over the wooden buildings between the layers, magic realism painting by Alexander Jansson and machinarium",
    "on the streets of the ancient city sinking into the briny deep by Tyler Edlin, artstation, vivid, vibrant",
    "Zoroastrian towers on a desert landscape by Andreas Rocha and Hubert Robert, digital art, magical realism, fantasy concept art",
    "portrait of the devine cybernetic angel by Peter Mohrbacher and Ross Tran, character design, octane soft render, cyberpunk",
    "empress of clockwork spacetime painted by Peter Mohrbacher and Ross Tran",
    "stunning beautiful portrait of clockwork singularity princess painted by Peter Mohrbacher and WLOP, rossdraws, digital painting",
    "portrait of a stunning beautiful explosion over the ocean by Peter Mohrbacher, character design, surrealism, vibrant palette",
    "a luminous orchid garden painted by Albert Bierstadt and Hubert Robert, oil on canvas, magical realism, luminous",
    "painting of a secret cottage in a luminous orchid garden by Albert Bierstadt and Jean Delville, artstation",
    "mystical painting of a cute dark orchid garden by Alexander Jansson",
    "stunning painting of a lone rusted imposing mech in a wheatfield by Simon Stålenhag and beeple, digital painting, soft render, moody palette",
    "an imposing mecha-samurai hybrid in a field of violet flowers by Gediminas Pranckevicius and beeple, dieselpunk aesthetic",
    "a landscape painting of retro diner outside los angeles by Peter Mohrbacher and Simon Stålenhag, retrowave noir",
    "a lighthouse on a cliffside overlooking the turbulent bay by Tyler Edlin and ivan aivazovsky",
    "cherry blossom tree next to a serene river by Ross Tran and Tyler Edlin, magical realism, impressionism, watercolor, award winnin",
    "a bioluminescent jellyfish over futuristic cityscape, deviantart, cinematic lighting, vibrant",
    "hyperrealism painting, underwater sea sponges, tending on deviantart, cinematic lighting, god rays, pastel palette, pastelwave",
    "impressionism painting by Bob Ross, volcano, lava, trees, boulders, obsidian, trending on artstation",
    "realism landscape oil painting, rusty dilapitated metal buildings, foggy ground, graffiti on buildings, vibrant",
    "magical realism painting of a lighting storm over the ocean by Ivan Aivazovsky dark night",
    "naturalism painting of vineyard, vibrant palette, bright sky, clouds",
    "landscape painting of a field of blue roses, a lone greenhouse in the field",
    "realism painting of a pack of wolves in a snowy field, snowing, twilight skies, aurora borealis, by Albert Bierstadt",
    "landscape painting of grassy field with many Pikachu by Albert Bierstadt, afternoon skies, vibrant, trees",
    "futuristic cyber city slums landscape by Liam Wong, highly detailed matte painting",
    "beautiful cyberpunk portrait by Liam Wong and Ross Tran, artstation, dark, contrasting, noir",
    "a ruined cathedral in a field of flowers by Dan Mumford, digital art, gothic art",
    "a ruined building on a field of flowers on a stormy day by Wayne Barlowe and Hans Bellmer, turbulent clouds, concept art, cinematic lighting",
    "a glass tower on a field of flowers landscape by Mike Winkelmann and Beeple, surrealism, futurism",
    "a singular glass tower in a field of flowers landscape by John Atkinson Grimshaw, highly detailed 3d matte painting",
    "massive subterranean galaxy in sprawling ancient ruins of atlantis, a dramatic matte painting by Tyler Edlin, trending on artstation, vivid and vibrant",
    "a stunning painting of a mystical glass tower in the town square by John Atkinson Grimshaw, highly detailed matte painting, nightscape",
    "an ominous painting of the Eiffel tower by Zdzisław Beksiński",
    "a beautiful portrait of mecha statue of liberty by  James Jean and Ross Tran",
    "a magic realism painting by Gediminas Pranckevicius depicting an abandoned building in a field of flowers landscape, vibrant, cinematic lighting",
    "watercolour image of hooded figure standing in small boat collecting orbs of light from a river",
    "a majestic glass tower in a serene oceanic landscape illustrated by john atkinson grimshaw and thomas kinkade, digital art, magic realism",
    "portrait of a stunning woman in los angeles by Peter Mohrbacher and Ross Tran, retrowave noir",
    "sinister abandoned factory building in a desolate landscape by Laurie Lipton and Patrick Woodroffe, withered roses, dramatic scenery, synthwave",
    "a painting of a person standing in front of a house, a matte painting by chris cold, cgsociety, neo-romanticism, matte painting, atmospheric, volumetric lighting",
    "a beautiful portrait of a vine blossom fairy by Ross Tran and Leonardo da Vinci, rossdraws, highly detailed digital painting",
    "a contemporary mansion in a field of flowers landscape by Ross Tran and Caspar David Friedrich, oil on canvas, dramatic scenery, moody palette",
    "a beautiful portrait of a woman by Ross Tran and Leonardo da Vinci, rossdraws, artstation, piercing gaze",
    "robotic android on a balcony pondering the baroque city, artstation, oil and canvas, nightscape, at night",
    "portrait of a brooding magic investigator woman, by Tom Bagshaw and Sophie Anderson and Antoine Blanchard, moody palette, oil on canvas, neon light illumination, noir",
    "aesthetic masterpiece vaporwave woman portrait painting by Antoine Blanchard and Vincent Callebaut",
    "architectural sci-fi brutalist monument, nightscape, surrealism, oil on canvas, award winning, contest winner, by John Atkinson Grimshaw and Thomas Kinkade",
    "steampunk brutalist structural steampunk victorian monument in a field of flowers, deviantart, oil on canvas, moody palette, cinematic lighting",
    "a stunning painting of vintage truck parked on a mountain overlook, vaporwave palette, matte painting, moody palette, deviantart",
    "giant blooming flower on the alien planet topology, render, by Beeple and Gilbert Williams, magical realism, artstation",
    "warm cottage on a black sand beach, digital art, surrealism, dark ominous lonely, oil on canvas, textured painting, american romanticism",
    "cold concrete brutalist spomenik monument in the grand canyon, by john harris and tyler edlin and caspar david friedrich, graphic novel style",
    "portrait of mysterious handsome noir spacetime detective by Dante Gabriel Rossetti and Edward Moran and Charlie Bowater, magical realism, cgsociety, artstation",
    "a vast planetary sci-fi city by Ansel Adams and Bernardo Bellotto, oil on canvas, artstation, dramatic scenery, masterpiece, aesthetic",
    "a stunning profile portrait of art deco empress, by Evelyn De Morgan and Ross Tran, rossdraws, fresco, piercing gaze, black hair",
    "a portrait of a character in a scenic environment by John Atkinson Grimshaw by RHADS and Gilbert Williams, artstation",
    "movie still from a dark city noir thriller sci-fi movie by Monet, vibrant, impressionism, artstation, HBO, warner brothers",
    "portrait of aesthetic angelic vaporwave noir woman, by John Watkiss, by John Atkinson Grimshaw, soft lighting, deviantart, contrasting, dark, character concept illustration",
    "an aesthetic closeup portrait of a noir woman with red hair painted by John Atkinson Grimshaw and Antoine Blanchard, autumn palette, artstation",
    "a lonely ship adrift in the endless ocean of time, digital art, distant birds, moody palette",
    "descent into infinite madness, surrealism, oil on canvas, texture painting, statement piece, artstation, dark ominous scene, digital art",
    "clockwork wizard tower in the woods, artstation, highly detailed impressionism, cinematic lighting, watercolor, masterpiece, aesthetic",
    "cat sitting on the street, well composed cityscape painting, oil on canvas, watercolor, highly detailed impressionist painting",
    "synthwave 1980 sports car on an Arctic landscape, artstation, by Jordan Grimmer and RHADS and Gilbert Williams",
    "aesthetic iridescent crumbling cottage on a cliff by the sea, oil on canvas, artstation, soft render",
    "aesthetic warrior sorceress in scale armor portrait by Raymond Swanland, cyberpunk, sci-fi cybernetic implants",
    "Lilith, ada Lovelace portrait, Deadpool, gothic, artstation, oil on canvas",
    "aesthetic angelic redhead woman stone portrait by Anna Dittmann and Harumi Hironaka and Filip Hodas, flowers, magical, artsy, impressionism",
    "aesthetic stunning portrait of a woman on the roof watching the sunset by Daniel F. Gerhartz and Liam Wong, nocturne, impressionism, noir aesthetic",
    "stunning portrait of a man at a piano by Daniel F. Gerhartz and Liam Wong, nocturne, impressionism, noir aesthetic, neon lights, dark, contrast",
    "stunning portrait of a woman in an office by Daniel F. Gerhartz and Liam Wong, nocturne, impressionism, noir aesthetic",
    "stunning portrait of a woman walking on the magnificent mile by Wadim Kashin and Liam Wong and Antoine Blanchard, impressionism, concept art, aesthetic, masterpiece",
    "nocturne impressionist noir of a mysterious detective on the streets by Antoine Blanchard, cityscape, monochromatic, rain reflections, octane soft render, vintage detective",
    "planetary megacity sci-fi city by Hugh Ferriss, masterpiece, dystopian, architectural structural design, contrasting",
    "a stunning portrait of samurai woman by Evelyn De Morgan and Ross Tran, rossdraws, fresco",
    "stunning renaissance fresco portrait, masterpiece, artstation, by Sandro Botticelli, by Sofonisba Anguissola",
    "a portrait of kyrickyoung, oil on canvas, artstation, by J. C. Leyendecker and Edmund Blair Leighton and Charlie Bowater, octane render, soft lighting, contrasting",
    "stunning futuristic sci-fi woman character concept digital art by Leonardo da Vinci and WLOP, surrealism, character illustration, fresco cracked paint, highly detailed sci-fi illustration, soft render",
    "abandoned crumbling shopping mall overgrown by flowers and vines by Tyler Edlin and Jean Delville and John Aktinson Grimshaw and Hubert Robert, german romanticism style, oil on canvas, cinematic lighting, vibrant, hdr, concept art, rain reflections, juxtaposition",
    "the grand canyon by Tyler Edlin and Jean Delville and John Aktinson Grimshaw and Hubert Robert, german romanticism style, oil on canvas, cinematic lighting, vibrant, concept art, gothic, contrasting",
    "chicago magnificent mile overgrown by vines and flowers by Tyler Edlin and Jean Delville and John Aktinson Grimshaw and Hubert Robert, german romanticism style, oil on canvas, cinematic lighting, vibrant, concept art, gothic, contrasting, nightscape",
    "woman ponders the rocky mountains by Jordan Grimmer and RHADS and Gilbert William",
    "majestic frost covered Bison closeup by Jordan Grimmer and RHADS and Gilbert Williams and albert bierstadt, hdr, 4k, snow fog, octane, soft render",
    "Chicago by Jordan Grimmer and RHADS and Gilbert Williams",
    "the rocky mountains by Jordan Grimmer and RHADS",
    "the streets of an abandoned crumbling city overgrown by flowers and vines by Jean Delville and John Aktinson Grimshaw and Hubert Robert, german romanticism style, oil on canvas, cinematic lighting, vibrant, hdr, concept art",
    "atompunk wizard tower in a field of flowers landscape by John Harris and RHADS and Gilbert Williams, highly detailed matte painting, hdr, concept art",
    "astronaut standing in a scenic field of flowers at sunset, synthwave, octane, soft render, artstation",
  ];

  // prompts Provider
  let builtin_prompts;
  class PrompterExtraOrdinaire {
    constructor(keyword = "") {
      builtin_prompts = prompts_list.concat();
      if (keyword != "") this.filter(keyword);
    }

    reset() {
      builtin_prompts = prompts_list.concat();
    }

    // isolate a keyword
    filter(keyword = "portrait") {
      builtin_prompts = prompts_list.filter((s) => {
        return s.toLowerCase().lastIndexOf(keyword) != -1;
      });
    }

    // get a random entry
    random() {
      return builtin_prompts[~~(Math.random() * builtin_prompts.length)];
    }

    // randomize list
    randomize() {
      builtin_prompts.sort((a, b) => {
        return Math.random() > 0.5 ? -1 : 1;
      });
    }

    // get next entry
    next() {
      let p = builtin_prompts.shift();
      builtin_prompts.push(p);
      return p.trim();
    }
  }
  const Prompter = new PrompterExtraOrdinaire();

  var tweakpane = {exports: {}};

  (function (module, exports) {
    (function (global, factory) {
      factory(exports) ;
    })(commonjsGlobal, function (exports) {
      /***
       * A simple semantic versioning perser.
       */

      var Semver = /*#__PURE__*/function () {
        /**
         * @hidden
         */
        function Semver(text) {
          _classCallCheck(this, Semver);

          var _text$split = text.split('-'),
              _text$split2 = _slicedToArray(_text$split, 2),
              core = _text$split2[0],
              prerelease = _text$split2[1];

          var coreComps = core.split('.');
          this.major = parseInt(coreComps[0], 10);
          this.minor = parseInt(coreComps[1], 10);
          this.patch = parseInt(coreComps[2], 10);
          this.prerelease = prerelease !== null && prerelease !== void 0 ? prerelease : null;
        }

        _createClass(Semver, [{
          key: "toString",
          value: function toString() {
            var core = [this.major, this.minor, this.patch].join('.');
            return this.prerelease !== null ? [core, this.prerelease].join('-') : core;
          }
        }]);

        return Semver;
      }();

      var BladeApi = /*#__PURE__*/function () {
        function BladeApi(controller) {
          _classCallCheck(this, BladeApi);

          this.controller_ = controller;
        }

        _createClass(BladeApi, [{
          key: "element",
          get: function get() {
            return this.controller_.view.element;
          }
        }, {
          key: "disabled",
          get: function get() {
            return this.controller_.viewProps.get('disabled');
          },
          set: function set(disabled) {
            this.controller_.viewProps.set('disabled', disabled);
          }
        }, {
          key: "hidden",
          get: function get() {
            return this.controller_.viewProps.get('hidden');
          },
          set: function set(hidden) {
            this.controller_.viewProps.set('hidden', hidden);
          }
        }, {
          key: "dispose",
          value: function dispose() {
            this.controller_.viewProps.set('disposed', true);
          }
        }]);

        return BladeApi;
      }();

      var TpEvent = /*#__PURE__*/_createClass(function TpEvent(target) {
        _classCallCheck(this, TpEvent);

        this.target = target;
      });

      var TpChangeEvent = /*#__PURE__*/function (_TpEvent) {
        _inherits(TpChangeEvent, _TpEvent);

        var _super = _createSuper(TpChangeEvent);

        function TpChangeEvent(target, value, presetKey, last) {
          var _this;

          _classCallCheck(this, TpChangeEvent);

          _this = _super.call(this, target);
          _this.value = value;
          _this.presetKey = presetKey;
          _this.last = last !== null && last !== void 0 ? last : true;
          return _this;
        }

        return _createClass(TpChangeEvent);
      }(TpEvent);

      var TpUpdateEvent = /*#__PURE__*/function (_TpEvent2) {
        _inherits(TpUpdateEvent, _TpEvent2);

        var _super2 = _createSuper(TpUpdateEvent);

        function TpUpdateEvent(target, value, presetKey) {
          var _this2;

          _classCallCheck(this, TpUpdateEvent);

          _this2 = _super2.call(this, target);
          _this2.value = value;
          _this2.presetKey = presetKey;
          return _this2;
        }

        return _createClass(TpUpdateEvent);
      }(TpEvent);

      var TpFoldEvent = /*#__PURE__*/function (_TpEvent3) {
        _inherits(TpFoldEvent, _TpEvent3);

        var _super3 = _createSuper(TpFoldEvent);

        function TpFoldEvent(target, expanded) {
          var _this3;

          _classCallCheck(this, TpFoldEvent);

          _this3 = _super3.call(this, target);
          _this3.expanded = expanded;
          return _this3;
        }

        return _createClass(TpFoldEvent);
      }(TpEvent);

      var TpTabSelectEvent = /*#__PURE__*/function (_TpEvent4) {
        _inherits(TpTabSelectEvent, _TpEvent4);

        var _super4 = _createSuper(TpTabSelectEvent);

        function TpTabSelectEvent(target, index) {
          var _this4;

          _classCallCheck(this, TpTabSelectEvent);

          _this4 = _super4.call(this, target);
          _this4.index = index;
          return _this4;
        }

        return _createClass(TpTabSelectEvent);
      }(TpEvent);

      function forceCast(v) {
        return v;
      }

      function isEmpty(value) {
        return value === null || value === undefined;
      }

      function deepEqualsArray(a1, a2) {
        if (a1.length !== a2.length) {
          return false;
        }

        for (var i = 0; i < a1.length; i++) {
          if (a1[i] !== a2[i]) {
            return false;
          }
        }

        return true;
      }

      var CREATE_MESSAGE_MAP = {
        alreadydisposed: function alreadydisposed() {
          return 'View has been already disposed';
        },
        invalidparams: function invalidparams(context) {
          return "Invalid parameters for '".concat(context.name, "'");
        },
        nomatchingcontroller: function nomatchingcontroller(context) {
          return "No matching controller for '".concat(context.key, "'");
        },
        nomatchingview: function nomatchingview(context) {
          return "No matching view for '".concat(JSON.stringify(context.params), "'");
        },
        notbindable: function notbindable() {
          return "Value is not bindable";
        },
        propertynotfound: function propertynotfound(context) {
          return "Property '".concat(context.name, "' not found");
        },
        shouldneverhappen: function shouldneverhappen() {
          return 'This error should never happen';
        }
      };

      var TpError = /*#__PURE__*/function () {
        function TpError(config) {
          _classCallCheck(this, TpError);

          var _a;

          this.message = (_a = CREATE_MESSAGE_MAP[config.type](forceCast(config.context))) !== null && _a !== void 0 ? _a : 'Unexpected error';
          this.name = this.constructor.name;
          this.stack = new Error(this.message).stack;
          this.type = config.type;
        }

        _createClass(TpError, null, [{
          key: "alreadyDisposed",
          value: function alreadyDisposed() {
            return new TpError({
              type: 'alreadydisposed'
            });
          }
        }, {
          key: "notBindable",
          value: function notBindable() {
            return new TpError({
              type: 'notbindable'
            });
          }
        }, {
          key: "propertyNotFound",
          value: function propertyNotFound(name) {
            return new TpError({
              type: 'propertynotfound',
              context: {
                name: name
              }
            });
          }
        }, {
          key: "shouldNeverHappen",
          value: function shouldNeverHappen() {
            return new TpError({
              type: 'shouldneverhappen'
            });
          }
        }]);

        return TpError;
      }();

      var BindingTarget = /*#__PURE__*/function () {
        function BindingTarget(obj, key, opt_id) {
          _classCallCheck(this, BindingTarget);

          this.obj_ = obj;
          this.key_ = key;
          this.presetKey_ = opt_id !== null && opt_id !== void 0 ? opt_id : key;
        }

        _createClass(BindingTarget, [{
          key: "key",
          get: function get() {
            return this.key_;
          }
        }, {
          key: "presetKey",
          get: function get() {
            return this.presetKey_;
          }
        }, {
          key: "read",
          value: function read() {
            return this.obj_[this.key_];
          }
        }, {
          key: "write",
          value: function write(value) {
            this.obj_[this.key_] = value;
          }
        }, {
          key: "writeProperty",
          value: function writeProperty(name, value) {
            var valueObj = this.read();

            if (!BindingTarget.isBindable(valueObj)) {
              throw TpError.notBindable();
            }

            if (!(name in valueObj)) {
              throw TpError.propertyNotFound(name);
            }

            valueObj[name] = value;
          }
        }], [{
          key: "isBindable",
          value: function isBindable(obj) {
            if (obj === null) {
              return false;
            }

            if (_typeof(obj) !== 'object') {
              return false;
            }

            return true;
          }
        }]);

        return BindingTarget;
      }();

      var ButtonApi = /*#__PURE__*/function (_BladeApi) {
        _inherits(ButtonApi, _BladeApi);

        var _super5 = _createSuper(ButtonApi);

        function ButtonApi() {
          _classCallCheck(this, ButtonApi);

          return _super5.apply(this, arguments);
        }

        _createClass(ButtonApi, [{
          key: "label",
          get: function get() {
            return this.controller_.props.get('label');
          },
          set: function set(label) {
            this.controller_.props.set('label', label);
          }
        }, {
          key: "title",
          get: function get() {
            var _a;

            return (_a = this.controller_.valueController.props.get('title')) !== null && _a !== void 0 ? _a : '';
          },
          set: function set(title) {
            this.controller_.valueController.props.set('title', title);
          }
        }, {
          key: "on",
          value: function on(eventName, handler) {
            var _this5 = this;

            var bh = handler.bind(this);
            var emitter = this.controller_.valueController.emitter;
            emitter.on(eventName, function () {
              bh(new TpEvent(_this5));
            });
            return this;
          }
        }]);

        return ButtonApi;
      }(BladeApi);

      var Emitter = /*#__PURE__*/function () {
        function Emitter() {
          _classCallCheck(this, Emitter);

          this.observers_ = {};
        }

        _createClass(Emitter, [{
          key: "on",
          value: function on(eventName, handler) {
            var observers = this.observers_[eventName];

            if (!observers) {
              observers = this.observers_[eventName] = [];
            }

            observers.push({
              handler: handler
            });
            return this;
          }
        }, {
          key: "off",
          value: function off(eventName, handler) {
            var observers = this.observers_[eventName];

            if (observers) {
              this.observers_[eventName] = observers.filter(function (observer) {
                return observer.handler !== handler;
              });
            }

            return this;
          }
        }, {
          key: "emit",
          value: function emit(eventName, event) {
            var observers = this.observers_[eventName];

            if (!observers) {
              return;
            }

            observers.forEach(function (observer) {
              observer.handler(event);
            });
          }
        }]);

        return Emitter;
      }();

      var PREFIX = 'tp';

      function ClassName(viewName) {
        var fn = function fn(opt_elementName, opt_modifier) {
          return [PREFIX, '-', viewName, 'v', opt_elementName ? "_".concat(opt_elementName) : '', opt_modifier ? "-".concat(opt_modifier) : ''].join('');
        };

        return fn;
      }

      function compose(h1, h2) {
        return function (input) {
          return h2(h1(input));
        };
      }

      function extractValue(ev) {
        return ev.rawValue;
      }

      function bindValue(value, applyValue) {
        value.emitter.on('change', compose(extractValue, applyValue));
        applyValue(value.rawValue);
      }

      function bindValueMap(valueMap, key, applyValue) {
        bindValue(valueMap.value(key), applyValue);
      }

      function applyClass(elem, className, active) {
        if (active) {
          elem.classList.add(className);
        } else {
          elem.classList.remove(className);
        }
      }

      function valueToClassName(elem, className) {
        return function (value) {
          applyClass(elem, className, value);
        };
      }

      function bindValueToTextContent(value, elem) {
        bindValue(value, function (text) {
          elem.textContent = text !== null && text !== void 0 ? text : '';
        });
      }

      var className$q = ClassName('btn');

      var ButtonView = /*#__PURE__*/_createClass(function ButtonView(doc, config) {
        _classCallCheck(this, ButtonView);

        this.element = doc.createElement('div');
        this.element.classList.add(className$q());
        config.viewProps.bindClassModifiers(this.element);
        var buttonElem = doc.createElement('button');
        buttonElem.classList.add(className$q('b'));
        config.viewProps.bindDisabled(buttonElem);
        this.element.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        var titleElem = doc.createElement('div');
        titleElem.classList.add(className$q('t'));
        bindValueToTextContent(config.props.value('title'), titleElem);
        this.buttonElement.appendChild(titleElem);
      });

      var ButtonController = /*#__PURE__*/function () {
        function ButtonController(doc, config) {
          _classCallCheck(this, ButtonController);

          this.emitter = new Emitter();
          this.onClick_ = this.onClick_.bind(this);
          this.props = config.props;
          this.viewProps = config.viewProps;
          this.view = new ButtonView(doc, {
            props: this.props,
            viewProps: this.viewProps
          });
          this.view.buttonElement.addEventListener('click', this.onClick_);
        }

        _createClass(ButtonController, [{
          key: "onClick_",
          value: function onClick_() {
            this.emitter.emit('click', {
              sender: this
            });
          }
        }]);

        return ButtonController;
      }();

      var BoundValue = /*#__PURE__*/function () {
        function BoundValue(initialValue, config) {
          _classCallCheck(this, BoundValue);

          var _a;

          this.constraint_ = config === null || config === void 0 ? void 0 : config.constraint;
          this.equals_ = (_a = config === null || config === void 0 ? void 0 : config.equals) !== null && _a !== void 0 ? _a : function (v1, v2) {
            return v1 === v2;
          };
          this.emitter = new Emitter();
          this.rawValue_ = initialValue;
        }

        _createClass(BoundValue, [{
          key: "constraint",
          get: function get() {
            return this.constraint_;
          }
        }, {
          key: "rawValue",
          get: function get() {
            return this.rawValue_;
          },
          set: function set(rawValue) {
            this.setRawValue(rawValue, {
              forceEmit: false,
              last: true
            });
          }
        }, {
          key: "setRawValue",
          value: function setRawValue(rawValue, options) {
            var opts = options !== null && options !== void 0 ? options : {
              forceEmit: false,
              last: true
            };
            var constrainedValue = this.constraint_ ? this.constraint_.constrain(rawValue) : rawValue;
            var changed = !this.equals_(this.rawValue_, constrainedValue);

            if (!changed && !opts.forceEmit) {
              return;
            }

            this.emitter.emit('beforechange', {
              sender: this
            });
            this.rawValue_ = constrainedValue;
            this.emitter.emit('change', {
              options: opts,
              rawValue: constrainedValue,
              sender: this
            });
          }
        }]);

        return BoundValue;
      }();

      var PrimitiveValue = /*#__PURE__*/function () {
        function PrimitiveValue(initialValue) {
          _classCallCheck(this, PrimitiveValue);

          this.emitter = new Emitter();
          this.value_ = initialValue;
        }

        _createClass(PrimitiveValue, [{
          key: "rawValue",
          get: function get() {
            return this.value_;
          },
          set: function set(value) {
            this.setRawValue(value, {
              forceEmit: false,
              last: true
            });
          }
        }, {
          key: "setRawValue",
          value: function setRawValue(value, options) {
            var opts = options !== null && options !== void 0 ? options : {
              forceEmit: false,
              last: true
            };

            if (this.value_ === value && !opts.forceEmit) {
              return;
            }

            this.emitter.emit('beforechange', {
              sender: this
            });
            this.value_ = value;
            this.emitter.emit('change', {
              options: opts,
              rawValue: this.value_,
              sender: this
            });
          }
        }]);

        return PrimitiveValue;
      }();

      function createValue(initialValue, config) {
        var constraint = config === null || config === void 0 ? void 0 : config.constraint;
        var equals = config === null || config === void 0 ? void 0 : config.equals;

        if (!constraint && !equals) {
          return new PrimitiveValue(initialValue);
        }

        return new BoundValue(initialValue, config);
      }

      var ValueMap = /*#__PURE__*/function () {
        function ValueMap(valueMap) {
          var _this6 = this;

          _classCallCheck(this, ValueMap);

          this.emitter = new Emitter();
          this.valMap_ = valueMap;

          var _loop = function _loop(key) {
            var v = _this6.valMap_[key];
            v.emitter.on('change', function () {
              _this6.emitter.emit('change', {
                key: key,
                sender: _this6
              });
            });
          };

          for (var key in this.valMap_) {
            _loop(key);
          }
        }

        _createClass(ValueMap, [{
          key: "get",
          value: function get(key) {
            return this.valMap_[key].rawValue;
          }
        }, {
          key: "set",
          value: function set(key, value) {
            this.valMap_[key].rawValue = value;
          }
        }, {
          key: "value",
          value: function value(key) {
            return this.valMap_[key];
          }
        }], [{
          key: "createCore",
          value: function createCore(initialValue) {
            var keys = Object.keys(initialValue);
            return keys.reduce(function (o, key) {
              return Object.assign(o, _defineProperty({}, key, createValue(initialValue[key])));
            }, {});
          }
        }, {
          key: "fromObject",
          value: function fromObject(initialValue) {
            var core = this.createCore(initialValue);
            return new ValueMap(core);
          }
        }]);

        return ValueMap;
      }();

      function parseObject(value, keyToParserMap) {
        var keys = Object.keys(keyToParserMap);
        var result = keys.reduce(function (tmp, key) {
          if (tmp === undefined) {
            return undefined;
          }

          var parser = keyToParserMap[key];
          var result = parser(value[key]);
          return result.succeeded ? Object.assign(Object.assign({}, tmp), _defineProperty({}, key, result.value)) : undefined;
        }, {});
        return forceCast(result);
      }

      function parseArray(value, parseItem) {
        return value.reduce(function (tmp, item) {
          if (tmp === undefined) {
            return undefined;
          }

          var result = parseItem(item);

          if (!result.succeeded || result.value === undefined) {
            return undefined;
          }

          return [].concat(_toConsumableArray(tmp), [result.value]);
        }, []);
      }

      function isObject(value) {
        if (value === null) {
          return false;
        }

        return _typeof(value) === 'object';
      }

      function createParamsParserBuilder(parse) {
        return function (optional) {
          return function (v) {
            if (!optional && v === undefined) {
              return {
                succeeded: false,
                value: undefined
              };
            }

            if (optional && v === undefined) {
              return {
                succeeded: true,
                value: undefined
              };
            }

            var result = parse(v);
            return result !== undefined ? {
              succeeded: true,
              value: result
            } : {
              succeeded: false,
              value: undefined
            };
          };
        };
      }

      function createParamsParserBuilders(optional) {
        return {
          custom: function custom(parse) {
            return createParamsParserBuilder(parse)(optional);
          },
          "boolean": createParamsParserBuilder(function (v) {
            return typeof v === 'boolean' ? v : undefined;
          })(optional),
          number: createParamsParserBuilder(function (v) {
            return typeof v === 'number' ? v : undefined;
          })(optional),
          string: createParamsParserBuilder(function (v) {
            return typeof v === 'string' ? v : undefined;
          })(optional),
          "function": createParamsParserBuilder(function (v) {
            return typeof v === 'function' ? v : undefined;
          })(optional),
          constant: function constant(value) {
            return createParamsParserBuilder(function (v) {
              return v === value ? value : undefined;
            })(optional);
          },
          raw: createParamsParserBuilder(function (v) {
            return v;
          })(optional),
          object: function object(keyToParserMap) {
            return createParamsParserBuilder(function (v) {
              if (!isObject(v)) {
                return undefined;
              }

              return parseObject(v, keyToParserMap);
            })(optional);
          },
          array: function array(itemParser) {
            return createParamsParserBuilder(function (v) {
              if (!Array.isArray(v)) {
                return undefined;
              }

              return parseArray(v, itemParser);
            })(optional);
          }
        };
      }

      var ParamsParsers = {
        optional: createParamsParserBuilders(true),
        required: createParamsParserBuilders(false)
      };

      function parseParams(value, keyToParserMap) {
        var result = ParamsParsers.required.object(keyToParserMap)(value);
        return result.succeeded ? result.value : undefined;
      }

      function disposeElement(elem) {
        if (elem && elem.parentElement) {
          elem.parentElement.removeChild(elem);
        }

        return null;
      }

      function getAllBladePositions() {
        return ['veryfirst', 'first', 'last', 'verylast'];
      }

      var className$p = ClassName('');
      var POS_TO_CLASS_NAME_MAP = {
        veryfirst: 'vfst',
        first: 'fst',
        last: 'lst',
        verylast: 'vlst'
      };

      var BladeController = /*#__PURE__*/function () {
        function BladeController(config) {
          var _this7 = this;

          _classCallCheck(this, BladeController);

          this.parent_ = null;
          this.blade = config.blade;
          this.view = config.view;
          this.viewProps = config.viewProps;
          var elem = this.view.element;
          this.blade.value('positions').emitter.on('change', function () {
            getAllBladePositions().forEach(function (pos) {
              elem.classList.remove(className$p(undefined, POS_TO_CLASS_NAME_MAP[pos]));
            });

            _this7.blade.get('positions').forEach(function (pos) {
              elem.classList.add(className$p(undefined, POS_TO_CLASS_NAME_MAP[pos]));
            });
          });
          this.viewProps.handleDispose(function () {
            disposeElement(elem);
          });
        }

        _createClass(BladeController, [{
          key: "parent",
          get: function get() {
            return this.parent_;
          }
        }]);

        return BladeController;
      }();

      var SVG_NS = 'http://www.w3.org/2000/svg';

      function forceReflow(element) {
        element.offsetHeight;
      }

      function disableTransitionTemporarily(element, callback) {
        var t = element.style.transition;
        element.style.transition = 'none';
        callback();
        element.style.transition = t;
      }

      function supportsTouch(doc) {
        return doc.ontouchstart !== undefined;
      }

      function getGlobalObject() {
        return new Function('return this')();
      }

      function getWindowDocument() {
        var globalObj = forceCast(getGlobalObject());
        return globalObj.document;
      }

      function getCanvasContext(canvasElement) {
        var win = canvasElement.ownerDocument.defaultView;

        if (!win) {
          return null;
        }

        var isBrowser = ('document' in win);
        return isBrowser ? canvasElement.getContext('2d') : null;
      }

      var ICON_ID_TO_INNER_HTML_MAP = {
        check: '<path d="M2 8l4 4l8 -8"/>',
        dropdown: '<path d="M5 7h6l-3 3 z"/>',
        p2dpad: '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'
      };

      function createSvgIconElement(document, iconId) {
        var elem = document.createElementNS(SVG_NS, 'svg');
        elem.innerHTML = ICON_ID_TO_INNER_HTML_MAP[iconId];
        return elem;
      }

      function insertElementAt(parentElement, element, index) {
        parentElement.insertBefore(element, parentElement.children[index]);
      }

      function removeElement(element) {
        if (element.parentElement) {
          element.parentElement.removeChild(element);
        }
      }

      function removeChildElements(element) {
        while (element.children.length > 0) {
          element.removeChild(element.children[0]);
        }
      }

      function removeChildNodes(element) {
        while (element.childNodes.length > 0) {
          element.removeChild(element.childNodes[0]);
        }
      }

      function findNextTarget(ev) {
        if (ev.relatedTarget) {
          return forceCast(ev.relatedTarget);
        }

        if ('explicitOriginalTarget' in ev) {
          return ev.explicitOriginalTarget;
        }

        return null;
      }

      var className$o = ClassName('lbl');

      function createLabelNode(doc, label) {
        var frag = doc.createDocumentFragment();
        var lineNodes = label.split('\n').map(function (line) {
          return doc.createTextNode(line);
        });
        lineNodes.forEach(function (lineNode, index) {
          if (index > 0) {
            frag.appendChild(doc.createElement('br'));
          }

          frag.appendChild(lineNode);
        });
        return frag;
      }

      var LabelView = /*#__PURE__*/_createClass(function LabelView(doc, config) {
        var _this8 = this;

        _classCallCheck(this, LabelView);

        this.element = doc.createElement('div');
        this.element.classList.add(className$o());
        config.viewProps.bindClassModifiers(this.element);
        var labelElem = doc.createElement('div');
        labelElem.classList.add(className$o('l'));
        bindValueMap(config.props, 'label', function (value) {
          if (isEmpty(value)) {
            _this8.element.classList.add(className$o(undefined, 'nol'));
          } else {
            _this8.element.classList.remove(className$o(undefined, 'nol'));

            removeChildNodes(labelElem);
            labelElem.appendChild(createLabelNode(doc, value));
          }
        });
        this.element.appendChild(labelElem);
        this.labelElement = labelElem;
        var valueElem = doc.createElement('div');
        valueElem.classList.add(className$o('v'));
        this.element.appendChild(valueElem);
        this.valueElement = valueElem;
      });

      var LabelController = /*#__PURE__*/function (_BladeController) {
        _inherits(LabelController, _BladeController);

        var _super6 = _createSuper(LabelController);

        function LabelController(doc, config) {
          var _this9;

          _classCallCheck(this, LabelController);

          var viewProps = config.valueController.viewProps;
          _this9 = _super6.call(this, Object.assign(Object.assign({}, config), {
            view: new LabelView(doc, {
              props: config.props,
              viewProps: viewProps
            }),
            viewProps: viewProps
          }));
          _this9.props = config.props;
          _this9.valueController = config.valueController;

          _this9.view.valueElement.appendChild(_this9.valueController.view.element);

          return _this9;
        }

        return _createClass(LabelController);
      }(BladeController);

      var ButtonBladePlugin = {
        id: 'button',
        type: 'blade',
        accept: function accept(params) {
          var p = ParamsParsers;
          var result = parseParams(params, {
            title: p.required.string,
            view: p.required.constant('button'),
            label: p.optional.string
          });
          return result ? {
            params: result
          } : null;
        },
        controller: function controller(args) {
          return new LabelController(args.document, {
            blade: args.blade,
            props: ValueMap.fromObject({
              label: args.params.label
            }),
            valueController: new ButtonController(args.document, {
              props: ValueMap.fromObject({
                title: args.params.title
              }),
              viewProps: args.viewProps
            })
          });
        },
        api: function api(args) {
          if (!(args.controller instanceof LabelController)) {
            return null;
          }

          if (!(args.controller.valueController instanceof ButtonController)) {
            return null;
          }

          return new ButtonApi(args.controller);
        }
      };

      var ValueBladeController = /*#__PURE__*/function (_BladeController2) {
        _inherits(ValueBladeController, _BladeController2);

        var _super7 = _createSuper(ValueBladeController);

        function ValueBladeController(config) {
          var _this10;

          _classCallCheck(this, ValueBladeController);

          _this10 = _super7.call(this, config);
          _this10.value = config.value;
          return _this10;
        }

        return _createClass(ValueBladeController);
      }(BladeController);

      function createBlade() {
        return new ValueMap({
          positions: createValue([], {
            equals: deepEqualsArray
          })
        });
      }

      var Foldable = /*#__PURE__*/function (_ValueMap) {
        _inherits(Foldable, _ValueMap);

        var _super8 = _createSuper(Foldable);

        function Foldable(valueMap) {
          _classCallCheck(this, Foldable);

          return _super8.call(this, valueMap);
        }

        _createClass(Foldable, [{
          key: "styleExpanded",
          get: function get() {
            var _a;

            return (_a = this.get('temporaryExpanded')) !== null && _a !== void 0 ? _a : this.get('expanded');
          }
        }, {
          key: "styleHeight",
          get: function get() {
            if (!this.styleExpanded) {
              return '0';
            }

            var exHeight = this.get('expandedHeight');

            if (this.get('shouldFixHeight') && !isEmpty(exHeight)) {
              return "".concat(exHeight, "px");
            }

            return 'auto';
          }
        }, {
          key: "bindExpandedClass",
          value: function bindExpandedClass(elem, expandedClassName) {
            var _this11 = this;

            var onExpand = function onExpand() {
              var expanded = _this11.styleExpanded;

              if (expanded) {
                elem.classList.add(expandedClassName);
              } else {
                elem.classList.remove(expandedClassName);
              }
            };

            bindValueMap(this, 'expanded', onExpand);
            bindValueMap(this, 'temporaryExpanded', onExpand);
          }
        }, {
          key: "cleanUpTransition",
          value: function cleanUpTransition() {
            this.set('shouldFixHeight', false);
            this.set('expandedHeight', null);
            this.set('completed', true);
          }
        }], [{
          key: "create",
          value: function create(expanded) {
            var coreObj = {
              completed: true,
              expanded: expanded,
              expandedHeight: null,
              shouldFixHeight: false,
              temporaryExpanded: null
            };
            var core = ValueMap.createCore(coreObj);
            return new Foldable(core);
          }
        }]);

        return Foldable;
      }(ValueMap);

      function computeExpandedFolderHeight(folder, containerElement) {
        var height = 0;
        disableTransitionTemporarily(containerElement, function () {
          folder.set('expandedHeight', null);
          folder.set('temporaryExpanded', true);
          forceReflow(containerElement);
          height = containerElement.clientHeight;
          folder.set('temporaryExpanded', null);
          forceReflow(containerElement);
        });
        return height;
      }

      function applyHeight(foldable, elem) {
        elem.style.height = foldable.styleHeight;
      }

      function bindFoldable(foldable, elem) {
        foldable.value('expanded').emitter.on('beforechange', function () {
          foldable.set('completed', false);

          if (isEmpty(foldable.get('expandedHeight'))) {
            foldable.set('expandedHeight', computeExpandedFolderHeight(foldable, elem));
          }

          foldable.set('shouldFixHeight', true);
          forceReflow(elem);
        });
        foldable.emitter.on('change', function () {
          applyHeight(foldable, elem);
        });
        applyHeight(foldable, elem);
        elem.addEventListener('transitionend', function (ev) {
          if (ev.propertyName !== 'height') {
            return;
          }

          foldable.cleanUpTransition();
        });
      }

      var RackLikeApi = /*#__PURE__*/function (_BladeApi2) {
        _inherits(RackLikeApi, _BladeApi2);

        var _super9 = _createSuper(RackLikeApi);

        function RackLikeApi(controller, rackApi) {
          var _this12;

          _classCallCheck(this, RackLikeApi);

          _this12 = _super9.call(this, controller);
          _this12.rackApi_ = rackApi;
          return _this12;
        }

        return _createClass(RackLikeApi);
      }(BladeApi);

      function addButtonAsBlade(api, params) {
        return api.addBlade(Object.assign(Object.assign({}, params), {
          view: 'button'
        }));
      }

      function addFolderAsBlade(api, params) {
        return api.addBlade(Object.assign(Object.assign({}, params), {
          view: 'folder'
        }));
      }

      function addSeparatorAsBlade(api, opt_params) {
        var params = opt_params !== null && opt_params !== void 0 ? opt_params : {};
        return api.addBlade(Object.assign(Object.assign({}, params), {
          view: 'separator'
        }));
      }

      function addTabAsBlade(api, params) {
        return api.addBlade(Object.assign(Object.assign({}, params), {
          view: 'tab'
        }));
      }

      var NestedOrderedSet = /*#__PURE__*/function () {
        function NestedOrderedSet(extract) {
          _classCallCheck(this, NestedOrderedSet);

          this.emitter = new Emitter();
          this.items_ = [];
          this.cache_ = new Set();
          this.onSubListAdd_ = this.onSubListAdd_.bind(this);
          this.onSubListRemove_ = this.onSubListRemove_.bind(this);
          this.extract_ = extract;
        }

        _createClass(NestedOrderedSet, [{
          key: "items",
          get: function get() {
            return this.items_;
          }
        }, {
          key: "allItems",
          value: function allItems() {
            return Array.from(this.cache_);
          }
        }, {
          key: "find",
          value: function find(callback) {
            var _iterator = _createForOfIteratorHelper(this.allItems()),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;

                if (callback(item)) {
                  return item;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return null;
          }
        }, {
          key: "includes",
          value: function includes(item) {
            return this.cache_.has(item);
          }
        }, {
          key: "add",
          value: function add(item, opt_index) {
            var _this13 = this;

            if (this.includes(item)) {
              throw TpError.shouldNeverHappen();
            }

            var index = opt_index !== undefined ? opt_index : this.items_.length;
            this.items_.splice(index, 0, item);
            this.cache_.add(item);
            var subList = this.extract_(item);

            if (subList) {
              subList.emitter.on('add', this.onSubListAdd_);
              subList.emitter.on('remove', this.onSubListRemove_);
              subList.allItems().forEach(function (item) {
                _this13.cache_.add(item);
              });
            }

            this.emitter.emit('add', {
              index: index,
              item: item,
              root: this,
              target: this
            });
          }
        }, {
          key: "remove",
          value: function remove(item) {
            var index = this.items_.indexOf(item);

            if (index < 0) {
              return;
            }

            this.items_.splice(index, 1);
            this.cache_["delete"](item);
            var subList = this.extract_(item);

            if (subList) {
              subList.emitter.off('add', this.onSubListAdd_);
              subList.emitter.off('remove', this.onSubListRemove_);
            }

            this.emitter.emit('remove', {
              index: index,
              item: item,
              root: this,
              target: this
            });
          }
        }, {
          key: "onSubListAdd_",
          value: function onSubListAdd_(ev) {
            this.cache_.add(ev.item);
            this.emitter.emit('add', {
              index: ev.index,
              item: ev.item,
              root: this,
              target: ev.target
            });
          }
        }, {
          key: "onSubListRemove_",
          value: function onSubListRemove_(ev) {
            this.cache_["delete"](ev.item);
            this.emitter.emit('remove', {
              index: ev.index,
              item: ev.item,
              root: this,
              target: ev.target
            });
          }
        }]);

        return NestedOrderedSet;
      }();

      var InputBindingApi = /*#__PURE__*/function (_BladeApi3) {
        _inherits(InputBindingApi, _BladeApi3);

        var _super10 = _createSuper(InputBindingApi);

        function InputBindingApi(controller) {
          var _this14;

          _classCallCheck(this, InputBindingApi);

          _this14 = _super10.call(this, controller);
          _this14.onBindingChange_ = _this14.onBindingChange_.bind(_assertThisInitialized(_this14));
          _this14.emitter_ = new Emitter();

          _this14.controller_.binding.emitter.on('change', _this14.onBindingChange_);

          return _this14;
        }

        _createClass(InputBindingApi, [{
          key: "label",
          get: function get() {
            return this.controller_.props.get('label');
          },
          set: function set(label) {
            this.controller_.props.set('label', label);
          }
        }, {
          key: "on",
          value: function on(eventName, handler) {
            var bh = handler.bind(this);
            this.emitter_.on(eventName, function (ev) {
              bh(ev.event);
            });
            return this;
          }
        }, {
          key: "refresh",
          value: function refresh() {
            this.controller_.binding.read();
          }
        }, {
          key: "onBindingChange_",
          value: function onBindingChange_(ev) {
            var value = ev.sender.target.read();
            this.emitter_.emit('change', {
              event: new TpChangeEvent(this, forceCast(value), this.controller_.binding.target.presetKey, ev.options.last)
            });
          }
        }]);

        return InputBindingApi;
      }(BladeApi);

      var InputBindingController = /*#__PURE__*/function (_LabelController) {
        _inherits(InputBindingController, _LabelController);

        var _super11 = _createSuper(InputBindingController);

        function InputBindingController(doc, config) {
          var _this15;

          _classCallCheck(this, InputBindingController);

          _this15 = _super11.call(this, doc, config);
          _this15.binding = config.binding;
          return _this15;
        }

        return _createClass(InputBindingController);
      }(LabelController);

      var MonitorBindingApi = /*#__PURE__*/function (_BladeApi4) {
        _inherits(MonitorBindingApi, _BladeApi4);

        var _super12 = _createSuper(MonitorBindingApi);

        function MonitorBindingApi(controller) {
          var _this16;

          _classCallCheck(this, MonitorBindingApi);

          _this16 = _super12.call(this, controller);
          _this16.onBindingUpdate_ = _this16.onBindingUpdate_.bind(_assertThisInitialized(_this16));
          _this16.emitter_ = new Emitter();

          _this16.controller_.binding.emitter.on('update', _this16.onBindingUpdate_);

          return _this16;
        }

        _createClass(MonitorBindingApi, [{
          key: "label",
          get: function get() {
            return this.controller_.props.get('label');
          },
          set: function set(label) {
            this.controller_.props.set('label', label);
          }
        }, {
          key: "on",
          value: function on(eventName, handler) {
            var bh = handler.bind(this);
            this.emitter_.on(eventName, function (ev) {
              bh(ev.event);
            });
            return this;
          }
        }, {
          key: "refresh",
          value: function refresh() {
            this.controller_.binding.read();
          }
        }, {
          key: "onBindingUpdate_",
          value: function onBindingUpdate_(ev) {
            var value = ev.sender.target.read();
            this.emitter_.emit('update', {
              event: new TpUpdateEvent(this, forceCast(value), this.controller_.binding.target.presetKey)
            });
          }
        }]);

        return MonitorBindingApi;
      }(BladeApi);

      var MonitorBindingController = /*#__PURE__*/function (_LabelController2) {
        _inherits(MonitorBindingController, _LabelController2);

        var _super13 = _createSuper(MonitorBindingController);

        function MonitorBindingController(doc, config) {
          var _this17;

          _classCallCheck(this, MonitorBindingController);

          _this17 = _super13.call(this, doc, config);
          _this17.binding = config.binding;

          _this17.viewProps.bindDisabled(_this17.binding.ticker);

          _this17.viewProps.handleDispose(function () {
            _this17.binding.dispose();
          });

          return _this17;
        }

        return _createClass(MonitorBindingController);
      }(LabelController);

      function findSubBladeApiSet(api) {
        if (api instanceof RackApi) {
          return api['apiSet_'];
        }

        if (api instanceof RackLikeApi) {
          return api['rackApi_']['apiSet_'];
        }

        return null;
      }

      function getApiByController(apiSet, controller) {
        var api = apiSet.find(function (api) {
          return api.controller_ === controller;
        });

        if (!api) {
          throw TpError.shouldNeverHappen();
        }

        return api;
      }

      function createBindingTarget(obj, key, opt_id) {
        if (!BindingTarget.isBindable(obj)) {
          throw TpError.notBindable();
        }

        return new BindingTarget(obj, key, opt_id);
      }

      var RackApi = /*#__PURE__*/function (_BladeApi5) {
        _inherits(RackApi, _BladeApi5);

        var _super14 = _createSuper(RackApi);

        function RackApi(controller, pool) {
          var _this18;

          _classCallCheck(this, RackApi);

          _this18 = _super14.call(this, controller);
          _this18.onRackAdd_ = _this18.onRackAdd_.bind(_assertThisInitialized(_this18));
          _this18.onRackRemove_ = _this18.onRackRemove_.bind(_assertThisInitialized(_this18));
          _this18.onRackInputChange_ = _this18.onRackInputChange_.bind(_assertThisInitialized(_this18));
          _this18.onRackMonitorUpdate_ = _this18.onRackMonitorUpdate_.bind(_assertThisInitialized(_this18));
          _this18.emitter_ = new Emitter();
          _this18.apiSet_ = new NestedOrderedSet(findSubBladeApiSet);
          _this18.pool_ = pool;
          var rack = _this18.controller_.rack;
          rack.emitter.on('add', _this18.onRackAdd_);
          rack.emitter.on('remove', _this18.onRackRemove_);
          rack.emitter.on('inputchange', _this18.onRackInputChange_);
          rack.emitter.on('monitorupdate', _this18.onRackMonitorUpdate_);
          rack.children.forEach(function (bc) {
            _this18.setUpApi_(bc);
          });
          return _this18;
        }

        _createClass(RackApi, [{
          key: "children",
          get: function get() {
            var _this19 = this;

            return this.controller_.rack.children.map(function (bc) {
              return getApiByController(_this19.apiSet_, bc);
            });
          }
        }, {
          key: "addInput",
          value: function addInput(object, key, opt_params) {
            var params = opt_params !== null && opt_params !== void 0 ? opt_params : {};
            var doc = this.controller_.view.element.ownerDocument;
            var bc = this.pool_.createInput(doc, createBindingTarget(object, key, params.presetKey), params);
            var api = new InputBindingApi(bc);
            return this.add(api, params.index);
          }
        }, {
          key: "addMonitor",
          value: function addMonitor(object, key, opt_params) {
            var params = opt_params !== null && opt_params !== void 0 ? opt_params : {};
            var doc = this.controller_.view.element.ownerDocument;
            var bc = this.pool_.createMonitor(doc, createBindingTarget(object, key), params);
            var api = new MonitorBindingApi(bc);
            return forceCast(this.add(api, params.index));
          }
        }, {
          key: "addFolder",
          value: function addFolder(params) {
            return addFolderAsBlade(this, params);
          }
        }, {
          key: "addButton",
          value: function addButton(params) {
            return addButtonAsBlade(this, params);
          }
        }, {
          key: "addSeparator",
          value: function addSeparator(opt_params) {
            return addSeparatorAsBlade(this, opt_params);
          }
        }, {
          key: "addTab",
          value: function addTab(params) {
            return addTabAsBlade(this, params);
          }
        }, {
          key: "add",
          value: function add(api, opt_index) {
            this.controller_.rack.add(api.controller_, opt_index);
            var gapi = this.apiSet_.find(function (a) {
              return a.controller_ === api.controller_;
            });

            if (gapi) {
              this.apiSet_.remove(gapi);
            }

            this.apiSet_.add(api);
            return api;
          }
        }, {
          key: "remove",
          value: function remove(api) {
            this.controller_.rack.remove(api.controller_);
          }
        }, {
          key: "addBlade",
          value: function addBlade(params) {
            var doc = this.controller_.view.element.ownerDocument;
            var bc = this.pool_.createBlade(doc, params);
            var api = this.pool_.createBladeApi(bc);
            return this.add(api, params.index);
          }
        }, {
          key: "on",
          value: function on(eventName, handler) {
            var bh = handler.bind(this);
            this.emitter_.on(eventName, function (ev) {
              bh(ev.event);
            });
            return this;
          }
        }, {
          key: "setUpApi_",
          value: function setUpApi_(bc) {
            var api = this.apiSet_.find(function (api) {
              return api.controller_ === bc;
            });

            if (!api) {
              this.apiSet_.add(this.pool_.createBladeApi(bc));
            }
          }
        }, {
          key: "onRackAdd_",
          value: function onRackAdd_(ev) {
            this.setUpApi_(ev.bladeController);
          }
        }, {
          key: "onRackRemove_",
          value: function onRackRemove_(ev) {
            if (ev.isRoot) {
              var api = getApiByController(this.apiSet_, ev.bladeController);
              this.apiSet_.remove(api);
            }
          }
        }, {
          key: "onRackInputChange_",
          value: function onRackInputChange_(ev) {
            var bc = ev.bladeController;

            if (bc instanceof InputBindingController) {
              var api = getApiByController(this.apiSet_, bc);
              var binding = bc.binding;
              this.emitter_.emit('change', {
                event: new TpChangeEvent(api, forceCast(binding.target.read()), binding.target.presetKey, ev.options.last)
              });
            } else if (bc instanceof ValueBladeController) {
              var _api = getApiByController(this.apiSet_, bc);

              this.emitter_.emit('change', {
                event: new TpChangeEvent(_api, bc.value.rawValue, undefined, ev.options.last)
              });
            }
          }
        }, {
          key: "onRackMonitorUpdate_",
          value: function onRackMonitorUpdate_(ev) {
            if (!(ev.bladeController instanceof MonitorBindingController)) {
              throw TpError.shouldNeverHappen();
            }

            var api = getApiByController(this.apiSet_, ev.bladeController);
            var binding = ev.bladeController.binding;
            this.emitter_.emit('update', {
              event: new TpUpdateEvent(api, forceCast(binding.target.read()), binding.target.presetKey)
            });
          }
        }]);

        return RackApi;
      }(BladeApi);

      var FolderApi = /*#__PURE__*/function (_RackLikeApi) {
        _inherits(FolderApi, _RackLikeApi);

        var _super15 = _createSuper(FolderApi);

        function FolderApi(controller, pool) {
          var _this20;

          _classCallCheck(this, FolderApi);

          _this20 = _super15.call(this, controller, new RackApi(controller.rackController, pool));
          _this20.emitter_ = new Emitter();

          _this20.controller_.foldable.value('expanded').emitter.on('change', function (ev) {
            _this20.emitter_.emit('fold', {
              event: new TpFoldEvent(_assertThisInitialized(_this20), ev.sender.rawValue)
            });
          });

          _this20.rackApi_.on('change', function (ev) {
            _this20.emitter_.emit('change', {
              event: ev
            });
          });

          _this20.rackApi_.on('update', function (ev) {
            _this20.emitter_.emit('update', {
              event: ev
            });
          });

          return _this20;
        }

        _createClass(FolderApi, [{
          key: "expanded",
          get: function get() {
            return this.controller_.foldable.get('expanded');
          },
          set: function set(expanded) {
            this.controller_.foldable.set('expanded', expanded);
          }
        }, {
          key: "title",
          get: function get() {
            return this.controller_.props.get('title');
          },
          set: function set(title) {
            this.controller_.props.set('title', title);
          }
        }, {
          key: "children",
          get: function get() {
            return this.rackApi_.children;
          }
        }, {
          key: "addInput",
          value: function addInput(object, key, opt_params) {
            return this.rackApi_.addInput(object, key, opt_params);
          }
        }, {
          key: "addMonitor",
          value: function addMonitor(object, key, opt_params) {
            return this.rackApi_.addMonitor(object, key, opt_params);
          }
        }, {
          key: "addFolder",
          value: function addFolder(params) {
            return this.rackApi_.addFolder(params);
          }
        }, {
          key: "addButton",
          value: function addButton(params) {
            return this.rackApi_.addButton(params);
          }
        }, {
          key: "addSeparator",
          value: function addSeparator(opt_params) {
            return this.rackApi_.addSeparator(opt_params);
          }
        }, {
          key: "addTab",
          value: function addTab(params) {
            return this.rackApi_.addTab(params);
          }
        }, {
          key: "add",
          value: function add(api, opt_index) {
            return this.rackApi_.add(api, opt_index);
          }
        }, {
          key: "remove",
          value: function remove(api) {
            this.rackApi_.remove(api);
          }
        }, {
          key: "addBlade",
          value: function addBlade(params) {
            return this.rackApi_.addBlade(params);
          }
        }, {
          key: "on",
          value: function on(eventName, handler) {
            var bh = handler.bind(this);
            this.emitter_.on(eventName, function (ev) {
              bh(ev.event);
            });
            return this;
          }
        }]);

        return FolderApi;
      }(RackLikeApi);

      var RackLikeController = /*#__PURE__*/function (_BladeController3) {
        _inherits(RackLikeController, _BladeController3);

        var _super16 = _createSuper(RackLikeController);

        function RackLikeController(config) {
          var _this21;

          _classCallCheck(this, RackLikeController);

          _this21 = _super16.call(this, {
            blade: config.blade,
            view: config.view,
            viewProps: config.rackController.viewProps
          });
          _this21.rackController = config.rackController;
          return _this21;
        }

        return _createClass(RackLikeController);
      }(BladeController);

      var PlainView = /*#__PURE__*/_createClass(function PlainView(doc, config) {
        _classCallCheck(this, PlainView);

        var className = ClassName(config.viewName);
        this.element = doc.createElement('div');
        this.element.classList.add(className());
        config.viewProps.bindClassModifiers(this.element);
      });

      function findInputBindingController(bcs, b) {
        for (var i = 0; i < bcs.length; i++) {
          var bc = bcs[i];

          if (bc instanceof InputBindingController && bc.binding === b) {
            return bc;
          }
        }

        return null;
      }

      function findMonitorBindingController(bcs, b) {
        for (var i = 0; i < bcs.length; i++) {
          var bc = bcs[i];

          if (bc instanceof MonitorBindingController && bc.binding === b) {
            return bc;
          }
        }

        return null;
      }

      function findValueBladeController(bcs, v) {
        for (var i = 0; i < bcs.length; i++) {
          var bc = bcs[i];

          if (bc instanceof ValueBladeController && bc.value === v) {
            return bc;
          }
        }

        return null;
      }

      function findSubRack(bc) {
        if (bc instanceof RackController) {
          return bc.rack;
        }

        if (bc instanceof RackLikeController) {
          return bc.rackController.rack;
        }

        return null;
      }

      function findSubBladeControllerSet(bc) {
        var rack = findSubRack(bc);
        return rack ? rack['bcSet_'] : null;
      }

      var BladeRack = /*#__PURE__*/function () {
        function BladeRack(blade) {
          _classCallCheck(this, BladeRack);

          var _a;

          this.onBladePositionsChange_ = this.onBladePositionsChange_.bind(this);
          this.onSetAdd_ = this.onSetAdd_.bind(this);
          this.onSetRemove_ = this.onSetRemove_.bind(this);
          this.onChildDispose_ = this.onChildDispose_.bind(this);
          this.onChildPositionsChange_ = this.onChildPositionsChange_.bind(this);
          this.onChildInputChange_ = this.onChildInputChange_.bind(this);
          this.onChildMonitorUpdate_ = this.onChildMonitorUpdate_.bind(this);
          this.onChildValueChange_ = this.onChildValueChange_.bind(this);
          this.onChildViewPropsChange_ = this.onChildViewPropsChange_.bind(this);
          this.onDescendantLayout_ = this.onDescendantLayout_.bind(this);
          this.onDescendantInputChange_ = this.onDescendantInputChange_.bind(this);
          this.onDescendantMonitorUpdate_ = this.onDescendantMonitorUpdate_.bind(this);
          this.emitter = new Emitter();
          this.blade_ = blade !== null && blade !== void 0 ? blade : null;
          (_a = this.blade_) === null || _a === void 0 ? void 0 : _a.value('positions').emitter.on('change', this.onBladePositionsChange_);
          this.bcSet_ = new NestedOrderedSet(findSubBladeControllerSet);
          this.bcSet_.emitter.on('add', this.onSetAdd_);
          this.bcSet_.emitter.on('remove', this.onSetRemove_);
        }

        _createClass(BladeRack, [{
          key: "children",
          get: function get() {
            return this.bcSet_.items;
          }
        }, {
          key: "add",
          value: function add(bc, opt_index) {
            if (bc.parent) {
              bc.parent.remove(bc);
            }

            bc['parent_'] = this;
            this.bcSet_.add(bc, opt_index);
          }
        }, {
          key: "remove",
          value: function remove(bc) {
            bc['parent_'] = null;
            this.bcSet_.remove(bc);
          }
        }, {
          key: "find",
          value: function find(controllerClass) {
            return forceCast(this.bcSet_.allItems().filter(function (bc) {
              return bc instanceof controllerClass;
            }));
          }
        }, {
          key: "onSetAdd_",
          value: function onSetAdd_(ev) {
            this.updatePositions_();
            var isRoot = ev.target === ev.root;
            this.emitter.emit('add', {
              bladeController: ev.item,
              index: ev.index,
              isRoot: isRoot,
              sender: this
            });

            if (!isRoot) {
              return;
            }

            var bc = ev.item;
            bc.viewProps.emitter.on('change', this.onChildViewPropsChange_);
            bc.blade.value('positions').emitter.on('change', this.onChildPositionsChange_);
            bc.viewProps.handleDispose(this.onChildDispose_);

            if (bc instanceof InputBindingController) {
              bc.binding.emitter.on('change', this.onChildInputChange_);
            } else if (bc instanceof MonitorBindingController) {
              bc.binding.emitter.on('update', this.onChildMonitorUpdate_);
            } else if (bc instanceof ValueBladeController) {
              bc.value.emitter.on('change', this.onChildValueChange_);
            } else {
              var rack = findSubRack(bc);

              if (rack) {
                var emitter = rack.emitter;
                emitter.on('layout', this.onDescendantLayout_);
                emitter.on('inputchange', this.onDescendantInputChange_);
                emitter.on('monitorupdate', this.onDescendantMonitorUpdate_);
              }
            }
          }
        }, {
          key: "onSetRemove_",
          value: function onSetRemove_(ev) {
            this.updatePositions_();
            var isRoot = ev.target === ev.root;
            this.emitter.emit('remove', {
              bladeController: ev.item,
              isRoot: isRoot,
              sender: this
            });

            if (!isRoot) {
              return;
            }

            var bc = ev.item;

            if (bc instanceof InputBindingController) {
              bc.binding.emitter.off('change', this.onChildInputChange_);
            } else if (bc instanceof MonitorBindingController) {
              bc.binding.emitter.off('update', this.onChildMonitorUpdate_);
            } else if (bc instanceof ValueBladeController) {
              bc.value.emitter.off('change', this.onChildValueChange_);
            } else {
              var rack = findSubRack(bc);

              if (rack) {
                var emitter = rack.emitter;
                emitter.off('layout', this.onDescendantLayout_);
                emitter.off('inputchange', this.onDescendantInputChange_);
                emitter.off('monitorupdate', this.onDescendantMonitorUpdate_);
              }
            }
          }
        }, {
          key: "updatePositions_",
          value: function updatePositions_() {
            var _this22 = this;

            var visibleItems = this.bcSet_.items.filter(function (bc) {
              return !bc.viewProps.get('hidden');
            });
            var firstVisibleItem = visibleItems[0];
            var lastVisibleItem = visibleItems[visibleItems.length - 1];
            this.bcSet_.items.forEach(function (bc) {
              var ps = [];

              if (bc === firstVisibleItem) {
                ps.push('first');

                if (!_this22.blade_ || _this22.blade_.get('positions').includes('veryfirst')) {
                  ps.push('veryfirst');
                }
              }

              if (bc === lastVisibleItem) {
                ps.push('last');

                if (!_this22.blade_ || _this22.blade_.get('positions').includes('verylast')) {
                  ps.push('verylast');
                }
              }

              bc.blade.set('positions', ps);
            });
          }
        }, {
          key: "onChildPositionsChange_",
          value: function onChildPositionsChange_() {
            this.updatePositions_();
            this.emitter.emit('layout', {
              sender: this
            });
          }
        }, {
          key: "onChildViewPropsChange_",
          value: function onChildViewPropsChange_(_ev) {
            this.updatePositions_();
            this.emitter.emit('layout', {
              sender: this
            });
          }
        }, {
          key: "onChildDispose_",
          value: function onChildDispose_() {
            var _this23 = this;

            var disposedUcs = this.bcSet_.items.filter(function (bc) {
              return bc.viewProps.get('disposed');
            });
            disposedUcs.forEach(function (bc) {
              _this23.bcSet_.remove(bc);
            });
          }
        }, {
          key: "onChildInputChange_",
          value: function onChildInputChange_(ev) {
            var bc = findInputBindingController(this.find(InputBindingController), ev.sender);

            if (!bc) {
              throw TpError.shouldNeverHappen();
            }

            this.emitter.emit('inputchange', {
              bladeController: bc,
              options: ev.options,
              sender: this
            });
          }
        }, {
          key: "onChildMonitorUpdate_",
          value: function onChildMonitorUpdate_(ev) {
            var bc = findMonitorBindingController(this.find(MonitorBindingController), ev.sender);

            if (!bc) {
              throw TpError.shouldNeverHappen();
            }

            this.emitter.emit('monitorupdate', {
              bladeController: bc,
              sender: this
            });
          }
        }, {
          key: "onChildValueChange_",
          value: function onChildValueChange_(ev) {
            var bc = findValueBladeController(this.find(ValueBladeController), ev.sender);

            if (!bc) {
              throw TpError.shouldNeverHappen();
            }

            this.emitter.emit('inputchange', {
              bladeController: bc,
              options: ev.options,
              sender: this
            });
          }
        }, {
          key: "onDescendantLayout_",
          value: function onDescendantLayout_(_) {
            this.updatePositions_();
            this.emitter.emit('layout', {
              sender: this
            });
          }
        }, {
          key: "onDescendantInputChange_",
          value: function onDescendantInputChange_(ev) {
            this.emitter.emit('inputchange', {
              bladeController: ev.bladeController,
              options: ev.options,
              sender: this
            });
          }
        }, {
          key: "onDescendantMonitorUpdate_",
          value: function onDescendantMonitorUpdate_(ev) {
            this.emitter.emit('monitorupdate', {
              bladeController: ev.bladeController,
              sender: this
            });
          }
        }, {
          key: "onBladePositionsChange_",
          value: function onBladePositionsChange_() {
            this.updatePositions_();
          }
        }]);

        return BladeRack;
      }();

      var RackController = /*#__PURE__*/function (_BladeController4) {
        _inherits(RackController, _BladeController4);

        var _super17 = _createSuper(RackController);

        function RackController(doc, config) {
          var _this24;

          _classCallCheck(this, RackController);

          _this24 = _super17.call(this, Object.assign(Object.assign({}, config), {
            view: new PlainView(doc, {
              viewName: 'brk',
              viewProps: config.viewProps
            })
          }));
          _this24.onRackAdd_ = _this24.onRackAdd_.bind(_assertThisInitialized(_this24));
          _this24.onRackRemove_ = _this24.onRackRemove_.bind(_assertThisInitialized(_this24));
          var rack = new BladeRack(config.root ? undefined : config.blade);
          rack.emitter.on('add', _this24.onRackAdd_);
          rack.emitter.on('remove', _this24.onRackRemove_);
          _this24.rack = rack;

          _this24.viewProps.handleDispose(function () {
            for (var i = _this24.rack.children.length - 1; i >= 0; i--) {
              var bc = _this24.rack.children[i];
              bc.viewProps.set('disposed', true);
            }
          });

          return _this24;
        }

        _createClass(RackController, [{
          key: "onRackAdd_",
          value: function onRackAdd_(ev) {
            if (!ev.isRoot) {
              return;
            }

            insertElementAt(this.view.element, ev.bladeController.view.element, ev.index);
          }
        }, {
          key: "onRackRemove_",
          value: function onRackRemove_(ev) {
            if (!ev.isRoot) {
              return;
            }

            removeElement(ev.bladeController.view.element);
          }
        }]);

        return RackController;
      }(BladeController);

      var bladeContainerClassName = ClassName('cnt');

      var FolderView = /*#__PURE__*/_createClass(function FolderView(doc, config) {
        var _this25 = this;

        _classCallCheck(this, FolderView);

        var _a;

        this.className_ = ClassName((_a = config.viewName) !== null && _a !== void 0 ? _a : 'fld');
        this.element = doc.createElement('div');
        this.element.classList.add(this.className_(), bladeContainerClassName());
        config.viewProps.bindClassModifiers(this.element);
        this.foldable_ = config.foldable;
        this.foldable_.bindExpandedClass(this.element, this.className_(undefined, 'expanded'));
        bindValueMap(this.foldable_, 'completed', valueToClassName(this.element, this.className_(undefined, 'cpl')));
        var buttonElem = doc.createElement('button');
        buttonElem.classList.add(this.className_('b'));
        bindValueMap(config.props, 'title', function (title) {
          if (isEmpty(title)) {
            _this25.element.classList.add(_this25.className_(undefined, 'not'));
          } else {
            _this25.element.classList.remove(_this25.className_(undefined, 'not'));
          }
        });
        config.viewProps.bindDisabled(buttonElem);
        this.element.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        var titleElem = doc.createElement('div');
        titleElem.classList.add(this.className_('t'));
        bindValueToTextContent(config.props.value('title'), titleElem);
        this.buttonElement.appendChild(titleElem);
        this.titleElement = titleElem;
        var markElem = doc.createElement('div');
        markElem.classList.add(this.className_('m'));
        this.buttonElement.appendChild(markElem);
        var containerElem = config.containerElement;
        containerElem.classList.add(this.className_('c'));
        this.element.appendChild(containerElem);
        this.containerElement = containerElem;
      });

      var FolderController = /*#__PURE__*/function (_RackLikeController) {
        _inherits(FolderController, _RackLikeController);

        var _super18 = _createSuper(FolderController);

        function FolderController(doc, config) {
          var _this26;

          _classCallCheck(this, FolderController);

          var _a;

          var foldable = Foldable.create((_a = config.expanded) !== null && _a !== void 0 ? _a : true);
          var rc = new RackController(doc, {
            blade: config.blade,
            root: config.root,
            viewProps: config.viewProps
          });
          _this26 = _super18.call(this, Object.assign(Object.assign({}, config), {
            rackController: rc,
            view: new FolderView(doc, {
              containerElement: rc.view.element,
              foldable: foldable,
              props: config.props,
              viewName: config.root ? 'rot' : undefined,
              viewProps: config.viewProps
            })
          }));
          _this26.onTitleClick_ = _this26.onTitleClick_.bind(_assertThisInitialized(_this26));
          _this26.props = config.props;
          _this26.foldable = foldable;
          bindFoldable(_this26.foldable, _this26.view.containerElement);

          _this26.rackController.rack.emitter.on('add', function () {
            _this26.foldable.cleanUpTransition();
          });

          _this26.rackController.rack.emitter.on('remove', function () {
            _this26.foldable.cleanUpTransition();
          });

          _this26.view.buttonElement.addEventListener('click', _this26.onTitleClick_);

          return _this26;
        }

        _createClass(FolderController, [{
          key: "document",
          get: function get() {
            return this.view.element.ownerDocument;
          }
        }, {
          key: "onTitleClick_",
          value: function onTitleClick_() {
            this.foldable.set('expanded', !this.foldable.get('expanded'));
          }
        }]);

        return FolderController;
      }(RackLikeController);

      var FolderBladePlugin = {
        id: 'folder',
        type: 'blade',
        accept: function accept(params) {
          var p = ParamsParsers;
          var result = parseParams(params, {
            title: p.required.string,
            view: p.required.constant('folder'),
            expanded: p.optional["boolean"]
          });
          return result ? {
            params: result
          } : null;
        },
        controller: function controller(args) {
          return new FolderController(args.document, {
            blade: args.blade,
            expanded: args.params.expanded,
            props: ValueMap.fromObject({
              title: args.params.title
            }),
            viewProps: args.viewProps
          });
        },
        api: function api(args) {
          if (!(args.controller instanceof FolderController)) {
            return null;
          }

          return new FolderApi(args.controller, args.pool);
        }
      };

      var LabeledValueController = /*#__PURE__*/function (_ValueBladeController) {
        _inherits(LabeledValueController, _ValueBladeController);

        var _super19 = _createSuper(LabeledValueController);

        function LabeledValueController(doc, config) {
          var _this27;

          _classCallCheck(this, LabeledValueController);

          var viewProps = config.valueController.viewProps;
          _this27 = _super19.call(this, Object.assign(Object.assign({}, config), {
            value: config.valueController.value,
            view: new LabelView(doc, {
              props: config.props,
              viewProps: viewProps
            }),
            viewProps: viewProps
          }));
          _this27.props = config.props;
          _this27.valueController = config.valueController;

          _this27.view.valueElement.appendChild(_this27.valueController.view.element);

          return _this27;
        }

        return _createClass(LabeledValueController);
      }(ValueBladeController);

      var SeparatorApi = /*#__PURE__*/function (_BladeApi6) {
        _inherits(SeparatorApi, _BladeApi6);

        var _super20 = _createSuper(SeparatorApi);

        function SeparatorApi() {
          _classCallCheck(this, SeparatorApi);

          return _super20.apply(this, arguments);
        }

        return _createClass(SeparatorApi);
      }(BladeApi);

      var className$n = ClassName('spr');

      var SeparatorView = /*#__PURE__*/_createClass(function SeparatorView(doc, config) {
        _classCallCheck(this, SeparatorView);

        this.element = doc.createElement('div');
        this.element.classList.add(className$n());
        config.viewProps.bindClassModifiers(this.element);
        var hrElem = doc.createElement('hr');
        hrElem.classList.add(className$n('r'));
        this.element.appendChild(hrElem);
      });

      var SeparatorController = /*#__PURE__*/function (_BladeController5) {
        _inherits(SeparatorController, _BladeController5);

        var _super21 = _createSuper(SeparatorController);

        function SeparatorController(doc, config) {
          _classCallCheck(this, SeparatorController);

          return _super21.call(this, Object.assign(Object.assign({}, config), {
            view: new SeparatorView(doc, {
              viewProps: config.viewProps
            })
          }));
        }

        return _createClass(SeparatorController);
      }(BladeController);

      var SeparatorBladePlugin = {
        id: 'separator',
        type: 'blade',
        accept: function accept(params) {
          var p = ParamsParsers;
          var result = parseParams(params, {
            view: p.required.constant('separator')
          });
          return result ? {
            params: result
          } : null;
        },
        controller: function controller(args) {
          return new SeparatorController(args.document, {
            blade: args.blade,
            viewProps: args.viewProps
          });
        },
        api: function api(args) {
          if (!(args.controller instanceof SeparatorController)) {
            return null;
          }

          return new SeparatorApi(args.controller);
        }
      };
      var className$m = ClassName('');

      function valueToModifier(elem, modifier) {
        return valueToClassName(elem, className$m(undefined, modifier));
      }

      var ViewProps = /*#__PURE__*/function (_ValueMap2) {
        _inherits(ViewProps, _ValueMap2);

        var _super22 = _createSuper(ViewProps);

        function ViewProps(valueMap) {
          _classCallCheck(this, ViewProps);

          return _super22.call(this, valueMap);
        }

        _createClass(ViewProps, [{
          key: "bindClassModifiers",
          value: function bindClassModifiers(elem) {
            bindValueMap(this, 'disabled', valueToModifier(elem, 'disabled'));
            bindValueMap(this, 'hidden', valueToModifier(elem, 'hidden'));
          }
        }, {
          key: "bindDisabled",
          value: function bindDisabled(target) {
            bindValueMap(this, 'disabled', function (disabled) {
              target.disabled = disabled;
            });
          }
        }, {
          key: "bindTabIndex",
          value: function bindTabIndex(elem) {
            bindValueMap(this, 'disabled', function (disabled) {
              elem.tabIndex = disabled ? -1 : 0;
            });
          }
        }, {
          key: "handleDispose",
          value: function handleDispose(callback) {
            this.value('disposed').emitter.on('change', function (disposed) {
              if (disposed) {
                callback();
              }
            });
          }
        }], [{
          key: "create",
          value: function create(opt_initialValue) {
            var _a, _b;

            var initialValue = opt_initialValue !== null && opt_initialValue !== void 0 ? opt_initialValue : {};
            var coreObj = {
              disabled: (_a = initialValue.disabled) !== null && _a !== void 0 ? _a : false,
              disposed: false,
              hidden: (_b = initialValue.hidden) !== null && _b !== void 0 ? _b : false
            };
            var core = ValueMap.createCore(coreObj);
            return new ViewProps(core);
          }
        }]);

        return ViewProps;
      }(ValueMap);

      var className$l = ClassName('tbi');

      var TabItemView = /*#__PURE__*/_createClass(function TabItemView(doc, config) {
        var _this28 = this;

        _classCallCheck(this, TabItemView);

        this.element = doc.createElement('div');
        this.element.classList.add(className$l());
        config.viewProps.bindClassModifiers(this.element);
        bindValueMap(config.props, 'selected', function (selected) {
          if (selected) {
            _this28.element.classList.add(className$l(undefined, 'sel'));
          } else {
            _this28.element.classList.remove(className$l(undefined, 'sel'));
          }
        });
        var buttonElem = doc.createElement('button');
        buttonElem.classList.add(className$l('b'));
        config.viewProps.bindDisabled(buttonElem);
        this.element.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        var titleElem = doc.createElement('div');
        titleElem.classList.add(className$l('t'));
        bindValueToTextContent(config.props.value('title'), titleElem);
        this.buttonElement.appendChild(titleElem);
        this.titleElement = titleElem;
      });

      var TabItemController = /*#__PURE__*/function () {
        function TabItemController(doc, config) {
          _classCallCheck(this, TabItemController);

          this.emitter = new Emitter();
          this.onClick_ = this.onClick_.bind(this);
          this.props = config.props;
          this.viewProps = config.viewProps;
          this.view = new TabItemView(doc, {
            props: config.props,
            viewProps: config.viewProps
          });
          this.view.buttonElement.addEventListener('click', this.onClick_);
        }

        _createClass(TabItemController, [{
          key: "onClick_",
          value: function onClick_() {
            this.emitter.emit('click', {
              sender: this
            });
          }
        }]);

        return TabItemController;
      }();

      var TabPageController = /*#__PURE__*/function () {
        function TabPageController(doc, config) {
          var _this29 = this;

          _classCallCheck(this, TabPageController);

          this.onItemClick_ = this.onItemClick_.bind(this);
          this.ic_ = new TabItemController(doc, {
            props: config.itemProps,
            viewProps: ViewProps.create()
          });
          this.ic_.emitter.on('click', this.onItemClick_);
          this.cc_ = new RackController(doc, {
            blade: createBlade(),
            viewProps: ViewProps.create()
          });
          this.props = config.props;
          bindValueMap(this.props, 'selected', function (selected) {
            _this29.itemController.props.set('selected', selected);

            _this29.contentController.viewProps.set('hidden', !selected);
          });
        }

        _createClass(TabPageController, [{
          key: "itemController",
          get: function get() {
            return this.ic_;
          }
        }, {
          key: "contentController",
          get: function get() {
            return this.cc_;
          }
        }, {
          key: "onItemClick_",
          value: function onItemClick_() {
            this.props.set('selected', true);
          }
        }]);

        return TabPageController;
      }();

      var TabPageApi = /*#__PURE__*/function () {
        function TabPageApi(controller, contentRackApi) {
          _classCallCheck(this, TabPageApi);

          this.controller_ = controller;
          this.rackApi_ = contentRackApi;
        }

        _createClass(TabPageApi, [{
          key: "title",
          get: function get() {
            var _a;

            return (_a = this.controller_.itemController.props.get('title')) !== null && _a !== void 0 ? _a : '';
          },
          set: function set(title) {
            this.controller_.itemController.props.set('title', title);
          }
        }, {
          key: "selected",
          get: function get() {
            return this.controller_.props.get('selected');
          },
          set: function set(selected) {
            this.controller_.props.set('selected', selected);
          }
        }, {
          key: "children",
          get: function get() {
            return this.rackApi_.children;
          }
        }, {
          key: "addButton",
          value: function addButton(params) {
            return this.rackApi_.addButton(params);
          }
        }, {
          key: "addFolder",
          value: function addFolder(params) {
            return this.rackApi_.addFolder(params);
          }
        }, {
          key: "addSeparator",
          value: function addSeparator(opt_params) {
            return this.rackApi_.addSeparator(opt_params);
          }
        }, {
          key: "addTab",
          value: function addTab(params) {
            return this.rackApi_.addTab(params);
          }
        }, {
          key: "add",
          value: function add(api, opt_index) {
            this.rackApi_.add(api, opt_index);
          }
        }, {
          key: "remove",
          value: function remove(api) {
            this.rackApi_.remove(api);
          }
        }, {
          key: "addInput",
          value: function addInput(object, key, opt_params) {
            return this.rackApi_.addInput(object, key, opt_params);
          }
        }, {
          key: "addMonitor",
          value: function addMonitor(object, key, opt_params) {
            return this.rackApi_.addMonitor(object, key, opt_params);
          }
        }, {
          key: "addBlade",
          value: function addBlade(params) {
            return this.rackApi_.addBlade(params);
          }
        }]);

        return TabPageApi;
      }();

      var TabApi = /*#__PURE__*/function (_RackLikeApi2) {
        _inherits(TabApi, _RackLikeApi2);

        var _super23 = _createSuper(TabApi);

        function TabApi(controller, pool) {
          var _this30;

          _classCallCheck(this, TabApi);

          _this30 = _super23.call(this, controller, new RackApi(controller.rackController, pool));
          _this30.onPageAdd_ = _this30.onPageAdd_.bind(_assertThisInitialized(_this30));
          _this30.onPageRemove_ = _this30.onPageRemove_.bind(_assertThisInitialized(_this30));
          _this30.onSelect_ = _this30.onSelect_.bind(_assertThisInitialized(_this30));
          _this30.emitter_ = new Emitter();
          _this30.pageApiMap_ = new Map();

          _this30.rackApi_.on('change', function (ev) {
            _this30.emitter_.emit('change', {
              event: ev
            });
          });

          _this30.rackApi_.on('update', function (ev) {
            _this30.emitter_.emit('update', {
              event: ev
            });
          });

          _this30.controller_.tab.selectedIndex.emitter.on('change', _this30.onSelect_);

          _this30.controller_.pageSet.emitter.on('add', _this30.onPageAdd_);

          _this30.controller_.pageSet.emitter.on('remove', _this30.onPageRemove_);

          _this30.controller_.pageSet.items.forEach(function (pc) {
            _this30.setUpPageApi_(pc);
          });

          return _this30;
        }

        _createClass(TabApi, [{
          key: "pages",
          get: function get() {
            var _this31 = this;

            return this.controller_.pageSet.items.map(function (pc) {
              var api = _this31.pageApiMap_.get(pc);

              if (!api) {
                throw TpError.shouldNeverHappen();
              }

              return api;
            });
          }
        }, {
          key: "addPage",
          value: function addPage(params) {
            var doc = this.controller_.view.element.ownerDocument;
            var pc = new TabPageController(doc, {
              itemProps: ValueMap.fromObject({
                selected: false,
                title: params.title
              }),
              props: ValueMap.fromObject({
                selected: false
              })
            });
            this.controller_.add(pc, params.index);
            var api = this.pageApiMap_.get(pc);

            if (!api) {
              throw TpError.shouldNeverHappen();
            }

            return api;
          }
        }, {
          key: "removePage",
          value: function removePage(index) {
            this.controller_.remove(index);
          }
        }, {
          key: "on",
          value: function on(eventName, handler) {
            var bh = handler.bind(this);
            this.emitter_.on(eventName, function (ev) {
              bh(ev.event);
            });
            return this;
          }
        }, {
          key: "setUpPageApi_",
          value: function setUpPageApi_(pc) {
            var rackApi = this.rackApi_['apiSet_'].find(function (api) {
              return api.controller_ === pc.contentController;
            });

            if (!rackApi) {
              throw TpError.shouldNeverHappen();
            }

            var api = new TabPageApi(pc, rackApi);
            this.pageApiMap_.set(pc, api);
          }
        }, {
          key: "onPageAdd_",
          value: function onPageAdd_(ev) {
            this.setUpPageApi_(ev.item);
          }
        }, {
          key: "onPageRemove_",
          value: function onPageRemove_(ev) {
            var api = this.pageApiMap_.get(ev.item);

            if (!api) {
              throw TpError.shouldNeverHappen();
            }

            this.pageApiMap_["delete"](ev.item);
          }
        }, {
          key: "onSelect_",
          value: function onSelect_(ev) {
            this.emitter_.emit('select', {
              event: new TpTabSelectEvent(this, ev.rawValue)
            });
          }
        }]);

        return TabApi;
      }(RackLikeApi);

      var INDEX_NOT_SELECTED = -1;

      var Tab = /*#__PURE__*/function () {
        function Tab() {
          _classCallCheck(this, Tab);

          this.onItemSelectedChange_ = this.onItemSelectedChange_.bind(this);
          this.empty = createValue(true);
          this.selectedIndex = createValue(INDEX_NOT_SELECTED);
          this.items_ = [];
        }

        _createClass(Tab, [{
          key: "add",
          value: function add(item, opt_index) {
            var index = opt_index !== null && opt_index !== void 0 ? opt_index : this.items_.length;
            this.items_.splice(index, 0, item);
            item.emitter.on('change', this.onItemSelectedChange_);
            this.keepSelection_();
          }
        }, {
          key: "remove",
          value: function remove(item) {
            var index = this.items_.indexOf(item);

            if (index < 0) {
              return;
            }

            this.items_.splice(index, 1);
            item.emitter.off('change', this.onItemSelectedChange_);
            this.keepSelection_();
          }
        }, {
          key: "keepSelection_",
          value: function keepSelection_() {
            if (this.items_.length === 0) {
              this.selectedIndex.rawValue = INDEX_NOT_SELECTED;
              this.empty.rawValue = true;
              return;
            }

            var firstSelIndex = this.items_.findIndex(function (s) {
              return s.rawValue;
            });

            if (firstSelIndex < 0) {
              this.items_.forEach(function (s, i) {
                s.rawValue = i === 0;
              });
              this.selectedIndex.rawValue = 0;
            } else {
              this.items_.forEach(function (s, i) {
                s.rawValue = i === firstSelIndex;
              });
              this.selectedIndex.rawValue = firstSelIndex;
            }

            this.empty.rawValue = false;
          }
        }, {
          key: "onItemSelectedChange_",
          value: function onItemSelectedChange_(ev) {
            if (ev.rawValue) {
              var index = this.items_.findIndex(function (s) {
                return s === ev.sender;
              });
              this.items_.forEach(function (s, i) {
                s.rawValue = i === index;
              });
              this.selectedIndex.rawValue = index;
            } else {
              this.keepSelection_();
            }
          }
        }]);

        return Tab;
      }();

      var className$k = ClassName('tab');

      var TabView = /*#__PURE__*/_createClass(function TabView(doc, config) {
        _classCallCheck(this, TabView);

        this.element = doc.createElement('div');
        this.element.classList.add(className$k(), bladeContainerClassName());
        config.viewProps.bindClassModifiers(this.element);
        bindValue(config.empty, valueToClassName(this.element, className$k(undefined, 'nop')));
        var itemsElem = doc.createElement('div');
        itemsElem.classList.add(className$k('i'));
        this.element.appendChild(itemsElem);
        this.itemsElement = itemsElem;
        var contentsElem = config.contentsElement;
        contentsElem.classList.add(className$k('c'));
        this.element.appendChild(contentsElem);
        this.contentsElement = contentsElem;
      });

      var TabController = /*#__PURE__*/function (_RackLikeController2) {
        _inherits(TabController, _RackLikeController2);

        var _super24 = _createSuper(TabController);

        function TabController(doc, config) {
          var _this32;

          _classCallCheck(this, TabController);

          var cr = new RackController(doc, {
            blade: config.blade,
            viewProps: config.viewProps
          });
          var tab = new Tab();
          _this32 = _super24.call(this, {
            blade: config.blade,
            rackController: cr,
            view: new TabView(doc, {
              contentsElement: cr.view.element,
              empty: tab.empty,
              viewProps: config.viewProps
            })
          });
          _this32.onPageAdd_ = _this32.onPageAdd_.bind(_assertThisInitialized(_this32));
          _this32.onPageRemove_ = _this32.onPageRemove_.bind(_assertThisInitialized(_this32));
          _this32.pageSet_ = new NestedOrderedSet(function () {
            return null;
          });

          _this32.pageSet_.emitter.on('add', _this32.onPageAdd_);

          _this32.pageSet_.emitter.on('remove', _this32.onPageRemove_);

          _this32.tab = tab;
          return _this32;
        }

        _createClass(TabController, [{
          key: "pageSet",
          get: function get() {
            return this.pageSet_;
          }
        }, {
          key: "add",
          value: function add(pc, opt_index) {
            this.pageSet_.add(pc, opt_index);
          }
        }, {
          key: "remove",
          value: function remove(index) {
            this.pageSet_.remove(this.pageSet_.items[index]);
          }
        }, {
          key: "onPageAdd_",
          value: function onPageAdd_(ev) {
            var pc = ev.item;
            insertElementAt(this.view.itemsElement, pc.itemController.view.element, ev.index);
            this.rackController.rack.add(pc.contentController, ev.index);
            this.tab.add(pc.props.value('selected'));
          }
        }, {
          key: "onPageRemove_",
          value: function onPageRemove_(ev) {
            var pc = ev.item;
            removeElement(pc.itemController.view.element);
            this.rackController.rack.remove(pc.contentController);
            this.tab.remove(pc.props.value('selected'));
          }
        }]);

        return TabController;
      }(RackLikeController);

      var TabBladePlugin = {
        id: 'tab',
        type: 'blade',
        accept: function accept(params) {
          var p = ParamsParsers;
          var result = parseParams(params, {
            pages: p.required.array(p.required.object({
              title: p.required.string
            })),
            view: p.required.constant('tab')
          });

          if (!result || result.pages.length === 0) {
            return null;
          }

          return {
            params: result
          };
        },
        controller: function controller(args) {
          var c = new TabController(args.document, {
            blade: args.blade,
            viewProps: args.viewProps
          });
          args.params.pages.forEach(function (p) {
            var pc = new TabPageController(args.document, {
              itemProps: ValueMap.fromObject({
                selected: false,
                title: p.title
              }),
              props: ValueMap.fromObject({
                selected: false
              })
            });
            c.add(pc);
          });
          return c;
        },
        api: function api(args) {
          if (!(args.controller instanceof TabController)) {
            return null;
          }

          return new TabApi(args.controller, args.pool);
        }
      };

      function createBladeController(plugin, args) {
        var ac = plugin.accept(args.params);

        if (!ac) {
          return null;
        }

        var disabled = ParamsParsers.optional["boolean"](args.params['disabled']).value;
        var hidden = ParamsParsers.optional["boolean"](args.params['hidden']).value;
        return plugin.controller({
          blade: createBlade(),
          document: args.document,
          params: forceCast(Object.assign(Object.assign({}, ac.params), {
            disabled: disabled,
            hidden: hidden
          })),
          viewProps: ViewProps.create({
            disabled: disabled,
            hidden: hidden
          })
        });
      }

      var ManualTicker = /*#__PURE__*/function () {
        function ManualTicker() {
          _classCallCheck(this, ManualTicker);

          this.disabled = false;
          this.emitter = new Emitter();
        }

        _createClass(ManualTicker, [{
          key: "dispose",
          value: function dispose() {}
        }, {
          key: "tick",
          value: function tick() {
            if (this.disabled) {
              return;
            }

            this.emitter.emit('tick', {
              sender: this
            });
          }
        }]);

        return ManualTicker;
      }();

      var IntervalTicker = /*#__PURE__*/function () {
        function IntervalTicker(doc, interval) {
          _classCallCheck(this, IntervalTicker);

          this.disabled_ = false;
          this.timerId_ = null;
          this.onTick_ = this.onTick_.bind(this);
          this.doc_ = doc;
          this.emitter = new Emitter();
          this.interval_ = interval;
          this.setTimer_();
        }

        _createClass(IntervalTicker, [{
          key: "disabled",
          get: function get() {
            return this.disabled_;
          },
          set: function set(inactive) {
            this.disabled_ = inactive;

            if (this.disabled_) {
              this.clearTimer_();
            } else {
              this.setTimer_();
            }
          }
        }, {
          key: "dispose",
          value: function dispose() {
            this.clearTimer_();
          }
        }, {
          key: "clearTimer_",
          value: function clearTimer_() {
            if (this.timerId_ === null) {
              return;
            }

            var win = this.doc_.defaultView;

            if (win) {
              win.clearInterval(this.timerId_);
            }

            this.timerId_ = null;
          }
        }, {
          key: "setTimer_",
          value: function setTimer_() {
            this.clearTimer_();

            if (this.interval_ <= 0) {
              return;
            }

            var win = this.doc_.defaultView;

            if (win) {
              this.timerId_ = win.setInterval(this.onTick_, this.interval_);
            }
          }
        }, {
          key: "onTick_",
          value: function onTick_() {
            if (this.disabled_) {
              return;
            }

            this.emitter.emit('tick', {
              sender: this
            });
          }
        }]);

        return IntervalTicker;
      }();

      var CompositeConstraint = /*#__PURE__*/function () {
        function CompositeConstraint(constraints) {
          _classCallCheck(this, CompositeConstraint);

          this.constraints = constraints;
        }

        _createClass(CompositeConstraint, [{
          key: "constrain",
          value: function constrain(value) {
            return this.constraints.reduce(function (result, c) {
              return c.constrain(result);
            }, value);
          }
        }]);

        return CompositeConstraint;
      }();

      function findConstraint(c, constraintClass) {
        if (c instanceof constraintClass) {
          return c;
        }

        if (c instanceof CompositeConstraint) {
          var result = c.constraints.reduce(function (tmpResult, sc) {
            if (tmpResult) {
              return tmpResult;
            }

            return sc instanceof constraintClass ? sc : null;
          }, null);

          if (result) {
            return result;
          }
        }

        return null;
      }

      var ListConstraint = /*#__PURE__*/function () {
        function ListConstraint(options) {
          _classCallCheck(this, ListConstraint);

          this.options = options;
        }

        _createClass(ListConstraint, [{
          key: "constrain",
          value: function constrain(value) {
            var opts = this.options;

            if (opts.length === 0) {
              return value;
            }

            var matched = opts.filter(function (item) {
              return item.value === value;
            }).length > 0;
            return matched ? value : opts[0].value;
          }
        }]);

        return ListConstraint;
      }();

      var RangeConstraint = /*#__PURE__*/function () {
        function RangeConstraint(config) {
          _classCallCheck(this, RangeConstraint);

          this.maxValue = config.max;
          this.minValue = config.min;
        }

        _createClass(RangeConstraint, [{
          key: "constrain",
          value: function constrain(value) {
            var result = value;

            if (!isEmpty(this.minValue)) {
              result = Math.max(result, this.minValue);
            }

            if (!isEmpty(this.maxValue)) {
              result = Math.min(result, this.maxValue);
            }

            return result;
          }
        }]);

        return RangeConstraint;
      }();

      var StepConstraint = /*#__PURE__*/function () {
        function StepConstraint(step) {
          var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          _classCallCheck(this, StepConstraint);

          this.step = step;
          this.origin = origin;
        }

        _createClass(StepConstraint, [{
          key: "constrain",
          value: function constrain(value) {
            var o = this.origin % this.step;
            var r = Math.round((value - o) / this.step);
            return o + r * this.step;
          }
        }]);

        return StepConstraint;
      }();

      var className$j = ClassName('lst');

      var ListView = /*#__PURE__*/function () {
        function ListView(doc, config) {
          _classCallCheck(this, ListView);

          this.onValueChange_ = this.onValueChange_.bind(this);
          this.props_ = config.props;
          this.element = doc.createElement('div');
          this.element.classList.add(className$j());
          config.viewProps.bindClassModifiers(this.element);
          var selectElem = doc.createElement('select');
          selectElem.classList.add(className$j('s'));
          bindValueMap(this.props_, 'options', function (opts) {
            removeChildElements(selectElem);
            opts.forEach(function (item, index) {
              var optionElem = doc.createElement('option');
              optionElem.dataset.index = String(index);
              optionElem.textContent = item.text;
              optionElem.value = String(item.value);
              selectElem.appendChild(optionElem);
            });
          });
          config.viewProps.bindDisabled(selectElem);
          this.element.appendChild(selectElem);
          this.selectElement = selectElem;
          var markElem = doc.createElement('div');
          markElem.classList.add(className$j('m'));
          markElem.appendChild(createSvgIconElement(doc, 'dropdown'));
          this.element.appendChild(markElem);
          config.value.emitter.on('change', this.onValueChange_);
          this.value_ = config.value;
          this.update_();
        }

        _createClass(ListView, [{
          key: "update_",
          value: function update_() {
            this.selectElement.value = String(this.value_.rawValue);
          }
        }, {
          key: "onValueChange_",
          value: function onValueChange_() {
            this.update_();
          }
        }]);

        return ListView;
      }();

      var ListController = /*#__PURE__*/function () {
        function ListController(doc, config) {
          _classCallCheck(this, ListController);

          this.onSelectChange_ = this.onSelectChange_.bind(this);
          this.props = config.props;
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.view = new ListView(doc, {
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
          });
          this.view.selectElement.addEventListener('change', this.onSelectChange_);
        }

        _createClass(ListController, [{
          key: "onSelectChange_",
          value: function onSelectChange_(e) {
            var selectElem = forceCast(e.currentTarget);
            var optElem = selectElem.selectedOptions.item(0);

            if (!optElem) {
              return;
            }

            var itemIndex = Number(optElem.dataset.index);
            this.value.rawValue = this.props.get('options')[itemIndex].value;
          }
        }]);

        return ListController;
      }();

      var className$i = ClassName('pop');

      var PopupView = /*#__PURE__*/_createClass(function PopupView(doc, config) {
        _classCallCheck(this, PopupView);

        this.element = doc.createElement('div');
        this.element.classList.add(className$i());
        config.viewProps.bindClassModifiers(this.element);
        bindValue(config.shows, valueToClassName(this.element, className$i(undefined, 'v')));
      });

      var PopupController = /*#__PURE__*/_createClass(function PopupController(doc, config) {
        _classCallCheck(this, PopupController);

        this.shows = createValue(false);
        this.viewProps = config.viewProps;
        this.view = new PopupView(doc, {
          shows: this.shows,
          viewProps: this.viewProps
        });
      });

      var className$h = ClassName('txt');

      var TextView = /*#__PURE__*/function () {
        function TextView(doc, config) {
          _classCallCheck(this, TextView);

          this.onChange_ = this.onChange_.bind(this);
          this.element = doc.createElement('div');
          this.element.classList.add(className$h());
          config.viewProps.bindClassModifiers(this.element);
          this.props_ = config.props;
          this.props_.emitter.on('change', this.onChange_);
          var inputElem = doc.createElement('input');
          inputElem.classList.add(className$h('i'));
          inputElem.type = 'text';
          config.viewProps.bindDisabled(inputElem);
          this.element.appendChild(inputElem);
          this.inputElement = inputElem;
          config.value.emitter.on('change', this.onChange_);
          this.value_ = config.value;
          this.refresh();
        }

        _createClass(TextView, [{
          key: "refresh",
          value: function refresh() {
            var formatter = this.props_.get('formatter');
            this.inputElement.value = formatter(this.value_.rawValue);
          }
        }, {
          key: "onChange_",
          value: function onChange_() {
            this.refresh();
          }
        }]);

        return TextView;
      }();

      var TextController = /*#__PURE__*/function () {
        function TextController(doc, config) {
          _classCallCheck(this, TextController);

          this.onInputChange_ = this.onInputChange_.bind(this);
          this.parser_ = config.parser;
          this.props = config.props;
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.view = new TextView(doc, {
            props: config.props,
            value: this.value,
            viewProps: this.viewProps
          });
          this.view.inputElement.addEventListener('change', this.onInputChange_);
        }

        _createClass(TextController, [{
          key: "onInputChange_",
          value: function onInputChange_(e) {
            var inputElem = forceCast(e.currentTarget);
            var value = inputElem.value;
            var parsedValue = this.parser_(value);

            if (!isEmpty(parsedValue)) {
              this.value.rawValue = parsedValue;
            }

            this.view.refresh();
          }
        }]);

        return TextController;
      }();

      function boolToString(value) {
        return String(value);
      }

      function boolFromUnknown(value) {
        if (value === 'false') {
          return false;
        }

        return !!value;
      }

      function BooleanFormatter(value) {
        return boolToString(value);
      }

      var NumberLiteralNode = /*#__PURE__*/function () {
        function NumberLiteralNode(text) {
          _classCallCheck(this, NumberLiteralNode);

          this.text = text;
        }

        _createClass(NumberLiteralNode, [{
          key: "evaluate",
          value: function evaluate() {
            return Number(this.text);
          }
        }, {
          key: "toString",
          value: function toString() {
            return this.text;
          }
        }]);

        return NumberLiteralNode;
      }();

      var BINARY_OPERATION_MAP = {
        '**': function _(v1, v2) {
          return Math.pow(v1, v2);
        },
        '*': function _(v1, v2) {
          return v1 * v2;
        },
        '/': function _(v1, v2) {
          return v1 / v2;
        },
        '%': function _(v1, v2) {
          return v1 % v2;
        },
        '+': function _(v1, v2) {
          return v1 + v2;
        },
        '-': function _(v1, v2) {
          return v1 - v2;
        },
        '<<': function _(v1, v2) {
          return v1 << v2;
        },
        '>>': function _(v1, v2) {
          return v1 >> v2;
        },
        '>>>': function _(v1, v2) {
          return v1 >>> v2;
        },
        '&': function _(v1, v2) {
          return v1 & v2;
        },
        '^': function _(v1, v2) {
          return v1 ^ v2;
        },
        '|': function _(v1, v2) {
          return v1 | v2;
        }
      };

      var BinaryOperationNode = /*#__PURE__*/function () {
        function BinaryOperationNode(operator, left, right) {
          _classCallCheck(this, BinaryOperationNode);

          this.left = left;
          this.operator = operator;
          this.right = right;
        }

        _createClass(BinaryOperationNode, [{
          key: "evaluate",
          value: function evaluate() {
            var op = BINARY_OPERATION_MAP[this.operator];

            if (!op) {
              throw new Error("unexpected binary operator: '".concat(this.operator));
            }

            return op(this.left.evaluate(), this.right.evaluate());
          }
        }, {
          key: "toString",
          value: function toString() {
            return ['b(', this.left.toString(), this.operator, this.right.toString(), ')'].join(' ');
          }
        }]);

        return BinaryOperationNode;
      }();

      var UNARY_OPERATION_MAP = {
        '+': function _(v) {
          return v;
        },
        '-': function _(v) {
          return -v;
        },
        '~': function _(v) {
          return ~v;
        }
      };

      var UnaryOperationNode = /*#__PURE__*/function () {
        function UnaryOperationNode(operator, expr) {
          _classCallCheck(this, UnaryOperationNode);

          this.operator = operator;
          this.expression = expr;
        }

        _createClass(UnaryOperationNode, [{
          key: "evaluate",
          value: function evaluate() {
            var op = UNARY_OPERATION_MAP[this.operator];

            if (!op) {
              throw new Error("unexpected unary operator: '".concat(this.operator));
            }

            return op(this.expression.evaluate());
          }
        }, {
          key: "toString",
          value: function toString() {
            return ['u(', this.operator, this.expression.toString(), ')'].join(' ');
          }
        }]);

        return UnaryOperationNode;
      }();

      function combineReader(parsers) {
        return function (text, cursor) {
          for (var i = 0; i < parsers.length; i++) {
            var result = parsers[i](text, cursor);

            if (result !== '') {
              return result;
            }
          }

          return '';
        };
      }

      function readWhitespace(text, cursor) {
        var _a;

        var m = text.substr(cursor).match(/^\s+/);
        return (_a = m && m[0]) !== null && _a !== void 0 ? _a : '';
      }

      function readNonZeroDigit(text, cursor) {
        var ch = text.substr(cursor, 1);
        return ch.match(/^[1-9]$/) ? ch : '';
      }

      function readDecimalDigits(text, cursor) {
        var _a;

        var m = text.substr(cursor).match(/^[0-9]+/);
        return (_a = m && m[0]) !== null && _a !== void 0 ? _a : '';
      }

      function readSignedInteger(text, cursor) {
        var ds = readDecimalDigits(text, cursor);

        if (ds !== '') {
          return ds;
        }

        var sign = text.substr(cursor, 1);
        cursor += 1;

        if (sign !== '-' && sign !== '+') {
          return '';
        }

        var sds = readDecimalDigits(text, cursor);

        if (sds === '') {
          return '';
        }

        return sign + sds;
      }

      function readExponentPart(text, cursor) {
        var e = text.substr(cursor, 1);
        cursor += 1;

        if (e.toLowerCase() !== 'e') {
          return '';
        }

        var si = readSignedInteger(text, cursor);

        if (si === '') {
          return '';
        }

        return e + si;
      }

      function readDecimalIntegerLiteral(text, cursor) {
        var ch = text.substr(cursor, 1);

        if (ch === '0') {
          return ch;
        }

        var nzd = readNonZeroDigit(text, cursor);
        cursor += nzd.length;

        if (nzd === '') {
          return '';
        }

        return nzd + readDecimalDigits(text, cursor);
      }

      function readDecimalLiteral1(text, cursor) {
        var dil = readDecimalIntegerLiteral(text, cursor);
        cursor += dil.length;

        if (dil === '') {
          return '';
        }

        var dot = text.substr(cursor, 1);
        cursor += dot.length;

        if (dot !== '.') {
          return '';
        }

        var dds = readDecimalDigits(text, cursor);
        cursor += dds.length;
        return dil + dot + dds + readExponentPart(text, cursor);
      }

      function readDecimalLiteral2(text, cursor) {
        var dot = text.substr(cursor, 1);
        cursor += dot.length;

        if (dot !== '.') {
          return '';
        }

        var dds = readDecimalDigits(text, cursor);
        cursor += dds.length;

        if (dds === '') {
          return '';
        }

        return dot + dds + readExponentPart(text, cursor);
      }

      function readDecimalLiteral3(text, cursor) {
        var dil = readDecimalIntegerLiteral(text, cursor);
        cursor += dil.length;

        if (dil === '') {
          return '';
        }

        return dil + readExponentPart(text, cursor);
      }

      var readDecimalLiteral = combineReader([readDecimalLiteral1, readDecimalLiteral2, readDecimalLiteral3]);

      function parseBinaryDigits(text, cursor) {
        var _a;

        var m = text.substr(cursor).match(/^[01]+/);
        return (_a = m && m[0]) !== null && _a !== void 0 ? _a : '';
      }

      function readBinaryIntegerLiteral(text, cursor) {
        var prefix = text.substr(cursor, 2);
        cursor += prefix.length;

        if (prefix.toLowerCase() !== '0b') {
          return '';
        }

        var bds = parseBinaryDigits(text, cursor);

        if (bds === '') {
          return '';
        }

        return prefix + bds;
      }

      function readOctalDigits(text, cursor) {
        var _a;

        var m = text.substr(cursor).match(/^[0-7]+/);
        return (_a = m && m[0]) !== null && _a !== void 0 ? _a : '';
      }

      function readOctalIntegerLiteral(text, cursor) {
        var prefix = text.substr(cursor, 2);
        cursor += prefix.length;

        if (prefix.toLowerCase() !== '0o') {
          return '';
        }

        var ods = readOctalDigits(text, cursor);

        if (ods === '') {
          return '';
        }

        return prefix + ods;
      }

      function readHexDigits(text, cursor) {
        var _a;

        var m = text.substr(cursor).match(/^[0-9a-f]+/i);
        return (_a = m && m[0]) !== null && _a !== void 0 ? _a : '';
      }

      function readHexIntegerLiteral(text, cursor) {
        var prefix = text.substr(cursor, 2);
        cursor += prefix.length;

        if (prefix.toLowerCase() !== '0x') {
          return '';
        }

        var hds = readHexDigits(text, cursor);

        if (hds === '') {
          return '';
        }

        return prefix + hds;
      }

      var readNonDecimalIntegerLiteral = combineReader([readBinaryIntegerLiteral, readOctalIntegerLiteral, readHexIntegerLiteral]);
      var readNumericLiteral = combineReader([readNonDecimalIntegerLiteral, readDecimalLiteral]);

      function parseLiteral(text, cursor) {
        var num = readNumericLiteral(text, cursor);
        cursor += num.length;

        if (num === '') {
          return null;
        }

        return {
          evaluable: new NumberLiteralNode(num),
          cursor: cursor
        };
      }

      function parseParenthesizedExpression(text, cursor) {
        var op = text.substr(cursor, 1);
        cursor += op.length;

        if (op !== '(') {
          return null;
        }

        var expr = parseExpression(text, cursor);

        if (!expr) {
          return null;
        }

        cursor = expr.cursor;
        cursor += readWhitespace(text, cursor).length;
        var cl = text.substr(cursor, 1);
        cursor += cl.length;

        if (cl !== ')') {
          return null;
        }

        return {
          evaluable: expr.evaluable,
          cursor: cursor
        };
      }

      function parsePrimaryExpression(text, cursor) {
        var _a;

        return (_a = parseLiteral(text, cursor)) !== null && _a !== void 0 ? _a : parseParenthesizedExpression(text, cursor);
      }

      function parseUnaryExpression(text, cursor) {
        var expr = parsePrimaryExpression(text, cursor);

        if (expr) {
          return expr;
        }

        var op = text.substr(cursor, 1);
        cursor += op.length;

        if (op !== '+' && op !== '-' && op !== '~') {
          return null;
        }

        var num = parseUnaryExpression(text, cursor);

        if (!num) {
          return null;
        }

        cursor = num.cursor;
        return {
          cursor: cursor,
          evaluable: new UnaryOperationNode(op, num.evaluable)
        };
      }

      function readBinaryOperator(ops, text, cursor) {
        cursor += readWhitespace(text, cursor).length;
        var op = ops.filter(function (op) {
          return text.startsWith(op, cursor);
        })[0];

        if (!op) {
          return null;
        }

        cursor += op.length;
        cursor += readWhitespace(text, cursor).length;
        return {
          cursor: cursor,
          operator: op
        };
      }

      function createBinaryOperationExpressionParser(exprParser, ops) {
        return function (text, cursor) {
          var firstExpr = exprParser(text, cursor);

          if (!firstExpr) {
            return null;
          }

          cursor = firstExpr.cursor;
          var expr = firstExpr.evaluable;

          for (;;) {
            var op = readBinaryOperator(ops, text, cursor);

            if (!op) {
              break;
            }

            cursor = op.cursor;
            var nextExpr = exprParser(text, cursor);

            if (!nextExpr) {
              return null;
            }

            cursor = nextExpr.cursor;
            expr = new BinaryOperationNode(op.operator, expr, nextExpr.evaluable);
          }

          return expr ? {
            cursor: cursor,
            evaluable: expr
          } : null;
        };
      }

      var parseBinaryOperationExpression = [['**'], ['*', '/', '%'], ['+', '-'], ['<<', '>>>', '>>'], ['&'], ['^'], ['|']].reduce(function (parser, ops) {
        return createBinaryOperationExpressionParser(parser, ops);
      }, parseUnaryExpression);

      function parseExpression(text, cursor) {
        cursor += readWhitespace(text, cursor).length;
        return parseBinaryOperationExpression(text, cursor);
      }

      function parseEcmaNumberExpression(text) {
        var expr = parseExpression(text, 0);

        if (!expr) {
          return null;
        }

        var cursor = expr.cursor + readWhitespace(text, expr.cursor).length;

        if (cursor !== text.length) {
          return null;
        }

        return expr.evaluable;
      }

      function parseNumber(text) {
        var _a;

        var r = parseEcmaNumberExpression(text);
        return (_a = r === null || r === void 0 ? void 0 : r.evaluate()) !== null && _a !== void 0 ? _a : null;
      }

      function numberFromUnknown(value) {
        if (typeof value === 'number') {
          return value;
        }

        if (typeof value === 'string') {
          var pv = parseNumber(value);

          if (!isEmpty(pv)) {
            return pv;
          }
        }

        return 0;
      }

      function numberToString(value) {
        return String(value);
      }

      function createNumberFormatter(digits) {
        return function (value) {
          return value.toFixed(Math.max(Math.min(digits, 20), 0));
        };
      }

      var innerFormatter = createNumberFormatter(0);

      function formatPercentage(value) {
        return innerFormatter(value) + '%';
      }

      function stringFromUnknown(value) {
        return String(value);
      }

      function formatString(value) {
        return value;
      }

      function fillBuffer(buffer, bufferSize) {
        while (buffer.length < bufferSize) {
          buffer.push(undefined);
        }
      }

      function initializeBuffer(bufferSize) {
        var buffer = [];
        fillBuffer(buffer, bufferSize);
        return createValue(buffer);
      }

      function createTrimmedBuffer(buffer) {
        var index = buffer.indexOf(undefined);
        return forceCast(index < 0 ? buffer : buffer.slice(0, index));
      }

      function createPushedBuffer(buffer, newValue) {
        var newBuffer = [].concat(_toConsumableArray(createTrimmedBuffer(buffer)), [newValue]);

        if (newBuffer.length > buffer.length) {
          newBuffer.splice(0, newBuffer.length - buffer.length);
        } else {
          fillBuffer(newBuffer, buffer.length);
        }

        return newBuffer;
      }

      function connectValues(_ref) {
        var primary = _ref.primary,
            secondary = _ref.secondary,
            forward = _ref.forward,
            backward = _ref.backward;
        var changing = false;

        function preventFeedback(callback) {
          if (changing) {
            return;
          }

          changing = true;
          callback();
          changing = false;
        }

        primary.emitter.on('change', function (ev) {
          preventFeedback(function () {
            secondary.setRawValue(forward(primary, secondary), ev.options);
          });
        });
        secondary.emitter.on('change', function (ev) {
          preventFeedback(function () {
            primary.setRawValue(backward(primary, secondary), ev.options);
          });
          preventFeedback(function () {
            secondary.setRawValue(forward(primary, secondary), ev.options);
          });
        });
        preventFeedback(function () {
          secondary.setRawValue(forward(primary, secondary), {
            forceEmit: false,
            last: true
          });
        });
      }

      function getStepForKey(baseStep, keys) {
        var step = baseStep * (keys.altKey ? 0.1 : 1) * (keys.shiftKey ? 10 : 1);

        if (keys.upKey) {
          return +step;
        } else if (keys.downKey) {
          return -step;
        }

        return 0;
      }

      function getVerticalStepKeys(ev) {
        return {
          altKey: ev.altKey,
          downKey: ev.key === 'ArrowDown',
          shiftKey: ev.shiftKey,
          upKey: ev.key === 'ArrowUp'
        };
      }

      function getHorizontalStepKeys(ev) {
        return {
          altKey: ev.altKey,
          downKey: ev.key === 'ArrowLeft',
          shiftKey: ev.shiftKey,
          upKey: ev.key === 'ArrowRight'
        };
      }

      function isVerticalArrowKey(key) {
        return key === 'ArrowUp' || key === 'ArrowDown';
      }

      function isArrowKey(key) {
        return isVerticalArrowKey(key) || key === 'ArrowLeft' || key === 'ArrowRight';
      }

      function computeOffset$1(ev, elem) {
        var _a, _b;

        var win = elem.ownerDocument.defaultView;
        var rect = elem.getBoundingClientRect();
        return {
          x: ev.pageX - (((_a = win && win.scrollX) !== null && _a !== void 0 ? _a : 0) + rect.left),
          y: ev.pageY - (((_b = win && win.scrollY) !== null && _b !== void 0 ? _b : 0) + rect.top)
        };
      }

      var PointerHandler = /*#__PURE__*/function () {
        function PointerHandler(element) {
          _classCallCheck(this, PointerHandler);

          this.lastTouch_ = null;
          this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this);
          this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this);
          this.onMouseDown_ = this.onMouseDown_.bind(this);
          this.onTouchEnd_ = this.onTouchEnd_.bind(this);
          this.onTouchMove_ = this.onTouchMove_.bind(this);
          this.onTouchStart_ = this.onTouchStart_.bind(this);
          this.elem_ = element;
          this.emitter = new Emitter();
          element.addEventListener('touchstart', this.onTouchStart_, {
            passive: false
          });
          element.addEventListener('touchmove', this.onTouchMove_, {
            passive: true
          });
          element.addEventListener('touchend', this.onTouchEnd_);
          element.addEventListener('mousedown', this.onMouseDown_);
        }

        _createClass(PointerHandler, [{
          key: "computePosition_",
          value: function computePosition_(offset) {
            var rect = this.elem_.getBoundingClientRect();
            return {
              bounds: {
                width: rect.width,
                height: rect.height
              },
              point: offset ? {
                x: offset.x,
                y: offset.y
              } : null
            };
          }
        }, {
          key: "onMouseDown_",
          value: function onMouseDown_(ev) {
            var _a;

            ev.preventDefault();
            (_a = ev.currentTarget) === null || _a === void 0 ? void 0 : _a.focus();
            var doc = this.elem_.ownerDocument;
            doc.addEventListener('mousemove', this.onDocumentMouseMove_);
            doc.addEventListener('mouseup', this.onDocumentMouseUp_);
            this.emitter.emit('down', {
              altKey: ev.altKey,
              data: this.computePosition_(computeOffset$1(ev, this.elem_)),
              sender: this,
              shiftKey: ev.shiftKey
            });
          }
        }, {
          key: "onDocumentMouseMove_",
          value: function onDocumentMouseMove_(ev) {
            this.emitter.emit('move', {
              altKey: ev.altKey,
              data: this.computePosition_(computeOffset$1(ev, this.elem_)),
              sender: this,
              shiftKey: ev.shiftKey
            });
          }
        }, {
          key: "onDocumentMouseUp_",
          value: function onDocumentMouseUp_(ev) {
            var doc = this.elem_.ownerDocument;
            doc.removeEventListener('mousemove', this.onDocumentMouseMove_);
            doc.removeEventListener('mouseup', this.onDocumentMouseUp_);
            this.emitter.emit('up', {
              altKey: ev.altKey,
              data: this.computePosition_(computeOffset$1(ev, this.elem_)),
              sender: this,
              shiftKey: ev.shiftKey
            });
          }
        }, {
          key: "onTouchStart_",
          value: function onTouchStart_(ev) {
            ev.preventDefault();
            var touch = ev.targetTouches.item(0);
            var rect = this.elem_.getBoundingClientRect();
            this.emitter.emit('down', {
              altKey: ev.altKey,
              data: this.computePosition_(touch ? {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
              } : undefined),
              sender: this,
              shiftKey: ev.shiftKey
            });
            this.lastTouch_ = touch;
          }
        }, {
          key: "onTouchMove_",
          value: function onTouchMove_(ev) {
            var touch = ev.targetTouches.item(0);
            var rect = this.elem_.getBoundingClientRect();
            this.emitter.emit('move', {
              altKey: ev.altKey,
              data: this.computePosition_(touch ? {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
              } : undefined),
              sender: this,
              shiftKey: ev.shiftKey
            });
            this.lastTouch_ = touch;
          }
        }, {
          key: "onTouchEnd_",
          value: function onTouchEnd_(ev) {
            var _a;

            var touch = (_a = ev.targetTouches.item(0)) !== null && _a !== void 0 ? _a : this.lastTouch_;
            var rect = this.elem_.getBoundingClientRect();
            this.emitter.emit('up', {
              altKey: ev.altKey,
              data: this.computePosition_(touch ? {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
              } : undefined),
              sender: this,
              shiftKey: ev.shiftKey
            });
          }
        }]);

        return PointerHandler;
      }();

      function mapRange(value, start1, end1, start2, end2) {
        var p = (value - start1) / (end1 - start1);
        return start2 + p * (end2 - start2);
      }

      function getDecimalDigits(value) {
        var text = String(value.toFixed(10));
        var frac = text.split('.')[1];
        return frac.replace(/0+$/, '').length;
      }

      function constrainRange(value, min, max) {
        return Math.min(Math.max(value, min), max);
      }

      function loopRange(value, max) {
        return (value % max + max) % max;
      }

      var className$g = ClassName('txt');

      var NumberTextView = /*#__PURE__*/function () {
        function NumberTextView(doc, config) {
          _classCallCheck(this, NumberTextView);

          this.onChange_ = this.onChange_.bind(this);
          this.props_ = config.props;
          this.props_.emitter.on('change', this.onChange_);
          this.element = doc.createElement('div');
          this.element.classList.add(className$g(), className$g(undefined, 'num'));

          if (config.arrayPosition) {
            this.element.classList.add(className$g(undefined, config.arrayPosition));
          }

          config.viewProps.bindClassModifiers(this.element);
          var inputElem = doc.createElement('input');
          inputElem.classList.add(className$g('i'));
          inputElem.type = 'text';
          config.viewProps.bindDisabled(inputElem);
          this.element.appendChild(inputElem);
          this.inputElement = inputElem;
          this.onDraggingChange_ = this.onDraggingChange_.bind(this);
          this.dragging_ = config.dragging;
          this.dragging_.emitter.on('change', this.onDraggingChange_);
          this.element.classList.add(className$g());
          this.inputElement.classList.add(className$g('i'));
          var knobElem = doc.createElement('div');
          knobElem.classList.add(className$g('k'));
          this.element.appendChild(knobElem);
          this.knobElement = knobElem;
          var guideElem = doc.createElementNS(SVG_NS, 'svg');
          guideElem.classList.add(className$g('g'));
          this.knobElement.appendChild(guideElem);
          var bodyElem = doc.createElementNS(SVG_NS, 'path');
          bodyElem.classList.add(className$g('gb'));
          guideElem.appendChild(bodyElem);
          this.guideBodyElem_ = bodyElem;
          var headElem = doc.createElementNS(SVG_NS, 'path');
          headElem.classList.add(className$g('gh'));
          guideElem.appendChild(headElem);
          this.guideHeadElem_ = headElem;
          var tooltipElem = doc.createElement('div');
          tooltipElem.classList.add(ClassName('tt')());
          this.knobElement.appendChild(tooltipElem);
          this.tooltipElem_ = tooltipElem;
          config.value.emitter.on('change', this.onChange_);
          this.value = config.value;
          this.refresh();
        }

        _createClass(NumberTextView, [{
          key: "onDraggingChange_",
          value: function onDraggingChange_(ev) {
            if (ev.rawValue === null) {
              this.element.classList.remove(className$g(undefined, 'drg'));
              return;
            }

            this.element.classList.add(className$g(undefined, 'drg'));
            var x = ev.rawValue / this.props_.get('draggingScale');
            var aox = x + (x > 0 ? -1 : x < 0 ? +1 : 0);
            var adx = constrainRange(-aox, -4, +4);
            this.guideHeadElem_.setAttributeNS(null, 'd', ["M ".concat(aox + adx, ",0 L").concat(aox, ",4 L").concat(aox + adx, ",8"), "M ".concat(x, ",-1 L").concat(x, ",9")].join(' '));
            this.guideBodyElem_.setAttributeNS(null, 'd', "M 0,4 L".concat(x, ",4"));
            var formatter = this.props_.get('formatter');
            this.tooltipElem_.textContent = formatter(this.value.rawValue);
            this.tooltipElem_.style.left = "".concat(x, "px");
          }
        }, {
          key: "refresh",
          value: function refresh() {
            var formatter = this.props_.get('formatter');
            this.inputElement.value = formatter(this.value.rawValue);
          }
        }, {
          key: "onChange_",
          value: function onChange_() {
            this.refresh();
          }
        }]);

        return NumberTextView;
      }();

      var NumberTextController = /*#__PURE__*/function () {
        function NumberTextController(doc, config) {
          _classCallCheck(this, NumberTextController);

          var _a;

          this.originRawValue_ = 0;
          this.onInputChange_ = this.onInputChange_.bind(this);
          this.onInputKeyDown_ = this.onInputKeyDown_.bind(this);
          this.onInputKeyUp_ = this.onInputKeyUp_.bind(this);
          this.onPointerDown_ = this.onPointerDown_.bind(this);
          this.onPointerMove_ = this.onPointerMove_.bind(this);
          this.onPointerUp_ = this.onPointerUp_.bind(this);
          this.baseStep_ = config.baseStep;
          this.parser_ = config.parser;
          this.props = config.props;
          this.sliderProps_ = (_a = config.sliderProps) !== null && _a !== void 0 ? _a : null;
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.dragging_ = createValue(null);
          this.view = new NumberTextView(doc, {
            arrayPosition: config.arrayPosition,
            dragging: this.dragging_,
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
          });
          this.view.inputElement.addEventListener('change', this.onInputChange_);
          this.view.inputElement.addEventListener('keydown', this.onInputKeyDown_);
          this.view.inputElement.addEventListener('keyup', this.onInputKeyUp_);
          var ph = new PointerHandler(this.view.knobElement);
          ph.emitter.on('down', this.onPointerDown_);
          ph.emitter.on('move', this.onPointerMove_);
          ph.emitter.on('up', this.onPointerUp_);
        }

        _createClass(NumberTextController, [{
          key: "constrainValue_",
          value: function constrainValue_(value) {
            var _a, _b;

            var min = (_a = this.sliderProps_) === null || _a === void 0 ? void 0 : _a.get('minValue');
            var max = (_b = this.sliderProps_) === null || _b === void 0 ? void 0 : _b.get('maxValue');
            var v = value;

            if (min !== undefined) {
              v = Math.max(v, min);
            }

            if (max !== undefined) {
              v = Math.min(v, max);
            }

            return v;
          }
        }, {
          key: "onInputChange_",
          value: function onInputChange_(e) {
            var inputElem = forceCast(e.currentTarget);
            var value = inputElem.value;
            var parsedValue = this.parser_(value);

            if (!isEmpty(parsedValue)) {
              this.value.rawValue = this.constrainValue_(parsedValue);
            }

            this.view.refresh();
          }
        }, {
          key: "onInputKeyDown_",
          value: function onInputKeyDown_(ev) {
            var step = getStepForKey(this.baseStep_, getVerticalStepKeys(ev));

            if (step === 0) {
              return;
            }

            this.value.setRawValue(this.constrainValue_(this.value.rawValue + step), {
              forceEmit: false,
              last: false
            });
          }
        }, {
          key: "onInputKeyUp_",
          value: function onInputKeyUp_(ev) {
            var step = getStepForKey(this.baseStep_, getVerticalStepKeys(ev));

            if (step === 0) {
              return;
            }

            this.value.setRawValue(this.value.rawValue, {
              forceEmit: true,
              last: true
            });
          }
        }, {
          key: "onPointerDown_",
          value: function onPointerDown_() {
            this.originRawValue_ = this.value.rawValue;
            this.dragging_.rawValue = 0;
          }
        }, {
          key: "computeDraggingValue_",
          value: function computeDraggingValue_(data) {
            if (!data.point) {
              return null;
            }

            var dx = data.point.x - data.bounds.width / 2;
            return this.constrainValue_(this.originRawValue_ + dx * this.props.get('draggingScale'));
          }
        }, {
          key: "onPointerMove_",
          value: function onPointerMove_(ev) {
            var v = this.computeDraggingValue_(ev.data);

            if (v === null) {
              return;
            }

            this.value.setRawValue(v, {
              forceEmit: false,
              last: false
            });
            this.dragging_.rawValue = this.value.rawValue - this.originRawValue_;
          }
        }, {
          key: "onPointerUp_",
          value: function onPointerUp_(ev) {
            var v = this.computeDraggingValue_(ev.data);

            if (v === null) {
              return;
            }

            this.value.setRawValue(v, {
              forceEmit: true,
              last: true
            });
            this.dragging_.rawValue = null;
          }
        }]);

        return NumberTextController;
      }();

      var className$f = ClassName('sld');

      var SliderView = /*#__PURE__*/function () {
        function SliderView(doc, config) {
          _classCallCheck(this, SliderView);

          this.onChange_ = this.onChange_.bind(this);
          this.props_ = config.props;
          this.props_.emitter.on('change', this.onChange_);
          this.element = doc.createElement('div');
          this.element.classList.add(className$f());
          config.viewProps.bindClassModifiers(this.element);
          var trackElem = doc.createElement('div');
          trackElem.classList.add(className$f('t'));
          config.viewProps.bindTabIndex(trackElem);
          this.element.appendChild(trackElem);
          this.trackElement = trackElem;
          var knobElem = doc.createElement('div');
          knobElem.classList.add(className$f('k'));
          this.trackElement.appendChild(knobElem);
          this.knobElement = knobElem;
          config.value.emitter.on('change', this.onChange_);
          this.value = config.value;
          this.update_();
        }

        _createClass(SliderView, [{
          key: "update_",
          value: function update_() {
            var p = constrainRange(mapRange(this.value.rawValue, this.props_.get('minValue'), this.props_.get('maxValue'), 0, 100), 0, 100);
            this.knobElement.style.width = "".concat(p, "%");
          }
        }, {
          key: "onChange_",
          value: function onChange_() {
            this.update_();
          }
        }]);

        return SliderView;
      }();

      var SliderController = /*#__PURE__*/function () {
        function SliderController(doc, config) {
          _classCallCheck(this, SliderController);

          this.onKeyDown_ = this.onKeyDown_.bind(this);
          this.onKeyUp_ = this.onKeyUp_.bind(this);
          this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this);
          this.onPointerUp_ = this.onPointerUp_.bind(this);
          this.baseStep_ = config.baseStep;
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.props = config.props;
          this.view = new SliderView(doc, {
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
          });
          this.ptHandler_ = new PointerHandler(this.view.trackElement);
          this.ptHandler_.emitter.on('down', this.onPointerDownOrMove_);
          this.ptHandler_.emitter.on('move', this.onPointerDownOrMove_);
          this.ptHandler_.emitter.on('up', this.onPointerUp_);
          this.view.trackElement.addEventListener('keydown', this.onKeyDown_);
          this.view.trackElement.addEventListener('keyup', this.onKeyUp_);
        }

        _createClass(SliderController, [{
          key: "handlePointerEvent_",
          value: function handlePointerEvent_(d, opts) {
            if (!d.point) {
              return;
            }

            this.value.setRawValue(mapRange(constrainRange(d.point.x, 0, d.bounds.width), 0, d.bounds.width, this.props.get('minValue'), this.props.get('maxValue')), opts);
          }
        }, {
          key: "onPointerDownOrMove_",
          value: function onPointerDownOrMove_(ev) {
            this.handlePointerEvent_(ev.data, {
              forceEmit: false,
              last: false
            });
          }
        }, {
          key: "onPointerUp_",
          value: function onPointerUp_(ev) {
            this.handlePointerEvent_(ev.data, {
              forceEmit: true,
              last: true
            });
          }
        }, {
          key: "onKeyDown_",
          value: function onKeyDown_(ev) {
            var step = getStepForKey(this.baseStep_, getHorizontalStepKeys(ev));

            if (step === 0) {
              return;
            }

            this.value.setRawValue(this.value.rawValue + step, {
              forceEmit: false,
              last: false
            });
          }
        }, {
          key: "onKeyUp_",
          value: function onKeyUp_(ev) {
            var step = getStepForKey(this.baseStep_, getHorizontalStepKeys(ev));

            if (step === 0) {
              return;
            }

            this.value.setRawValue(this.value.rawValue, {
              forceEmit: true,
              last: true
            });
          }
        }]);

        return SliderController;
      }();

      var className$e = ClassName('sldtxt');

      var SliderTextView = /*#__PURE__*/_createClass(function SliderTextView(doc, config) {
        _classCallCheck(this, SliderTextView);

        this.element = doc.createElement('div');
        this.element.classList.add(className$e());
        var sliderElem = doc.createElement('div');
        sliderElem.classList.add(className$e('s'));
        this.sliderView_ = config.sliderView;
        sliderElem.appendChild(this.sliderView_.element);
        this.element.appendChild(sliderElem);
        var textElem = doc.createElement('div');
        textElem.classList.add(className$e('t'));
        this.textView_ = config.textView;
        textElem.appendChild(this.textView_.element);
        this.element.appendChild(textElem);
      });

      var SliderTextController = /*#__PURE__*/function () {
        function SliderTextController(doc, config) {
          _classCallCheck(this, SliderTextController);

          this.value = config.value;
          this.viewProps = config.viewProps;
          this.sliderC_ = new SliderController(doc, {
            baseStep: config.baseStep,
            props: config.sliderProps,
            value: config.value,
            viewProps: this.viewProps
          });
          this.textC_ = new NumberTextController(doc, {
            baseStep: config.baseStep,
            parser: config.parser,
            props: config.textProps,
            sliderProps: config.sliderProps,
            value: config.value,
            viewProps: config.viewProps
          });
          this.view = new SliderTextView(doc, {
            sliderView: this.sliderC_.view,
            textView: this.textC_.view
          });
        }

        _createClass(SliderTextController, [{
          key: "sliderController",
          get: function get() {
            return this.sliderC_;
          }
        }, {
          key: "textController",
          get: function get() {
            return this.textC_;
          }
        }]);

        return SliderTextController;
      }();

      function writePrimitive(target, value) {
        target.write(value);
      }

      function parseListOptions(value) {
        var p = ParamsParsers;

        if (Array.isArray(value)) {
          return p.required.array(p.required.object({
            text: p.required.string,
            value: p.required.raw
          }))(value).value;
        }

        if (_typeof(value) === 'object') {
          return p.required.raw(value).value;
        }

        return undefined;
      }

      function parsePickerLayout(value) {
        if (value === 'inline' || value === 'popup') {
          return value;
        }

        return undefined;
      }

      function parsePointDimensionParams(value) {
        var p = ParamsParsers;
        return p.required.object({
          max: p.optional.number,
          min: p.optional.number,
          step: p.optional.number
        })(value).value;
      }

      function normalizeListOptions(options) {
        if (Array.isArray(options)) {
          return options;
        }

        var items = [];
        Object.keys(options).forEach(function (text) {
          items.push({
            text: text,
            value: options[text]
          });
        });
        return items;
      }

      function createListConstraint(options) {
        return !isEmpty(options) ? new ListConstraint(normalizeListOptions(forceCast(options))) : null;
      }

      function findListItems(constraint) {
        var c = constraint ? findConstraint(constraint, ListConstraint) : null;

        if (!c) {
          return null;
        }

        return c.options;
      }

      function findStep(constraint) {
        var c = constraint ? findConstraint(constraint, StepConstraint) : null;

        if (!c) {
          return null;
        }

        return c.step;
      }

      function getSuitableDecimalDigits(constraint, rawValue) {
        var sc = constraint && findConstraint(constraint, StepConstraint);

        if (sc) {
          return getDecimalDigits(sc.step);
        }

        return Math.max(getDecimalDigits(rawValue), 2);
      }

      function getBaseStep(constraint) {
        var step = findStep(constraint);
        return step !== null && step !== void 0 ? step : 1;
      }

      function getSuitableDraggingScale(constraint, rawValue) {
        var _a;

        var sc = constraint && findConstraint(constraint, StepConstraint);
        var base = Math.abs((_a = sc === null || sc === void 0 ? void 0 : sc.step) !== null && _a !== void 0 ? _a : rawValue);
        return base === 0 ? 0.1 : Math.pow(10, Math.floor(Math.log10(base)) - 1);
      }

      var className$d = ClassName('ckb');

      var CheckboxView = /*#__PURE__*/function () {
        function CheckboxView(doc, config) {
          _classCallCheck(this, CheckboxView);

          this.onValueChange_ = this.onValueChange_.bind(this);
          this.element = doc.createElement('div');
          this.element.classList.add(className$d());
          config.viewProps.bindClassModifiers(this.element);
          var labelElem = doc.createElement('label');
          labelElem.classList.add(className$d('l'));
          this.element.appendChild(labelElem);
          var inputElem = doc.createElement('input');
          inputElem.classList.add(className$d('i'));
          inputElem.type = 'checkbox';
          labelElem.appendChild(inputElem);
          this.inputElement = inputElem;
          config.viewProps.bindDisabled(this.inputElement);
          var wrapperElem = doc.createElement('div');
          wrapperElem.classList.add(className$d('w'));
          labelElem.appendChild(wrapperElem);
          var markElem = createSvgIconElement(doc, 'check');
          wrapperElem.appendChild(markElem);
          config.value.emitter.on('change', this.onValueChange_);
          this.value = config.value;
          this.update_();
        }

        _createClass(CheckboxView, [{
          key: "update_",
          value: function update_() {
            this.inputElement.checked = this.value.rawValue;
          }
        }, {
          key: "onValueChange_",
          value: function onValueChange_() {
            this.update_();
          }
        }]);

        return CheckboxView;
      }();

      var CheckboxController = /*#__PURE__*/function () {
        function CheckboxController(doc, config) {
          _classCallCheck(this, CheckboxController);

          this.onInputChange_ = this.onInputChange_.bind(this);
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.view = new CheckboxView(doc, {
            value: this.value,
            viewProps: this.viewProps
          });
          this.view.inputElement.addEventListener('change', this.onInputChange_);
        }

        _createClass(CheckboxController, [{
          key: "onInputChange_",
          value: function onInputChange_(e) {
            var inputElem = forceCast(e.currentTarget);
            this.value.rawValue = inputElem.checked;
          }
        }]);

        return CheckboxController;
      }();

      function createConstraint$6(params) {
        var constraints = [];
        var lc = createListConstraint(params.options);

        if (lc) {
          constraints.push(lc);
        }

        return new CompositeConstraint(constraints);
      }

      var BooleanInputPlugin = {
        id: 'input-bool',
        type: 'input',
        accept: function accept(value, params) {
          if (typeof value !== 'boolean') {
            return null;
          }

          var p = ParamsParsers;
          var result = parseParams(params, {
            options: p.optional.custom(parseListOptions)
          });
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          reader: function reader(_args) {
            return boolFromUnknown;
          },
          constraint: function constraint(args) {
            return createConstraint$6(args.params);
          },
          writer: function writer(_args) {
            return writePrimitive;
          }
        },
        controller: function controller(args) {
          var _a;

          var doc = args.document;
          var value = args.value;
          var c = args.constraint;

          if (c && findConstraint(c, ListConstraint)) {
            return new ListController(doc, {
              props: ValueMap.fromObject({
                options: (_a = findListItems(c)) !== null && _a !== void 0 ? _a : []
              }),
              value: value,
              viewProps: args.viewProps
            });
          }

          return new CheckboxController(doc, {
            value: value,
            viewProps: args.viewProps
          });
        }
      };
      var className$c = ClassName('col');

      var ColorView = /*#__PURE__*/_createClass(function ColorView(doc, config) {
        _classCallCheck(this, ColorView);

        this.element = doc.createElement('div');
        this.element.classList.add(className$c());
        config.foldable.bindExpandedClass(this.element, className$c(undefined, 'expanded'));
        bindValueMap(config.foldable, 'completed', valueToClassName(this.element, className$c(undefined, 'cpl')));
        var headElem = doc.createElement('div');
        headElem.classList.add(className$c('h'));
        this.element.appendChild(headElem);
        var swatchElem = doc.createElement('div');
        swatchElem.classList.add(className$c('s'));
        headElem.appendChild(swatchElem);
        this.swatchElement = swatchElem;
        var textElem = doc.createElement('div');
        textElem.classList.add(className$c('t'));
        headElem.appendChild(textElem);
        this.textElement = textElem;

        if (config.pickerLayout === 'inline') {
          var pickerElem = doc.createElement('div');
          pickerElem.classList.add(className$c('p'));
          this.element.appendChild(pickerElem);
          this.pickerElement = pickerElem;
        } else {
          this.pickerElement = null;
        }
      });

      function rgbToHslInt(r, g, b) {
        var rp = constrainRange(r / 255, 0, 1);
        var gp = constrainRange(g / 255, 0, 1);
        var bp = constrainRange(b / 255, 0, 1);
        var cmax = Math.max(rp, gp, bp);
        var cmin = Math.min(rp, gp, bp);
        var c = cmax - cmin;
        var h = 0;
        var s = 0;
        var l = (cmin + cmax) / 2;

        if (c !== 0) {
          s = c / (1 - Math.abs(cmax + cmin - 1));

          if (rp === cmax) {
            h = (gp - bp) / c;
          } else if (gp === cmax) {
            h = 2 + (bp - rp) / c;
          } else {
            h = 4 + (rp - gp) / c;
          }

          h = h / 6 + (h < 0 ? 1 : 0);
        }

        return [h * 360, s * 100, l * 100];
      }

      function hslToRgbInt(h, s, l) {
        var hp = (h % 360 + 360) % 360;
        var sp = constrainRange(s / 100, 0, 1);
        var lp = constrainRange(l / 100, 0, 1);
        var c = (1 - Math.abs(2 * lp - 1)) * sp;
        var x = c * (1 - Math.abs(hp / 60 % 2 - 1));
        var m = lp - c / 2;
        var rp, gp, bp;

        if (hp >= 0 && hp < 60) {
          rp = c;
          gp = x;
          bp = 0;
        } else if (hp >= 60 && hp < 120) {
          rp = x;
          gp = c;
          bp = 0;
        } else if (hp >= 120 && hp < 180) {
          rp = 0;
          gp = c;
          bp = x;
        } else if (hp >= 180 && hp < 240) {
          rp = 0;
          gp = x;
          bp = c;
        } else if (hp >= 240 && hp < 300) {
          rp = x;
          gp = 0;
          bp = c;
        } else {
          rp = c;
          gp = 0;
          bp = x;
        }

        return [(rp + m) * 255, (gp + m) * 255, (bp + m) * 255];
      }

      function rgbToHsvInt(r, g, b) {
        var rp = constrainRange(r / 255, 0, 1);
        var gp = constrainRange(g / 255, 0, 1);
        var bp = constrainRange(b / 255, 0, 1);
        var cmax = Math.max(rp, gp, bp);
        var cmin = Math.min(rp, gp, bp);
        var d = cmax - cmin;
        var h;

        if (d === 0) {
          h = 0;
        } else if (cmax === rp) {
          h = 60 * (((gp - bp) / d % 6 + 6) % 6);
        } else if (cmax === gp) {
          h = 60 * ((bp - rp) / d + 2);
        } else {
          h = 60 * ((rp - gp) / d + 4);
        }

        var s = cmax === 0 ? 0 : d / cmax;
        var v = cmax;
        return [h, s * 100, v * 100];
      }

      function hsvToRgbInt(h, s, v) {
        var hp = loopRange(h, 360);
        var sp = constrainRange(s / 100, 0, 1);
        var vp = constrainRange(v / 100, 0, 1);
        var c = vp * sp;
        var x = c * (1 - Math.abs(hp / 60 % 2 - 1));
        var m = vp - c;
        var rp, gp, bp;

        if (hp >= 0 && hp < 60) {
          rp = c;
          gp = x;
          bp = 0;
        } else if (hp >= 60 && hp < 120) {
          rp = x;
          gp = c;
          bp = 0;
        } else if (hp >= 120 && hp < 180) {
          rp = 0;
          gp = c;
          bp = x;
        } else if (hp >= 180 && hp < 240) {
          rp = 0;
          gp = x;
          bp = c;
        } else if (hp >= 240 && hp < 300) {
          rp = x;
          gp = 0;
          bp = c;
        } else {
          rp = c;
          gp = 0;
          bp = x;
        }

        return [(rp + m) * 255, (gp + m) * 255, (bp + m) * 255];
      }

      function hslToHsvInt(h, s, l) {
        var sd = l + s * (100 - Math.abs(2 * l - 100)) / (2 * 100);
        return [h, sd !== 0 ? s * (100 - Math.abs(2 * l - 100)) / sd : 0, l + s * (100 - Math.abs(2 * l - 100)) / (2 * 100)];
      }

      function hsvToHslInt(h, s, v) {
        var sd = 100 - Math.abs(v * (200 - s) / 100 - 100);
        return [h, sd !== 0 ? s * v / sd : 0, v * (200 - s) / (2 * 100)];
      }

      function removeAlphaComponent(comps) {
        return [comps[0], comps[1], comps[2]];
      }

      function appendAlphaComponent(comps, alpha) {
        return [comps[0], comps[1], comps[2], alpha];
      }

      var MODE_CONVERTER_MAP = {
        hsl: {
          hsl: function hsl(h, s, l) {
            return [h, s, l];
          },
          hsv: hslToHsvInt,
          rgb: hslToRgbInt
        },
        hsv: {
          hsl: hsvToHslInt,
          hsv: function hsv(h, s, v) {
            return [h, s, v];
          },
          rgb: hsvToRgbInt
        },
        rgb: {
          hsl: rgbToHslInt,
          hsv: rgbToHsvInt,
          rgb: function rgb(r, g, b) {
            return [r, g, b];
          }
        }
      };

      function getColorMaxComponents(mode, type) {
        return [type === 'float' ? 1 : mode === 'rgb' ? 255 : 360, type === 'float' ? 1 : mode === 'rgb' ? 255 : 100, type === 'float' ? 1 : mode === 'rgb' ? 255 : 100];
      }

      function constrainColorComponents(components, mode, type) {
        var _a;

        var ms = getColorMaxComponents(mode, type);
        return [mode === 'rgb' ? constrainRange(components[0], 0, ms[0]) : loopRange(components[0], ms[0]), constrainRange(components[1], 0, ms[1]), constrainRange(components[2], 0, ms[2]), constrainRange((_a = components[3]) !== null && _a !== void 0 ? _a : 1, 0, 1)];
      }

      function convertColorType(comps, mode, from, to) {
        var fms = getColorMaxComponents(mode, from);
        var tms = getColorMaxComponents(mode, to);
        return comps.map(function (c, index) {
          return c / fms[index] * tms[index];
        });
      }

      function convertColor(components, from, to) {
        var _MODE_CONVERTER_MAP$f;

        var intComps = convertColorType(components, from.mode, from.type, 'int');

        var result = (_MODE_CONVERTER_MAP$f = MODE_CONVERTER_MAP[from.mode])[to.mode].apply(_MODE_CONVERTER_MAP$f, _toConsumableArray(intComps));

        return convertColorType(result, to.mode, 'int', to.type);
      }

      function isRgbColorComponent(obj, key) {
        if (_typeof(obj) !== 'object' || isEmpty(obj)) {
          return false;
        }

        return key in obj && typeof obj[key] === 'number';
      }

      var Color = /*#__PURE__*/function () {
        function Color(comps, mode) {
          var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'int';

          _classCallCheck(this, Color);

          this.mode = mode;
          this.type = type;
          this.comps_ = constrainColorComponents(comps, mode, type);
        }

        _createClass(Color, [{
          key: "getComponents",
          value: function getComponents(opt_mode) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'int';
            return appendAlphaComponent(convertColor(removeAlphaComponent(this.comps_), {
              mode: this.mode,
              type: this.type
            }, {
              mode: opt_mode !== null && opt_mode !== void 0 ? opt_mode : this.mode,
              type: type
            }), this.comps_[3]);
          }
        }, {
          key: "toRgbaObject",
          value: function toRgbaObject() {
            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'int';
            var rgbComps = this.getComponents('rgb', type);
            return {
              r: rgbComps[0],
              g: rgbComps[1],
              b: rgbComps[2],
              a: rgbComps[3]
            };
          }
        }], [{
          key: "black",
          value: function black() {
            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'int';
            return new Color([0, 0, 0], 'rgb', type);
          }
        }, {
          key: "fromObject",
          value: function fromObject(obj) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'int';
            var comps = 'a' in obj ? [obj.r, obj.g, obj.b, obj.a] : [obj.r, obj.g, obj.b];
            return new Color(comps, 'rgb', type);
          }
        }, {
          key: "toRgbaObject",
          value: function toRgbaObject(color) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'int';
            return color.toRgbaObject(type);
          }
        }, {
          key: "isRgbColorObject",
          value: function isRgbColorObject(obj) {
            return isRgbColorComponent(obj, 'r') && isRgbColorComponent(obj, 'g') && isRgbColorComponent(obj, 'b');
          }
        }, {
          key: "isRgbaColorObject",
          value: function isRgbaColorObject(obj) {
            return this.isRgbColorObject(obj) && isRgbColorComponent(obj, 'a');
          }
        }, {
          key: "isColorObject",
          value: function isColorObject(obj) {
            return this.isRgbColorObject(obj);
          }
        }, {
          key: "equals",
          value: function equals(v1, v2) {
            if (v1.mode !== v2.mode) {
              return false;
            }

            var comps1 = v1.comps_;
            var comps2 = v2.comps_;

            for (var i = 0; i < comps1.length; i++) {
              if (comps1[i] !== comps2[i]) {
                return false;
              }
            }

            return true;
          }
        }]);

        return Color;
      }();

      var className$b = ClassName('colp');

      var ColorPickerView = /*#__PURE__*/function () {
        function ColorPickerView(doc, config) {
          _classCallCheck(this, ColorPickerView);

          this.alphaViews_ = null;
          this.element = doc.createElement('div');
          this.element.classList.add(className$b());
          var hsvElem = doc.createElement('div');
          hsvElem.classList.add(className$b('hsv'));
          var svElem = doc.createElement('div');
          svElem.classList.add(className$b('sv'));
          this.svPaletteView_ = config.svPaletteView;
          svElem.appendChild(this.svPaletteView_.element);
          hsvElem.appendChild(svElem);
          var hElem = doc.createElement('div');
          hElem.classList.add(className$b('h'));
          this.hPaletteView_ = config.hPaletteView;
          hElem.appendChild(this.hPaletteView_.element);
          hsvElem.appendChild(hElem);
          this.element.appendChild(hsvElem);
          var rgbElem = doc.createElement('div');
          rgbElem.classList.add(className$b('rgb'));
          this.textView_ = config.textView;
          rgbElem.appendChild(this.textView_.element);
          this.element.appendChild(rgbElem);

          if (config.alphaViews) {
            this.alphaViews_ = {
              palette: config.alphaViews.palette,
              text: config.alphaViews.text
            };
            var aElem = doc.createElement('div');
            aElem.classList.add(className$b('a'));
            var apElem = doc.createElement('div');
            apElem.classList.add(className$b('ap'));
            apElem.appendChild(this.alphaViews_.palette.element);
            aElem.appendChild(apElem);
            var atElem = doc.createElement('div');
            atElem.classList.add(className$b('at'));
            atElem.appendChild(this.alphaViews_.text.element);
            aElem.appendChild(atElem);
            this.element.appendChild(aElem);
          }
        }

        _createClass(ColorPickerView, [{
          key: "allFocusableElements",
          get: function get() {
            var elems = [this.svPaletteView_.element, this.hPaletteView_.element, this.textView_.modeSelectElement].concat(_toConsumableArray(this.textView_.textViews.map(function (v) {
              return v.inputElement;
            })));

            if (this.alphaViews_) {
              elems.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement);
            }

            return elems;
          }
        }]);

        return ColorPickerView;
      }();

      function parseColorType(value) {
        return value === 'int' ? 'int' : value === 'float' ? 'float' : undefined;
      }

      function parseColorInputParams(params) {
        var p = ParamsParsers;
        return parseParams(params, {
          alpha: p.optional["boolean"],
          color: p.optional.object({
            alpha: p.optional["boolean"],
            type: p.optional.custom(parseColorType)
          }),
          expanded: p.optional["boolean"],
          picker: p.optional.custom(parsePickerLayout)
        });
      }

      function getBaseStepForColor(forAlpha) {
        return forAlpha ? 0.1 : 1;
      }

      function extractColorType(params) {
        var _a;

        return (_a = params.color) === null || _a === void 0 ? void 0 : _a.type;
      }

      function equalsStringColorFormat(f1, f2) {
        return f1.alpha === f2.alpha && f1.mode === f2.mode && f1.notation === f2.notation && f1.type === f2.type;
      }

      function parseCssNumberOrPercentage(text, maxValue) {
        var m = text.match(/^(.+)%$/);

        if (!m) {
          return Math.min(parseFloat(text), maxValue);
        }

        return Math.min(parseFloat(m[1]) * 0.01 * maxValue, maxValue);
      }

      var ANGLE_TO_DEG_MAP = {
        deg: function deg(angle) {
          return angle;
        },
        grad: function grad(angle) {
          return angle * 360 / 400;
        },
        rad: function rad(angle) {
          return angle * 360 / (2 * Math.PI);
        },
        turn: function turn(angle) {
          return angle * 360;
        }
      };

      function parseCssNumberOrAngle(text) {
        var m = text.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);

        if (!m) {
          return parseFloat(text);
        }

        var angle = parseFloat(m[1]);
        var unit = m[2];
        return ANGLE_TO_DEG_MAP[unit](angle);
      }

      function parseFunctionalRgbColorComponents(text) {
        var m = text.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);

        if (!m) {
          return null;
        }

        var comps = [parseCssNumberOrPercentage(m[1], 255), parseCssNumberOrPercentage(m[2], 255), parseCssNumberOrPercentage(m[3], 255)];

        if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) {
          return null;
        }

        return comps;
      }

      function createFunctionalRgbColorParser(type) {
        return function (text) {
          var comps = parseFunctionalRgbColorComponents(text);
          return comps ? new Color(comps, 'rgb', type) : null;
        };
      }

      function parseFunctionalRgbaColorComponents(text) {
        var m = text.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);

        if (!m) {
          return null;
        }

        var comps = [parseCssNumberOrPercentage(m[1], 255), parseCssNumberOrPercentage(m[2], 255), parseCssNumberOrPercentage(m[3], 255), parseCssNumberOrPercentage(m[4], 1)];

        if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) {
          return null;
        }

        return comps;
      }

      function createFunctionalRgbaColorParser(type) {
        return function (text) {
          var comps = parseFunctionalRgbaColorComponents(text);
          return comps ? new Color(comps, 'rgb', type) : null;
        };
      }

      function parseHslColorComponents(text) {
        var m = text.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);

        if (!m) {
          return null;
        }

        var comps = [parseCssNumberOrAngle(m[1]), parseCssNumberOrPercentage(m[2], 100), parseCssNumberOrPercentage(m[3], 100)];

        if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) {
          return null;
        }

        return comps;
      }

      function createHslColorParser(type) {
        return function (text) {
          var comps = parseHslColorComponents(text);
          return comps ? new Color(comps, 'hsl', type) : null;
        };
      }

      function parseHslaColorComponents(text) {
        var m = text.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);

        if (!m) {
          return null;
        }

        var comps = [parseCssNumberOrAngle(m[1]), parseCssNumberOrPercentage(m[2], 100), parseCssNumberOrPercentage(m[3], 100), parseCssNumberOrPercentage(m[4], 1)];

        if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) {
          return null;
        }

        return comps;
      }

      function createHslaColorParser(type) {
        return function (text) {
          var comps = parseHslaColorComponents(text);
          return comps ? new Color(comps, 'hsl', type) : null;
        };
      }

      function parseHexRgbColorComponents(text) {
        var mRgb = text.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);

        if (mRgb) {
          return [parseInt(mRgb[1] + mRgb[1], 16), parseInt(mRgb[2] + mRgb[2], 16), parseInt(mRgb[3] + mRgb[3], 16)];
        }

        var mRrggbb = text.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);

        if (mRrggbb) {
          return [parseInt(mRrggbb[1], 16), parseInt(mRrggbb[2], 16), parseInt(mRrggbb[3], 16)];
        }

        return null;
      }

      function parseHexRgbColor(text) {
        var comps = parseHexRgbColorComponents(text);
        return comps ? new Color(comps, 'rgb', 'int') : null;
      }

      function parseHexRgbaColorComponents(text) {
        var mRgb = text.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);

        if (mRgb) {
          return [parseInt(mRgb[1] + mRgb[1], 16), parseInt(mRgb[2] + mRgb[2], 16), parseInt(mRgb[3] + mRgb[3], 16), mapRange(parseInt(mRgb[4] + mRgb[4], 16), 0, 255, 0, 1)];
        }

        var mRrggbb = text.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);

        if (mRrggbb) {
          return [parseInt(mRrggbb[1], 16), parseInt(mRrggbb[2], 16), parseInt(mRrggbb[3], 16), mapRange(parseInt(mRrggbb[4], 16), 0, 255, 0, 1)];
        }

        return null;
      }

      function parseHexRgbaColor(text) {
        var comps = parseHexRgbaColorComponents(text);
        return comps ? new Color(comps, 'rgb', 'int') : null;
      }

      function parseObjectRgbColorComponents(text) {
        var m = text.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);

        if (!m) {
          return null;
        }

        var comps = [parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3])];

        if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) {
          return null;
        }

        return comps;
      }

      function createObjectRgbColorParser(type) {
        return function (text) {
          var comps = parseObjectRgbColorComponents(text);
          return comps ? new Color(comps, 'rgb', type) : null;
        };
      }

      function parseObjectRgbaColorComponents(text) {
        var m = text.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);

        if (!m) {
          return null;
        }

        var comps = [parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3]), parseFloat(m[4])];

        if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) {
          return null;
        }

        return comps;
      }

      function createObjectRgbaColorParser(type) {
        return function (text) {
          var comps = parseObjectRgbaColorComponents(text);
          return comps ? new Color(comps, 'rgb', type) : null;
        };
      }

      var PARSER_AND_RESULT = [{
        parser: parseHexRgbColorComponents,
        result: {
          alpha: false,
          mode: 'rgb',
          notation: 'hex'
        }
      }, {
        parser: parseHexRgbaColorComponents,
        result: {
          alpha: true,
          mode: 'rgb',
          notation: 'hex'
        }
      }, {
        parser: parseFunctionalRgbColorComponents,
        result: {
          alpha: false,
          mode: 'rgb',
          notation: 'func'
        }
      }, {
        parser: parseFunctionalRgbaColorComponents,
        result: {
          alpha: true,
          mode: 'rgb',
          notation: 'func'
        }
      }, {
        parser: parseHslColorComponents,
        result: {
          alpha: false,
          mode: 'hsl',
          notation: 'func'
        }
      }, {
        parser: parseHslaColorComponents,
        result: {
          alpha: true,
          mode: 'hsl',
          notation: 'func'
        }
      }, {
        parser: parseObjectRgbColorComponents,
        result: {
          alpha: false,
          mode: 'rgb',
          notation: 'object'
        }
      }, {
        parser: parseObjectRgbaColorComponents,
        result: {
          alpha: true,
          mode: 'rgb',
          notation: 'object'
        }
      }];

      function detectStringColor(text) {
        return PARSER_AND_RESULT.reduce(function (prev, _ref2) {
          var parser = _ref2.parser,
              detection = _ref2.result;

          if (prev) {
            return prev;
          }

          return parser(text) ? detection : null;
        }, null);
      }

      function detectStringColorFormat(text) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'int';
        var r = detectStringColor(text);

        if (!r) {
          return null;
        }

        if (r.notation === 'hex' && type !== 'float') {
          return Object.assign(Object.assign({}, r), {
            type: 'int'
          });
        }

        if (r.notation === 'func') {
          return Object.assign(Object.assign({}, r), {
            type: type
          });
        }

        return null;
      }

      var TYPE_TO_PARSERS = {
        "int": [parseHexRgbColor, parseHexRgbaColor, createFunctionalRgbColorParser('int'), createFunctionalRgbaColorParser('int'), createHslColorParser('int'), createHslaColorParser('int'), createObjectRgbColorParser('int'), createObjectRgbaColorParser('int')],
        "float": [createFunctionalRgbColorParser('float'), createFunctionalRgbaColorParser('float'), createHslColorParser('float'), createHslaColorParser('float'), createObjectRgbColorParser('float'), createObjectRgbaColorParser('float')]
      };

      function createColorStringBindingReader(type) {
        var parsers = TYPE_TO_PARSERS[type];
        return function (value) {
          if (typeof value !== 'string') {
            return Color.black(type);
          }

          var result = parsers.reduce(function (prev, parser) {
            if (prev) {
              return prev;
            }

            return parser(value);
          }, null);
          return result !== null && result !== void 0 ? result : Color.black(type);
        };
      }

      function createColorStringParser(type) {
        var parsers = TYPE_TO_PARSERS[type];
        return function (value) {
          return parsers.reduce(function (prev, parser) {
            if (prev) {
              return prev;
            }

            return parser(value);
          }, null);
        };
      }

      function zerofill(comp) {
        var hex = constrainRange(Math.floor(comp), 0, 255).toString(16);
        return hex.length === 1 ? "0".concat(hex) : hex;
      }

      function colorToHexRgbString(value) {
        var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#';
        var hexes = removeAlphaComponent(value.getComponents('rgb')).map(zerofill).join('');
        return "".concat(prefix).concat(hexes);
      }

      function colorToHexRgbaString(value) {
        var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#';
        var rgbaComps = value.getComponents('rgb');
        var hexes = [rgbaComps[0], rgbaComps[1], rgbaComps[2], rgbaComps[3] * 255].map(zerofill).join('');
        return "".concat(prefix).concat(hexes);
      }

      function colorToFunctionalRgbString(value, opt_type) {
        var formatter = createNumberFormatter(opt_type === 'float' ? 2 : 0);
        var comps = removeAlphaComponent(value.getComponents('rgb', opt_type)).map(function (comp) {
          return formatter(comp);
        });
        return "rgb(".concat(comps.join(', '), ")");
      }

      function createFunctionalRgbColorFormatter(type) {
        return function (value) {
          return colorToFunctionalRgbString(value, type);
        };
      }

      function colorToFunctionalRgbaString(value, opt_type) {
        var aFormatter = createNumberFormatter(2);
        var rgbFormatter = createNumberFormatter(opt_type === 'float' ? 2 : 0);
        var comps = value.getComponents('rgb', opt_type).map(function (comp, index) {
          var formatter = index === 3 ? aFormatter : rgbFormatter;
          return formatter(comp);
        });
        return "rgba(".concat(comps.join(', '), ")");
      }

      function createFunctionalRgbaColorFormatter(type) {
        return function (value) {
          return colorToFunctionalRgbaString(value, type);
        };
      }

      function colorToFunctionalHslString(value) {
        var formatters = [createNumberFormatter(0), formatPercentage, formatPercentage];
        var comps = removeAlphaComponent(value.getComponents('hsl')).map(function (comp, index) {
          return formatters[index](comp);
        });
        return "hsl(".concat(comps.join(', '), ")");
      }

      function colorToFunctionalHslaString(value) {
        var formatters = [createNumberFormatter(0), formatPercentage, formatPercentage, createNumberFormatter(2)];
        var comps = value.getComponents('hsl').map(function (comp, index) {
          return formatters[index](comp);
        });
        return "hsla(".concat(comps.join(', '), ")");
      }

      function colorToObjectRgbString(value, type) {
        var formatter = createNumberFormatter(type === 'float' ? 2 : 0);
        var names = ['r', 'g', 'b'];
        var comps = removeAlphaComponent(value.getComponents('rgb', type)).map(function (comp, index) {
          return "".concat(names[index], ": ").concat(formatter(comp));
        });
        return "{".concat(comps.join(', '), "}");
      }

      function createObjectRgbColorFormatter(type) {
        return function (value) {
          return colorToObjectRgbString(value, type);
        };
      }

      function colorToObjectRgbaString(value, type) {
        var aFormatter = createNumberFormatter(2);
        var rgbFormatter = createNumberFormatter(type === 'float' ? 2 : 0);
        var names = ['r', 'g', 'b', 'a'];
        var comps = value.getComponents('rgb', type).map(function (comp, index) {
          var formatter = index === 3 ? aFormatter : rgbFormatter;
          return "".concat(names[index], ": ").concat(formatter(comp));
        });
        return "{".concat(comps.join(', '), "}");
      }

      function createObjectRgbaColorFormatter(type) {
        return function (value) {
          return colorToObjectRgbaString(value, type);
        };
      }

      var FORMAT_AND_STRINGIFIERS = [{
        format: {
          alpha: false,
          mode: 'rgb',
          notation: 'hex',
          type: 'int'
        },
        stringifier: colorToHexRgbString
      }, {
        format: {
          alpha: true,
          mode: 'rgb',
          notation: 'hex',
          type: 'int'
        },
        stringifier: colorToHexRgbaString
      }, {
        format: {
          alpha: false,
          mode: 'hsl',
          notation: 'func',
          type: 'int'
        },
        stringifier: colorToFunctionalHslString
      }, {
        format: {
          alpha: true,
          mode: 'hsl',
          notation: 'func',
          type: 'int'
        },
        stringifier: colorToFunctionalHslaString
      }].concat(_toConsumableArray(['int', 'float'].reduce(function (prev, type) {
        return [].concat(_toConsumableArray(prev), [{
          format: {
            alpha: false,
            mode: 'rgb',
            notation: 'func',
            type: type
          },
          stringifier: createFunctionalRgbColorFormatter(type)
        }, {
          format: {
            alpha: true,
            mode: 'rgb',
            notation: 'func',
            type: type
          },
          stringifier: createFunctionalRgbaColorFormatter(type)
        }, {
          format: {
            alpha: false,
            mode: 'rgb',
            notation: 'object',
            type: type
          },
          stringifier: createObjectRgbColorFormatter(type)
        }, {
          format: {
            alpha: true,
            mode: 'rgb',
            notation: 'object',
            type: type
          },
          stringifier: createObjectRgbaColorFormatter(type)
        }]);
      }, [])));

      function findColorStringifier(format) {
        return FORMAT_AND_STRINGIFIERS.reduce(function (prev, fas) {
          if (prev) {
            return prev;
          }

          return equalsStringColorFormat(fas.format, format) ? fas.stringifier : null;
        }, null);
      }

      var className$a = ClassName('apl');

      var APaletteView = /*#__PURE__*/function () {
        function APaletteView(doc, config) {
          _classCallCheck(this, APaletteView);

          this.onValueChange_ = this.onValueChange_.bind(this);
          this.value = config.value;
          this.value.emitter.on('change', this.onValueChange_);
          this.element = doc.createElement('div');
          this.element.classList.add(className$a());
          config.viewProps.bindTabIndex(this.element);
          var barElem = doc.createElement('div');
          barElem.classList.add(className$a('b'));
          this.element.appendChild(barElem);
          var colorElem = doc.createElement('div');
          colorElem.classList.add(className$a('c'));
          barElem.appendChild(colorElem);
          this.colorElem_ = colorElem;
          var markerElem = doc.createElement('div');
          markerElem.classList.add(className$a('m'));
          this.element.appendChild(markerElem);
          this.markerElem_ = markerElem;
          var previewElem = doc.createElement('div');
          previewElem.classList.add(className$a('p'));
          this.markerElem_.appendChild(previewElem);
          this.previewElem_ = previewElem;
          this.update_();
        }

        _createClass(APaletteView, [{
          key: "update_",
          value: function update_() {
            var c = this.value.rawValue;
            var rgbaComps = c.getComponents('rgb');
            var leftColor = new Color([rgbaComps[0], rgbaComps[1], rgbaComps[2], 0], 'rgb');
            var rightColor = new Color([rgbaComps[0], rgbaComps[1], rgbaComps[2], 255], 'rgb');
            var gradientComps = ['to right', colorToFunctionalRgbaString(leftColor), colorToFunctionalRgbaString(rightColor)];
            this.colorElem_.style.background = "linear-gradient(".concat(gradientComps.join(','), ")");
            this.previewElem_.style.backgroundColor = colorToFunctionalRgbaString(c);
            var left = mapRange(rgbaComps[3], 0, 1, 0, 100);
            this.markerElem_.style.left = "".concat(left, "%");
          }
        }, {
          key: "onValueChange_",
          value: function onValueChange_() {
            this.update_();
          }
        }]);

        return APaletteView;
      }();

      var APaletteController = /*#__PURE__*/function () {
        function APaletteController(doc, config) {
          _classCallCheck(this, APaletteController);

          this.onKeyDown_ = this.onKeyDown_.bind(this);
          this.onKeyUp_ = this.onKeyUp_.bind(this);
          this.onPointerDown_ = this.onPointerDown_.bind(this);
          this.onPointerMove_ = this.onPointerMove_.bind(this);
          this.onPointerUp_ = this.onPointerUp_.bind(this);
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.view = new APaletteView(doc, {
            value: this.value,
            viewProps: this.viewProps
          });
          this.ptHandler_ = new PointerHandler(this.view.element);
          this.ptHandler_.emitter.on('down', this.onPointerDown_);
          this.ptHandler_.emitter.on('move', this.onPointerMove_);
          this.ptHandler_.emitter.on('up', this.onPointerUp_);
          this.view.element.addEventListener('keydown', this.onKeyDown_);
          this.view.element.addEventListener('keyup', this.onKeyUp_);
        }

        _createClass(APaletteController, [{
          key: "handlePointerEvent_",
          value: function handlePointerEvent_(d, opts) {
            if (!d.point) {
              return;
            }

            var alpha = d.point.x / d.bounds.width;
            var c = this.value.rawValue;

            var _c$getComponents = c.getComponents('hsv'),
                _c$getComponents2 = _slicedToArray(_c$getComponents, 3),
                h = _c$getComponents2[0],
                s = _c$getComponents2[1],
                v = _c$getComponents2[2];

            this.value.setRawValue(new Color([h, s, v, alpha], 'hsv'), opts);
          }
        }, {
          key: "onPointerDown_",
          value: function onPointerDown_(ev) {
            this.handlePointerEvent_(ev.data, {
              forceEmit: false,
              last: false
            });
          }
        }, {
          key: "onPointerMove_",
          value: function onPointerMove_(ev) {
            this.handlePointerEvent_(ev.data, {
              forceEmit: false,
              last: false
            });
          }
        }, {
          key: "onPointerUp_",
          value: function onPointerUp_(ev) {
            this.handlePointerEvent_(ev.data, {
              forceEmit: true,
              last: true
            });
          }
        }, {
          key: "onKeyDown_",
          value: function onKeyDown_(ev) {
            var step = getStepForKey(getBaseStepForColor(true), getHorizontalStepKeys(ev));

            if (step === 0) {
              return;
            }

            var c = this.value.rawValue;

            var _c$getComponents3 = c.getComponents('hsv'),
                _c$getComponents4 = _slicedToArray(_c$getComponents3, 4),
                h = _c$getComponents4[0],
                s = _c$getComponents4[1],
                v = _c$getComponents4[2],
                a = _c$getComponents4[3];

            this.value.setRawValue(new Color([h, s, v, a + step], 'hsv'), {
              forceEmit: false,
              last: false
            });
          }
        }, {
          key: "onKeyUp_",
          value: function onKeyUp_(ev) {
            var step = getStepForKey(getBaseStepForColor(true), getHorizontalStepKeys(ev));

            if (step === 0) {
              return;
            }

            this.value.setRawValue(this.value.rawValue, {
              forceEmit: true,
              last: true
            });
          }
        }]);

        return APaletteController;
      }();

      var className$9 = ClassName('coltxt');

      function createModeSelectElement(doc) {
        var selectElem = doc.createElement('select');
        var items = [{
          text: 'RGB',
          value: 'rgb'
        }, {
          text: 'HSL',
          value: 'hsl'
        }, {
          text: 'HSV',
          value: 'hsv'
        }];
        selectElem.appendChild(items.reduce(function (frag, item) {
          var optElem = doc.createElement('option');
          optElem.textContent = item.text;
          optElem.value = item.value;
          frag.appendChild(optElem);
          return frag;
        }, doc.createDocumentFragment()));
        return selectElem;
      }

      var ColorTextView = /*#__PURE__*/function () {
        function ColorTextView(doc, config) {
          var _this33 = this;

          _classCallCheck(this, ColorTextView);

          this.element = doc.createElement('div');
          this.element.classList.add(className$9());
          var modeElem = doc.createElement('div');
          modeElem.classList.add(className$9('m'));
          this.modeElem_ = createModeSelectElement(doc);
          this.modeElem_.classList.add(className$9('ms'));
          modeElem.appendChild(this.modeSelectElement);
          var modeMarkerElem = doc.createElement('div');
          modeMarkerElem.classList.add(className$9('mm'));
          modeMarkerElem.appendChild(createSvgIconElement(doc, 'dropdown'));
          modeElem.appendChild(modeMarkerElem);
          this.element.appendChild(modeElem);
          var textsElem = doc.createElement('div');
          textsElem.classList.add(className$9('w'));
          this.element.appendChild(textsElem);
          this.textsElem_ = textsElem;
          this.textViews_ = config.textViews;
          this.applyTextViews_();
          bindValue(config.colorMode, function (mode) {
            _this33.modeElem_.value = mode;
          });
        }

        _createClass(ColorTextView, [{
          key: "modeSelectElement",
          get: function get() {
            return this.modeElem_;
          }
        }, {
          key: "textViews",
          get: function get() {
            return this.textViews_;
          },
          set: function set(textViews) {
            this.textViews_ = textViews;
            this.applyTextViews_();
          }
        }, {
          key: "applyTextViews_",
          value: function applyTextViews_() {
            var _this34 = this;

            removeChildElements(this.textsElem_);
            var doc = this.element.ownerDocument;
            this.textViews_.forEach(function (v) {
              var compElem = doc.createElement('div');
              compElem.classList.add(className$9('c'));
              compElem.appendChild(v.element);

              _this34.textsElem_.appendChild(compElem);
            });
          }
        }]);

        return ColorTextView;
      }();

      function createFormatter$2(type) {
        return createNumberFormatter(type === 'float' ? 2 : 0);
      }

      function createConstraint$5(mode, type, index) {
        var max = getColorMaxComponents(mode, type)[index];
        return new RangeConstraint({
          min: 0,
          max: max
        });
      }

      function createComponentController(doc, config, index) {
        return new NumberTextController(doc, {
          arrayPosition: index === 0 ? 'fst' : index === 3 - 1 ? 'lst' : 'mid',
          baseStep: getBaseStepForColor(false),
          parser: config.parser,
          props: ValueMap.fromObject({
            draggingScale: config.colorType === 'float' ? 0.01 : 1,
            formatter: createFormatter$2(config.colorType)
          }),
          value: createValue(0, {
            constraint: createConstraint$5(config.colorMode, config.colorType, index)
          }),
          viewProps: config.viewProps
        });
      }

      var ColorTextController = /*#__PURE__*/function () {
        function ColorTextController(doc, config) {
          _classCallCheck(this, ColorTextController);

          this.onModeSelectChange_ = this.onModeSelectChange_.bind(this);
          this.colorType_ = config.colorType;
          this.parser_ = config.parser;
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.colorMode = createValue(this.value.rawValue.mode);
          this.ccs_ = this.createComponentControllers_(doc);
          this.view = new ColorTextView(doc, {
            colorMode: this.colorMode,
            textViews: [this.ccs_[0].view, this.ccs_[1].view, this.ccs_[2].view]
          });
          this.view.modeSelectElement.addEventListener('change', this.onModeSelectChange_);
        }

        _createClass(ColorTextController, [{
          key: "createComponentControllers_",
          value: function createComponentControllers_(doc) {
            var _this35 = this;

            var cc = {
              colorMode: this.colorMode.rawValue,
              colorType: this.colorType_,
              parser: this.parser_,
              viewProps: this.viewProps
            };
            var ccs = [createComponentController(doc, cc, 0), createComponentController(doc, cc, 1), createComponentController(doc, cc, 2)];
            ccs.forEach(function (cs, index) {
              connectValues({
                primary: _this35.value,
                secondary: cs.value,
                forward: function forward(p) {
                  return p.rawValue.getComponents(_this35.colorMode.rawValue, _this35.colorType_)[index];
                },
                backward: function backward(p, s) {
                  var pickedMode = _this35.colorMode.rawValue;
                  var comps = p.rawValue.getComponents(pickedMode, _this35.colorType_);
                  comps[index] = s.rawValue;
                  return new Color(appendAlphaComponent(removeAlphaComponent(comps), comps[3]), pickedMode, _this35.colorType_);
                }
              });
            });
            return ccs;
          }
        }, {
          key: "onModeSelectChange_",
          value: function onModeSelectChange_(ev) {
            var selectElem = ev.currentTarget;
            this.colorMode.rawValue = selectElem.value;
            this.ccs_ = this.createComponentControllers_(this.view.element.ownerDocument);
            this.view.textViews = [this.ccs_[0].view, this.ccs_[1].view, this.ccs_[2].view];
          }
        }]);

        return ColorTextController;
      }();

      var className$8 = ClassName('hpl');

      var HPaletteView = /*#__PURE__*/function () {
        function HPaletteView(doc, config) {
          _classCallCheck(this, HPaletteView);

          this.onValueChange_ = this.onValueChange_.bind(this);
          this.value = config.value;
          this.value.emitter.on('change', this.onValueChange_);
          this.element = doc.createElement('div');
          this.element.classList.add(className$8());
          config.viewProps.bindTabIndex(this.element);
          var colorElem = doc.createElement('div');
          colorElem.classList.add(className$8('c'));
          this.element.appendChild(colorElem);
          var markerElem = doc.createElement('div');
          markerElem.classList.add(className$8('m'));
          this.element.appendChild(markerElem);
          this.markerElem_ = markerElem;
          this.update_();
        }

        _createClass(HPaletteView, [{
          key: "update_",
          value: function update_() {
            var c = this.value.rawValue;

            var _c$getComponents5 = c.getComponents('hsv'),
                _c$getComponents6 = _slicedToArray(_c$getComponents5, 1),
                h = _c$getComponents6[0];

            this.markerElem_.style.backgroundColor = colorToFunctionalRgbString(new Color([h, 100, 100], 'hsv'));
            var left = mapRange(h, 0, 360, 0, 100);
            this.markerElem_.style.left = "".concat(left, "%");
          }
        }, {
          key: "onValueChange_",
          value: function onValueChange_() {
            this.update_();
          }
        }]);

        return HPaletteView;
      }();

      var HPaletteController = /*#__PURE__*/function () {
        function HPaletteController(doc, config) {
          _classCallCheck(this, HPaletteController);

          this.onKeyDown_ = this.onKeyDown_.bind(this);
          this.onKeyUp_ = this.onKeyUp_.bind(this);
          this.onPointerDown_ = this.onPointerDown_.bind(this);
          this.onPointerMove_ = this.onPointerMove_.bind(this);
          this.onPointerUp_ = this.onPointerUp_.bind(this);
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.view = new HPaletteView(doc, {
            value: this.value,
            viewProps: this.viewProps
          });
          this.ptHandler_ = new PointerHandler(this.view.element);
          this.ptHandler_.emitter.on('down', this.onPointerDown_);
          this.ptHandler_.emitter.on('move', this.onPointerMove_);
          this.ptHandler_.emitter.on('up', this.onPointerUp_);
          this.view.element.addEventListener('keydown', this.onKeyDown_);
          this.view.element.addEventListener('keyup', this.onKeyUp_);
        }

        _createClass(HPaletteController, [{
          key: "handlePointerEvent_",
          value: function handlePointerEvent_(d, opts) {
            if (!d.point) {
              return;
            }

            var hue = mapRange(constrainRange(d.point.x, 0, d.bounds.width), 0, d.bounds.width, 0, 359);
            var c = this.value.rawValue;

            var _c$getComponents7 = c.getComponents('hsv'),
                _c$getComponents8 = _slicedToArray(_c$getComponents7, 4),
                s = _c$getComponents8[1],
                v = _c$getComponents8[2],
                a = _c$getComponents8[3];

            this.value.setRawValue(new Color([hue, s, v, a], 'hsv'), opts);
          }
        }, {
          key: "onPointerDown_",
          value: function onPointerDown_(ev) {
            this.handlePointerEvent_(ev.data, {
              forceEmit: false,
              last: false
            });
          }
        }, {
          key: "onPointerMove_",
          value: function onPointerMove_(ev) {
            this.handlePointerEvent_(ev.data, {
              forceEmit: false,
              last: false
            });
          }
        }, {
          key: "onPointerUp_",
          value: function onPointerUp_(ev) {
            this.handlePointerEvent_(ev.data, {
              forceEmit: true,
              last: true
            });
          }
        }, {
          key: "onKeyDown_",
          value: function onKeyDown_(ev) {
            var step = getStepForKey(getBaseStepForColor(false), getHorizontalStepKeys(ev));

            if (step === 0) {
              return;
            }

            var c = this.value.rawValue;

            var _c$getComponents9 = c.getComponents('hsv'),
                _c$getComponents10 = _slicedToArray(_c$getComponents9, 4),
                h = _c$getComponents10[0],
                s = _c$getComponents10[1],
                v = _c$getComponents10[2],
                a = _c$getComponents10[3];

            this.value.setRawValue(new Color([h + step, s, v, a], 'hsv'), {
              forceEmit: false,
              last: false
            });
          }
        }, {
          key: "onKeyUp_",
          value: function onKeyUp_(ev) {
            var step = getStepForKey(getBaseStepForColor(false), getHorizontalStepKeys(ev));

            if (step === 0) {
              return;
            }

            this.value.setRawValue(this.value.rawValue, {
              forceEmit: true,
              last: true
            });
          }
        }]);

        return HPaletteController;
      }();

      var className$7 = ClassName('svp');
      var CANVAS_RESOL = 64;

      var SvPaletteView = /*#__PURE__*/function () {
        function SvPaletteView(doc, config) {
          _classCallCheck(this, SvPaletteView);

          this.onValueChange_ = this.onValueChange_.bind(this);
          this.value = config.value;
          this.value.emitter.on('change', this.onValueChange_);
          this.element = doc.createElement('div');
          this.element.classList.add(className$7());
          config.viewProps.bindTabIndex(this.element);
          var canvasElem = doc.createElement('canvas');
          canvasElem.height = CANVAS_RESOL;
          canvasElem.width = CANVAS_RESOL;
          canvasElem.classList.add(className$7('c'));
          this.element.appendChild(canvasElem);
          this.canvasElement = canvasElem;
          var markerElem = doc.createElement('div');
          markerElem.classList.add(className$7('m'));
          this.element.appendChild(markerElem);
          this.markerElem_ = markerElem;
          this.update_();
        }

        _createClass(SvPaletteView, [{
          key: "update_",
          value: function update_() {
            var ctx = getCanvasContext(this.canvasElement);

            if (!ctx) {
              return;
            }

            var c = this.value.rawValue;
            var hsvComps = c.getComponents('hsv');
            var width = this.canvasElement.width;
            var height = this.canvasElement.height;
            var imgData = ctx.getImageData(0, 0, width, height);
            var data = imgData.data;

            for (var iy = 0; iy < height; iy++) {
              for (var ix = 0; ix < width; ix++) {
                var s = mapRange(ix, 0, width, 0, 100);
                var v = mapRange(iy, 0, height, 100, 0);
                var rgbComps = hsvToRgbInt(hsvComps[0], s, v);
                var i = (iy * width + ix) * 4;
                data[i] = rgbComps[0];
                data[i + 1] = rgbComps[1];
                data[i + 2] = rgbComps[2];
                data[i + 3] = 255;
              }
            }

            ctx.putImageData(imgData, 0, 0);
            var left = mapRange(hsvComps[1], 0, 100, 0, 100);
            this.markerElem_.style.left = "".concat(left, "%");
            var top = mapRange(hsvComps[2], 0, 100, 100, 0);
            this.markerElem_.style.top = "".concat(top, "%");
          }
        }, {
          key: "onValueChange_",
          value: function onValueChange_() {
            this.update_();
          }
        }]);

        return SvPaletteView;
      }();

      var SvPaletteController = /*#__PURE__*/function () {
        function SvPaletteController(doc, config) {
          _classCallCheck(this, SvPaletteController);

          this.onKeyDown_ = this.onKeyDown_.bind(this);
          this.onKeyUp_ = this.onKeyUp_.bind(this);
          this.onPointerDown_ = this.onPointerDown_.bind(this);
          this.onPointerMove_ = this.onPointerMove_.bind(this);
          this.onPointerUp_ = this.onPointerUp_.bind(this);
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.view = new SvPaletteView(doc, {
            value: this.value,
            viewProps: this.viewProps
          });
          this.ptHandler_ = new PointerHandler(this.view.element);
          this.ptHandler_.emitter.on('down', this.onPointerDown_);
          this.ptHandler_.emitter.on('move', this.onPointerMove_);
          this.ptHandler_.emitter.on('up', this.onPointerUp_);
          this.view.element.addEventListener('keydown', this.onKeyDown_);
          this.view.element.addEventListener('keyup', this.onKeyUp_);
        }

        _createClass(SvPaletteController, [{
          key: "handlePointerEvent_",
          value: function handlePointerEvent_(d, opts) {
            if (!d.point) {
              return;
            }

            var saturation = mapRange(d.point.x, 0, d.bounds.width, 0, 100);
            var value = mapRange(d.point.y, 0, d.bounds.height, 100, 0);

            var _this$value$rawValue$ = this.value.rawValue.getComponents('hsv'),
                _this$value$rawValue$2 = _slicedToArray(_this$value$rawValue$, 4),
                h = _this$value$rawValue$2[0],
                a = _this$value$rawValue$2[3];

            this.value.setRawValue(new Color([h, saturation, value, a], 'hsv'), opts);
          }
        }, {
          key: "onPointerDown_",
          value: function onPointerDown_(ev) {
            this.handlePointerEvent_(ev.data, {
              forceEmit: false,
              last: false
            });
          }
        }, {
          key: "onPointerMove_",
          value: function onPointerMove_(ev) {
            this.handlePointerEvent_(ev.data, {
              forceEmit: false,
              last: false
            });
          }
        }, {
          key: "onPointerUp_",
          value: function onPointerUp_(ev) {
            this.handlePointerEvent_(ev.data, {
              forceEmit: true,
              last: true
            });
          }
        }, {
          key: "onKeyDown_",
          value: function onKeyDown_(ev) {
            if (isArrowKey(ev.key)) {
              ev.preventDefault();
            }

            var _this$value$rawValue$3 = this.value.rawValue.getComponents('hsv'),
                _this$value$rawValue$4 = _slicedToArray(_this$value$rawValue$3, 4),
                h = _this$value$rawValue$4[0],
                s = _this$value$rawValue$4[1],
                v = _this$value$rawValue$4[2],
                a = _this$value$rawValue$4[3];

            var baseStep = getBaseStepForColor(false);
            var ds = getStepForKey(baseStep, getHorizontalStepKeys(ev));
            var dv = getStepForKey(baseStep, getVerticalStepKeys(ev));

            if (ds === 0 && dv === 0) {
              return;
            }

            this.value.setRawValue(new Color([h, s + ds, v + dv, a], 'hsv'), {
              forceEmit: false,
              last: false
            });
          }
        }, {
          key: "onKeyUp_",
          value: function onKeyUp_(ev) {
            var baseStep = getBaseStepForColor(false);
            var ds = getStepForKey(baseStep, getHorizontalStepKeys(ev));
            var dv = getStepForKey(baseStep, getVerticalStepKeys(ev));

            if (ds === 0 && dv === 0) {
              return;
            }

            this.value.setRawValue(this.value.rawValue, {
              forceEmit: true,
              last: true
            });
          }
        }]);

        return SvPaletteController;
      }();

      var ColorPickerController = /*#__PURE__*/function () {
        function ColorPickerController(doc, config) {
          _classCallCheck(this, ColorPickerController);

          this.value = config.value;
          this.viewProps = config.viewProps;
          this.hPaletteC_ = new HPaletteController(doc, {
            value: this.value,
            viewProps: this.viewProps
          });
          this.svPaletteC_ = new SvPaletteController(doc, {
            value: this.value,
            viewProps: this.viewProps
          });
          this.alphaIcs_ = config.supportsAlpha ? {
            palette: new APaletteController(doc, {
              value: this.value,
              viewProps: this.viewProps
            }),
            text: new NumberTextController(doc, {
              parser: parseNumber,
              baseStep: 0.1,
              props: ValueMap.fromObject({
                draggingScale: 0.01,
                formatter: createNumberFormatter(2)
              }),
              value: createValue(0, {
                constraint: new RangeConstraint({
                  min: 0,
                  max: 1
                })
              }),
              viewProps: this.viewProps
            })
          } : null;

          if (this.alphaIcs_) {
            connectValues({
              primary: this.value,
              secondary: this.alphaIcs_.text.value,
              forward: function forward(p) {
                return p.rawValue.getComponents()[3];
              },
              backward: function backward(p, s) {
                var comps = p.rawValue.getComponents();
                comps[3] = s.rawValue;
                return new Color(comps, p.rawValue.mode);
              }
            });
          }

          this.textC_ = new ColorTextController(doc, {
            colorType: config.colorType,
            parser: parseNumber,
            value: this.value,
            viewProps: this.viewProps
          });
          this.view = new ColorPickerView(doc, {
            alphaViews: this.alphaIcs_ ? {
              palette: this.alphaIcs_.palette.view,
              text: this.alphaIcs_.text.view
            } : null,
            hPaletteView: this.hPaletteC_.view,
            supportsAlpha: config.supportsAlpha,
            svPaletteView: this.svPaletteC_.view,
            textView: this.textC_.view
          });
        }

        _createClass(ColorPickerController, [{
          key: "textController",
          get: function get() {
            return this.textC_;
          }
        }]);

        return ColorPickerController;
      }();

      var className$6 = ClassName('colsw');

      var ColorSwatchView = /*#__PURE__*/function () {
        function ColorSwatchView(doc, config) {
          _classCallCheck(this, ColorSwatchView);

          this.onValueChange_ = this.onValueChange_.bind(this);
          config.value.emitter.on('change', this.onValueChange_);
          this.value = config.value;
          this.element = doc.createElement('div');
          this.element.classList.add(className$6());
          config.viewProps.bindClassModifiers(this.element);
          var swatchElem = doc.createElement('div');
          swatchElem.classList.add(className$6('sw'));
          this.element.appendChild(swatchElem);
          this.swatchElem_ = swatchElem;
          var buttonElem = doc.createElement('button');
          buttonElem.classList.add(className$6('b'));
          config.viewProps.bindDisabled(buttonElem);
          this.element.appendChild(buttonElem);
          this.buttonElement = buttonElem;
          this.update_();
        }

        _createClass(ColorSwatchView, [{
          key: "update_",
          value: function update_() {
            var value = this.value.rawValue;
            this.swatchElem_.style.backgroundColor = colorToHexRgbaString(value);
          }
        }, {
          key: "onValueChange_",
          value: function onValueChange_() {
            this.update_();
          }
        }]);

        return ColorSwatchView;
      }();

      var ColorSwatchController = /*#__PURE__*/_createClass(function ColorSwatchController(doc, config) {
        _classCallCheck(this, ColorSwatchController);

        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new ColorSwatchView(doc, {
          value: this.value,
          viewProps: this.viewProps
        });
      });

      var ColorController = /*#__PURE__*/function () {
        function ColorController(doc, config) {
          var _this36 = this;

          _classCallCheck(this, ColorController);

          this.onButtonBlur_ = this.onButtonBlur_.bind(this);
          this.onButtonClick_ = this.onButtonClick_.bind(this);
          this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this);
          this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this);
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.foldable_ = Foldable.create(config.expanded);
          this.swatchC_ = new ColorSwatchController(doc, {
            value: this.value,
            viewProps: this.viewProps
          });
          var buttonElem = this.swatchC_.view.buttonElement;
          buttonElem.addEventListener('blur', this.onButtonBlur_);
          buttonElem.addEventListener('click', this.onButtonClick_);
          this.textC_ = new TextController(doc, {
            parser: config.parser,
            props: ValueMap.fromObject({
              formatter: config.formatter
            }),
            value: this.value,
            viewProps: this.viewProps
          });
          this.view = new ColorView(doc, {
            foldable: this.foldable_,
            pickerLayout: config.pickerLayout
          });
          this.view.swatchElement.appendChild(this.swatchC_.view.element);
          this.view.textElement.appendChild(this.textC_.view.element);
          this.popC_ = config.pickerLayout === 'popup' ? new PopupController(doc, {
            viewProps: this.viewProps
          }) : null;
          var pickerC = new ColorPickerController(doc, {
            colorType: config.colorType,
            supportsAlpha: config.supportsAlpha,
            value: this.value,
            viewProps: this.viewProps
          });
          pickerC.view.allFocusableElements.forEach(function (elem) {
            elem.addEventListener('blur', _this36.onPopupChildBlur_);
            elem.addEventListener('keydown', _this36.onPopupChildKeydown_);
          });
          this.pickerC_ = pickerC;

          if (this.popC_) {
            this.view.element.appendChild(this.popC_.view.element);
            this.popC_.view.element.appendChild(pickerC.view.element);
            connectValues({
              primary: this.foldable_.value('expanded'),
              secondary: this.popC_.shows,
              forward: function forward(p) {
                return p.rawValue;
              },
              backward: function backward(_, s) {
                return s.rawValue;
              }
            });
          } else if (this.view.pickerElement) {
            this.view.pickerElement.appendChild(this.pickerC_.view.element);
            bindFoldable(this.foldable_, this.view.pickerElement);
          }
        }

        _createClass(ColorController, [{
          key: "textController",
          get: function get() {
            return this.textC_;
          }
        }, {
          key: "onButtonBlur_",
          value: function onButtonBlur_(e) {
            if (!this.popC_) {
              return;
            }

            var elem = this.view.element;
            var nextTarget = forceCast(e.relatedTarget);

            if (!nextTarget || !elem.contains(nextTarget)) {
              this.popC_.shows.rawValue = false;
            }
          }
        }, {
          key: "onButtonClick_",
          value: function onButtonClick_() {
            this.foldable_.set('expanded', !this.foldable_.get('expanded'));

            if (this.foldable_.get('expanded')) {
              this.pickerC_.view.allFocusableElements[0].focus();
            }
          }
        }, {
          key: "onPopupChildBlur_",
          value: function onPopupChildBlur_(ev) {
            if (!this.popC_) {
              return;
            }

            var elem = this.popC_.view.element;
            var nextTarget = findNextTarget(ev);

            if (nextTarget && elem.contains(nextTarget)) {
              return;
            }

            if (nextTarget && nextTarget === this.swatchC_.view.buttonElement && !supportsTouch(elem.ownerDocument)) {
              return;
            }

            this.popC_.shows.rawValue = false;
          }
        }, {
          key: "onPopupChildKeydown_",
          value: function onPopupChildKeydown_(ev) {
            if (this.popC_) {
              if (ev.key === 'Escape') {
                this.popC_.shows.rawValue = false;
              }
            } else if (this.view.pickerElement) {
              if (ev.key === 'Escape') {
                this.swatchC_.view.buttonElement.focus();
              }
            }
          }
        }]);

        return ColorController;
      }();

      function colorFromObject(value, opt_type) {
        if (Color.isColorObject(value)) {
          return Color.fromObject(value, opt_type);
        }

        return Color.black(opt_type);
      }

      function colorToRgbNumber(value) {
        return removeAlphaComponent(value.getComponents('rgb')).reduce(function (result, comp) {
          return result << 8 | Math.floor(comp) & 0xff;
        }, 0);
      }

      function colorToRgbaNumber(value) {
        return value.getComponents('rgb').reduce(function (result, comp, index) {
          var hex = Math.floor(index === 3 ? comp * 255 : comp) & 0xff;
          return result << 8 | hex;
        }, 0) >>> 0;
      }

      function numberToRgbColor(num) {
        return new Color([num >> 16 & 0xff, num >> 8 & 0xff, num & 0xff], 'rgb');
      }

      function numberToRgbaColor(num) {
        return new Color([num >> 24 & 0xff, num >> 16 & 0xff, num >> 8 & 0xff, mapRange(num & 0xff, 0, 255, 0, 1)], 'rgb');
      }

      function colorFromRgbNumber(value) {
        if (typeof value !== 'number') {
          return Color.black();
        }

        return numberToRgbColor(value);
      }

      function colorFromRgbaNumber(value) {
        if (typeof value !== 'number') {
          return Color.black();
        }

        return numberToRgbaColor(value);
      }

      function createColorStringWriter(format) {
        var stringify = findColorStringifier(format);
        return stringify ? function (target, value) {
          writePrimitive(target, stringify(value));
        } : null;
      }

      function createColorNumberWriter(supportsAlpha) {
        var colorToNumber = supportsAlpha ? colorToRgbaNumber : colorToRgbNumber;
        return function (target, value) {
          writePrimitive(target, colorToNumber(value));
        };
      }

      function writeRgbaColorObject(target, value, opt_type) {
        var obj = value.toRgbaObject(opt_type);
        target.writeProperty('r', obj.r);
        target.writeProperty('g', obj.g);
        target.writeProperty('b', obj.b);
        target.writeProperty('a', obj.a);
      }

      function writeRgbColorObject(target, value, opt_type) {
        var obj = value.toRgbaObject(opt_type);
        target.writeProperty('r', obj.r);
        target.writeProperty('g', obj.g);
        target.writeProperty('b', obj.b);
      }

      function createColorObjectWriter(supportsAlpha, opt_type) {
        return function (target, inValue) {
          if (supportsAlpha) {
            writeRgbaColorObject(target, inValue, opt_type);
          } else {
            writeRgbColorObject(target, inValue, opt_type);
          }
        };
      }

      function shouldSupportAlpha$1(inputParams) {
        var _a;

        if ((inputParams === null || inputParams === void 0 ? void 0 : inputParams.alpha) || ((_a = inputParams === null || inputParams === void 0 ? void 0 : inputParams.color) === null || _a === void 0 ? void 0 : _a.alpha)) {
          return true;
        }

        return false;
      }

      function createFormatter$1(supportsAlpha) {
        return supportsAlpha ? function (v) {
          return colorToHexRgbaString(v, '0x');
        } : function (v) {
          return colorToHexRgbString(v, '0x');
        };
      }

      function isForColor(params) {
        if ('color' in params) {
          return true;
        }

        if ('view' in params && params.view === 'color') {
          return true;
        }

        return false;
      }

      var NumberColorInputPlugin = {
        id: 'input-color-number',
        type: 'input',
        accept: function accept(value, params) {
          if (typeof value !== 'number') {
            return null;
          }

          if (!isForColor(params)) {
            return null;
          }

          var result = parseColorInputParams(params);
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          reader: function reader(args) {
            return shouldSupportAlpha$1(args.params) ? colorFromRgbaNumber : colorFromRgbNumber;
          },
          equals: Color.equals,
          writer: function writer(args) {
            return createColorNumberWriter(shouldSupportAlpha$1(args.params));
          }
        },
        controller: function controller(args) {
          var supportsAlpha = shouldSupportAlpha$1(args.params);
          var expanded = 'expanded' in args.params ? args.params.expanded : undefined;
          var picker = 'picker' in args.params ? args.params.picker : undefined;
          return new ColorController(args.document, {
            colorType: 'int',
            expanded: expanded !== null && expanded !== void 0 ? expanded : false,
            formatter: createFormatter$1(supportsAlpha),
            parser: createColorStringParser('int'),
            pickerLayout: picker !== null && picker !== void 0 ? picker : 'popup',
            supportsAlpha: supportsAlpha,
            value: args.value,
            viewProps: args.viewProps
          });
        }
      };

      function shouldSupportAlpha(initialValue) {
        return Color.isRgbaColorObject(initialValue);
      }

      function createColorObjectReader(opt_type) {
        return function (value) {
          return colorFromObject(value, opt_type);
        };
      }

      function createColorObjectFormatter(supportsAlpha, type) {
        return function (value) {
          if (supportsAlpha) {
            return colorToObjectRgbaString(value, type);
          }

          return colorToObjectRgbString(value, type);
        };
      }

      var ObjectColorInputPlugin = {
        id: 'input-color-object',
        type: 'input',
        accept: function accept(value, params) {
          if (!Color.isColorObject(value)) {
            return null;
          }

          var result = parseColorInputParams(params);
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          reader: function reader(args) {
            return createColorObjectReader(extractColorType(args.params));
          },
          equals: Color.equals,
          writer: function writer(args) {
            return createColorObjectWriter(shouldSupportAlpha(args.initialValue), extractColorType(args.params));
          }
        },
        controller: function controller(args) {
          var _a;

          var supportsAlpha = Color.isRgbaColorObject(args.initialValue);
          var expanded = 'expanded' in args.params ? args.params.expanded : undefined;
          var picker = 'picker' in args.params ? args.params.picker : undefined;
          var type = (_a = extractColorType(args.params)) !== null && _a !== void 0 ? _a : 'int';
          return new ColorController(args.document, {
            colorType: type,
            expanded: expanded !== null && expanded !== void 0 ? expanded : false,
            formatter: createColorObjectFormatter(supportsAlpha, type),
            parser: createColorStringParser(type),
            pickerLayout: picker !== null && picker !== void 0 ? picker : 'popup',
            supportsAlpha: supportsAlpha,
            value: args.value,
            viewProps: args.viewProps
          });
        }
      };
      var StringColorInputPlugin = {
        id: 'input-color-string',
        type: 'input',
        accept: function accept(value, params) {
          if (typeof value !== 'string') {
            return null;
          }

          if ('view' in params && params.view === 'text') {
            return null;
          }

          var format = detectStringColorFormat(value, extractColorType(params));

          if (!format) {
            return null;
          }

          var stringifier = findColorStringifier(format);

          if (!stringifier) {
            return null;
          }

          var result = parseColorInputParams(params);
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          reader: function reader(args) {
            var _a;

            return createColorStringBindingReader((_a = extractColorType(args.params)) !== null && _a !== void 0 ? _a : 'int');
          },
          equals: Color.equals,
          writer: function writer(args) {
            var format = detectStringColorFormat(args.initialValue, extractColorType(args.params));

            if (!format) {
              throw TpError.shouldNeverHappen();
            }

            var writer = createColorStringWriter(format);

            if (!writer) {
              throw TpError.notBindable();
            }

            return writer;
          }
        },
        controller: function controller(args) {
          var format = detectStringColorFormat(args.initialValue, extractColorType(args.params));

          if (!format) {
            throw TpError.shouldNeverHappen();
          }

          var stringifier = findColorStringifier(format);

          if (!stringifier) {
            throw TpError.shouldNeverHappen();
          }

          var expanded = 'expanded' in args.params ? args.params.expanded : undefined;
          var picker = 'picker' in args.params ? args.params.picker : undefined;
          return new ColorController(args.document, {
            colorType: format.type,
            expanded: expanded !== null && expanded !== void 0 ? expanded : false,
            formatter: stringifier,
            parser: createColorStringParser(format.type),
            pickerLayout: picker !== null && picker !== void 0 ? picker : 'popup',
            supportsAlpha: format.alpha,
            value: args.value,
            viewProps: args.viewProps
          });
        }
      };

      var PointNdConstraint = /*#__PURE__*/function () {
        function PointNdConstraint(config) {
          _classCallCheck(this, PointNdConstraint);

          this.components = config.components;
          this.asm_ = config.assembly;
        }

        _createClass(PointNdConstraint, [{
          key: "constrain",
          value: function constrain(value) {
            var _this37 = this;

            var comps = this.asm_.toComponents(value).map(function (comp, index) {
              var _a, _b;

              return (_b = (_a = _this37.components[index]) === null || _a === void 0 ? void 0 : _a.constrain(comp)) !== null && _b !== void 0 ? _b : comp;
            });
            return this.asm_.fromComponents(comps);
          }
        }]);

        return PointNdConstraint;
      }();

      var className$5 = ClassName('pndtxt');

      var PointNdTextView = /*#__PURE__*/_createClass(function PointNdTextView(doc, config) {
        var _this38 = this;

        _classCallCheck(this, PointNdTextView);

        this.textViews = config.textViews;
        this.element = doc.createElement('div');
        this.element.classList.add(className$5());
        this.textViews.forEach(function (v) {
          var axisElem = doc.createElement('div');
          axisElem.classList.add(className$5('a'));
          axisElem.appendChild(v.element);

          _this38.element.appendChild(axisElem);
        });
      });

      function createAxisController(doc, config, index) {
        return new NumberTextController(doc, {
          arrayPosition: index === 0 ? 'fst' : index === config.axes.length - 1 ? 'lst' : 'mid',
          baseStep: config.axes[index].baseStep,
          parser: config.parser,
          props: config.axes[index].textProps,
          value: createValue(0, {
            constraint: config.axes[index].constraint
          }),
          viewProps: config.viewProps
        });
      }

      var PointNdTextController = /*#__PURE__*/_createClass(function PointNdTextController(doc, config) {
        var _this39 = this;

        _classCallCheck(this, PointNdTextController);

        this.value = config.value;
        this.viewProps = config.viewProps;
        this.acs_ = config.axes.map(function (_, index) {
          return createAxisController(doc, config, index);
        });
        this.acs_.forEach(function (c, index) {
          connectValues({
            primary: _this39.value,
            secondary: c.value,
            forward: function forward(p) {
              return config.assembly.toComponents(p.rawValue)[index];
            },
            backward: function backward(p, s) {
              var comps = config.assembly.toComponents(p.rawValue);
              comps[index] = s.rawValue;
              return config.assembly.fromComponents(comps);
            }
          });
        });
        this.view = new PointNdTextView(doc, {
          textViews: this.acs_.map(function (ac) {
            return ac.view;
          })
        });
      });

      function createStepConstraint(params, initialValue) {
        if ('step' in params && !isEmpty(params.step)) {
          return new StepConstraint(params.step, initialValue);
        }

        return null;
      }

      function createRangeConstraint(params) {
        if ('max' in params && !isEmpty(params.max) || 'min' in params && !isEmpty(params.min)) {
          return new RangeConstraint({
            max: params.max,
            min: params.min
          });
        }

        return null;
      }

      function createConstraint$4(params, initialValue) {
        var constraints = [];
        var sc = createStepConstraint(params, initialValue);

        if (sc) {
          constraints.push(sc);
        }

        var rc = createRangeConstraint(params);

        if (rc) {
          constraints.push(rc);
        }

        var lc = createListConstraint(params.options);

        if (lc) {
          constraints.push(lc);
        }

        return new CompositeConstraint(constraints);
      }

      function findRange(constraint) {
        var c = constraint ? findConstraint(constraint, RangeConstraint) : null;

        if (!c) {
          return [undefined, undefined];
        }

        return [c.minValue, c.maxValue];
      }

      function estimateSuitableRange(constraint) {
        var _findRange = findRange(constraint),
            _findRange2 = _slicedToArray(_findRange, 2),
            min = _findRange2[0],
            max = _findRange2[1];

        return [min !== null && min !== void 0 ? min : 0, max !== null && max !== void 0 ? max : 100];
      }

      var NumberInputPlugin = {
        id: 'input-number',
        type: 'input',
        accept: function accept(value, params) {
          if (typeof value !== 'number') {
            return null;
          }

          var p = ParamsParsers;
          var result = parseParams(params, {
            format: p.optional["function"],
            max: p.optional.number,
            min: p.optional.number,
            options: p.optional.custom(parseListOptions),
            step: p.optional.number
          });
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          reader: function reader(_args) {
            return numberFromUnknown;
          },
          constraint: function constraint(args) {
            return createConstraint$4(args.params, args.initialValue);
          },
          writer: function writer(_args) {
            return writePrimitive;
          }
        },
        controller: function controller(args) {
          var _a, _b;

          var value = args.value;
          var c = args.constraint;

          if (c && findConstraint(c, ListConstraint)) {
            return new ListController(args.document, {
              props: ValueMap.fromObject({
                options: (_a = findListItems(c)) !== null && _a !== void 0 ? _a : []
              }),
              value: value,
              viewProps: args.viewProps
            });
          }

          var formatter = (_b = 'format' in args.params ? args.params.format : undefined) !== null && _b !== void 0 ? _b : createNumberFormatter(getSuitableDecimalDigits(c, value.rawValue));

          if (c && findConstraint(c, RangeConstraint)) {
            var _estimateSuitableRang = estimateSuitableRange(c),
                _estimateSuitableRang2 = _slicedToArray(_estimateSuitableRang, 2),
                min = _estimateSuitableRang2[0],
                max = _estimateSuitableRang2[1];

            return new SliderTextController(args.document, {
              baseStep: getBaseStep(c),
              parser: parseNumber,
              sliderProps: ValueMap.fromObject({
                maxValue: max,
                minValue: min
              }),
              textProps: ValueMap.fromObject({
                draggingScale: getSuitableDraggingScale(c, value.rawValue),
                formatter: formatter
              }),
              value: value,
              viewProps: args.viewProps
            });
          }

          return new NumberTextController(args.document, {
            baseStep: getBaseStep(c),
            parser: parseNumber,
            props: ValueMap.fromObject({
              draggingScale: getSuitableDraggingScale(c, value.rawValue),
              formatter: formatter
            }),
            value: value,
            viewProps: args.viewProps
          });
        }
      };

      var Point2d = /*#__PURE__*/function () {
        function Point2d() {
          var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          _classCallCheck(this, Point2d);

          this.x = x;
          this.y = y;
        }

        _createClass(Point2d, [{
          key: "getComponents",
          value: function getComponents() {
            return [this.x, this.y];
          }
        }, {
          key: "toObject",
          value: function toObject() {
            return {
              x: this.x,
              y: this.y
            };
          }
        }], [{
          key: "isObject",
          value: function isObject(obj) {
            if (isEmpty(obj)) {
              return false;
            }

            var x = obj.x;
            var y = obj.y;

            if (typeof x !== 'number' || typeof y !== 'number') {
              return false;
            }

            return true;
          }
        }, {
          key: "equals",
          value: function equals(v1, v2) {
            return v1.x === v2.x && v1.y === v2.y;
          }
        }]);

        return Point2d;
      }();

      var Point2dAssembly = {
        toComponents: function toComponents(p) {
          return p.getComponents();
        },
        fromComponents: function fromComponents(comps) {
          return _construct(Point2d, _toConsumableArray(comps));
        }
      };
      var className$4 = ClassName('p2d');

      var Point2dView = /*#__PURE__*/_createClass(function Point2dView(doc, config) {
        _classCallCheck(this, Point2dView);

        this.element = doc.createElement('div');
        this.element.classList.add(className$4());
        config.viewProps.bindClassModifiers(this.element);
        bindValue(config.expanded, valueToClassName(this.element, className$4(undefined, 'expanded')));
        var headElem = doc.createElement('div');
        headElem.classList.add(className$4('h'));
        this.element.appendChild(headElem);
        var buttonElem = doc.createElement('button');
        buttonElem.classList.add(className$4('b'));
        buttonElem.appendChild(createSvgIconElement(doc, 'p2dpad'));
        config.viewProps.bindDisabled(buttonElem);
        headElem.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        var textElem = doc.createElement('div');
        textElem.classList.add(className$4('t'));
        headElem.appendChild(textElem);
        this.textElement = textElem;

        if (config.pickerLayout === 'inline') {
          var pickerElem = doc.createElement('div');
          pickerElem.classList.add(className$4('p'));
          this.element.appendChild(pickerElem);
          this.pickerElement = pickerElem;
        } else {
          this.pickerElement = null;
        }
      });

      var className$3 = ClassName('p2dp');

      var Point2dPickerView = /*#__PURE__*/function () {
        function Point2dPickerView(doc, config) {
          _classCallCheck(this, Point2dPickerView);

          this.onFoldableChange_ = this.onFoldableChange_.bind(this);
          this.onValueChange_ = this.onValueChange_.bind(this);
          this.invertsY_ = config.invertsY;
          this.maxValue_ = config.maxValue;
          this.element = doc.createElement('div');
          this.element.classList.add(className$3());

          if (config.layout === 'popup') {
            this.element.classList.add(className$3(undefined, 'p'));
          }

          var padElem = doc.createElement('div');
          padElem.classList.add(className$3('p'));
          config.viewProps.bindTabIndex(padElem);
          this.element.appendChild(padElem);
          this.padElement = padElem;
          var svgElem = doc.createElementNS(SVG_NS, 'svg');
          svgElem.classList.add(className$3('g'));
          this.padElement.appendChild(svgElem);
          this.svgElem_ = svgElem;
          var xAxisElem = doc.createElementNS(SVG_NS, 'line');
          xAxisElem.classList.add(className$3('ax'));
          xAxisElem.setAttributeNS(null, 'x1', '0');
          xAxisElem.setAttributeNS(null, 'y1', '50%');
          xAxisElem.setAttributeNS(null, 'x2', '100%');
          xAxisElem.setAttributeNS(null, 'y2', '50%');
          this.svgElem_.appendChild(xAxisElem);
          var yAxisElem = doc.createElementNS(SVG_NS, 'line');
          yAxisElem.classList.add(className$3('ax'));
          yAxisElem.setAttributeNS(null, 'x1', '50%');
          yAxisElem.setAttributeNS(null, 'y1', '0');
          yAxisElem.setAttributeNS(null, 'x2', '50%');
          yAxisElem.setAttributeNS(null, 'y2', '100%');
          this.svgElem_.appendChild(yAxisElem);
          var lineElem = doc.createElementNS(SVG_NS, 'line');
          lineElem.classList.add(className$3('l'));
          lineElem.setAttributeNS(null, 'x1', '50%');
          lineElem.setAttributeNS(null, 'y1', '50%');
          this.svgElem_.appendChild(lineElem);
          this.lineElem_ = lineElem;
          var markerElem = doc.createElement('div');
          markerElem.classList.add(className$3('m'));
          this.padElement.appendChild(markerElem);
          this.markerElem_ = markerElem;
          config.value.emitter.on('change', this.onValueChange_);
          this.value = config.value;
          this.update_();
        }

        _createClass(Point2dPickerView, [{
          key: "allFocusableElements",
          get: function get() {
            return [this.padElement];
          }
        }, {
          key: "update_",
          value: function update_() {
            var _this$value$rawValue$5 = this.value.rawValue.getComponents(),
                _this$value$rawValue$6 = _slicedToArray(_this$value$rawValue$5, 2),
                x = _this$value$rawValue$6[0],
                y = _this$value$rawValue$6[1];

            var max = this.maxValue_;
            var px = mapRange(x, -max, +max, 0, 100);
            var py = mapRange(y, -max, +max, 0, 100);
            var ipy = this.invertsY_ ? 100 - py : py;
            this.lineElem_.setAttributeNS(null, 'x2', "".concat(px, "%"));
            this.lineElem_.setAttributeNS(null, 'y2', "".concat(ipy, "%"));
            this.markerElem_.style.left = "".concat(px, "%");
            this.markerElem_.style.top = "".concat(ipy, "%");
          }
        }, {
          key: "onValueChange_",
          value: function onValueChange_() {
            this.update_();
          }
        }, {
          key: "onFoldableChange_",
          value: function onFoldableChange_() {
            this.update_();
          }
        }]);

        return Point2dPickerView;
      }();

      function computeOffset(ev, baseSteps, invertsY) {
        return [getStepForKey(baseSteps[0], getHorizontalStepKeys(ev)), getStepForKey(baseSteps[1], getVerticalStepKeys(ev)) * (invertsY ? 1 : -1)];
      }

      var Point2dPickerController = /*#__PURE__*/function () {
        function Point2dPickerController(doc, config) {
          _classCallCheck(this, Point2dPickerController);

          this.onPadKeyDown_ = this.onPadKeyDown_.bind(this);
          this.onPadKeyUp_ = this.onPadKeyUp_.bind(this);
          this.onPointerDown_ = this.onPointerDown_.bind(this);
          this.onPointerMove_ = this.onPointerMove_.bind(this);
          this.onPointerUp_ = this.onPointerUp_.bind(this);
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.baseSteps_ = config.baseSteps;
          this.maxValue_ = config.maxValue;
          this.invertsY_ = config.invertsY;
          this.view = new Point2dPickerView(doc, {
            invertsY: this.invertsY_,
            layout: config.layout,
            maxValue: this.maxValue_,
            value: this.value,
            viewProps: this.viewProps
          });
          this.ptHandler_ = new PointerHandler(this.view.padElement);
          this.ptHandler_.emitter.on('down', this.onPointerDown_);
          this.ptHandler_.emitter.on('move', this.onPointerMove_);
          this.ptHandler_.emitter.on('up', this.onPointerUp_);
          this.view.padElement.addEventListener('keydown', this.onPadKeyDown_);
          this.view.padElement.addEventListener('keyup', this.onPadKeyUp_);
        }

        _createClass(Point2dPickerController, [{
          key: "handlePointerEvent_",
          value: function handlePointerEvent_(d, opts) {
            if (!d.point) {
              return;
            }

            var max = this.maxValue_;
            var px = mapRange(d.point.x, 0, d.bounds.width, -max, +max);
            var py = mapRange(this.invertsY_ ? d.bounds.height - d.point.y : d.point.y, 0, d.bounds.height, -max, +max);
            this.value.setRawValue(new Point2d(px, py), opts);
          }
        }, {
          key: "onPointerDown_",
          value: function onPointerDown_(ev) {
            this.handlePointerEvent_(ev.data, {
              forceEmit: false,
              last: false
            });
          }
        }, {
          key: "onPointerMove_",
          value: function onPointerMove_(ev) {
            this.handlePointerEvent_(ev.data, {
              forceEmit: false,
              last: false
            });
          }
        }, {
          key: "onPointerUp_",
          value: function onPointerUp_(ev) {
            this.handlePointerEvent_(ev.data, {
              forceEmit: true,
              last: true
            });
          }
        }, {
          key: "onPadKeyDown_",
          value: function onPadKeyDown_(ev) {
            if (isArrowKey(ev.key)) {
              ev.preventDefault();
            }

            var _computeOffset = computeOffset(ev, this.baseSteps_, this.invertsY_),
                _computeOffset2 = _slicedToArray(_computeOffset, 2),
                dx = _computeOffset2[0],
                dy = _computeOffset2[1];

            if (dx === 0 && dy === 0) {
              return;
            }

            this.value.setRawValue(new Point2d(this.value.rawValue.x + dx, this.value.rawValue.y + dy), {
              forceEmit: false,
              last: false
            });
          }
        }, {
          key: "onPadKeyUp_",
          value: function onPadKeyUp_(ev) {
            var _computeOffset3 = computeOffset(ev, this.baseSteps_, this.invertsY_),
                _computeOffset4 = _slicedToArray(_computeOffset3, 2),
                dx = _computeOffset4[0],
                dy = _computeOffset4[1];

            if (dx === 0 && dy === 0) {
              return;
            }

            this.value.setRawValue(this.value.rawValue, {
              forceEmit: true,
              last: true
            });
          }
        }]);

        return Point2dPickerController;
      }();

      var Point2dController = /*#__PURE__*/function () {
        function Point2dController(doc, config) {
          var _this40 = this;

          _classCallCheck(this, Point2dController);

          var _a, _b;

          this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this);
          this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this);
          this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this);
          this.onPadButtonClick_ = this.onPadButtonClick_.bind(this);
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.foldable_ = Foldable.create(config.expanded);
          this.popC_ = config.pickerLayout === 'popup' ? new PopupController(doc, {
            viewProps: this.viewProps
          }) : null;
          var padC = new Point2dPickerController(doc, {
            baseSteps: [config.axes[0].baseStep, config.axes[1].baseStep],
            invertsY: config.invertsY,
            layout: config.pickerLayout,
            maxValue: config.maxValue,
            value: this.value,
            viewProps: this.viewProps
          });
          padC.view.allFocusableElements.forEach(function (elem) {
            elem.addEventListener('blur', _this40.onPopupChildBlur_);
            elem.addEventListener('keydown', _this40.onPopupChildKeydown_);
          });
          this.pickerC_ = padC;
          this.textC_ = new PointNdTextController(doc, {
            assembly: Point2dAssembly,
            axes: config.axes,
            parser: config.parser,
            value: this.value,
            viewProps: this.viewProps
          });
          this.view = new Point2dView(doc, {
            expanded: this.foldable_.value('expanded'),
            pickerLayout: config.pickerLayout,
            viewProps: this.viewProps
          });
          this.view.textElement.appendChild(this.textC_.view.element);
          (_a = this.view.buttonElement) === null || _a === void 0 ? void 0 : _a.addEventListener('blur', this.onPadButtonBlur_);
          (_b = this.view.buttonElement) === null || _b === void 0 ? void 0 : _b.addEventListener('click', this.onPadButtonClick_);

          if (this.popC_) {
            this.view.element.appendChild(this.popC_.view.element);
            this.popC_.view.element.appendChild(this.pickerC_.view.element);
            connectValues({
              primary: this.foldable_.value('expanded'),
              secondary: this.popC_.shows,
              forward: function forward(p) {
                return p.rawValue;
              },
              backward: function backward(_, s) {
                return s.rawValue;
              }
            });
          } else if (this.view.pickerElement) {
            this.view.pickerElement.appendChild(this.pickerC_.view.element);
            bindFoldable(this.foldable_, this.view.pickerElement);
          }
        }

        _createClass(Point2dController, [{
          key: "onPadButtonBlur_",
          value: function onPadButtonBlur_(e) {
            if (!this.popC_) {
              return;
            }

            var elem = this.view.element;
            var nextTarget = forceCast(e.relatedTarget);

            if (!nextTarget || !elem.contains(nextTarget)) {
              this.popC_.shows.rawValue = false;
            }
          }
        }, {
          key: "onPadButtonClick_",
          value: function onPadButtonClick_() {
            this.foldable_.set('expanded', !this.foldable_.get('expanded'));

            if (this.foldable_.get('expanded')) {
              this.pickerC_.view.allFocusableElements[0].focus();
            }
          }
        }, {
          key: "onPopupChildBlur_",
          value: function onPopupChildBlur_(ev) {
            if (!this.popC_) {
              return;
            }

            var elem = this.popC_.view.element;
            var nextTarget = findNextTarget(ev);

            if (nextTarget && elem.contains(nextTarget)) {
              return;
            }

            if (nextTarget && nextTarget === this.view.buttonElement && !supportsTouch(elem.ownerDocument)) {
              return;
            }

            this.popC_.shows.rawValue = false;
          }
        }, {
          key: "onPopupChildKeydown_",
          value: function onPopupChildKeydown_(ev) {
            if (this.popC_) {
              if (ev.key === 'Escape') {
                this.popC_.shows.rawValue = false;
              }
            } else if (this.view.pickerElement) {
              if (ev.key === 'Escape') {
                this.view.buttonElement.focus();
              }
            }
          }
        }]);

        return Point2dController;
      }();

      function point2dFromUnknown(value) {
        return Point2d.isObject(value) ? new Point2d(value.x, value.y) : new Point2d();
      }

      function writePoint2d(target, value) {
        target.writeProperty('x', value.x);
        target.writeProperty('y', value.y);
      }

      function createDimensionConstraint(params, initialValue) {
        if (!params) {
          return undefined;
        }

        var constraints = [];
        var cs = createStepConstraint(params, initialValue);

        if (cs) {
          constraints.push(cs);
        }

        var rs = createRangeConstraint(params);

        if (rs) {
          constraints.push(rs);
        }

        return new CompositeConstraint(constraints);
      }

      function createConstraint$3(params, initialValue) {
        return new PointNdConstraint({
          assembly: Point2dAssembly,
          components: [createDimensionConstraint('x' in params ? params.x : undefined, initialValue.x), createDimensionConstraint('y' in params ? params.y : undefined, initialValue.y)]
        });
      }

      function getSuitableMaxDimensionValue(constraint, rawValue) {
        var _a, _b;

        var rc = constraint && findConstraint(constraint, RangeConstraint);

        if (rc) {
          return Math.max(Math.abs((_a = rc.minValue) !== null && _a !== void 0 ? _a : 0), Math.abs((_b = rc.maxValue) !== null && _b !== void 0 ? _b : 0));
        }

        var step = getBaseStep(constraint);
        return Math.max(Math.abs(step) * 10, Math.abs(rawValue) * 10);
      }

      function getSuitableMaxValue(initialValue, constraint) {
        var xc = constraint instanceof PointNdConstraint ? constraint.components[0] : undefined;
        var yc = constraint instanceof PointNdConstraint ? constraint.components[1] : undefined;
        var xr = getSuitableMaxDimensionValue(xc, initialValue.x);
        var yr = getSuitableMaxDimensionValue(yc, initialValue.y);
        return Math.max(xr, yr);
      }

      function createAxis$2(initialValue, constraint) {
        return {
          baseStep: getBaseStep(constraint),
          constraint: constraint,
          textProps: ValueMap.fromObject({
            draggingScale: getSuitableDraggingScale(constraint, initialValue),
            formatter: createNumberFormatter(getSuitableDecimalDigits(constraint, initialValue))
          })
        };
      }

      function shouldInvertY(params) {
        if (!('y' in params)) {
          return false;
        }

        var yParams = params.y;

        if (!yParams) {
          return false;
        }

        return 'inverted' in yParams ? !!yParams.inverted : false;
      }

      var Point2dInputPlugin = {
        id: 'input-point2d',
        type: 'input',
        accept: function accept(value, params) {
          if (!Point2d.isObject(value)) {
            return null;
          }

          var p = ParamsParsers;
          var result = parseParams(params, {
            expanded: p.optional["boolean"],
            picker: p.optional.custom(parsePickerLayout),
            x: p.optional.custom(parsePointDimensionParams),
            y: p.optional.object({
              inverted: p.optional["boolean"],
              max: p.optional.number,
              min: p.optional.number,
              step: p.optional.number
            })
          });
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          reader: function reader(_args) {
            return point2dFromUnknown;
          },
          constraint: function constraint(args) {
            return createConstraint$3(args.params, args.initialValue);
          },
          equals: Point2d.equals,
          writer: function writer(_args) {
            return writePoint2d;
          }
        },
        controller: function controller(args) {
          var doc = args.document;
          var value = args.value;
          var c = args.constraint;

          if (!(c instanceof PointNdConstraint)) {
            throw TpError.shouldNeverHappen();
          }

          var expanded = 'expanded' in args.params ? args.params.expanded : undefined;
          var picker = 'picker' in args.params ? args.params.picker : undefined;
          return new Point2dController(doc, {
            axes: [createAxis$2(value.rawValue.x, c.components[0]), createAxis$2(value.rawValue.y, c.components[1])],
            expanded: expanded !== null && expanded !== void 0 ? expanded : false,
            invertsY: shouldInvertY(args.params),
            maxValue: getSuitableMaxValue(value.rawValue, c),
            parser: parseNumber,
            pickerLayout: picker !== null && picker !== void 0 ? picker : 'popup',
            value: value,
            viewProps: args.viewProps
          });
        }
      };

      var Point3d = /*#__PURE__*/function () {
        function Point3d() {
          var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          _classCallCheck(this, Point3d);

          this.x = x;
          this.y = y;
          this.z = z;
        }

        _createClass(Point3d, [{
          key: "getComponents",
          value: function getComponents() {
            return [this.x, this.y, this.z];
          }
        }, {
          key: "toObject",
          value: function toObject() {
            return {
              x: this.x,
              y: this.y,
              z: this.z
            };
          }
        }], [{
          key: "isObject",
          value: function isObject(obj) {
            if (isEmpty(obj)) {
              return false;
            }

            var x = obj.x;
            var y = obj.y;
            var z = obj.z;

            if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
              return false;
            }

            return true;
          }
        }, {
          key: "equals",
          value: function equals(v1, v2) {
            return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z;
          }
        }]);

        return Point3d;
      }();

      var Point3dAssembly = {
        toComponents: function toComponents(p) {
          return p.getComponents();
        },
        fromComponents: function fromComponents(comps) {
          return _construct(Point3d, _toConsumableArray(comps));
        }
      };

      function point3dFromUnknown(value) {
        return Point3d.isObject(value) ? new Point3d(value.x, value.y, value.z) : new Point3d();
      }

      function writePoint3d(target, value) {
        target.writeProperty('x', value.x);
        target.writeProperty('y', value.y);
        target.writeProperty('z', value.z);
      }

      function createConstraint$2(params, initialValue) {
        return new PointNdConstraint({
          assembly: Point3dAssembly,
          components: [createDimensionConstraint('x' in params ? params.x : undefined, initialValue.x), createDimensionConstraint('y' in params ? params.y : undefined, initialValue.y), createDimensionConstraint('z' in params ? params.z : undefined, initialValue.z)]
        });
      }

      function createAxis$1(initialValue, constraint) {
        return {
          baseStep: getBaseStep(constraint),
          constraint: constraint,
          textProps: ValueMap.fromObject({
            draggingScale: getSuitableDraggingScale(constraint, initialValue),
            formatter: createNumberFormatter(getSuitableDecimalDigits(constraint, initialValue))
          })
        };
      }

      var Point3dInputPlugin = {
        id: 'input-point3d',
        type: 'input',
        accept: function accept(value, params) {
          if (!Point3d.isObject(value)) {
            return null;
          }

          var p = ParamsParsers;
          var result = parseParams(params, {
            x: p.optional.custom(parsePointDimensionParams),
            y: p.optional.custom(parsePointDimensionParams),
            z: p.optional.custom(parsePointDimensionParams)
          });
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          reader: function reader(_args) {
            return point3dFromUnknown;
          },
          constraint: function constraint(args) {
            return createConstraint$2(args.params, args.initialValue);
          },
          equals: Point3d.equals,
          writer: function writer(_args) {
            return writePoint3d;
          }
        },
        controller: function controller(args) {
          var value = args.value;
          var c = args.constraint;

          if (!(c instanceof PointNdConstraint)) {
            throw TpError.shouldNeverHappen();
          }

          return new PointNdTextController(args.document, {
            assembly: Point3dAssembly,
            axes: [createAxis$1(value.rawValue.x, c.components[0]), createAxis$1(value.rawValue.y, c.components[1]), createAxis$1(value.rawValue.z, c.components[2])],
            parser: parseNumber,
            value: value,
            viewProps: args.viewProps
          });
        }
      };

      var Point4d = /*#__PURE__*/function () {
        function Point4d() {
          var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

          _classCallCheck(this, Point4d);

          this.x = x;
          this.y = y;
          this.z = z;
          this.w = w;
        }

        _createClass(Point4d, [{
          key: "getComponents",
          value: function getComponents() {
            return [this.x, this.y, this.z, this.w];
          }
        }, {
          key: "toObject",
          value: function toObject() {
            return {
              x: this.x,
              y: this.y,
              z: this.z,
              w: this.w
            };
          }
        }], [{
          key: "isObject",
          value: function isObject(obj) {
            if (isEmpty(obj)) {
              return false;
            }

            var x = obj.x;
            var y = obj.y;
            var z = obj.z;
            var w = obj.w;

            if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number' || typeof w !== 'number') {
              return false;
            }

            return true;
          }
        }, {
          key: "equals",
          value: function equals(v1, v2) {
            return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z && v1.w === v2.w;
          }
        }]);

        return Point4d;
      }();

      var Point4dAssembly = {
        toComponents: function toComponents(p) {
          return p.getComponents();
        },
        fromComponents: function fromComponents(comps) {
          return _construct(Point4d, _toConsumableArray(comps));
        }
      };

      function point4dFromUnknown(value) {
        return Point4d.isObject(value) ? new Point4d(value.x, value.y, value.z, value.w) : new Point4d();
      }

      function writePoint4d(target, value) {
        target.writeProperty('x', value.x);
        target.writeProperty('y', value.y);
        target.writeProperty('z', value.z);
        target.writeProperty('w', value.w);
      }

      function createConstraint$1(params, initialValue) {
        return new PointNdConstraint({
          assembly: Point4dAssembly,
          components: [createDimensionConstraint('x' in params ? params.x : undefined, initialValue.x), createDimensionConstraint('y' in params ? params.y : undefined, initialValue.y), createDimensionConstraint('z' in params ? params.z : undefined, initialValue.z), createDimensionConstraint('w' in params ? params.w : undefined, initialValue.w)]
        });
      }

      function createAxis(initialValue, constraint) {
        return {
          baseStep: getBaseStep(constraint),
          constraint: constraint,
          textProps: ValueMap.fromObject({
            draggingScale: getSuitableDraggingScale(constraint, initialValue),
            formatter: createNumberFormatter(getSuitableDecimalDigits(constraint, initialValue))
          })
        };
      }

      var Point4dInputPlugin = {
        id: 'input-point4d',
        type: 'input',
        accept: function accept(value, params) {
          if (!Point4d.isObject(value)) {
            return null;
          }

          var p = ParamsParsers;
          var result = parseParams(params, {
            x: p.optional.custom(parsePointDimensionParams),
            y: p.optional.custom(parsePointDimensionParams),
            z: p.optional.custom(parsePointDimensionParams),
            w: p.optional.custom(parsePointDimensionParams)
          });
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          reader: function reader(_args) {
            return point4dFromUnknown;
          },
          constraint: function constraint(args) {
            return createConstraint$1(args.params, args.initialValue);
          },
          equals: Point4d.equals,
          writer: function writer(_args) {
            return writePoint4d;
          }
        },
        controller: function controller(args) {
          var value = args.value;
          var c = args.constraint;

          if (!(c instanceof PointNdConstraint)) {
            throw TpError.shouldNeverHappen();
          }

          return new PointNdTextController(args.document, {
            assembly: Point4dAssembly,
            axes: value.rawValue.getComponents().map(function (comp, index) {
              return createAxis(comp, c.components[index]);
            }),
            parser: parseNumber,
            value: value,
            viewProps: args.viewProps
          });
        }
      };

      function createConstraint(params) {
        var constraints = [];
        var lc = createListConstraint(params.options);

        if (lc) {
          constraints.push(lc);
        }

        return new CompositeConstraint(constraints);
      }

      var StringInputPlugin = {
        id: 'input-string',
        type: 'input',
        accept: function accept(value, params) {
          if (typeof value !== 'string') {
            return null;
          }

          var p = ParamsParsers;
          var result = parseParams(params, {
            options: p.optional.custom(parseListOptions)
          });
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          reader: function reader(_args) {
            return stringFromUnknown;
          },
          constraint: function constraint(args) {
            return createConstraint(args.params);
          },
          writer: function writer(_args) {
            return writePrimitive;
          }
        },
        controller: function controller(args) {
          var _a;

          var doc = args.document;
          var value = args.value;
          var c = args.constraint;

          if (c && findConstraint(c, ListConstraint)) {
            return new ListController(doc, {
              props: ValueMap.fromObject({
                options: (_a = findListItems(c)) !== null && _a !== void 0 ? _a : []
              }),
              value: value,
              viewProps: args.viewProps
            });
          }

          return new TextController(doc, {
            parser: function parser(v) {
              return v;
            },
            props: ValueMap.fromObject({
              formatter: formatString
            }),
            value: value,
            viewProps: args.viewProps
          });
        }
      };
      var Constants = {
        monitor: {
          defaultInterval: 200,
          defaultLineCount: 3
        }
      };
      var className$2 = ClassName('mll');

      var MultiLogView = /*#__PURE__*/function () {
        function MultiLogView(doc, config) {
          _classCallCheck(this, MultiLogView);

          this.onValueUpdate_ = this.onValueUpdate_.bind(this);
          this.formatter_ = config.formatter;
          this.element = doc.createElement('div');
          this.element.classList.add(className$2());
          config.viewProps.bindClassModifiers(this.element);
          var textareaElem = doc.createElement('textarea');
          textareaElem.classList.add(className$2('i'));
          textareaElem.style.height = "calc(var(--bld-us) * ".concat(config.lineCount, ")");
          textareaElem.readOnly = true;
          config.viewProps.bindDisabled(textareaElem);
          this.element.appendChild(textareaElem);
          this.textareaElem_ = textareaElem;
          config.value.emitter.on('change', this.onValueUpdate_);
          this.value = config.value;
          this.update_();
        }

        _createClass(MultiLogView, [{
          key: "update_",
          value: function update_() {
            var _this41 = this;

            var elem = this.textareaElem_;
            var shouldScroll = elem.scrollTop === elem.scrollHeight - elem.clientHeight;
            var lines = [];
            this.value.rawValue.forEach(function (value) {
              if (value !== undefined) {
                lines.push(_this41.formatter_(value));
              }
            });
            elem.textContent = lines.join('\n');

            if (shouldScroll) {
              elem.scrollTop = elem.scrollHeight;
            }
          }
        }, {
          key: "onValueUpdate_",
          value: function onValueUpdate_() {
            this.update_();
          }
        }]);

        return MultiLogView;
      }();

      var MultiLogController = /*#__PURE__*/_createClass(function MultiLogController(doc, config) {
        _classCallCheck(this, MultiLogController);

        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new MultiLogView(doc, {
          formatter: config.formatter,
          lineCount: config.lineCount,
          value: this.value,
          viewProps: this.viewProps
        });
      });

      var className$1 = ClassName('sgl');

      var SingleLogView = /*#__PURE__*/function () {
        function SingleLogView(doc, config) {
          _classCallCheck(this, SingleLogView);

          this.onValueUpdate_ = this.onValueUpdate_.bind(this);
          this.formatter_ = config.formatter;
          this.element = doc.createElement('div');
          this.element.classList.add(className$1());
          config.viewProps.bindClassModifiers(this.element);
          var inputElem = doc.createElement('input');
          inputElem.classList.add(className$1('i'));
          inputElem.readOnly = true;
          inputElem.type = 'text';
          config.viewProps.bindDisabled(inputElem);
          this.element.appendChild(inputElem);
          this.inputElement = inputElem;
          config.value.emitter.on('change', this.onValueUpdate_);
          this.value = config.value;
          this.update_();
        }

        _createClass(SingleLogView, [{
          key: "update_",
          value: function update_() {
            var values = this.value.rawValue;
            var lastValue = values[values.length - 1];
            this.inputElement.value = lastValue !== undefined ? this.formatter_(lastValue) : '';
          }
        }, {
          key: "onValueUpdate_",
          value: function onValueUpdate_() {
            this.update_();
          }
        }]);

        return SingleLogView;
      }();

      var SingleLogController = /*#__PURE__*/_createClass(function SingleLogController(doc, config) {
        _classCallCheck(this, SingleLogController);

        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new SingleLogView(doc, {
          formatter: config.formatter,
          value: this.value,
          viewProps: this.viewProps
        });
      });

      var BooleanMonitorPlugin = {
        id: 'monitor-bool',
        type: 'monitor',
        accept: function accept(value, params) {
          if (typeof value !== 'boolean') {
            return null;
          }

          var p = ParamsParsers;
          var result = parseParams(params, {
            lineCount: p.optional.number
          });
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          reader: function reader(_args) {
            return boolFromUnknown;
          }
        },
        controller: function controller(args) {
          var _a;

          if (args.value.rawValue.length === 1) {
            return new SingleLogController(args.document, {
              formatter: BooleanFormatter,
              value: args.value,
              viewProps: args.viewProps
            });
          }

          return new MultiLogController(args.document, {
            formatter: BooleanFormatter,
            lineCount: (_a = args.params.lineCount) !== null && _a !== void 0 ? _a : Constants.monitor.defaultLineCount,
            value: args.value,
            viewProps: args.viewProps
          });
        }
      };
      var className = ClassName('grl');

      var GraphLogView = /*#__PURE__*/function () {
        function GraphLogView(doc, config) {
          _classCallCheck(this, GraphLogView);

          this.onCursorChange_ = this.onCursorChange_.bind(this);
          this.onValueUpdate_ = this.onValueUpdate_.bind(this);
          this.element = doc.createElement('div');
          this.element.classList.add(className());
          config.viewProps.bindClassModifiers(this.element);
          this.formatter_ = config.formatter;
          this.props_ = config.props;
          this.cursor_ = config.cursor;
          this.cursor_.emitter.on('change', this.onCursorChange_);
          var svgElem = doc.createElementNS(SVG_NS, 'svg');
          svgElem.classList.add(className('g'));
          svgElem.style.height = "calc(var(--bld-us) * ".concat(config.lineCount, ")");
          this.element.appendChild(svgElem);
          this.svgElem_ = svgElem;
          var lineElem = doc.createElementNS(SVG_NS, 'polyline');
          this.svgElem_.appendChild(lineElem);
          this.lineElem_ = lineElem;
          var tooltipElem = doc.createElement('div');
          tooltipElem.classList.add(className('t'), ClassName('tt')());
          this.element.appendChild(tooltipElem);
          this.tooltipElem_ = tooltipElem;
          config.value.emitter.on('change', this.onValueUpdate_);
          this.value = config.value;
          this.update_();
        }

        _createClass(GraphLogView, [{
          key: "graphElement",
          get: function get() {
            return this.svgElem_;
          }
        }, {
          key: "update_",
          value: function update_() {
            var bounds = this.svgElem_.getBoundingClientRect();
            var maxIndex = this.value.rawValue.length - 1;
            var min = this.props_.get('minValue');
            var max = this.props_.get('maxValue');
            var points = [];
            this.value.rawValue.forEach(function (v, index) {
              if (v === undefined) {
                return;
              }

              var x = mapRange(index, 0, maxIndex, 0, bounds.width);
              var y = mapRange(v, min, max, bounds.height, 0);
              points.push([x, y].join(','));
            });
            this.lineElem_.setAttributeNS(null, 'points', points.join(' '));
            var tooltipElem = this.tooltipElem_;
            var value = this.value.rawValue[this.cursor_.rawValue];

            if (value === undefined) {
              tooltipElem.classList.remove(className('t', 'a'));
              return;
            }

            var tx = mapRange(this.cursor_.rawValue, 0, maxIndex, 0, bounds.width);
            var ty = mapRange(value, min, max, bounds.height, 0);
            tooltipElem.style.left = "".concat(tx, "px");
            tooltipElem.style.top = "".concat(ty, "px");
            tooltipElem.textContent = "".concat(this.formatter_(value));

            if (!tooltipElem.classList.contains(className('t', 'a'))) {
              tooltipElem.classList.add(className('t', 'a'), className('t', 'in'));
              forceReflow(tooltipElem);
              tooltipElem.classList.remove(className('t', 'in'));
            }
          }
        }, {
          key: "onValueUpdate_",
          value: function onValueUpdate_() {
            this.update_();
          }
        }, {
          key: "onCursorChange_",
          value: function onCursorChange_() {
            this.update_();
          }
        }]);

        return GraphLogView;
      }();

      var GraphLogController = /*#__PURE__*/function () {
        function GraphLogController(doc, config) {
          _classCallCheck(this, GraphLogController);

          this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this);
          this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this);
          this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this);
          this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this);
          this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this);
          this.props_ = config.props;
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.cursor_ = createValue(-1);
          this.view = new GraphLogView(doc, {
            cursor: this.cursor_,
            formatter: config.formatter,
            lineCount: config.lineCount,
            props: this.props_,
            value: this.value,
            viewProps: this.viewProps
          });

          if (!supportsTouch(doc)) {
            this.view.element.addEventListener('mousemove', this.onGraphMouseMove_);
            this.view.element.addEventListener('mouseleave', this.onGraphMouseLeave_);
          } else {
            var ph = new PointerHandler(this.view.element);
            ph.emitter.on('down', this.onGraphPointerDown_);
            ph.emitter.on('move', this.onGraphPointerMove_);
            ph.emitter.on('up', this.onGraphPointerUp_);
          }
        }

        _createClass(GraphLogController, [{
          key: "onGraphMouseLeave_",
          value: function onGraphMouseLeave_() {
            this.cursor_.rawValue = -1;
          }
        }, {
          key: "onGraphMouseMove_",
          value: function onGraphMouseMove_(ev) {
            var bounds = this.view.element.getBoundingClientRect();
            this.cursor_.rawValue = Math.floor(mapRange(ev.offsetX, 0, bounds.width, 0, this.value.rawValue.length));
          }
        }, {
          key: "onGraphPointerDown_",
          value: function onGraphPointerDown_(ev) {
            this.onGraphPointerMove_(ev);
          }
        }, {
          key: "onGraphPointerMove_",
          value: function onGraphPointerMove_(ev) {
            if (!ev.data.point) {
              this.cursor_.rawValue = -1;
              return;
            }

            this.cursor_.rawValue = Math.floor(mapRange(ev.data.point.x, 0, ev.data.bounds.width, 0, this.value.rawValue.length));
          }
        }, {
          key: "onGraphPointerUp_",
          value: function onGraphPointerUp_() {
            this.cursor_.rawValue = -1;
          }
        }]);

        return GraphLogController;
      }();

      function createFormatter(params) {
        return 'format' in params && !isEmpty(params.format) ? params.format : createNumberFormatter(2);
      }

      function createTextMonitor(args) {
        var _a;

        if (args.value.rawValue.length === 1) {
          return new SingleLogController(args.document, {
            formatter: createFormatter(args.params),
            value: args.value,
            viewProps: args.viewProps
          });
        }

        return new MultiLogController(args.document, {
          formatter: createFormatter(args.params),
          lineCount: (_a = args.params.lineCount) !== null && _a !== void 0 ? _a : Constants.monitor.defaultLineCount,
          value: args.value,
          viewProps: args.viewProps
        });
      }

      function createGraphMonitor(args) {
        var _a, _b, _c;

        return new GraphLogController(args.document, {
          formatter: createFormatter(args.params),
          lineCount: (_a = args.params.lineCount) !== null && _a !== void 0 ? _a : Constants.monitor.defaultLineCount,
          props: ValueMap.fromObject({
            maxValue: (_b = 'max' in args.params ? args.params.max : null) !== null && _b !== void 0 ? _b : 100,
            minValue: (_c = 'min' in args.params ? args.params.min : null) !== null && _c !== void 0 ? _c : 0
          }),
          value: args.value,
          viewProps: args.viewProps
        });
      }

      function shouldShowGraph(params) {
        return 'view' in params && params.view === 'graph';
      }

      var NumberMonitorPlugin = {
        id: 'monitor-number',
        type: 'monitor',
        accept: function accept(value, params) {
          if (typeof value !== 'number') {
            return null;
          }

          var p = ParamsParsers;
          var result = parseParams(params, {
            format: p.optional["function"],
            lineCount: p.optional.number,
            max: p.optional.number,
            min: p.optional.number,
            view: p.optional.string
          });
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          defaultBufferSize: function defaultBufferSize(params) {
            return shouldShowGraph(params) ? 64 : 1;
          },
          reader: function reader(_args) {
            return numberFromUnknown;
          }
        },
        controller: function controller(args) {
          if (shouldShowGraph(args.params)) {
            return createGraphMonitor(args);
          }

          return createTextMonitor(args);
        }
      };
      var StringMonitorPlugin = {
        id: 'monitor-string',
        type: 'monitor',
        accept: function accept(value, params) {
          if (typeof value !== 'string') {
            return null;
          }

          var p = ParamsParsers;
          var result = parseParams(params, {
            lineCount: p.optional.number,
            multiline: p.optional["boolean"]
          });
          return result ? {
            initialValue: value,
            params: result
          } : null;
        },
        binding: {
          reader: function reader(_args) {
            return stringFromUnknown;
          }
        },
        controller: function controller(args) {
          var _a;

          var value = args.value;
          var multiline = value.rawValue.length > 1 || 'multiline' in args.params && args.params.multiline;

          if (multiline) {
            return new MultiLogController(args.document, {
              formatter: formatString,
              lineCount: (_a = args.params.lineCount) !== null && _a !== void 0 ? _a : Constants.monitor.defaultLineCount,
              value: value,
              viewProps: args.viewProps
            });
          }

          return new SingleLogController(args.document, {
            formatter: formatString,
            value: value,
            viewProps: args.viewProps
          });
        }
      };

      var InputBinding = /*#__PURE__*/function () {
        function InputBinding(config) {
          _classCallCheck(this, InputBinding);

          this.onValueChange_ = this.onValueChange_.bind(this);
          this.reader = config.reader;
          this.writer = config.writer;
          this.emitter = new Emitter();
          this.value = config.value;
          this.value.emitter.on('change', this.onValueChange_);
          this.target = config.target;
          this.read();
        }

        _createClass(InputBinding, [{
          key: "read",
          value: function read() {
            var targetValue = this.target.read();

            if (targetValue !== undefined) {
              this.value.rawValue = this.reader(targetValue);
            }
          }
        }, {
          key: "write_",
          value: function write_(rawValue) {
            this.writer(this.target, rawValue);
          }
        }, {
          key: "onValueChange_",
          value: function onValueChange_(ev) {
            this.write_(ev.rawValue);
            this.emitter.emit('change', {
              options: ev.options,
              rawValue: ev.rawValue,
              sender: this
            });
          }
        }]);

        return InputBinding;
      }();

      function createInputBindingController(plugin, args) {
        var result = plugin.accept(args.target.read(), args.params);

        if (isEmpty(result)) {
          return null;
        }

        var p = ParamsParsers;
        var valueArgs = {
          target: args.target,
          initialValue: result.initialValue,
          params: result.params
        };
        var reader = plugin.binding.reader(valueArgs);
        var constraint = plugin.binding.constraint ? plugin.binding.constraint(valueArgs) : undefined;
        var value = createValue(reader(result.initialValue), {
          constraint: constraint,
          equals: plugin.binding.equals
        });
        var binding = new InputBinding({
          reader: reader,
          target: args.target,
          value: value,
          writer: plugin.binding.writer(valueArgs)
        });
        var disabled = p.optional["boolean"](args.params.disabled).value;
        var hidden = p.optional["boolean"](args.params.hidden).value;
        var controller = plugin.controller({
          constraint: constraint,
          document: args.document,
          initialValue: result.initialValue,
          params: result.params,
          value: binding.value,
          viewProps: ViewProps.create({
            disabled: disabled,
            hidden: hidden
          })
        });
        var label = p.optional.string(args.params.label).value;
        return new InputBindingController(args.document, {
          binding: binding,
          blade: createBlade(),
          props: ValueMap.fromObject({
            label: label !== null && label !== void 0 ? label : args.target.key
          }),
          valueController: controller
        });
      }

      var MonitorBinding = /*#__PURE__*/function () {
        function MonitorBinding(config) {
          _classCallCheck(this, MonitorBinding);

          this.onTick_ = this.onTick_.bind(this);
          this.reader_ = config.reader;
          this.target = config.target;
          this.emitter = new Emitter();
          this.value = config.value;
          this.ticker = config.ticker;
          this.ticker.emitter.on('tick', this.onTick_);
          this.read();
        }

        _createClass(MonitorBinding, [{
          key: "dispose",
          value: function dispose() {
            this.ticker.dispose();
          }
        }, {
          key: "read",
          value: function read() {
            var targetValue = this.target.read();

            if (targetValue === undefined) {
              return;
            }

            var buffer = this.value.rawValue;
            var newValue = this.reader_(targetValue);
            this.value.rawValue = createPushedBuffer(buffer, newValue);
            this.emitter.emit('update', {
              rawValue: newValue,
              sender: this
            });
          }
        }, {
          key: "onTick_",
          value: function onTick_(_) {
            this.read();
          }
        }]);

        return MonitorBinding;
      }();

      function createTicker(document, interval) {
        return interval === 0 ? new ManualTicker() : new IntervalTicker(document, interval !== null && interval !== void 0 ? interval : Constants.monitor.defaultInterval);
      }

      function createMonitorBindingController(plugin, args) {
        var _a, _b, _c;

        var P = ParamsParsers;
        var result = plugin.accept(args.target.read(), args.params);

        if (isEmpty(result)) {
          return null;
        }

        var bindingArgs = {
          target: args.target,
          initialValue: result.initialValue,
          params: result.params
        };
        var reader = plugin.binding.reader(bindingArgs);
        var bufferSize = (_b = (_a = P.optional.number(args.params.bufferSize).value) !== null && _a !== void 0 ? _a : plugin.binding.defaultBufferSize && plugin.binding.defaultBufferSize(result.params)) !== null && _b !== void 0 ? _b : 1;
        var interval = P.optional.number(args.params.interval).value;
        var binding = new MonitorBinding({
          reader: reader,
          target: args.target,
          ticker: createTicker(args.document, interval),
          value: initializeBuffer(bufferSize)
        });
        var disabled = P.optional["boolean"](args.params.disabled).value;
        var hidden = P.optional["boolean"](args.params.hidden).value;
        var controller = plugin.controller({
          document: args.document,
          params: result.params,
          value: binding.value,
          viewProps: ViewProps.create({
            disabled: disabled,
            hidden: hidden
          })
        });
        var label = (_c = P.optional.string(args.params.label).value) !== null && _c !== void 0 ? _c : args.target.key;
        return new MonitorBindingController(args.document, {
          binding: binding,
          blade: createBlade(),
          props: ValueMap.fromObject({
            label: label
          }),
          valueController: controller
        });
      }

      var PluginPool = /*#__PURE__*/function () {
        function PluginPool() {
          _classCallCheck(this, PluginPool);

          this.pluginsMap_ = {
            blades: [],
            inputs: [],
            monitors: []
          };
        }

        _createClass(PluginPool, [{
          key: "getAll",
          value: function getAll() {
            return [].concat(_toConsumableArray(this.pluginsMap_.blades), _toConsumableArray(this.pluginsMap_.inputs), _toConsumableArray(this.pluginsMap_.monitors));
          }
        }, {
          key: "register",
          value: function register(r) {
            if (r.type === 'blade') {
              this.pluginsMap_.blades.unshift(r);
            } else if (r.type === 'input') {
              this.pluginsMap_.inputs.unshift(r);
            } else if (r.type === 'monitor') {
              this.pluginsMap_.monitors.unshift(r);
            }
          }
        }, {
          key: "createInput",
          value: function createInput(document, target, params) {
            var initialValue = target.read();

            if (isEmpty(initialValue)) {
              throw new TpError({
                context: {
                  key: target.key
                },
                type: 'nomatchingcontroller'
              });
            }

            var bc = this.pluginsMap_.inputs.reduce(function (result, plugin) {
              return result !== null && result !== void 0 ? result : createInputBindingController(plugin, {
                document: document,
                target: target,
                params: params
              });
            }, null);

            if (bc) {
              return bc;
            }

            throw new TpError({
              context: {
                key: target.key
              },
              type: 'nomatchingcontroller'
            });
          }
        }, {
          key: "createMonitor",
          value: function createMonitor(document, target, params) {
            var bc = this.pluginsMap_.monitors.reduce(function (result, plugin) {
              return result !== null && result !== void 0 ? result : createMonitorBindingController(plugin, {
                document: document,
                params: params,
                target: target
              });
            }, null);

            if (bc) {
              return bc;
            }

            throw new TpError({
              context: {
                key: target.key
              },
              type: 'nomatchingcontroller'
            });
          }
        }, {
          key: "createBlade",
          value: function createBlade(document, params) {
            var bc = this.pluginsMap_.blades.reduce(function (result, plugin) {
              return result !== null && result !== void 0 ? result : createBladeController(plugin, {
                document: document,
                params: params
              });
            }, null);

            if (!bc) {
              throw new TpError({
                type: 'nomatchingview',
                context: {
                  params: params
                }
              });
            }

            return bc;
          }
        }, {
          key: "createBladeApi",
          value: function createBladeApi(bc) {
            var _this42 = this;

            if (bc instanceof InputBindingController) {
              return new InputBindingApi(bc);
            }

            if (bc instanceof MonitorBindingController) {
              return new MonitorBindingApi(bc);
            }

            if (bc instanceof RackController) {
              return new RackApi(bc, this);
            }

            var api = this.pluginsMap_.blades.reduce(function (result, plugin) {
              return result !== null && result !== void 0 ? result : plugin.api({
                controller: bc,
                pool: _this42
              });
            }, null);

            if (!api) {
              throw TpError.shouldNeverHappen();
            }

            return api;
          }
        }]);

        return PluginPool;
      }();

      function createDefaultPluginPool() {
        var pool = new PluginPool();
        [Point2dInputPlugin, Point3dInputPlugin, Point4dInputPlugin, StringInputPlugin, NumberInputPlugin, StringColorInputPlugin, ObjectColorInputPlugin, NumberColorInputPlugin, BooleanInputPlugin, BooleanMonitorPlugin, StringMonitorPlugin, NumberMonitorPlugin, ButtonBladePlugin, FolderBladePlugin, SeparatorBladePlugin, TabBladePlugin].forEach(function (p) {
          pool.register(p);
        });
        return pool;
      }

      var ListApi = /*#__PURE__*/function (_BladeApi7) {
        _inherits(ListApi, _BladeApi7);

        var _super25 = _createSuper(ListApi);

        function ListApi(controller) {
          var _this43;

          _classCallCheck(this, ListApi);

          _this43 = _super25.call(this, controller);
          _this43.emitter_ = new Emitter();

          _this43.controller_.valueController.value.emitter.on('change', function (ev) {
            _this43.emitter_.emit('change', {
              event: new TpChangeEvent(_assertThisInitialized(_this43), ev.rawValue)
            });
          });

          return _this43;
        }

        _createClass(ListApi, [{
          key: "label",
          get: function get() {
            return this.controller_.props.get('label');
          },
          set: function set(label) {
            this.controller_.props.set('label', label);
          }
        }, {
          key: "options",
          get: function get() {
            return this.controller_.valueController.props.get('options');
          },
          set: function set(options) {
            this.controller_.valueController.props.set('options', options);
          }
        }, {
          key: "value",
          get: function get() {
            return this.controller_.valueController.value.rawValue;
          },
          set: function set(value) {
            this.controller_.valueController.value.rawValue = value;
          }
        }, {
          key: "on",
          value: function on(eventName, handler) {
            var bh = handler.bind(this);
            this.emitter_.on(eventName, function (ev) {
              bh(ev.event);
            });
            return this;
          }
        }]);

        return ListApi;
      }(BladeApi);

      var SliderApi = /*#__PURE__*/function (_BladeApi8) {
        _inherits(SliderApi, _BladeApi8);

        var _super26 = _createSuper(SliderApi);

        function SliderApi(controller) {
          var _this44;

          _classCallCheck(this, SliderApi);

          _this44 = _super26.call(this, controller);
          _this44.emitter_ = new Emitter();

          _this44.controller_.valueController.value.emitter.on('change', function (ev) {
            _this44.emitter_.emit('change', {
              event: new TpChangeEvent(_assertThisInitialized(_this44), ev.rawValue)
            });
          });

          return _this44;
        }

        _createClass(SliderApi, [{
          key: "label",
          get: function get() {
            return this.controller_.props.get('label');
          },
          set: function set(label) {
            this.controller_.props.set('label', label);
          }
        }, {
          key: "maxValue",
          get: function get() {
            return this.controller_.valueController.sliderController.props.get('maxValue');
          },
          set: function set(maxValue) {
            this.controller_.valueController.sliderController.props.set('maxValue', maxValue);
          }
        }, {
          key: "minValue",
          get: function get() {
            return this.controller_.valueController.sliderController.props.get('minValue');
          },
          set: function set(minValue) {
            this.controller_.valueController.sliderController.props.set('minValue', minValue);
          }
        }, {
          key: "value",
          get: function get() {
            return this.controller_.valueController.value.rawValue;
          },
          set: function set(value) {
            this.controller_.valueController.value.rawValue = value;
          }
        }, {
          key: "on",
          value: function on(eventName, handler) {
            var bh = handler.bind(this);
            this.emitter_.on(eventName, function (ev) {
              bh(ev.event);
            });
            return this;
          }
        }]);

        return SliderApi;
      }(BladeApi);

      var TextApi = /*#__PURE__*/function (_BladeApi9) {
        _inherits(TextApi, _BladeApi9);

        var _super27 = _createSuper(TextApi);

        function TextApi(controller) {
          var _this45;

          _classCallCheck(this, TextApi);

          _this45 = _super27.call(this, controller);
          _this45.emitter_ = new Emitter();

          _this45.controller_.valueController.value.emitter.on('change', function (ev) {
            _this45.emitter_.emit('change', {
              event: new TpChangeEvent(_assertThisInitialized(_this45), ev.rawValue)
            });
          });

          return _this45;
        }

        _createClass(TextApi, [{
          key: "label",
          get: function get() {
            return this.controller_.props.get('label');
          },
          set: function set(label) {
            this.controller_.props.set('label', label);
          }
        }, {
          key: "formatter",
          get: function get() {
            return this.controller_.valueController.props.get('formatter');
          },
          set: function set(formatter) {
            this.controller_.valueController.props.set('formatter', formatter);
          }
        }, {
          key: "value",
          get: function get() {
            return this.controller_.valueController.value.rawValue;
          },
          set: function set(value) {
            this.controller_.valueController.value.rawValue = value;
          }
        }, {
          key: "on",
          value: function on(eventName, handler) {
            var bh = handler.bind(this);
            this.emitter_.on(eventName, function (ev) {
              bh(ev.event);
            });
            return this;
          }
        }]);

        return TextApi;
      }(BladeApi);

      var ListBladePlugin = function () {
        return {
          id: 'list',
          type: 'blade',
          accept: function accept(params) {
            var p = ParamsParsers;
            var result = parseParams(params, {
              options: p.required.custom(parseListOptions),
              value: p.required.raw,
              view: p.required.constant('list'),
              label: p.optional.string
            });
            return result ? {
              params: result
            } : null;
          },
          controller: function controller(args) {
            var ic = new ListController(args.document, {
              props: ValueMap.fromObject({
                options: normalizeListOptions(args.params.options)
              }),
              value: createValue(args.params.value),
              viewProps: args.viewProps
            });
            return new LabeledValueController(args.document, {
              blade: args.blade,
              props: ValueMap.fromObject({
                label: args.params.label
              }),
              valueController: ic
            });
          },
          api: function api(args) {
            if (!(args.controller instanceof LabeledValueController)) {
              return null;
            }

            if (!(args.controller.valueController instanceof ListController)) {
              return null;
            }

            return new ListApi(args.controller);
          }
        };
      }();
      /**
       * @hidden
       */


      function exportPresetJson(targets) {
        return targets.reduce(function (result, target) {
          return Object.assign(result, _defineProperty({}, target.presetKey, target.read()));
        }, {});
      }
      /**
       * @hidden
       */


      function importPresetJson(targets, preset) {
        targets.forEach(function (target) {
          var value = preset[target.presetKey];

          if (value !== undefined) {
            target.write(value);
          }
        });
      }

      var RootApi = /*#__PURE__*/function (_FolderApi) {
        _inherits(RootApi, _FolderApi);

        var _super28 = _createSuper(RootApi);

        /**
         * @hidden
         */
        function RootApi(controller, pool) {
          _classCallCheck(this, RootApi);

          return _super28.call(this, controller, pool);
        }

        _createClass(RootApi, [{
          key: "element",
          get: function get() {
            return this.controller_.view.element;
          }
          /**
           * Imports a preset of all inputs.
           * @param preset The preset object to import.
           */

        }, {
          key: "importPreset",
          value: function importPreset(preset) {
            var targets = this.controller_.rackController.rack.find(InputBindingController).map(function (ibc) {
              return ibc.binding.target;
            });
            importPresetJson(targets, preset);
            this.refresh();
          }
          /**
           * Exports a preset of all inputs.
           * @return An exported preset object.
           */

        }, {
          key: "exportPreset",
          value: function exportPreset() {
            var targets = this.controller_.rackController.rack.find(InputBindingController).map(function (ibc) {
              return ibc.binding.target;
            });
            return exportPresetJson(targets);
          }
          /**
           * Refreshes all bindings of the pane.
           */

        }, {
          key: "refresh",
          value: function refresh() {
            // Force-read all input bindings
            this.controller_.rackController.rack.find(InputBindingController).forEach(function (ibc) {
              ibc.binding.read();
            }); // Force-read all monitor bindings

            this.controller_.rackController.rack.find(MonitorBindingController).forEach(function (mbc) {
              mbc.binding.read();
            });
          }
        }]);

        return RootApi;
      }(FolderApi);

      var RootController = /*#__PURE__*/function (_FolderController) {
        _inherits(RootController, _FolderController);

        var _super29 = _createSuper(RootController);

        function RootController(doc, config) {
          _classCallCheck(this, RootController);

          return _super29.call(this, doc, {
            expanded: config.expanded,
            blade: config.blade,
            props: config.props,
            root: true,
            viewProps: config.viewProps
          });
        }

        return _createClass(RootController);
      }(FolderController);

      var SliderBladePlugin = {
        id: 'slider',
        type: 'blade',
        accept: function accept(params) {
          var p = ParamsParsers;
          var result = parseParams(params, {
            max: p.required.number,
            min: p.required.number,
            view: p.required.constant('slider'),
            format: p.optional["function"],
            label: p.optional.string,
            value: p.optional.number
          });
          return result ? {
            params: result
          } : null;
        },
        controller: function controller(args) {
          var _a, _b;

          var v = (_a = args.params.value) !== null && _a !== void 0 ? _a : 0;
          var vc = new SliderTextController(args.document, {
            baseStep: 1,
            parser: parseNumber,
            sliderProps: ValueMap.fromObject({
              maxValue: args.params.max,
              minValue: args.params.min
            }),
            textProps: ValueMap.fromObject({
              draggingScale: getSuitableDraggingScale(undefined, v),
              formatter: (_b = args.params.format) !== null && _b !== void 0 ? _b : numberToString
            }),
            value: createValue(v),
            viewProps: args.viewProps
          });
          return new LabeledValueController(args.document, {
            blade: args.blade,
            props: ValueMap.fromObject({
              label: args.params.label
            }),
            valueController: vc
          });
        },
        api: function api(args) {
          if (!(args.controller instanceof LabeledValueController)) {
            return null;
          }

          if (!(args.controller.valueController instanceof SliderTextController)) {
            return null;
          }

          return new SliderApi(args.controller);
        }
      };

      var TextBladePlugin = function () {
        return {
          id: 'text',
          type: 'blade',
          accept: function accept(params) {
            var p = ParamsParsers;
            var result = parseParams(params, {
              parse: p.required["function"],
              value: p.required.raw,
              view: p.required.constant('text'),
              format: p.optional["function"],
              label: p.optional.string
            });
            return result ? {
              params: result
            } : null;
          },
          controller: function controller(args) {
            var _a;

            var ic = new TextController(args.document, {
              parser: args.params.parse,
              props: ValueMap.fromObject({
                formatter: (_a = args.params.format) !== null && _a !== void 0 ? _a : function (v) {
                  return String(v);
                }
              }),
              value: createValue(args.params.value),
              viewProps: args.viewProps
            });
            return new LabeledValueController(args.document, {
              blade: args.blade,
              props: ValueMap.fromObject({
                label: args.params.label
              }),
              valueController: ic
            });
          },
          api: function api(args) {
            if (!(args.controller instanceof LabeledValueController)) {
              return null;
            }

            if (!(args.controller.valueController instanceof TextController)) {
              return null;
            }

            return new TextApi(args.controller);
          }
        };
      }();

      function createDefaultWrapperElement(doc) {
        var elem = doc.createElement('div');
        elem.classList.add(ClassName('dfw')());

        if (doc.body) {
          doc.body.appendChild(elem);
        }

        return elem;
      }

      function embedStyle(doc, id, css) {
        if (doc.querySelector("style[data-tp-style=".concat(id, "]"))) {
          return;
        }

        var styleElem = doc.createElement('style');
        styleElem.dataset.tpStyle = id;
        styleElem.textContent = css;
        doc.head.appendChild(styleElem);
      }
      /**
       * The root pane of Tweakpane.
       */


      var Pane = /*#__PURE__*/function (_RootApi) {
        _inherits(Pane, _RootApi);

        var _super30 = _createSuper(Pane);

        function Pane(opt_config) {
          var _this46;

          _classCallCheck(this, Pane);

          var _a, _b;

          var config = opt_config !== null && opt_config !== void 0 ? opt_config : {};
          var doc = (_a = config.document) !== null && _a !== void 0 ? _a : getWindowDocument();
          var pool = createDefaultPluginPool();
          var rootController = new RootController(doc, {
            expanded: config.expanded,
            blade: createBlade(),
            props: ValueMap.fromObject({
              title: config.title
            }),
            viewProps: ViewProps.create()
          });
          _this46 = _super30.call(this, rootController, pool);
          _this46.pool_ = pool;
          _this46.containerElem_ = (_b = config.container) !== null && _b !== void 0 ? _b : createDefaultWrapperElement(doc);

          _this46.containerElem_.appendChild(_this46.element);

          _this46.doc_ = doc;
          _this46.usesDefaultWrapper_ = !config.container;

          _this46.setUpDefaultPlugins_();

          return _this46;
        }

        _createClass(Pane, [{
          key: "document",
          get: function get() {
            if (!this.doc_) {
              throw TpError.alreadyDisposed();
            }

            return this.doc_;
          }
        }, {
          key: "dispose",
          value: function dispose() {
            var containerElem = this.containerElem_;

            if (!containerElem) {
              throw TpError.alreadyDisposed();
            }

            if (this.usesDefaultWrapper_) {
              var parentElem = containerElem.parentElement;

              if (parentElem) {
                parentElem.removeChild(containerElem);
              }
            }

            this.containerElem_ = null;
            this.doc_ = null;

            _get(_getPrototypeOf(Pane.prototype), "dispose", this).call(this);
          }
        }, {
          key: "registerPlugin",
          value: function registerPlugin(bundle) {
            var _this47 = this;

            var plugins = 'plugin' in bundle ? [bundle.plugin] : 'plugins' in bundle ? bundle.plugins : [];
            plugins.forEach(function (p) {
              _this47.pool_.register(p);

              _this47.embedPluginStyle_(p);
            });
          }
        }, {
          key: "embedPluginStyle_",
          value: function embedPluginStyle_(plugin) {
            if (plugin.css) {
              embedStyle(this.document, "plugin-".concat(plugin.id), plugin.css);
            }
          }
        }, {
          key: "setUpDefaultPlugins_",
          value: function setUpDefaultPlugins_() {
            var _this48 = this;

            // NOTE: This string literal will be replaced with the default CSS by Rollup at the compilation time
            embedStyle(this.document, 'default', '.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor transparent;scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:transparent}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:transparent solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, #28292e);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, #adafb8);--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, #28292e);--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, #bbbcc4);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, #bbbcc4);--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_i,.tp-fldv_c>.tp-tabv>.tp-tabv_i{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a:before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_c{border-left:var(--cnt-bg) solid 4px}.tp-fldv_b:hover+.tp-fldv_c{border-left-color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_c{border-left-color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_c{border-left-color:var(--cnt-bg-a)}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv.tp-v-disabled{opacity:.5}.tp-tabv_i{align-items:flex-end;display:flex;overflow:hidden}.tp-tabv.tp-tabv-nop .tp-tabv_i{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_i::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{border-left:var(--cnt-bg) solid 4px;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p)}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:-2px;position:absolute;width:2px}.tp-tbiv_b{background-color:var(--cnt-bg);display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);width:100%}.tp-tbiv_b:hover{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active{background-color:var(--cnt-bg-a)}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) transparent transparent transparent;border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c,.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_i{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}');
            this.pool_.getAll().forEach(function (plugin) {
              _this48.embedPluginStyle_(plugin);
            });
            this.registerPlugin({
              plugins: [SliderBladePlugin, ListBladePlugin, TabBladePlugin, TextBladePlugin]
            });
          }
        }]);

        return Pane;
      }(RootApi);

      var VERSION = new Semver('3.1.0');
      exports.BladeApi = BladeApi;
      exports.ButtonApi = ButtonApi;
      exports.FolderApi = FolderApi;
      exports.InputBindingApi = InputBindingApi;
      exports.ListApi = ListApi;
      exports.MonitorBindingApi = MonitorBindingApi;
      exports.Pane = Pane;
      exports.SeparatorApi = SeparatorApi;
      exports.SliderApi = SliderApi;
      exports.TabApi = TabApi;
      exports.TabPageApi = TabPageApi;
      exports.TextApi = TextApi;
      exports.TpChangeEvent = TpChangeEvent;
      exports.VERSION = VERSION;
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
    });
  })(tweakpane, tweakpane.exports);

  var tweakpaneTextareaPlugin$1 = {exports: {}};

  (function (module, exports) {
    (function (global, factory) {
      factory(exports) ;
    })(commonjsGlobal, function (exports) {

      function forceCast(v) {
        return v;
      }

      var PREFIX = 'tp';

      function ClassName(viewName) {
        var fn = function fn(opt_elementName, opt_modifier) {
          return [PREFIX, '-', viewName, 'v', opt_elementName ? "_".concat(opt_elementName) : '', opt_modifier ? "-".concat(opt_modifier) : ''].join('');
        };

        return fn;
      }

      function parseObject(value, keyToParserMap) {
        var keys = Object.keys(keyToParserMap);
        var result = keys.reduce(function (tmp, key) {
          if (tmp === undefined) {
            return undefined;
          }

          var parser = keyToParserMap[key];
          var result = parser(value[key]);
          return result.succeeded ? Object.assign(Object.assign({}, tmp), _defineProperty({}, key, result.value)) : undefined;
        }, {});
        return forceCast(result);
      }

      function parseArray(value, parseItem) {
        return value.reduce(function (tmp, item) {
          if (tmp === undefined) {
            return undefined;
          }

          var result = parseItem(item);

          if (!result.succeeded || result.value === undefined) {
            return undefined;
          }

          return [].concat(_toConsumableArray(tmp), [result.value]);
        }, []);
      }

      function isObject(value) {
        if (value === null) {
          return false;
        }

        return _typeof(value) === 'object';
      }

      function createParamsParserBuilder(parse) {
        return function (optional) {
          return function (v) {
            if (!optional && v === undefined) {
              return {
                succeeded: false,
                value: undefined
              };
            }

            if (optional && v === undefined) {
              return {
                succeeded: true,
                value: undefined
              };
            }

            var result = parse(v);
            return result !== undefined ? {
              succeeded: true,
              value: result
            } : {
              succeeded: false,
              value: undefined
            };
          };
        };
      }

      function createParamsParserBuilders(optional) {
        return {
          custom: function custom(parse) {
            return createParamsParserBuilder(parse)(optional);
          },
          "boolean": createParamsParserBuilder(function (v) {
            return typeof v === 'boolean' ? v : undefined;
          })(optional),
          number: createParamsParserBuilder(function (v) {
            return typeof v === 'number' ? v : undefined;
          })(optional),
          string: createParamsParserBuilder(function (v) {
            return typeof v === 'string' ? v : undefined;
          })(optional),
          "function": createParamsParserBuilder(function (v) {
            return typeof v === 'function' ? v : undefined;
          })(optional),
          constant: function constant(value) {
            return createParamsParserBuilder(function (v) {
              return v === value ? value : undefined;
            })(optional);
          },
          raw: createParamsParserBuilder(function (v) {
            return v;
          })(optional),
          object: function object(keyToParserMap) {
            return createParamsParserBuilder(function (v) {
              if (!isObject(v)) {
                return undefined;
              }

              return parseObject(v, keyToParserMap);
            })(optional);
          },
          array: function array(itemParser) {
            return createParamsParserBuilder(function (v) {
              if (!Array.isArray(v)) {
                return undefined;
              }

              return parseArray(v, itemParser);
            })(optional);
          }
        };
      }

      var ParamsParsers = {
        optional: createParamsParserBuilders(true),
        required: createParamsParserBuilders(false)
      };

      function parseParams(value, keyToParserMap) {
        var result = ParamsParsers.required.object(keyToParserMap)(value);
        return result.succeeded ? result.value : undefined;
      }

      var className = ClassName('txtr');

      var TextAreaView = /*#__PURE__*/function () {
        function TextAreaView(doc, config) {
          _classCallCheck(this, TextAreaView);

          this.onChange_ = this.onChange_.bind(this);
          this.element = doc.createElement('div');
          this.element.classList.add(className());
          config.viewProps.bindClassModifiers(this.element); //this.onChange_ = this.onChange_.bind(this);

          var inputElem = doc.createElement('textarea');
          inputElem.rows = config.lineCount;
          inputElem.cols = 22;
          inputElem.placeholder = config.placeholder;
          inputElem.classList.add(className('i'));
          config.viewProps.bindDisabled(inputElem);
          this.element.appendChild(inputElem);
          this.inputElement = inputElem;
          config.value.emitter.on('change', this.onChange_);
          this.value_ = config.value;
          this.refresh();
        }

        _createClass(TextAreaView, [{
          key: "refresh",
          value: function refresh() {
            this.inputElement.value = this.value_.rawValue;
          }
        }, {
          key: "onChange_",
          value: function onChange_() {
            this.refresh();
          }
        }]);

        return TextAreaView;
      }();
      /**
       * @hidden
       */


      var TextAreaController = /*#__PURE__*/function () {
        function TextAreaController(doc, config) {
          _classCallCheck(this, TextAreaController);

          this.onInputChange_ = this.onInputChange_.bind(this);
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.lineCount = config.lineCount;
          this.placeholder = config.placeholder; // console.log( this.lineCount )

          this.view = new TextAreaView(doc, {
            value: this.value,
            viewProps: this.viewProps,
            lineCount: this.lineCount,
            placeholder: this.placeholder
          });
          this.view.inputElement.addEventListener('keyup', this.onInputChange_);
        }

        _createClass(TextAreaController, [{
          key: "onInputChange_",
          value: function onInputChange_(e) {
            //console.log( e.key )
            //if( e.key === 'Enter' ){
            var inputElem = forceCast(e.currentTarget);
            var value = inputElem.value;
            this.value.rawValue = value;
            this.view.refresh(); //}
          }
        }]);

        return TextAreaController;
      }(); // NOTE: You can see JSDoc comments of `InputBindingPlugin` for details about each property
      //
      // `InputBindingPlugin<In, Ex, P>` means...
      // - The plugin receives the bound value as `Ex`,
      // - converts `Ex` into `In` and holds it
      // - P is the type of the parsed parameters
      //


      var TweakpaneTextareaPlugin = {
        id: 'input-template',
        // type: The plugin type.
        // - 'input': Input binding
        // - 'monitor': Monitor binding
        type: 'input',
        // This plugin template injects a compiled CSS by @rollup/plugin-replace
        // See rollup.config.js for details
        css: '.tp-txtrv{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-txtrv{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtrv:hover{background-color:var(--in-bg-h)}.tp-txtrv:focus{background-color:var(--in-bg-f)}.tp-txtrv:active{background-color:var(--in-bg-a)}.tp-txtrv:disabled{opacity:.5}.tp-txtrv{display:block;height:auto;padding-bottom:0;overflow:hidden;position:relative}.tp-txtrv.tp-v-disabled{opacity:.5}.tp-txtrv .tp-txtrv_i{font-family:var(--font-family);background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-size:11px;padding:4px;line-height:16px;min-width:0;width:100%;border:none;height:100%;resize:none;margin-bottom:-8px}.tp-txtrv .tp-txtrv_i:focus{outline:none}',
        accept: function accept(exValue, params) {
          if (typeof exValue !== 'string') {
            // Return null to deny the user input
            return null;
          } // Parse parameters object
          // console.log(params)


          var p = ParamsParsers;
          var result = parseParams(params, {
            // `view` option may be useful to provide a custom control for primitive values
            view: p.required.constant('textarea'),
            lineCount: p.optional.number,
            placeholder: p.optional.string
          });

          if (!result) {
            return null;
          } // Return a typed value and params to accept the user input


          return {
            initialValue: exValue,
            params: result
          };
        },
        binding: {
          reader: function reader(_args) {
            return function (exValue) {
              // Convert an external unknown value into the internal value
              return typeof exValue === 'string' ? exValue : '';
            };
          },
          writer: function writer(_args) {
            return function (target, inValue) {
              // Use `target.write()` to write the primitive value to the target,
              // or `target.writeProperty()` to write a property of the target
              target.write(inValue);
            };
          }
        },
        controller: function controller(args) {
          var _a, _b; // Create a controller for the plugin


          return new TextAreaController(args.document, {
            value: args.value,
            lineCount: (_a = args.params.lineCount) !== null && _a !== void 0 ? _a : 3,
            placeholder: (_b = args.params.placeholder) !== null && _b !== void 0 ? _b : 'Enter text here',
            viewProps: args.viewProps
          });
        }
      }; // Export your plugin(s) as constant `plugins`

      var plugins = [TweakpaneTextareaPlugin];
      exports.plugins = plugins;
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
    });
  })(tweakpaneTextareaPlugin$1, tweakpaneTextareaPlugin$1.exports);

  var tweakpaneTextareaPlugin = /*@__PURE__*/getDefaultExportFromCjs(tweakpaneTextareaPlugin$1.exports);

  var TextareaPlugin = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': tweakpaneTextareaPlugin
  }, [tweakpaneTextareaPlugin$1.exports]);

  var tweakpanePluginEssentials$1 = {exports: {}};

  (function (module, exports) {
    (function (global, factory) {
      factory(exports) ;
    })(commonjsGlobal, function (exports) {

      var BladeApi = /*#__PURE__*/function () {
        function BladeApi(controller) {
          _classCallCheck(this, BladeApi);

          this.controller_ = controller;
        }

        _createClass(BladeApi, [{
          key: "element",
          get: function get() {
            return this.controller_.view.element;
          }
        }, {
          key: "disabled",
          get: function get() {
            return this.controller_.viewProps.get('disabled');
          },
          set: function set(disabled) {
            this.controller_.viewProps.set('disabled', disabled);
          }
        }, {
          key: "hidden",
          get: function get() {
            return this.controller_.viewProps.get('hidden');
          },
          set: function set(hidden) {
            this.controller_.viewProps.set('hidden', hidden);
          }
        }, {
          key: "dispose",
          value: function dispose() {
            this.controller_.viewProps.set('disposed', true);
          }
        }]);

        return BladeApi;
      }();

      var TpEvent = /*#__PURE__*/_createClass(function TpEvent(target) {
        _classCallCheck(this, TpEvent);

        this.target = target;
      });

      var TpChangeEvent = /*#__PURE__*/function (_TpEvent) {
        _inherits(TpChangeEvent, _TpEvent);

        var _super = _createSuper(TpChangeEvent);

        function TpChangeEvent(target, value, presetKey, last) {
          var _this;

          _classCallCheck(this, TpChangeEvent);

          _this = _super.call(this, target);
          _this.value = value;
          _this.presetKey = presetKey;
          _this.last = last !== null && last !== void 0 ? last : true;
          return _this;
        }

        return _createClass(TpChangeEvent);
      }(TpEvent);

      function forceCast(v) {
        return v;
      }

      function isEmpty(value) {
        return value === null || value === undefined;
      }

      var CREATE_MESSAGE_MAP = {
        alreadydisposed: function alreadydisposed() {
          return 'View has been already disposed';
        },
        invalidparams: function invalidparams(context) {
          return "Invalid parameters for '".concat(context.name, "'");
        },
        nomatchingcontroller: function nomatchingcontroller(context) {
          return "No matching controller for '".concat(context.key, "'");
        },
        nomatchingview: function nomatchingview(context) {
          return "No matching view for '".concat(JSON.stringify(context.params), "'");
        },
        notbindable: function notbindable() {
          return "Value is not bindable";
        },
        propertynotfound: function propertynotfound(context) {
          return "Property '".concat(context.name, "' not found");
        },
        shouldneverhappen: function shouldneverhappen() {
          return 'This error should never happen';
        }
      };

      var TpError = /*#__PURE__*/function () {
        function TpError(config) {
          _classCallCheck(this, TpError);

          var _a;

          this.message = (_a = CREATE_MESSAGE_MAP[config.type](forceCast(config.context))) !== null && _a !== void 0 ? _a : 'Unexpected error';
          this.name = this.constructor.name;
          this.stack = new Error(this.message).stack;
          this.type = config.type;
        }

        _createClass(TpError, null, [{
          key: "alreadyDisposed",
          value: function alreadyDisposed() {
            return new TpError({
              type: 'alreadydisposed'
            });
          }
        }, {
          key: "notBindable",
          value: function notBindable() {
            return new TpError({
              type: 'notbindable'
            });
          }
        }, {
          key: "propertyNotFound",
          value: function propertyNotFound(name) {
            return new TpError({
              type: 'propertynotfound',
              context: {
                name: name
              }
            });
          }
        }, {
          key: "shouldNeverHappen",
          value: function shouldNeverHappen() {
            return new TpError({
              type: 'shouldneverhappen'
            });
          }
        }]);

        return TpError;
      }();

      var Emitter = /*#__PURE__*/function () {
        function Emitter() {
          _classCallCheck(this, Emitter);

          this.observers_ = {};
        }

        _createClass(Emitter, [{
          key: "on",
          value: function on(eventName, handler) {
            var observers = this.observers_[eventName];

            if (!observers) {
              observers = this.observers_[eventName] = [];
            }

            observers.push({
              handler: handler
            });
            return this;
          }
        }, {
          key: "off",
          value: function off(eventName, handler) {
            var observers = this.observers_[eventName];

            if (observers) {
              this.observers_[eventName] = observers.filter(function (observer) {
                return observer.handler !== handler;
              });
            }

            return this;
          }
        }, {
          key: "emit",
          value: function emit(eventName, event) {
            var observers = this.observers_[eventName];

            if (!observers) {
              return;
            }

            observers.forEach(function (observer) {
              observer.handler(event);
            });
          }
        }]);

        return Emitter;
      }();

      var PREFIX = 'tp';

      function ClassName(viewName) {
        var fn = function fn(opt_elementName, opt_modifier) {
          return [PREFIX, '-', viewName, 'v', opt_elementName ? "_".concat(opt_elementName) : '', opt_modifier ? "-".concat(opt_modifier) : ''].join('');
        };

        return fn;
      }

      function compose$1(h1, h2) {
        return function (input) {
          return h2(h1(input));
        };
      }

      function extractValue(ev) {
        return ev.rawValue;
      }

      function bindValue(value, applyValue) {
        value.emitter.on('change', compose$1(extractValue, applyValue));
        applyValue(value.rawValue);
      }

      function bindValueMap(valueMap, key, applyValue) {
        bindValue(valueMap.value(key), applyValue);
      }

      function applyClass(elem, className, active) {
        if (active) {
          elem.classList.add(className);
        } else {
          elem.classList.remove(className);
        }
      }

      function valueToClassName(elem, className) {
        return function (value) {
          applyClass(elem, className, value);
        };
      }

      function bindValueToTextContent(value, elem) {
        bindValue(value, function (text) {
          elem.textContent = text !== null && text !== void 0 ? text : '';
        });
      }

      var className$g = ClassName('btn');

      var ButtonView = /*#__PURE__*/_createClass(function ButtonView(doc, config) {
        _classCallCheck(this, ButtonView);

        this.element = doc.createElement('div');
        this.element.classList.add(className$g());
        config.viewProps.bindClassModifiers(this.element);
        var buttonElem = doc.createElement('button');
        buttonElem.classList.add(className$g('b'));
        config.viewProps.bindDisabled(buttonElem);
        this.element.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        var titleElem = doc.createElement('div');
        titleElem.classList.add(className$g('t'));
        bindValueToTextContent(config.props.value('title'), titleElem);
        this.buttonElement.appendChild(titleElem);
      });

      var ButtonController = /*#__PURE__*/function () {
        function ButtonController(doc, config) {
          _classCallCheck(this, ButtonController);

          this.emitter = new Emitter();
          this.onClick_ = this.onClick_.bind(this);
          this.props = config.props;
          this.viewProps = config.viewProps;
          this.view = new ButtonView(doc, {
            props: this.props,
            viewProps: this.viewProps
          });
          this.view.buttonElement.addEventListener('click', this.onClick_);
        }

        _createClass(ButtonController, [{
          key: "onClick_",
          value: function onClick_() {
            this.emitter.emit('click', {
              sender: this
            });
          }
        }]);

        return ButtonController;
      }();

      var BoundValue = /*#__PURE__*/function () {
        function BoundValue(initialValue, config) {
          _classCallCheck(this, BoundValue);

          var _a;

          this.constraint_ = config === null || config === void 0 ? void 0 : config.constraint;
          this.equals_ = (_a = config === null || config === void 0 ? void 0 : config.equals) !== null && _a !== void 0 ? _a : function (v1, v2) {
            return v1 === v2;
          };
          this.emitter = new Emitter();
          this.rawValue_ = initialValue;
        }

        _createClass(BoundValue, [{
          key: "constraint",
          get: function get() {
            return this.constraint_;
          }
        }, {
          key: "rawValue",
          get: function get() {
            return this.rawValue_;
          },
          set: function set(rawValue) {
            this.setRawValue(rawValue, {
              forceEmit: false,
              last: true
            });
          }
        }, {
          key: "setRawValue",
          value: function setRawValue(rawValue, options) {
            var opts = options !== null && options !== void 0 ? options : {
              forceEmit: false,
              last: true
            };
            var constrainedValue = this.constraint_ ? this.constraint_.constrain(rawValue) : rawValue;
            var changed = !this.equals_(this.rawValue_, constrainedValue);

            if (!changed && !opts.forceEmit) {
              return;
            }

            this.emitter.emit('beforechange', {
              sender: this
            });
            this.rawValue_ = constrainedValue;
            this.emitter.emit('change', {
              options: opts,
              rawValue: constrainedValue,
              sender: this
            });
          }
        }]);

        return BoundValue;
      }();

      var PrimitiveValue = /*#__PURE__*/function () {
        function PrimitiveValue(initialValue) {
          _classCallCheck(this, PrimitiveValue);

          this.emitter = new Emitter();
          this.value_ = initialValue;
        }

        _createClass(PrimitiveValue, [{
          key: "rawValue",
          get: function get() {
            return this.value_;
          },
          set: function set(value) {
            this.setRawValue(value, {
              forceEmit: false,
              last: true
            });
          }
        }, {
          key: "setRawValue",
          value: function setRawValue(value, options) {
            var opts = options !== null && options !== void 0 ? options : {
              forceEmit: false,
              last: true
            };

            if (this.value_ === value && !opts.forceEmit) {
              return;
            }

            this.emitter.emit('beforechange', {
              sender: this
            });
            this.value_ = value;
            this.emitter.emit('change', {
              options: opts,
              rawValue: this.value_,
              sender: this
            });
          }
        }]);

        return PrimitiveValue;
      }();

      function createValue(initialValue, config) {
        var constraint = config === null || config === void 0 ? void 0 : config.constraint;
        var equals = config === null || config === void 0 ? void 0 : config.equals;

        if (!constraint && !equals) {
          return new PrimitiveValue(initialValue);
        }

        return new BoundValue(initialValue, config);
      }

      var ValueMap = /*#__PURE__*/function () {
        function ValueMap(valueMap) {
          var _this2 = this;

          _classCallCheck(this, ValueMap);

          this.emitter = new Emitter();
          this.valMap_ = valueMap;

          var _loop = function _loop(key) {
            var v = _this2.valMap_[key];
            v.emitter.on('change', function () {
              _this2.emitter.emit('change', {
                key: key,
                sender: _this2
              });
            });
          };

          for (var key in this.valMap_) {
            _loop(key);
          }
        }

        _createClass(ValueMap, [{
          key: "get",
          value: function get(key) {
            return this.valMap_[key].rawValue;
          }
        }, {
          key: "set",
          value: function set(key, value) {
            this.valMap_[key].rawValue = value;
          }
        }, {
          key: "value",
          value: function value(key) {
            return this.valMap_[key];
          }
        }], [{
          key: "createCore",
          value: function createCore(initialValue) {
            var keys = Object.keys(initialValue);
            return keys.reduce(function (o, key) {
              return Object.assign(o, _defineProperty({}, key, createValue(initialValue[key])));
            }, {});
          }
        }, {
          key: "fromObject",
          value: function fromObject(initialValue) {
            var core = this.createCore(initialValue);
            return new ValueMap(core);
          }
        }]);

        return ValueMap;
      }();

      function parseObject(value, keyToParserMap) {
        var keys = Object.keys(keyToParserMap);
        var result = keys.reduce(function (tmp, key) {
          if (tmp === undefined) {
            return undefined;
          }

          var parser = keyToParserMap[key];
          var result = parser(value[key]);
          return result.succeeded ? Object.assign(Object.assign({}, tmp), _defineProperty({}, key, result.value)) : undefined;
        }, {});
        return forceCast(result);
      }

      function parseArray(value, parseItem) {
        return value.reduce(function (tmp, item) {
          if (tmp === undefined) {
            return undefined;
          }

          var result = parseItem(item);

          if (!result.succeeded || result.value === undefined) {
            return undefined;
          }

          return [].concat(_toConsumableArray(tmp), [result.value]);
        }, []);
      }

      function isObject(value) {
        if (value === null) {
          return false;
        }

        return _typeof(value) === 'object';
      }

      function createParamsParserBuilder(parse) {
        return function (optional) {
          return function (v) {
            if (!optional && v === undefined) {
              return {
                succeeded: false,
                value: undefined
              };
            }

            if (optional && v === undefined) {
              return {
                succeeded: true,
                value: undefined
              };
            }

            var result = parse(v);
            return result !== undefined ? {
              succeeded: true,
              value: result
            } : {
              succeeded: false,
              value: undefined
            };
          };
        };
      }

      function createParamsParserBuilders(optional) {
        return {
          custom: function custom(parse) {
            return createParamsParserBuilder(parse)(optional);
          },
          "boolean": createParamsParserBuilder(function (v) {
            return typeof v === 'boolean' ? v : undefined;
          })(optional),
          number: createParamsParserBuilder(function (v) {
            return typeof v === 'number' ? v : undefined;
          })(optional),
          string: createParamsParserBuilder(function (v) {
            return typeof v === 'string' ? v : undefined;
          })(optional),
          "function": createParamsParserBuilder(function (v) {
            return typeof v === 'function' ? v : undefined;
          })(optional),
          constant: function constant(value) {
            return createParamsParserBuilder(function (v) {
              return v === value ? value : undefined;
            })(optional);
          },
          raw: createParamsParserBuilder(function (v) {
            return v;
          })(optional),
          object: function object(keyToParserMap) {
            return createParamsParserBuilder(function (v) {
              if (!isObject(v)) {
                return undefined;
              }

              return parseObject(v, keyToParserMap);
            })(optional);
          },
          array: function array(itemParser) {
            return createParamsParserBuilder(function (v) {
              if (!Array.isArray(v)) {
                return undefined;
              }

              return parseArray(v, itemParser);
            })(optional);
          }
        };
      }

      var ParamsParsers = {
        optional: createParamsParserBuilders(true),
        required: createParamsParserBuilders(false)
      };

      function parseParams(value, keyToParserMap) {
        var result = ParamsParsers.required.object(keyToParserMap)(value);
        return result.succeeded ? result.value : undefined;
      }

      function disposeElement(elem) {
        if (elem && elem.parentElement) {
          elem.parentElement.removeChild(elem);
        }

        return null;
      }

      function getAllBladePositions() {
        return ['veryfirst', 'first', 'last', 'verylast'];
      }

      var className$f = ClassName('');
      var POS_TO_CLASS_NAME_MAP = {
        veryfirst: 'vfst',
        first: 'fst',
        last: 'lst',
        verylast: 'vlst'
      };

      var BladeController = /*#__PURE__*/function () {
        function BladeController(config) {
          var _this3 = this;

          _classCallCheck(this, BladeController);

          this.parent_ = null;
          this.blade = config.blade;
          this.view = config.view;
          this.viewProps = config.viewProps;
          var elem = this.view.element;
          this.blade.value('positions').emitter.on('change', function () {
            getAllBladePositions().forEach(function (pos) {
              elem.classList.remove(className$f(undefined, POS_TO_CLASS_NAME_MAP[pos]));
            });

            _this3.blade.get('positions').forEach(function (pos) {
              elem.classList.add(className$f(undefined, POS_TO_CLASS_NAME_MAP[pos]));
            });
          });
          this.viewProps.handleDispose(function () {
            disposeElement(elem);
          });
        }

        _createClass(BladeController, [{
          key: "parent",
          get: function get() {
            return this.parent_;
          }
        }]);

        return BladeController;
      }();

      var SVG_NS = 'http://www.w3.org/2000/svg';

      function forceReflow(element) {
        element.offsetHeight;
      }

      function disableTransitionTemporarily(element, callback) {
        var t = element.style.transition;
        element.style.transition = 'none';
        callback();
        element.style.transition = t;
      }

      function supportsTouch(doc) {
        return doc.ontouchstart !== undefined;
      }

      function removeChildNodes(element) {
        while (element.childNodes.length > 0) {
          element.removeChild(element.childNodes[0]);
        }
      }

      function findNextTarget(ev) {
        if (ev.relatedTarget) {
          return forceCast(ev.relatedTarget);
        }

        if ('explicitOriginalTarget' in ev) {
          return ev.explicitOriginalTarget;
        }

        return null;
      }

      var className$e = ClassName('lbl');

      function createLabelNode(doc, label) {
        var frag = doc.createDocumentFragment();
        var lineNodes = label.split('\n').map(function (line) {
          return doc.createTextNode(line);
        });
        lineNodes.forEach(function (lineNode, index) {
          if (index > 0) {
            frag.appendChild(doc.createElement('br'));
          }

          frag.appendChild(lineNode);
        });
        return frag;
      }

      var LabelView = /*#__PURE__*/_createClass(function LabelView(doc, config) {
        var _this4 = this;

        _classCallCheck(this, LabelView);

        this.element = doc.createElement('div');
        this.element.classList.add(className$e());
        config.viewProps.bindClassModifiers(this.element);
        var labelElem = doc.createElement('div');
        labelElem.classList.add(className$e('l'));
        bindValueMap(config.props, 'label', function (value) {
          if (isEmpty(value)) {
            _this4.element.classList.add(className$e(undefined, 'nol'));
          } else {
            _this4.element.classList.remove(className$e(undefined, 'nol'));

            removeChildNodes(labelElem);
            labelElem.appendChild(createLabelNode(doc, value));
          }
        });
        this.element.appendChild(labelElem);
        this.labelElement = labelElem;
        var valueElem = doc.createElement('div');
        valueElem.classList.add(className$e('v'));
        this.element.appendChild(valueElem);
        this.valueElement = valueElem;
      });

      var LabelController = /*#__PURE__*/function (_BladeController) {
        _inherits(LabelController, _BladeController);

        var _super2 = _createSuper(LabelController);

        function LabelController(doc, config) {
          var _this5;

          _classCallCheck(this, LabelController);

          var viewProps = config.valueController.viewProps;
          _this5 = _super2.call(this, Object.assign(Object.assign({}, config), {
            view: new LabelView(doc, {
              props: config.props,
              viewProps: viewProps
            }),
            viewProps: viewProps
          }));
          _this5.props = config.props;
          _this5.valueController = config.valueController;

          _this5.view.valueElement.appendChild(_this5.valueController.view.element);

          return _this5;
        }

        return _createClass(LabelController);
      }(BladeController);

      var ValueBladeController = /*#__PURE__*/function (_BladeController2) {
        _inherits(ValueBladeController, _BladeController2);

        var _super3 = _createSuper(ValueBladeController);

        function ValueBladeController(config) {
          var _this6;

          _classCallCheck(this, ValueBladeController);

          _this6 = _super3.call(this, config);
          _this6.value = config.value;
          return _this6;
        }

        return _createClass(ValueBladeController);
      }(BladeController);

      var Foldable = /*#__PURE__*/function (_ValueMap) {
        _inherits(Foldable, _ValueMap);

        var _super4 = _createSuper(Foldable);

        function Foldable(valueMap) {
          _classCallCheck(this, Foldable);

          return _super4.call(this, valueMap);
        }

        _createClass(Foldable, [{
          key: "styleExpanded",
          get: function get() {
            var _a;

            return (_a = this.get('temporaryExpanded')) !== null && _a !== void 0 ? _a : this.get('expanded');
          }
        }, {
          key: "styleHeight",
          get: function get() {
            if (!this.styleExpanded) {
              return '0';
            }

            var exHeight = this.get('expandedHeight');

            if (this.get('shouldFixHeight') && !isEmpty(exHeight)) {
              return "".concat(exHeight, "px");
            }

            return 'auto';
          }
        }, {
          key: "bindExpandedClass",
          value: function bindExpandedClass(elem, expandedClassName) {
            var _this7 = this;

            var onExpand = function onExpand() {
              var expanded = _this7.styleExpanded;

              if (expanded) {
                elem.classList.add(expandedClassName);
              } else {
                elem.classList.remove(expandedClassName);
              }
            };

            bindValueMap(this, 'expanded', onExpand);
            bindValueMap(this, 'temporaryExpanded', onExpand);
          }
        }, {
          key: "cleanUpTransition",
          value: function cleanUpTransition() {
            this.set('shouldFixHeight', false);
            this.set('expandedHeight', null);
            this.set('completed', true);
          }
        }], [{
          key: "create",
          value: function create(expanded) {
            var coreObj = {
              completed: true,
              expanded: expanded,
              expandedHeight: null,
              shouldFixHeight: false,
              temporaryExpanded: null
            };
            var core = ValueMap.createCore(coreObj);
            return new Foldable(core);
          }
        }]);

        return Foldable;
      }(ValueMap);

      function createFoldable(expanded) {
        return Foldable.create(expanded);
      }

      function computeExpandedFolderHeight(folder, containerElement) {
        var height = 0;
        disableTransitionTemporarily(containerElement, function () {
          folder.set('expandedHeight', null);
          folder.set('temporaryExpanded', true);
          forceReflow(containerElement);
          height = containerElement.clientHeight;
          folder.set('temporaryExpanded', null);
          forceReflow(containerElement);
        });
        return height;
      }

      function applyHeight(foldable, elem) {
        elem.style.height = foldable.styleHeight;
      }

      function bindFoldable(foldable, elem) {
        foldable.value('expanded').emitter.on('beforechange', function () {
          foldable.set('completed', false);

          if (isEmpty(foldable.get('expandedHeight'))) {
            foldable.set('expandedHeight', computeExpandedFolderHeight(foldable, elem));
          }

          foldable.set('shouldFixHeight', true);
          forceReflow(elem);
        });
        foldable.emitter.on('change', function () {
          applyHeight(foldable, elem);
        });
        applyHeight(foldable, elem);
        elem.addEventListener('transitionend', function (ev) {
          if (ev.propertyName !== 'height') {
            return;
          }

          foldable.cleanUpTransition();
        });
      }

      var PlainView = /*#__PURE__*/_createClass(function PlainView(doc, config) {
        _classCallCheck(this, PlainView);

        var className = ClassName(config.viewName);
        this.element = doc.createElement('div');
        this.element.classList.add(className());
        config.viewProps.bindClassModifiers(this.element);
      });

      var LabeledValueController = /*#__PURE__*/function (_ValueBladeController) {
        _inherits(LabeledValueController, _ValueBladeController);

        var _super5 = _createSuper(LabeledValueController);

        function LabeledValueController(doc, config) {
          var _this8;

          _classCallCheck(this, LabeledValueController);

          var viewProps = config.valueController.viewProps;
          _this8 = _super5.call(this, Object.assign(Object.assign({}, config), {
            value: config.valueController.value,
            view: new LabelView(doc, {
              props: config.props,
              viewProps: viewProps
            }),
            viewProps: viewProps
          }));
          _this8.props = config.props;
          _this8.valueController = config.valueController;

          _this8.view.valueElement.appendChild(_this8.valueController.view.element);

          return _this8;
        }

        return _createClass(LabeledValueController);
      }(ValueBladeController);

      var className$d = ClassName('');

      function valueToModifier(elem, modifier) {
        return valueToClassName(elem, className$d(undefined, modifier));
      }

      var ViewProps = /*#__PURE__*/function (_ValueMap2) {
        _inherits(ViewProps, _ValueMap2);

        var _super6 = _createSuper(ViewProps);

        function ViewProps(valueMap) {
          _classCallCheck(this, ViewProps);

          return _super6.call(this, valueMap);
        }

        _createClass(ViewProps, [{
          key: "bindClassModifiers",
          value: function bindClassModifiers(elem) {
            bindValueMap(this, 'disabled', valueToModifier(elem, 'disabled'));
            bindValueMap(this, 'hidden', valueToModifier(elem, 'hidden'));
          }
        }, {
          key: "bindDisabled",
          value: function bindDisabled(target) {
            bindValueMap(this, 'disabled', function (disabled) {
              target.disabled = disabled;
            });
          }
        }, {
          key: "bindTabIndex",
          value: function bindTabIndex(elem) {
            bindValueMap(this, 'disabled', function (disabled) {
              elem.tabIndex = disabled ? -1 : 0;
            });
          }
        }, {
          key: "handleDispose",
          value: function handleDispose(callback) {
            this.value('disposed').emitter.on('change', function (disposed) {
              if (disposed) {
                callback();
              }
            });
          }
        }], [{
          key: "create",
          value: function create(opt_initialValue) {
            var _a, _b;

            var initialValue = opt_initialValue !== null && opt_initialValue !== void 0 ? opt_initialValue : {};
            var coreObj = {
              disabled: (_a = initialValue.disabled) !== null && _a !== void 0 ? _a : false,
              disposed: false,
              hidden: (_b = initialValue.hidden) !== null && _b !== void 0 ? _b : false
            };
            var core = ValueMap.createCore(coreObj);
            return new ViewProps(core);
          }
        }]);

        return ViewProps;
      }(ValueMap);

      var ManualTicker = /*#__PURE__*/function () {
        function ManualTicker() {
          _classCallCheck(this, ManualTicker);

          this.disabled = false;
          this.emitter = new Emitter();
        }

        _createClass(ManualTicker, [{
          key: "dispose",
          value: function dispose() {}
        }, {
          key: "tick",
          value: function tick() {
            if (this.disabled) {
              return;
            }

            this.emitter.emit('tick', {
              sender: this
            });
          }
        }]);

        return ManualTicker;
      }();

      var IntervalTicker = /*#__PURE__*/function () {
        function IntervalTicker(doc, interval) {
          _classCallCheck(this, IntervalTicker);

          this.disabled_ = false;
          this.timerId_ = null;
          this.onTick_ = this.onTick_.bind(this);
          this.doc_ = doc;
          this.emitter = new Emitter();
          this.interval_ = interval;
          this.setTimer_();
        }

        _createClass(IntervalTicker, [{
          key: "disabled",
          get: function get() {
            return this.disabled_;
          },
          set: function set(inactive) {
            this.disabled_ = inactive;

            if (this.disabled_) {
              this.clearTimer_();
            } else {
              this.setTimer_();
            }
          }
        }, {
          key: "dispose",
          value: function dispose() {
            this.clearTimer_();
          }
        }, {
          key: "clearTimer_",
          value: function clearTimer_() {
            if (this.timerId_ === null) {
              return;
            }

            var win = this.doc_.defaultView;

            if (win) {
              win.clearInterval(this.timerId_);
            }

            this.timerId_ = null;
          }
        }, {
          key: "setTimer_",
          value: function setTimer_() {
            this.clearTimer_();

            if (this.interval_ <= 0) {
              return;
            }

            var win = this.doc_.defaultView;

            if (win) {
              this.timerId_ = win.setInterval(this.onTick_, this.interval_);
            }
          }
        }, {
          key: "onTick_",
          value: function onTick_() {
            if (this.disabled_) {
              return;
            }

            this.emitter.emit('tick', {
              sender: this
            });
          }
        }]);

        return IntervalTicker;
      }();

      var CompositeConstraint = /*#__PURE__*/function () {
        function CompositeConstraint(constraints) {
          _classCallCheck(this, CompositeConstraint);

          this.constraints = constraints;
        }

        _createClass(CompositeConstraint, [{
          key: "constrain",
          value: function constrain(value) {
            return this.constraints.reduce(function (result, c) {
              return c.constrain(result);
            }, value);
          }
        }]);

        return CompositeConstraint;
      }();

      function findConstraint(c, constraintClass) {
        if (c instanceof constraintClass) {
          return c;
        }

        if (c instanceof CompositeConstraint) {
          var result = c.constraints.reduce(function (tmpResult, sc) {
            if (tmpResult) {
              return tmpResult;
            }

            return sc instanceof constraintClass ? sc : null;
          }, null);

          if (result) {
            return result;
          }
        }

        return null;
      }

      var RangeConstraint = /*#__PURE__*/function () {
        function RangeConstraint(config) {
          _classCallCheck(this, RangeConstraint);

          this.maxValue = config.max;
          this.minValue = config.min;
        }

        _createClass(RangeConstraint, [{
          key: "constrain",
          value: function constrain(value) {
            var result = value;

            if (!isEmpty(this.minValue)) {
              result = Math.max(result, this.minValue);
            }

            if (!isEmpty(this.maxValue)) {
              result = Math.min(result, this.maxValue);
            }

            return result;
          }
        }]);

        return RangeConstraint;
      }();

      var StepConstraint = /*#__PURE__*/function () {
        function StepConstraint(step) {
          var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          _classCallCheck(this, StepConstraint);

          this.step = step;
          this.origin = origin;
        }

        _createClass(StepConstraint, [{
          key: "constrain",
          value: function constrain(value) {
            var o = this.origin % this.step;
            var r = Math.round((value - o) / this.step);
            return o + r * this.step;
          }
        }]);

        return StepConstraint;
      }();

      var className$c = ClassName('pop');

      var PopupView = /*#__PURE__*/_createClass(function PopupView(doc, config) {
        _classCallCheck(this, PopupView);

        this.element = doc.createElement('div');
        this.element.classList.add(className$c());
        config.viewProps.bindClassModifiers(this.element);
        bindValue(config.shows, valueToClassName(this.element, className$c(undefined, 'v')));
      });

      var PopupController = /*#__PURE__*/_createClass(function PopupController(doc, config) {
        _classCallCheck(this, PopupController);

        this.shows = createValue(false);
        this.viewProps = config.viewProps;
        this.view = new PopupView(doc, {
          shows: this.shows,
          viewProps: this.viewProps
        });
      });

      var className$b = ClassName('txt');

      var TextView = /*#__PURE__*/function () {
        function TextView(doc, config) {
          _classCallCheck(this, TextView);

          this.onChange_ = this.onChange_.bind(this);
          this.element = doc.createElement('div');
          this.element.classList.add(className$b());
          config.viewProps.bindClassModifiers(this.element);
          this.props_ = config.props;
          this.props_.emitter.on('change', this.onChange_);
          var inputElem = doc.createElement('input');
          inputElem.classList.add(className$b('i'));
          inputElem.type = 'text';
          config.viewProps.bindDisabled(inputElem);
          this.element.appendChild(inputElem);
          this.inputElement = inputElem;
          config.value.emitter.on('change', this.onChange_);
          this.value_ = config.value;
          this.refresh();
        }

        _createClass(TextView, [{
          key: "refresh",
          value: function refresh() {
            var formatter = this.props_.get('formatter');
            this.inputElement.value = formatter(this.value_.rawValue);
          }
        }, {
          key: "onChange_",
          value: function onChange_() {
            this.refresh();
          }
        }]);

        return TextView;
      }();

      var TextController = /*#__PURE__*/function () {
        function TextController(doc, config) {
          _classCallCheck(this, TextController);

          this.onInputChange_ = this.onInputChange_.bind(this);
          this.parser_ = config.parser;
          this.props = config.props;
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.view = new TextView(doc, {
            props: config.props,
            value: this.value,
            viewProps: this.viewProps
          });
          this.view.inputElement.addEventListener('change', this.onInputChange_);
        }

        _createClass(TextController, [{
          key: "onInputChange_",
          value: function onInputChange_(e) {
            var inputElem = forceCast(e.currentTarget);
            var value = inputElem.value;
            var parsedValue = this.parser_(value);

            if (!isEmpty(parsedValue)) {
              this.value.rawValue = parsedValue;
            }

            this.view.refresh();
          }
        }]);

        return TextController;
      }();

      function boolFromUnknown(value) {
        if (value === 'false') {
          return false;
        }

        return !!value;
      }

      var NumberLiteralNode = /*#__PURE__*/function () {
        function NumberLiteralNode(text) {
          _classCallCheck(this, NumberLiteralNode);

          this.text = text;
        }

        _createClass(NumberLiteralNode, [{
          key: "evaluate",
          value: function evaluate() {
            return Number(this.text);
          }
        }, {
          key: "toString",
          value: function toString() {
            return this.text;
          }
        }]);

        return NumberLiteralNode;
      }();

      var BINARY_OPERATION_MAP = {
        '**': function _(v1, v2) {
          return Math.pow(v1, v2);
        },
        '*': function _(v1, v2) {
          return v1 * v2;
        },
        '/': function _(v1, v2) {
          return v1 / v2;
        },
        '%': function _(v1, v2) {
          return v1 % v2;
        },
        '+': function _(v1, v2) {
          return v1 + v2;
        },
        '-': function _(v1, v2) {
          return v1 - v2;
        },
        '<<': function _(v1, v2) {
          return v1 << v2;
        },
        '>>': function _(v1, v2) {
          return v1 >> v2;
        },
        '>>>': function _(v1, v2) {
          return v1 >>> v2;
        },
        '&': function _(v1, v2) {
          return v1 & v2;
        },
        '^': function _(v1, v2) {
          return v1 ^ v2;
        },
        '|': function _(v1, v2) {
          return v1 | v2;
        }
      };

      var BinaryOperationNode = /*#__PURE__*/function () {
        function BinaryOperationNode(operator, left, right) {
          _classCallCheck(this, BinaryOperationNode);

          this.left = left;
          this.operator = operator;
          this.right = right;
        }

        _createClass(BinaryOperationNode, [{
          key: "evaluate",
          value: function evaluate() {
            var op = BINARY_OPERATION_MAP[this.operator];

            if (!op) {
              throw new Error("unexpected binary operator: '".concat(this.operator));
            }

            return op(this.left.evaluate(), this.right.evaluate());
          }
        }, {
          key: "toString",
          value: function toString() {
            return ['b(', this.left.toString(), this.operator, this.right.toString(), ')'].join(' ');
          }
        }]);

        return BinaryOperationNode;
      }();

      var UNARY_OPERATION_MAP = {
        '+': function _(v) {
          return v;
        },
        '-': function _(v) {
          return -v;
        },
        '~': function _(v) {
          return ~v;
        }
      };

      var UnaryOperationNode = /*#__PURE__*/function () {
        function UnaryOperationNode(operator, expr) {
          _classCallCheck(this, UnaryOperationNode);

          this.operator = operator;
          this.expression = expr;
        }

        _createClass(UnaryOperationNode, [{
          key: "evaluate",
          value: function evaluate() {
            var op = UNARY_OPERATION_MAP[this.operator];

            if (!op) {
              throw new Error("unexpected unary operator: '".concat(this.operator));
            }

            return op(this.expression.evaluate());
          }
        }, {
          key: "toString",
          value: function toString() {
            return ['u(', this.operator, this.expression.toString(), ')'].join(' ');
          }
        }]);

        return UnaryOperationNode;
      }();

      function combineReader(parsers) {
        return function (text, cursor) {
          for (var i = 0; i < parsers.length; i++) {
            var result = parsers[i](text, cursor);

            if (result !== '') {
              return result;
            }
          }

          return '';
        };
      }

      function readWhitespace(text, cursor) {
        var _a;

        var m = text.substr(cursor).match(/^\s+/);
        return (_a = m && m[0]) !== null && _a !== void 0 ? _a : '';
      }

      function readNonZeroDigit(text, cursor) {
        var ch = text.substr(cursor, 1);
        return ch.match(/^[1-9]$/) ? ch : '';
      }

      function readDecimalDigits(text, cursor) {
        var _a;

        var m = text.substr(cursor).match(/^[0-9]+/);
        return (_a = m && m[0]) !== null && _a !== void 0 ? _a : '';
      }

      function readSignedInteger(text, cursor) {
        var ds = readDecimalDigits(text, cursor);

        if (ds !== '') {
          return ds;
        }

        var sign = text.substr(cursor, 1);
        cursor += 1;

        if (sign !== '-' && sign !== '+') {
          return '';
        }

        var sds = readDecimalDigits(text, cursor);

        if (sds === '') {
          return '';
        }

        return sign + sds;
      }

      function readExponentPart(text, cursor) {
        var e = text.substr(cursor, 1);
        cursor += 1;

        if (e.toLowerCase() !== 'e') {
          return '';
        }

        var si = readSignedInteger(text, cursor);

        if (si === '') {
          return '';
        }

        return e + si;
      }

      function readDecimalIntegerLiteral(text, cursor) {
        var ch = text.substr(cursor, 1);

        if (ch === '0') {
          return ch;
        }

        var nzd = readNonZeroDigit(text, cursor);
        cursor += nzd.length;

        if (nzd === '') {
          return '';
        }

        return nzd + readDecimalDigits(text, cursor);
      }

      function readDecimalLiteral1(text, cursor) {
        var dil = readDecimalIntegerLiteral(text, cursor);
        cursor += dil.length;

        if (dil === '') {
          return '';
        }

        var dot = text.substr(cursor, 1);
        cursor += dot.length;

        if (dot !== '.') {
          return '';
        }

        var dds = readDecimalDigits(text, cursor);
        cursor += dds.length;
        return dil + dot + dds + readExponentPart(text, cursor);
      }

      function readDecimalLiteral2(text, cursor) {
        var dot = text.substr(cursor, 1);
        cursor += dot.length;

        if (dot !== '.') {
          return '';
        }

        var dds = readDecimalDigits(text, cursor);
        cursor += dds.length;

        if (dds === '') {
          return '';
        }

        return dot + dds + readExponentPart(text, cursor);
      }

      function readDecimalLiteral3(text, cursor) {
        var dil = readDecimalIntegerLiteral(text, cursor);
        cursor += dil.length;

        if (dil === '') {
          return '';
        }

        return dil + readExponentPart(text, cursor);
      }

      var readDecimalLiteral = combineReader([readDecimalLiteral1, readDecimalLiteral2, readDecimalLiteral3]);

      function parseBinaryDigits(text, cursor) {
        var _a;

        var m = text.substr(cursor).match(/^[01]+/);
        return (_a = m && m[0]) !== null && _a !== void 0 ? _a : '';
      }

      function readBinaryIntegerLiteral(text, cursor) {
        var prefix = text.substr(cursor, 2);
        cursor += prefix.length;

        if (prefix.toLowerCase() !== '0b') {
          return '';
        }

        var bds = parseBinaryDigits(text, cursor);

        if (bds === '') {
          return '';
        }

        return prefix + bds;
      }

      function readOctalDigits(text, cursor) {
        var _a;

        var m = text.substr(cursor).match(/^[0-7]+/);
        return (_a = m && m[0]) !== null && _a !== void 0 ? _a : '';
      }

      function readOctalIntegerLiteral(text, cursor) {
        var prefix = text.substr(cursor, 2);
        cursor += prefix.length;

        if (prefix.toLowerCase() !== '0o') {
          return '';
        }

        var ods = readOctalDigits(text, cursor);

        if (ods === '') {
          return '';
        }

        return prefix + ods;
      }

      function readHexDigits(text, cursor) {
        var _a;

        var m = text.substr(cursor).match(/^[0-9a-f]+/i);
        return (_a = m && m[0]) !== null && _a !== void 0 ? _a : '';
      }

      function readHexIntegerLiteral(text, cursor) {
        var prefix = text.substr(cursor, 2);
        cursor += prefix.length;

        if (prefix.toLowerCase() !== '0x') {
          return '';
        }

        var hds = readHexDigits(text, cursor);

        if (hds === '') {
          return '';
        }

        return prefix + hds;
      }

      var readNonDecimalIntegerLiteral = combineReader([readBinaryIntegerLiteral, readOctalIntegerLiteral, readHexIntegerLiteral]);
      var readNumericLiteral = combineReader([readNonDecimalIntegerLiteral, readDecimalLiteral]);

      function parseLiteral(text, cursor) {
        var num = readNumericLiteral(text, cursor);
        cursor += num.length;

        if (num === '') {
          return null;
        }

        return {
          evaluable: new NumberLiteralNode(num),
          cursor: cursor
        };
      }

      function parseParenthesizedExpression(text, cursor) {
        var op = text.substr(cursor, 1);
        cursor += op.length;

        if (op !== '(') {
          return null;
        }

        var expr = parseExpression(text, cursor);

        if (!expr) {
          return null;
        }

        cursor = expr.cursor;
        cursor += readWhitespace(text, cursor).length;
        var cl = text.substr(cursor, 1);
        cursor += cl.length;

        if (cl !== ')') {
          return null;
        }

        return {
          evaluable: expr.evaluable,
          cursor: cursor
        };
      }

      function parsePrimaryExpression(text, cursor) {
        var _a;

        return (_a = parseLiteral(text, cursor)) !== null && _a !== void 0 ? _a : parseParenthesizedExpression(text, cursor);
      }

      function parseUnaryExpression(text, cursor) {
        var expr = parsePrimaryExpression(text, cursor);

        if (expr) {
          return expr;
        }

        var op = text.substr(cursor, 1);
        cursor += op.length;

        if (op !== '+' && op !== '-' && op !== '~') {
          return null;
        }

        var num = parseUnaryExpression(text, cursor);

        if (!num) {
          return null;
        }

        cursor = num.cursor;
        return {
          cursor: cursor,
          evaluable: new UnaryOperationNode(op, num.evaluable)
        };
      }

      function readBinaryOperator(ops, text, cursor) {
        cursor += readWhitespace(text, cursor).length;
        var op = ops.filter(function (op) {
          return text.startsWith(op, cursor);
        })[0];

        if (!op) {
          return null;
        }

        cursor += op.length;
        cursor += readWhitespace(text, cursor).length;
        return {
          cursor: cursor,
          operator: op
        };
      }

      function createBinaryOperationExpressionParser(exprParser, ops) {
        return function (text, cursor) {
          var firstExpr = exprParser(text, cursor);

          if (!firstExpr) {
            return null;
          }

          cursor = firstExpr.cursor;
          var expr = firstExpr.evaluable;

          for (;;) {
            var op = readBinaryOperator(ops, text, cursor);

            if (!op) {
              break;
            }

            cursor = op.cursor;
            var nextExpr = exprParser(text, cursor);

            if (!nextExpr) {
              return null;
            }

            cursor = nextExpr.cursor;
            expr = new BinaryOperationNode(op.operator, expr, nextExpr.evaluable);
          }

          return expr ? {
            cursor: cursor,
            evaluable: expr
          } : null;
        };
      }

      var parseBinaryOperationExpression = [['**'], ['*', '/', '%'], ['+', '-'], ['<<', '>>>', '>>'], ['&'], ['^'], ['|']].reduce(function (parser, ops) {
        return createBinaryOperationExpressionParser(parser, ops);
      }, parseUnaryExpression);

      function parseExpression(text, cursor) {
        cursor += readWhitespace(text, cursor).length;
        return parseBinaryOperationExpression(text, cursor);
      }

      function parseEcmaNumberExpression(text) {
        var expr = parseExpression(text, 0);

        if (!expr) {
          return null;
        }

        var cursor = expr.cursor + readWhitespace(text, expr.cursor).length;

        if (cursor !== text.length) {
          return null;
        }

        return expr.evaluable;
      }

      function parseNumber(text) {
        var _a;

        var r = parseEcmaNumberExpression(text);
        return (_a = r === null || r === void 0 ? void 0 : r.evaluate()) !== null && _a !== void 0 ? _a : null;
      }

      function numberFromUnknown(value) {
        if (typeof value === 'number') {
          return value;
        }

        if (typeof value === 'string') {
          var pv = parseNumber(value);

          if (!isEmpty(pv)) {
            return pv;
          }
        }

        return 0;
      }

      function createNumberFormatter(digits) {
        return function (value) {
          return value.toFixed(Math.max(Math.min(digits, 20), 0));
        };
      }

      var innerFormatter = createNumberFormatter(0);

      function formatPercentage(value) {
        return innerFormatter(value) + '%';
      }

      function stringFromUnknown(value) {
        return String(value);
      }

      function fillBuffer(buffer, bufferSize) {
        while (buffer.length < bufferSize) {
          buffer.push(undefined);
        }
      }

      function initializeBuffer(bufferSize) {
        var buffer = [];
        fillBuffer(buffer, bufferSize);
        return createValue(buffer);
      }

      function createTrimmedBuffer(buffer) {
        var index = buffer.indexOf(undefined);
        return forceCast(index < 0 ? buffer : buffer.slice(0, index));
      }

      function createPushedBuffer(buffer, newValue) {
        var newBuffer = [].concat(_toConsumableArray(createTrimmedBuffer(buffer)), [newValue]);

        if (newBuffer.length > buffer.length) {
          newBuffer.splice(0, newBuffer.length - buffer.length);
        } else {
          fillBuffer(newBuffer, buffer.length);
        }

        return newBuffer;
      }

      function connectValues(_ref) {
        var primary = _ref.primary,
            secondary = _ref.secondary,
            forward = _ref.forward,
            backward = _ref.backward;
        var changing = false;

        function preventFeedback(callback) {
          if (changing) {
            return;
          }

          changing = true;
          callback();
          changing = false;
        }

        primary.emitter.on('change', function (ev) {
          preventFeedback(function () {
            secondary.setRawValue(forward(primary, secondary), ev.options);
          });
        });
        secondary.emitter.on('change', function (ev) {
          preventFeedback(function () {
            primary.setRawValue(backward(primary, secondary), ev.options);
          });
          preventFeedback(function () {
            secondary.setRawValue(forward(primary, secondary), ev.options);
          });
        });
        preventFeedback(function () {
          secondary.setRawValue(forward(primary, secondary), {
            forceEmit: false,
            last: true
          });
        });
      }

      function getStepForKey(baseStep, keys) {
        var step = baseStep * (keys.altKey ? 0.1 : 1) * (keys.shiftKey ? 10 : 1);

        if (keys.upKey) {
          return +step;
        } else if (keys.downKey) {
          return -step;
        }

        return 0;
      }

      function getVerticalStepKeys(ev) {
        return {
          altKey: ev.altKey,
          downKey: ev.key === 'ArrowDown',
          shiftKey: ev.shiftKey,
          upKey: ev.key === 'ArrowUp'
        };
      }

      function getHorizontalStepKeys(ev) {
        return {
          altKey: ev.altKey,
          downKey: ev.key === 'ArrowLeft',
          shiftKey: ev.shiftKey,
          upKey: ev.key === 'ArrowRight'
        };
      }

      function isVerticalArrowKey(key) {
        return key === 'ArrowUp' || key === 'ArrowDown';
      }

      function isArrowKey(key) {
        return isVerticalArrowKey(key) || key === 'ArrowLeft' || key === 'ArrowRight';
      }

      function computeOffset(ev, elem) {
        var _a, _b;

        var win = elem.ownerDocument.defaultView;
        var rect = elem.getBoundingClientRect();
        return {
          x: ev.pageX - (((_a = win && win.scrollX) !== null && _a !== void 0 ? _a : 0) + rect.left),
          y: ev.pageY - (((_b = win && win.scrollY) !== null && _b !== void 0 ? _b : 0) + rect.top)
        };
      }

      var PointerHandler = /*#__PURE__*/function () {
        function PointerHandler(element) {
          _classCallCheck(this, PointerHandler);

          this.lastTouch_ = null;
          this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this);
          this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this);
          this.onMouseDown_ = this.onMouseDown_.bind(this);
          this.onTouchEnd_ = this.onTouchEnd_.bind(this);
          this.onTouchMove_ = this.onTouchMove_.bind(this);
          this.onTouchStart_ = this.onTouchStart_.bind(this);
          this.elem_ = element;
          this.emitter = new Emitter();
          element.addEventListener('touchstart', this.onTouchStart_, {
            passive: false
          });
          element.addEventListener('touchmove', this.onTouchMove_, {
            passive: true
          });
          element.addEventListener('touchend', this.onTouchEnd_);
          element.addEventListener('mousedown', this.onMouseDown_);
        }

        _createClass(PointerHandler, [{
          key: "computePosition_",
          value: function computePosition_(offset) {
            var rect = this.elem_.getBoundingClientRect();
            return {
              bounds: {
                width: rect.width,
                height: rect.height
              },
              point: offset ? {
                x: offset.x,
                y: offset.y
              } : null
            };
          }
        }, {
          key: "onMouseDown_",
          value: function onMouseDown_(ev) {
            var _a;

            ev.preventDefault();
            (_a = ev.currentTarget) === null || _a === void 0 ? void 0 : _a.focus();
            var doc = this.elem_.ownerDocument;
            doc.addEventListener('mousemove', this.onDocumentMouseMove_);
            doc.addEventListener('mouseup', this.onDocumentMouseUp_);
            this.emitter.emit('down', {
              altKey: ev.altKey,
              data: this.computePosition_(computeOffset(ev, this.elem_)),
              sender: this,
              shiftKey: ev.shiftKey
            });
          }
        }, {
          key: "onDocumentMouseMove_",
          value: function onDocumentMouseMove_(ev) {
            this.emitter.emit('move', {
              altKey: ev.altKey,
              data: this.computePosition_(computeOffset(ev, this.elem_)),
              sender: this,
              shiftKey: ev.shiftKey
            });
          }
        }, {
          key: "onDocumentMouseUp_",
          value: function onDocumentMouseUp_(ev) {
            var doc = this.elem_.ownerDocument;
            doc.removeEventListener('mousemove', this.onDocumentMouseMove_);
            doc.removeEventListener('mouseup', this.onDocumentMouseUp_);
            this.emitter.emit('up', {
              altKey: ev.altKey,
              data: this.computePosition_(computeOffset(ev, this.elem_)),
              sender: this,
              shiftKey: ev.shiftKey
            });
          }
        }, {
          key: "onTouchStart_",
          value: function onTouchStart_(ev) {
            ev.preventDefault();
            var touch = ev.targetTouches.item(0);
            var rect = this.elem_.getBoundingClientRect();
            this.emitter.emit('down', {
              altKey: ev.altKey,
              data: this.computePosition_(touch ? {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
              } : undefined),
              sender: this,
              shiftKey: ev.shiftKey
            });
            this.lastTouch_ = touch;
          }
        }, {
          key: "onTouchMove_",
          value: function onTouchMove_(ev) {
            var touch = ev.targetTouches.item(0);
            var rect = this.elem_.getBoundingClientRect();
            this.emitter.emit('move', {
              altKey: ev.altKey,
              data: this.computePosition_(touch ? {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
              } : undefined),
              sender: this,
              shiftKey: ev.shiftKey
            });
            this.lastTouch_ = touch;
          }
        }, {
          key: "onTouchEnd_",
          value: function onTouchEnd_(ev) {
            var _a;

            var touch = (_a = ev.targetTouches.item(0)) !== null && _a !== void 0 ? _a : this.lastTouch_;
            var rect = this.elem_.getBoundingClientRect();
            this.emitter.emit('up', {
              altKey: ev.altKey,
              data: this.computePosition_(touch ? {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
              } : undefined),
              sender: this,
              shiftKey: ev.shiftKey
            });
          }
        }]);

        return PointerHandler;
      }();

      function mapRange(value, start1, end1, start2, end2) {
        var p = (value - start1) / (end1 - start1);
        return start2 + p * (end2 - start2);
      }

      function getDecimalDigits(value) {
        var text = String(value.toFixed(10));
        var frac = text.split('.')[1];
        return frac.replace(/0+$/, '').length;
      }

      function constrainRange(value, min, max) {
        return Math.min(Math.max(value, min), max);
      }

      var className$a = ClassName('txt');

      var NumberTextView = /*#__PURE__*/function () {
        function NumberTextView(doc, config) {
          _classCallCheck(this, NumberTextView);

          this.onChange_ = this.onChange_.bind(this);
          this.props_ = config.props;
          this.props_.emitter.on('change', this.onChange_);
          this.element = doc.createElement('div');
          this.element.classList.add(className$a(), className$a(undefined, 'num'));

          if (config.arrayPosition) {
            this.element.classList.add(className$a(undefined, config.arrayPosition));
          }

          config.viewProps.bindClassModifiers(this.element);
          var inputElem = doc.createElement('input');
          inputElem.classList.add(className$a('i'));
          inputElem.type = 'text';
          config.viewProps.bindDisabled(inputElem);
          this.element.appendChild(inputElem);
          this.inputElement = inputElem;
          this.onDraggingChange_ = this.onDraggingChange_.bind(this);
          this.dragging_ = config.dragging;
          this.dragging_.emitter.on('change', this.onDraggingChange_);
          this.element.classList.add(className$a());
          this.inputElement.classList.add(className$a('i'));
          var knobElem = doc.createElement('div');
          knobElem.classList.add(className$a('k'));
          this.element.appendChild(knobElem);
          this.knobElement = knobElem;
          var guideElem = doc.createElementNS(SVG_NS, 'svg');
          guideElem.classList.add(className$a('g'));
          this.knobElement.appendChild(guideElem);
          var bodyElem = doc.createElementNS(SVG_NS, 'path');
          bodyElem.classList.add(className$a('gb'));
          guideElem.appendChild(bodyElem);
          this.guideBodyElem_ = bodyElem;
          var headElem = doc.createElementNS(SVG_NS, 'path');
          headElem.classList.add(className$a('gh'));
          guideElem.appendChild(headElem);
          this.guideHeadElem_ = headElem;
          var tooltipElem = doc.createElement('div');
          tooltipElem.classList.add(ClassName('tt')());
          this.knobElement.appendChild(tooltipElem);
          this.tooltipElem_ = tooltipElem;
          config.value.emitter.on('change', this.onChange_);
          this.value = config.value;
          this.refresh();
        }

        _createClass(NumberTextView, [{
          key: "onDraggingChange_",
          value: function onDraggingChange_(ev) {
            if (ev.rawValue === null) {
              this.element.classList.remove(className$a(undefined, 'drg'));
              return;
            }

            this.element.classList.add(className$a(undefined, 'drg'));
            var x = ev.rawValue / this.props_.get('draggingScale');
            var aox = x + (x > 0 ? -1 : x < 0 ? +1 : 0);
            var adx = constrainRange(-aox, -4, +4);
            this.guideHeadElem_.setAttributeNS(null, 'd', ["M ".concat(aox + adx, ",0 L").concat(aox, ",4 L").concat(aox + adx, ",8"), "M ".concat(x, ",-1 L").concat(x, ",9")].join(' '));
            this.guideBodyElem_.setAttributeNS(null, 'd', "M 0,4 L".concat(x, ",4"));
            var formatter = this.props_.get('formatter');
            this.tooltipElem_.textContent = formatter(this.value.rawValue);
            this.tooltipElem_.style.left = "".concat(x, "px");
          }
        }, {
          key: "refresh",
          value: function refresh() {
            var formatter = this.props_.get('formatter');
            this.inputElement.value = formatter(this.value.rawValue);
          }
        }, {
          key: "onChange_",
          value: function onChange_() {
            this.refresh();
          }
        }]);

        return NumberTextView;
      }();

      var NumberTextController = /*#__PURE__*/function () {
        function NumberTextController(doc, config) {
          _classCallCheck(this, NumberTextController);

          var _a;

          this.originRawValue_ = 0;
          this.onInputChange_ = this.onInputChange_.bind(this);
          this.onInputKeyDown_ = this.onInputKeyDown_.bind(this);
          this.onInputKeyUp_ = this.onInputKeyUp_.bind(this);
          this.onPointerDown_ = this.onPointerDown_.bind(this);
          this.onPointerMove_ = this.onPointerMove_.bind(this);
          this.onPointerUp_ = this.onPointerUp_.bind(this);
          this.baseStep_ = config.baseStep;
          this.parser_ = config.parser;
          this.props = config.props;
          this.sliderProps_ = (_a = config.sliderProps) !== null && _a !== void 0 ? _a : null;
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.dragging_ = createValue(null);
          this.view = new NumberTextView(doc, {
            arrayPosition: config.arrayPosition,
            dragging: this.dragging_,
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
          });
          this.view.inputElement.addEventListener('change', this.onInputChange_);
          this.view.inputElement.addEventListener('keydown', this.onInputKeyDown_);
          this.view.inputElement.addEventListener('keyup', this.onInputKeyUp_);
          var ph = new PointerHandler(this.view.knobElement);
          ph.emitter.on('down', this.onPointerDown_);
          ph.emitter.on('move', this.onPointerMove_);
          ph.emitter.on('up', this.onPointerUp_);
        }

        _createClass(NumberTextController, [{
          key: "constrainValue_",
          value: function constrainValue_(value) {
            var _a, _b;

            var min = (_a = this.sliderProps_) === null || _a === void 0 ? void 0 : _a.get('minValue');
            var max = (_b = this.sliderProps_) === null || _b === void 0 ? void 0 : _b.get('maxValue');
            var v = value;

            if (min !== undefined) {
              v = Math.max(v, min);
            }

            if (max !== undefined) {
              v = Math.min(v, max);
            }

            return v;
          }
        }, {
          key: "onInputChange_",
          value: function onInputChange_(e) {
            var inputElem = forceCast(e.currentTarget);
            var value = inputElem.value;
            var parsedValue = this.parser_(value);

            if (!isEmpty(parsedValue)) {
              this.value.rawValue = this.constrainValue_(parsedValue);
            }

            this.view.refresh();
          }
        }, {
          key: "onInputKeyDown_",
          value: function onInputKeyDown_(ev) {
            var step = getStepForKey(this.baseStep_, getVerticalStepKeys(ev));

            if (step === 0) {
              return;
            }

            this.value.setRawValue(this.constrainValue_(this.value.rawValue + step), {
              forceEmit: false,
              last: false
            });
          }
        }, {
          key: "onInputKeyUp_",
          value: function onInputKeyUp_(ev) {
            var step = getStepForKey(this.baseStep_, getVerticalStepKeys(ev));

            if (step === 0) {
              return;
            }

            this.value.setRawValue(this.value.rawValue, {
              forceEmit: true,
              last: true
            });
          }
        }, {
          key: "onPointerDown_",
          value: function onPointerDown_() {
            this.originRawValue_ = this.value.rawValue;
            this.dragging_.rawValue = 0;
          }
        }, {
          key: "computeDraggingValue_",
          value: function computeDraggingValue_(data) {
            if (!data.point) {
              return null;
            }

            var dx = data.point.x - data.bounds.width / 2;
            return this.constrainValue_(this.originRawValue_ + dx * this.props.get('draggingScale'));
          }
        }, {
          key: "onPointerMove_",
          value: function onPointerMove_(ev) {
            var v = this.computeDraggingValue_(ev.data);

            if (v === null) {
              return;
            }

            this.value.setRawValue(v, {
              forceEmit: false,
              last: false
            });
            this.dragging_.rawValue = this.value.rawValue - this.originRawValue_;
          }
        }, {
          key: "onPointerUp_",
          value: function onPointerUp_(ev) {
            var v = this.computeDraggingValue_(ev.data);

            if (v === null) {
              return;
            }

            this.value.setRawValue(v, {
              forceEmit: true,
              last: true
            });
            this.dragging_.rawValue = null;
          }
        }]);

        return NumberTextController;
      }();

      function writePrimitive(target, value) {
        target.write(value);
      }

      function findStep(constraint) {
        var c = constraint ? findConstraint(constraint, StepConstraint) : null;

        if (!c) {
          return null;
        }

        return c.step;
      }

      function getSuitableDecimalDigits(constraint, rawValue) {
        var sc = constraint && findConstraint(constraint, StepConstraint);

        if (sc) {
          return getDecimalDigits(sc.step);
        }

        return Math.max(getDecimalDigits(rawValue), 2);
      }

      function getBaseStep(constraint) {
        var step = findStep(constraint);
        return step !== null && step !== void 0 ? step : 1;
      }

      function getSuitableDraggingScale(constraint, rawValue) {
        var _a;

        var sc = constraint && findConstraint(constraint, StepConstraint);
        var base = Math.abs((_a = sc === null || sc === void 0 ? void 0 : sc.step) !== null && _a !== void 0 ? _a : rawValue);
        return base === 0 ? 0.1 : Math.pow(10, Math.floor(Math.log10(base)) - 1);
      }

      function removeAlphaComponent(comps) {
        return [comps[0], comps[1], comps[2]];
      }

      function zerofill(comp) {
        var hex = constrainRange(Math.floor(comp), 0, 255).toString(16);
        return hex.length === 1 ? "0".concat(hex) : hex;
      }

      function colorToHexRgbString(value) {
        var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#';
        var hexes = removeAlphaComponent(value.getComponents('rgb')).map(zerofill).join('');
        return "".concat(prefix).concat(hexes);
      }

      function colorToHexRgbaString(value) {
        var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#';
        var rgbaComps = value.getComponents('rgb');
        var hexes = [rgbaComps[0], rgbaComps[1], rgbaComps[2], rgbaComps[3] * 255].map(zerofill).join('');
        return "".concat(prefix).concat(hexes);
      }

      function colorToFunctionalRgbString(value, opt_type) {
        var formatter = createNumberFormatter(opt_type === 'float' ? 2 : 0);
        var comps = removeAlphaComponent(value.getComponents('rgb', opt_type)).map(function (comp) {
          return formatter(comp);
        });
        return "rgb(".concat(comps.join(', '), ")");
      }

      function createFunctionalRgbColorFormatter(type) {
        return function (value) {
          return colorToFunctionalRgbString(value, type);
        };
      }

      function colorToFunctionalRgbaString(value, opt_type) {
        var aFormatter = createNumberFormatter(2);
        var rgbFormatter = createNumberFormatter(opt_type === 'float' ? 2 : 0);
        var comps = value.getComponents('rgb', opt_type).map(function (comp, index) {
          var formatter = index === 3 ? aFormatter : rgbFormatter;
          return formatter(comp);
        });
        return "rgba(".concat(comps.join(', '), ")");
      }

      function createFunctionalRgbaColorFormatter(type) {
        return function (value) {
          return colorToFunctionalRgbaString(value, type);
        };
      }

      function colorToFunctionalHslString(value) {
        var formatters = [createNumberFormatter(0), formatPercentage, formatPercentage];
        var comps = removeAlphaComponent(value.getComponents('hsl')).map(function (comp, index) {
          return formatters[index](comp);
        });
        return "hsl(".concat(comps.join(', '), ")");
      }

      function colorToFunctionalHslaString(value) {
        var formatters = [createNumberFormatter(0), formatPercentage, formatPercentage, createNumberFormatter(2)];
        var comps = value.getComponents('hsl').map(function (comp, index) {
          return formatters[index](comp);
        });
        return "hsla(".concat(comps.join(', '), ")");
      }

      function colorToObjectRgbString(value, type) {
        var formatter = createNumberFormatter(type === 'float' ? 2 : 0);
        var names = ['r', 'g', 'b'];
        var comps = removeAlphaComponent(value.getComponents('rgb', type)).map(function (comp, index) {
          return "".concat(names[index], ": ").concat(formatter(comp));
        });
        return "{".concat(comps.join(', '), "}");
      }

      function createObjectRgbColorFormatter(type) {
        return function (value) {
          return colorToObjectRgbString(value, type);
        };
      }

      function colorToObjectRgbaString(value, type) {
        var aFormatter = createNumberFormatter(2);
        var rgbFormatter = createNumberFormatter(type === 'float' ? 2 : 0);
        var names = ['r', 'g', 'b', 'a'];
        var comps = value.getComponents('rgb', type).map(function (comp, index) {
          var formatter = index === 3 ? aFormatter : rgbFormatter;
          return "".concat(names[index], ": ").concat(formatter(comp));
        });
        return "{".concat(comps.join(', '), "}");
      }

      function createObjectRgbaColorFormatter(type) {
        return function (value) {
          return colorToObjectRgbaString(value, type);
        };
      }

      [{
        format: {
          alpha: false,
          mode: 'rgb',
          notation: 'hex',
          type: 'int'
        },
        stringifier: colorToHexRgbString
      }, {
        format: {
          alpha: true,
          mode: 'rgb',
          notation: 'hex',
          type: 'int'
        },
        stringifier: colorToHexRgbaString
      }, {
        format: {
          alpha: false,
          mode: 'hsl',
          notation: 'func',
          type: 'int'
        },
        stringifier: colorToFunctionalHslString
      }, {
        format: {
          alpha: true,
          mode: 'hsl',
          notation: 'func',
          type: 'int'
        },
        stringifier: colorToFunctionalHslaString
      }].concat(_toConsumableArray(['int', 'float'].reduce(function (prev, type) {
        return [].concat(_toConsumableArray(prev), [{
          format: {
            alpha: false,
            mode: 'rgb',
            notation: 'func',
            type: type
          },
          stringifier: createFunctionalRgbColorFormatter(type)
        }, {
          format: {
            alpha: true,
            mode: 'rgb',
            notation: 'func',
            type: type
          },
          stringifier: createFunctionalRgbaColorFormatter(type)
        }, {
          format: {
            alpha: false,
            mode: 'rgb',
            notation: 'object',
            type: type
          },
          stringifier: createObjectRgbColorFormatter(type)
        }, {
          format: {
            alpha: true,
            mode: 'rgb',
            notation: 'object',
            type: type
          },
          stringifier: createObjectRgbaColorFormatter(type)
        }]);
      }, [])));

      var PointNdConstraint = /*#__PURE__*/function () {
        function PointNdConstraint(config) {
          _classCallCheck(this, PointNdConstraint);

          this.components = config.components;
          this.asm_ = config.assembly;
        }

        _createClass(PointNdConstraint, [{
          key: "constrain",
          value: function constrain(value) {
            var _this9 = this;

            var comps = this.asm_.toComponents(value).map(function (comp, index) {
              var _a, _b;

              return (_b = (_a = _this9.components[index]) === null || _a === void 0 ? void 0 : _a.constrain(comp)) !== null && _b !== void 0 ? _b : comp;
            });
            return this.asm_.fromComponents(comps);
          }
        }]);

        return PointNdConstraint;
      }();

      var className$9 = ClassName('pndtxt');

      var PointNdTextView = /*#__PURE__*/_createClass(function PointNdTextView(doc, config) {
        var _this10 = this;

        _classCallCheck(this, PointNdTextView);

        this.textViews = config.textViews;
        this.element = doc.createElement('div');
        this.element.classList.add(className$9());
        this.textViews.forEach(function (v) {
          var axisElem = doc.createElement('div');
          axisElem.classList.add(className$9('a'));
          axisElem.appendChild(v.element);

          _this10.element.appendChild(axisElem);
        });
      });

      function createAxisController(doc, config, index) {
        return new NumberTextController(doc, {
          arrayPosition: index === 0 ? 'fst' : index === config.axes.length - 1 ? 'lst' : 'mid',
          baseStep: config.axes[index].baseStep,
          parser: config.parser,
          props: config.axes[index].textProps,
          value: createValue(0, {
            constraint: config.axes[index].constraint
          }),
          viewProps: config.viewProps
        });
      }

      var PointNdTextController = /*#__PURE__*/_createClass(function PointNdTextController(doc, config) {
        var _this11 = this;

        _classCallCheck(this, PointNdTextController);

        this.value = config.value;
        this.viewProps = config.viewProps;
        this.acs_ = config.axes.map(function (_, index) {
          return createAxisController(doc, config, index);
        });
        this.acs_.forEach(function (c, index) {
          connectValues({
            primary: _this11.value,
            secondary: c.value,
            forward: function forward(p) {
              return config.assembly.toComponents(p.rawValue)[index];
            },
            backward: function backward(p, s) {
              var comps = config.assembly.toComponents(p.rawValue);
              comps[index] = s.rawValue;
              return config.assembly.fromComponents(comps);
            }
          });
        });
        this.view = new PointNdTextView(doc, {
          textViews: this.acs_.map(function (ac) {
            return ac.view;
          })
        });
      });

      function createStepConstraint(params, initialValue) {
        if ('step' in params && !isEmpty(params.step)) {
          return new StepConstraint(params.step, initialValue);
        }

        return null;
      }

      function createRangeConstraint(params) {
        if ('max' in params && !isEmpty(params.max) || 'min' in params && !isEmpty(params.min)) {
          return new RangeConstraint({
            max: params.max,
            min: params.min
          });
        }

        return null;
      }

      var Constants = {
        monitor: {
          defaultInterval: 200,
          defaultLineCount: 3
        }
      };
      var className$8 = ClassName('grl');

      var GraphLogView = /*#__PURE__*/function () {
        function GraphLogView(doc, config) {
          _classCallCheck(this, GraphLogView);

          this.onCursorChange_ = this.onCursorChange_.bind(this);
          this.onValueUpdate_ = this.onValueUpdate_.bind(this);
          this.element = doc.createElement('div');
          this.element.classList.add(className$8());
          config.viewProps.bindClassModifiers(this.element);
          this.formatter_ = config.formatter;
          this.props_ = config.props;
          this.cursor_ = config.cursor;
          this.cursor_.emitter.on('change', this.onCursorChange_);
          var svgElem = doc.createElementNS(SVG_NS, 'svg');
          svgElem.classList.add(className$8('g'));
          svgElem.style.height = "calc(var(--bld-us) * ".concat(config.lineCount, ")");
          this.element.appendChild(svgElem);
          this.svgElem_ = svgElem;
          var lineElem = doc.createElementNS(SVG_NS, 'polyline');
          this.svgElem_.appendChild(lineElem);
          this.lineElem_ = lineElem;
          var tooltipElem = doc.createElement('div');
          tooltipElem.classList.add(className$8('t'), ClassName('tt')());
          this.element.appendChild(tooltipElem);
          this.tooltipElem_ = tooltipElem;
          config.value.emitter.on('change', this.onValueUpdate_);
          this.value = config.value;
          this.update_();
        }

        _createClass(GraphLogView, [{
          key: "graphElement",
          get: function get() {
            return this.svgElem_;
          }
        }, {
          key: "update_",
          value: function update_() {
            var bounds = this.svgElem_.getBoundingClientRect();
            var maxIndex = this.value.rawValue.length - 1;
            var min = this.props_.get('minValue');
            var max = this.props_.get('maxValue');
            var points = [];
            this.value.rawValue.forEach(function (v, index) {
              if (v === undefined) {
                return;
              }

              var x = mapRange(index, 0, maxIndex, 0, bounds.width);
              var y = mapRange(v, min, max, bounds.height, 0);
              points.push([x, y].join(','));
            });
            this.lineElem_.setAttributeNS(null, 'points', points.join(' '));
            var tooltipElem = this.tooltipElem_;
            var value = this.value.rawValue[this.cursor_.rawValue];

            if (value === undefined) {
              tooltipElem.classList.remove(className$8('t', 'a'));
              return;
            }

            var tx = mapRange(this.cursor_.rawValue, 0, maxIndex, 0, bounds.width);
            var ty = mapRange(value, min, max, bounds.height, 0);
            tooltipElem.style.left = "".concat(tx, "px");
            tooltipElem.style.top = "".concat(ty, "px");
            tooltipElem.textContent = "".concat(this.formatter_(value));

            if (!tooltipElem.classList.contains(className$8('t', 'a'))) {
              tooltipElem.classList.add(className$8('t', 'a'), className$8('t', 'in'));
              forceReflow(tooltipElem);
              tooltipElem.classList.remove(className$8('t', 'in'));
            }
          }
        }, {
          key: "onValueUpdate_",
          value: function onValueUpdate_() {
            this.update_();
          }
        }, {
          key: "onCursorChange_",
          value: function onCursorChange_() {
            this.update_();
          }
        }]);

        return GraphLogView;
      }();

      var GraphLogController = /*#__PURE__*/function () {
        function GraphLogController(doc, config) {
          _classCallCheck(this, GraphLogController);

          this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this);
          this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this);
          this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this);
          this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this);
          this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this);
          this.props_ = config.props;
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.cursor_ = createValue(-1);
          this.view = new GraphLogView(doc, {
            cursor: this.cursor_,
            formatter: config.formatter,
            lineCount: config.lineCount,
            props: this.props_,
            value: this.value,
            viewProps: this.viewProps
          });

          if (!supportsTouch(doc)) {
            this.view.element.addEventListener('mousemove', this.onGraphMouseMove_);
            this.view.element.addEventListener('mouseleave', this.onGraphMouseLeave_);
          } else {
            var ph = new PointerHandler(this.view.element);
            ph.emitter.on('down', this.onGraphPointerDown_);
            ph.emitter.on('move', this.onGraphPointerMove_);
            ph.emitter.on('up', this.onGraphPointerUp_);
          }
        }

        _createClass(GraphLogController, [{
          key: "onGraphMouseLeave_",
          value: function onGraphMouseLeave_() {
            this.cursor_.rawValue = -1;
          }
        }, {
          key: "onGraphMouseMove_",
          value: function onGraphMouseMove_(ev) {
            var bounds = this.view.element.getBoundingClientRect();
            this.cursor_.rawValue = Math.floor(mapRange(ev.offsetX, 0, bounds.width, 0, this.value.rawValue.length));
          }
        }, {
          key: "onGraphPointerDown_",
          value: function onGraphPointerDown_(ev) {
            this.onGraphPointerMove_(ev);
          }
        }, {
          key: "onGraphPointerMove_",
          value: function onGraphPointerMove_(ev) {
            if (!ev.data.point) {
              this.cursor_.rawValue = -1;
              return;
            }

            this.cursor_.rawValue = Math.floor(mapRange(ev.data.point.x, 0, ev.data.bounds.width, 0, this.value.rawValue.length));
          }
        }, {
          key: "onGraphPointerUp_",
          value: function onGraphPointerUp_() {
            this.cursor_.rawValue = -1;
          }
        }]);

        return GraphLogController;
      }();

      var ButtonCellApi = /*#__PURE__*/function () {
        function ButtonCellApi(controller) {
          _classCallCheck(this, ButtonCellApi);

          this.controller_ = controller;
        }

        _createClass(ButtonCellApi, [{
          key: "disabled",
          get: function get() {
            return this.controller_.viewProps.get('disabled');
          },
          set: function set(disabled) {
            this.controller_.viewProps.set('disabled', disabled);
          }
        }, {
          key: "title",
          get: function get() {
            var _a;

            return (_a = this.controller_.props.get('title')) !== null && _a !== void 0 ? _a : '';
          },
          set: function set(title) {
            this.controller_.props.set('title', title);
          }
        }, {
          key: "on",
          value: function on(eventName, handler) {
            var _this12 = this;

            var bh = handler.bind(this);
            var emitter = this.controller_.emitter;
            emitter.on(eventName, function () {
              bh(new TpEvent(_this12));
            });
            return this;
          }
        }]);

        return ButtonCellApi;
      }();

      var TpButtonGridEvent = /*#__PURE__*/function (_TpEvent2) {
        _inherits(TpButtonGridEvent, _TpEvent2);

        var _super7 = _createSuper(TpButtonGridEvent);

        function TpButtonGridEvent(target, cell, index) {
          var _this13;

          _classCallCheck(this, TpButtonGridEvent);

          _this13 = _super7.call(this, target);
          _this13.cell = cell;
          _this13.index = index;
          return _this13;
        }

        return _createClass(TpButtonGridEvent);
      }(TpEvent);

      var ButtonGridApi = /*#__PURE__*/function (_BladeApi) {
        _inherits(ButtonGridApi, _BladeApi);

        var _super8 = _createSuper(ButtonGridApi);

        function ButtonGridApi(controller) {
          var _this14;

          _classCallCheck(this, ButtonGridApi);

          _this14 = _super8.call(this, controller);
          _this14.cellToApiMap_ = new Map();
          _this14.emitter_ = new Emitter();
          var gc = _this14.controller_.valueController;
          gc.cellControllers.forEach(function (cc, i) {
            var api = new ButtonCellApi(cc);

            _this14.cellToApiMap_.set(cc, api);

            cc.emitter.on('click', function () {
              var x = i % gc.size[0];
              var y = Math.floor(i / gc.size[0]);

              _this14.emitter_.emit('click', {
                event: new TpButtonGridEvent(_assertThisInitialized(_this14), api, [x, y])
              });
            });
          });
          return _this14;
        }

        _createClass(ButtonGridApi, [{
          key: "cell",
          value: function cell(x, y) {
            var gc = this.controller_.valueController;
            var cc = gc.cellControllers[y * gc.size[0] + x];
            return this.cellToApiMap_.get(cc);
          }
        }, {
          key: "on",
          value: function on(eventName, handler) {
            var bh = handler.bind(this);
            this.emitter_.on(eventName, function (ev) {
              bh(ev.event);
            });
            return this;
          }
        }]);

        return ButtonGridApi;
      }(BladeApi);

      var ButtonGridController = /*#__PURE__*/function () {
        function ButtonGridController(doc, config) {
          var _this15 = this;

          _classCallCheck(this, ButtonGridController);

          this.size = config.size;

          var _this$size = _slicedToArray(this.size, 2),
              w = _this$size[0],
              h = _this$size[1];

          var bcs = [];

          for (var _y = 0; _y < h; _y++) {
            for (var x = 0; x < w; x++) {
              var bc = new ButtonController(doc, {
                props: ValueMap.fromObject(Object.assign({}, config.cellConfig(x, _y))),
                viewProps: ViewProps.create()
              });
              bcs.push(bc);
            }
          }

          this.cellCs_ = bcs;
          this.viewProps = ViewProps.create();
          this.viewProps.handleDispose(function () {
            _this15.cellCs_.forEach(function (c) {
              c.viewProps.set('disposed', true);
            });
          });
          this.view = new PlainView(doc, {
            viewProps: this.viewProps,
            viewName: 'btngrid'
          });
          this.view.element.style.gridTemplateColumns = "repeat(".concat(w, ", 1fr)");
          this.cellCs_.forEach(function (bc) {
            _this15.view.element.appendChild(bc.view.element);
          });
        }

        _createClass(ButtonGridController, [{
          key: "cellControllers",
          get: function get() {
            return this.cellCs_;
          }
        }]);

        return ButtonGridController;
      }();

      var ButtonGridBladePlugin = {
        id: 'buttongrid',
        type: 'blade',
        // TODO:
        css: '.tp-cbzgv,.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-radv_b:hover,.tp-rslv_k:hover,.tp-cbzv_b:hover{background-color:var(--btn-bg-h)}.tp-radv_b:focus,.tp-rslv_k:focus,.tp-cbzv_b:focus{background-color:var(--btn-bg-f)}.tp-radv_b:active,.tp-rslv_k:active,.tp-cbzv_b:active{background-color:var(--btn-bg-a)}.tp-radv_b:disabled,.tp-rslv_k:disabled,.tp-cbzv_b:disabled{opacity:.5}.tp-cbzgv{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-cbzgv:hover{background-color:var(--in-bg-h)}.tp-cbzgv:focus{background-color:var(--in-bg-f)}.tp-cbzgv:active{background-color:var(--in-bg-a)}.tp-cbzgv:disabled{opacity:.5}.tp-btngridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-btngridv.tp-v-disabled{opacity:.5}.tp-btngridv .tp-btnv_b:disabled{opacity:1}.tp-btngridv .tp-btnv_b:disabled .tp-btnv_t{opacity:.5}.tp-btngridv .tp-btnv_b{border-radius:0}.tp-cbzv{position:relative}.tp-cbzv_h{display:flex}.tp-cbzv_b{margin-right:4px;position:relative;width:var(--bld-us)}.tp-cbzv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-cbzv_b svg path{stroke:var(--bs-bg);stroke-width:2}.tp-cbzv_t{flex:1}.tp-cbzv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-cbzv.tp-cbzv-expanded .tp-cbzv_p{margin-top:var(--bld-s);opacity:1}.tp-cbzv.tp-cbzv-cpl .tp-cbzv_p{overflow:visible}.tp-cbzv .tp-popv{left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-cbzpv_t{margin-top:var(--bld-s)}.tp-cbzgv{height:auto;overflow:hidden;position:relative}.tp-cbzgv.tp-v-disabled{opacity:.5}.tp-cbzgv_p{left:16px;position:absolute;right:16px;top:0}.tp-cbzgv_g{cursor:pointer;display:block;height:calc(var(--bld-us)*5);width:100%}.tp-cbzgv_u{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_l{fill:rgba(0,0,0,0);stroke:var(--in-fg)}.tp-cbzgv_v{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_h{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;pointer-events:none;position:absolute;width:4px}.tp-cbzgv:focus .tp-cbzgv_h-sel{background-color:var(--in-fg);border-width:0}.tp-cbzprvv{cursor:pointer;height:4px;padding:4px 0;position:relative}.tp-cbzprvv_g{display:block;height:100%;overflow:visible;width:100%}.tp-cbzprvv_t{opacity:.5;stroke:var(--mo-fg)}.tp-cbzprvv_m{background-color:var(--mo-fg);border-radius:50%;height:4px;margin-left:-2px;margin-top:-2px;opacity:0;position:absolute;top:50%;transition:opacity .2s ease-out;width:4px}.tp-cbzprvv_m.tp-cbzprvv_m-a{opacity:1}.tp-fpsv{position:relative}.tp-fpsv_l{bottom:4px;color:var(--mo-fg);line-height:1;right:4px;pointer-events:none;position:absolute}.tp-fpsv_u{margin-left:.2em;opacity:.7}.tp-rslv{cursor:pointer;padding-left:8px;padding-right:8px}.tp-rslv.tp-v-disabled{opacity:.5}.tp-rslv_t{height:calc(var(--bld-us));position:relative}.tp-rslv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:-4px;right:-4px}.tp-rslv_b{bottom:0;top:0;position:absolute}.tp-rslv_b::before{background-color:var(--in-fg);content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:0;right:0}.tp-rslv_k{height:calc(var(--bld-us) - 8px);margin-top:calc((var(--bld-us) - 8px)/-2);position:absolute;top:50%;width:8px}.tp-rslv_k.tp-rslv_k-min{margin-left:-8px}.tp-rslv_k.tp-rslv_k-max{margin-left:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-min{border-bottom-right-radius:0;border-top-right-radius:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-max{border-bottom-left-radius:0;border-top-left-radius:0}.tp-rsltxtv{display:flex}.tp-rsltxtv_s{flex:1}.tp-rsltxtv_t{flex:1;margin-left:4px}.tp-radv_l{display:block;position:relative}.tp-radv_i{left:0;opacity:0;position:absolute;top:0}.tp-radv_b{opacity:.5}.tp-radv_i:hover+.tp-radv_b{background-color:var(--btn-bg-h)}.tp-radv_i:focus+.tp-radv_b{background-color:var(--btn-bg-f)}.tp-radv_i:active+.tp-radv_b{background-color:var(--btn-bg-a)}.tp-radv_i:checked+.tp-radv_b{opacity:1}.tp-radv_t{bottom:0;color:inherit;left:0;overflow:hidden;position:absolute;right:0;text-align:center;text-overflow:ellipsis;top:0}.tp-radv_i:disabled+.tp-radv_b>.tp-radv_t{opacity:.5}.tp-radgridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-radgridv.tp-v-disabled{opacity:.5}.tp-radgridv .tp-radv_b{border-radius:0}',
        accept: function accept(params) {
          var p = ParamsParsers;
          var result = parseParams(params, {
            cells: p.required["function"],
            size: p.required.array(p.required.number),
            view: p.required.constant('buttongrid'),
            label: p.optional.string
          });
          return result ? {
            params: result
          } : null;
        },
        controller: function controller(args) {
          return new LabelController(args.document, {
            blade: args.blade,
            props: ValueMap.fromObject({
              label: args.params.label
            }),
            valueController: new ButtonGridController(args.document, {
              cellConfig: args.params.cells,
              size: args.params.size
            })
          });
        },
        api: function api(args) {
          if (!(args.controller instanceof LabelController)) {
            return null;
          }

          if (!(args.controller.valueController instanceof ButtonGridController)) {
            return null;
          }

          return new ButtonGridApi(args.controller);
        }
      };

      var CubicBezierApi = /*#__PURE__*/function (_BladeApi2) {
        _inherits(CubicBezierApi, _BladeApi2);

        var _super9 = _createSuper(CubicBezierApi);

        function CubicBezierApi() {
          _classCallCheck(this, CubicBezierApi);

          return _super9.apply(this, arguments);
        }

        _createClass(CubicBezierApi, [{
          key: "label",
          get: function get() {
            return this.controller_.props.get('label');
          },
          set: function set(label) {
            this.controller_.props.set('label', label);
          }
        }, {
          key: "value",
          get: function get() {
            return this.controller_.valueController.value.rawValue;
          },
          set: function set(value) {
            this.controller_.valueController.value.rawValue = value;
          }
        }, {
          key: "on",
          value: function on(eventName, handler) {
            var _this16 = this;

            var bh = handler.bind(this);
            this.controller_.valueController.value.emitter.on(eventName, function (ev) {
              bh(new TpChangeEvent(_this16, ev.rawValue, undefined, ev.options.last));
            });
            return this;
          }
        }]);

        return CubicBezierApi;
      }(BladeApi);

      function interpolate(x1, x2, t) {
        return x1 * (1 - t) + x2 * t;
      }

      var MAX_ITERATION = 20;
      var X_DELTA = 0.001;
      var CACHE_RESOLUTION = 100;

      function _y2(cb, x) {
        var dt = 0.25;
        var t = 0.5;
        var y = -1;

        for (var i = 0; i < MAX_ITERATION; i++) {
          var _cb$curve = cb.curve(t),
              _cb$curve2 = _slicedToArray(_cb$curve, 2),
              tx = _cb$curve2[0],
              ty = _cb$curve2[1];

          t += dt * (tx < x ? +1 : -1);
          y = ty;
          dt *= 0.5;

          if (Math.abs(x - tx) < X_DELTA) {
            break;
          }
        }

        return y;
      }

      var CubicBezier = /*#__PURE__*/function () {
        function CubicBezier() {
          var x1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var y1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var x2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          var y2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

          _classCallCheck(this, CubicBezier);

          this.cache_ = [];
          this.comps_ = [x1, y1, x2, y2];
        }

        _createClass(CubicBezier, [{
          key: "x1",
          get: function get() {
            return this.comps_[0];
          }
        }, {
          key: "y1",
          get: function get() {
            return this.comps_[1];
          }
        }, {
          key: "x2",
          get: function get() {
            return this.comps_[2];
          }
        }, {
          key: "y2",
          get: function get() {
            return this.comps_[3];
          }
        }, {
          key: "curve",
          value: function curve(t) {
            var x01 = interpolate(0, this.x1, t);
            var y01 = interpolate(0, this.y1, t);
            var x12 = interpolate(this.x1, this.x2, t);
            var y12 = interpolate(this.y1, this.y2, t);
            var x23 = interpolate(this.x2, 1, t);
            var y23 = interpolate(this.y2, 1, t);
            var xr0 = interpolate(x01, x12, t);
            var yr0 = interpolate(y01, y12, t);
            var xr1 = interpolate(x12, x23, t);
            var yr1 = interpolate(y12, y23, t);
            return [interpolate(xr0, xr1, t), interpolate(yr0, yr1, t)];
          }
        }, {
          key: "y",
          value: function y(x) {
            if (this.cache_.length === 0) {
              var cache = [];

              for (var i = 0; i < CACHE_RESOLUTION; i++) {
                cache.push(_y2(this, mapRange(i, 0, CACHE_RESOLUTION - 1, 0, 1)));
              }

              this.cache_ = cache;
            }

            return this.cache_[Math.round(mapRange(constrainRange(x, 0, 1), 0, 1, 0, CACHE_RESOLUTION - 1))];
          }
        }, {
          key: "toObject",
          value: function toObject() {
            return [this.comps_[0], this.comps_[1], this.comps_[2], this.comps_[3]];
          }
        }], [{
          key: "isObject",
          value: function isObject(obj) {
            if (isEmpty(obj)) {
              return false;
            }

            if (!Array.isArray(obj)) {
              return false;
            }

            return typeof obj[0] === 'number' && typeof obj[1] === 'number' && typeof obj[2] === 'number' && typeof obj[3] === 'number';
          }
        }, {
          key: "equals",
          value: function equals(v1, v2) {
            return v1.x1 === v2.x1 && v1.y1 === v2.y1 && v1.x2 === v2.x2 && v1.y2 === v2.y2;
          }
        }]);

        return CubicBezier;
      }();

      var CubicBezierAssembly = {
        toComponents: function toComponents(p) {
          return p.toObject();
        },
        fromComponents: function fromComponents(comps) {
          return _construct(CubicBezier, _toConsumableArray(comps));
        }
      };

      function cubicBezierToString(cb) {
        var formatter = createNumberFormatter(2);
        var comps = cb.toObject().map(function (c) {
          return formatter(c);
        });
        return "cubic-bezier(".concat(comps.join(', '), ")");
      }

      var COMPS_EMPTY = [0, 0.5, 0.5, 1];

      function cubicBezierFromString(text) {
        var m = text.match(/^cubic-bezier\s*\(\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*\)$/);

        if (!m) {
          return _construct(CubicBezier, COMPS_EMPTY);
        }

        var comps = [m[1], m[2], m[3], m[4]].reduce(function (comps, comp) {
          if (!comps) {
            return null;
          }

          var n = Number(comp);

          if (isNaN(n)) {
            return null;
          }

          return [].concat(_toConsumableArray(comps), [n]);
        }, []);
        return _construct(CubicBezier, _toConsumableArray(comps !== null && comps !== void 0 ? comps : COMPS_EMPTY));
      }

      var className$7 = ClassName('cbz');

      var CubicBezierView = /*#__PURE__*/_createClass(function CubicBezierView(doc, config) {
        _classCallCheck(this, CubicBezierView);

        this.element = doc.createElement('div');
        this.element.classList.add(className$7());
        config.viewProps.bindClassModifiers(this.element);
        config.foldable.bindExpandedClass(this.element, className$7(undefined, 'expanded'));
        bindValueMap(config.foldable, 'completed', valueToClassName(this.element, className$7(undefined, 'cpl')));
        var headElem = doc.createElement('div');
        headElem.classList.add(className$7('h'));
        this.element.appendChild(headElem);
        var buttonElem = doc.createElement('button');
        buttonElem.classList.add(className$7('b'));
        config.viewProps.bindDisabled(buttonElem);
        var iconElem = doc.createElementNS(SVG_NS, 'svg');
        iconElem.innerHTML = '<path d="M2 13C8 13 8 3 14 3"/>';
        buttonElem.appendChild(iconElem);
        headElem.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        var textElem = doc.createElement('div');
        textElem.classList.add(className$7('t'));
        headElem.appendChild(textElem);
        this.textElement = textElem;

        if (config.pickerLayout === 'inline') {
          var pickerElem = doc.createElement('div');
          pickerElem.classList.add(className$7('p'));
          this.element.appendChild(pickerElem);
          this.pickerElement = pickerElem;
        } else {
          this.pickerElement = null;
        }
      });

      var className$6 = ClassName('cbzp');

      var CubicBezierPickerView = /*#__PURE__*/_createClass(function CubicBezierPickerView(doc, config) {
        _classCallCheck(this, CubicBezierPickerView);

        this.element = doc.createElement('div');
        this.element.classList.add(className$6());
        config.viewProps.bindClassModifiers(this.element);
        var graphElem = doc.createElement('div');
        graphElem.classList.add(className$6('g'));
        this.element.appendChild(graphElem);
        this.graphElement = graphElem;
        var textElem = doc.createElement('div');
        textElem.classList.add(className$6('t'));
        this.element.appendChild(textElem);
        this.textElement = textElem;
      });

      function waitToBeAddedToDom(elem, callback) {
        var ob = new MutationObserver(function (ml) {
          var _iterator = _createForOfIteratorHelper(ml),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var m = _step.value;

              if (m.type !== 'childList') {
                continue;
              }

              m.addedNodes.forEach(function (elem) {
                if (!elem.contains(elem)) {
                  return;
                }

                callback();
                ob.disconnect();
              });
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        });
        var doc = elem.ownerDocument;
        ob.observe(doc.body, {
          attributes: true,
          childList: true,
          subtree: true
        });
      }

      var className$5 = ClassName('cbzg'); // TODO: Apply to core

      function compose(h1, h2) {
        return function (input) {
          return h2(h1(input));
        };
      }

      var CubicBezierGraphView = /*#__PURE__*/function () {
        function CubicBezierGraphView(doc, config) {
          var _this17 = this;

          _classCallCheck(this, CubicBezierGraphView);

          this.element = doc.createElement('div');
          this.element.classList.add(className$5());
          config.viewProps.bindClassModifiers(this.element);
          config.viewProps.bindTabIndex(this.element);
          var previewElem = doc.createElement('div');
          previewElem.classList.add(className$5('p'));
          this.element.appendChild(previewElem);
          this.previewElement = previewElem;
          var svgElem = doc.createElementNS(SVG_NS, 'svg');
          svgElem.classList.add(className$5('g'));
          this.element.appendChild(svgElem);
          this.svgElem_ = svgElem;
          var guideElem = doc.createElementNS(SVG_NS, 'path');
          guideElem.classList.add(className$5('u'));
          this.svgElem_.appendChild(guideElem);
          this.guideElem_ = guideElem;
          var lineElem = doc.createElementNS(SVG_NS, 'polyline');
          lineElem.classList.add(className$5('l'));
          this.svgElem_.appendChild(lineElem);
          this.lineElem_ = lineElem;
          this.handleElems_ = [doc.createElement('div'), doc.createElement('div')];
          this.handleElems_.forEach(function (elem) {
            elem.classList.add(className$5('h'));

            _this17.element.appendChild(elem);
          });
          this.vectorElems_ = [doc.createElementNS(SVG_NS, 'line'), doc.createElementNS(SVG_NS, 'line')];
          this.vectorElems_.forEach(function (elem) {
            elem.classList.add(className$5('v'));

            _this17.svgElem_.appendChild(elem);
          });
          this.value_ = config.value;
          this.value_.emitter.on('change', this.onValueChange_.bind(this));
          this.sel_ = config.selection;
          this.handleElems_.forEach(function (elem, index) {
            bindValue(_this17.sel_, compose(function (selection) {
              return selection === index;
            }, valueToClassName(elem, className$5('h', 'sel'))));
          });
          waitToBeAddedToDom(this.element, function () {
            _this17.refresh();
          });
        }

        _createClass(CubicBezierGraphView, [{
          key: "getVertMargin_",
          value: function getVertMargin_(h) {
            return h * 0.25;
          }
        }, {
          key: "valueToPosition",
          value: function valueToPosition(x, y) {
            var bounds = this.element.getBoundingClientRect();
            var w = bounds.width;
            var h = bounds.height;
            var vm = this.getVertMargin_(h);
            return {
              x: mapRange(x, 0, 1, 0, w),
              y: mapRange(y, 0, 1, h - vm, vm)
            };
          }
        }, {
          key: "positionToValue",
          value: function positionToValue(x, y) {
            var bounds = this.element.getBoundingClientRect();
            var w = bounds.width;
            var h = bounds.height;
            var vm = this.getVertMargin_(h);
            return {
              x: constrainRange(mapRange(x, 0, w, 0, 1), 0, 1),
              y: mapRange(y, h - vm, vm, 0, 1)
            };
          }
        }, {
          key: "refresh",
          value: function refresh() {
            var _this18 = this;

            this.guideElem_.setAttributeNS(null, 'd', [0, 1].map(function (index) {
              var p1 = _this18.valueToPosition(0, index);

              var p2 = _this18.valueToPosition(1, index);

              return ["M ".concat(p1.x, ",").concat(p1.y), "L ".concat(p2.x, ",").concat(p2.y)].join(' ');
            }).join(' '));
            var bezier = this.value_.rawValue;
            var points = [];
            var t = 0;

            for (;;) {
              var p = this.valueToPosition.apply(this, _toConsumableArray(bezier.curve(t)));
              points.push([p.x, p.y].join(','));

              if (t >= 1) {
                break;
              }

              t = Math.min(t + 0.05, 1);
            }

            this.lineElem_.setAttributeNS(null, 'points', points.join(' '));
            var obj = bezier.toObject();
            [0, 1].forEach(function (index) {
              var p1 = _this18.valueToPosition(index, index);

              var p2 = _this18.valueToPosition(obj[index * 2], obj[index * 2 + 1]);

              var vElem = _this18.vectorElems_[index];
              vElem.setAttributeNS(null, 'x1', String(p1.x));
              vElem.setAttributeNS(null, 'y1', String(p1.y));
              vElem.setAttributeNS(null, 'x2', String(p2.x));
              vElem.setAttributeNS(null, 'y2', String(p2.y));
              var hElem = _this18.handleElems_[index];
              hElem.style.left = "".concat(p2.x, "px");
              hElem.style.top = "".concat(p2.y, "px");
            });
          }
        }, {
          key: "onValueChange_",
          value: function onValueChange_() {
            this.refresh();
          }
        }]);

        return CubicBezierGraphView;
      }();

      var TICK_COUNT = 24;
      var PREVIEW_DELAY = 400;
      var PREVIEW_DURATION = 1000;
      var className$4 = ClassName('cbzprv');

      var CubicBezierPreviewView = /*#__PURE__*/function () {
        function CubicBezierPreviewView(doc, config) {
          var _this19 = this;

          _classCallCheck(this, CubicBezierPreviewView);

          this.stopped_ = true;
          this.startTime_ = -1;
          this.onDispose_ = this.onDispose_.bind(this);
          this.onTimer_ = this.onTimer_.bind(this);
          this.onValueChange_ = this.onValueChange_.bind(this);
          this.element = doc.createElement('div');
          this.element.classList.add(className$4());
          config.viewProps.bindClassModifiers(this.element);
          var svgElem = doc.createElementNS(SVG_NS, 'svg');
          svgElem.classList.add(className$4('g'));
          this.element.appendChild(svgElem);
          this.svgElem_ = svgElem;
          var ticksElem = doc.createElementNS(SVG_NS, 'path');
          ticksElem.classList.add(className$4('t'));
          this.svgElem_.appendChild(ticksElem);
          this.ticksElem_ = ticksElem;
          var markerElem = doc.createElement('div');
          markerElem.classList.add(className$4('m'));
          this.element.appendChild(markerElem);
          this.markerElem_ = markerElem;
          this.value_ = config.value;
          this.value_.emitter.on('change', this.onValueChange_);
          config.viewProps.handleDispose(this.onDispose_);
          waitToBeAddedToDom(this.element, function () {
            _this19.refresh();
          });
        }

        _createClass(CubicBezierPreviewView, [{
          key: "play",
          value: function play() {
            this.stop();
            this.updateMarker_(0);
            this.markerElem_.classList.add(className$4('m', 'a'));
            this.startTime_ = new Date().getTime() + PREVIEW_DELAY;
            this.stopped_ = false;
            requestAnimationFrame(this.onTimer_);
          }
        }, {
          key: "stop",
          value: function stop() {
            this.stopped_ = true;
            this.markerElem_.classList.remove(className$4('m', 'a'));
          }
        }, {
          key: "onDispose_",
          value: function onDispose_() {
            this.stop();
          }
        }, {
          key: "updateMarker_",
          value: function updateMarker_(progress) {
            var p = this.value_.rawValue.y(constrainRange(progress, 0, 1));
            this.markerElem_.style.left = "".concat(p * 100, "%");
          }
        }, {
          key: "refresh",
          value: function refresh() {
            var bounds = this.svgElem_.getBoundingClientRect();
            var w = bounds.width;
            var h = bounds.height;
            var ds = [];
            var bezier = this.value_.rawValue;

            for (var i = 0; i < TICK_COUNT; i++) {
              var px = mapRange(i, 0, TICK_COUNT - 1, 0, 1);
              var x = mapRange(bezier.y(px), 0, 1, 0, w);
              ds.push("M ".concat(x, ",0 v").concat(h));
            }

            this.ticksElem_.setAttributeNS(null, 'd', ds.join(' '));
          }
        }, {
          key: "onTimer_",
          value: function onTimer_() {
            if (this.startTime_ === null) {
              return;
            }

            var dt = new Date().getTime() - this.startTime_;
            var p = dt / PREVIEW_DURATION;
            this.updateMarker_(p);

            if (dt > PREVIEW_DURATION + PREVIEW_DELAY) {
              this.stop();
            }

            if (!this.stopped_) {
              requestAnimationFrame(this.onTimer_);
            }
          }
        }, {
          key: "onValueChange_",
          value: function onValueChange_() {
            this.refresh();
            this.play();
          }
        }]);

        return CubicBezierPreviewView;
      }();

      function getDistance(x1, y1, x2, y2) {
        var dx = x2 - x1;
        var dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
      }

      function lockAngle(x1, y1, x2, y2) {
        var d = getDistance(x1, y1, x2, y2);
        var a = Math.atan2(y2 - y1, x2 - x1);
        var la = Math.round(a / (Math.PI / 4)) * Math.PI / 4;
        return {
          x: x1 + Math.cos(la) * d,
          y: y1 + Math.sin(la) * d
        };
      }

      var CubicBezierGraphController = /*#__PURE__*/function () {
        function CubicBezierGraphController(doc, config) {
          var _this20 = this;

          _classCallCheck(this, CubicBezierGraphController);

          this.onKeyDown_ = this.onKeyDown_.bind(this);
          this.onKeyUp_ = this.onKeyUp_.bind(this);
          this.onPointerDown_ = this.onPointerDown_.bind(this);
          this.onPointerMove_ = this.onPointerMove_.bind(this);
          this.onPointerUp_ = this.onPointerUp_.bind(this);
          this.baseStep_ = config.baseStep;
          this.value = config.value;
          this.sel_ = createValue(0);
          this.viewProps = config.viewProps;
          this.view = new CubicBezierGraphView(doc, {
            selection: this.sel_,
            value: this.value,
            viewProps: this.viewProps
          });
          this.view.element.addEventListener('keydown', this.onKeyDown_);
          this.view.element.addEventListener('keyup', this.onKeyUp_);
          this.prevView_ = new CubicBezierPreviewView(doc, {
            value: this.value,
            viewProps: this.viewProps
          });
          this.prevView_.element.addEventListener('mousedown', function (ev) {
            ev.stopImmediatePropagation();
            ev.preventDefault();

            _this20.prevView_.play();
          });
          this.view.previewElement.appendChild(this.prevView_.element);
          var ptHandler = new PointerHandler(this.view.element);
          ptHandler.emitter.on('down', this.onPointerDown_);
          ptHandler.emitter.on('move', this.onPointerMove_);
          ptHandler.emitter.on('up', this.onPointerUp_);
        }

        _createClass(CubicBezierGraphController, [{
          key: "refresh",
          value: function refresh() {
            this.view.refresh();
            this.prevView_.refresh();
            this.prevView_.play();
          }
        }, {
          key: "updateValue_",
          value: function updateValue_(point, locksAngle, opts) {
            var index = this.sel_.rawValue;
            var comps = this.value.rawValue.toObject();
            var vp = this.view.positionToValue(point.x, point.y);
            var v = locksAngle ? lockAngle(index, index, vp.x, vp.y) : vp;
            comps[index * 2] = v.x;
            comps[index * 2 + 1] = v.y;
            this.value.setRawValue(_construct(CubicBezier, _toConsumableArray(comps)), opts);
          }
        }, {
          key: "onPointerDown_",
          value: function onPointerDown_(ev) {
            var data = ev.data;

            if (!data.point) {
              return;
            }

            var bezier = this.value.rawValue;
            var p1 = this.view.valueToPosition(bezier.x1, bezier.y1);
            var d1 = getDistance(data.point.x, data.point.y, p1.x, p1.y);
            var p2 = this.view.valueToPosition(bezier.x2, bezier.y2);
            var d2 = getDistance(data.point.x, data.point.y, p2.x, p2.y);
            this.sel_.rawValue = d1 <= d2 ? 0 : 1;
            this.updateValue_(data.point, ev.shiftKey, {
              forceEmit: false,
              last: false
            });
          }
        }, {
          key: "onPointerMove_",
          value: function onPointerMove_(ev) {
            var data = ev.data;

            if (!data.point) {
              return;
            }

            this.updateValue_(data.point, ev.shiftKey, {
              forceEmit: false,
              last: false
            });
          }
        }, {
          key: "onPointerUp_",
          value: function onPointerUp_(ev) {
            var data = ev.data;

            if (!data.point) {
              return;
            }

            this.updateValue_(data.point, ev.shiftKey, {
              forceEmit: true,
              last: true
            });
          }
        }, {
          key: "onKeyDown_",
          value: function onKeyDown_(ev) {
            if (isArrowKey(ev.key)) {
              ev.preventDefault();
            }

            var index = this.sel_.rawValue;
            var comps = this.value.rawValue.toObject();
            comps[index * 2] += getStepForKey(this.baseStep_, getHorizontalStepKeys(ev));
            comps[index * 2 + 1] += getStepForKey(this.baseStep_, getVerticalStepKeys(ev));
            this.value.setRawValue(_construct(CubicBezier, _toConsumableArray(comps)), {
              forceEmit: false,
              last: false
            });
          }
        }, {
          key: "onKeyUp_",
          value: function onKeyUp_(ev) {
            if (isArrowKey(ev.key)) {
              ev.preventDefault();
            }

            var xStep = getStepForKey(this.baseStep_, getHorizontalStepKeys(ev));
            var yStep = getStepForKey(this.baseStep_, getVerticalStepKeys(ev));

            if (xStep === 0 && yStep === 0) {
              return;
            }

            this.value.setRawValue(this.value.rawValue, {
              forceEmit: true,
              last: true
            });
          }
        }]);

        return CubicBezierGraphController;
      }();

      var CubicBezierPickerController = /*#__PURE__*/function () {
        function CubicBezierPickerController(doc, config) {
          _classCallCheck(this, CubicBezierPickerController);

          this.value = config.value;
          this.viewProps = config.viewProps;
          this.view = new CubicBezierPickerView(doc, {
            viewProps: this.viewProps
          });
          this.gc_ = new CubicBezierGraphController(doc, {
            baseStep: config.axis.baseStep,
            value: this.value,
            viewProps: this.viewProps
          });
          this.view.graphElement.appendChild(this.gc_.view.element);
          var xAxis = Object.assign(Object.assign({}, config.axis), {
            constraint: new RangeConstraint({
              max: 1,
              min: 0
            })
          });
          var yAxis = Object.assign(Object.assign({}, config.axis), {
            constraint: undefined
          });
          this.tc_ = new PointNdTextController(doc, {
            assembly: CubicBezierAssembly,
            axes: [xAxis, yAxis, xAxis, yAxis],
            parser: parseNumber,
            value: this.value,
            viewProps: this.viewProps
          });
          this.view.textElement.appendChild(this.tc_.view.element);
        }

        _createClass(CubicBezierPickerController, [{
          key: "allFocusableElements",
          get: function get() {
            return [this.gc_.view.element].concat(_toConsumableArray(this.tc_.view.textViews.map(function (v) {
              return v.inputElement;
            })));
          }
        }, {
          key: "refresh",
          value: function refresh() {
            this.gc_.refresh();
          }
        }]);

        return CubicBezierPickerController;
      }();

      var CubicBezierController = /*#__PURE__*/function () {
        function CubicBezierController(doc, config) {
          var _this21 = this;

          _classCallCheck(this, CubicBezierController);

          this.onButtonBlur_ = this.onButtonBlur_.bind(this);
          this.onButtonClick_ = this.onButtonClick_.bind(this);
          this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this);
          this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this);
          this.value = config.value;
          this.viewProps = config.viewProps;
          this.foldable_ = createFoldable(config.expanded);
          this.view = new CubicBezierView(doc, {
            foldable: this.foldable_,
            pickerLayout: config.pickerLayout,
            viewProps: this.viewProps
          });
          this.view.buttonElement.addEventListener('blur', this.onButtonBlur_);
          this.view.buttonElement.addEventListener('click', this.onButtonClick_);
          this.tc_ = new TextController(doc, {
            parser: cubicBezierFromString,
            props: ValueMap.fromObject({
              formatter: cubicBezierToString
            }),
            value: this.value,
            viewProps: this.viewProps
          });
          this.view.textElement.appendChild(this.tc_.view.element);
          this.popC_ = config.pickerLayout === 'popup' ? new PopupController(doc, {
            viewProps: this.viewProps
          }) : null;
          var pickerC = new CubicBezierPickerController(doc, {
            axis: config.axis,
            value: this.value,
            viewProps: this.viewProps
          });
          pickerC.allFocusableElements.forEach(function (elem) {
            elem.addEventListener('blur', _this21.onPopupChildBlur_);
            elem.addEventListener('keydown', _this21.onPopupChildKeydown_);
          });
          this.pickerC_ = pickerC;

          if (this.popC_) {
            this.view.element.appendChild(this.popC_.view.element);
            this.popC_.view.element.appendChild(this.pickerC_.view.element);
            bindValue(this.popC_.shows, function (shows) {
              if (shows) {
                pickerC.refresh();
              }
            });
            connectValues({
              primary: this.foldable_.value('expanded'),
              secondary: this.popC_.shows,
              forward: function forward(p) {
                return p.rawValue;
              },
              backward: function backward(_, s) {
                return s.rawValue;
              }
            });
          } else if (this.view.pickerElement) {
            this.view.pickerElement.appendChild(this.pickerC_.view.element);
            bindFoldable(this.foldable_, this.view.pickerElement);
          }
        }

        _createClass(CubicBezierController, [{
          key: "onButtonBlur_",
          value: function onButtonBlur_(ev) {
            if (!this.popC_) {
              return;
            }

            var nextTarget = forceCast(ev.relatedTarget);

            if (!nextTarget || !this.popC_.view.element.contains(nextTarget)) {
              this.popC_.shows.rawValue = false;
            }
          }
        }, {
          key: "onButtonClick_",
          value: function onButtonClick_() {
            this.foldable_.set('expanded', !this.foldable_.get('expanded'));

            if (this.foldable_.get('expanded')) {
              this.pickerC_.allFocusableElements[0].focus();
            }
          }
        }, {
          key: "onPopupChildBlur_",
          value: function onPopupChildBlur_(ev) {
            if (!this.popC_) {
              return;
            }

            var elem = this.popC_.view.element;
            var nextTarget = findNextTarget(ev);

            if (nextTarget && elem.contains(nextTarget)) {
              // Next target is in the popup
              return;
            }

            if (nextTarget && nextTarget === this.view.buttonElement && !supportsTouch(elem.ownerDocument)) {
              // Next target is the trigger button
              return;
            }

            this.popC_.shows.rawValue = false;
          }
        }, {
          key: "onPopupChildKeydown_",
          value: function onPopupChildKeydown_(ev) {
            if (!this.popC_) {
              return;
            }

            if (ev.key === 'Escape') {
              this.popC_.shows.rawValue = false;
            }
          }
        }]);

        return CubicBezierController;
      }();

      function createConstraint$1() {
        return new PointNdConstraint({
          assembly: CubicBezierAssembly,
          components: [0, 1, 2, 3].map(function (index) {
            return index % 2 === 0 ? new RangeConstraint({
              min: 0,
              max: 1
            }) : undefined;
          })
        });
      }

      var CubicBezierBladePlugin = {
        id: 'cubic-bezier',
        type: 'blade',
        css: '.tp-cbzgv,.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-radv_b:hover,.tp-rslv_k:hover,.tp-cbzv_b:hover{background-color:var(--btn-bg-h)}.tp-radv_b:focus,.tp-rslv_k:focus,.tp-cbzv_b:focus{background-color:var(--btn-bg-f)}.tp-radv_b:active,.tp-rslv_k:active,.tp-cbzv_b:active{background-color:var(--btn-bg-a)}.tp-radv_b:disabled,.tp-rslv_k:disabled,.tp-cbzv_b:disabled{opacity:.5}.tp-cbzgv{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-cbzgv:hover{background-color:var(--in-bg-h)}.tp-cbzgv:focus{background-color:var(--in-bg-f)}.tp-cbzgv:active{background-color:var(--in-bg-a)}.tp-cbzgv:disabled{opacity:.5}.tp-btngridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-btngridv.tp-v-disabled{opacity:.5}.tp-btngridv .tp-btnv_b:disabled{opacity:1}.tp-btngridv .tp-btnv_b:disabled .tp-btnv_t{opacity:.5}.tp-btngridv .tp-btnv_b{border-radius:0}.tp-cbzv{position:relative}.tp-cbzv_h{display:flex}.tp-cbzv_b{margin-right:4px;position:relative;width:var(--bld-us)}.tp-cbzv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-cbzv_b svg path{stroke:var(--bs-bg);stroke-width:2}.tp-cbzv_t{flex:1}.tp-cbzv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-cbzv.tp-cbzv-expanded .tp-cbzv_p{margin-top:var(--bld-s);opacity:1}.tp-cbzv.tp-cbzv-cpl .tp-cbzv_p{overflow:visible}.tp-cbzv .tp-popv{left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-cbzpv_t{margin-top:var(--bld-s)}.tp-cbzgv{height:auto;overflow:hidden;position:relative}.tp-cbzgv.tp-v-disabled{opacity:.5}.tp-cbzgv_p{left:16px;position:absolute;right:16px;top:0}.tp-cbzgv_g{cursor:pointer;display:block;height:calc(var(--bld-us)*5);width:100%}.tp-cbzgv_u{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_l{fill:rgba(0,0,0,0);stroke:var(--in-fg)}.tp-cbzgv_v{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_h{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;pointer-events:none;position:absolute;width:4px}.tp-cbzgv:focus .tp-cbzgv_h-sel{background-color:var(--in-fg);border-width:0}.tp-cbzprvv{cursor:pointer;height:4px;padding:4px 0;position:relative}.tp-cbzprvv_g{display:block;height:100%;overflow:visible;width:100%}.tp-cbzprvv_t{opacity:.5;stroke:var(--mo-fg)}.tp-cbzprvv_m{background-color:var(--mo-fg);border-radius:50%;height:4px;margin-left:-2px;margin-top:-2px;opacity:0;position:absolute;top:50%;transition:opacity .2s ease-out;width:4px}.tp-cbzprvv_m.tp-cbzprvv_m-a{opacity:1}.tp-fpsv{position:relative}.tp-fpsv_l{bottom:4px;color:var(--mo-fg);line-height:1;right:4px;pointer-events:none;position:absolute}.tp-fpsv_u{margin-left:.2em;opacity:.7}.tp-rslv{cursor:pointer;padding-left:8px;padding-right:8px}.tp-rslv.tp-v-disabled{opacity:.5}.tp-rslv_t{height:calc(var(--bld-us));position:relative}.tp-rslv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:-4px;right:-4px}.tp-rslv_b{bottom:0;top:0;position:absolute}.tp-rslv_b::before{background-color:var(--in-fg);content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:0;right:0}.tp-rslv_k{height:calc(var(--bld-us) - 8px);margin-top:calc((var(--bld-us) - 8px)/-2);position:absolute;top:50%;width:8px}.tp-rslv_k.tp-rslv_k-min{margin-left:-8px}.tp-rslv_k.tp-rslv_k-max{margin-left:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-min{border-bottom-right-radius:0;border-top-right-radius:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-max{border-bottom-left-radius:0;border-top-left-radius:0}.tp-rsltxtv{display:flex}.tp-rsltxtv_s{flex:1}.tp-rsltxtv_t{flex:1;margin-left:4px}.tp-radv_l{display:block;position:relative}.tp-radv_i{left:0;opacity:0;position:absolute;top:0}.tp-radv_b{opacity:.5}.tp-radv_i:hover+.tp-radv_b{background-color:var(--btn-bg-h)}.tp-radv_i:focus+.tp-radv_b{background-color:var(--btn-bg-f)}.tp-radv_i:active+.tp-radv_b{background-color:var(--btn-bg-a)}.tp-radv_i:checked+.tp-radv_b{opacity:1}.tp-radv_t{bottom:0;color:inherit;left:0;overflow:hidden;position:absolute;right:0;text-align:center;text-overflow:ellipsis;top:0}.tp-radv_i:disabled+.tp-radv_b>.tp-radv_t{opacity:.5}.tp-radgridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-radgridv.tp-v-disabled{opacity:.5}.tp-radgridv .tp-radv_b{border-radius:0}',
        accept: function accept(params) {
          var p = ParamsParsers;
          var result = parseParams(params, {
            value: p.required.array(p.required.number),
            view: p.required.constant('cubicbezier'),
            expanded: p.optional["boolean"],
            label: p.optional.string,
            picker: p.optional.custom(function (v) {
              return v === 'inline' || v === 'popup' ? v : undefined;
            })
          });
          return result ? {
            params: result
          } : null;
        },
        controller: function controller(args) {
          var _a, _b;

          var rv = _construct(CubicBezier, _toConsumableArray(args.params.value));

          var v = createValue(rv, {
            constraint: createConstraint$1(),
            equals: CubicBezier.equals
          });
          var vc = new CubicBezierController(args.document, {
            axis: {
              baseStep: 0.1,
              textProps: ValueMap.fromObject({
                draggingScale: 0.01,
                formatter: createNumberFormatter(2)
              })
            },
            expanded: (_a = args.params.expanded) !== null && _a !== void 0 ? _a : false,
            pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : 'popup',
            value: v,
            viewProps: args.viewProps
          });
          return new LabeledValueController(args.document, {
            blade: args.blade,
            props: ValueMap.fromObject({
              label: args.params.label
            }),
            valueController: vc
          });
        },
        api: function api(args) {
          if (!(args.controller instanceof LabeledValueController)) {
            return null;
          }

          if (!(args.controller.valueController instanceof CubicBezierController)) {
            return null;
          }

          return new CubicBezierApi(args.controller);
        }
      };

      var FpsGraphBladeApi = /*#__PURE__*/function (_BladeApi3) {
        _inherits(FpsGraphBladeApi, _BladeApi3);

        var _super10 = _createSuper(FpsGraphBladeApi);

        function FpsGraphBladeApi() {
          _classCallCheck(this, FpsGraphBladeApi);

          return _super10.apply(this, arguments);
        }

        _createClass(FpsGraphBladeApi, [{
          key: "begin",
          value: function begin() {
            this.controller_.valueController.begin();
          }
        }, {
          key: "end",
          value: function end() {
            this.controller_.valueController.end();
          }
        }]);

        return FpsGraphBladeApi;
      }(BladeApi);

      var MAX_TIMESTAMPS = 20;

      var Fpswatch = /*#__PURE__*/function () {
        function Fpswatch() {
          _classCallCheck(this, Fpswatch);

          this.start_ = null;
          this.duration_ = 0;
          this.fps_ = null;
          this.frameCount_ = 0;
          this.timestamps_ = [];
        }

        _createClass(Fpswatch, [{
          key: "duration",
          get: function get() {
            return this.duration_;
          }
        }, {
          key: "fps",
          get: function get() {
            return this.fps_;
          }
        }, {
          key: "begin",
          value: function begin(now) {
            this.start_ = now.getTime();
          }
        }, {
          key: "calculateFps_",
          value: function calculateFps_(nowTime) {
            if (this.timestamps_.length === 0) {
              return null;
            }

            var ts = this.timestamps_[0];
            return 1000 * (this.frameCount_ - ts.frameCount) / (nowTime - ts.time);
          }
        }, {
          key: "compactTimestamps_",
          value: function compactTimestamps_() {
            if (this.timestamps_.length <= MAX_TIMESTAMPS) {
              return;
            }

            var len = this.timestamps_.length - MAX_TIMESTAMPS;
            this.timestamps_.splice(0, len);
            var df = this.timestamps_[0].frameCount;
            this.timestamps_.forEach(function (ts) {
              ts.frameCount -= df;
            });
            this.frameCount_ -= df;
          }
        }, {
          key: "end",
          value: function end(now) {
            if (this.start_ === null) {
              return;
            }

            var t = now.getTime();
            this.duration_ = t - this.start_;
            this.start_ = null;
            this.fps_ = this.calculateFps_(t);
            this.timestamps_.push({
              frameCount: this.frameCount_,
              time: t
            });
            ++this.frameCount_;
            this.compactTimestamps_();
          }
        }]);

        return Fpswatch;
      }();

      var className$3 = ClassName('fps');

      var FpsView = /*#__PURE__*/_createClass(function FpsView(doc, config) {
        _classCallCheck(this, FpsView);

        this.element = doc.createElement('div');
        this.element.classList.add(className$3());
        config.viewProps.bindClassModifiers(this.element);
        this.graphElement = doc.createElement('div');
        this.graphElement.classList.add(className$3('g'));
        this.element.appendChild(this.graphElement);
        var labelElement = doc.createElement('div');
        labelElement.classList.add(className$3('l'));
        this.element.appendChild(labelElement);
        var valueElement = doc.createElement('span');
        valueElement.classList.add(className$3('v'));
        valueElement.textContent = '--';
        labelElement.appendChild(valueElement);
        this.valueElement = valueElement;
        var unitElement = doc.createElement('span');
        unitElement.classList.add(className$3('u'));
        unitElement.textContent = 'FPS';
        labelElement.appendChild(unitElement);
      });

      var FpsGraphController = /*#__PURE__*/function () {
        function FpsGraphController(doc, config) {
          var _this22 = this;

          _classCallCheck(this, FpsGraphController);

          this.stopwatch_ = new Fpswatch();
          this.onTick_ = this.onTick_.bind(this);
          this.ticker_ = config.ticker;
          this.ticker_.emitter.on('tick', this.onTick_);
          this.value_ = config.value;
          this.viewProps = config.viewProps;
          this.view = new FpsView(doc, {
            viewProps: this.viewProps
          });
          this.graphC_ = new GraphLogController(doc, {
            formatter: createNumberFormatter(0),
            lineCount: config.lineCount,
            props: ValueMap.fromObject({
              maxValue: config.maxValue,
              minValue: config.minValue
            }),
            value: this.value_,
            viewProps: this.viewProps
          });
          this.view.graphElement.appendChild(this.graphC_.view.element);
          this.viewProps.handleDispose(function () {
            _this22.graphC_.viewProps.set('disposed', true);

            _this22.ticker_.dispose();
          });
        }

        _createClass(FpsGraphController, [{
          key: "begin",
          value: function begin() {
            this.stopwatch_.begin(new Date());
          }
        }, {
          key: "end",
          value: function end() {
            this.stopwatch_.end(new Date());
          }
        }, {
          key: "onTick_",
          value: function onTick_() {
            var fps = this.stopwatch_.fps;

            if (fps !== null) {
              var buffer = this.value_.rawValue;
              this.value_.rawValue = createPushedBuffer(buffer, fps);
              this.view.valueElement.textContent = fps.toFixed(0);
            }
          }
        }]);

        return FpsGraphController;
      }();

      function createTicker(document, interval) {
        return interval === 0 ? new ManualTicker() : new IntervalTicker(document, interval !== null && interval !== void 0 ? interval : Constants.monitor.defaultInterval);
      }

      var FpsGraphBladePlugin = {
        id: 'fpsgraph',
        type: 'blade',
        accept: function accept(params) {
          var p = ParamsParsers;
          var result = parseParams(params, {
            view: p.required.constant('fpsgraph'),
            interval: p.optional.number,
            label: p.optional.string,
            lineCount: p.optional.number,
            max: p.optional.number,
            min: p.optional.number
          });
          return result ? {
            params: result
          } : null;
        },
        controller: function controller(args) {
          var _a, _b, _c, _d;

          var interval = (_a = args.params.interval) !== null && _a !== void 0 ? _a : 500;
          return new LabelController(args.document, {
            blade: args.blade,
            props: ValueMap.fromObject({
              label: args.params.label
            }),
            valueController: new FpsGraphController(args.document, {
              lineCount: (_b = args.params.lineCount) !== null && _b !== void 0 ? _b : 2,
              maxValue: (_c = args.params.max) !== null && _c !== void 0 ? _c : 90,
              minValue: (_d = args.params.min) !== null && _d !== void 0 ? _d : 0,
              ticker: createTicker(args.document, interval),
              value: initializeBuffer(80),
              viewProps: args.viewProps
            })
          });
        },
        api: function api(args) {
          if (!(args.controller instanceof LabelController)) {
            return null;
          }

          if (!(args.controller.valueController instanceof FpsGraphController)) {
            return null;
          }

          return new FpsGraphBladeApi(args.controller);
        }
      };

      var Interval = /*#__PURE__*/function () {
        function Interval(min, max) {
          _classCallCheck(this, Interval);

          this.min = min;
          this.max = max;
        }

        _createClass(Interval, [{
          key: "length",
          get: function get() {
            return this.max - this.min;
          }
        }, {
          key: "toObject",
          value: function toObject() {
            return {
              min: this.min,
              max: this.max
            };
          }
        }], [{
          key: "isObject",
          value: function isObject(obj) {
            if (_typeof(obj) !== 'object' || obj === null) {
              return false;
            }

            var min = obj.min;
            var max = obj.max;

            if (typeof min !== 'number' || typeof max !== 'number') {
              return false;
            }

            return true;
          }
        }, {
          key: "equals",
          value: function equals(v1, v2) {
            return v1.min === v2.min && v1.max === v2.max;
          }
        }]);

        return Interval;
      }();

      var IntervalAssembly = {
        fromComponents: function fromComponents(comps) {
          return new Interval(comps[0], comps[1]);
        },
        toComponents: function toComponents(p) {
          return [p.min, p.max];
        }
      };

      var IntervalConstraint = /*#__PURE__*/function () {
        function IntervalConstraint(edge) {
          _classCallCheck(this, IntervalConstraint);

          this.edge = edge;
        }

        _createClass(IntervalConstraint, [{
          key: "constrain",
          value: function constrain(value) {
            var _a, _b, _c, _d, _e, _f, _g, _h;

            if (value.min <= value.max) {
              return new Interval((_b = (_a = this.edge) === null || _a === void 0 ? void 0 : _a.constrain(value.min)) !== null && _b !== void 0 ? _b : value.min, (_d = (_c = this.edge) === null || _c === void 0 ? void 0 : _c.constrain(value.max)) !== null && _d !== void 0 ? _d : value.max);
            }

            var c = (value.min + value.max) / 2;
            return new Interval((_f = (_e = this.edge) === null || _e === void 0 ? void 0 : _e.constrain(c)) !== null && _f !== void 0 ? _f : c, (_h = (_g = this.edge) === null || _g === void 0 ? void 0 : _g.constrain(c)) !== null && _h !== void 0 ? _h : c);
          }
        }]);

        return IntervalConstraint;
      }();

      var className$2 = ClassName('rsltxt');

      var RangeSliderTextView = /*#__PURE__*/_createClass(function RangeSliderTextView(doc, config) {
        _classCallCheck(this, RangeSliderTextView);

        this.sliderView_ = config.sliderView;
        this.textView_ = config.textView;
        this.element = doc.createElement('div');
        this.element.classList.add(className$2());
        var sliderElem = doc.createElement('div');
        sliderElem.classList.add(className$2('s'));
        sliderElem.appendChild(this.sliderView_.element);
        this.element.appendChild(sliderElem);
        var textElem = doc.createElement('div');
        textElem.classList.add(className$2('t'));
        textElem.appendChild(this.textView_.element);
        this.element.appendChild(textElem);
      });

      var className$1 = ClassName('rsl');

      var RangeSliderView = /*#__PURE__*/function () {
        function RangeSliderView(doc, config) {
          _classCallCheck(this, RangeSliderView);

          this.maxValue_ = config.maxValue;
          this.minValue_ = config.minValue;
          this.element = doc.createElement('div');
          this.element.classList.add(className$1());
          config.viewProps.bindClassModifiers(this.element);
          this.value_ = config.value;
          this.value_.emitter.on('change', this.onValueChange_.bind(this));
          var trackElem = doc.createElement('div');
          trackElem.classList.add(className$1('t'));
          this.element.appendChild(trackElem);
          this.trackElement = trackElem;
          var barElem = doc.createElement('div');
          barElem.classList.add(className$1('b'));
          trackElem.appendChild(barElem);
          this.barElement = barElem;
          var knobElems = ['min', 'max'].map(function (modifier) {
            var elem = doc.createElement('div');
            elem.classList.add(className$1('k'), className$1('k', modifier));
            trackElem.appendChild(elem);
            return elem;
          });
          this.knobElements = [knobElems[0], knobElems[1]];
          this.update();
        }

        _createClass(RangeSliderView, [{
          key: "valueToX_",
          value: function valueToX_(value) {
            return constrainRange(mapRange(value, this.minValue_, this.maxValue_, 0, 1), 0, 1) * 100;
          }
        }, {
          key: "update",
          value: function update() {
            var v = this.value_.rawValue;

            if (v.length === 0) {
              this.element.classList.add(className$1(undefined, 'zero'));
            } else {
              this.element.classList.remove(className$1(undefined, 'zero'));
            }

            var xs = [this.valueToX_(v.min), this.valueToX_(v.max)];
            this.barElement.style.left = "".concat(xs[0], "%");
            this.barElement.style.right = "".concat(100 - xs[1], "%");
            this.knobElements.forEach(function (elem, index) {
              elem.style.left = "".concat(xs[index], "%");
            });
          }
        }, {
          key: "onValueChange_",
          value: function onValueChange_() {
            this.update();
          }
        }]);

        return RangeSliderView;
      }();

      var RangeSliderController = /*#__PURE__*/function () {
        function RangeSliderController(doc, config) {
          _classCallCheck(this, RangeSliderController);

          this.grabbing_ = null;
          this.grabOffset_ = 0;
          this.onPointerDown_ = this.onPointerDown_.bind(this);
          this.onPointerMove_ = this.onPointerMove_.bind(this);
          this.onPointerUp_ = this.onPointerUp_.bind(this);
          this.maxValue_ = config.maxValue;
          this.minValue_ = config.minValue;
          this.viewProps = config.viewProps;
          this.value = config.value;
          this.view = new RangeSliderView(doc, {
            maxValue: config.maxValue,
            minValue: config.minValue,
            value: this.value,
            viewProps: config.viewProps
          });
          var ptHandler = new PointerHandler(this.view.trackElement);
          ptHandler.emitter.on('down', this.onPointerDown_);
          ptHandler.emitter.on('move', this.onPointerMove_);
          ptHandler.emitter.on('up', this.onPointerUp_);
        }

        _createClass(RangeSliderController, [{
          key: "ofs_",
          value: function ofs_() {
            if (this.grabbing_ === 'min') {
              return this.view.knobElements[0].getBoundingClientRect().width / 2;
            }

            if (this.grabbing_ === 'max') {
              return -this.view.knobElements[1].getBoundingClientRect().width / 2;
            }

            return 0;
          }
        }, {
          key: "valueFromData_",
          value: function valueFromData_(data) {
            if (!data.point) {
              return null;
            }

            var p = (data.point.x + this.ofs_()) / data.bounds.width;
            return mapRange(p, 0, 1, this.minValue_, this.maxValue_);
          }
        }, {
          key: "onPointerDown_",
          value: function onPointerDown_(ev) {
            if (!ev.data.point) {
              return;
            }

            var p = ev.data.point.x / ev.data.bounds.width;
            var v = this.value.rawValue;
            var pmin = mapRange(v.min, this.minValue_, this.maxValue_, 0, 1);
            var pmax = mapRange(v.max, this.minValue_, this.maxValue_, 0, 1);

            if (Math.abs(pmax - p) <= 0.025) {
              this.grabbing_ = 'max';
            } else if (Math.abs(pmin - p) <= 0.025) {
              this.grabbing_ = 'min';
            } else if (p >= pmin && p <= pmax) {
              this.grabbing_ = 'length';
              this.grabOffset_ = mapRange(p - pmin, 0, 1, 0, this.maxValue_ - this.minValue_);
            } else if (p < pmin) {
              this.grabbing_ = 'min';
              this.onPointerMove_(ev);
            } else if (p > pmax) {
              this.grabbing_ = 'max';
              this.onPointerMove_(ev);
            }
          }
        }, {
          key: "applyPointToValue_",
          value: function applyPointToValue_(data, opts) {
            var v = this.valueFromData_(data);

            if (v === null) {
              return;
            }

            if (this.grabbing_ === 'min') {
              this.value.setRawValue(new Interval(v, this.value.rawValue.max), opts);
            } else if (this.grabbing_ === 'max') {
              this.value.setRawValue(new Interval(this.value.rawValue.min, v), opts);
            } else if (this.grabbing_ === 'length') {
              var len = this.value.rawValue.length;
              var min = v - this.grabOffset_;
              var max = min + len;

              if (min < this.minValue_) {
                min = this.minValue_;
                max = this.minValue_ + len;
              } else if (max > this.maxValue_) {
                min = this.maxValue_ - len;
                max = this.maxValue_;
              }

              this.value.setRawValue(new Interval(min, max), opts);
            }
          }
        }, {
          key: "onPointerMove_",
          value: function onPointerMove_(ev) {
            this.applyPointToValue_(ev.data, {
              forceEmit: false,
              last: false
            });
          }
        }, {
          key: "onPointerUp_",
          value: function onPointerUp_(ev) {
            this.applyPointToValue_(ev.data, {
              forceEmit: true,
              last: true
            });
            this.grabbing_ = null;
          }
        }]);

        return RangeSliderController;
      }();

      var RangeSliderTextController = /*#__PURE__*/function () {
        function RangeSliderTextController(doc, config) {
          _classCallCheck(this, RangeSliderTextController);

          this.value = config.value;
          this.viewProps = config.viewProps;
          this.sc_ = new RangeSliderController(doc, config);
          var axis = {
            baseStep: config.baseStep,
            constraint: config.constraint,
            textProps: ValueMap.fromObject({
              draggingScale: config.draggingScale,
              formatter: config.formatter
            })
          };
          this.tc_ = new PointNdTextController(doc, {
            assembly: IntervalAssembly,
            axes: [axis, axis],
            parser: config.parser,
            value: this.value,
            viewProps: config.viewProps
          });
          this.view = new RangeSliderTextView(doc, {
            sliderView: this.sc_.view,
            textView: this.tc_.view
          });
        }

        _createClass(RangeSliderTextController, [{
          key: "textController",
          get: function get() {
            return this.tc_;
          }
        }]);

        return RangeSliderTextController;
      }();

      function intervalFromUnknown(value) {
        return Interval.isObject(value) ? new Interval(value.min, value.max) : new Interval(0, 0);
      }

      function writeInterval(target, value) {
        target.writeProperty('max', value.max);
        target.writeProperty('min', value.min);
      }

      function createConstraint(params) {
        var constraints = [];
        var rc = createRangeConstraint(params);

        if (rc) {
          constraints.push(rc);
        }

        var sc = createStepConstraint(params);

        if (sc) {
          constraints.push(sc);
        }

        return new IntervalConstraint(new CompositeConstraint(constraints));
      }

      var IntervalInputPlugin = {
        id: 'input-interval',
        type: 'input',
        css: '.tp-cbzgv,.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-radv_b:hover,.tp-rslv_k:hover,.tp-cbzv_b:hover{background-color:var(--btn-bg-h)}.tp-radv_b:focus,.tp-rslv_k:focus,.tp-cbzv_b:focus{background-color:var(--btn-bg-f)}.tp-radv_b:active,.tp-rslv_k:active,.tp-cbzv_b:active{background-color:var(--btn-bg-a)}.tp-radv_b:disabled,.tp-rslv_k:disabled,.tp-cbzv_b:disabled{opacity:.5}.tp-cbzgv{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-cbzgv:hover{background-color:var(--in-bg-h)}.tp-cbzgv:focus{background-color:var(--in-bg-f)}.tp-cbzgv:active{background-color:var(--in-bg-a)}.tp-cbzgv:disabled{opacity:.5}.tp-btngridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-btngridv.tp-v-disabled{opacity:.5}.tp-btngridv .tp-btnv_b:disabled{opacity:1}.tp-btngridv .tp-btnv_b:disabled .tp-btnv_t{opacity:.5}.tp-btngridv .tp-btnv_b{border-radius:0}.tp-cbzv{position:relative}.tp-cbzv_h{display:flex}.tp-cbzv_b{margin-right:4px;position:relative;width:var(--bld-us)}.tp-cbzv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-cbzv_b svg path{stroke:var(--bs-bg);stroke-width:2}.tp-cbzv_t{flex:1}.tp-cbzv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-cbzv.tp-cbzv-expanded .tp-cbzv_p{margin-top:var(--bld-s);opacity:1}.tp-cbzv.tp-cbzv-cpl .tp-cbzv_p{overflow:visible}.tp-cbzv .tp-popv{left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-cbzpv_t{margin-top:var(--bld-s)}.tp-cbzgv{height:auto;overflow:hidden;position:relative}.tp-cbzgv.tp-v-disabled{opacity:.5}.tp-cbzgv_p{left:16px;position:absolute;right:16px;top:0}.tp-cbzgv_g{cursor:pointer;display:block;height:calc(var(--bld-us)*5);width:100%}.tp-cbzgv_u{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_l{fill:rgba(0,0,0,0);stroke:var(--in-fg)}.tp-cbzgv_v{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_h{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;pointer-events:none;position:absolute;width:4px}.tp-cbzgv:focus .tp-cbzgv_h-sel{background-color:var(--in-fg);border-width:0}.tp-cbzprvv{cursor:pointer;height:4px;padding:4px 0;position:relative}.tp-cbzprvv_g{display:block;height:100%;overflow:visible;width:100%}.tp-cbzprvv_t{opacity:.5;stroke:var(--mo-fg)}.tp-cbzprvv_m{background-color:var(--mo-fg);border-radius:50%;height:4px;margin-left:-2px;margin-top:-2px;opacity:0;position:absolute;top:50%;transition:opacity .2s ease-out;width:4px}.tp-cbzprvv_m.tp-cbzprvv_m-a{opacity:1}.tp-fpsv{position:relative}.tp-fpsv_l{bottom:4px;color:var(--mo-fg);line-height:1;right:4px;pointer-events:none;position:absolute}.tp-fpsv_u{margin-left:.2em;opacity:.7}.tp-rslv{cursor:pointer;padding-left:8px;padding-right:8px}.tp-rslv.tp-v-disabled{opacity:.5}.tp-rslv_t{height:calc(var(--bld-us));position:relative}.tp-rslv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:-4px;right:-4px}.tp-rslv_b{bottom:0;top:0;position:absolute}.tp-rslv_b::before{background-color:var(--in-fg);content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:0;right:0}.tp-rslv_k{height:calc(var(--bld-us) - 8px);margin-top:calc((var(--bld-us) - 8px)/-2);position:absolute;top:50%;width:8px}.tp-rslv_k.tp-rslv_k-min{margin-left:-8px}.tp-rslv_k.tp-rslv_k-max{margin-left:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-min{border-bottom-right-radius:0;border-top-right-radius:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-max{border-bottom-left-radius:0;border-top-left-radius:0}.tp-rsltxtv{display:flex}.tp-rsltxtv_s{flex:1}.tp-rsltxtv_t{flex:1;margin-left:4px}.tp-radv_l{display:block;position:relative}.tp-radv_i{left:0;opacity:0;position:absolute;top:0}.tp-radv_b{opacity:.5}.tp-radv_i:hover+.tp-radv_b{background-color:var(--btn-bg-h)}.tp-radv_i:focus+.tp-radv_b{background-color:var(--btn-bg-f)}.tp-radv_i:active+.tp-radv_b{background-color:var(--btn-bg-a)}.tp-radv_i:checked+.tp-radv_b{opacity:1}.tp-radv_t{bottom:0;color:inherit;left:0;overflow:hidden;position:absolute;right:0;text-align:center;text-overflow:ellipsis;top:0}.tp-radv_i:disabled+.tp-radv_b>.tp-radv_t{opacity:.5}.tp-radgridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-radgridv.tp-v-disabled{opacity:.5}.tp-radgridv .tp-radv_b{border-radius:0}',
        accept: function accept(exValue, params) {
          if (!Interval.isObject(exValue)) {
            return null;
          }

          var p = ParamsParsers;
          var result = parseParams(params, {
            format: p.optional["function"],
            max: p.optional.number,
            min: p.optional.number,
            step: p.optional.number
          });
          return result ? {
            initialValue: new Interval(exValue.min, exValue.max),
            params: result
          } : null;
        },
        binding: {
          reader: function reader(_args) {
            return intervalFromUnknown;
          },
          constraint: function constraint(args) {
            return createConstraint(args.params);
          },
          equals: Interval.equals,
          writer: function writer(_args) {
            return writeInterval;
          }
        },
        controller: function controller(args) {
          var _a;

          var v = args.value;
          var c = args.constraint;

          if (!(c instanceof IntervalConstraint)) {
            throw TpError.shouldNeverHappen();
          }

          var midValue = (v.rawValue.min + v.rawValue.max) / 2;
          var formatter = (_a = args.params.format) !== null && _a !== void 0 ? _a : createNumberFormatter(getSuitableDecimalDigits(c.edge, midValue));
          var rc = c.edge && findConstraint(c.edge, RangeConstraint);

          if ((rc === null || rc === void 0 ? void 0 : rc.minValue) !== undefined && (rc === null || rc === void 0 ? void 0 : rc.maxValue) !== undefined) {
            return new RangeSliderTextController(args.document, {
              baseStep: getBaseStep(c.edge),
              constraint: c.edge,
              draggingScale: getSuitableDraggingScale(rc, midValue),
              formatter: formatter,
              maxValue: rc.maxValue,
              minValue: rc.minValue,
              parser: parseNumber,
              value: v,
              viewProps: args.viewProps
            });
          }

          var axis = {
            baseStep: getBaseStep(c.edge),
            constraint: c.edge,
            textProps: ValueMap.fromObject({
              draggingScale: midValue,
              formatter: formatter
            })
          };
          return new PointNdTextController(args.document, {
            assembly: IntervalAssembly,
            axes: [axis, axis],
            parser: parseNumber,
            value: v,
            viewProps: args.viewProps
          });
        }
      };

      var RadioCellApi = /*#__PURE__*/function () {
        function RadioCellApi(controller) {
          _classCallCheck(this, RadioCellApi);

          this.controller_ = controller;
        }

        _createClass(RadioCellApi, [{
          key: "disabled",
          get: function get() {
            return this.controller_.viewProps.get('disabled');
          },
          set: function set(disabled) {
            this.controller_.viewProps.set('disabled', disabled);
          }
        }, {
          key: "title",
          get: function get() {
            var _a;

            return (_a = this.controller_.props.get('title')) !== null && _a !== void 0 ? _a : '';
          },
          set: function set(title) {
            this.controller_.props.set('title', title);
          }
        }]);

        return RadioCellApi;
      }();

      var TpRadioGridChangeEvent = /*#__PURE__*/function (_TpChangeEvent) {
        _inherits(TpRadioGridChangeEvent, _TpChangeEvent);

        var _super11 = _createSuper(TpRadioGridChangeEvent);

        function TpRadioGridChangeEvent(target, cell, index, value, presetKey) {
          var _this23;

          _classCallCheck(this, TpRadioGridChangeEvent);

          _this23 = _super11.call(this, target, value, presetKey);
          _this23.cell = cell;
          _this23.index = index;
          return _this23;
        }

        return _createClass(TpRadioGridChangeEvent);
      }(TpChangeEvent);

      var RadioGridApi = /*#__PURE__*/function (_BladeApi4) {
        _inherits(RadioGridApi, _BladeApi4);

        var _super12 = _createSuper(RadioGridApi);

        function RadioGridApi(controller) {
          var _this24;

          _classCallCheck(this, RadioGridApi);

          _this24 = _super12.call(this, controller);
          _this24.cellToApiMap_ = new Map();
          var gc = _this24.controller_.valueController;
          gc.cellControllers.forEach(function (cc) {
            var api = new RadioCellApi(cc);

            _this24.cellToApiMap_.set(cc, api);
          });
          return _this24;
        }

        _createClass(RadioGridApi, [{
          key: "value",
          get: function get() {
            return this.controller_.value;
          }
        }, {
          key: "cell",
          value: function cell(x, y) {
            var gc = this.controller_.valueController;
            var cc = gc.cellControllers[y * gc.size[0] + x];
            return this.cellToApiMap_.get(cc);
          }
        }, {
          key: "on",
          value: function on(eventName, handler) {
            var _this25 = this;

            var bh = handler.bind(this);
            this.controller_.value.emitter.on(eventName, function (ev) {
              var gc = _this25.controller_.valueController;
              var cc = gc.findCellByValue(ev.rawValue);

              if (!cc) {
                return;
              }

              var capi = _this25.cellToApiMap_.get(cc);

              if (!capi) {
                return;
              }

              var i = gc.cellControllers.indexOf(cc);
              bh(new TpRadioGridChangeEvent(_this25, capi, [i % gc.size[0], Math.floor(i / gc.size[0])], ev.rawValue, undefined));
            });
          }
        }]);

        return RadioGridApi;
      }(BladeApi);

      var className = ClassName('rad');

      var RadioView = /*#__PURE__*/_createClass(function RadioView(doc, config) {
        _classCallCheck(this, RadioView);

        this.element = doc.createElement('div');
        this.element.classList.add(className());
        config.viewProps.bindClassModifiers(this.element);
        var labelElem = doc.createElement('label');
        labelElem.classList.add(className('l'));
        this.element.appendChild(labelElem);
        var inputElem = doc.createElement('input');
        inputElem.classList.add(className('i'));
        inputElem.name = config.name;
        inputElem.type = 'radio';
        config.viewProps.bindDisabled(inputElem);
        labelElem.appendChild(inputElem);
        this.inputElement = inputElem;
        var bodyElem = doc.createElement('div');
        bodyElem.classList.add(className('b'));
        labelElem.appendChild(bodyElem);
        var titleElem = doc.createElement('div');
        titleElem.classList.add(className('t'));
        bodyElem.appendChild(titleElem);
        bindValueMap(config.props, 'title', function (title) {
          titleElem.textContent = title;
        });
      });

      var RadioController = /*#__PURE__*/_createClass(function RadioController(doc, config) {
        _classCallCheck(this, RadioController);

        this.props = config.props;
        this.viewProps = config.viewProps;
        this.view = new RadioView(doc, {
          name: config.name,
          props: this.props,
          viewProps: this.viewProps
        });
      });

      var RadioGridController = /*#__PURE__*/function () {
        function RadioGridController(doc, config) {
          var _this26 = this;

          _classCallCheck(this, RadioGridController);

          this.cellCs_ = [];
          this.cellValues_ = [];
          this.onCellInputChange_ = this.onCellInputChange_.bind(this);
          this.size = config.size;

          var _this$size2 = _slicedToArray(this.size, 2),
              w = _this$size2[0],
              h = _this$size2[1];

          for (var y = 0; y < h; y++) {
            for (var x = 0; x < w; x++) {
              var bc = new RadioController(doc, {
                name: config.groupName,
                props: ValueMap.fromObject(Object.assign({}, config.cellConfig(x, y))),
                viewProps: ViewProps.create()
              });
              this.cellCs_.push(bc);
              this.cellValues_.push(config.cellConfig(x, y).value);
            }
          }

          this.value = config.value;
          bindValue(this.value, function (value) {
            var cc = _this26.findCellByValue(value);

            if (!cc) {
              return;
            }

            cc.view.inputElement.checked = true;
          });
          this.viewProps = ViewProps.create();
          this.view = new PlainView(doc, {
            viewProps: this.viewProps,
            viewName: 'radgrid'
          });
          this.view.element.style.gridTemplateColumns = "repeat(".concat(w, ", 1fr)");
          this.cellCs_.forEach(function (bc) {
            bc.view.inputElement.addEventListener('change', _this26.onCellInputChange_);

            _this26.view.element.appendChild(bc.view.element);
          });
        }

        _createClass(RadioGridController, [{
          key: "cellControllers",
          get: function get() {
            return this.cellCs_;
          }
        }, {
          key: "findCellByValue",
          value: function findCellByValue(value) {
            var index = this.cellValues_.findIndex(function (v) {
              return v === value;
            });

            if (index < 0) {
              return null;
            }

            return this.cellCs_[index];
          }
        }, {
          key: "onCellInputChange_",
          value: function onCellInputChange_(ev) {
            var inputElem = ev.currentTarget;
            var index = this.cellCs_.findIndex(function (c) {
              return c.view.inputElement === inputElem;
            });

            if (index < 0) {
              return;
            }

            this.value.rawValue = this.cellValues_[index];
          }
        }]);

        return RadioGridController;
      }();

      var RadioGridBladePlugin = function () {
        return {
          id: 'radiogrid',
          type: 'blade',
          accept: function accept(params) {
            var p = ParamsParsers;
            var result = parseParams(params, {
              cells: p.required["function"],
              groupName: p.required.string,
              size: p.required.array(p.required.number),
              value: p.required.raw,
              view: p.required.constant('radiogrid'),
              label: p.optional.string
            });
            return result ? {
              params: result
            } : null;
          },
          controller: function controller(args) {
            return new LabeledValueController(args.document, {
              blade: args.blade,
              props: ValueMap.fromObject({
                label: args.params.label
              }),
              valueController: new RadioGridController(args.document, {
                groupName: args.params.groupName,
                cellConfig: args.params.cells,
                size: args.params.size,
                value: createValue(args.params.value)
              })
            });
          },
          api: function api(args) {
            if (!(args.controller instanceof LabeledValueController)) {
              return null;
            }

            if (!(args.controller.valueController instanceof RadioGridController)) {
              return null;
            }

            return new RadioGridApi(args.controller);
          }
        };
      }();

      function createRadioGridInputPlugin(config) {
        return {
          id: 'input-radiogrid',
          type: 'input',
          accept: function accept(value, params) {
            if (!config.isType(value)) {
              return null;
            }

            var p = ParamsParsers;
            var result = parseParams(params, {
              cells: p.required["function"],
              groupName: p.required.string,
              size: p.required.array(p.required.number),
              view: p.required.constant('radiogrid')
            });
            return result ? {
              initialValue: value,
              params: result
            } : null;
          },
          binding: config.binding,
          controller: function controller(args) {
            return new RadioGridController(args.document, {
              cellConfig: args.params.cells,
              groupName: args.params.groupName,
              size: args.params.size,
              value: args.value
            });
          }
        };
      }

      var RadioGruidNumberInputPlugin = createRadioGridInputPlugin({
        isType: function isType(value) {
          return typeof value === 'number';
        },
        binding: {
          reader: function reader(_args) {
            return numberFromUnknown;
          },
          writer: function writer(_args) {
            return writePrimitive;
          }
        }
      });
      var RadioGruidStringInputPlugin = createRadioGridInputPlugin({
        isType: function isType(value) {
          return typeof value === 'string';
        },
        binding: {
          reader: function reader(_args) {
            return stringFromUnknown;
          },
          writer: function writer(_args) {
            return writePrimitive;
          }
        }
      });
      var RadioGruidBooleanInputPlugin = createRadioGridInputPlugin({
        isType: function isType(value) {
          return typeof value === 'boolean';
        },
        binding: {
          reader: function reader(_args) {
            return boolFromUnknown;
          },
          writer: function writer(_args) {
            return writePrimitive;
          }
        }
      });
      var plugins = [ButtonGridBladePlugin, CubicBezierBladePlugin, FpsGraphBladePlugin, IntervalInputPlugin, RadioGridBladePlugin, RadioGruidBooleanInputPlugin, RadioGruidNumberInputPlugin, RadioGruidStringInputPlugin];
      exports.CubicBezier = CubicBezier;
      exports.plugins = plugins;
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
    });
  })(tweakpanePluginEssentials$1, tweakpanePluginEssentials$1.exports);

  var tweakpanePluginEssentials = /*@__PURE__*/getDefaultExportFromCjs(tweakpanePluginEssentials$1.exports);

  var EssentialsPlugin = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': tweakpanePluginEssentials
  }, [tweakpanePluginEssentials$1.exports]);

  var eventemitter3 = {exports: {}};

  (function (module) {

    var has = Object.prototype.hasOwnProperty,
        prefix = '~';
    /**
     * Constructor to create a storage for our `EE` objects.
     * An `Events` instance is a plain object whose properties are event names.
     *
     * @constructor
     * @private
     */

    function Events() {} //
    // We try to not inherit from `Object.prototype`. In some engines creating an
    // instance in this way is faster than calling `Object.create(null)` directly.
    // If `Object.create(null)` is not supported we prefix the event names with a
    // character to make sure that the built-in object properties are not
    // overridden or used as an attack vector.
    //


    if (Object.create) {
      Events.prototype = Object.create(null); //
      // This hack is needed because the `__proto__` property is still inherited in
      // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
      //

      if (!new Events().__proto__) prefix = false;
    }
    /**
     * Representation of a single event listener.
     *
     * @param {Function} fn The listener function.
     * @param {*} context The context to invoke the listener with.
     * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
     * @constructor
     * @private
     */


    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    /**
     * Add a listener for a given event.
     *
     * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn The listener function.
     * @param {*} context The context to invoke the listener with.
     * @param {Boolean} once Specify if the listener is a one-time listener.
     * @returns {EventEmitter}
     * @private
     */


    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== 'function') {
        throw new TypeError('The listener must be a function');
      }

      var listener = new EE(fn, context || emitter, once),
          evt = prefix ? prefix + event : event;
      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    /**
     * Clear event by name.
     *
     * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
     * @param {(String|Symbol)} evt The Event name.
     * @private
     */


    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();else delete emitter._events[evt];
    }
    /**
     * Minimal `EventEmitter` interface that is molded against the Node.js
     * `EventEmitter` interface.
     *
     * @constructor
     * @public
     */


    function EventEmitter() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    /**
     * Return an array listing the events for which the emitter has registered
     * listeners.
     *
     * @returns {Array}
     * @public
     */


    EventEmitter.prototype.eventNames = function eventNames() {
      var names = [],
          events,
          name;
      if (this._eventsCount === 0) return names;

      for (name in events = this._events) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }

      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }

      return names;
    };
    /**
     * Return the listeners registered for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @returns {Array} The registered listeners.
     * @public
     */


    EventEmitter.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event,
          handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];

      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }

      return ee;
    };
    /**
     * Return the number of listeners listening to a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @returns {Number} The number of listeners.
     * @public
     */


    EventEmitter.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event,
          listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };
    /**
     * Calls each of the listeners registered for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @returns {Boolean} `true` if the event had listeners, else `false`.
     * @public
     */


    EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt],
          len = arguments.length,
          args,
          i;

      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;

          case 2:
            return listeners.fn.call(listeners.context, a1), true;

          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;

          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;

          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;

          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }

        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }

        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length,
            j;

        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;

            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;

            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;

            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;

            default:
              if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }

      return true;
    };
    /**
     * Add a listener for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn The listener function.
     * @param {*} [context=this] The context to invoke the listener with.
     * @returns {EventEmitter} `this`.
     * @public
     */


    EventEmitter.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    /**
     * Add a one-time listener for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn The listener function.
     * @param {*} [context=this] The context to invoke the listener with.
     * @returns {EventEmitter} `this`.
     * @public
     */


    EventEmitter.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    /**
     * Remove the listeners of a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn Only remove the listeners that match this function.
     * @param {*} context Only remove the listeners that have this context.
     * @param {Boolean} once Only remove one-time listeners.
     * @returns {EventEmitter} `this`.
     * @public
     */


    EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;

      if (!fn) {
        clearEvent(this, evt);
        return this;
      }

      var listeners = this._events[evt];

      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        } //
        // Reset the array, or remove it completely if we have no more listeners.
        //


        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;else clearEvent(this, evt);
      }

      return this;
    };
    /**
     * Remove all listeners, or those of the specified event.
     *
     * @param {(String|Symbol)} [event] The event name.
     * @returns {EventEmitter} `this`.
     * @public
     */


    EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;

      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }

      return this;
    }; //
    // Alias methods names because people roll like that.
    //


    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on; //
    // Expose the prefix.
    //

    EventEmitter.prefixed = prefix; //
    // Allow `EventEmitter` to be imported as module namespace.
    //

    EventEmitter.EventEmitter = EventEmitter; //
    // Expose the module.
    //

    {
      module.exports = EventEmitter;
    }
  })(eventemitter3);

  var draggable_min = {exports: {}};

  (function (module, exports) {
    !function (t, e) {
      module.exports = e() ;
    }(commonjsGlobal, function () {

      var t = {
        grid: 0,
        filterTarget: null,
        limit: {
          x: null,
          y: null
        },
        threshold: 0,
        setCursor: !1,
        setPosition: !0,
        smoothDrag: !0,
        useGPU: !0,
        onDrag: u,
        onDragStart: u,
        onDragEnd: u
      },
          e = {
        transform: function () {
          for (var t = " -o- -ms- -moz- -webkit-".split(" "), e = document.body.style, n = t.length; n--;) {
            var o = t[n] + "transform";
            if (o in e) return o;
          }
        }()
      },
          n = {
        assign: function assign() {
          for (var t = arguments[0], e = arguments.length, n = 1; n < e; n++) {
            var o = arguments[n];

            for (var i in o) {
              t[i] = o[i];
            }
          }

          return t;
        },
        bind: function bind(t, e) {
          return function () {
            t.apply(e, arguments);
          };
        },
        on: function on(t, e, o) {
          if (e && o) n.addEvent(t, e, o);else if (e) for (var i in e) {
            n.addEvent(t, i, e[i]);
          }
        },
        off: function off(t, e, o) {
          if (e && o) n.removeEvent(t, e, o);else if (e) for (var i in e) {
            n.removeEvent(t, i, e[i]);
          }
        },
        limit: function limit(t, e) {
          return e instanceof Array ? t < (e = [+e[0], +e[1]])[0] ? t = e[0] : t > e[1] && (t = e[1]) : t = +e, t;
        },
        addEvent: "attachEvent" in Element.prototype ? function (t, e, n) {
          t.attachEvent("on" + e, n);
        } : function (t, e, n) {
          t.addEventListener(e, n, !1);
        },
        removeEvent: "attachEvent" in Element.prototype ? function (t, e, n) {
          t.detachEvent("on" + e, n);
        } : function (t, e, n) {
          t.removeEventListener(e, n);
        }
      };

      function o(e, o) {
        var i = this,
            r = n.bind(i.start, i),
            s = n.bind(i.drag, i),
            u = n.bind(i.stop, i);
        if (!a(e)) throw new TypeError("Draggable expects argument 0 to be an Element");
        o = n.assign({}, t, o), n.assign(i, {
          element: e,
          handle: o.handle && a(o.handle) ? o.handle : e,
          handlers: {
            start: {
              mousedown: r,
              touchstart: r
            },
            move: {
              mousemove: s,
              mouseup: u,
              touchmove: s,
              touchend: u
            }
          },
          options: o
        }), i.initialize();
      }

      function i(t) {
        return parseInt(t, 10);
      }

      function r(t) {
        return "currentStyle" in t ? t.currentStyle : getComputedStyle(t);
      }

      function s(t) {
        return null != t;
      }

      function a(t) {
        return t instanceof Element || "undefined" != typeof HTMLDocument && t instanceof HTMLDocument;
      }

      function u() {}

      return n.assign(o.prototype, {
        setOption: function setOption(t, e) {
          var n = this;
          return n.options[t] = e, n.initialize(), n;
        },
        get: function get() {
          var t = this.dragEvent;
          return {
            x: t.x,
            y: t.y
          };
        },
        set: function set(t, e) {
          var n = this.dragEvent;
          return n.original = {
            x: n.x,
            y: n.y
          }, this.move(t, e), this;
        },
        dragEvent: {
          started: !1,
          x: 0,
          y: 0
        },
        initialize: function initialize() {
          var t,
              o = this,
              i = o.element,
              s = (o.handle, i.style),
              a = r(i),
              u = o.options,
              f = e.transform,
              l = o._dimensions = {
            height: i.offsetHeight,
            left: i.offsetLeft,
            top: i.offsetTop,
            width: i.offsetWidth
          };
          u.useGPU && f && ("none" === (t = a[f]) && (t = ""), s[f] = t + " translate3d(0,0,0)"), u.setPosition && (s.display = "block", s.left = l.left + "px", s.top = l.top + "px", s.width = l.width + "px", s.height = l.height + "px", s.bottom = s.right = "auto", s.margin = 0, s.position = "absolute"), u.setCursor && (s.cursor = "move"), o.setLimit(u.limit), n.assign(o.dragEvent, {
            x: l.left,
            y: l.top
          }), n.on(o.handle, o.handlers.start);
        },
        start: function start(t) {
          var e = this,
              o = e.getCursor(t),
              i = e.element;
          e.useTarget(t.target || t.srcElement) && (t.preventDefault && !t.target.getAttribute("contenteditable") ? t.preventDefault() : t.target.getAttribute("contenteditable") || (t.returnValue = !1), e.dragEvent.oldZindex = i.style.zIndex, i.style.zIndex = 1e4, e.setCursor(o), e.setPosition(), e.setZoom(), n.on(document, e.handlers.move));
        },
        drag: function drag(t) {
          var e = this,
              n = e.dragEvent,
              o = e.element,
              i = e._cursor,
              r = e._dimensions,
              s = e.options,
              a = r.zoom,
              u = e.getCursor(t),
              f = s.threshold,
              l = (u.x - i.x) / a + r.left,
              d = (u.y - i.y) / a + r.top;
          !n.started && f && Math.abs(i.x - u.x) < f && Math.abs(i.y - u.y) < f || (n.original || (n.original = {
            x: l,
            y: d
          }), n.started || (s.onDragStart(o, l, d, t), n.started = !0), e.move(l, d) && s.onDrag(o, n.x, n.y, t));
        },
        move: function move(t, e) {
          var n = this,
              o = n.dragEvent,
              i = n.options,
              r = i.grid,
              s = n.element.style,
              a = n.limit(t, e, o.original.x, o.original.y);
          return !i.smoothDrag && r && (a = n.round(a, r)), (a.x !== o.x || a.y !== o.y) && (o.x = a.x, o.y = a.y, s.left = a.x + "px", s.top = a.y + "px", !0);
        },
        stop: function stop(t) {
          var e,
              o = this,
              i = o.dragEvent,
              r = o.element,
              s = o.options,
              a = s.grid;
          n.off(document, o.handlers.move), r.style.zIndex = i.oldZindex, s.smoothDrag && a && (e = o.round({
            x: i.x,
            y: i.y
          }, a), o.move(e.x, e.y), n.assign(o.dragEvent, e)), o.dragEvent.started && s.onDragEnd(r, i.x, i.y, t), o.reset();
        },
        reset: function reset() {
          this.dragEvent.started = !1;
        },
        round: function round(t) {
          var e = this.options.grid;
          return {
            x: e * Math.round(t.x / e),
            y: e * Math.round(t.y / e)
          };
        },
        getCursor: function getCursor(t) {
          return {
            x: (t.targetTouches ? t.targetTouches[0] : t).clientX,
            y: (t.targetTouches ? t.targetTouches[0] : t).clientY
          };
        },
        setCursor: function setCursor(t) {
          this._cursor = t;
        },
        setLimit: function setLimit(t) {
          var e = this,
              o = function o(t, e) {
            return {
              x: t,
              y: e
            };
          };

          if (t instanceof Function) e.limit = t;else if (a(t)) {
            var i = e._dimensions,
                r = t.scrollHeight - i.height,
                u = t.scrollWidth - i.width;

            e.limit = function (t, e) {
              return {
                x: n.limit(t, [0, u]),
                y: n.limit(e, [0, r])
              };
            };
          } else if (t) {
            var f = s(t.x),
                l = s(t.y);
            e.limit = f || l ? function (e, o) {
              return {
                x: f ? n.limit(e, t.x) : e,
                y: l ? n.limit(o, t.y) : o
              };
            } : o;
          } else e.limit = o;
        },
        setPosition: function setPosition() {
          var t = this.element,
              e = t.style;
          n.assign(this._dimensions, {
            left: i(e.left) || t.offsetLeft,
            top: i(e.top) || t.offsetTop
          });
        },
        setZoom: function setZoom() {
          for (var t = this.element, e = 1; t = t.offsetParent;) {
            var n = r(t).zoom;

            if (n && "normal" !== n) {
              e = n;
              break;
            }
          }

          this._dimensions.zoom = e;
        },
        useTarget: function useTarget(t) {
          var e = this.options.filterTarget;
          return !(e instanceof Function) || e(t);
        },
        destroy: function destroy() {
          n.off(this.handle, this.handlers.start), n.off(document, this.handlers.move);
        }
      }), o;
    });
  })(draggable_min);

  var Draggable = draggable_min.exports;

  const CONFIG = {
    keymap: {
      // call inference
      x: "compute-inference",
      c: "compute-img2img",
      v: "compute-inpainting",
      // randomize the prompt
      r: "randomize-inference",
      t: "randomize-img2img",
      y: "randomize-inpainting",
    },
  };

  let pane;
  class UI extends eventemitter3.exports.EventEmitter {
    constructor() {
      super();

      const panel = document.querySelector("#panel");
      new Draggable(panel, {
        filterTarget: (e) => {
          return e == panel;
        },
      });

      const container = document.querySelector("#settings");
      pane = new tweakpane.exports.Pane({ container });
      pane.registerPlugin(TextareaPlugin);
      pane.registerPlugin(EssentialsPlugin);

      const tab = pane.addTab({
        pages: [
          { title: "inference" },
          { title: "img2img" },
          { title: "inpainting" },
        ],
      });
      this.tabIndex = 0;
      tab.on("select", (e) => {
        this.tabIndex = e.index;
        this.emit("tab_change", e.index);
      });

      // tabs common options

      const seed = {
        value: -1,
        min: -1,
        max: 10000,
        step: 1,
      };
      const steps = {
        value: 40,
        min: 10,
        max: 100,
        step: 1,
      };
      const strength = {
        value: 0.65,
        min: 0,
        max: 1,
        step: 0.01,
      };
      const guidance = {
        value: 7,
        min: 0,
        max: 25,
        step: 0.01,
      };
      const brush_size = {
        value: 96,
        min: 1,
        max: 256,
        step: 1,
      };

      this.inference = {
        prompt: "",
        randomize: () => {
          this.emit("randomize", this.inference);
        },
        seed,
        steps,
        guidance,
        compute: () => {
          this.emit("inference", this.inference);
        },
        undo: () => {
          this.emit("undo");
        },
      };

      this.img2img = {
        prompt: "",
        randomize: () => {
          this.emit("randomize", this.img2img);
        },
        seed,
        strength,
        guidance,
        // brush_size,
        // color: "#ff0055ff",
        compute: () => {
          this.emit("img2img", this.img2img);
        },
        undo: () => {
          this.emit("undo");
        },
      };

      this.inpainting = {
        prompt: "",
        randomize: () => {
          this.emit("randomize", this.inpainting);
        },
        seed,
        strength,
        guidance,
        brush_size,
        softness: strength, // strength is 0->1 so ...
        alpha: strength,
        compute: () => {
          this.emit("inpainting", this.inpainting);
        },
        undo: () => {
          this.emit("undo");
        },
        clear_drawpad: () => {
          this.emit("clear_drawpad");
        },
      };

      this.settings = {
        width: {
          value: 512,
          min: 64,
          max: 512,
          step: 64,
        },
        height: {
          value: 512,
          min: 64,
          max: 512,
          step: 64,
        },
        clear: () => {
          this.emit("clear");
        },
      };

      //   populate panel
      this.addMenu(this.inference, tab.pages[0]);
      this.addMenu(this.img2img, tab.pages[1]);
      this.addMenu(this.inpainting, tab.pages[2]);
      pane.addSeparator();
      this.addMenu(this.settings, pane);

      //randomizes the prompts
      // Prompter.filter("portrait"); //
      Prompter.randomize();
      this.inference.field.value = Prompter.random();
      this.img2img.field.value = Prompter.random();
      this.inpainting.seed = -1;
      this.inpainting.field.value = Prompter.random();
      this.inpainting.alpha = 1;

      pane.refresh();

      //keyboard
      window.addEventListener("keydown", (e) => {
        //prevents shortcuts when editing text
        const f0 = this.inference.field === document.activeElement;
        const f1 = this.img2img.field === document.activeElement;
        const f2 = this.inpainting.field === document.activeElement;
        const focus = f0 || f1 || f2;

        if (focus) return;
        switch (CONFIG.keymap[e.key]) {
          case "z":
            if (e.ctrlKey) this.emit("undo");
            break;

          case "compute-inference":
            this.emit("inference", this.inference);
            break;
          case "compute-img2img":
            this.emit("img2img", this.img2img);
            break;
          case "compute-inpainting":
            this.emit("inpainting", this.inpainting);
            break;

          case "randomize-inference":
            this.emit("randomize", this.inference);
            break;
          case "randomize-img2img":
            this.emit("randomize", this.img2img);
            break;
          case "randomize-inpainting":
            this.emit("randomize", this.inpainting);
            break;
        }
      });
    }

    getConfig(object) {
      let cfg = Object.assign({}, object);
      cfg = Object.assign(cfg, this.settings);
      cfg.prompt = object.field.value.trim();
      //clean up
      for (let key in cfg) {
        if (typeof cfg[key] === "function" || typeof cfg[key] === "object") {
          delete cfg[key];
        }
      }
      return cfg;
    }

    addMenu(object, folder) {
      // expose the sliders (to the drawingPad for instance)
      const bindings = {};
      for (let key in object) {
        if (object[key] == "") {
          const cfg = {
            view: "textarea",
            lineCount: 6,
            placeholder: "hic sunt dracones...",
          };
          let field = folder.addInput(object, key, cfg);

          //
          // store a path to the input textarea !!! ( holy shit )
          object.field = field.controller_.valueController.view.inputElement;
          // (grow the textarea width) hacky hacky...
          object.field.parentNode.parentNode.style.flexGrow = "3";
          //
          //
        } else if (typeof object[key] === "function") {
          const btn = folder.addButton({
            title: key,
          });
          btn.on("click", () => {
            object[key]();
          });
        } else if (key === "color") {
          const color = folder.addInput(object, "color", {
            picker: "inline",
            expanded: true,
          });
          bindings[key] = color;
        } else {
          let props = object[key];
          object[key] = object[key].value;
          const field = folder.addInput(object, key, props);
          if (key == "width" || key == "height") {
            field.on("change", (e) => {
              this.emit("resize");
            });
          }
          bindings[key] = field;
        }
      }
      object.bindings = bindings;
      return folder;
    }
  }

  let throbber, drag, zone$1;
  class Zone {
    constructor(ui) {
      throbber = document.getElementById("throbber");
      drag = document.getElementById("drag");
      new Draggable(drag, {
        // TODO update limits on resize
        limit: {
          x: [256, window.innerWidth - 24],
          y: [256 + 12, window.innerHeight - 24],
        },
        filterTarget: (e) => {
          return e == drag || ui.tabIndex != 2;
        },
      });
      zone$1 = document.getElementById("zone");
      this.element = zone$1;
    }

    get rect() {
      return zone$1.getBoundingClientRect();
    }

    showThrobber() {
      throbber.classList.remove("hidden");
    }

    hideThrobber() {
      throbber.classList.add("hidden");
    }
    set width(v) {
      drag.style.width = v + "px";
      zone$1.style.width = v + "px";
    }
    set height(v) {
      drag.style.height = v + "px";
      zone$1.style.height = v + "px";
    }
    resize(w, h) {
      this.width = w;
      this.height = h;
    }
  }

  let canvas, socket, zone, ui, history, drawPad, image;
  let locked = false;
  const JPG_QUALITY = 0.9;
  class Index {
    constructor() {
      // return;
      //background canvas
      canvas = new Canvas();

      // socket
      socket = lookup();

      // control panel
      ui = new UI();

      //draggable area
      zone = new Zone(ui);

      // draw area for inpainting
      drawPad = new DrawingPad(ui.inpainting);
      zone.element.appendChild(drawPad.canvas);

      // undo (/redo?)
      history = new History(canvas, ui);

      // logic
      socket.connect("http://localhost:8080");
      socket.on("init", function (data) {
        console.log(
          "%c" + data.message,
          "color:pink; font-size:24px; font-family:Comic-Sans;"
        );
      });

      // draws the image to canvas whenever a function is finished
      image = new Image();
      socket.on("image_ready", (data) => {
        image.onload = () => {
          let r = zone.rect;
          history.pushState(r, canvas);
          canvas.putImage(image, r.x, r.y);
          locked = false;
        };
        image.setAttribute("src", data.value);
        zone.hideThrobber();
      });

      // randomizze a prompt
      ui.on("randomize", (object) => {
        const field = object.field;
        field.value = Prompter.next();
      });

      // call an inference
      ui.on("inference", (object) => {
        let cfg = ui.getConfig(object);
        if (cfg.prompt === "") return;

        if (locked) return;
        locked = true;

        socket.emit("inference", cfg);
        zone.showThrobber();
      });

      // call an image 2 image
      ui.on("img2img", (object) => {
        let cfg = ui.getConfig(object);
        if (cfg.prompt === "") return;

        if (locked) return;
        locked = true;

        //save the cropped image and call the img2img function:
        const state = history.pushState(zone.rect, canvas);
        state.canvas.toBlob(
          (blob) => {
            socket.emit("save_image", "img2img/i2i-tmp.jpg", blob);
            //once it's saved, call the img2img
            socket.once("on_image_saved", () => {
              socket.emit("image_image", cfg);
              zone.showThrobber();
            });
          },
          "image/jpeg",
          JPG_QUALITY
        );
      });

      // call an inpainting
      ui.on("inpainting", (object) => {
        let cfg = ui.getConfig(object);
        if (cfg.prompt === "") return;

        if (locked) return;
        locked = true;

        //save the cropped image and call the img2img function:
        const state = history.pushState(zone.rect, canvas);
        state.canvas.toBlob(
          (blob) => {
            //send the source image to node
            socket.emit("save_image", "inpainting/inp-tmp.jpg", blob);
            // when the source is saved,
            socket.once("on_image_saved", () => {
              //  save the mask
              drawPad.canvas.toBlob(
                (blob) => {
                  //send mask to node
                  socket.emit("save_image", "inpainting/inp-msk.jpg", blob);
                  //
                  //once the mask is saved, call the inpainting
                  socket.once("on_image_saved", () => {
                    // call inpainting
                    socket.emit("inpainting", cfg);
                    zone.showThrobber();
                    //clears the mask
                    drawPad.clear();
                  });
                },
                "image/jpeg",
                JPG_QUALITY
              );
            });
          },
          "image/jpeg",
          JPG_QUALITY
        );
      });

      // manage tab change
      ui.on("tab_change", (index) => {
        switch (index) {
          case 0:
          case 1:
            drawPad.hide();
            break;
          case 2:
            drawPad.show();
            break;
          default:
            return;
        }
      });

      //other stuff
      ui.on("clear_drawpad", drawPad.clear.bind(drawPad));
      ui.on("clear", canvas.clear.bind(canvas));

      //resize handler
      ui.on("resize", () => {
        // TODO resize main canvas
        const w = ui.settings.width;
        const h = ui.settings.height;
        zone.resize(w, h);
        drawPad.resize(w, h);
      });
      ui.emit("resize");
    }
  }

  return Index;

})();
