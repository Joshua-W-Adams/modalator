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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Modalator
 * JavaScript component to generate modals
 * (c) 2020 Joshua Adams
 */

/* ============================== Import Modules ============================ */
// N/A

/* ================================ Variables =============================== */
// N/A

/* ============================= Private Methods ============================ */
function _applyStyles(elementStyle, styles) {
  if (styles) {
    // get keys to avoid looping through entire prototype chain
    var arr = Object.keys(styles);

    for (var i = 0; i < arr.length; i++) {
      var style = arr[i];
      elementStyle.cssText = elementStyle.cssText.concat("".concat(style, " : ").concat(styles[style], ";"));
    }
  }
}

function _preventDefault(event) {
  event.preventDefault();
}

function _checkForFunction(prop) {
  // string value or no property passed
  if (typeof prop === 'function') {
    return true;
  } else {
    return false;
  }
}

function _isElement(element) {
  return element instanceof Element || element instanceof HTMLDocument;
}

function _getDescendantProp(obj, desc) {
  var arr = desc.split('.');

  while (arr.length && (obj = obj[arr.shift()])) {
    ;
  } // eslint-disable-line no-cond-assign


  return obj;
}

function _createDescendantProp(obj, desc, value) {
  var arr = desc.split('.');
  var currentProp;
  var currentObj = obj;

  for (var i = 0; i < arr.length; i++) {
    currentProp = arr[i]; // create property

    if (i === arr.length - 1) {
      currentObj[currentProp] = value;
    } else if (!currentObj[currentProp]) {
      currentObj[currentProp] = {};
    } // set current object in loop


    currentObj = currentObj[currentProp];
  }

  return obj;
}

function _handleUserConfigProperty(_this, propertyName, defaultElementName) {
  var prop = _getDescendantProp(_this, propertyName); // case 1 - user passes function that returns html element


  if (typeof prop !== 'undefined' && _checkForFunction(prop) && _isElement(prop())) {
    // html element
    return prop(); // case 2 - user passes string, nothing or unsupported type
  } else {
    // default element
    return document.createElement(defaultElementName);
  }
}

function _handleUserConfigStyle(_this, propertyName) {
  var prop = _getDescendantProp(_this, propertyName); // case 1 - user passes function that returns an object with keys


  if (typeof prop !== 'undefined' && _checkForFunction(prop) && _typeof(prop()) === 'object' && prop() !== null && Object.keys(prop()).length > 0) {
    return prop(); // case 2 - user passes style string
  } else if (typeof prop === 'string') {// convert string to style object
    // case 3 - nothing or unsupported type
  } else {
    return null;
  }
}

function _handleUserConfigRun(_this, propertyName, callback) {
  var prop = _getDescendantProp(_this, propertyName); // case 1 - user passes function


  if (typeof prop !== 'undefined' && _checkForFunction(prop)) {
    return prop; // case 2 - user passes string, nothing or unsupported type
  } else {
    return callback;
  }
}

function _checkUserInputForString(prop, defaultString) {
  // case 1 - user passes string
  if (typeof prop === 'string') {
    return prop; // case 2 - user passes function that returns string
  } else if (_checkForFunction(prop) && typeof prop() === 'string') {
    return prop(); // case 3 - user passes function that returns html element
  } else if (_checkForFunction(prop) && _isElement(prop())) {
    return ''; // case 4 - user pases nothing or unsupported type
  } else {
    return defaultString || '';
  }
}

function _appendUserStringInput(prop, element, defaultString) {
  // get string value to append to element
  var str = _checkUserInputForString(prop, defaultString); // append string value to element


  element.append(str);
}

function _findElement(arr, propName, propValue) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][propName] === propValue) {
      return arr[i];
    }
  } // will return undefined if not found; you could return a default instead

}
/* ============================== Public Methods ============================ */
// Modal window starts here
// Object initialization and return the instance as an object


