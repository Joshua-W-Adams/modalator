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
// TO DO - Replace individual loops for settings styles and applying user passed
// renderers with generic style application functions.
// function _applyStyles(elementStyle, styles) {
//   // get keys to avoid looping through entire prototype chain
//   const arr = Object.keys(styles);
//   for (let i = 0; i < arr.length; i++) {
//     const style = arr[i];
//     elementStyle.cssText = elementStyle.cssText.concat(`${style} : ${styles[style]};`);
//   }
// }
// function _applyStyleRenderer(elementStyle, styles, modal, prop) {
//   if (!(typeof modal.isDefined(styles, prop) === 'undefined')) {
//     _applyStyles(elementStyle, styles[prop].style());
//   }
// }

/* ============================== Public Methods ============================ */
// Modal window starts here
// Object initialization and return the instance as an object
var Modal = function Modal(config, dialog_body, dialog_button) {
  var _this = this;

  _this.config = config;
  _this.dialog_title = '';
  _this.dialog_body = '';
  _this.dialog_button = '';

  if (_typeof(config) === 'object') {
    _this.dialog_title = _this.config.dialog.header.title.text().outerHTML;

    if (typeof _this.config.dialog.header.title.text() === 'string') {
      _this.dialog_title = _this.config.dialog.header.title.text();
    }

    _this.dialog_body = _this.config.dialog.body.content.text().outerHTML;

    if (typeof _this.config.dialog.body.content.text() === 'string') {
      _this.dialog_body = _this.config.dialog.body.content.text();
    }

    _this.dialog_button_one = _this.config.dialog.footer.buttons.button_one.text;

    if (!(typeof _this.isDefined(_this.config, 'dialog.footer.buttons.button_two.text') === 'undefined')) {
      _this.dialog_button_two = _this.config.dialog.footer.buttons.button_two.text;
    }
  } else if (typeof config === 'string') {
    if (typeof dialog_body === 'undefined' && typeof dialog_button === 'undefined') {
      _this.dialog_body = _this.config;
      _this.dialog_button_one = 'close';
    } else if (typeof dialog_button === 'undefined') {
      _this.dialog_title = _this.config;
      _this.dialog_body = dialog_body;
      _this.dialog_button_one = 'close';
    } else {
      _this.dialog_title = _this.config;
      _this.dialog_body = dialog_body;
      _this.dialog_button_one = dialog_button;
    }
  } // Modal Object initialization and declaration


  var data = {
    modal: document.createElement('div'),
    overlay: document.createElement('div'),
    dialog: document.createElement('div'),
    dialog_header: document.createElement('div'),
    dialog_header_title: document.createElement('span'),
    dialog_header_close_icon: document.createElement('span'),
    dialog_body: document.createElement('div'),
    dialog_footer: document.createElement('div'),
    dialog_footer_child: document.createElement('div'),
    dialog_footer_last_child: document.createElement('div'),
    dialog_footer_button_one: document.createElement('button'),
    dialog_footer_button_two: document.createElement('button'),
    overlay_style: {
      'position': 'fixed',
      'top': '0px',
      'left': '0px',
      'width': '100%',
      'height': '100%',
      'display': 'none',
      'background': '#000',
      'opacity': '0.7',
      'z-index': '999'
    },
    dialog_style: {
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
    },
    dialog_header_style: {
      'padding': '30px 20px',
      'border-bottom': '1px solid #e9ecef'
    },
    dialog_header_title_style: {
      'font-weight': '500',
      'color': '#212529',
      'font-size': '20px',
      'float': 'left'
    },
    dialog_header_close_icon_style: {
      'position': 'absolute',
      'top': '0px',
      'right': '0px',
      'padding': '4px 12px',
      'color': '#C5C5C5',
      'font-size': '20px',
      'font-weight': '700',
      'cursor': 'pointer'
    },
    dialog_body_style: {
      'padding': '30px 20px',
      'min-height': '300px'
    },
    dialog_footer_style: {
      'border-top': '1px solid #e9ecef',
      'padding': '30px 20px'
    },
    dialog_footer_child_style: {
      'float': 'right'
    },
    dialog_footer_last_child_style: {
      'clear': 'both'
    },
    dialog_footer_button_one_style: {
      'border-radius': '3px',
      'padding': '15px 30px',
      'background': 'red',
      'border': 'none',
      'color': '#fff',
      'cursor': 'pointer'
    },
    dialog_footer_button_two_style: {
      'border-radius': '3px',
      'padding': '15px 20px',
      'background': '#007bff',
      'border': 'none',
      'color': '#fff',
      'cursor': 'pointer',
      'margin-right': '15px'
    }
  };
  data.dialog.setAttribute('id', 'democlass'); // for loop for adding style object to the overlay
  // TO DO - Sample code for application of styles and user passed renders with generic loop.
  // const arr = [{
  //   elementStyle: data.overlay.style,
  //   styles: data.overlay_style,
  //   prop: 'background'
  // }, {
  //   elementStyle: data.dialog.style,
  //   styles: data.dialog_style,
  //   prop: 'dialog'
  // }];
  // // apply styles to all elements
  // for (let i = 0; i < arr.length; i++) {
  //   const elementStyle = arr[i].elementStyle;
  //   const styles = arr[i].styles;
  //   const prop = arr[i].prop;
  //   // apply default styles
  //   _applyStyles(elementStyle, styles);
  //   // apply user specified style renderer
  //   _applyStyleRenderer(elementStyle, _this.config, this, prop);
  // }

  for (var style in data.overlay_style) {
    data.overlay.style.cssText = data.overlay.style.cssText.concat(style + ' : ' + data.overlay_style[style] + ';');
  }

  if (!(typeof this.isDefined(_this.config, 'background') === 'undefined')) {
    for (var _style in _this.config.background.style()) {
      data.overlay.style.cssText = data.overlay.style.cssText.concat(_style + ' : ' + _this.config.background.style()[_style] + ';');
    }
  } // for loop for adding style object to the dialog


  for (var _style2 in data.dialog_style) {
    data.dialog.style.cssText = data.dialog.style.cssText.concat(_style2 + ' : ' + data.dialog_style[_style2] + ';');
  }

  if (!(typeof this.isDefined(_this.config, 'dialog') === 'undefined')) {
    for (var _style3 in _this.config.dialog.style()) {
      data.dialog.style.cssText = data.dialog.style.cssText.concat(_style3 + ' : ' + _this.config.dialog.style()[_style3] + ';');
    }
  } // for loop for adding style object to the dialog header


  for (var _style4 in data.dialog_header_style) {
    data.dialog_header.style.cssText = data.dialog_header.style.cssText.concat(_style4 + ' : ' + data.dialog_header_style[_style4] + ';');
  }

  if (!(typeof this.isDefined(_this.config, 'dialog.header') === 'undefined')) {
    for (var _style5 in _this.config.dialog.header.style()) {
      data.dialog_header.style.cssText = data.dialog_header.style.cssText.concat(_style5 + ' : ' + _this.config.dialog.header.style()[_style5] + ';');
    }
  } // for loop for adding style object to the dialog header text


  for (var _style6 in data.dialog_header_title_style) {
    data.dialog_header_title.style.cssText = data.dialog_header_title.style.cssText.concat(_style6 + ' : ' + data.dialog_header_title_style[_style6] + ';');
  }

  if (!(typeof this.isDefined(_this.config, 'dialog.header.title') === 'undefined')) {
    for (var _style7 in _this.config.dialog.header.title.style()) {
      data.dialog_header_title.style.cssText = data.dialog_header_title.style.cssText.concat(_style7 + ' : ' + _this.config.dialog.header.title.style()[_style7] + ';');
    }
  } // for loop for adding style object to the dialog header text


  for (var _style8 in data.dialog_header_close_icon_style) {
    data.dialog_header_close_icon.style.cssText = data.dialog_header_close_icon.style.cssText.concat(_style8 + ' : ' + data.dialog_header_close_icon_style[_style8] + ';');
  }

  if (!(typeof this.isDefined(_this.config, 'dialog.header.close_icon') === 'undefined')) {
    for (var _style9 in _this.config.dialog.header.close_icon.style()) {
      data.dialog_header_close_icon.style.cssText = data.dialog_header_close_icon.style.cssText.concat(_style9 + ' : ' + _this.config.dialog.header.close_icon.style()[_style9] + ';');
    }
  } // for loop for adding style object to the dialog header text
  // code to make the hover function over close x button


  data.dialog_header_close_icon.setAttribute('data-color', data.dialog_header_close_icon.style.color);

  data.dialog_header_close_icon.onmouseover = function () {
    data.dialog_header_close_icon.style.color = _this.adjust_brightness(_this.getRGBCode(data.dialog_header_close_icon.style.color, _this), 16);
  };

  data.dialog_header_close_icon.onmouseout = function () {
    data.dialog_header_close_icon.style.color = data.dialog_header_close_icon.getAttribute('data-color');
  }; // code to make the hover function over close x button


  for (var _style10 in data.dialog_body_style) {
    data.dialog_body.style.cssText = data.dialog_body.style.cssText.concat(_style10 + ' : ' + data.dialog_body_style[_style10] + ';');
  }

  if (!(typeof this.isDefined(_this.config, 'dialog.body.content') === 'undefined')) {
    for (var _style11 in _this.config.dialog.body.content.style()) {
      data.dialog_body.style.cssText = data.dialog_body.style.cssText.concat(_style11 + ' : ' + _this.config.dialog.body.content.style()[_style11] + ';');
    }
  } // for loop for adding style object to the dialog header text


  for (var _style12 in data.dialog_footer_style) {
    data.dialog_footer.style.cssText = data.dialog_footer.style.cssText.concat(_style12 + ' : ' + data.dialog_footer_style[_style12] + ';');
  }

  if (!(typeof this.isDefined(_this.config, 'dialog.footer') === 'undefined')) {
    for (var _style13 in _this.config.dialog.footer.style()) {
      data.dialog_footer.style.cssText = data.dialog_footer.style.cssText.concat(_style13 + ' : ' + _this.config.dialog.footer.style()[_style13] + ';');
    }
  } // for loop for adding style object to the dialog header text


  for (var _style14 in data.dialog_footer_child_style) {
    data.dialog_footer_child.style.cssText = data.dialog_footer_child.style.cssText.concat(_style14 + ' : ' + data.dialog_footer_child_style[_style14] + ';');
  } // for loop for adding style object to the dialog header text


  for (var _style15 in data.dialog_footer_last_child_style) {
    data.dialog_footer_last_child.style.cssText = data.dialog_footer_last_child.style.cssText.concat(_style15 + ' : ' + data.dialog_footer_last_child_style[_style15] + ';');
  } // for loop for adding style object to the dialog header text


  for (var _style16 in data.dialog_footer_button_one_style) {
    data.dialog_footer_button_one.style.cssText = data.dialog_footer_button_one.style.cssText.concat(_style16 + ' : ' + data.dialog_footer_button_one_style[_style16] + ';');
  }

  if (!(typeof this.isDefined(_this.config, 'dialog.footer.buttons.button_one') === 'undefined')) {
    for (var _style17 in _this.config.dialog.footer.buttons.button_one.style()) {
      data.dialog_footer_button_one.style.cssText = data.dialog_footer_button_one.style.cssText.concat(_style17 + ' : ' + _this.config.dialog.footer.buttons.button_one.style()[_style17] + ';');
    }
  } // code to make the hover function


  data.dialog_footer_button_one.setAttribute('data-background', data.dialog_footer_button_one.style.background);

  data.dialog_footer_button_one.onmouseover = function () {
    data.dialog_footer_button_one.style.background = _this.adjust_brightness(_this.getRGBCode(data.dialog_footer_button_one.style.background, _this), 16);
  };

  data.dialog_footer_button_one.onmouseout = function () {
    data.dialog_footer_button_one.style.background = data.dialog_footer_button_one.getAttribute('data-background');
  }; // end of code to make the hover function


  if (!(typeof this.isDefined(_this.config, 'dialog.footer.buttons.button_two.text') === 'undefined')) {
    // for loop for adding style object to the dialog header text
    for (var _style18 in data.dialog_footer_button_two_style) {
      data.dialog_footer_button_two.style.cssText = data.dialog_footer_button_two.style.cssText.concat(_style18 + ' : ' + data.dialog_footer_button_two_style[_style18] + ';');
    }

    for (var _style19 in _this.config.dialog.footer.buttons.button_two.style()) {
      data.dialog_footer_button_two.style.cssText = data.dialog_footer_button_two.style.cssText.concat(_style19 + ' : ' + _this.config.dialog.footer.buttons.button_two.style()[_style19] + ';');
    }

    data.dialog_footer_button_two.innerHTML = _this.dialog_button_two; // code to make the hover function

    data.dialog_footer_button_two.setAttribute('data-background', data.dialog_footer_button_two.style.background);

    data.dialog_footer_button_two.onmouseover = function () {
      data.dialog_footer_button_two.style.background = _this.adjust_brightness(_this.getRGBCode(data.dialog_footer_button_two.style.background, _this), 16);
    };

    data.dialog_footer_button_two.onmouseout = function () {
      data.dialog_footer_button_two.style.background = data.dialog_footer_button_two.getAttribute('data-background');
    }; // end of code to make the hover function


    data.dialog_footer_button_two.onclick = function () {
      _this.config.dialog.footer.buttons.button_two.run();
    };

    data.dialog_footer_child.append(data.dialog_footer_button_two);
  }

  data.dialog_header_title.innerHTML = _this.dialog_title;
  data.dialog_body.innerHTML = _this.dialog_body;
  data.dialog_footer_button_one.innerHTML = _this.dialog_button_one;
  data.dialog_header_close_icon.innerHTML = 'x'; // data.dialog_footer_button_one.onclick = _this.config.dialog.footer.buttons.button_one.run();

  data.dialog_footer_button_one.onclick = function () {
    if (!(typeof _this.isDefined(_this.config, 'dialog.footer.buttons.button_one') === 'undefined')) {
      _this.config.dialog.footer.buttons.button_one.run(_this);
    } else {
      _this.hide();
    }
  }; // appending black overlay to body


  data.dialog_header.append(data.dialog_header_title);
  data.dialog_header.append(data.dialog_header_close_icon);
  data.dialog.append(data.dialog_header);
  data.dialog.append(data.dialog_body);
  data.dialog_footer_child.append(data.dialog_footer_button_one);
  data.dialog_footer.append(data.dialog_footer_child);
  data.dialog_footer.append(data.dialog_footer_last_child);
  data.dialog.append(data.dialog_footer);
  data.modal.append(data.overlay);
  data.modal.append(data.dialog);
  this.data = data;
  return this;
}; // Prototype to show the modal window


Modal.prototype.show = function () {
  // positioning modal to the left
  var _this = this;

  document.body.append(_this.data.modal);
  var top_position = (screen.availHeight - _this.data.dialog.offsetHeight) / 2;
  top_position = top_position > 50 ? top_position : '50px';
  _this.data.dialog.style.left = ((window.innerWidth - _this.data.dialog.offsetWidth) / 2).toString() + 'px';
  _this.data.dialog.style.top = top_position.toString() + 'px';
  _this.data.overlay.style.display = 'block';
  _this.data.dialog.style.transition = 'all 0.5s';

  _this.data.dialog_header_close_icon.onclick = function () {
    _this.hide();
  };
}; // Prototype to hide the modal window and release the config object


Modal.prototype.hide = function () {
  var _this = this;

  _this.data.overlay.style.display = 'none';
  _this.data.dialog.style.top = '-1000px';
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