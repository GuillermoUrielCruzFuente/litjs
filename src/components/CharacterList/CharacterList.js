import { GetCharacters } from "@/utils/fetchers/GetCharacters";
import { LitElement, html } from "lit-element";
import "@/components/Button";

class CharacterList extends LitElement {
	static get properties() {
		return {
			characters: { type: Array, attribute: false },
		};
	}

	constructor() {
		super();
		this.characters = [];
	}

	_setCharacter(event) {
		this.characters = event.detail.results;
	}

	firstUpdated() {
		this.charactersUpdateEvent();
	}

	charactersUpdateEvent() {
		const charactersGetter = new GetCharacters();

		charactersGetter.addEventListener(
			"success-request",
			this._setCharacter.bind(this)
		);

		charactersGetter.fetchCharacters();
	}

	_createItems() {
		return this.characters.map((character) => {
			return html` <button-lit text="${character.name}"></button-lit> `;
		});
	}

	render() {
		return html`
			<style>
				list-viewer {
					--list-items-background-color: unset;
				}
			</style>

			<list-viewer
				header="Characters"
				.elements="${this._createItems()}"
			></list-viewer>
		`;
	}
}

customElements.define("character-list", CharacterList);
