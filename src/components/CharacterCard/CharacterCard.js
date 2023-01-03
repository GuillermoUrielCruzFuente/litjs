import { LitElement, html } from "lit-element";
import { characterCardStyles } from "./CharacterCardStyles";
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
		this.characterInfo = {};
	}

	static get styles() {
		return characterCardStyles;
	}

	get infoType() {
		return this.characterInfo.type === ""
			? "Not registered"
			: this.characterInfo.type;
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
						<title-label
							topic="type"
							text="${this.infoType}"
						></title-label>

						<title-label
							topic="id"
							text="${this.characterInfo.id}"
						></title-label>

						<title-label
							topic="species"
							text="${this.characterInfo.species}"
						></title-label>

						<title-label
							topic="status"
							text="${this.characterInfo.status}"
						></title-label>

						<title-label
							topic="gender"
							text="${this.characterInfo.gender}"
						></title-label>

						<title-label
							topic="origin"
							text="${this.characterInfo.origin.name}"
						></title-label>

						<title-label
							topic="location"
							text="${this.characterInfo.location.name}"
						></title-label>
					</div>
				</div>
			</article>
		`;
	}
}

customElements.define("character-card", CharacterCard);
