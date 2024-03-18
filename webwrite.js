function WebWrite() {
  let container = document.createElement("div");
  container.id = "webwritecontainer";
  container.style.border = "2px solid black";

  // container that will hold all buttons
  let option_buttons = document.createElement("div");
  option_buttons.style.display = "flex";
  option_buttons.style.flexDirection = "row";
  container.appendChild(option_buttons);
  
  // creating container that will hold all text
  let text_container = document.createElement('div');
  container.appendChild(text_container);
  
  
  
  let h1_button = document.createElement("button");
  h1_button.appendChild(document.createTextNode('Heading'));
  h1_button.addEventListener('click', () => {
    let h1_text = document.createElement('h1');
    h1_text.contenteditable = 'true';
    text_container.appendChild(h1_text);
  });
  option_buttons.appendChild(h1_button);
  let p_button = document.createElement("button");
  p_button.appendChild(document.createTextNode('Paragraph'));
  p_button.addEventListener('click', () => {
    let p_text = document.createElement('p');
    p_text.contenteditable = 'true';
    text_container.appendChild(p_text);
  });
  option_buttons.appendChild(p_button);

  return container;
}
