import { css } from "lit-element";

export const gridLayoutStyles = css`
	section {
		display: grid;
		grid-auto-rows: auto;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
		gap: 3rem;
		margin: 0;
		margin-block: 3rem;
		width: 75%;
		margin-inline: auto;
	}
`;
