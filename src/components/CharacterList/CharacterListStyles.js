import { css } from "lit-element";
import { scrollbarStyles } from "@/litStyles/Scrollbar";

export const characterListStyles = css`
	${scrollbarStyles}

	:host {
		--list-width: 400px;
		--characters-spacing: 1.5rem;
	}

	section {
		height: 100vh;
		width: var(--list-width);
		overflow-y: scroll;
		position: relative;
		margin: 0;
		padding: 0;
		background-color: #222;
	}

	h1 {
		background-color: #222;
		box-shadow: 0 0 50px 0px #000;
		height: 70px;
		color: #fff;

		display: flex;
		align-items: center;
		justify-content: center;

		line-height: 1;
		margin: 0;

		position: fixed;
		width: var(--list-width);

		position: sticky;
		top: 0;
		left: 0;
		width: 100%;
	}

	ol {
		margin: 0;
		padding: 0;

		display: flex;
		flex-flow: column nowrap;
		gap: var(--characters-spacing);
	}

	li {
		list-style: none;
		padding-block: 0.75rem;
		background-color: #333;

		display: block;
		text-align: center;
		margin-inline: var(--characters-spacing);
		color: #ccc;
	}

	li:first-child {
		margin-top: var(--characters-spacing);
	}

	li:last-child {
		margin-bottom: var(--characters-spacing);
	}
`;
