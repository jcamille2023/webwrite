# webwrite
WebWrite is a text-to-HTML converter that will allow users to write text and convert it to HTML code.

When called, the WebWrite() function returns a list of two HTML elements. 
The first element is meant to be appended to the body to display the WebWrite container.
The second element contains all text written by the user, which by retrieving the innerHTML of the second element, you can get the HTML code of any text a user wrote.

A typical implementation of WebWrite looks something like this
```
let elements = WebWrite();
container.appendChild(elements[0]);

function submit() {
  let data = elements[1].innerHTML;

// .. Whatever action is then performed with the data.
}
```
To use it, import WebWrite as an ES6 module.
```
import {WebWrite} from 'https://jcamille2023.github.io/webwrite/webwrite.js'
```

It is highly recommended that **code created by WebWrite is filtered and removes potentially dangerous elements like <iframe> if inserted by the user.**. 
