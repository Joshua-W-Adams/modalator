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

## Getting Started

### Installation

1. Run this command

```
npm i modalator --save
```

2. Either import into a Javascript Module OR add as a resource.

    1. Import

    ```javascript
    <script type="module">
      import { Modal } from './<location_of_modalator_installation>/modalator.js';
      var modal = new Modal('Hello world');
      modal.show();
    </script>
    ```

    2. Resource

    ```javascript
    <script type="text/javascript" src="/dist/modalator.min.js"></script>
    <script>
      var modal = new modalator.Modal('Hello world');
      modal.show();
    </script>
    ```

### Useage

There are a few ways to call the Modal as follows:

1.  Body only

```javascript
var modal = new Modal('Hello world');
```

This is the simplest method of calling the Modal as it is just to pass the main content and that will appear in the modal window. See the screenshot below.
 
![Alt text](/assets/img/screenshot-1.jpg?raw=true "Option 1")

There will be one close button and one close icon that will hide the modal window.

2.  Header and body

```javascript
var modal = new Modal('Hi','Hello world');
```

This is another simple method of calling modal by just passing the modal title and content to display. See the screenshot below.

![Alt text](/assets/img/screenshot-2.jpg?raw=true "Option 2")

3.  Header, body and button

```javascript
var modal = new Modal('Hi','Hello world','close');
```

This is another simple method of calling the modal by passing modal title, content, and close button text. Here we can over the ride the text of close button if necessary. 

![Alt text](/assets/img/screenshot-3.jpg?raw=true "Option 3")

4.  Full customisation

```javascript
var modal = new Modal(config);
```

To create a fully customised modal with specific colors, styles, renderers and callback functions. Example in screenshot below.

![Alt text](/assets/img/screenshot-4.jpg?raw=true "Option 4")

A config object must be passed to the Modal to customise it. Here is the sample object passed to the Modal function.

```javascript
let config = {
  background: {      
    style: function () {
      let properties = {
        'background':'#ccc',
        'opacity':'0.7'
      }
      return properties;
    }      
  },
  dialog: {
    style:  function () {
      let properties = {
        'background':'#FFD2D2'            
      }
      return properties;
    },
    header:{
      title: {
        text:'Some Title',
        style: function () {
          let properties = {
                
          }
          return properties;
        }
      },
      close_icon: {          
        style: function () {
          let properties = {
              
          }
          return properties;
        }
      },    
      style: function () {
        let properties = {
                  
        }
        return properties;
      }
    },
    body:{
      content: {
        text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature`,
        style: function () {
          let properties = {
            
          }
          return properties;            
        }            
      }
    },
    footer:{          
      style: function () {
        let properties = {
          
        }
        return properties;  
      },
      buttons:{
        button_one:{
          text: 'Close',
          style: function () {
            let properties = {                  
            }
            return properties;
          },
          run: function(event){              
            event.hide();              
          }
          
        },
        button_two:{
        text: 'Save Changes',
          style: function () {
            let properties = {
              
            }
            return properties;
          },
          run: function(){
            alert('ashok');
          }
          
        }
      }        
    }
  } 
}
```

### Contributors

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

4. Run Gulp task runner

```
gulp
```

5. Sample module can now be accessed on localhost

```
http://localhost/
```

## License
Copyright (C) 2020 Joshua Adams
This program is free software. You can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. For the full license agreement, see the LICENSE.md file.