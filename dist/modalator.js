var modalator =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = componator;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_componator_src_js_componator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_componator_src_js_componator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_componator_src_js_componator__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Modalator
 * JavaScript component to generate modals
 * (c) 2020 Joshua Adams
 */

/* ============================== Import Modules ============================ */
// module that handles generating gui components from passed data structure
// / = relative to server location
// ./ = relative to file location
// import componator from '/node_modules/componator/src/js/componator.js';
// for webpack

/* ================================ Variables =============================== */
// N/A

/* ============================= Private Methods ============================ */

function _preventDefault(event) {
  event.preventDefault();
} // default data structure to generate a modal


function _getDefaultConfig(_this) {
  var config = [{
    name: 'modal',
    element: {
      value: 'div'
    },
    child: [{
      name: 'overlay',
      element: {
        value: 'div'
      },
      style: {
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        display: 'none',
        background: '#000',
        opacity: '0.7',
        'z-index': '999'
      }
    }, {
      name: 'dialog',
      element: {
        value: 'div'
      },
      style: {
        position: 'absolute',
        top: '-1000px',
        'min-width': '500px',
        'max-width': '700px',
        'overflow-y': 'auto',
        'border-radius': '4px',
        'font-family': 'Gotham SSm,Helvetica,Arial,sans-serif',
        background: '#fff',
        display: 'block',
        'z-index': '9999'
      },
      child: [{
        name: 'dialog_header',
        element: {
          value: 'div'
        },
        style: {
          padding: '20px',
          'border-bottom': '1px solid #e9ecef'
        },
        child: [{
          name: 'dialog_header_title',
          element: {
            value: 'div'
          },
          style: {
            'font-weight': '500',
            color: '#212529',
            'font-size': '20px',
            display: 'inline-block'
          }
        }, {
          name: 'dialog_header_close_icon',
          element: {
            value: 'span',
            content: 'X'
          },
          // https://stackoverflow.com/questions/4011793/this-is-undefined-in-javascript-class-methods
          onclick: _this.hide.bind(_this),
          onmouseover: _node_modules_componator_src_js_componator__WEBPACK_IMPORTED_MODULE_0___default.a.defaultOnMouseOverColor,
          onmouseout: _node_modules_componator_src_js_componator__WEBPACK_IMPORTED_MODULE_0___default.a.defaultOnMouseOutColor,
          style: {
            padding: '0px 5px',
            color: '#C5C5C5',
            'font-size': '20px',
            'font-weight': '700',
            cursor: 'pointer',
            "float": 'right'
          }
        }]
      }, {
        name: 'dialog_body',
        element: {
          value: 'div'
        },
        style: {
          padding: '30px 20px',
          'min-height': '300px'
        }
      }, {
        name: 'dialog_footer',
        element: {
          Value: 'form'
        },
        eventlistener: {
          event: 'submit',
          callback: _preventDefault
        },
        style: {
          'border-top': '1px solid #e9ecef',
          padding: '20px'
        },
        child: [{
          name: 'dialog_footer_child',
          element: {
            value: 'div'
          },
          style: {
            height: '45px'
          },
          child: [{
            name: 'dialog_footer_button_two',
            element: {
              value: 'button'
            },
            onclick: _this.hide.bind(_this),
            onmouseover: _node_modules_componator_src_js_componator__WEBPACK_IMPORTED_MODULE_0___default.a.defaultOnMouseOverBackground,
            onmouseout: _node_modules_componator_src_js_componator__WEBPACK_IMPORTED_MODULE_0___default.a.defaultOnMouseOutBackground,
            style: {
              'border-radius': '3px',
              padding: '15px 20px',
              background: '#007bff',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              'margin-right': '15px'
            }
          }, {
            name: 'dialog_footer_button_one',
            element: {
              value: 'button'
            },
            onclick: _this.hide.bind(_this),
            onmouseover: _node_modules_componator_src_js_componator__WEBPACK_IMPORTED_MODULE_0___default.a.defaultOnMouseOverBackground,
            onmouseout: _node_modules_componator_src_js_componator__WEBPACK_IMPORTED_MODULE_0___default.a.defaultOnMouseOutBackground,
            style: {
              'border-radius': '3px',
              padding: '15px 30px',
              background: 'red',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              "float": 'right'
            }
          }]
        }]
      }]
    }]
  }];
  return config;
}

