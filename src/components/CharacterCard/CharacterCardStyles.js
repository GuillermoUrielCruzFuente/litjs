import { css } from "lit-element";

export const characterCardStyles = css`
	* {
		margin: 0;
		padding: 0;
	}

	:host {
		width: 100%;
		margin-top: 3rem;
	}

	article {
		display: flex;
		flex-flow: row wrap;
		align-items: flex-start;
		gap: 2rem;

		padding: 2rem;
		border-radius: 1rem;

		background-color: #333;
	}

	.img-container {
		width: min(250px, 100%);
	}

	.info-container {
		display: flex;
		flex-flow: column wrap;
		align-items: flex-start;
		flex-grow: 1;
		gap: 1rem;
	}

	h1 {
		color: #fff;
	}

	.tags-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;

		row-gap: 1rem;
		column-gap: 4rem;
	}
`;
