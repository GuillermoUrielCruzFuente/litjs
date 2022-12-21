import { LitElement, html } from "lit-element";
import { gridLayoutStyles } from "./GridLayoutStyles";

export class GridLayout extends LitElement {
	static get styles() {
		return gridLayoutStyles;
	}

	render() {
		return html`
			<section>
				<slot></slot>
			</section>
		`;
	}
}

customElements.define("grid-layout", GridLayout);
