import { define } from './node_modules/backed/src/utils.js';

export default define(class CustomDivider extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>
      :host {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        height: 1px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        margin-top: -1px;
      }
      :host([top]) {
        border-bottom: none;
        margin-bottom: -1px;
        border-top: 1px solid rgba(0, 0, 0, 0.12);
      }
      :host([left]) {
        height: 100%;
        width: 1px;
        border-bottom: none;
        margin-right: -1px;
        border-left: 1px solid rgba(0, 0, 0, 0.12);
      }
      :host([right]) {
        height: 100%;
        width: 1px;
        border-bottom: none;
        left: -1px;
        border-right: 1px solid rgba(0, 0, 0, 0.12);
      }
    </style>
    `;
  }
});
