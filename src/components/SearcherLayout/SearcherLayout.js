import { LitElement, html } from "lit-element";
import { searcherLayoutStyles } from "./SearcherLayoutStyles";
import "@/components/ListViewer";

/**
 * `searcher-layout` Show a list of results with a search bar and a selected item
 */
export class SearcherLayout extends LitElement {
	static get properties() {
		return {
			listElement: { type: Object },
			searchElement: { type: Object },
			selectedElement: { type: Object },
		};
	}

	constructor() {
		super();

		this.listElement = html`
			<list-viewer
				.elements="${[0, 1, 2, 3, 4, 5]}"
				header="Lista"
			></list-viewer>
		`;

		this.searchElement = html`<input placeholder="input"></input>`;

		this.selectedElement = html`<div><h1>card</h1></div>`;
	}

	static get styles() {
		return searcherLayoutStyles;
	}

	render() {
		return html`
			<main>
				${this.listElement}
				<section>${this.searchElement} ${this.selectedElement}</section>
			</main>
		`;
	}
}

customElements.define("searcher-layout", SearcherLayout);
