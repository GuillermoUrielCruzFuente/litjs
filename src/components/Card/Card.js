import { LitElement, html } from "lit-element";
import { cardStyles } from "./CardStyles";
import "@/components/ImageContainer";
import "@/components/Chip";
import "@/components/Button";

export class Card extends LitElement {
	static get properties() {
		return {
			img: { type: String },
			title: { type: String },
			description: { type: String },
			tags: { type: Array },
		};
	}

	static get styles() {
		return cardStyles;
	}

	constructor() {
		super();
		this.img = "";
		this.title = "";
		this.description = "";
		this.tags = [];
	}

	render() {
		return html`
			<!-- https://lit.dev/docs/v1/components/styles/#customprops -->
			<style>
				image-container {
					--figure-aspect-ratio: 4/3;
				}
			</style>

			<article>
				<image-container src="${this.img}"></image-container>
				<section>
					<h1>${this.title}</h1>
					<div>
						${this.tags.map((tag) => {
							return html`
								<chip-lit tagText="${tag}"></chip-lit>
							`;
						})}
					</div>
					<p>${this.description}</p>
					<button-lit text="save"></button-lit>
				</section>
			</article>
		`;
	}
}

customElements.define("card-lit", Card);
