const currentScriptPath = document.currentScript.src;
const acePath = currentScriptPath.replace(/[^\/]+.js/, "ace-editor.js");
console.log("acePath: ", acePath);

function addAce() {
  let script = document.createElement("script");
  script.src = acePath;
  document.head.appendChild(script);
}

function loadEditors() {
  console.log("Run me!");

  function waitForAce() {
    if (window.ace) {
      loadHtmlEditors();
      loadFullEditors();
    } else {
      setTimeout(waitForAce, 200);
    }
  }
  addAce();
  document.addEventListener("DOMContentLoaded", function () {
    waitForAce();
  });
}

/* For HTML Only Editor */
function loadHtmlEditors() {
  console.log("Load HTML editors!");
  for (let div of document.querySelectorAll(".ace-custom-html-block")) {
    const editor = div.querySelector("ace-editor");
    const iframe = div.querySelector("iframe");
    editor.addEventListener("change", (e) => handleChange(editor, iframe));
    editor.addEventListener("input", (e) => handleChange(editor, iframe));
    editor.addEventListener("keypress", (e) => handleChange(editor, iframe));
    handleChange(editor, iframe);
  }

  function handleChange(editorDiv, iframeEl) {
    const html = ace
      .edit(editorDiv.querySelector("#code_editor_text_value"))
      .getValue();
    // Write HTML to iframe document...
    iframeEl.contentWindow.document.open();
    iframeEl.contentWindow.document.write(html);
    iframeEl.contentWindow.document.close();
    return html.trim();
  }
}

function openCode3Tab(tabname, event) {
  let clickedElement = event.target;

  if (!clickedElement) return;
  let codeBlock = clickedElement.closest(".ace-custom-code3-block");

  /* Update active block */
  if (tabname !== "all") {
    for (let e of codeBlock.querySelectorAll(".code-editor")) {
      e.style.display = "none";
    }
    let editorBlock = codeBlock.querySelector(`.${tabname}-editor`);
    editorBlock.style.display = "block";
  } else {
    for (let e of codeBlock.querySelectorAll(".code-editor")) {
      e.style.display = "block";
    }
  }
  /* Update tabs */

  for (let b of codeBlock.querySelectorAll(".tab-button")) {
    b.classList.remove("active");
  }
  clickedElement.closest(".tab-button").classList.add("active");
}

/* Code for our HTML + CSS + JS Editor */
function loadFullEditors() {
  for (let block of document.querySelectorAll(".ace-custom-code3-block")) {
    const htmlEditor = block.querySelector(".html-editor ace-editor");
    const cssEditor = block.querySelector(".css-editor ace-editor");
    const jsEditor = block.querySelector(".js-editor ace-editor");
    const iframe = block.querySelector(".result-block iframe");
    const errorBlock = block.querySelector(".error-block");

    const handleChange = (event) => {
      console.log(
        "Handle change! from ",
        event,
        block,
        htmlEditor,
        cssEditor,
        jsEditor,
        iframe
      );
      const html = ace
        .edit(htmlEditor.querySelector("#code_editor_text_value"))
        .getValue();
      const css = ace
        .edit(cssEditor.querySelector("#code_editor_text_value"))
        .getValue();
      const js = ace
        .edit(jsEditor.querySelector("#code_editor_text_value"))
        .getValue();
      const content = `
        <html>
          <head>
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>${js}</script>
          </body>
        </html>
      `;

      iframe.contentWindow.document.open();

      iframe.contentWindow.onerror = function (
        message,
        source,
        lineno,
        colno,
        error
      ) {
        console.log("Got iFrame Error!", message);
        // Send error details to parent window or handle it within the iframe
        // For example, post the error message back to the parent
        // parent.postMessage({ type: "error", message: message }, "*");
        errorBlock.appendChild(
          makeErrorDiv(message, source, lineno, colno, error)
        );
        return false; // Prevents the firing of the default event handler
      };

      console.log(
        "Set error handler?",
        iframe.contentWindow,
        iframe.contentWindow.onerror
      );
      try {
        console.log("Writing content");
        iframe.contentWindow.document.write(content);
        console.log("Success?");
      } catch (err) {
        console.log("Unable to write", content);
        return;
      }
      console.log("Done writing iframe");
      iframe.contentWindow.document.close();
    };
    /* for (let eventname of ["input", "change"]) {
      for (let editor of [jsEditor, cssEditor, htmlEditor]) {
        editor.addEventListener(eventname, handleChange);
      }
    } */
    for (let editor of [jsEditor, cssEditor, htmlEditor]) {
      ace
        .edit(editor.querySelector("#code_editor_text_value"))
        .getSession()
        .on("change", handleChange);
    }

    block
      .querySelector(".js-editor")
      .addEventListener("keypress", handleChange);

    handleChange();
  }
}

function makeErrorDiv(message, source, lineno, colno, error) {
  const errorDiv = document.createElement("div");
  errorDiv.classList.add("error");
  errorDiv.innerHTML = `        
    <p>${message} at (${lineno}:${colno}</p>        
  `;
  return errorDiv;
}

function clearErrors(event) {
  let clickedElement = event.target;
  let errorBlock = clickedElement.closest(".error-block");
  for (let div of errorBlock.querySelectorAll("div")) {
    div.remove();
  }
}

loadEditors();
