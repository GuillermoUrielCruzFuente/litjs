import { LitElement } from "lit-element";

export class GetProducts extends LitElement {
	static get properties() {
		return {};
	}

	constructor() {
		super();
	}

	/**
	 * interface Product = {
	 * 		title: string;
	 * 		description: string;
	 * 		tags: string[];
	 * 		img: string
	 * }
	 */
	_formatData(data) {
		const formated = data.products.map((product) => {
			return {
				title: product.name,
				description: product.description,
				tags: product.tags,
				img: product.image,
			};
		});

		return formated;
	}

	_handleSuccessResponse(products) {
		try {
			const formatedProducts = this._formatData(products);

			this.dispatchEvent(
				new CustomEvent("success-call", {
					detail: formatedProducts,
				})
			);
		} catch (error) {
			this._handleErrorResponse(error);
		}
	}

	_handleErrorResponse(error) {
		this.dispatchEvent(
			new CustomEvent("error-call", {
				detail: error,
			})
		);
	}

	generateRequest() {
		
		fetch("src/data/ai-products.json")
			.then((response) => response.json())
			.then((data) => {
				this._handleSuccessResponse(data);
			})
			.catch((error) => {
				this._handleErrorResponse(error);
			});
	}
}

customElements.define("get-products", GetProducts);
