import { LitElement, html } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import { buttonStyles } from "./ButtonStyles";

export class Button extends LitElement {
	static get properties() {
		return {
			text: { type: String },
			isActive: { type: Boolean },
		};
	}

	constructor() {
		super();
		this.text = "";
		this.isActive = false;
	}

	static get styles() {
		return buttonStyles;
	}

	render() {
		return html`
			<button class=${classMap({ active: this.isActive })}>
				${this.text}
			</button>
		`;
	}
}

customElements.define("button-lit", Button);
