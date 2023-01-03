import { css } from "lit-element";

export const buttonStyles = css`
	button {
		padding: var(--padding, 1rem);

		width: 100%;
		background-color: #333;
		outline: none;
		border: dashed 2px transparent;
		margin-top: auto;
		color: #aaa;
		font-weight: 900;
		border-radius: 10px;
		text-transform: uppercase;
		font-family: inherit;
		transition: background-color 300ms, color 300ms, border 300ms;
	}

	button:hover {
		background-color: #444;
		color: #ddd;
	}

	button:focus {
		border: dashed 2px #999;
	}

	button.active {
		background-color: #444;
		color: #ddd;
		border: dashed 2px #999;
	}
`;
