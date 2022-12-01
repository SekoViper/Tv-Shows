(self["webpackChunktv_shows"] = self["webpackChunktv_shows"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  background-color: black;\r\n  color: azure;\r\n}\r\n\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n#root,\r\n#__next {\r\n  isolation: isolate;\r\n}\r\n\r\n.navigation {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 20px 0 0 0;\r\n}\r\n\r\n.logo {\r\n  cursor: pointer;\r\n}\r\n\r\n.menu {\r\n  display: flex;\r\n  list-style-type: none;\r\n  gap: 20px;\r\n}\r\n\r\n.menu__item {\r\n  cursor: pointer;\r\n}\r\n\r\n.menu__item a {\r\n  text-decoration: none;\r\n  color: rgb(161, 161, 161);\r\n}\r\n\r\n.wrapper {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.visible {\r\n  display: block !important;\r\n}\r\n\r\nfooter {\r\n  background-color: rgb(0, 0, 0);\r\n  height: 40vh;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.footer__element {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.quicl__links--items {\r\n  display: flex;\r\n  gap: 50px;\r\n}\r\n\r\n.social__icons {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n#movies-section,\r\n#about-section,\r\n#contact-section {\r\n  display: none;\r\n}\r\n\r\n.shows-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.tv-img img {\r\n  width: 160px;\r\n}\r\n\r\n.btn-close {\r\n  color: white;\r\n  background-color: white;\r\n}\r\n\r\n.main-container {\r\n  margin-bottom: 20px;\r\n  padding: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.main-container:hover {\r\n  animation: bg-spin 1s linear infinite;\r\n  border: 1px solid red;\r\n\r\n  /* border: 2px solid #fff; */\r\n  background-image:\r\n    conic-gradient(\r\n      from var(--border-angle),\r\n      #213,\r\n      #112 50%,\r\n      #213\r\n    ),\r\n    conic-gradient(from var(--border-angle), transparent 20%, rgb(0, 0, 0), rgb(35, 6, 12));\r\n  background-size:\r\n    calc(100% - (var(--border-size) * 2))\r\n    calc(100% - (var(--border-size) * 2)),\r\n    cover;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n@keyframes bg-spin {\r\n  to {\r\n    --border-angle: 1turn;\r\n  }\r\n}\r\n\r\n.popup-first-section {\r\n  background: rgb(20, 19, 19);\r\n}\r\n\r\n.modal-header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: rgb(35, 34, 34);\r\n}\r\n\r\n.popup-image {\r\n  width: 50%;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  width: 50%;\r\n}\r\n\r\n.form-submit-buttons {\r\n  display: flex;\r\n  border: none;\r\n  justify-content: space-around;\r\n  margin-left: 90px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.movie__name {\r\n  font-size: 20px;\r\n}\r\n\r\n.movie__likes {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 7px;\r\n  justify-content: center;\r\n}\r\n\r\n.view-more {\r\n  background-color: red;\r\n  color: #fff;\r\n  border: none;\r\n  padding: 5px 9px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;;EAEE,YAAY;EACZ,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;;AAEA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;;;EAGE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,qCAAqC;EACrC,qBAAqB;;EAErB,4BAA4B;EAC5B;;;;;;;2FAOyF;EACzF;;;SAGO;EACP,kCAAkC;EAClC,4BAA4B;AAC9B;;AAEA;EACE;IACE,qBAAqB;EACvB;AACF;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iCAAiC;AACnC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,6BAA6B;EAC7B,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,gBAAgB;AAClB","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  background-color: black;\r\n  color: azure;\r\n}\r\n\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n#root,\r\n#__next {\r\n  isolation: isolate;\r\n}\r\n\r\n.navigation {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 20px 0 0 0;\r\n}\r\n\r\n.logo {\r\n  cursor: pointer;\r\n}\r\n\r\n.menu {\r\n  display: flex;\r\n  list-style-type: none;\r\n  gap: 20px;\r\n}\r\n\r\n.menu__item {\r\n  cursor: pointer;\r\n}\r\n\r\n.menu__item a {\r\n  text-decoration: none;\r\n  color: rgb(161, 161, 161);\r\n}\r\n\r\n.wrapper {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.visible {\r\n  display: block !important;\r\n}\r\n\r\nfooter {\r\n  background-color: rgb(0, 0, 0);\r\n  height: 40vh;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.footer__element {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.quicl__links--items {\r\n  display: flex;\r\n  gap: 50px;\r\n}\r\n\r\n.social__icons {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n#movies-section,\r\n#about-section,\r\n#contact-section {\r\n  display: none;\r\n}\r\n\r\n.shows-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.tv-img img {\r\n  width: 160px;\r\n}\r\n\r\n.btn-close {\r\n  color: white;\r\n  background-color: white;\r\n}\r\n\r\n.main-container {\r\n  margin-bottom: 20px;\r\n  padding: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.main-container:hover {\r\n  animation: bg-spin 1s linear infinite;\r\n  border: 1px solid red;\r\n\r\n  /* border: 2px solid #fff; */\r\n  background-image:\r\n    conic-gradient(\r\n      from var(--border-angle),\r\n      #213,\r\n      #112 50%,\r\n      #213\r\n    ),\r\n    conic-gradient(from var(--border-angle), transparent 20%, rgb(0, 0, 0), rgb(35, 6, 12));\r\n  background-size:\r\n    calc(100% - (var(--border-size) * 2))\r\n    calc(100% - (var(--border-size) * 2)),\r\n    cover;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n@keyframes bg-spin {\r\n  to {\r\n    --border-angle: 1turn;\r\n  }\r\n}\r\n\r\n.popup-first-section {\r\n  background: rgb(20, 19, 19);\r\n}\r\n\r\n.modal-header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: rgb(35, 34, 34);\r\n}\r\n\r\n.popup-image {\r\n  width: 50%;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  width: 50%;\r\n}\r\n\r\n.form-submit-buttons {\r\n  display: flex;\r\n  border: none;\r\n  justify-content: space-around;\r\n  margin-left: 90px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.movie__name {\r\n  font-size: 20px;\r\n}\r\n\r\n.movie__likes {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 7px;\r\n  justify-content: center;\r\n}\r\n\r\n.view-more {\r\n  background-color: red;\r\n  color: #fff;\r\n  border: none;\r\n  padding: 5px 9px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ }),

/***/ "./src/commentUtils.js":
/*!*****************************!*\
  !*** ./src/commentUtils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "popupArrange": () => (/* binding */ popupArrange)
