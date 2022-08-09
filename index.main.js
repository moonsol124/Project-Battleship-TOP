/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n    font-family: Helvetica, Arial, sans-serif;\n}\n\n.container {\n    min-height: 100vh;\n    width: 100%;\n    display: grid;\n    grid-template-rows: 2fr 10fr 2fr;\n}\n\n.header, .footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: yellow;\n    font-size: 30px;\n    font-weight: bold;\n    font-style: italic;\n    border: 1px solid black;\n}\n\n.main {\n    display: grid;\n    grid-template-columns: 1fr 4fr 4fr 1fr;\n    grid-template-rows: 2fr 1fr;\n}\n\n.gb {\n    display: grid;\n    gap: 1rem;\n    /* width: 80%;\n    height: 80%; */\n}\n\n.gb-grid {\n    display: grid;\n    border: solid black 1px;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    grid-row: 1/3;\n    padding: 0.5rem;\n}\n\n.gb-grid > div {\n    background-color: RGB(220, 220, 220);\n    border: 0.1px solid black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.gb-grid > .ship {\n    border: 3px solid blue;\n}\n\n.turn {\n    pointer-events: none;\n}\n\n.bullet {\n    border: 1px solid black;\n    background-color: black;\n    border-radius: 100%;\n    width: 15px;\n    height: 15px;\n}\n.player {\n    font-size: 1.5rem;\n    padding: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    grid-row: 2/3;\n    border: 1px solid black;\n    font-weight: bold;\n    /* flex-wrap: wrap; */\n}\n\n#grid1 {\n    grid-column: 2/3;\n}\n\n#grid2 {\n    grid-column: 3/4;\n}\n\n.score-board {\n    display: flex;\n    flex-direction: column;\n    background-color: RGB(220, 220, 220);\n    border: 1px solid black;\n}\n\n.ship-container {\n    width: 100%;\n    height: 100%;\n    padding: 10px;\n    font-size: 10px;\n    display: flex;\n    gap: 2px;\n    color: red;\n}\n\n.ship-container > div {\n    width: 10px;\n    height: 10px;\n    background-color: blue;\n}\n\n.gb2-scoreBoard {\n    grid-column: 4/5;\n    grid-row: 1;\n}\n\n.gb2-scoreBoard > div {\n    justify-content: end;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,yCAAyC;AAC7C;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,wBAAwB;IACxB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,SAAS;IACT;kBACc;AAClB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,sCAAsC;IACtC,mCAAmC;IACnC,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,oCAAoC;IACpC,yBAAyB;IACzB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,oCAAoC;IACpC,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,eAAe;IACf,aAAa;IACb,QAAQ;IACR,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,oBAAoB;AACxB","sourcesContent":["* {\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n    font-family: Helvetica, Arial, sans-serif;\n}\n\n.container {\n    min-height: 100vh;\n    width: 100%;\n    display: grid;\n    grid-template-rows: 2fr 10fr 2fr;\n}\n\n.header, .footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: yellow;\n    font-size: 30px;\n    font-weight: bold;\n    font-style: italic;\n    border: 1px solid black;\n}\n\n.main {\n    display: grid;\n    grid-template-columns: 1fr 4fr 4fr 1fr;\n    grid-template-rows: 2fr 1fr;\n}\n\n.gb {\n    display: grid;\n    gap: 1rem;\n    /* width: 80%;\n    height: 80%; */\n}\n\n.gb-grid {\n    display: grid;\n    border: solid black 1px;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    grid-row: 1/3;\n    padding: 0.5rem;\n}\n\n.gb-grid > div {\n    background-color: RGB(220, 220, 220);\n    border: 0.1px solid black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.gb-grid > .ship {\n    border: 3px solid blue;\n}\n\n.turn {\n    pointer-events: none;\n}\n\n.bullet {\n    border: 1px solid black;\n    background-color: black;\n    border-radius: 100%;\n    width: 15px;\n    height: 15px;\n}\n.player {\n    font-size: 1.5rem;\n    padding: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    grid-row: 2/3;\n    border: 1px solid black;\n    font-weight: bold;\n    /* flex-wrap: wrap; */\n}\n\n#grid1 {\n    grid-column: 2/3;\n}\n\n#grid2 {\n    grid-column: 3/4;\n}\n\n.score-board {\n    display: flex;\n    flex-direction: column;\n    background-color: RGB(220, 220, 220);\n    border: 1px solid black;\n}\n\n.ship-container {\n    width: 100%;\n    height: 100%;\n    padding: 10px;\n    font-size: 10px;\n    display: flex;\n    gap: 2px;\n    color: red;\n}\n\n.ship-container > div {\n    width: 10px;\n    height: 10px;\n    background-color: blue;\n}\n\n.gb2-scoreBoard {\n    grid-column: 4/5;\n    grid-row: 1;\n}\n\n.gb2-scoreBoard > div {\n    justify-content: end;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


//                               SHIP FACTORY FUNCTION
// 1. Begin your app by creating the Ship factory function.
const Ship = (l, n) => {
    const length = l;
    let life;
    switch (length) {
        case 4:
            life = 4;
            break;
        case 3:
            life = 3;
            break;
        case 2:
            life = 2;
            break;
        case 1:
            life = 1;
            break;
        default:
            life = 0;

    }

    const shipSpots = [];
    let sunk = false;
    let placed = false;

    const isHit = (dom) => {
        const bullet = document.createElement('div');
        bullet.className = 'bullet';
        bullet.setAttribute('style', 'background-color: red;');
        dom.appendChild(bullet);
    }
    const isSunk = (a, div) => {
        for (let i = 0; i < a.length; i++) {
            a[i].setAttribute('style', 'background-color: red;');
        }
        const span = document.createElement('p');
        span.textContent = 'X';
        div.appendChild(span);
    };

    return {length, life, placed, isSunk, isHit};
};

function generateCoords() {
    const x = Math.floor(Math.random() * 10)+1;
    const y = Math.floor(Math.random() * 10)+1;
    const obj = {};
    obj['x'] = x;
    obj['y'] = y;

    return obj;
}

// const coords = generateCoords();
// console.log (coords['x']);

function decidedDirection() {
    let b = Math.floor(Math.random() * 2);
    if (b === 0) {
        return true;
    } 
    else {
        return false;
    }
}
                        // GAMEBOARD FACTORY FUNCTION
const GameBoard = (gridId) => {
    let shipCountDown = 10;
    const grid = document.createElement('div');
    const scoreBoard = document.createElement('div');
    scoreBoard.className = 'score-board';
    grid.className = 'gb-grid';

    const ocuppied = [];
    // const ship1 = Ship(4);
    const ships = [{'ship': Ship(4, 1), 'id':1},
    {'ship': Ship(3, 2), 'id': 2},
    {'ship': Ship(3, 3), 'id': 3},
    {'ship': Ship(2, 4), 'id': 4},
    {'ship': Ship(2, 5), 'id': 5},
    {'ship': Ship(2, 6), 'id': 6},
    {'ship': Ship(1, 7), 'id': 7},
    {'ship': Ship(1, 8), 'id': 8},
    {'ship': Ship(1, 9), 'id': 9},
    {'ship': Ship(1, 10), 'id': 10}];

    const createGrid = () => {
        for (let i = 1; i <= 10; i++) {
            for (let j = 1; j <= 10; j++) {
                const div = document.createElement('div');
                div.setAttribute('data-x', j);
                div.setAttribute('data-y', i);
                grid.appendChild(div);
                div.addEventListener('click', e => {
                    if (e.target.className.includes('clicked')) {
                        return;
                    }
                    else {
                        div.className = 'clicked';
                    }
                    const x = div.getAttribute(['data-x']);
                    const y = div.getAttribute(['data-y']);
                    receiveAttack({'x': parseInt(x), 'y': parseInt(y)}, e.target);
                })
            }
        }
    }

    const placeShip = (length, shipId, gridId) => {
        let allSet = false;
        while (allSet === false) {
            const newCoords = generateCoords();
            let availableLength = 0;
            const isHorizontal = decidedDirection();
            if (isHorizontal === true) {
                availableLength = 10 - newCoords['x'];
            }
            else {
                availableLength = 10 - newCoords['y'];
            }

            const isOcuppied = ocuppied.find(coord => {
                for (let i = 0, j = 0; i < length; i++) {
                    if (coord.x === newCoords.x+i && coord.y === newCoords.y && isHorizontal === true) {
                        return true;
                    }
                    else if (coord.x === newCoords.x && coord.y === newCoords.y+i && isHorizontal === false) { 
                        return true;
                    }  
                    else {
                        return false;
                    }
                }
            })

            if (availableLength >= length && typeof(isOcuppied) === 'undefined') {
                if (isHorizontal === true) {
                    for (let i = newCoords.x; i < newCoords.x+length; i++) {
                        const result = Array.from(grid.children).find(child => {
                            const x = child.getAttribute('data-x');
                            const y = child.getAttribute('data-y');
                            if (newCoords.y === parseInt(y) && i === parseInt(x)) {
                                return true;
                            }
                            else {
                                return false;
                            }
                        })

                        result.className = 'ship';
                        ocuppied.push({'x': i, 'y': newCoords.y, 'ship-id': shipId, 'grid-id': gridId});
                    }
                }
                else {
                    for (let i = newCoords.y; i < newCoords.y+length; i++) {
                        const result = Array.from(grid.children).find(child => {
                            const x = child.getAttribute('data-x');
                            const y = child.getAttribute('data-y');
                            if (i === parseInt(y) && newCoords.x === parseInt(x)) {
                                return true;
                            }
                            else {
                                return false;
                            }
                        })

                        result.className = 'ship';
                        ocuppied.push({'x': newCoords.x, 'y': i, 'ship-id': shipId, 'grid-id': gridId});
                    }
                }
                allSet = true;
            }
        }  
    }
    const placeTheShips = (gridId) => {
        for (let i = 0; i < ships.length; i++) {
            placeShip(ships[i].ship.length, ships[i].id, gridId);
        }
        // placeShip(ship1.length, 1);
    }

    const makeScoreBoard = (gridId) => {
        for (let i = 0; i < ships.length; i++) {
            let shipContainer = document.createElement('div');
            shipContainer.className = 'ship-container';
            let c = i;
            shipContainer.setAttribute('data-ship-count', ++c);
            shipContainer.setAttribute('data-grid-id', gridId);
            for (let j = 0; j < ships[i].ship.length; j++) {
                const div = document.createElement('div');
                shipContainer.appendChild(div);
            }
            scoreBoard.appendChild(shipContainer);
        }
    }

    const receiveAttack = (obj, dom) => {
        const coords = ocuppied.find(coord => {
            if (coord.x === obj.x && coord.y === obj.y) {
                return true;
            }
            else {
                return false;
            }
        })
        // const div = document.querySelector(`[data-grid-id="${coords['grid-id']}"]`);
        // console.log (div);
        // console.log (coords);

        if (typeof(coords) !== 'undefined') {
            const attackedShip = ships.find(ship => {
                if (ship.id === coords['ship-id']) {
                    return true;
                }
                else {
                    return false;
                }
            })
            // const div = document.querySelector(`[data-grid-id="${coords['grid-id']}"]`);
            // console.log (div.children);
            const attackedSpot = document.querySelector(`[data-x="${coords.x}"][data-y="${coords.y}"]`);
            // const attackedSpot = document.querySelector('[data-x="1"][data-y="2"]');
            attackedShip.ship.isHit(dom);
            attackedShip.ship.life--;
            if (attackedShip.ship.life < 1) {
                const div = document.querySelector(`[data-grid-id="${coords['grid-id']}"][data-ship-count="${attackedShip.id}"]`);
                attackedShip.ship.isSunk(Array.from(div.children), div);
                shipCountDown--;
            }
            if (shipCountDown < 1) {
                alert("Game Ends!");
            }
        }
        else {
            //record the missing bullet
            const bullet = document.createElement('div');
            bullet.className = 'bullet';
            dom.appendChild(bullet);
        }
    }
    
    createGrid();
    makeScoreBoard(gridId);
    placeTheShips(gridId);
    return {grid, scoreBoard, placeShip, placeTheShips, receiveAttack, shipCountDown};
}

const Player = (name) => {
    const playerName = name;

    const displayPlayer = (name) => {
        const div = document.createElement('div');
        const h1 = document.createElement('div');
        h1.textContent = playerName+"'s ships";
        div.appendChild(h1);
        div.className = 'player';

        return div;
    }

    return { displayPlayer};
}

const myModule = (() => {
    const body = document.querySelector('body');
    const container = document.createElement('div');
    const header = document.createElement('div');
    const title = document.createElement('h1');
    const main = document.createElement('div');
    const footer = document.createElement('div');
    container.className = 'container';
    header.className = 'header';
    header.textContent = 'BattleShip';
    title.textContent = "Battle Ship";
    main.className = 'main';
    footer.className = 'footer';
    footer.textContent = "https://github.com/moonsol124/Project-Battleship-TOP";
    container.append(header, main, footer);
    body.appendChild(container);
    const gb1 = GameBoard(1);
    const gb2 = GameBoard(2);

    const displayPlayers = () => {
        const AI = Player('AI');
        const input = prompt("Enter your name!");
        const user = Player(input);
        main.append(AI.displayPlayer(), user.displayPlayer());
    }

    const displayScoreboard = () => {
        gb2.scoreBoard.classList.add('gb2-scoreBoard');
        main.append(gb1.scoreBoard, gb2.scoreBoard);
    }
    const playRound = () => {
        let turn = false;
        gb1.grid.setAttribute('id', 'grid1');
        gb2.grid.setAttribute('id', 'grid2');
        const computerCoords = [];
        main.append(gb1.grid, gb2.grid);
        gb2.grid.setAttribute('style', 'pointer-events: none;')
        gb1.grid.addEventListener('click', e => {
            if (turn === false) {
                gb1.grid.setAttribute('style', 'pointer-events: none;')
                gb2.grid.setAttribute('style', '');
            }
        })

        gb1.grid.addEventListener('mouseup', e => {
            gb1.grid.setAttribute('style', 'pointer-events: none;')
            turn = true;
            if (turn === true) {
                setTimeout(() => {
                    let computerPlayed = false; 
                    while (computerPlayed === false) {
                        const newCoords = generateCoords();
                    
                        const search = computerCoords.find(coord => {
                            if (newCoords.x === coord.x && newCoords.y === coord.y) {
                                return true;
                            }
                            else {
                                return false;
                            }
                        })
    
                        if (typeof(search) === 'undefined') {
                            const div = document.querySelector(` #grid2 > [data-x="${newCoords.x}"][data-y="${newCoords.y}"]`);
                            gb2.receiveAttack(newCoords, div);
                            computerCoords.push(newCoords);
                            computerPlayed = true;
                        }    

                        gb1.grid.setAttribute('style', '');
                        turn = false;
                    }
                }, 1000);
            }
        })

        for (let i = 0; i < (Array.from(gb1.grid.children)).length; i++) {
            Array.from(gb1.grid.children)[i].setAttribute('style', 'border: 0.1px solid black;');
        }
    };
    return { playRound, displayPlayers, displayScoreboard };
})();

const md = myModule;
md.displayPlayers();
md.displayScoreboard();
md.playRound();

// md.setGb2();


// const gb = GameBoard();
// gb.placeTheShips();

// const words = [];
// const newCoords = {'x': 2, 'y':4};

// const result = words.find(word => {
//     if (newCoords.x === word.x && newCoords.y === word.y) {
//         return true;
//     }
//     else {
//         return false;
//     }
// });

// const student = (n, a) => {
//     const name = n;
//     const age = a;
    
//     return {name, age};
// }

// const maria = student('Maria', '18');
// console.log (maria.name);
// maria.name = 'Mariana';
// console.log (maria.name);

// const Player = () => {

// };


// console.log (result);

// const randomFunction = () => {
//     console.log ("hi!");
// }

// randomFunction();
// expected output: Array ["exuberant", "destruction", "present"]

// Note that we have not yet created any User Interface. 
// We should know our code is coming together by running the tests. 
// You shouldn’t be relying on console.logs or DOM methods to 
// make sure your code is doing what you expect it to.

// module.exports = {goHorizontal};
// 4 3 2 1 / 4 3 2 1

// less parameters
// less global variables
// use of pure functions
   //  Pure functions can’t directly mutate global variables, 
   //  the arguments passed into them, the network, 
   //  the disk, or the screen. All they can do is return a value.
   //  if you return an object, return the changed version of the object.
// one function does only one thing

// For this assignment do your best to isolate 
// every bit of application functionality from 
// the actual DOM manipulation bits. 
// You can use mocks to make sure that DOM methods 
// like appendChild are being called, but try your 
// best to keep those things outside of the app logic.
// Only functions that interacts with users need to be tested.

 //                         PLAN
    //Step 1. Randomly generate a number between 1 and 100;
    //        this randomly generated number is the place on grid.
    //        CONDITION 1: this number must not be the same as previously generated numbers
    //        CONDITION 2: and away from other ship's expandable length.


    //Step 2. Once the number is generated, decide the direction. 
    //        Create a helper function decideDirection() which randomly
    //        returns a value between true and false. If true is returned,
    //        then go horizontal, if false, then go vertical.
    //        do nested for loop using i and j variables for this.




    //Step 3. Once the direction is decided, expand the ship.
    //        Substep 1. Get the available spot length.
    //                   if the spot is 1 for example and it expands horizontally, 
    //                   the available spot length is 9.
    //                   availableLength = 10 - grid[row][col];
    //        Substep 2. once you have the available length,
    //                   see if that's less than the ship's own length.
    //                   CONDITION1 : give the ship another spot.
    //        Substep 3. Expand. do, for i = 0; i < ship.length; i++
    //                   boolean array true,,, div background color to blue...

    

    // 2. Gameboards should have a receiveAttack function 
    // that takes a pair of coordinates, determines whether or not 
    // the attack hit a ship and then sends the ‘hit’ 
    // function to the correct ship, or records the coordinates of the missed shot.
    //        subStep 1. when a grid element is clicked,
    //                   return the number of spot,
    //                   check whether the number is from a ship or not 
    //                   using a boolean array,
    //                   if it is then see which ship it is.
    //        subStep 2. turn the background color of the grid
    //                   either into red or blue.

    // 3. Gameboards should keep track of missed attacks so they can display them properly.
    //         make a variable called: 'missedAttacks' and sums it up
    //         everytime that the user clicks a grid element that is returned
    //         as false in the grid boolean array.

    // 4. Gameboards should be able to report whether or not all of their ships have been sunk.
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGlCQUFpQjtBQUNqRTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLXRvcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC10b3AvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAtdG9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC10b3Avd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLXRvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLXRvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC10b3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAtdG9wL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAtdG9wLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxMGZyIDJmcjtcXG59XFxuXFxuLmhlYWRlciwgLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDRmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXG59XFxuXFxuLmdiIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICAvKiB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDgwJTsgKi9cXG59XFxuXFxuLmdiLWdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5nYi1ncmlkID4gZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogUkdCKDIyMCwgMjIwLCAyMjApO1xcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdiLWdyaWQgPiAuc2hpcCB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsdWU7XFxufVxcblxcbi50dXJuIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5idWxsZXQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxufVxcbi5wbGF5ZXIge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xcbn1cXG5cXG4jZ3JpZDEge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG4jZ3JpZDIge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbn1cXG5cXG4uc2NvcmUtYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSR0IoMjIwLCAyMjAsIDIyMCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnB4O1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIgPiBkaXYge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uZ2IyLXNjb3JlQm9hcmQge1xcbiAgICBncmlkLWNvbHVtbjogNC81O1xcbiAgICBncmlkLXJvdzogMTtcXG59XFxuXFxuLmdiMi1zY29yZUJvYXJkID4gZGl2IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0Qix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNUO2tCQUNjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQ0FBc0M7SUFDdEMsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixhQUFhO0lBQ2IsUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDEwZnIgMmZyO1xcbn1cXG5cXG4uaGVhZGVyLCAuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnIgNGZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcbn1cXG5cXG4uZ2Ige1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIC8qIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogODAlOyAqL1xcbn1cXG5cXG4uZ2ItZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmdiLWdyaWQgPiBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSR0IoMjIwLCAyMjAsIDIyMCk7XFxuICAgIGJvcmRlcjogMC4xcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2ItZ3JpZCA+IC5zaGlwIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmx1ZTtcXG59XFxuXFxuLnR1cm4ge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmJ1bGxldCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG59XFxuLnBsYXllciB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAvKiBmbGV4LXdyYXA6IHdyYXA7ICovXFxufVxcblxcbiNncmlkMSB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbiNncmlkMiB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxufVxcblxcbi5zY29yZS1ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IFJHQigyMjAsIDIyMCwgMjIwKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycHg7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciA+IGRpdiB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5nYjItc2NvcmVCb2FyZCB7XFxuICAgIGdyaWQtY29sdW1uOiA0LzU7XFxuICAgIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4uZ2IyLXNjb3JlQm9hcmQgPiBkaXYge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU0hJUCBGQUNUT1JZIEZVTkNUSU9OXG4vLyAxLiBCZWdpbiB5b3VyIGFwcCBieSBjcmVhdGluZyB0aGUgU2hpcCBmYWN0b3J5IGZ1bmN0aW9uLlxuY29uc3QgU2hpcCA9IChsLCBuKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gbDtcbiAgICBsZXQgbGlmZTtcbiAgICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBsaWZlID0gNDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBsaWZlID0gMztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBsaWZlID0gMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBsaWZlID0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbGlmZSA9IDA7XG5cbiAgICB9XG5cbiAgICBjb25zdCBzaGlwU3BvdHMgPSBbXTtcbiAgICBsZXQgc3VuayA9IGZhbHNlO1xuICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGlzSGl0ID0gKGRvbSkgPT4ge1xuICAgICAgICBjb25zdCBidWxsZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnVsbGV0LmNsYXNzTmFtZSA9ICdidWxsZXQnO1xuICAgICAgICBidWxsZXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7Jyk7XG4gICAgICAgIGRvbS5hcHBlbmRDaGlsZChidWxsZXQpO1xuICAgIH1cbiAgICBjb25zdCBpc1N1bmsgPSAoYSwgZGl2KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYVtpXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IHJlZDsnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfTtcblxuICAgIHJldHVybiB7bGVuZ3RoLCBsaWZlLCBwbGFjZWQsIGlzU3VuaywgaXNIaXR9O1xufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVDb29yZHMoKSB7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSsxO1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkrMTtcbiAgICBjb25zdCBvYmogPSB7fTtcbiAgICBvYmpbJ3gnXSA9IHg7XG4gICAgb2JqWyd5J10gPSB5O1xuXG4gICAgcmV0dXJuIG9iajtcbn1cblxuLy8gY29uc3QgY29vcmRzID0gZ2VuZXJhdGVDb29yZHMoKTtcbi8vIGNvbnNvbGUubG9nIChjb29yZHNbJ3gnXSk7XG5cbmZ1bmN0aW9uIGRlY2lkZWREaXJlY3Rpb24oKSB7XG4gICAgbGV0IGIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICBpZiAoYiA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IFxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR0FNRUJPQVJEIEZBQ1RPUlkgRlVOQ1RJT05cbmNvbnN0IEdhbWVCb2FyZCA9IChncmlkSWQpID0+IHtcbiAgICBsZXQgc2hpcENvdW50RG93biA9IDEwO1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzY29yZUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2NvcmVCb2FyZC5jbGFzc05hbWUgPSAnc2NvcmUtYm9hcmQnO1xuICAgIGdyaWQuY2xhc3NOYW1lID0gJ2diLWdyaWQnO1xuXG4gICAgY29uc3Qgb2N1cHBpZWQgPSBbXTtcbiAgICAvLyBjb25zdCBzaGlwMSA9IFNoaXAoNCk7XG4gICAgY29uc3Qgc2hpcHMgPSBbeydzaGlwJzogU2hpcCg0LCAxKSwgJ2lkJzoxfSxcbiAgICB7J3NoaXAnOiBTaGlwKDMsIDIpLCAnaWQnOiAyfSxcbiAgICB7J3NoaXAnOiBTaGlwKDMsIDMpLCAnaWQnOiAzfSxcbiAgICB7J3NoaXAnOiBTaGlwKDIsIDQpLCAnaWQnOiA0fSxcbiAgICB7J3NoaXAnOiBTaGlwKDIsIDUpLCAnaWQnOiA1fSxcbiAgICB7J3NoaXAnOiBTaGlwKDIsIDYpLCAnaWQnOiA2fSxcbiAgICB7J3NoaXAnOiBTaGlwKDEsIDcpLCAnaWQnOiA3fSxcbiAgICB7J3NoaXAnOiBTaGlwKDEsIDgpLCAnaWQnOiA4fSxcbiAgICB7J3NoaXAnOiBTaGlwKDEsIDkpLCAnaWQnOiA5fSxcbiAgICB7J3NoaXAnOiBTaGlwKDEsIDEwKSwgJ2lkJzogMTB9XTtcblxuICAgIGNvbnN0IGNyZWF0ZUdyaWQgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLXgnLCBqKTtcbiAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLXknLCBpKTtcbiAgICAgICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoJ2NsaWNrZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTmFtZSA9ICdjbGlja2VkJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB4ID0gZGl2LmdldEF0dHJpYnV0ZShbJ2RhdGEteCddKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IGRpdi5nZXRBdHRyaWJ1dGUoWydkYXRhLXknXSk7XG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBdHRhY2soeyd4JzogcGFyc2VJbnQoeCksICd5JzogcGFyc2VJbnQoeSl9LCBlLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChsZW5ndGgsIHNoaXBJZCwgZ3JpZElkKSA9PiB7XG4gICAgICAgIGxldCBhbGxTZXQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKGFsbFNldCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0Nvb3JkcyA9IGdlbmVyYXRlQ29vcmRzKCk7XG4gICAgICAgICAgICBsZXQgYXZhaWxhYmxlTGVuZ3RoID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IGRlY2lkZWREaXJlY3Rpb24oKTtcbiAgICAgICAgICAgIGlmIChpc0hvcml6b250YWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVMZW5ndGggPSAxMCAtIG5ld0Nvb3Jkc1sneCddO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlTGVuZ3RoID0gMTAgLSBuZXdDb29yZHNbJ3knXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaXNPY3VwcGllZCA9IG9jdXBwaWVkLmZpbmQoY29vcmQgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb29yZC54ID09PSBuZXdDb29yZHMueCtpICYmIGNvb3JkLnkgPT09IG5ld0Nvb3Jkcy55ICYmIGlzSG9yaXpvbnRhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY29vcmQueCA9PT0gbmV3Q29vcmRzLnggJiYgY29vcmQueSA9PT0gbmV3Q29vcmRzLnkraSAmJiBpc0hvcml6b250YWwgPT09IGZhbHNlKSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChhdmFpbGFibGVMZW5ndGggPj0gbGVuZ3RoICYmIHR5cGVvZihpc09jdXBwaWVkKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNIb3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBuZXdDb29yZHMueDsgaSA8IG5ld0Nvb3Jkcy54K2xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBBcnJheS5mcm9tKGdyaWQuY2hpbGRyZW4pLmZpbmQoY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSBjaGlsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBjaGlsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdDb29yZHMueSA9PT0gcGFyc2VJbnQoeSkgJiYgaSA9PT0gcGFyc2VJbnQoeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNsYXNzTmFtZSA9ICdzaGlwJztcbiAgICAgICAgICAgICAgICAgICAgICAgIG9jdXBwaWVkLnB1c2goeyd4JzogaSwgJ3knOiBuZXdDb29yZHMueSwgJ3NoaXAtaWQnOiBzaGlwSWQsICdncmlkLWlkJzogZ3JpZElkfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBuZXdDb29yZHMueTsgaSA8IG5ld0Nvb3Jkcy55K2xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBBcnJheS5mcm9tKGdyaWQuY2hpbGRyZW4pLmZpbmQoY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSBjaGlsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBjaGlsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09PSBwYXJzZUludCh5KSAmJiBuZXdDb29yZHMueCA9PT0gcGFyc2VJbnQoeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNsYXNzTmFtZSA9ICdzaGlwJztcbiAgICAgICAgICAgICAgICAgICAgICAgIG9jdXBwaWVkLnB1c2goeyd4JzogbmV3Q29vcmRzLngsICd5JzogaSwgJ3NoaXAtaWQnOiBzaGlwSWQsICdncmlkLWlkJzogZ3JpZElkfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWxsU2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgXG4gICAgfVxuICAgIGNvbnN0IHBsYWNlVGhlU2hpcHMgPSAoZ3JpZElkKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBsYWNlU2hpcChzaGlwc1tpXS5zaGlwLmxlbmd0aCwgc2hpcHNbaV0uaWQsIGdyaWRJZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGxhY2VTaGlwKHNoaXAxLmxlbmd0aCwgMSk7XG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVNjb3JlQm9hcmQgPSAoZ3JpZElkKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzaGlwQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzaGlwLWNvbnRhaW5lcic7XG4gICAgICAgICAgICBsZXQgYyA9IGk7XG4gICAgICAgICAgICBzaGlwQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1zaGlwLWNvdW50JywgKytjKTtcbiAgICAgICAgICAgIHNoaXBDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWdyaWQtaWQnLCBncmlkSWQpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwc1tpXS5zaGlwLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2NvcmVCb2FyZC5hcHBlbmRDaGlsZChzaGlwQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAob2JqLCBkb20pID0+IHtcbiAgICAgICAgY29uc3QgY29vcmRzID0gb2N1cHBpZWQuZmluZChjb29yZCA9PiB7XG4gICAgICAgICAgICBpZiAoY29vcmQueCA9PT0gb2JqLnggJiYgY29vcmQueSA9PT0gb2JqLnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLy8gY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZ3JpZC1pZD1cIiR7Y29vcmRzWydncmlkLWlkJ119XCJdYCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nIChkaXYpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyAoY29vcmRzKTtcblxuICAgICAgICBpZiAodHlwZW9mKGNvb3JkcykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRhY2tlZFNoaXAgPSBzaGlwcy5maW5kKHNoaXAgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzaGlwLmlkID09PSBjb29yZHNbJ3NoaXAtaWQnXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZ3JpZC1pZD1cIiR7Y29vcmRzWydncmlkLWlkJ119XCJdYCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyAoZGl2LmNoaWxkcmVuKTtcbiAgICAgICAgICAgIGNvbnN0IGF0dGFja2VkU3BvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2Nvb3Jkcy54fVwiXVtkYXRhLXk9XCIke2Nvb3Jkcy55fVwiXWApO1xuICAgICAgICAgICAgLy8gY29uc3QgYXR0YWNrZWRTcG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEteD1cIjFcIl1bZGF0YS15PVwiMlwiXScpO1xuICAgICAgICAgICAgYXR0YWNrZWRTaGlwLnNoaXAuaXNIaXQoZG9tKTtcbiAgICAgICAgICAgIGF0dGFja2VkU2hpcC5zaGlwLmxpZmUtLTtcbiAgICAgICAgICAgIGlmIChhdHRhY2tlZFNoaXAuc2hpcC5saWZlIDwgMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWdyaWQtaWQ9XCIke2Nvb3Jkc1snZ3JpZC1pZCddfVwiXVtkYXRhLXNoaXAtY291bnQ9XCIke2F0dGFja2VkU2hpcC5pZH1cIl1gKTtcbiAgICAgICAgICAgICAgICBhdHRhY2tlZFNoaXAuc2hpcC5pc1N1bmsoQXJyYXkuZnJvbShkaXYuY2hpbGRyZW4pLCBkaXYpO1xuICAgICAgICAgICAgICAgIHNoaXBDb3VudERvd24tLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzaGlwQ291bnREb3duIDwgMSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiR2FtZSBFbmRzIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vcmVjb3JkIHRoZSBtaXNzaW5nIGJ1bGxldFxuICAgICAgICAgICAgY29uc3QgYnVsbGV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBidWxsZXQuY2xhc3NOYW1lID0gJ2J1bGxldCc7XG4gICAgICAgICAgICBkb20uYXBwZW5kQ2hpbGQoYnVsbGV0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVHcmlkKCk7XG4gICAgbWFrZVNjb3JlQm9hcmQoZ3JpZElkKTtcbiAgICBwbGFjZVRoZVNoaXBzKGdyaWRJZCk7XG4gICAgcmV0dXJuIHtncmlkLCBzY29yZUJvYXJkLCBwbGFjZVNoaXAsIHBsYWNlVGhlU2hpcHMsIHJlY2VpdmVBdHRhY2ssIHNoaXBDb3VudERvd259O1xufVxuXG5jb25zdCBQbGF5ZXIgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IHBsYXllck5hbWUgPSBuYW1lO1xuXG4gICAgY29uc3QgZGlzcGxheVBsYXllciA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoMS50ZXh0Q29udGVudCA9IHBsYXllck5hbWUrXCIncyBzaGlwc1wiO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaDEpO1xuICAgICAgICBkaXYuY2xhc3NOYW1lID0gJ3BsYXllcic7XG5cbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBkaXNwbGF5UGxheWVyfTtcbn1cblxuY29uc3QgbXlNb2R1bGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdoZWFkZXInO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdCYXR0bGVTaGlwJztcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQmF0dGxlIFNoaXBcIjtcbiAgICBtYWluLmNsYXNzTmFtZSA9ICdtYWluJztcbiAgICBmb290ZXIuY2xhc3NOYW1lID0gJ2Zvb3Rlcic7XG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gXCJodHRwczovL2dpdGh1Yi5jb20vbW9vbnNvbDEyNC9Qcm9qZWN0LUJhdHRsZXNoaXAtVE9QXCI7XG4gICAgY29udGFpbmVyLmFwcGVuZChoZWFkZXIsIG1haW4sIGZvb3Rlcik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIGNvbnN0IGdiMSA9IEdhbWVCb2FyZCgxKTtcbiAgICBjb25zdCBnYjIgPSBHYW1lQm9hcmQoMik7XG5cbiAgICBjb25zdCBkaXNwbGF5UGxheWVycyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgQUkgPSBQbGF5ZXIoJ0FJJyk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gcHJvbXB0KFwiRW50ZXIgeW91ciBuYW1lIVwiKTtcbiAgICAgICAgY29uc3QgdXNlciA9IFBsYXllcihpbnB1dCk7XG4gICAgICAgIG1haW4uYXBwZW5kKEFJLmRpc3BsYXlQbGF5ZXIoKSwgdXNlci5kaXNwbGF5UGxheWVyKCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlTY29yZWJvYXJkID0gKCkgPT4ge1xuICAgICAgICBnYjIuc2NvcmVCb2FyZC5jbGFzc0xpc3QuYWRkKCdnYjItc2NvcmVCb2FyZCcpO1xuICAgICAgICBtYWluLmFwcGVuZChnYjEuc2NvcmVCb2FyZCwgZ2IyLnNjb3JlQm9hcmQpO1xuICAgIH1cbiAgICBjb25zdCBwbGF5Um91bmQgPSAoKSA9PiB7XG4gICAgICAgIGxldCB0dXJuID0gZmFsc2U7XG4gICAgICAgIGdiMS5ncmlkLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ3JpZDEnKTtcbiAgICAgICAgZ2IyLmdyaWQuc2V0QXR0cmlidXRlKCdpZCcsICdncmlkMicpO1xuICAgICAgICBjb25zdCBjb21wdXRlckNvb3JkcyA9IFtdO1xuICAgICAgICBtYWluLmFwcGVuZChnYjEuZ3JpZCwgZ2IyLmdyaWQpO1xuICAgICAgICBnYjIuZ3JpZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3BvaW50ZXItZXZlbnRzOiBub25lOycpXG4gICAgICAgIGdiMS5ncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAodHVybiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBnYjEuZ3JpZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3BvaW50ZXItZXZlbnRzOiBub25lOycpXG4gICAgICAgICAgICAgICAgZ2IyLmdyaWQuc2V0QXR0cmlidXRlKCdzdHlsZScsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBnYjEuZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZSA9PiB7XG4gICAgICAgICAgICBnYjEuZ3JpZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3BvaW50ZXItZXZlbnRzOiBub25lOycpXG4gICAgICAgICAgICB0dXJuID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0dXJuID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb21wdXRlclBsYXllZCA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGNvbXB1dGVyUGxheWVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Q29vcmRzID0gZ2VuZXJhdGVDb29yZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2ggPSBjb21wdXRlckNvb3Jkcy5maW5kKGNvb3JkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3Q29vcmRzLnggPT09IGNvb3JkLnggJiYgbmV3Q29vcmRzLnkgPT09IGNvb3JkLnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Yoc2VhcmNoKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAgI2dyaWQyID4gW2RhdGEteD1cIiR7bmV3Q29vcmRzLnh9XCJdW2RhdGEteT1cIiR7bmV3Q29vcmRzLnl9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2IyLnJlY2VpdmVBdHRhY2sobmV3Q29vcmRzLCBkaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyQ29vcmRzLnB1c2gobmV3Q29vcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlclBsYXllZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBnYjEuZ3JpZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoQXJyYXkuZnJvbShnYjEuZ3JpZC5jaGlsZHJlbikpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBBcnJheS5mcm9tKGdiMS5ncmlkLmNoaWxkcmVuKVtpXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JvcmRlcjogMC4xcHggc29saWQgYmxhY2s7Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB7IHBsYXlSb3VuZCwgZGlzcGxheVBsYXllcnMsIGRpc3BsYXlTY29yZWJvYXJkIH07XG59KSgpO1xuXG5jb25zdCBtZCA9IG15TW9kdWxlO1xubWQuZGlzcGxheVBsYXllcnMoKTtcbm1kLmRpc3BsYXlTY29yZWJvYXJkKCk7XG5tZC5wbGF5Um91bmQoKTtcblxuLy8gbWQuc2V0R2IyKCk7XG5cblxuLy8gY29uc3QgZ2IgPSBHYW1lQm9hcmQoKTtcbi8vIGdiLnBsYWNlVGhlU2hpcHMoKTtcblxuLy8gY29uc3Qgd29yZHMgPSBbXTtcbi8vIGNvbnN0IG5ld0Nvb3JkcyA9IHsneCc6IDIsICd5Jzo0fTtcblxuLy8gY29uc3QgcmVzdWx0ID0gd29yZHMuZmluZCh3b3JkID0+IHtcbi8vICAgICBpZiAobmV3Q29vcmRzLnggPT09IHdvcmQueCAmJiBuZXdDb29yZHMueSA9PT0gd29yZC55KSB7XG4vLyAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH1cbi8vICAgICBlbHNlIHtcbi8vICAgICAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICAgIH1cbi8vIH0pO1xuXG4vLyBjb25zdCBzdHVkZW50ID0gKG4sIGEpID0+IHtcbi8vICAgICBjb25zdCBuYW1lID0gbjtcbi8vICAgICBjb25zdCBhZ2UgPSBhO1xuICAgIFxuLy8gICAgIHJldHVybiB7bmFtZSwgYWdlfTtcbi8vIH1cblxuLy8gY29uc3QgbWFyaWEgPSBzdHVkZW50KCdNYXJpYScsICcxOCcpO1xuLy8gY29uc29sZS5sb2cgKG1hcmlhLm5hbWUpO1xuLy8gbWFyaWEubmFtZSA9ICdNYXJpYW5hJztcbi8vIGNvbnNvbGUubG9nIChtYXJpYS5uYW1lKTtcblxuLy8gY29uc3QgUGxheWVyID0gKCkgPT4ge1xuXG4vLyB9O1xuXG5cbi8vIGNvbnNvbGUubG9nIChyZXN1bHQpO1xuXG4vLyBjb25zdCByYW5kb21GdW5jdGlvbiA9ICgpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyAoXCJoaSFcIik7XG4vLyB9XG5cbi8vIHJhbmRvbUZ1bmN0aW9uKCk7XG4vLyBleHBlY3RlZCBvdXRwdXQ6IEFycmF5IFtcImV4dWJlcmFudFwiLCBcImRlc3RydWN0aW9uXCIsIFwicHJlc2VudFwiXVxuXG4vLyBOb3RlIHRoYXQgd2UgaGF2ZSBub3QgeWV0IGNyZWF0ZWQgYW55IFVzZXIgSW50ZXJmYWNlLiBcbi8vIFdlIHNob3VsZCBrbm93IG91ciBjb2RlIGlzIGNvbWluZyB0b2dldGhlciBieSBydW5uaW5nIHRoZSB0ZXN0cy4gXG4vLyBZb3Ugc2hvdWxkbuKAmXQgYmUgcmVseWluZyBvbiBjb25zb2xlLmxvZ3Mgb3IgRE9NIG1ldGhvZHMgdG8gXG4vLyBtYWtlIHN1cmUgeW91ciBjb2RlIGlzIGRvaW5nIHdoYXQgeW91IGV4cGVjdCBpdCB0by5cblxuLy8gbW9kdWxlLmV4cG9ydHMgPSB7Z29Ib3Jpem9udGFsfTtcbi8vIDQgMyAyIDEgLyA0IDMgMiAxXG5cbi8vIGxlc3MgcGFyYW1ldGVyc1xuLy8gbGVzcyBnbG9iYWwgdmFyaWFibGVzXG4vLyB1c2Ugb2YgcHVyZSBmdW5jdGlvbnNcbiAgIC8vICBQdXJlIGZ1bmN0aW9ucyBjYW7igJl0IGRpcmVjdGx5IG11dGF0ZSBnbG9iYWwgdmFyaWFibGVzLCBcbiAgIC8vICB0aGUgYXJndW1lbnRzIHBhc3NlZCBpbnRvIHRoZW0sIHRoZSBuZXR3b3JrLCBcbiAgIC8vICB0aGUgZGlzaywgb3IgdGhlIHNjcmVlbi4gQWxsIHRoZXkgY2FuIGRvIGlzIHJldHVybiBhIHZhbHVlLlxuICAgLy8gIGlmIHlvdSByZXR1cm4gYW4gb2JqZWN0LCByZXR1cm4gdGhlIGNoYW5nZWQgdmVyc2lvbiBvZiB0aGUgb2JqZWN0LlxuLy8gb25lIGZ1bmN0aW9uIGRvZXMgb25seSBvbmUgdGhpbmdcblxuLy8gRm9yIHRoaXMgYXNzaWdubWVudCBkbyB5b3VyIGJlc3QgdG8gaXNvbGF0ZSBcbi8vIGV2ZXJ5IGJpdCBvZiBhcHBsaWNhdGlvbiBmdW5jdGlvbmFsaXR5IGZyb20gXG4vLyB0aGUgYWN0dWFsIERPTSBtYW5pcHVsYXRpb24gYml0cy4gXG4vLyBZb3UgY2FuIHVzZSBtb2NrcyB0byBtYWtlIHN1cmUgdGhhdCBET00gbWV0aG9kcyBcbi8vIGxpa2UgYXBwZW5kQ2hpbGQgYXJlIGJlaW5nIGNhbGxlZCwgYnV0IHRyeSB5b3VyIFxuLy8gYmVzdCB0byBrZWVwIHRob3NlIHRoaW5ncyBvdXRzaWRlIG9mIHRoZSBhcHAgbG9naWMuXG4vLyBPbmx5IGZ1bmN0aW9ucyB0aGF0IGludGVyYWN0cyB3aXRoIHVzZXJzIG5lZWQgdG8gYmUgdGVzdGVkLlxuXG4gLy8gICAgICAgICAgICAgICAgICAgICAgICAgUExBTlxuICAgIC8vU3RlcCAxLiBSYW5kb21seSBnZW5lcmF0ZSBhIG51bWJlciBiZXR3ZWVuIDEgYW5kIDEwMDtcbiAgICAvLyAgICAgICAgdGhpcyByYW5kb21seSBnZW5lcmF0ZWQgbnVtYmVyIGlzIHRoZSBwbGFjZSBvbiBncmlkLlxuICAgIC8vICAgICAgICBDT05ESVRJT04gMTogdGhpcyBudW1iZXIgbXVzdCBub3QgYmUgdGhlIHNhbWUgYXMgcHJldmlvdXNseSBnZW5lcmF0ZWQgbnVtYmVyc1xuICAgIC8vICAgICAgICBDT05ESVRJT04gMjogYW5kIGF3YXkgZnJvbSBvdGhlciBzaGlwJ3MgZXhwYW5kYWJsZSBsZW5ndGguXG5cblxuICAgIC8vU3RlcCAyLiBPbmNlIHRoZSBudW1iZXIgaXMgZ2VuZXJhdGVkLCBkZWNpZGUgdGhlIGRpcmVjdGlvbi4gXG4gICAgLy8gICAgICAgIENyZWF0ZSBhIGhlbHBlciBmdW5jdGlvbiBkZWNpZGVEaXJlY3Rpb24oKSB3aGljaCByYW5kb21seVxuICAgIC8vICAgICAgICByZXR1cm5zIGEgdmFsdWUgYmV0d2VlbiB0cnVlIGFuZCBmYWxzZS4gSWYgdHJ1ZSBpcyByZXR1cm5lZCxcbiAgICAvLyAgICAgICAgdGhlbiBnbyBob3Jpem9udGFsLCBpZiBmYWxzZSwgdGhlbiBnbyB2ZXJ0aWNhbC5cbiAgICAvLyAgICAgICAgZG8gbmVzdGVkIGZvciBsb29wIHVzaW5nIGkgYW5kIGogdmFyaWFibGVzIGZvciB0aGlzLlxuXG5cblxuXG4gICAgLy9TdGVwIDMuIE9uY2UgdGhlIGRpcmVjdGlvbiBpcyBkZWNpZGVkLCBleHBhbmQgdGhlIHNoaXAuXG4gICAgLy8gICAgICAgIFN1YnN0ZXAgMS4gR2V0IHRoZSBhdmFpbGFibGUgc3BvdCBsZW5ndGguXG4gICAgLy8gICAgICAgICAgICAgICAgICAgaWYgdGhlIHNwb3QgaXMgMSBmb3IgZXhhbXBsZSBhbmQgaXQgZXhwYW5kcyBob3Jpem9udGFsbHksIFxuICAgIC8vICAgICAgICAgICAgICAgICAgIHRoZSBhdmFpbGFibGUgc3BvdCBsZW5ndGggaXMgOS5cbiAgICAvLyAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVMZW5ndGggPSAxMCAtIGdyaWRbcm93XVtjb2xdO1xuICAgIC8vICAgICAgICBTdWJzdGVwIDIuIG9uY2UgeW91IGhhdmUgdGhlIGF2YWlsYWJsZSBsZW5ndGgsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgc2VlIGlmIHRoYXQncyBsZXNzIHRoYW4gdGhlIHNoaXAncyBvd24gbGVuZ3RoLlxuICAgIC8vICAgICAgICAgICAgICAgICAgIENPTkRJVElPTjEgOiBnaXZlIHRoZSBzaGlwIGFub3RoZXIgc3BvdC5cbiAgICAvLyAgICAgICAgU3Vic3RlcCAzLiBFeHBhbmQuIGRvLCBmb3IgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrXG4gICAgLy8gICAgICAgICAgICAgICAgICAgYm9vbGVhbiBhcnJheSB0cnVlLCwsIGRpdiBiYWNrZ3JvdW5kIGNvbG9yIHRvIGJsdWUuLi5cblxuICAgIFxuXG4gICAgLy8gMi4gR2FtZWJvYXJkcyBzaG91bGQgaGF2ZSBhIHJlY2VpdmVBdHRhY2sgZnVuY3Rpb24gXG4gICAgLy8gdGhhdCB0YWtlcyBhIHBhaXIgb2YgY29vcmRpbmF0ZXMsIGRldGVybWluZXMgd2hldGhlciBvciBub3QgXG4gICAgLy8gdGhlIGF0dGFjayBoaXQgYSBzaGlwIGFuZCB0aGVuIHNlbmRzIHRoZSDigJhoaXTigJkgXG4gICAgLy8gZnVuY3Rpb24gdG8gdGhlIGNvcnJlY3Qgc2hpcCwgb3IgcmVjb3JkcyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1pc3NlZCBzaG90LlxuICAgIC8vICAgICAgICBzdWJTdGVwIDEuIHdoZW4gYSBncmlkIGVsZW1lbnQgaXMgY2xpY2tlZCxcbiAgICAvLyAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhlIG51bWJlciBvZiBzcG90LFxuICAgIC8vICAgICAgICAgICAgICAgICAgIGNoZWNrIHdoZXRoZXIgdGhlIG51bWJlciBpcyBmcm9tIGEgc2hpcCBvciBub3QgXG4gICAgLy8gICAgICAgICAgICAgICAgICAgdXNpbmcgYSBib29sZWFuIGFycmF5LFxuICAgIC8vICAgICAgICAgICAgICAgICAgIGlmIGl0IGlzIHRoZW4gc2VlIHdoaWNoIHNoaXAgaXQgaXMuXG4gICAgLy8gICAgICAgIHN1YlN0ZXAgMi4gdHVybiB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgZ3JpZFxuICAgIC8vICAgICAgICAgICAgICAgICAgIGVpdGhlciBpbnRvIHJlZCBvciBibHVlLlxuXG4gICAgLy8gMy4gR2FtZWJvYXJkcyBzaG91bGQga2VlcCB0cmFjayBvZiBtaXNzZWQgYXR0YWNrcyBzbyB0aGV5IGNhbiBkaXNwbGF5IHRoZW0gcHJvcGVybHkuXG4gICAgLy8gICAgICAgICBtYWtlIGEgdmFyaWFibGUgY2FsbGVkOiAnbWlzc2VkQXR0YWNrcycgYW5kIHN1bXMgaXQgdXBcbiAgICAvLyAgICAgICAgIGV2ZXJ5dGltZSB0aGF0IHRoZSB1c2VyIGNsaWNrcyBhIGdyaWQgZWxlbWVudCB0aGF0IGlzIHJldHVybmVkXG4gICAgLy8gICAgICAgICBhcyBmYWxzZSBpbiB0aGUgZ3JpZCBib29sZWFuIGFycmF5LlxuXG4gICAgLy8gNC4gR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byByZXBvcnQgd2hldGhlciBvciBub3QgYWxsIG9mIHRoZWlyIHNoaXBzIGhhdmUgYmVlbiBzdW5rLiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==