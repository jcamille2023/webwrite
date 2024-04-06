export class WebWrite {
    constructor() {
        let alignment = 'left';
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
            h1_text.addEventListener('keydown', (e) => {
            if(e.key == 'Backspace' && h1_text.innerHTML == '') {
                h1_text.remove();
            }
            });
            h1_text.appendChild(document.createTextNode('New heading'));
            h1_text.setAttribute('contenteditable', 'true');
            text_container.appendChild(h1_text);
        });
        option_buttons.appendChild(h1_button);
        let p_button = document.createElement("button");
        p_button.appendChild(document.createTextNode('Paragraph'));
        p_button.addEventListener('click', () => {
            if(window.getSelection().toString() == '') {
                console.log('No selection');
                let p_text = document.createElement('p');
                p_text.addEventListener('keydown', (e) => {
                if(e.key == 'Backspace' && p_text.innerHTML == '') {
                    p_text.remove();
                }
                });
                p_text.appendChild(document.createTextNode('New paragraph'));
                p_text.setAttribute('contenteditable', 'true');
                text_container.appendChild(p_text);
            }
            else {
                let selection = window.getSelection();
                console.log(selection);
                let parent = selection.extentNode.parentElement;
                if(parent.nodeName == "H1") {
                    console.log("replace text");
                    let parent_content = parent.textContent;
                    let string1 = selection.toString();
                    parent_content = parent_content.replaceAll(string1,'');
                    console.log(parent_content);
                    let p_text = document.createElement('p');
                    p_text.addEventListener('keydown', (e) => {
                    if(e.key == 'Backspace' && p_text.innerHTML == '') {
                        p_text.remove();
                    }
                    });
                    p_text.appendChild(document.createTextNode(selection.toString()));
                    parent.textContent = parent_content;
                    p_text.setAttribute('contenteditable', 'true');
                    text_container.insertBefore(p_text,parent);
                    if(parent.textContent == '') {
                        parent.remove();
                    }
                    text_container.appendChild(p_text);
                }
                    

            }
            
        });
        option_buttons.appendChild(p_button);

        
        // add a change text-alignment button
        container.addEventListener('paste', (event) => {
            let data = event.clipboardData.getData("text");
            let ele = document.createElement('p');
            ele.setAttribute('contenteditable','true');
            ele.textContent = data;
            text_container.appendChild(ele);

        });
        // add an increase font size button
        this.container = container;
        this.text_container = text_container;
        this.alignment = alignment;
        this.options = option_buttons;
    }
    enableImages() {
        let img_btn = document.createElement('button');
        img_btn.appendChild(document.createTextNode('Image'));
        img_btn.addEventListener('click', () => {
            let img_container = document.createElement('div');
            img_container.style.position = "absolute";
            img_container.style.padding = "33%";
            img_container.style.backgroundColor = "white";
            img_container.style.color = "black";
            img_container.style.top = "0";
            img_container.style.width = '100%';
            

            let title = document.createElement('p');
            title.textContent = 'Add an image';
            img_container.appendChild(title);

            let info = document.createElement('p');
            info.textContent = "Enter the URL to an image";
            img_container.appendChild(info);
            let src_input = document.createElement('input');
            src_input.type = 'text';
            img_container.appendChild(src_input);

            let submit_button = document.createElement('button');
            submit_button.textContent = 'Submit';
            submit_button.addEventListener('click', () => {
                let img_src = src_input.value;
                let img = document.createElement('img');
                img.src = img_src;
                this.text_container.appendChild(img);
                img_container.remove();
            });
            let cancel_button = document.createElement("button");
            cancel_button.textContent = 'Cancel';
            cancel_button.addEventListener('click', () => {img_container.remove()});
            img_container.appendChild(submit_button);
            img_container.appendChild(cancel_button);
            document.body.appendChild(img_container);

        });
        this.options.appendChild(img_btn);
    }
    content() {
        let children = this.text_container.children;
        for(let child of children) {
            child.setAttribute('contenteditable','false');
        }
        return this.text_container.innerHTML;
    }
    appendToContent(element) {
        this.text_container.appendChild(element);
    }
    addNewButton(button) {
        this.options.appendChild(button);
    }
    alignText(alignment) {
        if(window.getSelection().toString() != "") {
            let selection = window.getSelection();
            let parent = selection.extentNode.parentElement;
            parent.style.textAlign = alignment;
        }
        else {
            container.style.textAlign = alignment;
        }
    }
    importCode(code) {
        this.text_container.innerHTML += code;
        let children = this.text_container.children;
        for(let child in children) {
            child.setAttribute('contenteditable','true');
            child.addEventListener('keydown', (e) => {
                if(e.key == 'Backspace' && child.innerHTML == '') {
                    child.remove();
                }
            });
            if(child.nodeName == 'A') {
                let link = child.getAttribute('href');
                if(link != '') {
                    child.addEventListener('mouseover', (e) => {
                        let link_text = document.createElement('p');
                        link_text.textContent = link;
                        let action_detail = document.createElement('p');
                        action_detail.textContent = 'Click to edit, CTRL+click to navigate';
                        let container = document.createElement('container');
                        container.setAttribute('class','linkhover');
                        container.appendChild(link_text);
                        container.appendChild(action_detail);
                        container.style.position = 'absolute';

                        container.style.top = e.clientX + 'px';
                        container.style.left = e.clientY + 'px';

                        let body = document.body;
                        body.appendChild(container);
                    });
                    child.addEventListener('click', (e) => {
                        if(e.ctrlKey) {
                            window.open(href,"_blank");
                        }
                        else {
                            let container = document.createElement('container');
                            // will finish ltr...
                        }
                    });
                }
            }
        }
        
    }    
}