/* harmony export */ });
/* harmony import */ var _modules_renderComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderComments.js */ "./src/modules/renderComments.js");


const BASECOMMENTSAPI = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/" || 0;
const APPENDPOINTID = "YSRZEDfK4jralUpaeauQ" || 0;

let itemId = '';

const grabId = async () => {
  document.querySelectorAll('.comment-form').forEach((button) => {
    button.addEventListener('submit', async (e) => {
      e.preventDefault();

      itemId = button.id;

      const inputNameTag = document.getElementById(`input-name-${itemId}`);
      const inputCommentsTag = document.getElementById(`input-comments-${itemId}`);

      const APIEndpoint = BASECOMMENTSAPI.concat(
        `apps/${APPENDPOINTID}/comments`,
      );

      await fetch(APIEndpoint, {
        method: 'POST',
        body: JSON.stringify({
          item_id: itemId,
          username: inputNameTag.value,
          comment: inputCommentsTag.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response)
        .catch((error) => error);

      inputNameTag.value = '';
      inputCommentsTag.value = '';

      const API_PATH = BASECOMMENTSAPI.concat(
        `apps/${APPENDPOINTID}/comments?item_id=${itemId}`,
      );
      const comments = await (0,_modules_renderComments_js__WEBPACK_IMPORTED_MODULE_0__.renderComments)(API_PATH);

      (0,_modules_renderComments_js__WEBPACK_IMPORTED_MODULE_0__.populateComments)(comments, itemId);
    });
  });
};

const fillComments = async () => {
  document.querySelectorAll('.view-more').forEach((detailButton) => {
    detailButton.addEventListener('click', async () => {
      const itemId = detailButton.id;

      const API_PATH = BASECOMMENTSAPI.concat(
        `apps/${APPENDPOINTID}/comments?item_id=${itemId}`,
      );

      const comments = await (0,_modules_renderComments_js__WEBPACK_IMPORTED_MODULE_0__.renderComments)(API_PATH);
      const listItems = document.createElement('ul');
      listItems.className = 'comment-items';
      (0,_modules_renderComments_js__WEBPACK_IMPORTED_MODULE_0__.populateComments)(comments, itemId, listItems);
    });
  });
};

const popupArrange = async () => {
  await fillComments();
  await grabId();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ popupArrange });

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/nav.js */ "./src/modules/nav.js");
/* harmony import */ var _modules_tvShows_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tvShows.js */ "./src/modules/tvShows.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




(0,_modules_nav_js__WEBPACK_IMPORTED_MODULE_0__.showComponent)();
(0,_modules_tvShows_js__WEBPACK_IMPORTED_MODULE_1__.show)();


/***/ }),

/***/ "./src/modules/createTVShow.js":
/*!*************************************!*\
  !*** ./src/modules/createTVShow.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getTVShows": () => (/* binding */ getTVShows)
/* harmony export */ });
const APIUrl = "https://api.tvmaze.com/shows";

const getTVShows = async () => {
  const res = await fetch(APIUrl);
  const data = await res.json();
  return data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTVShows);

/***/ }),

/***/ "./src/modules/displayTVShows.js":
/*!***************************************!*\
  !*** ./src/modules/displayTVShows.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "displayTVShows": () => (/* binding */ displayTVShows)
/* harmony export */ });
const tvShowsContainer = document.getElementById('shows-container');

