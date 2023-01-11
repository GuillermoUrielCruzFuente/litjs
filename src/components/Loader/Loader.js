import { LitElement, html } from "lit-element";
import { loaderStyles } from "./LoaderStyles";

export class Loader extends LitElement {
	static get styles() {
		return loaderStyles;
	}

	render() {
		return html`
			<div id="loader-container">
				<div></div>
				<div></div>
				<div></div>
			</div>
		`;
	}
}

customElements.define("loader-element", Loader);
