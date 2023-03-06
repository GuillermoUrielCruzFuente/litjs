import { css } from "lit-element";

export const searcherLayoutStyles = css`
	main {
		width: 100vw;
		height: 100vh;

		display: flex;
		flex-flow: row nowrap;
	}

	section {
		flex-grow: 1;
		padding: 3rem;

		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: flex-start;
	}
`;