tvShowsContainer.innerHTML = '';
const displayTVShows = (tvShows, like) => tvShows.slice(0, 15).forEach((tvShow, index) => {
  const content = `
      <div class="main-container">
        <div class="tv-img">
        <img src="${tvShow.image.medium}" alt="${tvShow.name} image">
      </div>
      <div class="tvshows-content">
        <p class="movie__name">${tvShow.name}</p>
        <p class="movie__likes"><i class="fa-regular fa-heart" id="${tvShow.id}" style="cursor:pointer;"></i><span class="like-number">${like.find((x) => x.item_id === index + 1) ? like.find((x) => x.item_id === index + 1).likes : 0} </span></p>
      </div>

      <div class="popup-section container-md">
      <button class="view-more" type="button" data-bs-toggle="modal" id="${tvShow.id}" data-bs-target="#myModal-${tvShow.id}"> Comment </button>

            <div class="modal" id="myModal-${tvShow.id}">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                  </div>
                  <div class="popup-first-section modal-header">
                    
                    <img class="popup-image" src="${tvShow.image.original}" alt="${tvShow.name} image">
                    <h2> ${tvShow.name} </h2>
                  </div>

                  <div class="popup-second-section modal-header">
                    <span class="span-feature">
                      Country: ${tvShow.network.country.name}
                    </span>
                    <span class="span-feature">
                      Average Runtime: ${tvShow.averageRuntime}
                    </span>
                    <span class="span-feature">
                      Genre: ${tvShow.genres}
                    </span>
                    <span class="span-feature">
                      Status: ${tvShow.status}
                    </span>
                  </div>
                  <div class="popup-third-section modal-header">
                    <h2> Summary </h2>
                    ${tvShow.summary}
                  </div>
                  <div class="popup-forth-section modal-header">
                  <div class="comments-title">
                      <h2> Comments </h2>
                      <span class="comment-count-${tvShow.id}"></span>
                    </div>
                    <div class="get-comments-tag-${tvShow.id}">
                    </div>
                  </div>
                  <div class="popup-fiveth-section modal-header">
                    <h2> Create a Comment </h2>
                    <form class="comment-form" id="${tvShow.id}" method="post">
                      <input id="input-name-${tvShow.id}" class="form-input" type="text" placeholder="Your Name" value="" required>
                      <textarea name="user_message" id="input-comments-${tvShow.id}" class="form-text-area" placeholder="Your Comments" value="" maxlength="600" required></textarea>
                      <div class="form-submit-buttons">
                        <button type="submit" class="form-submit-button">Submit</button>
                      <div>
                    </form>
                
                </div>
              <div>
            </div>
  `;
  tvShowsContainer.insertAdjacentHTML('beforeend', content);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ displayTVShows });

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getLikes": () => (/* binding */ getLikes)
/* harmony export */ });
const LIKES_API_ENDPOINT = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YSRZEDfK4jralUpaeauQ/likes" || 0;

const getLikes = async () => {
  const res = await fetch(LIKES_API_ENDPOINT);
  const data = await res.json();
  return data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);

/***/ }),

/***/ "./src/modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

const counter = () => {
  const movies = document.querySelectorAll('.main-container');
  const counterPlaceholder = document.querySelector('.counter');
  counterPlaceholder.innerHTML = movies.length;
};

exports.counter = counter;

/***/ }),

/***/ "./src/modules/nav.js":
/*!****************************!*\
  !*** ./src/modules/nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "showComponent": () => (/* binding */ showComponent)
/* harmony export */ });
const navItems = document.querySelectorAll('.menu__item');
const movieSection = document.getElementById('movies-section');
const aboutSection = document.getElementById('about-section');
const contactSection = document.getElementById('contact-section');

const showComponent = (componentId) => {
  switch (componentId) {
    case 'movies-section':
      movieSection.classList.add('visible');
      aboutSection.classList.remove('visible');
      contactSection.classList.remove('visible');
      break;
    case 'about-section':
      movieSection.classList.remove('visible');
      aboutSection.classList.add('visible');
      contactSection.classList.remove('visible');
      break;
    case 'contact-section':
      movieSection.classList.remove('visible');
      aboutSection.classList.remove('visible');
      contactSection.classList.add('visible');
      break;
    default:
      break;
  }
};

navItems.forEach((navItem) => {
  navItem.addEventListener('click', (event) => {
    const componentId = event.target.getAttribute('showComponent');
    showComponent(componentId);
  });
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showComponent);

/***/ }),

/***/ "./src/modules/renderComments.js":
/*!***************************************!*\
  !*** ./src/modules/renderComments.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "populateComments": () => (/* binding */ populateComments),
/* harmony export */   "renderComments": () => (/* binding */ renderComments)
/* harmony export */ });
const renderComments = async (BASECOMMENTSAPI) => {
  const fetchData = await fetch(BASECOMMENTSAPI, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .catch((error) => error);
  return fetchData;
};

const populateComments = (comments, itemId) => {
  const getCommentsTag = document.querySelector(`.get-comments-tag-${itemId}`);
  getCommentsTag.innerHTML = '';
  const listItems = document.createElement('ul');
  listItems.className = 'comment-items';

  comments.forEach((comment) => {
    listItems.innerHTML += `
        <li class="each-comment">
          <span class="item-holder"> <span class="comment-username">${comment.creation_date} ${comment.username}:</span>   ${comment.comment}</span>
        </li>
      `;
  });
  getCommentsTag.appendChild(listItems);

  const commentTag = document.querySelector(`.comment-count-${itemId}`);
  commentTag.innerHTML = `(${comments.length})`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ renderComments, populateComments });

/***/ }),

/***/ "./src/modules/tvShows.js":
/*!********************************!*\
  !*** ./src/modules/tvShows.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "show": () => (/* binding */ show)
/* harmony export */ });
/* harmony import */ var _commentUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commentUtils.js */ "./src/commentUtils.js");
/* harmony import */ var _createTVShow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTVShow.js */ "./src/modules/createTVShow.js");
/* harmony import */ var _displayTVShows_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTVShows.js */ "./src/modules/displayTVShows.js");
/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getLikes.js */ "./src/modules/getLikes.js");
/* harmony import */ var _itemCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./itemCounter.js */ "./src/modules/itemCounter.js");
/* harmony import */ var _tvShowsLike_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tvShowsLike.js */ "./src/modules/tvShowsLike.js");







