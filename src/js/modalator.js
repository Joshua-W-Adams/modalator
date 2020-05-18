/*!
 * Modalator
 * JavaScript component to generate modals
 * (c) 2020 Joshua Adams
 */

/* ============================== Import Modules ============================ */

// module that handles generating gui components from passed data structure
// / = relative to server location
// ./ = relative to file location
import componator from '/node_modules/componator/src/js/componator.js';
// for webpack
// import componator from '../../node_modules/componator/src/js/componator';

/* ================================ Variables =============================== */

// N/A

/* ============================= Private Methods ============================ */

function _preventDefault(event) {
  event.preventDefault();
}

// default data structure to generate a modal
function _getDefaultConfig(_this) {
  const config = [{
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
            color: 'red',
            'font-size': '20px',
            'font-weight': '700',
            cursor: 'pointer',
            float: 'right'
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
              float: 'right'
            }
          }]
        }],
      }]
    }]
  }];
  return config;
}

function _userConfigTemplate(title, body, button) {
  const userConfig = [{
    name: 'modal',
    child: [{
      name: 'overlay',
    }, {
      name: 'dialog',
      child: [{
        name: 'dialog_header',
        child: [{
          name: 'dialog_header_title',
          element: {
            content: title || 'My Modal'
          },
        }]
      }, {
        name: 'dialog_body',
        element: {
          content: body || 'Content'
        },
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
  if (typeof userConfig === 'object') {
    return userConfig;
  // case 2 - user passes non object
  } else {
    // create config object to store string values
    let config;
    // case 1 - one parameter passed - modal body
    if (typeof dialog_body === 'undefined' && typeof dialog_button === 'undefined') {
      config = _userConfigTemplate(null, userConfig, null);
    // case 2 - two parameters passed - modal header and body
    } else if (typeof dialog_button === 'undefined') {
      config = _userConfigTemplate(userConfig, dialog_body, null);
    // case 3 - three parameters passed - modal header, body and button name
    } else {
      config = _userConfigTemplate(userConfig, dialog_body, dialog_button);
    }
    // set config object of modal as created object
    return config;
  }
}

function _addFunctions(component, functions) {
  if (functions) {
    for (let i = 0; i < functions.length; i++) {
      const f = functions[i];
      component.__proto__[f.name] = f;
    }
  }
}

/* ============================== Public Methods ============================ */

function show() {
  // refer to object that contains the _show function as prototype
  const _this = this;
  // get parent element
  const modal = componator.findElement(_this.finalConfig, 'name', 'modal').element;
  // get remaining elements
  const dialog = componator.findChildElement(_this.finalConfig, 'name', 'dialog').element;
  const overlay = componator.findChildElement(_this.finalConfig, 'name', 'overlay').element;
  // append parent to DOM
  document.body.append(modal);
  // calculate position of modal
  let top_position = (screen.availHeight - dialog.offsetHeight) / 2;
  top_position = top_position > 50 ? top_position : '50px';
  dialog.style.left = ((window.innerWidth - dialog.offsetWidth) / 2).toString() + 'px';
  dialog.style.top = top_position.toString() + 'px';
  // display modal
  overlay.style.display = 'block';
  dialog.style.transition = 'all 0.5s';
}

// hide the modal window and release the config object
function hide() {
  // refer to object that contains the _show function as prototype
  const _this = this;
  // get elements
  const dialog = componator.findChildElement(_this.finalConfig, 'name', 'dialog').element;
  const overlay = componator.findChildElement(_this.finalConfig, 'name', 'overlay').element;
  // hide modal
  overlay.style.display = 'none';
  dialog.style.top = '-1000px';
}

function buildModal(userConfig, dialog_body, dialog_button) {
  // create component
  const component = {};
  // get prototype functions to assign to component
  const functions = [hide, show];
  // assign prototype functions so they can be reference in default config
  _addFunctions(component, functions);
  // default configuration modal of modal
  // component passed so that prototype functions can be referenced
  const defaultConfig = _getDefaultConfig(component);
  // get user configuation based on 4 input cases
  // user configuration overrides to default configuration modal
  userConfig = _getUserConfig(userConfig, dialog_body, dialog_button);
  // construct default component and append / override with user details
  const modal = componator.buildComponent(defaultConfig, userConfig, component);
  return modal;
}

/* =========================== Export Public APIs =========================== */

export default {
  buildModal
};
