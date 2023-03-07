import { LitElement } from "lit-element";

const CHARACTER_ENDPOINT = "https://rickandmortyapi.com/api/character";

export class GetCharacters extends LitElement {
	constructor() {
		super();
	}

	_formatData(data) {
		return data;
	}

	_handleSuccess(data) {
		const successDetail = this._formatData(data);

		const successEvent = new CustomEvent("success-request", {
			detail: successDetail,
			bubbles: true,
			composed: true,
		});

		this.dispatchEvent(successEvent);
	}

	_handleError(error) {
		const errorEvent = new CustomEvent("error-request", {
			detail: { error },
			bubbles: true,
			composed: true,
		});

		this.dispatchEvent(errorEvent);
	}

	_fetch(endpoint) {
		fetch(endpoint)
			.then((res) => {
				if (res.status === 404) {
					this._handleError("no results");
				}
				return res.json();
			})
			.then((data) => {
				this._handleSuccess(data);
			})
			.catch((error) => {
				this._handleError(error);
			});
	}

	fetchCharacters(page) {
		const endpoint = page ? page : CHARACTER_ENDPOINT;

		this._fetch(endpoint);
	}

	searchCharacter(name) {
		const endpoint = name
			? CHARACTER_ENDPOINT + "/?name=" + name
			: CHARACTER_ENDPOINT;

		this._fetch(endpoint);
	}
}

customElements.define("get-character", GetCharacters);
