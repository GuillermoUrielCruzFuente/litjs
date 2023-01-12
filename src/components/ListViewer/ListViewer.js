import { LitElement, html } from "lit-element";
import { listViewerStyles } from "./ListViewerStyles";

/**
 * `list-viewer`
 */
export class ListViewer extends LitElement {
	static get properties() {
		return {
			elements: { type: Array },
			header: { type: String },
			pagination: { type: Object },
		};
	}

	constructor() {
		super();
		this.elements = [];
		this.header = "";
		this.pagination = undefined;
	}

	static get styles() {
		return listViewerStyles;
	}

	get _aside() {
		return this.shadowRoot.querySelector("aside");
	}

	_scrollToTop() {
		this._aside.scrollTo({ behavior: "smooth", top: 0 });
	}

	_handlePreviousNavigation() {
		this._scrollToTop();
		this.pagination?.prev();
	}

	_handleNextNavigation() {
		this._scrollToTop();
		this.pagination?.next();
	}

	render() {
		return html`
			<aside>
				<h1>${this.header}</h1>
				<ol>
					${this.elements.map((element) => {
						return html` <li>${element}</li> `;
					})}
				</ol>
				${this.pagination &&
				html`
					<nav>
						<button-lit
							text="<"
							@click="${this._handlePreviousNavigation}"
						></button-lit>
						<p>
							page ${this.pagination.currentPage} of
							${this.pagination.totalPages}
						</p>
						<button-lit
							text=">"
							@click="${this._handleNextNavigation}"
						></button-lit>
					</nav>
				`}
			</aside>
		`;
	}
}

customElements.define("list-viewer", ListViewer);
