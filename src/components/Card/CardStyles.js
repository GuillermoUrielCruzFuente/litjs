import { css } from "lit-element";

export const cardStyles = css`
	article {
		width: 100%;
		height: 100%;
		overflow: hidden;
		border-radius: 10px;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;

		transition: box-shadow 300ms;
	}

	article:hover {
		box-shadow: 0px 0px 50px 10px #111;
	}

	h1,
	p {
		padding: 0;
		margin: 0;
	}

	h1 {
		color: #fff;
		font-size: 1.5rem;
	}

	p {
		color: #bbb;
		font-size: 0.9rem;
		font-size: 1rem;
		margin-bottom: 1rem;
	}

	div {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: flex-start;
		gap: 1rem;
	}

	section {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		flex-flow: column nowrap;
		gap: 1rem;
		background-color: #222;
		padding: 1rem;
		flex-grow: 1;
		flex-basis: auto;
	}

	button-lit {
		width: 100%;
		margin-top: auto;
	}
`;