function _userConfigTemplate(title, body, button) {
  var userConfig = [{
    name: 'modal',
    child: [{
      name: 'overlay'
    }, {
      name: 'dialog',
      child: [{
        name: 'dialog_header',
        child: [{
          name: 'dialog_header_title',
          element: {
            content: title || 'My Modal'
          }
        }]
      }, {
        name: 'dialog_body',
        element: {
          content: body || 'Content'
        }
      }, {
        name: 'dialog_footer',
        child: [{
          name: 'dialog_footer_child',
          child: [{
            name: 'dialog_footer_button_two',
            style: {
              display: 'none'
            }
          }, {
            name: 'dialog_footer_button_one',
            element: {
              content: button || 'Close'
            }
          }]
        }]
      }]
    }]
  }];
  return userConfig;
}

function _getUserConfig(userConfig, dialog_body, dialog_button) {
  // case 1 - user passes config object or empty value
  if (_typeof(userConfig) === 'object') {
    return userConfig; // case 2 - user passes non object
  } else {
    // create config object to store string values
    var config; // case 1 - one parameter passed - modal body

    if (typeof dialog_body === 'undefined' && typeof dialog_button === 'undefined') {
      config = _userConfigTemplate(null, userConfig, null); // case 2 - two parameters passed - modal header and body
    } else if (typeof dialog_button === 'undefined') {
      config = _userConfigTemplate(userConfig, dialog_body, null); // case 3 - three parameters passed - modal header, body and button name
    } else {
      config = _userConfigTemplate(userConfig, dialog_body, dialog_button);
    } // set config object of modal as created object


    return config;
  }
}

function _addFunctions(component, functions) {
  if (functions) {
    for (var i = 0; i < functions.length; i++) {
      var f = functions[i];
      component.__proto__[f.name] = f;
    }
  }
}
/* ============================== Public Methods ============================ */


function show() {
  // refer to object that contains the _show function as prototype
  var _this = this; // get parent element


  var modal = _node_modules_componator_src_js_componator__WEBPACK_IMPORTED_MODULE_0___default.a.findElement(_this.finalConfig, 'name', 'modal').element; // get remaining elements

  var dialog = _node_modules_componator_src_js_componator__WEBPACK_IMPORTED_MODULE_0___default.a.findChildElement(_this.finalConfig, 'name', 'dialog').element;
  var overlay = _node_modules_componator_src_js_componator__WEBPACK_IMPORTED_MODULE_0___default.a.findChildElement(_this.finalConfig, 'name', 'overlay').element; // append parent to DOM

  document.body.append(modal); // calculate position of modal

  var top_position = (screen.availHeight - dialog.offsetHeight) / 2;
  top_position = top_position > 50 ? top_position : '50px';
  dialog.style.left = ((window.innerWidth - dialog.offsetWidth) / 2).toString() + 'px';
  dialog.style.top = top_position.toString() + 'px'; // display modal

  overlay.style.display = 'block';
  dialog.style.transition = 'all 0.5s';
} // hide the modal window and release the config object


function hide() {
  // refer to object that contains the _show function as prototype
  var _this = this; // get elements


  var dialog = _node_modules_componator_src_js_componator__WEBPACK_IMPORTED_MODULE_0___default.a.findChildElement(_this.finalConfig, 'name', 'dialog').element;
  var overlay = _node_modules_componator_src_js_componator__WEBPACK_IMPORTED_MODULE_0___default.a.findChildElement(_this.finalConfig, 'name', 'overlay').element; // hide modal

  overlay.style.display = 'none';
  dialog.style.top = '-1000px';
}

function buildModal(userConfig, dialog_body, dialog_button) {
  // create component
  var component = {}; // get prototype functions to assign to component

  var functions = [hide, show]; // assign prototype functions so they can be reference in default config

  _addFunctions(component, functions); // default configuration modal of modal
  // component passed so that prototype functions can be referenced


  var defaultConfig = _getDefaultConfig(component); // get user configuation based on 4 input cases
  // user configuration overrides to default configuration modal


  userConfig = _getUserConfig(userConfig, dialog_body, dialog_button); // construct default component and append / override with user details

  var modal = _node_modules_componator_src_js_componator__WEBPACK_IMPORTED_MODULE_0___default.a.buildComponent(defaultConfig, userConfig, component);
  return modal;
}
/* =========================== Export Public APIs =========================== */


/* harmony default export */ __webpack_exports__["default"] = ({
  buildModal: buildModal
});

/***/ })
/******/ ]);
//# sourceMappingURL=modalator.js.map