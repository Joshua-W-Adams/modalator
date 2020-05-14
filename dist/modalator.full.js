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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/componator/src/js/componator.js
/*!
 * Componator
 * Generates gui components based on a standard parent child input data structure
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
    const arr = Object.keys(styles);
    for (let i = 0; i < arr.length; i++) {
      const style = arr[i];
      elementStyle.cssText = elementStyle.cssText.concat(`${style} : ${styles[style]};`);
    }
  }
}

function _checkForFunction(prop) {
  if (typeof prop === 'function') {
    return true;
  } else {
    return false;
  }
}

function _isElement(element) {
  return element instanceof Element || element instanceof HTMLDocument;
}

// get object property if it exists else return a null value
// handles cases where any level of the property chain does not exist
function _getDescendantProp(obj, desc) {
  if (obj && desc) {
    const arr = desc.split('.');
    for (let i = 0; i < arr.length; i++) {
      // set current object as child property
      if (obj[arr[i]]) {
        obj = obj[arr[i]];
      } else {
        obj = null;
        break;
      }
    }
    return obj;
  } else {
    return null;
  }
}

function _handleElementContent(content) {
  // case 1 - user passes string
  if (typeof content === 'string') {
    return content;
  // case 2 - user passes function that returns string
  } else if (_checkForFunction(content) && typeof content() === 'string') {
    return content();
  // case 3 - user pases nothing or unsupported type
  } else {
    return '';
  }
}

function _handleElementValue(element, content) {
  // case 1 - user passes function that returns html element
  if (element !== null && _checkForFunction(element) && _isElement(element())) {
    return element();
  // case 2 - user passes a string value
  } else if (typeof element === 'string') {
    const e = document.createElement(element);
    const str = _handleElementContent(content);
    e.innerHTML = str;
    return e;
  // case 3 - user passes function that returns a string
  } else if (element !== null && _checkForFunction(element) && typeof element() === 'string') {
    const e = document.createElement(element());
    const str = _handleElementContent(content);
    e.innerHTML = str;
    return e;
  // case 4 - user passes nothing or unsupported type
  } else {
    // default element
    const e = document.createElement('div');
    const str = _handleElementContent(content);
    e.innerHTML = str;
    return e;
  }
}

function _cssStringToObject(cssText) {
  const regex = /([\w-]*)\s*:\s*([^;]*)/g;
  let match;
  const properties = {};
  while (match = regex.exec(cssText)) properties[match[1]] = match[2].trim();
  return properties;
}

function _handleElementStyle(style) {
  // case 1 - user passes function that returns an object with keys
  if (style !== null && _checkForFunction(style) && typeof style() === 'object' && style() !== null && Object.keys(style()).length > 0) {
    return style();
  // case 2 - user passes style string
  } else if (typeof style === 'string') {
    // convert string to style object
    const o = _cssStringToObject(style);
    return o;
  // case 3 - user passes a style object
  } else if (typeof style === 'object' && style !== null && Object.keys(style.length > 0)) {
    return style;
  }
  // case 4 - nothing or unsupported type
  // undefined returned
}

function _handleElementFunction(onclick) {
  // case 1 - user passes function
  if (onclick !== null && _checkForFunction(onclick)) {
    return onclick;
  }
  // case 2 - user passes string, nothing or unsupported type
  // undefined returned
}

function _handleElementEvent(event) {
  // case 1 - user passes string
  if (typeof event === 'string') {
    return event;
  }
  // undefined returned
}

function _addOnMouseOver(element, cb, _this) {
  if (cb) {
    element.onmouseover = function (event) {
      cb(event, _this, element);
    };
  }
}

function _addOnMouseOut(element, cb, _this) {
  if (cb) {
    element.onmouseout = function (event) {
      cb(event, _this, element);
    };
  }
}

function _addOnClick(element, cb, _this) {
  if (cb) {
    element.onclick = function (event) {
      cb(event, _this, element);
    };
  }
}

function _addEventListener(element, event, cb) {
  if (cb) {
    element.addEventListener(event, cb);
  }
}

function _findUserConfig(name, userConfig) {
  if (userConfig) {
    for (let i = 0; i < userConfig.length; i++) {
      const row = userConfig[i];
      if (row && name && row.name === name) {
        return row;
      }
    }
  }
  // return undefined otherwise
}

// Main function to build the gui component by recursively looping though the parent child data structure
function _buildComponent(component, defaultConfig, userConfig, finalConfig, parentElement) {
  // loop through current parent level in data heirarchy
  for (let i = 0; i < defaultConfig.length; i++) {
    // get current element configuration
    const defaultElementConfig = defaultConfig[i];
    const name = _getDescendantProp(defaultElementConfig, 'name');
    // get any user overrides of current element
    const userElementConfig = _findUserConfig(name, userConfig);
    // get all element configuration values
    const element = _handleElementValue(_getDescendantProp(userElementConfig, 'element.value') || _getDescendantProp(defaultElementConfig, 'element.value'),
      _getDescendantProp(userElementConfig, 'element.content') || _getDescendantProp(defaultElementConfig, 'element.content'));
    const onclick = _handleElementFunction(_getDescendantProp(userElementConfig, 'onclick') || _getDescendantProp(defaultElementConfig, 'onclick'));
    const onmouseover = _handleElementFunction(_getDescendantProp(userElementConfig, 'onmouseover') || _getDescendantProp(defaultElementConfig, 'onmouseover'));
    const onmouseout = _handleElementFunction(_getDescendantProp(userElementConfig, 'onmouseout') || _getDescendantProp(defaultElementConfig, 'onmouseout'));
    const eventlistener = _handleElementFunction(_getDescendantProp(userElementConfig, 'eventlistener.callback') || _getDescendantProp(defaultElementConfig, 'eventlistener.callback'));
    const event = _handleElementEvent(_getDescendantProp(userElementConfig, 'eventlistener.event') || _getDescendantProp(defaultElementConfig, 'eventlistener.event'));
    const elementStyle = element.style;
    const defaultStyle = _handleElementStyle(_getDescendantProp(defaultElementConfig, 'style'));
    const userStyle = _handleElementStyle(_getDescendantProp(userElementConfig, 'style'));
    // commence building element
    // apply default styles
    _applyStyles(elementStyle, defaultStyle);
    // apply user specified style renderer
    _applyStyles(elementStyle, userStyle);
    // add onclick / run functions to all elements
    _addOnClick(element, onclick, component);
    // add onHover functions to all elements
    _addOnMouseOver(element, onmouseover, component);
    _addOnMouseOut(element, onmouseout, component);
    // addEventListeners
    _addEventListener(element, event, eventlistener);
    // set element id
    element.id = name;
    // update data modal with configured details
    const finalElementConfig = {
      name: name,
      element: element,
      onclick: onclick,
      onmouseover: onmouseover,
      onmouseout: onmouseout,
      eventlistener: {
        event: event,
        callback: eventlistener
      },
      style: elementStyle,
      child: []
    };
    // build object model
    if (parentElement) {
      parentElement.append(element);
    }
    // push element to parent config item
    finalConfig.push(finalElementConfig);
    // recursively call for child elements
    if (defaultElementConfig.child) {
      let userElementConfigChild;
      if (userElementConfig) {
        userElementConfigChild = userElementConfig.child;
      }
      _buildComponent(component, defaultConfig[i].child, userElementConfigChild, finalConfig[i].child, element);
    }
  }
}

function _getRGBCode(rgb_code, _this) {
  if (rgb_code.includes('#')) {
    return rgb_code;
  } else if (rgb_code.includes('rgb')) {
    rgb_code = rgb_code.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return '#' + _this.getHex(rgb_code[1], _this) + _this.getHex(rgb_code[2]) + _this.getHex(rgb_code[3]);
  } else {
    return _this.getHexCodeFromColor(rgb_code);
  }
}

function _getHex(x) {
  const hexDigits = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');
  return isNaN(x) ? '00' : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

function _adjust_brightness(hex_code, percent) {
  const r = parseInt(hex_code.substr(1, 2), 16);
  const g = parseInt(hex_code.substr(3, 2), 16);
  const b = parseInt(hex_code.substr(5, 2), 16);
  return '#' + ((0|(1<<8) + r * (100 - percent) / 100).toString(16)).substr(1) + ((0|(1<<8) + g * (100 - percent) / 100).toString(16)).substr(1) + ((0|(1<<8) + b * (100 - percent) / 100).toString(16)).substr(1);
}

function _getHexCodeFromColor(color_name) {
  const colours = {
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
}

function _addUserFunctions(component, functions) {
  if (functions) {
    for (let i = 0; i < functions.length; i++) {
      const f = functions[i];
      component.__proto__[f.name] = f;
    }
  }
}

/* ============================== Public Methods ============================ */

