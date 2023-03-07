import { LitElement, html } from "lit-element";
import { GetCharacters } from "@/utils/fetchers/GetCharacters";
import "@/components/ListViewer";
import "@/components/CharacterItem";
import "@/components/CharacterCard";
import "@/components/SearchForm";

export class RickApiLayout extends LitElement {
	static get properties() {
		return {
			characters: { type: Array, attribute: false },
			selected: { type: Object, attribute: false },
			apiInfo: { type: Object, attribute: false },
		};
	}

	constructor() {
		super();

		this.characters = [];
		this.apiInfo = {};
		this.selected = {};
		this.charactersGetter = new GetCharacters();

		this.addEventListener(
			"character-selection",
			this._setSelected.bind(this)
		);

		this.charactersGetter.addEventListener(
			"success-request",
			this._setCharacters.bind(this)
		);

		this.charactersGetter.addEventListener(
			"error-request",
			this.handleError.bind(this)
		);
	}

	handleError(e) {
		alert(e.detail.error);
	}

	firstUpdated() {
		this.charactersGetter.fetchCharacters();
	}

	_setCharacters(charactersUpdateEvent) {
		this.characters = charactersUpdateEvent.detail.results;

		//set the info
		this.apiInfo = charactersUpdateEvent.detail.info;

		// set the default selection as the first element of results
		this.selected = charactersUpdateEvent.detail.results[0];
	}

	_createCharacterItems() {
		return this.characters.map(
			(character) => html`
				<character-item
					.characterInfo="${character}"
					?isActive="${character.id === this.selected.id}"
				></character-item>
			`
		);
	}

	_setSelected(characterSelectionEvent) {
		this.selected = characterSelectionEvent.detail.selection;
	}

	get currentPage() {
		const next = this.apiInfo.next;

		//guard clause
		//based on api documentation, if there is no next value
		//it means that we reach the last page
		if (!next) return this.apiInfo.pages;

		//the current page is the page before the next one
		//that's why of this calc
		const nextURL = new URL(next);
		const nextPage = nextURL.searchParams.get("page");
		return nextPage - 1;
	}

	get paginationOptions() {
		return {
			next: this.nextPage.bind(this),
			prev: this.previousPage.bind(this),
			currentPage: this.currentPage,
			totalPages: this.apiInfo.pages,
		};
	}

	_list() {
		return html`
			<style>
				list-viewer {
					--list-items-background-color: unset;
				}
			</style>

			<list-viewer
				header="Characters"
				.elements="${this._createCharacterItems()}"
				.pagination="${this.paginationOptions}"
			></list-viewer>
		`;
	}

	_selectedCard() {
		return html`
			<character-card .characterInfo="${this.selected}"></character-card>
		`;
	}

	nextPage() {
		const next = this.apiInfo.next;
		next
			? this.charactersGetter.fetchCharacters(next)
			: alert("this is the last page");
	}

	previousPage() {
		const prev = this.apiInfo.prev;
		prev
			? this.charactersGetter.fetchCharacters(prev)
			: alert("this is the first page");
	}

	_searchBar() {
		return html`
			<search-form
				.searcher=${{
					search: (term) => {
						this.charactersGetter.searchCharacter(term);
					},
				}}
			></search-form>
		`;
	}

	render() {
		return html`
			<searcher-layout
				.listElement="${this._list()}"
				.searchElement="${this._searchBar()}"
				.selectedElement=${this._selectedCard()}
			></searcher-layout>
		`;
	}
}

customElements.define("rick-api-layout", RickApiLayout);
