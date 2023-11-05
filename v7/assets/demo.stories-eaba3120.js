import{i as h,s as g,x as b}from"./lit-element-f1878214.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=e=>t=>typeof t=="function"?((o,r)=>(customElements.define(o,r),r))(e,t):((o,r)=>{const{kind:i,elements:n}=r;return{kind:i,elements:n,finisher(s){customElements.define(o,s)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}},k=(e,t,o)=>{t.constructor.createProperty(o,e)};function u(e){return(t,o)=>o!==void 0?k(e,t,o):y(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var c;((c=window.HTMLSlotElement)===null||c===void 0?void 0:c.prototype.assignedElements)!=null;const w=""+new URL("lit-c8dae599.svg",import.meta.url).href,x=""+new URL("../vite.svg",import.meta.url).href,_=h`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,E=h`
  ${_}

  :host {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.lit:hover {
    filter: drop-shadow(0 0 2em #325cffaa);
  }

  .card {
    padding: 2em;
  }

  .read-the-docs {
    color: #888;
  }

  ::slotted(h1) {
    font-size: 3.2em;
    line-height: 1.1;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }
`;var L=Object.defineProperty,P=Object.getOwnPropertyDescriptor,d=(e,t,o,r)=>{for(var i=r>1?void 0:r?P(t,o):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(r?s(t,o,i):s(i))||i);return r&&i&&L(t,o,i),i};let a=class extends g{constructor(){super(...arguments),this.docsHint="Click on the Vite and Lit logos to learn more",this.count=0}render(){return b`
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src=${x} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${w} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">count is ${this.count}</button>
      </div>
      <p class="read-the-docs">${this.docsHint===""?"Update docs hint in control":this.docsHint}</p>
    `}_onClick(){this.count++}};a.styles=E;d([u()],a.prototype,"docsHint",2);d([u({type:Number})],a.prototype,"count",2);a=d([v("gm-demo")],a);const z={component:"gm-demo"},l={args:{docsHint:"Click on the Vite and Lit logos to learn more"}};var m,p,f;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    docsHint: "Click on the Vite and Lit logos to learn more"
  }
}`,...(f=(p=l.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const H=["Primary"];export{l as Primary,H as __namedExportsOrder,z as default};
//# sourceMappingURL=demo.stories-eaba3120.js.map
