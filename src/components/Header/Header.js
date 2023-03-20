import { LitElement, html } from "lit-element";
import styles from "./HeaderStyles";

export class Header extends LitElement {
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
			<header>
				<slot name="logo"></slot>

				<slot name="nav"></slot>
			</header>
		`;
	}
}

customElements.define("header-element", Header);
