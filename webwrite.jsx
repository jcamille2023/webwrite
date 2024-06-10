import React from "react";
import { useEffect, useRef } from "react";
const MaxParaSize = 40;
const MaxH1Size = 70;

// inn react the exporting functions are written in PascalCase
function Webwrite() {
  const container = useRef(null);
  const option_buttons = useRef(null);
  const text_container = useRef(null);
  const h1_button = useRef(null);
  const h1_text = useRef(null);
  const p_text = useRef(null);

  useEffect(() => {
    if (container.current) {
      container.current.style.border = "2px solid black";
    }
    if (option_buttons.current) {
      container.current.style.display = "flex";
      container.current.style.flexDirection = "row";
    }
    if (p_text) {
      p_text.current.style.display = "none";
    }
    if (h1_text) {
      h1_text.current.style.display = "none";
    }
  }, []);

  const handleh1Button = () => {
    // console.log("blurred");
    h1_text.current.textContent = "New heading";
    h1_text.current.style.display = "block";
  };
  const handlekey1 = (e) => {
    // console.log(e.key);
    if (e.key == "Backspace" && h1_text.current.textContent == "") {
      h1_text.current.remove();
      console.log("exception");
    }
  };
  const handleParabtn = () => {
    p_text.current.textContent = "New Paragraph";
    p_text.current.style.display = "block";
  };

  const handlekey2 = (e) => {
    // console.log(e.key);
    if (e.key == "Backspace" && p_text.current.textContent == "") {
      p_text.current.remove();
      console.log("exception");
    }
  };
  const handletextAlign = () => {
    h1_text.current.style.textAlign = "centre";
  };
  const handleFont = () => {
    if (h1_text.current.textContent) {
      let Hsize = window
        .getComputedStyle(h1_text.current, null)
        .getPropertyValue("font-size");
      console.log(Hsize);
      let newHSize = parseInt(Hsize) + 10;
      if (newHSize < MaxH1Size) {
        h1_text.current.style.fontSize = newHSize + "px";
      }
      // let test = newSize + "px";
      // console.log(test);
    }
    if (p_text.current.textContent) {
      let Psize = window
        .getComputedStyle(p_text.current, null)
        .getPropertyValue("font-size");
      console.log(Psize);
      let newPSize = parseInt(Psize) + 10;
      if (newPSize < MaxParaSize) {
        p_text.current.style.fontSize = newPSize + "px";
      }
      // let test = newSize + "px";
      // console.log(test);
    }
  };

  return (
    <div>
      <div id="webwritecontainer" ref={container}>
        <div ref={option_buttons}>
          <button ref={h1_button} onClick={handleh1Button}>
            Heading
          </button>
          <button onClick={handleParabtn}>Paragraph</button>
          <button onClick={handletextAlign}>text align</button>
          <button onClick={handleFont}>increase font size</button>
        </div>

        <div ref={text_container}>
          <h1 ref={h1_text} contentEditable={true} onKeyDown={handlekey1}></h1>
          <p ref={p_text} contentEditable={true} onKeyDown={handlekey2}></p>
        </div>
      </div>
    </div>
  );
}

export default Webwrite;
