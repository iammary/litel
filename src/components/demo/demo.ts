import { LitElement, html, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";
import litLogo from "src/assets/lit.svg";
import viteLogo from "/vite.svg";
import { styles } from "src/components/demo/demo.styles.ts";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("gm-demo")
export class GmDemo extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = "Click on the Vite and Lit logos to learn more";

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src=${viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${litLogo} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">count is ${this.count}</button>
      </div>
      <p class="read-the-docs">${this.docsHint === "" ? "Update docs hint in control" : this.docsHint}</p>
    `;
  }

  private _onClick() {
    this.count++;
  }

  static styles: CSSResultGroup = styles;
}

declare global {
  interface HTMLElementTagNameMap {
    "gm-demo": GmDemo;
  }
}
