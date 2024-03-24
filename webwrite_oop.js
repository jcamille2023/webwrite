export class WebWrite {
    constructor() {
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
            let p_text = document.createElement('p');
            p_text.addEventListener('keydown', (e) => {
            if(e.key == 'Backspace' && p_text.innerHTML == '') {
                p_text.remove();
            }
            });
            p_text.appendChild(document.createTextNode('New paragraph'));
            p_text.setAttribute('contenteditable', 'true');
            text_container.appendChild(p_text);
        });
        option_buttons.appendChild(p_button);
        // add a change text-alignment button

        // add an increase font size button
        this.container = container;
        this.text_container = text_container;
        this.content = text_container.innerHTML;
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
    appendToContent(element) {
        this.text_container.appendChild(element);
    }
    addNewButton(button) {
        this.options.appendChild(button);
    }
    
}
