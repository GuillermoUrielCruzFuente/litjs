import { LitElement, html } from "lit-element";

/**
 * `character-item` logic
 */
export class CharacterItem extends LitElement {
	static get properties() {
		return {
			characterInfo: { type: Object },
			isActive: { type: Boolean },
		};
	}

	constructor() {
		super();
		this.characterInfo = {};
		this.isActive = false;
	}
	
	_handleClick() {
		const selectionEvent = new CustomEvent("character-selection", {
			detail: { selection: this.characterInfo },
			bubbles: true,
			composed: true,
		});

		this.dispatchEvent(selectionEvent);
	}

	render() {
		return html`
			<button-lit
				?isActive="${this.isActive}"
				text="${`${this.characterInfo.name}: ${this.characterInfo.id}`}"
				@click="${this._handleClick}"
			></button-lit>
		`;
	}
}

customElements.define("character-item", CharacterItem);
