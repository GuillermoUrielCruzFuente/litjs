import { LitElement, html } from "lit-element";
import { imageContainerStyles } from "./ImageContainerStyles";

export class ImageContainer extends LitElement {
	static get properties() {
		return {
			src: { type: String },
		};
	}

	constructor() {
		super();
		this.src = "/public/img/land-1.jpg";
	}

	static get styles() {
		return imageContainerStyles;
	}

	render() {
		return html`
			<figure>
				<img src="${this.src}" />
			</figure>
		`;
	}
}

customElements.define("image-container", ImageContainer);
