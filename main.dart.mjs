// Compiles a dart2wasm-generated main module from `source` which can then
// be instantiated via the `instantiate` method.
//
// `source` needs to be a `Response` object (or promise thereof) e.g. created
// via the `fetch()` JS API.
export async function compileStreaming(source) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(
      await WebAssembly.compileStreaming(source, builtins), builtins);
}

// Compiles a dart2wasm-generated wasm module from `bytes` which is then
// instantiable via the `instantiate` method.
export async function compile(bytes) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(await WebAssembly.compile(bytes, builtins), builtins);
}

class CompiledApp {
  constructor(module, builtins) {
    this.module = module;
    this.builtins = builtins;
  }

  // The second argument is an options object containing:
  // `loadDeferredModules` is a JS function that takes an array of module names
  //   matching wasm files produced by the dart2wasm compiler. It also takes a
  //   callback that should be invoked for each loaded module with 2 arguments:
  //   (1) the module name, (2) the loaded module in a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`. The callback
  //   returns a Promise that resolves when the module is instantiated.
  //   loadDeferredModules should return a Promise that resolves when all the
  //   modules have been loaded and the callback promises have resolved.
  // `loadDeferredId` is a JS function that takes load ID produced by the
  //   compiler when the `use-load-ids` option is passed. Each load ID maps to
  //   one or more wasm files as specified in the emitted JSON file. It also
  //   takes a callback that should be invoked for each loaded module with 2
  //   arguments: (1) the module name, (2) the loaded module in a format
  //   supported by `WebAssembly.compile` or `WebAssembly.compileStreaming`.
  //   The callback returns a Promise that resolves when the module is
  //   instantiated.
  //   loadDeferredId should return a Promise that resolves when all the
  //   modules have been loaded and the callback promises have resolved.
  async instantiate(additionalImports, {loadDeferredModules, loadDeferredId} = {}) {
    let dartInstance;

    // Prints to the console
    function printToConsole(value) {
      if (typeof dartPrint == "function") {
        dartPrint(value);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(value);
        return;
      }
      if (typeof print == "function") {
        print(value);
        return;
      }

      throw "Unable to print message: " + value;
    }

    // A special symbol attached to functions that wrap Dart functions.
    const jsWrappedDartFunctionSymbol = Symbol("JSWrappedDartFunction");

    function finalizeWrapper(dartFunction, wrapped) {
      wrapped.dartFunction = dartFunction;
      wrapped[jsWrappedDartFunctionSymbol] = true;
      return wrapped;
    }

    // Imports
    const dart2wasm = {
            AB: x0 => new Int16Array(x0),
      AC: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      AD: x0 => x0.screen,
      AE: x0 => new ResizeObserver(x0),
      AF: x0 => x0.key,
      AG: (x0,x1) => x0.decode(x1),
      AH: x0 => x0.data,
      AI: x0 => x0.stopPropagation(),
      AJ: (x0,x1) => { x0.width = x1 },
      AK: x0 => x0.send(),
      AL: x0 => x0.getReader(),
      AM: (x0,x1,x2) => x0.setGroupPropertiesForFlags(x1,x2),
      AN: x0 => x0.height,
      B: s => printToConsole(s),
      BB: x0 => new Uint16Array(x0),
      BC: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      BD: o => {
        if (o === null || o === undefined) return 0;
        if (typeof(o) === 'string') return 1;
        return 2;
      },
      BE: (x0,x1) => x0.getPropertyValue(x1),
      BF: x0 => x0.identifier,
      BG: (x0,x1) => x0.adoptText(x1),
      BH: (x0,x1) => { x0.scrollTop = x1 },
      BI: x0 => x0.disabled,
      BJ: x0 => x0.style,
      BK: x0 => x0.type,
      BL: x0 => x0.read(),
      BM: (x0,x1) => x0.resetGroupPropertiesForFlags(x1),
      BN: x0 => x0.width,
      C: Function.prototype.call.bind(Number.prototype.toString),
      CB: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI16ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      CC: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      CD: x0 => x0.tabIndex,
      CE: x0 => globalThis.parseFloat(x0),
      CF: x0 => x0.touches,
      CG: x0 => x0.first(),
      CH: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      CI: (x0,x1) => { x0.min = x1 },
      CJ: (x0,x1) => { x0.src = x1 },
      CK: x0 => x0.response,
      CL: x0 => x0.value,
      CM: x0 => x0.opt_in_capturing(),
      CN: (x0,x1) => x0.getContext(x1),
      D: Function.prototype.call.bind(BigInt.prototype.toString),
      DB: x0 => new Int32Array(x0),
      DC: (x0,x1) => x0.querySelector(x1),
      DD: (x0,x1) => x0.contains(x1),
      DE: (x0,x1) => x0.getComputedStyle(x1),
      DF: x0 => x0.pressure,
      DG: x0 => x0.next(),
      DH: (x0,x1) => { x0.value = x1 },
      DI: (x0,x1) => { x0.max = x1 },
      DJ: () => globalThis.document,
      DK: (x0,x1) => { x0.responseType = x1 },
      DL: x0 => x0.done,
      DM: x0 => x0.opt_out_capturing(),
      DN: (x0,x1) => { x0.height = x1 },
      E: (exn) => {
        let stackString = exn.toString();
        let frames = stackString.split('\n');
        let drop = 4;
        if (frames[0].startsWith('Error')) {
            drop += 1;
        }
        return frames.slice(drop).join('\n');
      },
      EB: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      EC: (x0,x1) => x0.item(x1),
      ED: x0 => x0.activeElement,
      EE: x0 => x0.documentElement,
      EF: x0 => x0.tiltY,
      EG: x0 => x0.current(),
      EH: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      EI: (x0,x1) => { x0.disabled = x1 },
      EJ: (x0,x1) => { x0.pointerEvents = x1 },
      EK: x0 => x0.vendor,
      EL: x0 => x0.cancel(),
      EM: x0 => x0.has_opted_out_capturing(),
      EN: (x0,x1) => { x0.width = x1 },
      F: () => new Error().stack,
      FB: x0 => new Uint32Array(x0),
      FC: x0 => x0.length,
      FD: x0 => x0.parentNode,
      FE: x0 => x0.computedStyleMap(),
      FF: x0 => x0.tiltX,
      FG: (x0,x1) => new Intl.v8BreakIterator(x0,x1),
      FH: (x0,x1) => { x0.value = x1 },
      FI: (x0,x1) => { x0.scrollLeft = x1 },
      FJ: (x0,x1) => { x0.backgroundColor = x1 },
      FK: x0 => x0.decode(),
      FL: x0 => x0.body,
      FM: (x0,x1) => x0.getFeatureFlag(x1),
      FN: x0 => x0.height,
      G: s => JSON.stringify(s),
      GB: x0 => new Float32Array(x0),
      GC: (x0,x1) => x0.querySelectorAll(x1),
      GD: x0 => x0.tagName,
      GE: (x0,x1) => x0.get(x1),
      GF: x0 => x0.pointerType,
      GG: x0 => x0.v8BreakIterator,
      GH: s => {
        if (/[[\]{}()*+?.\\^$|]/.test(s)) {
            s = s.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');
        }
        return s;
      },
      GI: (x0,x1) => { x0.spellcheck = x1 },
      GJ: (x0,x1) => { x0.height = x1 },
      GK: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      GL: x0 => x0.headers,
      GM: (x0,x1) => x0.getFeatureFlagPayload(x1),
      GN: x0 => x0.width,
      H: Function.prototype.call.bind(Number.prototype.toString),
      HB: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      HC: (x0,x1) => x0.getAttribute(x1),
      HD: x0 => x0.target,
      HE: (o, p) => p in o,
      HF: x0 => x0.pointerId,
      HG: () => globalThis.Intl,
      HH: x0 => x0.value,
      HI: (x0,x1) => { x0.disabled = x1 },
      HJ: (x0,x1) => { x0.width = x1 },
      HK: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      HL: x0 => x0.signal,
      HM: (x0,x1,x2) => x0.getFeatureFlagResult(x1,x2),
      HN: (x0,x1) => { x0.src = x1 },
      I: Function.prototype.call.bind(String.prototype.indexOf),
      IB: x0 => new Float64Array(x0),
      IC: x0 => x0.remove(),
      ID: x0 => x0.clientY,
      IE: (x0,x1) => { x0.textContent = x1 },
      IF: x0 => x0.getCoalescedEvents(),
      IG: (x0,x1) => x0.segment(x1),
      IH: x0 => x0.selectionDirection,
      II: (a, i) => a.splice(i, 1),
      IJ: (x0,x1) => { x0.border = x1 },
      IK: (x0,x1,x2) => x0.addEventListener(x1,x2),
      IL: x0 => x0.abort(),
      IM: (x0,x1) => x0.register(x1),
      IN: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      J: (s, p, i) => s.lastIndexOf(p, i),
      JB: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF64ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      JC: (x0,x1) => x0.appendChild(x1),
      JD: x0 => x0.clientX,
      JE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      JF: (x0,x1) => x0.getModifierState(x1),
      JG: x0 => x0.index,
      JH: x0 => x0.selectionStart,
      JI: a => a.pop(),
      JJ: (x0,x1) => { x0.allow = x1 },
      JK: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      JL: (x0,x1) => x0.removeItem(x1),
      JM: (x0,x1) => x0.unregister(x1),
      JN: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      K: (exn) => {
        if (exn instanceof Error) {
          return exn.stack;
        } else {
          return null;
        }
      },
      KB: x0 => new ArrayBuffer(x0),
      KC: (x0,x1) => x0.append(x1),
      KD: (x0,x1,x2) => x0.setAttribute(x1,x2),
      KE: x0 => x0.matches,
      KF: s => s.trimLeft(),
      KG: x0 => x0.next(),
      KH: x0 => x0.selectionEnd,
      KI: (map, o, v) => map.set(o, v),
      KJ: (x0,x1) => { x0.title = x1 },
      KK: x0 => x0.send(),
      KL: x0 => x0.localStorage,
      KM: x0 => x0.get_session_id(),
      KN: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      L: o => o === undefined,
      LB: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      LC: (x0,x1,x2,x3) => x0.setProperty(x1,x2,x3),
      LD: x0 => x0.getBoundingClientRect(),
      LE: (x0,x1) => x0.matchMedia(x1),
      LF: (x0,x1) => x0[x1],
      LG: x0 => x0.value,
      LH: x0 => x0.value,
      LI: (map, o) => map.get(o),
      LJ: (x0,x1) => { x0.src = x1 },
      LK: x0 => x0.status,
      LL: (x0,x1,x2) => x0.setItem(x1,x2),
      LM: (x0,x1,x2) => x0.addExceptionStep(x1,x2),
      LN: (x0,x1) => { x0.onerror = x1 },
      M: o => String(o),
      MB: (x0,x1,x2) => new DataView(x0,x1,x2),
      MC: x0 => x0.style,
      MD: (ms, c) =>
      setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
      ME: x0 => x0.matches,
      MF: x0 => x0.index,
      MG: x0 => x0.done,
      MH: x0 => x0.selectionDirection,
      MI: () => new WeakMap(),
      MJ: x0 => x0.firstElementChild,
      MK: x0 => x0.response,
      ML: (x0,x1) => x0.getItem(x1),
      MM: x0 => x0.sessionRecordingStarted(),
      MN: (x0,x1) => { x0.oncancel = x1 },
      N: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      NB: (o, p) => o[p],
      NC: x0 => x0.debugShowSemanticsNodes,
      ND: s => new Date(s * 1000).getTimezoneOffset() * 60,
      NE: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      NF: s => s.toUpperCase(),
      NG: (o, m, a) => o[m].apply(o, a),
      NH: x0 => x0.selectionStart,
      NI: () => {
        return typeof process != "undefined" &&
               Object.prototype.toString.call(process) == "[object process]" &&
               process.platform == "win32"
      },
      NJ: x0 => x0.src,
      NK: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
      NL: (x0,x1) => x0.transferFromImageBitmap(x1),
      NM: x0 => x0.resetSessionId(),
      NN: (x0,x1) => { x0.onchange = x1 },
      O: (x0,x1) => x0.didCreateEngineInitializer(x1),
      OB: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      OC: o => o,
      OD: Date.now,
      OE: f => f.dartFunction,
      OF: x0 => x0.pop(),
      OG: x0 => x0.iterator,
      OH: x0 => x0.selectionEnd,
      OI: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      OJ: (x0,x1) => x0.revokeObjectURL(x1),
      OK: (x0,x1) => { x0.responseType = x1 },
      OL: (x0,x1) => x0.getContext(x1),
      OM: x0 => x0.startSessionRecording(),
      ON: x0 => x0.type,
      P: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      PB: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      PC: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'boolean') return 1;
        return 2;
      },
      PD: (handle) => clearTimeout(handle),
      PE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      PF: x0 => x0.flags,
      PG: () => globalThis.Symbol,
      PH: x0 => x0.keyCode,
      PI: (o, p) => p in o,
      PJ: (x0,x1) => { x0.src = x1 },
      PK: () => new XMLHttpRequest(),
      PL: (x0,x1) => { x0.height = x1 },
      PM: x0 => x0.stopSessionRecording(),
      PN: x0 => x0.lastModified,
      Q: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      QB: o => o.byteOffset,
      QC: (x0,x1) => x0.warn(x1),
      QD: (x0,x1) => x0.closest(x1),
      QE: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      QF: (a, s) => a.join(s),
      QG: (x0,x1) => new Intl.Segmenter(x0,x1),
      QH: (x0,x1) => x0.scrollIntoView(x1),
      QI: x0 => x0.groups,
      QJ: (x0,x1,x2,x3,x4) => globalThis.createImageBitmap(x0,x1,x2,x3,x4),
      QK: x0 => x0.origin,
      QL: (x0,x1) => { x0.width = x1 },
      QM: (x0,x1,x2) => x0.captureException(x1,x2),
      QN: x0 => x0.name,
      R: (x0,x1) => ({initializeEngine: x0,autoStart: x1}),
      RB: o => o.buffer,
      RC: x0 => x0.console,
      RD: x0 => x0.bottom,
      RE: (p, s, f) => p.then(s, (e) => f(e, e === undefined)),
      RF: (x0,x1) => x0.error(x1),
      RG: x0 => x0.Segmenter,
      RH: x0 => x0.multiViewEnabled,
      RI: x0 => new WeakRef(x0),
      RJ: x0 => x0.naturalHeight,
      RK: x0 => x0.location,
      RL: x0 => x0.height,
      RM: x0 => x0.sessionManager,
      RN: (x0,x1) => x0.item(x1),
      S: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      SB: Function.prototype.call.bind(DataView.prototype.getUint8),
      SC: () => globalThis.window,
      SD: x0 => x0.top,
      SE: (o, i) => o[i],
      SF: () => globalThis.console,
      SG: x0 => x0.buffer,
      SH: (x0,x1) => x0.replaceWith(x1),
      SI: x0 => x0.deref(),
      SJ: x0 => x0.naturalWidth,
      SK: () => globalThis.globalThis,
      SL: x0 => x0.width,
      SM: x0 => x0.pathname,
      SN: x0 => x0.length,
      T: x0 => new Promise(x0),
      TB: (b, o) => new DataView(b, o),
      TC: (o, c) => o instanceof c,
      TD: x0 => x0.right,
      TE: o => o.length,
      TF: s => s.trimRight(),
      TG: x0 => x0.wasmMemory,
      TH: (x0,x1) => { x0.type = x1 },
      TI: () => globalThis.WeakRef,
      TJ: x0 => x0.decode(),
      TK: () => new Intl.DateTimeFormat(),
      TL: x0 => x0.rasterEndMilliseconds,
      TM: x0 => x0.host,
      TN: x0 => x0.files,
      U: (x0,x1,x2) => x0.call(x1,x2),
      UB: (b, o, l) => new DataView(b, o, l),
      UC: (x0,x1) => x0.exec(x1),
      UD: x0 => x0.left,
      UE: o => {
        if (o === undefined) return 1;
        var type = typeof o;
        if (type === 'boolean') return 2;
        if (type === 'number') return 3;
        if (type === 'string') return 4;
        if (o instanceof Array) return 5;
        if (ArrayBuffer.isView(o)) {
          if (o instanceof Int8Array) return 6;
          if (o instanceof Uint8Array) return 7;
          if (o instanceof Uint8ClampedArray) return 8;
          if (o instanceof Int16Array) return 9;
          if (o instanceof Uint16Array) return 10;
          if (o instanceof Int32Array) return 11;
          if (o instanceof Uint32Array) return 12;
          if (o instanceof Float32Array) return 13;
          if (o instanceof Float64Array) return 14;
          if (o instanceof DataView) return 15;
        }
        if (o instanceof ArrayBuffer) return 16;
        // Feature check for `SharedArrayBuffer` before doing a type-check.
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
            return 17;
        }
        if (o instanceof Promise) return 18;
        return 19;
      },
      UF: x0 => x0.blur(),
      UG: () => globalThis.window._flutter_skwasmInstance,
      UH: (x0,x1) => { x0.className = x1 },
      UI: (x0,x1) => x0.getRandomValues(x1),
      UJ: (x0,x1) => { x0.decoding = x1 },
      UK: x0 => x0.resolvedOptions(),
      UL: x0 => x0.rasterStartMilliseconds,
      UM: () => globalThis.window.posthog,
      UN: x0 => x0.target,
      V: (constructor, args) => {
        const factoryFunction = constructor.bind.apply(
            constructor, [null, ...args]);
        return new factoryFunction();
      },
      VB: Function.prototype.call.bind(DataView.prototype.getFloat64),
      VC: x0 => x0.length,
      VD: x0 => x0.clientY,
      VE: x0 => x0.language,
      VF: x0 => x0.button,
      VG: () => new TextDecoder(),
      VH: (x0,x1) => { x0.tabIndex = x1 },
      VI: () => globalThis.crypto,
      VJ: (x0,x1) => { x0.crossOrigin = x1 },
      VK: x0 => x0.timeZone,
      VL: x0 => x0.imageBitmaps,
      VM: (x0,x1,x2) => x0._overrideSDKInfo(x1,x2),
      VN: (x0,x1) => x0.replaceChildren(x1),
      W: x0 => new Array(x0),
      WB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float64Array) return 1;
        return 2;
      },
      WC: (x0,x1) => { x0.lastIndex = x1 },
      WD: x0 => x0.clientX,
      WE: (x0,x1,x2,x3) => x0.register(x1,x2,x3),
      WF: x0 => x0.innerHeight,
      WG: (d, digits) => d.toFixed(digits),
      WH: (x0,x1) => { x0.name = x1 },
      WI: l => new DataView(new ArrayBuffer(l)),
      WJ: (x0,x1) => x0.createObjectURL(x1),
      WK: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
      WL: x0 => x0.canvasKitMaximumSurfaces,
      WM: (x0,x1) => globalThis.Object.assign(x0,x1),
      WN: x0 => x0.click(),
      X: o => [o],
      XB: Function.prototype.call.bind(DataView.prototype.setFloat64),
      XC: (s, m) => {
        try {
          return new RegExp(s, m);
        } catch (e) {
          return String(e);
        }
      },
      XD: x0 => x0.changedTouches,
      XE: () => globalThis.window.FinalizationRegistry,
      XF: x0 => x0.innerWidth,
      XG: x0 => x0.maxHeight,
      XH: (x0,x1) => { x0.placeholder = x1 },
      XI: (o, offsetInBytes, lengthInBytes) => {
        var dst = new ArrayBuffer(lengthInBytes);
        new Uint8Array(dst).set(new Uint8Array(o, offsetInBytes, lengthInBytes));
        return new DataView(dst);
      },
      XJ: x0 => x0.URL,
      XK: x0 => x0.history,
      XL: x0 => x0.nextSibling,
      XM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      XN: (x0,x1,x2) => x0.setAttribute(x1,x2),
      Y: (o0, o1) => [o0, o1],
      YB: (t, s) => t.set(s),
      YC: o => o instanceof RegExp,
      YD: x0 => x0.offsetY,
      YE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      YF: x0 => x0.height,
      YG: x0 => x0.maxWidth,
      YH: (x0,x1) => { x0.autocomplete = x1 },
      YI: (a, s, e) => a.slice(s, e),
      YJ: x0 => new Blob(x0),
      YK: x0 => x0.href,
      YL: (x0,x1) => x0.debug(x1),
      YM: (x0,x1) => x0.set_config(x1),
      YN: (x0,x1) => { x0.accept = x1 },
      Z: (o0, o1, o2) => [o0, o1, o2],
      ZB: Function.prototype.call.bind(DataView.prototype.setFloat32),
      ZC: (string, times) => string.repeat(times),
      ZD: x0 => x0.offsetX,
      ZE: x0 => new window.FinalizationRegistry(x0),
      ZF: x0 => x0.width,
      ZG: x0 => x0.minHeight,
      ZH: (x0,x1) => { x0.name = x1 },
      ZI: (x0,x1) => x0.appendChild(x1),
      ZJ: (x0,x1,x2,x3,x4) => ({type: x0,data: x1,premultiplyAlpha: x2,colorSpaceConversion: x3,preferAnimation: x4}),
      ZK: () => new Array(),
      ZL: x0 => x0.hostElement,
      ZM: (o, p, v) => o[p] = v,
      ZN: (x0,x1) => { x0.multiple = x1 },
      a: (o0, o1, o2, o3) => [o0, o1, o2, o3],
      aB: Function.prototype.call.bind(DataView.prototype.getFloat32),
      aC: x0 => x0.dotAll,
      aD: x0 => x0.type,
      aE: (x0,x1) => x0.unregister(x1),
      aF: x0 => x0.clientHeight,
      aG: x0 => x0.minWidth,
      aH: (x0,x1) => { x0.placeholder = x1 },
      aI: x0 => x0.remove(),
      aJ: x0 => new window.ImageDecoder(x0),
      aK: (x0,x1) => new WebSocket(x0,x1),
      aL: x0 => x0.location,
      aM: x0 => x0.getBoundingClientRect(),
      aN: (x0,x1) => { x0.type = x1 },
      b: (x0,x1,x2) => { x0[x1] = x2 },
      bB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float32Array) return 1;
        return 2;
      },
      bC: x0 => x0.unicode,
      bD: x0 => x0.maxTouchPoints,
      bE: (x0,x1) => x0.contains(x1),
      bF: x0 => x0.clientWidth,
      bG: x0 => x0.debugSkipFontRetryDelay,
      bH: (x0,x1) => { x0.action = x1 },
      bI: x0 => x0.childElementCount,
      bJ: x0 => x0.name,
      bK: x0 => x0.reason,
      bL: (x0,x1) => x0.getModifierState(x1),
      bM: (x0,x1,x2,x3) => ({x: x0,y: x1,width: x2,height: x3}),
      bN: x0 => x0.sessionStorage,
      c: o => o,
      cB: Function.prototype.call.bind(DataView.prototype.getUint32),
      cC: x0 => x0.ignoreCase,
      cD: x0 => x0.platform,
      cE: (s) => +s,
      cF: (x0,x1) => { x0.content = x1 },
      cG: x0 => x0.status,
      cH: (x0,x1) => { x0.method = x1 },
      cI: x0 => x0.call(),
      cJ: x0 => x0.repetitionCount,
      cK: x0 => x0.code,
      cL: x0 => x0.metaKey,
      cM: x0 => x0.top,
      cN: (x0,x1,x2,x3) => x0.decrypt(x1,x2,x3),
      d: (o, p) => o[p],
      dB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint32Array) return 1;
        return 2;
      },
      dC: x0 => x0.multiline,
      dD: x0 => x0.body,
      dE: s => {
        if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(s)) {
          return NaN;
        }
        return parseFloat(s);
      },
      dF: (x0,x1) => { x0.name = x1 },
      dG: (x0,x1,x2) => x0.set(x1,x2),
      dH: (x0,x1) => { x0.noValidate = x1 },
      dI: () => globalThis.window,
      dJ: x0 => x0.frameCount,
      dK: (o, t) => typeof o === t,
      dL: x0 => x0.altKey,
      dM: x0 => x0.left,
      dN: x0 => x0.subtle,
      e: () => globalThis,
      eB: Function.prototype.call.bind(DataView.prototype.getInt32),
      eC: (string, token) => string.split(token),
      eD: () => globalThis.document,
      eE: s => s.trim(),
      eF: x0 => x0.head,
      eG: x0 => x0.arrayBuffer(),
      eH: (x0,x1) => x0.removeAttribute(x1),
      eI: x0 => x0.body,
      eJ: x0 => x0.selectedTrack,
      eK: x0 => x0.data,
      eL: x0 => x0.ctrlKey,
      eM: (x0,x1) => x0.warn(x1),
      eN: x0 => x0.crypto,
      f: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      fB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int32Array) return 1;
        return 2;
      },
      fC: o => o instanceof Array,
      fD: (x0,x1,x2) => x0.addEventListener(x1,x2),
      fE: x0 => x0.classList,
      fF: (x0,x1) => x0.removeChild(x1),
      fG: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof ArrayBuffer) return 1;
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
          return 2;
        }
        return 3;
      },
      fH: x0 => x0.isConnected,
      fI: () => globalThis.document,
      fJ: x0 => x0.completed,
      fK: (x0,x1,x2) => x0.close(x1,x2),
      fL: x0 => x0.isComposing,
      fM: () => globalThis.console,
      fN: x0 => x0.isSecureContext,
      g: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      gB: o => o instanceof Uint16Array,
      gC: (a, i) => a[i],
      gD: x0 => x0.hasFocus(),
      gE: x0 => x0.preventDefault(),
      gF: x0 => x0.firstChild,
      gG: (x0,x1) => x0.fetch(x1),
      gH: x0 => x0.click(),
      gI: (x0,x1) => { x0.display = x1 },
      gJ: x0 => x0.ready,
      gK: (x0,x1) => x0.close(x1),
      gL: x0 => x0.code,
      gM: (x0,x1) => x0.querySelectorAll(x1),
      gN: (x0,x1,x2,x3,x4,x5,x6,x7) => x0.unwrapKey(x1,x2,x3,x4,x5,x6,x7),
      h: (x0,x1) => ({addView: x0,removeView: x1}),
      hB: Function.prototype.call.bind(DataView.prototype.getUint16),
      hC: a => a.length,
      hD: x0 => x0.relatedTarget,
      hE: x0 => x0.parent,
      hF: x0 => x0.viewConstraints,
      hG: x0 => x0.fontFallbackBaseUrl,
      hH: (x0,x1) => x0.getElementsByClassName(x1),
      hI: x0 => x0.style,
      hJ: x0 => x0.tracks,
      hK: x0 => x0.close(),
      hL: x0 => x0.repeat,
      hM: (x0,x1) => x0.contains(x1),
      hN: (x0,x1,x2,x3,x4,x5) => x0.importKey(x1,x2,x3,x4,x5),
      i: (l, r) => l === r,
      iB: o => o instanceof Int16Array,
      iC: (x0,x1) => x0.test(x1),
      iD: x0 => x0.shiftKey,
      iE: x0 => x0.timeStamp,
      iF: x0 => x0.hostElement,
      iG: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      iH: (x0,x1) => x0.dispatchEvent(x1),
      iI: (x0,x1) => x0.createElement(x1),
      iJ: x0 => x0.close(),
      iK: (x0,x1) => x0.send(x1),
      iL: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      iM: (x0,x1) => x0.querySelectorAll(x1),
      iN: (x0,x1,x2,x3) => x0.generateKey(x1,x2,x3),
      j: x0 => x0.random(),
      jB: Function.prototype.call.bind(DataView.prototype.getInt16),
      jC: x0 => x0.userAgent,
      jD: (decoder, codeUnits) => decoder.decode(codeUnits),
      jE: (x0,x1) => x0.hasAttribute(x1),
      jF: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      jG: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF64ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      jH: (x0,x1) => x0.createEvent(x1),
      jI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      jJ: (x0,x1) => ({frameIndex: x0,completeFramesOnly: x1}),
      jK: x0 => x0.readyState,
      jL: x0 => x0.userAgent,
      jM: (x0,x1) => x0.item(x1),
      jN: (x0,x1,x2,x3,x4) => x0.wrapKey(x1,x2,x3,x4),
      k: o => o,
      kB: o => o instanceof Uint8ClampedArray,
      kC: x0 => x0.navigator,
      kD: () => new TextDecoder("utf-8", {fatal: true}),
      kE: x0 => x0.buttons,
      kF: x0 => ({runApp: x0}),
      kG: (x0,x1,x2,x3) => x0.pushState(x1,x2,x3),
      kH: (x0,x1,x2,x3) => x0.initEvent(x1,x2,x3),
      kI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      kJ: (x0,x1) => x0.decode(x1),
      kK: (x0,x1) => { x0.binaryType = x1 },
      kL: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      kM: x0 => x0.length,
      kN: (x0,x1,x2) => x0.exportKey(x1,x2),
      l: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'number') return 1;
        return 2;
      },
      lB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint8Array) return 1;
        return 2;
      },
      lC: Function.prototype.call.bind(String.prototype.toLowerCase),
      lD: () => new TextDecoder("utf-8", {fatal: false}),
      lE: x0 => x0.ctrlKey,
      lF: (handle) => clearInterval(handle),
      lG: x0 => x0.history,
      lH: x0 => x0.readText(),
      lI: (x0,x1,x2) => x0.addEventListener(x1,x2),
      lJ: x0 => x0.displayHeight,
      lK: x0 => new BroadcastChannel(x0),
      lL: (x0,x1) => x0.key(x1),
      lM: x0 => x0.getRootNode(),
      lN: (x0,x1) => x0.getRandomValues(x1),
      m: () => globalThis.Math,
      mB: Function.prototype.call.bind(DataView.prototype.setInt32),
      mC: Object.is,
      mD: (a, i, v) => a[i] = v,
      mE: x0 => x0.y,
      mF: (ms, c) =>
      setInterval(() => dartInstance.exports.$invokeCallback(c), ms),
      mG: x0 => x0.search,
      mH: x0 => x0.clipboard,
      mI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      mJ: x0 => x0.displayWidth,
      mK: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      mL: x0 => x0.length,
      mM: (x0,x1) => x0.closest(x1),
      mN: (x0,x1,x2,x3) => x0.encrypt(x1,x2,x3),
      n: (x0,x1) => x0.prepend(x1),
      nB: Function.prototype.call.bind(DataView.prototype.setUint32),
      nC: x0 => x0.vendor,
      nD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI8ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      nE: x0 => x0.x,
      nF: () => Date.now(),
      nG: x0 => x0.location,
      nH: (x0,x1) => x0.writeText(x1),
      nI: x0 => x0.head,
      nJ: x0 => x0.duration,
      nK: x0 => x0.close(),
      nL: (x0,x1,x2,x3) => x0.identify(x1,x2,x3),
      nM: x0 => x0.host,
      nN: x0 => x0.length,
      o: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      oB: Function.prototype.call.bind(DataView.prototype.setInt16),
      oC: (x0,x1) => x0.createTextNode(x1),
      oD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI16ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      oE: x0 => x0.scrollTop,
      oF: Function.prototype.call.bind(DataView.prototype.getBigInt64),
      oG: x0 => x0.pathname,
      oH: x0 => x0.unlock(),
      oI: (x0,x1) => { x0.src = x1 },
      oJ: x0 => x0.image,
      oK: (x0,x1) => x0.postMessage(x1),
      oL: (x0,x1,x2) => x0.setPersonProperties(x1,x2),
      oM: (o) => {
        const typeofValue = typeof o;
        return (typeofValue === 'object') ||
            typeofValue === 'function';
      },
      oN: x0 => x0.getReader(),
      p: b => !!b,
      pB: Function.prototype.call.bind(DataView.prototype.setUint16),
      pC: (x0,x1) => { x0.id = x1 },
      pD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      pE: x0 => x0.offsetTop,
      pF: Function.prototype.call.bind(DataView.prototype.setBigInt64),
      pG: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
      pH: (x0,x1) => x0.lock(x1),
      pI: (x0,x1) => { x0.type = x1 },
      pJ: () => globalThis.window.ImageDecoder,
      pK: (x0,x1) => { x0.onmessage = x1 },
      pL: (x0,x1,x2,x3) => x0.capture(x1,x2,x3),
      pM: x0 => x0.config,
      pN: x0 => x0.value,
      q: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      qB: Function.prototype.call.bind(DataView.prototype.setUint8),
      qC: (x0,x1) => { x0.nonce = x1 },
      qD: x0 => x0.visibilityState,
      qE: x0 => x0.scrollLeft,
      qF: (o, start, length) => new BigInt64Array(o.buffer, o.byteOffset + start, length),
      qG: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      qH: x0 => x0.orientation,
      qI: x0 => x0.baseURI,
      qJ: (x0,x1) => { x0.position = x1 },
      qK: () => new AbortController(),
      qL: (x0,x1) => x0.captureLog(x1),
      qM: (x0,x1) => x0.querySelector(x1),
      qN: x0 => x0.done,
      r: (x0,x1) => x0.focus(x1),
      rB: Function.prototype.call.bind(DataView.prototype.setInt8),
      rC: x0 => x0.nonce,
      rD: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      rE: x0 => x0.offsetLeft,
      rF: () => typeof dartUseDateNowForTicks !== "undefined",
      rG: o => Object.keys(o),
      rH: (x0,x1) => x0.querySelector(x1),
      rI: x0 => ({cache: x0}),
      rJ: () => new FileReader(),
      rK: (x0,x1,x2,x3,x4,x5) => ({method: x0,headers: x1,body: x2,credentials: x3,redirect: x4,signal: x5}),
      rL: (x0,x1) => x0.alias(x1),
      rM: (x0,x1) => x0.append(x1),
      rN: x0 => x0.read(),
      s: () => ({}),
      sB: Function.prototype.call.bind(DataView.prototype.getInt8),
      sC: () => globalThis.window.flutterConfiguration,
      sD: x0 => x0.disconnect(),
      sE: x0 => x0.offsetParent,
      sF: () => Date.now(),
      sG: x0 => x0.state,
      sH: (x0,x1) => { x0.title = x1 },
      sI: (x0,x1,x2) => x0.fetch(x1,x2),
      sJ: (x0,x1) => x0.readAsArrayBuffer(x1),
      sK: (x0,x1) => globalThis.fetch(x0,x1),
      sL: x0 => x0.get_distinct_id(),
      sM: (x0,x1) => { x0.id = x1 },
      sN: x0 => x0.body,
      t: (o, p, v) => o[p] = v,
      tB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int8Array) return 1;
        return 2;
      },
      tC: (x0,x1) => x0.attachShadow(x1),
      tD: x0 => new Intl.Locale(x0),
      tE: (o, p, r) => o.replace(p, () => r),
      tF: () => 1000 * performance.now(),
      tG: x0 => x0.hash,
      tH: (x0,x1) => x0.vibrate(x1),
      tI: x0 => x0.json(),
      tJ: x0 => x0.result,
      tK: (x0,x1) => x0.get(x1),
      tL: x0 => x0.reset(),
      tM: x0 => globalThis.URL.revokeObjectURL(x0),
      tN: (x0,x1) => new OffscreenCanvas(x0,x1),
      u: () => [],
      uB: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      uC: (x0,x1) => x0.createElement(x1),
      uD: x0 => x0.region,
      uE: (o, p, r) => o.replaceAll(p, () => r),
      uF: (x0,x1) => x0.requestAnimationFrame(x1),
      uG: x0 => x0.state,
      uH: x0 => x0.content,
      uI: x0 => x0.navigator,
      uJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      uK: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1,x2) { return wasmFunction(f,arguments.length,x0,x1,x2) }),
      uL: (x0,x1) => x0.debug(x1),
      uM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      uN: x0 => x0.assetBase,
      v: (a, i) => a.push(i),
      vB: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      vC: x0 => x0.scale,
      vD: x0 => x0.script,
      vE: x0 => x0.deltaMode,
      vF: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      vG: (x0,x1) => x0.go(x1),
      vH: x0 => x0.document,
      vI: x0 => x0.naturalHeight,
      vJ: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      vK: (x0,x1) => x0.forEach(x1),
      vL: (x0,x1) => x0.isFeatureEnabled(x1),
      vM: (x0,x1,x2,x3) => x0.toBlob(x1,x2,x3),
      vN: x0 => x0.loader,
      w: x0 => new Int8Array(x0),
      wB: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      wC: x0 => x0.visualViewport,
      wD: x0 => x0.language,
      wE: x0 => x0.deltaY,
      wF: x0 => x0.now(),
      wG: x0 => x0.parentElement,
      wH: (x0,x1,x2) => x0.insertBefore(x1,x2),
      wI: x0 => x0.naturalWidth,
      wJ: (x0,x1,x2,x3) => x0.removeEventListener(x1,x2,x3),
      wK: x0 => x0.name,
      wL: (x0,x1,x2,x3) => x0.group(x1,x2,x3),
      wM: x0 => globalThis.URL.createObjectURL(x0),
      wN: () => globalThis._flutter,
      x: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI8ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      xB: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      xC: x0 => x0.devicePixelRatio,
      xD: x0 => x0.languages,
      xE: x0 => x0.deltaX,
      xF: x0 => x0.performance,
      xG: (x0,x1) => x0.querySelectorAll(x1),
      xH: x0 => x0.id,
      xI: (x0,x1) => x0.createElement(x1),
      xJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      xK: x0 => x0.statusText,
      xL: x0 => x0.reloadFeatureFlags(),
      xM: x0 => x0.size,
      y: x0 => new Uint8Array(x0),
      yB: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      yC: x0 => x0.height,
      yD: (x0,x1) => x0.observe(x1),
      yE: x0 => x0.wheelDeltaY,
      yF: x0 => new Uint8Array(x0),
      yG: (x0,x1) => x0.removeProperty(x1),
      yH: x0 => x0.offsetHeight,
      yI: (x0,x1) => { x0.pointerEvents = x1 },
      yJ: () => new XMLHttpRequest(),
      yK: x0 => x0.url,
      yL: (x0,x1,x2) => x0.setPersonPropertiesForFlags(x1,x2),
      yM: (x0,x1,x2,x3) => x0.drawImage(x1,x2,x3),
      z: x0 => new Uint8ClampedArray(x0),
      zB: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      zC: x0 => x0.width,
      zD: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      zE: x0 => x0.wheelDeltaX,
      zF: (x0,x1,x2) => x0.slice(x1,x2),
      zG: (x0,x1) => x0.add(x1),
      zH: x0 => x0.offsetWidth,
      zI: (x0,x1) => { x0.height = x1 },
      zJ: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      zK: x0 => x0.status,
      zL: x0 => x0.resetPersonPropertiesForFlags(),
      zM: (x0,x1,x2,x3,x4,x5) => x0.drawImage(x1,x2,x3,x4,x5),

    };

    const baseImports = {
      _: dart2wasm,
      Math: Math,
      Date: Date,
      Object: Object,
      Array: Array,
      Reflect: Reflect,
      WebAssembly: {
        JSTag: WebAssembly.JSTag,
      },
      "": new Proxy({}, { get(_, prop) { return prop; } }),

    };

    const jsStringPolyfill = {
      "charCodeAt": (s, i) => s.charCodeAt(i),
      "compare": (s1, s2) => {
        if (s1 < s2) return -1;
        if (s1 > s2) return 1;
        return 0;
      },
      "concat": (s1, s2) => s1 + s2,
      "equals": (s1, s2) => s1 === s2,
      "fromCharCode": (i) => String.fromCharCode(i),
      "length": (s) => s.length,
      "substring": (s, a, b) => s.substring(a, b),
      "fromCharCodeArray": (a, start, end) => {
        if (end <= start) return '';

        const read = dartInstance.exports.$wasmI16ArrayGet;
        let result = '';
        let index = start;
        const chunkLength = Math.min(end - index, 500);
        let array = new Array(chunkLength);
        while (index < end) {
          const newChunkLength = Math.min(end - index, 500);
          for (let i = 0; i < newChunkLength; i++) {
            array[i] = read(a, index++);
          }
          if (newChunkLength < chunkLength) {
            array = array.slice(0, newChunkLength);
          }
          result += String.fromCharCode(...array);
        }
        return result;
      },
      "intoCharCodeArray": (s, a, start) => {
        if (s === '') return 0;

        const write = dartInstance.exports.$wasmI16ArraySet;
        for (var i = 0; i < s.length; ++i) {
          write(a, start++, s.charCodeAt(i));
        }
        return s.length;
      },
      "test": (s) => typeof s == "string",
    };


    

    dartInstance = await WebAssembly.instantiate(this.module, {
      ...baseImports,
      ...additionalImports,
      
      "wasm:js-string": jsStringPolyfill,
    });

    return new InstantiatedApp(this, dartInstance);
  }
}

class InstantiatedApp {
  constructor(compiledApp, instantiatedModule) {
    this.compiledApp = compiledApp;
    this.instantiatedModule = instantiatedModule;
  }

  // Call the main function with the given arguments.
  invokeMain(...args) {
    this.instantiatedModule.exports.$invokeMain(args);
  }
}
