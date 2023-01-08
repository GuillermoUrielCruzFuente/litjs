import { LitElement, html } from "lit-element";
import { linkStyles } from "./LinkStyles";

/**
 * `link-lit` custom link with default styles
 */
class Link extends LitElement {
	static get properties() {
		return {
			href: { type: String },
			target: { type: String },
		};
	}

	constructor() {
		super();
		this.href = "";
		this.target = "";
	}

	static get styles() {
		return linkStyles;
	}

	render() {
		return html`
			<a href="${this.href}" target="${this.target}">
				<slot></slot>
			</a>
		`;
	}
}

customElements.define("link-lit", Link);
