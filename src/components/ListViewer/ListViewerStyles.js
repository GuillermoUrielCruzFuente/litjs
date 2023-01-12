import { css } from "lit-element";
import { scrollbarStyles } from "@/litStyles/Scrollbar";

export const listViewerStyles = css`
	${scrollbarStyles}

	:host {
		--list-width: 400px;
		--characters-spacing: 1.5rem;

		--list-background-color: #222;
		--list-items-background-color: #333;

		--header-color: #fff;
		--items-color: #ccc;

		--box-shadow: 0 0 50px 0px #000;

		width: var(--list-width);
	}

	aside {
		height: 100vh;
		width: var(--list-width);

		overflow-y: auto;
		overflow-y: scroll;

		position: relative;
		margin: 0;
		padding: 0;
		background-color: var(--list-background-color);

		display: flex;
		flex-flow: column;
	}

	h1 {
		background-color: var(--list-background-color);
		box-shadow: var(--box-shadow);
		padding: 1rem;
		color: var(--header-color);
		box-sizing: border-box;

		display: flex;
		align-items: center;
		justify-content: center;

		text-align: center;

		line-height: 1.5;
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
		background-color: var(--list-items-background-color);

		display: block;
		text-align: center;
		margin-inline: var(--characters-spacing);
		color: var(--items-color);
	}

	li:first-child {
		margin-top: var(--characters-spacing);
	}

	li:last-child {
		margin-bottom: var(--characters-spacing);
	}

	nav {
		background-color: var(--list-background-color);
		color: var(--items-color);
		width: 100%;

		position: sticky;
		bottom: 0;
		left: 0;
		margin-top: auto;

		padding: 0.75rem 0;
		box-sizing: border-box;

		box-shadow: var(--box-shadow);

		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	button-lit {
		--padding: 0.75rem;
	}
`;
