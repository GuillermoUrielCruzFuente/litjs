import { LitElement, html } from "lit-element";
import "@/components/GridLayout";
import "@/components/Card";
import { GetProducts } from "@/utils/fetchers/GetProducts";
import { getProducts2 } from "@/utils/fetchers/GetProducts2";

export class CardsLayout extends LitElement {
	static get properties() {
		return {
			cards: { type: Array, attribute: false },
		};
	}

	constructor() {
		super();
		this.cards = [];
	}

	_setCards(data) {
		this.cards = data.detail;
	}

	_showModalError(error) {
		console.error(error.detail);
	}

	async _getProducts() {
		// if you want to switch between fetching methods
		// make sure to change the _setCards method

		/**
		 * fetching method 1
		 *
		 * _setCards(data) {
		 * 	this.cards = data.detail;
		 * }
		 */

		const getProducts = new GetProducts();

		getProducts.addEventListener("success-call", this._setCards.bind(this));

		getProducts.addEventListener(
			"error-call",
			this._showModalError.bind(this)
		);

		getProducts.generateRequest();

		/**
		 * fetching method 2
		 *
		 * _setCards(data) {
		 * 	this.cards = data;
		 * }
		 */

		// const data = await getProducts2();
		// this._setCards(data);
	}

	firstUpdated() {
		this._getProducts();
	}

	render() {
		return html`
			<grid-layout>
				${this.cards.map((card) => {
					return html`
						<card-lit
							img="${card.img}"
							title="${card.title}"
							description="${card.description}"
							.tags="${card.tags}"
						></card-lit>
					`;
				})}
			</grid-layout>
		`;
	}
}

customElements.define("cards-layout", CardsLayout);
