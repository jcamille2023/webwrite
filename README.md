# webwrite
WebWrite is a text-to-HTML converter that will allow users to write text and convert it to HTML code.

WebWrite is made as a class with methods for allowing image input as well as inserting user made functions in the WebWrite container.

Initialize WebWrite using the following line of code:
```
let webwrite = new WebWrite();
```

A WebWrite class has two properties: container and options.
webwrite.container returns the HTML element the WebWrite container is stored in. This can be appended to
an area of choice of the page.
webwrite.options returns the HTML element which contain the text or image (if enabled) input options for users. Developers can append their own options to this element, and then append the resulting input the user enters to webwrite.content.

WebWrite has 4 different methods:
  The enableImages() method creates a button appended to the options container that allows a user to add an image by URL and add that image into the WebWrite container. Future versions will allow the developer to append to the container that enables adding an image by URL to allow for image creation by upload.
  The appendToContent() method appends the input given to the parameter to the WebWrite container.
  The appendToContent() method appends the button given to the parameter to the WebWrite options menu.
  The content() method returns a collection of HTML elements which make up the input the user entered. These elements can then be stored and later appended to a container.

A typical implementation of WebWrite may look something like this:
```
let webwrite = new WebWrite();
container.appendChild(webwrite.container);
  ...
function submit() {
  let content = webwrite.content();

// .. Whatever action is then performed with the data.
}
```

It is highly recommended that **code created by WebWrite is filtered and removes potentially dangerous elements like <iframe> if inserted by the user.**. 

You can use WebWrite by importing WebWrite as an ES6 module:
```
import {WebWrite} from 'https://jcamille2023.github.io/webwrite/webwrite_oop.js'
```
