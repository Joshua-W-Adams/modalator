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
  // get keys to avoid looping through entire prototype chain
  const arr = Object.keys(styles);
  for (let i = 0; i < arr.length; i++) {
    const style = arr[i];
    elementStyle.cssText = elementStyle.cssText.concat(`${style} : ${styles[style]};`);
  }
}

function _applyStyleRenderer(elementStyle, styles, modal, prop) {
  if (!(typeof modal.isDefined(styles, prop) === 'undefined')) {
    _applyStyles(elementStyle, styles[prop].style());
  }
}

/* ============================== Public Methods ============================ */

// Modal window starts here
// Object initialization and return the instance as an object
const Modal = function Modal(config, dialog_body, dialog_button) {
  const _this = this;
  _this.config = config;
  _this.dialog_title = '';
  _this.dialog_body = '';
  _this.dialog_button = '';

  if (typeof (config) === 'object') {
    _this.dialog_title = _this.config.dialog.header.title.text;
    _this.dialog_body = _this.config.dialog.body.content.text;
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
  }

  // Modal Object initialization and declaration
  const data = {
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
      'font-size': '20px'
    },
    dialog_header_close_icon_style: {
      'display': 'block',
      'float': 'right',
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

  const arr = [{
    elementStyle: data.overlay.style,
    styles: data.overlay_style,
    prop: 'background'
  }, {
    elementStyle: data.dialog.style,
    styles: data.dialog_style,
    prop: 'dialog'
  }];

  // apply styles to all elements
  for (let i = 0; i < arr.length; i++) {
    const elementStyle = arr[i].elementStyle;
    const styles = arr[i].styles;
    const prop = arr[i].prop;
    // apply default styles
    _applyStyles(elementStyle, styles);
    // apply user specified style renderer
    _applyStyleRenderer(elementStyle, _this.config, this, prop);
  }

  if (!(typeof this.isDefined(_this.config, 'dialog.header') === 'undefined')) {
    for (const style in _this.config.dialog.header.style()) {
      data.dialog_header.style.cssText = data.dialog_header.style.cssText.concat(style + ' : ' + _this.config.dialog.header.style()[style] + ';');
    }
  } // for loop for adding style object to the dialog header text

  for (const style in data.dialog_header_title_style) {
    data.dialog_header_title.style.cssText = data.dialog_header_title.style.cssText.concat(style + ' : ' + data.dialog_header_title_style[style] + ';');
  }

  if (!(typeof this.isDefined(_this.config, 'dialog.header.title') === 'undefined')) {
    for (const style in _this.config.dialog.header.title.style()) {
      data.dialog_header_title.style.cssText = data.dialog_header_title.style.cssText.concat(style + ' : ' + _this.config.dialog.header.title.style()[style] + ';');
    }
  } // for loop for adding style object to the dialog header text

  for (const style in data.dialog_header_close_icon_style) {
    data.dialog_header_close_icon.style.cssText = data.dialog_header_close_icon.style.cssText.concat(style + ' : ' + data.dialog_header_close_icon_style[style] + ';');
  }

  if (!(typeof this.isDefined(_this.config, 'dialog.header.close_icon') === 'undefined')) {
    for (const style in _this.config.dialog.header.close_icon.style()) {
      data.dialog_header_close_icon.style.cssText = data.dialog_header_close_icon.style.cssText.concat(style + ' : ' + _this.config.dialog.header.close_icon.style()[style] + ';');
    }
  } // for loop for adding style object to the dialog header text

  for (const style in data.dialog_body_style) {
    data.dialog_body.style.cssText = data.dialog_body.style.cssText.concat(style + ' : ' + data.dialog_body_style[style] + ';');
  }

  if (!(typeof this.isDefined(_this.config, 'dialog.body.content') === 'undefined')) {
    for (const style in _this.config.dialog.body.content.style()) {
      data.dialog_body.style.cssText = data.dialog_body.style.cssText.concat(style + ' : ' + _this.config.dialog.body.content.style()[style] + ';');
    }
  } // for loop for adding style object to the dialog header text

  for (const style in data.dialog_footer_style) {
    data.dialog_footer.style.cssText = data.dialog_footer.style.cssText.concat(style + ' : ' + data.dialog_footer_style[style] + ';');
  }

  if (!(typeof this.isDefined(_this.config, 'dialog.footer') === 'undefined')) {
    for (const style in _this.config.dialog.footer.style()) {
      data.dialog_footer.style.cssText = data.dialog_footer.style.cssText.concat(style + ' : ' + _this.config.dialog.footer.style()[style] + ';');
    }
  } // for loop for adding style object to the dialog header text

  for (const style in data.dialog_footer_child_style) {
    data.dialog_footer_child.style.cssText = data.dialog_footer_child.style.cssText.concat(style + ' : ' + data.dialog_footer_child_style[style] + ';');
  } // for loop for adding style object to the dialog header text

  for (const style in data.dialog_footer_last_child_style) {
    data.dialog_footer_last_child.style.cssText = data.dialog_footer_last_child.style.cssText.concat(style + ' : ' + data.dialog_footer_last_child_style[style] + ';');
  } // for loop for adding style object to the dialog header text

  for (const style in data.dialog_footer_button_one_style) {
    data.dialog_footer_button_one.style.cssText = data.dialog_footer_button_one.style.cssText.concat(style + ' : ' + data.dialog_footer_button_one_style[style] + ';');
  }

  if (!(typeof this.isDefined(_this.config, 'dialog.footer.buttons.button_one') === 'undefined')) {
    for (const style in _this.config.dialog.footer.buttons.button_one.style()) {
      data.dialog_footer_button_one.style.cssText = data.dialog_footer_button_one.style.cssText.concat(style + ' : ' + _this.config.dialog.footer.buttons.button_one.style()[style] + ';');
    }
  }

  if (!(typeof this.isDefined(_this.config, 'dialog.footer.buttons.button_two.text') === 'undefined')) {
    // for loop for adding style object to the dialog header text
    for (const style in data.dialog_footer_button_two_style) {
      data.dialog_footer_button_two.style.cssText = data.dialog_footer_button_two.style.cssText.concat(style + ' : ' + data.dialog_footer_button_two_style[style] + ';');
    }

    for (const style in _this.config.dialog.footer.buttons.button_two.style()) {
      data.dialog_footer_button_two.style.cssText = data.dialog_footer_button_two.style.cssText.concat(style + ' : ' + _this.config.dialog.footer.buttons.button_two.style()[style] + ';');
    }

    data.dialog_footer_button_two.innerHTML = _this.dialog_button_two;

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
  const _this = this;
  document.body.append(_this.data.modal);
  let top_position = (screen.availHeight - _this.data.dialog.offsetHeight) / 2;
  top_position = top_position > 50 ? top_position : '50px';
  _this.data.dialog.style.left = (window.innerWidth - _this.data.dialog.offsetWidth) / 2;
  _this.data.dialog.style.top = top_position;
  _this.data.overlay.style.display = 'block';
  _this.data.dialog.style.transition = 'all 0.5s';
  _this.data.dialog_header_close_icon.onclick = function () {
    _this.hide();
  };
};

// Prototype to hide the modal window and release the config object
Modal.prototype.hide = function () {
  const _this = this;
  _this.data.overlay.style.display = 'none';
  _this.data.dialog.style.top = '-1000px';
};

Modal.prototype.isDefined = function isDefined(_this, key) {
  return key.split('.').reduce(function (o, x) {
    return typeof o === 'undefined' || o === null ? o : o[x];
  }, _this);
};

/* =========================== Export Public APIs =========================== */

export {
  Modal
};
