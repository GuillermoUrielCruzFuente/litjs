import { css } from "lit-element";

export const searchFormStyles = css`
	:host {
		width: 100%;
	}

	input {
		width: 100%;
		background-color: #333;
		color: #fff;
		border: none;
		outline: none;
		font-size: 1.5rem;
		font-family: inherit;
		padding: 1rem;
		box-sizing: border-box;
		border-radius: 1rem;
	}

	input::placeholder {
		color: #888;
	}
`;