var Modal = function Modal(config, dialog_body, dialog_button) {
  var _this = this;

  _this.config = config; // define internal functions

  function _addOnClick(element, cb) {
    if (cb) {
      element.onclick = function () {
        cb(_this);
      };
    }
  }

  function _addOnHover(element, prop) {
    var color = element.style[prop];

    element.onmouseover = function () {
      element.style[prop] = _this.adjust_brightness(_this.getRGBCode(color, _this), 16);
    };

    element.onmouseout = function () {
      element.style[prop] = element.getAttribute('data-color');
    };
  } // handle non object user config cases


  if (_typeof(config) !== 'object') {
    // create config object to store string values
    var cnf = {}; // set generic config details

    _createDescendantProp(cnf, 'dialog.footer.buttons.button_one.text', 'Close');

    _createDescendantProp(cnf, 'dialog.footer.buttons.button_two.style', function () {
      var properties = {
        'display': 'none'
      };
      return properties;
    }); // case 1 - one parameter passed - modal body


    if (typeof dialog_body === 'undefined' && typeof dialog_button === 'undefined') {
      _createDescendantProp(cnf, 'dialog.body.text', _this.config); // case 2 - two parameters passed - modal header and body

    } else if (typeof dialog_button === 'undefined') {
      _createDescendantProp(cnf, 'dialog.header.title.text', _this.config);

      _createDescendantProp(cnf, 'dialog.body.text', dialog_body); // case 3 - three parameters passed - modal header, body and button name

    } else {
      _createDescendantProp(cnf, 'dialog.header.title.text', _this.config);

      _createDescendantProp(cnf, 'dialog.body.text', dialog_body);

      _createDescendantProp(cnf, 'dialog.footer.buttons.button_one.text', dialog_button);
    } // set config object of modal as created object


    _this.config = cnf;
  }

  var data = [{
    // user cannot pass modal configuration details
    name: 'modal',
    element: document.createElement('div'),
    onclick: null,
    userStyle: null,
    defaultStyle: null
  }, {
    name: 'overlay',
    element: _handleUserConfigProperty(_this, 'config.background.text', 'div'),
    onclick: null,
    userStyle: _handleUserConfigStyle(_this, 'config.background.style'),
    defaultStyle: {
      'position': 'fixed',
      'top': '0px',
      'left': '0px',
      'width': '100%',
      'height': '100%',
      'display': 'none',
      'background': '#000',
      'opacity': '0.7',
      'z-index': '999'
    }
  }, {
    name: 'dialog',
    element: _handleUserConfigProperty(_this, 'config.dialog.text', 'div'),
    onclick: null,
    userStyle: _handleUserConfigStyle(_this, 'config.dialog.style'),
    defaultStyle: {
      'position': 'absolute',
      'top': '-1000px',
      'min-width': '500px',
      'max-width': '700px',
      'overflow-y': 'auto',
      'border-radius': '4px',
      'font-family': 'Gotham SSm,Helvetica,Arial,sans-serif',
      'background': '#fff',
      'display': 'block',
      'z-index': '9999'
    }
  }, {
    name: 'dialog_header',
    element: _handleUserConfigProperty(_this, 'config.dialog.header.text', 'div'),
    onclick: null,
    userStyle: _handleUserConfigStyle(_this, 'config.dialog.header.style'),
    defaultStyle: {
      'padding': '20px',
      'border-bottom': '1px solid #e9ecef'
    }
  }, {
    name: 'dialog_header_title',
    element: _handleUserConfigProperty(_this, 'config.dialog.header.title.text', 'div'),
    onclick: null,
    userStyle: _handleUserConfigStyle(_this, 'config.dialog.header.title.style'),
    defaultStyle: {
      'font-weight': '500',
      'color': '#212529',
      'font-size': '20px',
      'display': 'inline-block'
    }
  }, {
    name: 'dialog_header_close_icon',
    element: _handleUserConfigProperty(_this, 'config.dialog.header.close_icon.text', 'span'),
    onclick: null,
    userStyle: _handleUserConfigStyle(_this, 'config.dialog.header.close_icon.style'),
    defaultStyle: {
      'padding': '0px 5px',
      'color': '#C5C5C5',
      'font-size': '20px',
      'font-weight': '700',
      'cursor': 'pointer',
      'float': 'right'
    }
  }, {
    name: 'dialog_body',
    element: _handleUserConfigProperty(_this, 'config.dialog.body.text', 'div'),
    onclick: null,
    userStyle: _handleUserConfigStyle(_this, 'config.dialog.body.style'),
    defaultStyle: {
      'padding': '30px 20px',
      'min-height': '300px'
    }
  }, {
    name: 'dialog_footer',
    element: _handleUserConfigProperty(_this, 'config.dialog.footer.text', 'form'),
    onclick: null,
    userStyle: _handleUserConfigStyle(_this, 'config.dialog.footer.style'),
    defaultStyle: {
      'border-top': '1px solid #e9ecef',
      'padding': '30px 20px'
    }
  }, {
    name: 'dialog_footer_child',
    element: document.createElement('div'),
    onclick: null,
    userStyle: null,
    defaultStyle: {
      'float': 'right'
    }
  }, {
    name: 'dialog_footer_last_child',
    element: document.createElement('div'),
    onclick: null,
    userStyle: null,
    defaultStyle: {
      'clear': 'both'
    }
  }, {
    name: 'dialog_footer_button_one',
    element: _handleUserConfigProperty(_this, 'config.dialog.footer.buttons.button_one.text', 'button'),
    // https://stackoverflow.com/questions/4011793/this-is-undefined-in-javascript-class-methods
    onclick: _handleUserConfigRun(_this, 'config.dialog.footer.buttons.button_one.run', this.hide.bind(this)),
    userStyle: _handleUserConfigStyle(_this, 'config.dialog.footer.buttons.button_one.style'),
    defaultStyle: {
      'border-radius': '3px',
      'padding': '15px 30px',
      'background': 'red',
      'border': 'none',
      'color': '#fff',
      'cursor': 'pointer'
    }
  }, {
    name: 'dialog_footer_button_two',
    element: _handleUserConfigProperty(_this, 'config.dialog.footer.buttons.button_two.text', 'button'),
    onclick: _handleUserConfigRun(_this, 'config.dialog.footer.buttons.button_two.run', this.hide.bind(this)),
    userStyle: _handleUserConfigStyle(_this, 'config.dialog.footer.buttons.button_two.style'),
    defaultStyle: {
      'border-radius': '3px',
      'padding': '15px 20px',
      'background': '#007bff',
      'border': 'none',
      'color': '#fff',
      'cursor': 'pointer',
      'margin-right': '15px'
    }
  }]; // prevent form refreshing the page

  _findElement(data, 'name', 'dialog_footer').element.addEventListener('submit', _preventDefault); // apply styles and onclick functionality to all elements


  for (var i = 0; i < data.length; i++) {
    var elementConfig = data[i];
    var element = elementConfig.element;
    var onclick = elementConfig.onclick;
    var elementStyle = element.style;
    var defaultStyle = elementConfig.defaultStyle;
    var userStyle = elementConfig.userStyle; // apply default styles

    _applyStyles(elementStyle, defaultStyle); // apply user specified style renderer


    _applyStyles(elementStyle, userStyle); // add onclick / run functions to all elements


    _addOnClick(element, onclick);
  } // Add on hover functionality


  var test_dialog_header_close_icon = _findElement(data, 'name', 'dialog_header_close_icon').element;

  test_dialog_header_close_icon.setAttribute('data-color', test_dialog_header_close_icon.style.color);

  _addOnHover(_findElement(data, 'name', 'dialog_header_close_icon').element, 'color');

  var test_dialog_footer_button_one = _findElement(data, 'name', 'dialog_footer_button_one').element;

  test_dialog_footer_button_one.setAttribute('data-color', test_dialog_footer_button_one.style.background);

  _addOnHover(_findElement(data, 'name', 'dialog_footer_button_one').element, 'background');

  var test_dialog_footer_button_two = _findElement(data, 'name', 'dialog_footer_button_two').element;

  test_dialog_footer_button_two.setAttribute('data-color', test_dialog_footer_button_two.style.background);

  _addOnHover(_findElement(data, 'name', 'dialog_footer_button_two').element, 'background');
  /* ============================== Assign User Content to Elements ============================ */
  // All elements have had their default styles applied c/w overrides from user


  var bgText = _getDescendantProp(_this, 'config.background.text');

  var dialogText = _getDescendantProp(_this, 'config.dialog.text');

  var headerText = _getDescendantProp(_this, 'config.dialog.header.text');

  var hTitleText = _getDescendantProp(_this, 'config.dialog.header.title.text');

  var hCloseIconText = _getDescendantProp(_this, 'config.dialog.header.close_icon.text');

  var bodyText = _getDescendantProp(_this, 'config.dialog.body.text');

  var footerText = _getDescendantProp(_this, 'config.dialog.footer.text');

  var buttonOneText = _getDescendantProp(_this, 'config.dialog.footer.buttons.button_one.text');

  var buttonTwoText = _getDescendantProp(_this, 'config.dialog.footer.buttons.button_two.text'); // apply user specified content or fall back to passed default
  // background


  _appendUserStringInput(bgText, _findElement(data, 'name', 'overlay').element); // general dialog config


  _appendUserStringInput(dialogText, _findElement(data, 'name', 'dialog').element); // dialog header config


  _appendUserStringInput(headerText, _findElement(data, 'name', 'dialog_header').element);

  _appendUserStringInput(hTitleText, _findElement(data, 'name', 'dialog_header_title').element);

  _appendUserStringInput(hCloseIconText, _findElement(data, 'name', 'dialog_header_close_icon').element, 'X'); // dialog body config


  _appendUserStringInput(bodyText, _findElement(data, 'name', 'dialog_body').element); // dialog footer config


  _appendUserStringInput(footerText, _findElement(data, 'name', 'dialog_footer').element);

  _appendUserStringInput(buttonOneText, _findElement(data, 'name', 'dialog_footer_button_one').element);

  _appendUserStringInput(buttonTwoText, _findElement(data, 'name', 'dialog_footer_button_two').element); // build element tree


  var dialog_header = _findElement(data, 'name', 'dialog_header').element;

  var dialog_header_title = _findElement(data, 'name', 'dialog_header_title').element;

  var dialog_header_close_icon = _findElement(data, 'name', 'dialog_header_close_icon').element;

  var dialog = _findElement(data, 'name', 'dialog').element;

  var temp_dialog_body = _findElement(data, 'name', 'dialog_body').element;

  var dialog_footer_child = _findElement(data, 'name', 'dialog_footer_child').element;

  var dialog_footer_button_one = _findElement(data, 'name', 'dialog_footer_button_one').element;

  var dialog_footer_button_two = _findElement(data, 'name', 'dialog_footer_button_two').element;

  var dialog_footer = _findElement(data, 'name', 'dialog_footer').element;

  var dialog_footer_last_child = _findElement(data, 'name', 'dialog_footer_last_child').element;

  var modal = _findElement(data, 'name', 'modal').element;

  var overlay = _findElement(data, 'name', 'overlay').element;

  dialog_header.append(dialog_header_title);
  dialog_header.append(dialog_header_close_icon);
  dialog.append(dialog_header);
  dialog.append(temp_dialog_body);
  dialog_footer_child.append(dialog_footer_button_two);
  dialog_footer_child.append(dialog_footer_button_one);
  dialog_footer.append(dialog_footer_child);
  dialog_footer.append(dialog_footer_last_child);
  dialog.append(dialog_footer);
  modal.append(overlay);
  modal.append(dialog); // save element tree to object

  this.data = data;
  return this;
}; // Prototype to show the modal window


