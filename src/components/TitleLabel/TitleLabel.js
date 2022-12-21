import { LitElement, html } from "lit-element";
import { titleLabelStyles } from "./TitleLabelStyles";

/**
 * `title-label`
 */
export class TitleLabel extends LitElement {
	static get properties() {
		return {
			topic: { type: String },
			text: { type: String },
		};
	}

	constructor() {
		super();
		this.topic = "";
		this.text = "";
	}

	static get styles() {
		return titleLabelStyles;
	}

	render() {
		return html`
			<div>
				<p class="topic">${this.topic}</p>
				<p class="text">${this.text}</p>
			</div>
		`;
	}
}

customElements.define("title-label", TitleLabel);
