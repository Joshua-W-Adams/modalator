# Modalator

## Description

A pure JavaScript component for generating modals.

## Why Use Modalator?

This modal is:
- Pure JavaScript - No HTML, CSS or 3rd party library requirements (e.g. jquery). All HTML components and elements are created dynamically.
- Independant - Modal object is run in its own namespace to avoid conflicts with other libraries.
- All Screen Sizes - Can be used with desktop, tablet and mobile browsers.
- Easy to Install - Simply download the library and import it into your project.
- Easy to Use - Create a modal with one line of code.
- Fully Customisable - Multiple construction options to fully configure the modal content and operation. Change the background color, text color, button color, render custom elements and customise callback functions for onclick operations.
- Beautifully Styled - Beautifully styled by default out of the box.
- Tiny - 30 kb source code and 12 kb minified code

## Getting Started

### Installation

1. Run this command

```
npm i modalator --save
```

2. Add as a resource.

  ```javascript
  <script type="text/javascript" src="/<location_of_modalator_installation>/dist/modalator.full.min.js"></script>
  <script>
    const modal = modalator.default.buildModal('Hello world');
    modal.show();
  </script>
  ```

### Useage

There are a few ways to call the Modal as follows:

1.  Body only

```javascript
const modal = modalator.buildModal('Heelllo world');
```

This is the simplest method of calling the Modal as it is just to pass the main content and that will appear in the modal window. See the screenshot below.

![Alt text](/assets/img/screenshot-1.jpg?raw=true "Option 1")

There will be one close button and one close icon that will hide the modal window.

2.  Header and body

```javascript
const modal = modalator.buildModal('Hi','Hello world');
```

This is another simple method of calling modal by just passing the modal title and content to display. See the screenshot below.

![Alt text](/assets/img/screenshot-2.jpg?raw=true "Option 2")

3.  Header, body and button

```javascript
const modal = modalator.buildModal('Hi','Hello world','Close it');
```

This is another simple method of calling the modal by passing modal title, content, and close button text. Here we can over the ride the text of close button if necessary.

![Alt text](/assets/img/screenshot-3.jpg?raw=true "Option 3")

4.  Full customisation

```javascript
const modal = modalator.buildModal(config);
```

To create a fully customised modal with specific colors, styles, renderers and callback functions. Example in screenshot below.

![Alt text](/assets/img/screenshot-4.jpg?raw=true "Option 4")

A config object must be passed to the Modal to customise it. Here is the sample object passed to the Modal function.

```javascript
const config = [{
  name: 'modal',
  child: [{
    name: 'overlay',
    style: 'opacity: 0.1; background-color: red;'
  }, {
    name: 'dialog',
    child: [{
      name: 'dialog_header',
      child: [{
        name: 'dialog_header_title',
        element: {
          value: function () {
            let div = document.createElement('div');
            div.innerHTML = 'Upload Files';
            div.onclick = function () {
              alert('hello');
            }
            return div;   
          }
        }
      }]
    }, {
      name: 'dialog_body',
      element: {
        value: function () {
          let d = document.createElement('div');
          d.innerHTML = 'Hello World';
          return d;
        }
      }
    }, {
      name: 'dialog_footer',
      child: [{
        name: 'dialog_footer_child',
        child: [{
          name: 'dialog_footer_button_two',
          style: function () {
            let properties = {
              'background-color': '#007bff'
            }
            return properties;
          }
        }, {
          name: 'dialog_footer_button_one',
          element: {
            content: 'hello'
          },
          style: function () {
            let properties = {       
              'background-color': '#5a6268'
            }
            return properties;
          }
        }]
      }]
    }]
  }]
}];
```

For a full list of properties that can be specified on the modal please refer to the componator npm package.

```
https://www.npmjs.com/package/componator
```

### Contributors

#### Develop

If you would like to contribute to the project. To get a development environment up and running on your local system. Simply follow the instructions below.

1. Install latest version of Node.js

```
https://nodejs.org/en/download/
```

2. Clone repository to your system using the following command or git desktop

```
git clone https://github.com/Joshua-W-Adams/modalator
```

3. Install repository dependencies

```
npm install
```

4. Serve module with web server

```
gulp serve
```

5. Sample module can now be accessed on localhost

```
http://localhost/
```

#### Deployment

1. Lint application

```
gulp lint
```

2. Build dist files

```
gulp build
```

3. Submit pull request to master branch on repository

## License
Copyright (C) 2020 Joshua Adams
This program is free software. You can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
