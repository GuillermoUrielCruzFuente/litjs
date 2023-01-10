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

		this.srcObserver = new MutationObserver(
			this.#srcObserverCallback.bind(this)
		);
	}

	firstUpdated() {
		this.srcObserver.observe(this.#imgElement, { attributes: true });
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.srcObserver.disconnect();
	}

	#srcObserverCallback(changes) {
		changes.forEach((change) => {
			change.attributeName.includes("src") && this.handleLoadStart();
		});
	}

	static get styles() {
		return imageContainerStyles;
	}

	get #imgElement() {
		return this.shadowRoot.querySelector("img");
	}

	/**
	 * this method is called every time a img finish
	 * its src loading
	 */
	handleLoad() {
		console.log("loading complete");
	}

	handleLoadStart() {
		console.log("loading init");
	}

	render() {
		return html`
			<figure>
				<img
					src="${this.src}"
					loading="lazy"
					@load=${this.handleLoad}
				/>
			</figure>
		`;
	}
}

customElements.define("image-container", ImageContainer);