const show = async () => {
  const tvShow = await (0,_createTVShow_js__WEBPACK_IMPORTED_MODULE_1__.getTVShows)();
  const like = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_3__.getLikes)();
  await (0,_displayTVShows_js__WEBPACK_IMPORTED_MODULE_2__.displayTVShows)(tvShow, like);
  (0,_tvShowsLike_js__WEBPACK_IMPORTED_MODULE_5__.likeCount)();
  (0,_commentUtils_js__WEBPACK_IMPORTED_MODULE_0__.popupArrange)();
  (0,_itemCounter_js__WEBPACK_IMPORTED_MODULE_4__.counter)();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (show);

/***/ }),

/***/ "./src/modules/tvShowsLike.js":
/*!************************************!*\
  !*** ./src/modules/tvShowsLike.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLikes": () => (/* binding */ createLikes),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "likeCount": () => (/* binding */ likeCount)
/* harmony export */ });
/* harmony import */ var _createTVShow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTVShow.js */ "./src/modules/createTVShow.js");
/* harmony import */ var _displayTVShows_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTVShows.js */ "./src/modules/displayTVShows.js");
/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getLikes.js */ "./src/modules/getLikes.js");




const tvShowsContainer = document.getElementById('shows-container');

const APIUrl = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YSRZEDfK4jralUpaeauQ/likes";

const createLikes = async (itemId) => {
  await fetch(APIUrl, {
    method: 'POST',
    body: JSON.stringify({ item_id: itemId }),
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  });
};

