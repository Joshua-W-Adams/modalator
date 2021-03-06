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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * npm Entry File
 * (c) 2020 Joshua Adams
 */

/**
 * index.js is the default 'entry file' for npm.
 * This means that any require('package name') or import 'package name'
 * statements will refer to this file.
 */
var pkg = __webpack_require__(1); // export a file with the same name as the package by default


module.exports = __webpack_require__(2)("./".concat(pkg.name, ".js"));

/***/ }),
/* 1 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"modalator\",\"version\":\"2.1.3\",\"description\":\"A pure JavaScript component for generating modals\",\"main\":\"index.js\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/Joshua-W-Adams/modalator.git\"},\"author\":\"Joshua Adams\",\"license\":\"ISC\",\"bugs\":{\"url\":\"https://github.com/Joshua-W-Adams/modalator/issues\"},\"homepage\":\"https://github.com/Joshua-W-Adams/modalator#readme\",\"devDependencies\":{\"@babel/core\":\"^7.8.4\",\"@babel/preset-env\":\"^7.8.4\",\"babel-loader\":\"^8.0.6\",\"eslint-config-airbnb-base\":\"^14.0.0\",\"eslint-plugin-import\":\"^2.20.0\",\"express\":\"^4.17.1\",\"gulp\":\"^4.0.2\",\"gulp-concat\":\"^2.6.1\",\"gulp-eslint\":\"^6.0.0\",\"gulp-minify-css\":\"^1.2.4\",\"gulp-nodemon\":\"^2.5.0\",\"gulp-rename\":\"^2.0.0\",\"gulp-sass\":\"^4.0.2\",\"gulp-stylelint\":\"^13.0.0\",\"stylelint\":\"^13.0.0\",\"stylelint-config-recommended\":\"^3.0.0\",\"webpack-stream\":\"^5.2.1\"},\"dependencies\":{\"componator\":\"^2.0.1\"}}");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modalator.js": 3
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 2;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Modalator
 * JavaScript component to generate modals
 * (c) 2020 Joshua Adams
 */

/* ============================== Import Modules ============================ */
// module that handles generating gui components from passed data structure
// webpack will look for the componator package in the nodemodules directory
// must have index.js file in node package for this to work correctly.
var componator = __webpack_require__(4);
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
          onclick: hide.bind(_this),
          onmouseover: componator.defaultOnMouseOverColor,
          onmouseout: componator.defaultOnMouseOutColor,
          style: {
            padding: '0px 5px',
            color: 'red',
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
            onclick: hide.bind(_this),
            onmouseover: componator.defaultOnMouseOverBackground,
            onmouseout: componator.defaultOnMouseOutBackground,
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
            onclick: hide.bind(_this),
            onmouseover: componator.defaultOnMouseOverBackground,
            onmouseout: componator.defaultOnMouseOutBackground,
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


  var modal = componator.findElement(_this.finalConfig, 'name', 'modal').element; // get remaining elements

  var dialog = componator.findChildElement(_this.finalConfig, 'name', 'dialog').element;
  var overlay = componator.findChildElement(_this.finalConfig, 'name', 'overlay').element; // append parent to DOM

  document.body.append(modal); // calculate position of modal

  var top_position = (screen.availHeight - dialog.offsetHeight) / 2;
  top_position = top_position > 50 ? top_position : '50px';
  dialog.style.left = ((window.innerWidth - dialog.offsetWidth) / 2).toString() + 'px';
  dialog.style.top = top_position.toString() + 'px'; // display modal

  overlay.style.display = 'block';
  dialog.style.transition = 'all 0.5s';
} // hide the modal window


function hide() {
  // refer to object that contains the _hide function as prototype
  var _this = this; // get elements


  var dialog = componator.findChildElement(_this.finalConfig, 'name', 'dialog').element;
  var overlay = componator.findChildElement(_this.finalConfig, 'name', 'overlay').element; // hide modal

  overlay.style.display = 'none';
  dialog.style.top = '-1000px';
} // remove the modal from the dom and release the config object


function remove() {
  // refer to object that contains the _remove function as prototype
  var _this = this; // hide element so animations work correctly


  _this.hide(); // remove DOM object


  var e = _this.finalConfig[0].element;
  e.parentElement.removeChild(e); // clear modal from memory
  // object is automatically removed by the garbage collector
  // when there are no more references to the object
  // therefore not required
  // _this = null;
}

function buildModal(userConfig, dialog_body, dialog_button) {
  // create component
  var component = {}; // get prototype functions to assign to component

  var functions = [hide, show, remove]; // assign prototype functions so they can be reference in default config

  _addFunctions(component, functions); // default configuration modal of modal
  // component passed so that prototype functions can be referenced


  var defaultConfig = _getDefaultConfig(component); // get user configuation based on 4 input cases
  // user configuration overrides to default configuration modal


  userConfig = _getUserConfig(userConfig, dialog_body, dialog_button); // construct default component and append / override with user details

  var modal = componator.buildComponent(defaultConfig, userConfig, component);
  return modal;
}
/* =========================== Export Public APIs =========================== */


module.exports = {
  buildModal: buildModal
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = componator;

/***/ })
/******/ ]);
//# sourceMappingURL=modalator.js.map