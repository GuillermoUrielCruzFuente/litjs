import { LitElement, html } from "lit-element";
import styles from "./HeaderItemsContainerStyles";

export class HeaderItemsContainer extends LitElement {
	static get properties() {
		return {};
	}

	constructor() {
		super();
	}

	static get styles() {
		return styles;
	}

	render() {
		return html`
			<nav>
				<slot name="nav-item"></slot>
			</nav>
		`;
	}
}

customElements.define("header-items-container-element", HeaderItemsContainer);
