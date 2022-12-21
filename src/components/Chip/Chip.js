import { LitElement, html } from "lit-element";
import { chipStyles } from "./ChipStyles";

class Chip extends LitElement {
	static get properties() {
		return {
			tagText: { type: String },
		};
	}

	constructor() {
		super();
		this.tagText = "chip";
	}

	static get styles() {
		return chipStyles;
	}

	render() {
		return html` <span>${this.tagText}</span> `;
	}
}

customElements.define("chip-lit", Chip);
