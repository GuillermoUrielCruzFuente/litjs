import { LitElement, html } from "lit-element";
import { characterCardStyles } from "./CharacterCardStyles";
import getNestedData from "@/utils/functions/GetNestedData";
import "@/components/ImageContainer";
import "@/components/TitleLabel";

class CharacterCard extends LitElement {
	static get properties() {
		return {
			characterInfo: { type: Object },
		};
	}

	constructor() {
		super();

		//property from attribute, initial value as an empty object
		this.characterInfo = {};

		//MUST contain the selected object keys
		//to show in the character card
		this.showedData = [
			"type",
			"id",
			"species",
			"status",
			"gender",
			["origin", "name"],
			["location", "name"],
		];
	}

	static get styles() {
		return characterCardStyles;
	}

	#avoidEmptyString(data) {
		if (data === "" || data === undefined) {
			return "not registered";
		}
		return data;
	}

	#generateNestedPropertyLabel(datum) {
		const text = getNestedData({
			object: this.characterInfo,
			properties: datum,
		});

		return html`
			<title-label topic="${datum[0]}" text="${text}"></title-label>
		`;
	}

	#generateSinglePropertyLabel(datum) {
		const rawText = this.characterInfo?.[datum];
		const text = this.#avoidEmptyString(rawText);

		return html`
			<title-label topic="${datum}" text="${text}"></title-label>
		`;
	}

	#generateInfoLabels() {
		return this.showedData.map((datum) => {
			if (datum instanceof Array) {
				return this.#generateNestedPropertyLabel(datum);
			}

			return this.#generateSinglePropertyLabel(datum);
		});
	}

	render() {
		return html`
			<style>
				image-container {
					--figure-aspect-ratio: 1;
					--border-radius: 1rem;
				}
			</style>

			<article>
				<div class="img-container">
					<image-container
						src="${this.characterInfo.image}"
					></image-container>
				</div>
				<div class="info-container">
					<h1>${this.characterInfo.name}</h1>

					<div class="tags-container">
						${this.#generateInfoLabels()}
					</div>
				</div>
			</article>
		`;
	}
}

customElements.define("character-card", CharacterCard);
