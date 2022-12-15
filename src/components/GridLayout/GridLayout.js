import { LitElement, html, css } from "lit-element";
import { styles } from "@/components/GridLayout/GridLayoutStyles";

export class GridLayout extends LitElement {
	static get styles() {
		return [styles];
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