function buildComponent(defaultConfig, userConfig, userComponent, functions) {
  // create component
  const component = userComponent || {};
  // create array to store final configuration details
  const finalConfig = [];
  // add generic functions to component prototype
  // must use __proto__ as object has already been created
  component.__proto__.getRGBCode = _getRGBCode;
  component.__proto__.getHex = _getHex;
  component.__proto__.adjust_brightness = _adjust_brightness;
  component.__proto__.getHexCodeFromColor = _getHexCodeFromColor;
  // add user defined prototype functions to component
  _addUserFunctions(component, functions);
  // apply styles and onclick functionality to all elements
  _buildComponent(component, defaultConfig, userConfig, finalConfig);
  // append data model
  component.defaultConfig = defaultConfig;
  component.userConfig = userConfig;
  component.finalConfig = finalConfig; // = defaultConfig updated with userConfig
  // return constructed component to user
  return component;
}

function createDescendantProp(obj, desc, value) {
  const arr = desc.split('.');
  let currentProp;
  let currentObj = obj;
  for (let i = 0; i < arr.length; i++) {
    currentProp = arr[i];
    // create property
    if (i === arr.length - 1) {
      currentObj[currentProp] = value;
    } else if (!currentObj[currentProp]) {
      currentObj[currentProp] = {};
    }
    // set current object in loop
    currentObj = currentObj[currentProp];
  }
  return obj;
}

