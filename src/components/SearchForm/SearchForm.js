import { LitElement, html } from "lit-element";
import { GetCharacters } from "@/utils/fetchers/GetCharacters";
import { searchFormStyles } from "./SearchFormStyles";

/**
 * `search-form` search
 */
class SearchForm extends LitElement {
	static get properties() {
		return {
			searcher: { type: Object },
		};
	}

	constructor() {
		super();

		this.searcher = {};

		this.charGetter = new GetCharacters();
	}

	static get styles() {
		return searchFormStyles;
	}

	_handleSubmit(event) {
		event.preventDefault();

		const nameInput = this.shadowRoot.querySelector("#name");
		const searchTerm = nameInput.value;

		this.searcher.search(searchTerm);
	}

	render() {
		return html`
			<form id="form" @submit=${this._handleSubmit}>
				<input id="name" name="search" type="text" placeholder="search"/>
			</form>
		`;
	}
}

customElements.define("search-form", SearchForm);