Modal.prototype.show = function () {
  // positioning modal to the left
  var _this = this;

  document.body.append(_findElement(_this.data, 'name', 'modal').element);

  var dialog = _findElement(_this.data, 'name', 'dialog').element;

  var overlay = _findElement(_this.data, 'name', 'overlay').element;

  var dialog_header_close_icon = _findElement(_this.data, 'name', 'dialog_header_close_icon').element;

  var top_position = (screen.availHeight - dialog.offsetHeight) / 2;
  top_position = top_position > 50 ? top_position : '50px';
  dialog.style.left = ((window.innerWidth - dialog.offsetWidth) / 2).toString() + 'px';
  dialog.style.top = top_position.toString() + 'px';
  overlay.style.display = 'block';
  dialog.style.transition = 'all 0.5s';

  dialog_header_close_icon.onclick = function () {
    _this.hide();
  };
}; // Prototype to hide the modal window and release the config object


Modal.prototype.hide = function () {
  var _this = this;

  var dialog = _findElement(_this.data, 'name', 'dialog').element;

  var overlay = _findElement(_this.data, 'name', 'overlay').element;

  overlay.style.display = 'none';
  dialog.style.top = '-1000px';
};

Modal.prototype.isDefined = function isDefined(_this, key) {
  return key.split('.').reduce(function (o, x) {
    return typeof o === 'undefined' || o === null ? o : o[x];
  }, _this);
}; // Function to convert rgb color to hex format