const likeCount = async () => {
  const likeBtns = document.querySelectorAll('.fa-regular');
  likeBtns.forEach((likeBtn, index) => {
    likeBtn.addEventListener('click', async () => {
      if (likeBtn.classList.contains('fa-regular')) {
        const dataTvShow = await (0,_createTVShow_js__WEBPACK_IMPORTED_MODULE_0__.getTVShows)();
        const itemId = dataTvShow.find((x) => x.id === index + 1);

        await createLikes(itemId.id);

        const tvShows = await (0,_createTVShow_js__WEBPACK_IMPORTED_MODULE_0__.getTVShows)();
        const like = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)();
        tvShowsContainer.innerHTML = '';

        await (0,_displayTVShows_js__WEBPACK_IMPORTED_MODULE_1__.displayTVShows)(tvShows, like);
        await likeCount();
      } else {
        likeBtn.className = 'fa-regular fa-heart';
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ createLikes, likeCount });

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLDBEQUFTO0FBQ1gsRUFBRSw4REFBWTtBQUNkLEVBQUUsd0RBQU87QUFDVDs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCNEI7QUFDTTtBQUNaOztBQUV6Qzs7QUFFQSxlQUFlLG9HQUF3Qjs7QUFFaEM7QUFDUDtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1QyxlQUFlLG1DQUFtQyxnQkFBZ0I7QUFDbEUsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsNERBQVU7QUFDM0M7O0FBRUE7O0FBRUEsOEJBQThCLDREQUFVO0FBQ3hDLDJCQUEyQixzREFBUTtBQUNuQzs7QUFFQSxjQUFjLGtFQUFjO0FBQzVCO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBLGlFQUFlLEVBQUUsd0JBQXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHYtc2hvd3MvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3R2LXNob3dzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90di1zaG93cy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3R2LXNob3dzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3R2LXNob3dzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3R2LXNob3dzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90di1zaG93cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90di1zaG93cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90di1zaG93cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3R2LXNob3dzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdHYtc2hvd3MvLi9zcmMvY29tbWVudFV0aWxzLmpzIiwid2VicGFjazovL3R2LXNob3dzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3R2LXNob3dzLy4vc3JjL21vZHVsZXMvY3JlYXRlVFZTaG93LmpzIiwid2VicGFjazovL3R2LXNob3dzLy4vc3JjL21vZHVsZXMvZGlzcGxheVRWU2hvd3MuanMiLCJ3ZWJwYWNrOi8vdHYtc2hvd3MvLi9zcmMvbW9kdWxlcy9nZXRMaWtlcy5qcyIsIndlYnBhY2s6Ly90di1zaG93cy8uL3NyYy9tb2R1bGVzL2l0ZW1Db3VudGVyLmpzIiwid2VicGFjazovL3R2LXNob3dzLy4vc3JjL21vZHVsZXMvbmF2LmpzIiwid2VicGFjazovL3R2LXNob3dzLy4vc3JjL21vZHVsZXMvcmVuZGVyQ29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vdHYtc2hvd3MvLi9zcmMvbW9kdWxlcy90dlNob3dzLmpzIiwid2VicGFjazovL3R2LXNob3dzLy4vc3JjL21vZHVsZXMvdHZTaG93c0xpa2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgY29sb3I6IGF6dXJlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG59XFxyXFxuXFxyXFxuaW1nLFxcclxcbnBpY3R1cmUsXFxyXFxudmlkZW8sXFxyXFxuY2FudmFzLFxcclxcbnN2ZyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsXFxyXFxuYnV0dG9uLFxcclxcbnRleHRhcmVhLFxcclxcbnNlbGVjdCB7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5wLFxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbiNyb290LFxcclxcbiNfX25leHQge1xcclxcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9faXRlbSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51X19pdGVtIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHJnYigxNjEsIDE2MSwgMTYxKTtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udmlzaWJsZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbiAgaGVpZ2h0OiA0MHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfX2VsZW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnF1aWNsX19saW5rcy0taXRlbXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbF9faWNvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI21vdmllcy1zZWN0aW9uLFxcclxcbiNhYm91dC1zZWN0aW9uLFxcclxcbiNjb250YWN0LXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3dzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4udHYtaW1nIGltZyB7XFxyXFxuICB3aWR0aDogMTYwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG4tY2xvc2Uge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyOmhvdmVyIHtcXHJcXG4gIGFuaW1hdGlvbjogYmctc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuXFxyXFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCAjZmZmOyAqL1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTpcXHJcXG4gICAgY29uaWMtZ3JhZGllbnQoXFxyXFxuICAgICAgZnJvbSB2YXIoLS1ib3JkZXItYW5nbGUpLFxcclxcbiAgICAgICMyMTMsXFxyXFxuICAgICAgIzExMiA1MCUsXFxyXFxuICAgICAgIzIxM1xcclxcbiAgICApLFxcclxcbiAgICBjb25pYy1ncmFkaWVudChmcm9tIHZhcigtLWJvcmRlci1hbmdsZSksIHRyYW5zcGFyZW50IDIwJSwgcmdiKDAsIDAsIDApLCByZ2IoMzUsIDYsIDEyKSk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6XFxyXFxuICAgIGNhbGMoMTAwJSAtICh2YXIoLS1ib3JkZXItc2l6ZSkgKiAyKSlcXHJcXG4gICAgY2FsYygxMDAlIC0gKHZhcigtLWJvcmRlci1zaXplKSAqIDIpKSxcXHJcXG4gICAgY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBiZy1zcGluIHtcXHJcXG4gIHRvIHtcXHJcXG4gICAgLS1ib3JkZXItYW5nbGU6IDF0dXJuO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtZmlyc3Qtc2VjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMjAsIDE5LCAxOSk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDM0LCAzNCk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1pbWFnZSB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1zdWJtaXQtYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBtYXJnaW4tbGVmdDogOTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZV9fbmFtZSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZV9fbGlrZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDdweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udmlldy1tb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogNXB4IDlweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1DQUFtQztBQUNyQzs7QUFFQTs7Ozs7RUFLRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTs7OztFQUlFLGFBQWE7QUFDZjs7QUFFQTs7Ozs7OztFQU9FLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7OztFQUdFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxxQkFBcUI7O0VBRXJCLDRCQUE0QjtFQUM1Qjs7Ozs7OzsyRkFPeUY7RUFDekY7OztTQUdPO0VBQ1Asa0NBQWtDO0VBQ2xDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBjb2xvcjogYXp1cmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcsXFxyXFxucGljdHVyZSxcXHJcXG52aWRlbyxcXHJcXG5jYW52YXMsXFxyXFxuc3ZnIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEsXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbnAsXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuI3Jvb3QsXFxyXFxuI19fbmV4dCB7XFxyXFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51X19pdGVtIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2l0ZW0gYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogcmdiKDE2MSwgMTYxLCAxNjEpO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi52aXNpYmxlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxuICBoZWlnaHQ6IDQwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9fZWxlbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucXVpY2xfX2xpbmtzLS1pdGVtcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsX19pY29ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbW92aWVzLXNlY3Rpb24sXFxyXFxuI2Fib3V0LXNlY3Rpb24sXFxyXFxuI2NvbnRhY3Qtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvd3MtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi50di1pbWcgaW1nIHtcXHJcXG4gIHdpZHRoOiAxNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jbG9zZSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXI6aG92ZXIge1xcclxcbiAgYW5pbWF0aW9uOiBiZy1zcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG5cXHJcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7ICovXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcclxcbiAgICBjb25pYy1ncmFkaWVudChcXHJcXG4gICAgICBmcm9tIHZhcigtLWJvcmRlci1hbmdsZSksXFxyXFxuICAgICAgIzIxMyxcXHJcXG4gICAgICAjMTEyIDUwJSxcXHJcXG4gICAgICAjMjEzXFxyXFxuICAgICksXFxyXFxuICAgIGNvbmljLWdyYWRpZW50KGZyb20gdmFyKC0tYm9yZGVyLWFuZ2xlKSwgdHJhbnNwYXJlbnQgMjAlLCByZ2IoMCwgMCwgMCksIHJnYigzNSwgNiwgMTIpKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTpcXHJcXG4gICAgY2FsYygxMDAlIC0gKHZhcigtLWJvcmRlci1zaXplKSAqIDIpKVxcclxcbiAgICBjYWxjKDEwMCUgLSAodmFyKC0tYm9yZGVyLXNpemUpICogMikpLFxcclxcbiAgICBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJnLXNwaW4ge1xcclxcbiAgdG8ge1xcclxcbiAgICAtLWJvcmRlci1hbmdsZTogMXR1cm47XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1maXJzdC1zZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyMCwgMTksIDE5KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMzQsIDM0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWltYWdlIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXN1Ym1pdC1idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllX19uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllX19saWtlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogN3B4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi52aWV3LW1vcmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA1cHggOXB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyByZW5kZXJDb21tZW50cywgcG9wdWxhdGVDb21tZW50cyB9IGZyb20gJy4vbW9kdWxlcy9yZW5kZXJDb21tZW50cy5qcyc7XHJcblxyXG5jb25zdCBCQVNFQ09NTUVOVFNBUEkgPSBwcm9jZXNzLmVudi5CQVNFQ09NTUVOVFNBUEkgfHwgJyc7XHJcbmNvbnN0IEFQUEVORFBPSU5USUQgPSBwcm9jZXNzLmVudi5BUFBFTkRQT0lOVElEIHx8ICcnO1xyXG5cclxubGV0IGl0ZW1JZCA9ICcnO1xyXG5cclxuY29uc3QgZ3JhYklkID0gYXN5bmMgKCkgPT4ge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LWZvcm0nKS5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBpdGVtSWQgPSBidXR0b24uaWQ7XHJcblxyXG4gICAgICBjb25zdCBpbnB1dE5hbWVUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaW5wdXQtbmFtZS0ke2l0ZW1JZH1gKTtcclxuICAgICAgY29uc3QgaW5wdXRDb21tZW50c1RhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpbnB1dC1jb21tZW50cy0ke2l0ZW1JZH1gKTtcclxuXHJcbiAgICAgIGNvbnN0IEFQSUVuZHBvaW50ID0gQkFTRUNPTU1FTlRTQVBJLmNvbmNhdChcclxuICAgICAgICBgYXBwcy8ke0FQUEVORFBPSU5USUR9L2NvbW1lbnRzYCxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGF3YWl0IGZldGNoKEFQSUVuZHBvaW50LCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgaXRlbV9pZDogaXRlbUlkLFxyXG4gICAgICAgICAgdXNlcm5hbWU6IGlucHV0TmFtZVRhZy52YWx1ZSxcclxuICAgICAgICAgIGNvbW1lbnQ6IGlucHV0Q29tbWVudHNUYWcudmFsdWUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UpXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3IpO1xyXG5cclxuICAgICAgaW5wdXROYW1lVGFnLnZhbHVlID0gJyc7XHJcbiAgICAgIGlucHV0Q29tbWVudHNUYWcudmFsdWUgPSAnJztcclxuXHJcbiAgICAgIGNvbnN0IEFQSV9QQVRIID0gQkFTRUNPTU1FTlRTQVBJLmNvbmNhdChcclxuICAgICAgICBgYXBwcy8ke0FQUEVORFBPSU5USUR9L2NvbW1lbnRzP2l0ZW1faWQ9JHtpdGVtSWR9YCxcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCByZW5kZXJDb21tZW50cyhBUElfUEFUSCk7XHJcblxyXG4gICAgICBwb3B1bGF0ZUNvbW1lbnRzKGNvbW1lbnRzLCBpdGVtSWQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBmaWxsQ29tbWVudHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZpZXctbW9yZScpLmZvckVhY2goKGRldGFpbEJ1dHRvbikgPT4ge1xyXG4gICAgZGV0YWlsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBpdGVtSWQgPSBkZXRhaWxCdXR0b24uaWQ7XHJcblxyXG4gICAgICBjb25zdCBBUElfUEFUSCA9IEJBU0VDT01NRU5UU0FQSS5jb25jYXQoXHJcbiAgICAgICAgYGFwcHMvJHtBUFBFTkRQT0lOVElEfS9jb21tZW50cz9pdGVtX2lkPSR7aXRlbUlkfWAsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IHJlbmRlckNvbW1lbnRzKEFQSV9QQVRIKTtcclxuICAgICAgY29uc3QgbGlzdEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgbGlzdEl0ZW1zLmNsYXNzTmFtZSA9ICdjb21tZW50LWl0ZW1zJztcclxuICAgICAgcG9wdWxhdGVDb21tZW50cyhjb21tZW50cywgaXRlbUlkLCBsaXN0SXRlbXMpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcG9wdXBBcnJhbmdlID0gYXN5bmMgKCkgPT4ge1xyXG4gIGF3YWl0IGZpbGxDb21tZW50cygpO1xyXG4gIGF3YWl0IGdyYWJJZCgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBwb3B1cEFycmFuZ2UgfTsiLCJpbXBvcnQgeyBzaG93Q29tcG9uZW50IH0gZnJvbSAnLi9tb2R1bGVzL25hdi5qcyc7XG5pbXBvcnQgeyBzaG93IH0gZnJvbSAnLi9tb2R1bGVzL3R2U2hvd3MuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbnNob3dDb21wb25lbnQoKTtcbnNob3coKTtcbiIsImNvbnN0IEFQSVVybCA9IHByb2Nlc3MuZW52LkJBU0VNT1ZJRUFQSTtcblxuZXhwb3J0IGNvbnN0IGdldFRWU2hvd3MgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKEFQSVVybCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFRWU2hvd3M7IiwiY29uc3QgdHZTaG93c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93cy1jb250YWluZXInKTtcblxudHZTaG93c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbmV4cG9ydCBjb25zdCBkaXNwbGF5VFZTaG93cyA9ICh0dlNob3dzLCBsaWtlKSA9PiB0dlNob3dzLnNsaWNlKDAsIDE1KS5mb3JFYWNoKCh0dlNob3csIGluZGV4KSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwibWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR2LWltZ1wiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7dHZTaG93LmltYWdlLm1lZGl1bX1cIiBhbHQ9XCIke3R2U2hvdy5uYW1lfSBpbWFnZVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidHZzaG93cy1jb250ZW50XCI+XG4gICAgICAgIDxwIGNsYXNzPVwibW92aWVfX25hbWVcIj4ke3R2U2hvdy5uYW1lfTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJtb3ZpZV9fbGlrZXNcIj48aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtaGVhcnRcIiBpZD1cIiR7dHZTaG93LmlkfVwiIHN0eWxlPVwiY3Vyc29yOnBvaW50ZXI7XCI+PC9pPjxzcGFuIGNsYXNzPVwibGlrZS1udW1iZXJcIj4ke2xpa2UuZmluZCgoeCkgPT4geC5pdGVtX2lkID09PSBpbmRleCArIDEpID8gbGlrZS5maW5kKCh4KSA9PiB4Lml0ZW1faWQgPT09IGluZGV4ICsgMSkubGlrZXMgOiAwfSA8L3NwYW4+PC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1zZWN0aW9uIGNvbnRhaW5lci1tZFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInZpZXctbW9yZVwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCIgaWQ9XCIke3R2U2hvdy5pZH1cIiBkYXRhLWJzLXRhcmdldD1cIiNteU1vZGFsLSR7dHZTaG93LmlkfVwiPiBDb21tZW50IDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIiBpZD1cIm15TW9kYWwtJHt0dlNob3cuaWR9XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1maXJzdC1zZWN0aW9uIG1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInBvcHVwLWltYWdlXCIgc3JjPVwiJHt0dlNob3cuaW1hZ2Uub3JpZ2luYWx9XCIgYWx0PVwiJHt0dlNob3cubmFtZX0gaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPiAke3R2U2hvdy5uYW1lfSA8L2gyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1zZWNvbmQtc2VjdGlvbiBtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGFuLWZlYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICBDb3VudHJ5OiAke3R2U2hvdy5uZXR3b3JrLmNvdW50cnkubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNwYW4tZmVhdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIEF2ZXJhZ2UgUnVudGltZTogJHt0dlNob3cuYXZlcmFnZVJ1bnRpbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGFuLWZlYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICBHZW5yZTogJHt0dlNob3cuZ2VucmVzfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Bhbi1mZWF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgU3RhdHVzOiAke3R2U2hvdy5zdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXRoaXJkLXNlY3Rpb24gbW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj4gU3VtbWFyeSA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAke3R2U2hvdy5zdW1tYXJ5fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtZm9ydGgtc2VjdGlvbiBtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50cy10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMj4gQ29tbWVudHMgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbW1lbnQtY291bnQtJHt0dlNob3cuaWR9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdldC1jb21tZW50cy10YWctJHt0dlNob3cuaWR9XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtZml2ZXRoLXNlY3Rpb24gbW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj4gQ3JlYXRlIGEgQ29tbWVudCA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImNvbW1lbnQtZm9ybVwiIGlkPVwiJHt0dlNob3cuaWR9XCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImlucHV0LW5hbWUtJHt0dlNob3cuaWR9XCIgY2xhc3M9XCJmb3JtLWlucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiIHZhbHVlPVwiXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJ1c2VyX21lc3NhZ2VcIiBpZD1cImlucHV0LWNvbW1lbnRzLSR7dHZTaG93LmlkfVwiIGNsYXNzPVwiZm9ybS10ZXh0LWFyZWFcIiBwbGFjZWhvbGRlcj1cIllvdXIgQ29tbWVudHNcIiB2YWx1ZT1cIlwiIG1heGxlbmd0aD1cIjYwMFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tc3VibWl0LWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiZm9ybS1zdWJtaXQtYnV0dG9uXCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gIGA7XG4gIHR2U2hvd3NDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBjb250ZW50KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB7IGRpc3BsYXlUVlNob3dzIH07IiwiY29uc3QgTElLRVNfQVBJX0VORFBPSU5UID0gcHJvY2Vzcy5lbnYuTElLRVNBUElQQVRIIHx8ICcnO1xuXG5leHBvcnQgY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKExJS0VTX0FQSV9FTkRQT0lOVCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldExpa2VzOyIsImNvbnN0IGNvdW50ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgbW92aWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tY29udGFpbmVyJyk7XHJcbiAgY29uc3QgY291bnRlclBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50ZXInKTtcclxuICBjb3VudGVyUGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gbW92aWVzLmxlbmd0aDtcclxufTtcclxuXHJcbmV4cG9ydHMuY291bnRlciA9IGNvdW50ZXI7IiwiY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudV9faXRlbScpO1xuY29uc3QgbW92aWVTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmllcy1zZWN0aW9uJyk7XG5jb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQtc2VjdGlvbicpO1xuY29uc3QgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1zZWN0aW9uJyk7XG5cbmV4cG9ydCBjb25zdCBzaG93Q29tcG9uZW50ID0gKGNvbXBvbmVudElkKSA9PiB7XG4gIHN3aXRjaCAoY29tcG9uZW50SWQpIHtcbiAgICBjYXNlICdtb3ZpZXMtc2VjdGlvbic6XG4gICAgICBtb3ZpZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgYWJvdXRTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgIGNvbnRhY3RTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Fib3V0LXNlY3Rpb24nOlxuICAgICAgbW92aWVTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgIGFib3V0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICBjb250YWN0U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjb250YWN0LXNlY3Rpb24nOlxuICAgICAgbW92aWVTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgIGFib3V0U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICBjb250YWN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn07XG5cbm5hdkl0ZW1zLmZvckVhY2goKG5hdkl0ZW0pID0+IHtcbiAgbmF2SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudElkID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnc2hvd0NvbXBvbmVudCcpO1xuICAgIHNob3dDb21wb25lbnQoY29tcG9uZW50SWQpO1xuICB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzaG93Q29tcG9uZW50OyIsImV4cG9ydCBjb25zdCByZW5kZXJDb21tZW50cyA9IGFzeW5jIChCQVNFQ09NTUVOVFNBUEkpID0+IHtcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXdhaXQgZmV0Y2goQkFTRUNPTU1FTlRTQVBJLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvcik7XG4gIHJldHVybiBmZXRjaERhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgcG9wdWxhdGVDb21tZW50cyA9IChjb21tZW50cywgaXRlbUlkKSA9PiB7XG4gIGNvbnN0IGdldENvbW1lbnRzVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdldC1jb21tZW50cy10YWctJHtpdGVtSWR9YCk7XG4gIGdldENvbW1lbnRzVGFnLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBsaXN0SXRlbXMuY2xhc3NOYW1lID0gJ2NvbW1lbnQtaXRlbXMnO1xuXG4gIGNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICBsaXN0SXRlbXMuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPGxpIGNsYXNzPVwiZWFjaC1jb21tZW50XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLWhvbGRlclwiPiA8c3BhbiBjbGFzcz1cImNvbW1lbnQtdXNlcm5hbWVcIj4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gJHtjb21tZW50LnVzZXJuYW1lfTo8L3NwYW4+ICAgJHtjb21tZW50LmNvbW1lbnR9PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgYDtcbiAgfSk7XG4gIGdldENvbW1lbnRzVGFnLmFwcGVuZENoaWxkKGxpc3RJdGVtcyk7XG5cbiAgY29uc3QgY29tbWVudFRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21tZW50LWNvdW50LSR7aXRlbUlkfWApO1xuICBjb21tZW50VGFnLmlubmVySFRNTCA9IGAoJHtjb21tZW50cy5sZW5ndGh9KWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IHJlbmRlckNvbW1lbnRzLCBwb3B1bGF0ZUNvbW1lbnRzIH07IiwiaW1wb3J0IHsgcG9wdXBBcnJhbmdlIH0gZnJvbSAnLi4vY29tbWVudFV0aWxzLmpzJztcbmltcG9ydCB7IGdldFRWU2hvd3MgfSBmcm9tICcuL2NyZWF0ZVRWU2hvdy5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5VFZTaG93cyB9IGZyb20gJy4vZGlzcGxheVRWU2hvd3MuanMnO1xuaW1wb3J0IHsgZ2V0TGlrZXMgfSBmcm9tICcuL2dldExpa2VzLmpzJztcbmltcG9ydCB7IGNvdW50ZXIgfSBmcm9tICcuL2l0ZW1Db3VudGVyLmpzJztcbmltcG9ydCB7IGxpa2VDb3VudCB9IGZyb20gJy4vdHZTaG93c0xpa2UuanMnO1xuXG5leHBvcnQgY29uc3Qgc2hvdyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdHZTaG93ID0gYXdhaXQgZ2V0VFZTaG93cygpO1xuICBjb25zdCBsaWtlID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgYXdhaXQgZGlzcGxheVRWU2hvd3ModHZTaG93LCBsaWtlKTtcbiAgbGlrZUNvdW50KCk7XG4gIHBvcHVwQXJyYW5nZSgpO1xuICBjb3VudGVyKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93OyIsImltcG9ydCB7IGdldFRWU2hvd3MgfSBmcm9tICcuL2NyZWF0ZVRWU2hvdy5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5VFZTaG93cyB9IGZyb20gJy4vZGlzcGxheVRWU2hvd3MuanMnO1xuaW1wb3J0IHsgZ2V0TGlrZXMgfSBmcm9tICcuL2dldExpa2VzLmpzJztcblxuY29uc3QgdHZTaG93c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93cy1jb250YWluZXInKTtcblxuY29uc3QgQVBJVXJsID0gcHJvY2Vzcy5lbnYuTElLRVNBUElQQVRIO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTGlrZXMgPSBhc3luYyAoaXRlbUlkKSA9PiB7XG4gIGF3YWl0IGZldGNoKEFQSVVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXRlbV9pZDogaXRlbUlkIH0pLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyB9LFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaWtlQ291bnQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxpa2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLXJlZ3VsYXInKTtcbiAgbGlrZUJ0bnMuZm9yRWFjaCgobGlrZUJ0biwgaW5kZXgpID0+IHtcbiAgICBsaWtlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKGxpa2VCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1yZWd1bGFyJykpIHtcbiAgICAgICAgY29uc3QgZGF0YVR2U2hvdyA9IGF3YWl0IGdldFRWU2hvd3MoKTtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gZGF0YVR2U2hvdy5maW5kKCh4KSA9PiB4LmlkID09PSBpbmRleCArIDEpO1xuXG4gICAgICAgIGF3YWl0IGNyZWF0ZUxpa2VzKGl0ZW1JZC5pZCk7XG5cbiAgICAgICAgY29uc3QgdHZTaG93cyA9IGF3YWl0IGdldFRWU2hvd3MoKTtcbiAgICAgICAgY29uc3QgbGlrZSA9IGF3YWl0IGdldExpa2VzKCk7XG4gICAgICAgIHR2U2hvd3NDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgYXdhaXQgZGlzcGxheVRWU2hvd3ModHZTaG93cywgbGlrZSk7XG4gICAgICAgIGF3YWl0IGxpa2VDb3VudCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlrZUJ0bi5jbGFzc05hbWUgPSAnZmEtcmVndWxhciBmYS1oZWFydCc7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgeyBjcmVhdGVMaWtlcywgbGlrZUNvdW50IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9