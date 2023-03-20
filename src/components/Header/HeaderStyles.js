import { css } from "lit-element";

export default css`
	:host {
		--background-color: #222;
		--header-height: 60px;
		--scrollbar-width: 8px;
		--border-spacing: 3rem;

		display: block;
		position: sticky;
		top: 0;
		left: 0;
		z-index: 100;
		box-sizing: border-box;
		width: calc(100vw - var(--scrollbar-width));
		height: var(--header-height);
	}

	header {
		background-color: var(--background-color);
		width: 100%;
		height: 100%;
		box-shadow: 0px 0px 100px 10px #000;
		padding-inline: var(--border-spacing);
		box-sizing: border-box;

		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: space-between;
	}

	::slotted(h1) {
		font-size: 1.5rem;
		color: #fff;
	}

	::slotted(header-items-container-element) {
		--item-separation: 2rem;
	}

	@media screen and (max-width: 500px) {
		:host {
			--inline-spacing: 1rem;
			height: fit-content;
		}

		header {
			padding-block: 1rem;
		}

		::slotted(h1) {
			font-size: 1.25rem;
		}

		::slotted(header-items-container-element) {
			--item-separation: 1rem;
		}
	}
`;
