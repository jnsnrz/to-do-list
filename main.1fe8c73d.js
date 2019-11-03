/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/normalize.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/normalize.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/*! normalize.scss v0.1.0 | MIT License | based on git.io/normalize */\\n/**\\n * 1. Set default font family to sans-serif.\\n * 2. Prevent iOS text size adjust after orientation change, without disabling\\n *    user zoom.\\n */\\nhtml {\\n  font-family: sans-serif;\\n  /* 1 */\\n  -ms-text-size-adjust: 100%;\\n  /* 2 */\\n  -webkit-text-size-adjust: 100%;\\n  /* 2 */ }\\n\\n/**\\n * Remove default margin.\\n */\\nbody {\\n  margin: 0; }\\n\\n/* HTML5 display definitions\\n   ========================================================================== */\\n/**\\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\\n * and Firefox.\\n * Correct `block` display not defined for `main` in IE 11.\\n */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmain,\\nmenu,\\nnav,\\nsection,\\nsummary {\\n  display: block; }\\n\\n/**\\n * 1. Correct `inline-block` display not defined in IE 8/9.\\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\\n */\\naudio,\\ncanvas,\\nprogress,\\nvideo {\\n  display: inline-block;\\n  /* 1 */\\n  vertical-align: baseline;\\n  /* 2 */ }\\n\\n/**\\n * Prevent modern browsers from displaying `audio` without controls.\\n * Remove excess height in iOS 5 devices.\\n */\\naudio:not([controls]) {\\n  display: none;\\n  height: 0; }\\n\\n/**\\n * Address `[hidden]` styling not present in IE 8/9/10.\\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\\n */\\n[hidden],\\ntemplate {\\n  display: none; }\\n\\n/* Links\\n   ========================================================================== */\\n/**\\n * Remove the gray background color from active links in IE 10.\\n */\\na {\\n  background-color: transparent; }\\n\\n/**\\n * Improve readability when focused and also mouse hovered in all browsers.\\n */\\na:active,\\na:hover {\\n  outline: 0; }\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n/**\\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\\n */\\nabbr[title] {\\n  border-bottom: 1px dotted; }\\n\\n/**\\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\\n */\\nb,\\nstrong {\\n  font-weight: bold; }\\n\\n/**\\n * Address styling not present in Safari and Chrome.\\n */\\ndfn {\\n  font-style: italic; }\\n\\n/**\\n * Address variable `h1` font-size and margin within `section` and `article`\\n * contexts in Firefox 4+, Safari, and Chrome.\\n */\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0; }\\n\\n/**\\n * Address styling not present in IE 8/9.\\n */\\nmark {\\n  background: #ff0;\\n  color: #000; }\\n\\n/**\\n * Address inconsistent and variable font size in all browsers.\\n */\\nsmall {\\n  font-size: 80%; }\\n\\n/**\\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\\n */\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline; }\\n\\nsup {\\n  top: -0.5em; }\\n\\nsub {\\n  bottom: -0.25em; }\\n\\n/* Embedded content\\n   ========================================================================== */\\n/**\\n * Remove border when inside `a` element in IE 8/9/10.\\n */\\nimg {\\n  border: 0; }\\n\\n/**\\n * Correct overflow not hidden in IE 9/10/11.\\n */\\nsvg:not(:root) {\\n  overflow: hidden; }\\n\\n/* Grouping content\\n   ========================================================================== */\\n/**\\n * Address margin not present in IE 8/9 and Safari.\\n */\\nfigure {\\n  margin: 1em 40px; }\\n\\n/**\\n * Address differences between Firefox and other browsers.\\n */\\nhr {\\n  -moz-box-sizing: content-box;\\n  box-sizing: content-box;\\n  height: 0; }\\n\\n/**\\n * Contain overflow in all browsers.\\n */\\npre {\\n  overflow: auto; }\\n\\n/**\\n * Address odd `em`-unit font size rendering in all browsers.\\n */\\ncode,\\nkbd,\\npre,\\nsamp {\\n  font-family: monospace, monospace;\\n  font-size: 1em; }\\n\\n/* Forms\\n   ========================================================================== */\\n/**\\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\\n * styling of `select`, unless a `border` property is set.\\n */\\n/**\\n * 1. Correct color not being inherited.\\n *    Known issue: affects color of disabled elements.\\n * 2. Correct font properties not being inherited.\\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\\n */\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  color: inherit;\\n  /* 1 */\\n  font: inherit;\\n  /* 2 */\\n  margin: 0;\\n  /* 3 */ }\\n\\n/**\\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\\n */\\nbutton {\\n  overflow: visible; }\\n\\n/**\\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\\n * All other form control elements do not inherit `text-transform` values.\\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\\n * Correct `select` style inheritance in Firefox.\\n */\\nbutton,\\nselect {\\n  text-transform: none; }\\n\\n/**\\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\\n *    and `video` controls.\\n * 2. Correct inability to style clickable `input` types in iOS.\\n * 3. Improve usability and consistency of cursor style between image-type\\n *    `input` and others.\\n */\\nbutton,\\nhtml input[type=\\\"button\\\"],\\ninput[type=\\\"reset\\\"],\\ninput[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n  /* 2 */\\n  cursor: pointer;\\n  /* 3 */ }\\n\\n/**\\n * Re-set default cursor for disabled elements.\\n */\\nbutton[disabled],\\nhtml input[disabled] {\\n  cursor: default; }\\n\\n/**\\n * Remove inner padding and border in Firefox 4+.\\n */\\nbutton::-moz-focus-inner,\\ninput::-moz-focus-inner {\\n  border: 0;\\n  padding: 0; }\\n\\n/**\\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\\n * the UA stylesheet.\\n */\\ninput {\\n  line-height: normal; }\\n\\n/**\\n * It's recommended that you don't attempt to style these elements.\\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\\n *\\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\\n * 2. Remove excess padding in IE 8/9/10.\\n */\\ninput[type=\\\"checkbox\\\"],\\ninput[type=\\\"radio\\\"] {\\n  box-sizing: border-box;\\n  /* 1 */\\n  padding: 0;\\n  /* 2 */ }\\n\\n/**\\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\\n * `font-size` values of the `input`, it causes the cursor style of the\\n * decrement button to change from `default` to `text`.\\n */\\ninput[type=\\\"number\\\"]::-webkit-inner-spin-button,\\ninput[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto; }\\n\\n/**\\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\\n *    (include `-moz` to future-proof).\\n */\\ninput[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield;\\n  /* 1 */\\n  -moz-box-sizing: content-box;\\n  -webkit-box-sizing: content-box;\\n  /* 2 */\\n  box-sizing: content-box; }\\n\\n/**\\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\\n * Safari (but not Chrome) clips the cancel button when the search input has\\n * padding (and `textfield` appearance).\\n */\\ninput[type=\\\"search\\\"]::-webkit-search-cancel-button,\\ninput[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none; }\\n\\n/**\\n * Define consistent border, margin, and padding.\\n */\\nfieldset {\\n  border: 1px solid #c0c0c0;\\n  margin: 0 2px;\\n  padding: 0.35em 0.625em 0.75em; }\\n\\n/**\\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\\n */\\nlegend {\\n  border: 0;\\n  /* 1 */\\n  padding: 0;\\n  /* 2 */ }\\n\\n/**\\n * Remove default vertical scrollbar in IE 8/9/10/11.\\n */\\ntextarea {\\n  overflow: auto; }\\n\\n/**\\n * Don't inherit the `font-weight` (applied by a rule above).\\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\\n */\\noptgroup {\\n  font-weight: bold; }\\n\\n/* Tables\\n   ========================================================================== */\\n/**\\n * Remove most spacing between table cells.\\n */\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\ntd,\\nth {\\n  padding: 0; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/sass/normalize.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"h1 {\\n  font-size: 20px; }\\n\\n.hidden {\\n  display: none; }\\n\\n.btn {\\n  border-radius: 30px;\\n  -webkit-appearance: none;\\n  border: 1px solid #000;\\n  background-color: #fff;\\n  padding: 10px; }\\n\\n.form-element {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 10px 0; }\\n  .form-element label {\\n    margin-bottom: 10px; }\\n\\n.main-content {\\n  border-top: 3px solid #000;\\n  border-bottom: 3px solid #000;\\n  position: relative;\\n  min-height: 90vh;\\n  padding: 30px; }\\n  .main-content__top {\\n    display: flex;\\n    justify-content: space-between; }\\n\\n.overlay {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.32);\\n  z-index: 10; }\\n\\n.modal {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  width: 300px;\\n  padding: 50px;\\n  height: auto;\\n  z-index: 20;\\n  background-color: #fff; }\\n  .modal-content form {\\n    display: flex;\\n    flex-direction: column; }\\n  .modal-btns {\\n    display: flex;\\n    justify-content: space-between; }\\n    .modal-btns button {\\n      margin: 20px 0;\\n      width: 45%; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/sass/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/classCallCheck'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _sass_normalize_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/normalize.scss */ \"./src/sass/normalize.scss\");\n/* harmony import */ var _sass_normalize_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_normalize_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // import 'airbnb-browser-shims';\n// document.addEventListener(\"DOMContentLoaded\", function(event) {\n//     const element = document.createElement('h1')\n//     element.innerHTML = \"Hello World\"\n//     document.body.appendChild(element)\n//   })\n\n/**\r\n * Creates new Task\r\n */\n\nvar Task = function Task(_ref) {\n  var title = _ref.title,\n      description = _ref.description,\n      priority = _ref.priority,\n      status = _ref.status;\n\n  !(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/classCallCheck'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, Task);\n\n  this.title = title;\n  this.description = description;\n  this.priority = priority;\n  this.status = status || 'open';\n} // get title() {\n//   return this.title;\n// }\n// get description() {\n//   return this.description;\n// }\n// get priority() {\n//   return this.priority;\n// }\n// get status() {\n//   return this.status;\n// }\n// set title(title) {\n//   this.title = title;\n// }\n// set description(desc) {\n//   this.description = desc;\n// }\n// set priority(priority) {\n//   this.priority = priority;\n// }\n// set status(status) {\n//   this.status = status;\n// }\n;\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var area = document.querySelector('#area');\n  var overlay = document.querySelector('.overlay');\n  var modal = document.querySelector('.modal');\n  var openFormBtn = document.querySelector('#open-form-btn');\n  var closeFormBtn = document.querySelector('#close-form-btn');\n  var createTaskBtn = document.querySelector('#create-task-btn');\n  var newTaskForm = document.querySelector('#new-task-form');\n  openFormBtn.addEventListener('click', openForm);\n  closeFormBtn.addEventListener('click', cancel);\n  createTaskBtn.addEventListener('click', createTask);\n\n  function createTaskElement(task) {\n    var statusOptions = ['done', 'edit', 'delete'];\n    var item = document.createElement('div');\n    var itemTitle = document.createElement('span');\n    var itemDescription = document.createElement('p');\n    var itemPriority = document.createElement('span');\n    var itemStatus = document.createElement('select');\n\n    for (var _i; _i > statusOptions.length; _i++) {\n      var itemStatusOption = document.createElement('option');\n      itemStatusOption.value = statusOptions[_i];\n      itemStatusOption.text = statusOptions[_i];\n      itemStatus.appendChild(itemStatusOption);\n      itemTitle.innerHTML(task.title());\n      itemDescription.innerHTML(task.description());\n      itemPriority.innerHTML(item.priority()); // itemStatus\n\n      console.log(item);\n      return item;\n    }\n\n    item.appendChild(itemTitle);\n    item.appendChild(itemDescription);\n    item.appendChild(itemPriority);\n    item.appendChild(itemStatus);\n  }\n\n  function updateArea(content) {\n    area.innerHTML(content);\n  }\n  /**\r\n   * Creates a new task\r\n   *\r\n   */\n\n\n  function createTask() {\n    cancel();\n    return false;\n  }\n  /**\r\n   * Opens a modal with form\r\n   *\r\n   */\n\n\n  function openForm() {\n    overlay.classList.remove('hidden');\n    modal.classList.remove('hidden');\n  }\n  /**\r\n   * closes a modal with form\r\n   *\r\n   */\n\n\n  function cancel() {\n    overlay.classList.add('hidden');\n    modal.classList.add('hidden');\n    clearForm();\n  }\n\n  function clearForm() {\n    newTaskForm.reset();\n  }\n\n  var tasks = [];\n  var testTask = new Task({\n    title: 'test title',\n    description: 'test description',\n    priority: 'high',\n    status: 'open'\n  });\n  tasks.push(testTask);\n  console.log('--------------------', tasks);\n\n  for (var j = 0; j > tasks.length; j++) {\n    var item = createTaskElement(tasks[i]);\n    updateArea(item);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/sass/normalize.scss":
/*!*********************************!*\
  !*** ./src/sass/normalize.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./normalize.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/normalize.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/sass/normalize.scss?");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/sass/styles.scss?");

/***/ })

/******/ });