Modal.prototype.getRGBCode = function (rgb_code, _this) {
  if (rgb_code.includes('#')) {
    return rgb_code;
  } else if (rgb_code.includes('rgb')) {
    rgb_code = rgb_code.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return '#' + _this.getHex(rgb_code[1], _this) + _this.getHex(rgb_code[2]) + _this.getHex(rgb_code[3]);
  } else {
    return _this.getHexCodeFromColor(rgb_code);
  }
};

Modal.prototype.getHex = function (x) {
  var hexDigits = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');
  return isNaN(x) ? '00' : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
};

Modal.prototype.adjust_brightness = function (hex_code, percent) {
  var r = parseInt(hex_code.substr(1, 2), 16);
  var g = parseInt(hex_code.substr(3, 2), 16);
  var b = parseInt(hex_code.substr(5, 2), 16);
  return '#' + (0 | (1 << 8) + r * (100 - percent) / 100).toString(16).substr(1) + (0 | (1 << 8) + g * (100 - percent) / 100).toString(16).substr(1) + (0 | (1 << 8) + b * (100 - percent) / 100).toString(16).substr(1);
};

Modal.prototype.getHexCodeFromColor = function (color_name) {
  var colours = {
    'aliceblue': '#f0f8ff',
    'antiquewhite': '#faebd7',
    'aqua': '#00ffff',
    'aquamarine': '#7fffd4',
    'azure': '#f0ffff',
    'beige': '#f5f5dc',
    'bisque': '#ffe4c4',
    'black': '#000000',
    'blanchedalmond': '#ffebcd',
    'blue': '#0000ff',
    'blueviolet': '#8a2be2',
    'brown': '#a52a2a',
    'burlywood': '#deb887',
    'cadetblue': '#5f9ea0',
    'chartreuse': '#7fff00',
    'chocolate': '#d2691e',
    'coral': '#ff7f50',
    'cornflowerblue': '#6495ed',
    'cornsilk': '#fff8dc',
    'crimson': '#dc143c',
    'cyan': '#00ffff',
    'darkblue': '#00008b',
    'darkcyan': '#008b8b',
    'darkgoldenrod': '#b8860b',
    'darkgray': '#a9a9a9',
    'darkgreen': '#006400',
    'darkkhaki': '#bdb76b',
    'darkmagenta': '#8b008b',
    'darkolivegreen': '#556b2f',
    'darkorange': '#ff8c00',
    'darkorchid': '#9932cc',
    'darkred': '#8b0000',
    'darksalmon': '#e9967a',
    'darkseagreen': '#8fbc8f',
    'darkslateblue': '#483d8b',
    'darkslategray': '#2f4f4f',
    'darkturquoise': '#00ced1',
    'darkviolet': '#9400d3',
    'deeppink': '#ff1493',
    'deepskyblue': '#00bfff',
    'dimgray': '#696969',
    'dodgerblue': '#1e90ff',
    'firebrick': '#b22222',
    'floralwhite': '#fffaf0',
    'forestgreen': '#228b22',
    'fuchsia': '#ff00ff',
    'gainsboro': '#dcdcdc',
    'ghostwhite': '#f8f8ff',
    'gold': '#ffd700',
    'goldenrod': '#daa520',
    'gray': '#808080',
    'green': '#008000',
    'greenyellow': '#adff2f',
    'honeydew': '#f0fff0',
    'hotpink': '#ff69b4',
    'indianred ': '#cd5c5c',
    'indigo': '#4b0082',
    'ivory': '#fffff0',
    'khaki': '#f0e68c',
    'lavender': '#e6e6fa',
    'lavenderblush': '#fff0f5',
    'lawngreen': '#7cfc00',
    'lemonchiffon': '#fffacd',
    'lightblue': '#add8e6',
    'lightcoral': '#f08080',
    'lightcyan': '#e0ffff',
    'lightgoldenrodyellow': '#fafad2',
    'lightgrey': '#d3d3d3',
    'lightgreen': '#90ee90',
    'lightpink': '#ffb6c1',
    'lightsalmon': '#ffa07a',
    'lightseagreen': '#20b2aa',
    'lightskyblue': '#87cefa',
    'lightslategray': '#778899',
    'lightsteelblue': '#b0c4de',
    'lightyellow': '#ffffe0',
    'lime': '#00ff00',
    'limegreen': '#32cd32',
    'linen': '#faf0e6',
    'magenta': '#ff00ff',
    'maroon': '#800000',
    'mediumaquamarine': '#66cdaa',
    'mediumblue': '#0000cd',
    'mediumorchid': '#ba55d3',
    'mediumpurple': '#9370d8',
    'mediumseagreen': '#3cb371',
    'mediumslateblue': '#7b68ee',
    'mediumspringgreen': '#00fa9a',
    'mediumturquoise': '#48d1cc',
    'mediumvioletred': '#c71585',
    'midnightblue': '#191970',
    'mintcream': '#f5fffa',
    'mistyrose': '#ffe4e1',
    'moccasin': '#ffe4b5',
    'navajowhite': '#ffdead',
    'navy': '#000080',
    'oldlace': '#fdf5e6',
    'olive': '#808000',
    'olivedrab': '#6b8e23',
    'orange': '#ffa500',
    'orangered': '#ff4500',
    'orchid': '#da70d6',
    'palegoldenrod': '#eee8aa',
    'palegreen': '#98fb98',
    'paleturquoise': '#afeeee',
    'palevioletred': '#d87093',
    'papayawhip': '#ffefd5',
    'peachpuff': '#ffdab9',
    'peru': '#cd853f',
    'pink': '#ffc0cb',
    'plum': '#dda0dd',
    'powderblue': '#b0e0e6',
    'purple': '#800080',
    'rebeccapurple': '#663399',
    'red': '#ff0000',
    'rosybrown': '#bc8f8f',
    'royalblue': '#4169e1',
    'saddlebrown': '#8b4513',
    'salmon': '#fa8072',
    'sandybrown': '#f4a460',
    'seagreen': '#2e8b57',
    'seashell': '#fff5ee',
    'sienna': '#a0522d',
    'silver': '#c0c0c0',
    'skyblue': '#87ceeb',
    'slateblue': '#6a5acd',
    'slategray': '#708090',
    'snow': '#fffafa',
    'springgreen': '#00ff7f',
    'steelblue': '#4682b4',
    'tan': '#d2b48c',
    'teal': '#008080',
    'thistle': '#d8bfd8',
    'tomato': '#ff6347',
    'turquoise': '#40e0d0',
    'violet': '#ee82ee',
    'wheat': '#f5deb3',
    'white': '#ffffff',
    'whitesmoke': '#f5f5f5',
    'yellow': '#ffff00',
    'yellowgreen': '#9acd32'
  };
  if (typeof colours[color_name.toLowerCase()] !== 'undefined') return colours[color_name.toLowerCase()];
  return false;
};
/* =========================== Export Public APIs =========================== */




/***/ })
/******/ ]);
//# sourceMappingURL=modalator.js.map