function defaultOnMouseOverColor(event, _this, element) {
  const color = element.style.color;
  element.setAttribute('data-color', element.style.color);
  element.style.color = _this.adjust_brightness(_this.getRGBCode(color, _this), 16);
}

function defaultOnMouseOutColor(event, _this, element) {
  element.style.color = element.getAttribute('data-color');
}

function defaultOnMouseOverBackground(event, _this, element) {
  const color = element.style.background;
  element.setAttribute('data-color', color);
  element.style.background = _this.adjust_brightness(_this.getRGBCode(color, _this), 16);
}

function defaultOnMouseOutBackground(event, _this, element) {
  element.style.background = element.getAttribute('data-color');
}

function findElement(arr, propName, propValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][propName] === propValue) {
      return arr[i];
    }
  }
  // will return undefined if not found; you could return a default instead
}

function findChildElement(arr, propName, propValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][propName] === propValue) {
      return arr[i];
    } else if (arr[i].child) {
      const child = findChildElement(arr[i].child, propName, propValue);
      if (child) {
        return child;
      }
    }
  }
}

/* =========================== Export Public APIs =========================== */

/* harmony default export */ var componator = ({
  buildComponent,
  createDescendantProp,
  defaultOnMouseOverColor,
  defaultOnMouseOutColor,
  defaultOnMouseOverBackground,
  defaultOnMouseOutBackground,
  findElement,
  findChildElement
});

// CONCATENATED MODULE: ./src/js/modalator.js
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
          onmouseover: componator.defaultOnMouseOverColor,
          onmouseout: componator.defaultOnMouseOutColor,
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
            onclick: _this.hide.bind(_this),
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
} // hide the modal window and release the config object


function hide() {
  // refer to object that contains the _show function as prototype
  var _this = this; // get elements


  var dialog = componator.findChildElement(_this.finalConfig, 'name', 'dialog').element;
  var overlay = componator.findChildElement(_this.finalConfig, 'name', 'overlay').element; // hide modal

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

  var modal = componator.buildComponent(defaultConfig, userConfig, component);
  return modal;
}
/* =========================== Export Public APIs =========================== */


/* harmony default export */ var modalator = __webpack_exports__["default"] = ({
  buildModal: buildModal
});

/***/ })
/******/ ]);
//# sourceMappingURL=modalator.full.js.map