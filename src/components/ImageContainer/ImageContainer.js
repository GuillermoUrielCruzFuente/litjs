import { LitElement, html } from "lit-element";
import { imageContainerStyles } from "./ImageContainerStyles";

export class ImageContainer extends LitElement {
	static get properties() {
		return {
			src: { type: String },
			loaded: { type: Boolean, attribute: false },
		};
	}
	/**
	 * TODO
	 * create a custom setter
	 * in order to invoke a handler
	 * function that initialize the
	 * swap between images
	 */

	/**
	 * get the new src link
	 * initizalize a new image object
	 * and load the new src by setting that attribute
	 * implement onLoad function to change between
	 * 		1: transition the loader background from opacity 0 to 1
	 * 		2: when transition ends, change the img src attribute
	 * 		3: transition the loader background from opacity 1 to 0
	 */
	constructor() {
		super();

		//reactive property, MUST contain the src value for the img tag
		this.src = "";

		this.loaded = false;

		//Listen for every src attribute change
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

	get #loader() {
		return this.shadowRoot.querySelector("#loader-container");
	}

	loadCompleted() {
		this.loaded = true;
		this.#loader.style.visibility = "hidden";
	}

	handleLoadStart() {
		this.loaded = false;
		this.#loader.style.visibility = "visible";
	}

	render() {
		return html`
			<figure>
				<img
					src="${this.src}"
					loading="lazy"
					@load="${this.loadCompleted}"
				/>

				<div id="loader-container">
					<loader-element></loader-element>
				</div>
			</figure>
		`;
	}
}

customElements.define("image-container", ImageContainer);
