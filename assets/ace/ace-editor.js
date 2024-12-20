/* From https://cdn.jsdelivr.net/gh/MarketingPipeline/Ace-Editor-Web-Component@1.0.2/dist/ace-editor-wc.min.js */
/**! * @license Ace-Editor-Web-Component - A web component to easily add a code editor or editor(s) to your web page! * VERSION: 1.0.2 * MORE INFO CAN BE FOUND AT https://github.com/MarketingPipeline/Ace-Editor-Web-Component */

/**! * @license Ace-Editor-Web-Component - A web component to easily add a code editor or editor(s) to your web page! * VERSION: 1.0.2 * MORE INFO CAN BE FOUND AT https://github.com/MarketingPipeline/Ace-Editor-Web-Component */ let AceEditorWC_Is_AceEditorLoaded =
  !1;
class AceEditorWC extends HTMLElement {
  connectedCallback() {
    let e = this.getAttribute("language");
    if (!e)
      return (this.innerHTML = `<div class="ace-editor-component"><div class="ace-editor-wc"><div class="ace-editor-wc-pane"><div class="ace-editor-wc-title">Error!</div></div><div id="code_editor_text_value" class="ace-editor-wc-text" style="">Error: Language Attribute Is Missing For Web Component ...</div></div>`);
    async function t(e) {
      "true" === (await loadAceEditor()).loaded &&
        CreateAceEditor(e, e.getAttribute("language").toLowerCase());
    }
    (this.spellcheck = !1),
      (this.editorTitle = e),
      this.getAttribute("editor-title") &&
        (this.editorTitle = this.getAttribute("editor-title")),
      (this.innerHTML = `<div class="ace-editor-component"><div class="ace-editor-wc"><div class="ace-editor-wc-pane"><div class="ace-editor-wc-title">${this.editorTitle}</div><div class="ace-editor-wc-mask">Copied to the clipboard.</div><div class="ace-editor-wc-ctrl"><button class="ck-button"><img src="https://lyricat.github.io/code-knack/demo/lib/code-knack/images/icon-copy-dark.svg"><span>copy</span></button></div></div><div id="code_editor_text_value" class="ace-editor-wc-text">${this.innerHTML}</div></div></div>`),
      t(this),
      this.querySelector(".ck-button").addEventListener("click", (e) =>
        (function e(t) {
          let i = ace.edit(t.querySelector("#code_editor_text_value"));
          navigator.clipboard.writeText(i.getValue()),
            (t.querySelector(".ace-editor-wc-mask").style.display = "flex"),
            setTimeout(() => {
              t.querySelector(".ace-editor-wc-mask").style.display = "none";
            }, "3000");
        })(this)
      );
  }
}
function loadAceEditorScripts(e) {
  return new Promise(function (t, i) {
    let o = document.createElement("script");
    (o.src = e),
      (o.async = !1),
      (o.onload = () => {
        t(e);
      }),
      (o.onerror = () => {
        i(e);
      }),
      document.body.appendChild(o);
  });
}
if (
  ((this.Ace_Editor_Path =
    "https://cdnjs.cloudflare.com/ajax/libs/ace/1.16.0/"),
  "undefined" != typeof AceEditor_WC_Ace_Editor_Path &&
    (this.Ace_Editor_Path = AceEditor_WC_Ace_Editor_Path),
  (this.gfgScript = [
    `${this.Ace_Editor_Path}ace.min.js`,
    `${this.Ace_Editor_Path}ext-modelist.js`,
    `${this.Ace_Editor_Path}ext-themelist.js`,
    "https://cdnjs.cloudflare.com/ajax/libs/ace/1.16.0/ext-error_marker.min.js",
  ]),
  "undefined" != typeof AceEditor_WC_Ace_Editor_EXTS)
)
  for (let item in AceEditor_WC_Ace_Editor_EXTS)
    this.gfgScript.push(AceEditor_WC_Ace_Editor_EXTS[item]);
async function loadAceEditor() {
  if (!1 !== AceEditorWC_Is_AceEditorLoaded) return { loaded: "true" };
  {
    this.gfgScript.forEach(function (e) {
      !1 ===
        (function e(t) {
          t || (t = "http://xxx.co.uk/xxx/script.js");
          for (
            var i = document.getElementsByTagName("script"), o = i.length;
            o--;

          )
            if (i[o].src == t) return !0;
          return !1;
        })(e) && this.promiseData.push(loadAceEditorScripts(e));
    });
    let e = await Promise.all(this.promiseData)
      .then(async function () {
        return (AceEditorWC_Is_AceEditorLoaded = !0), { loaded: "true" };
      })
      .catch(function (e) {
        return (
          console.log(`Ace Editor WC Error: ${e} failed to load!`),
          { loaded: "false" }
        );
      });
    return e;
  }
}
function CreateAceEditor(e, t) {
  ace.config.set("basePath", this.Ace_Editor_Path);
  let i = e.querySelector("#code_editor_text_value").textContent,
    o = ace.edit(e.querySelector("#code_editor_text_value"));
  if (((o.$blockScrolling = 1 / 0), e.getAttribute("editor-theme"))) {
    let r = ace.require("ace/ext/themelist"),
      c = r.themesByName;
    void 0 != c[e.getAttribute("editor-theme").toLowerCase()]
      ? o.setTheme(`ace/theme/${e.getAttribute("editor-theme").toLowerCase()}`)
      : (console.log(
          `Ace Editor WC Error: ${e.getAttribute(
            "editor-theme"
          )} is not a valid theme - setting to default.`
        ),
        o.setTheme("ace/theme/monokai"));
  } else o.setTheme("ace/theme/monokai");
  if (
    (t &&
      (function e() {
        let i = ace.require("ace/ext/modelist");
        void 0 != i.modesByName[t]
          ? (o.getSession().setMode(`ace/mode/${t}`),
            o.getSession().setAnnotations())
          : console.log(
              `Ace Editor WC Error: Ace Editor Language Mode Could Not Be Found For ${
                t.charAt(0).toUpperCase() + t.slice(1)
              }`
            );
      })(),
    o.setShowPrintMargin(!1),
    o.setValue(i),
    o.clearSelection(),
    e.getAttribute("editor-options"))
  )
    o.setOptions(JSON.parse(e.getAttribute("editor-options")));
  else {
    let s = 1 / 0;
    e.getAttribute("max-lines") && (s = Number(e.getAttribute("max-lines"))),
      o.setOptions({ maxLines: s });
  }
}
(this.promiseData = []),
  window.customElements.define("ace-editor", AceEditorWC);
