import { css } from "lit-element";

export const imageContainerStyles = css`
	:host {
		width: 100%;
	}

	figure {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
		margin: 0;
		padding: 0;
		width: 100%;

		aspect-ratio: var(--figure-aspect-ratio, 16/9);
		border-radius: var(--border-radius, 0)
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		transition: transform 300ms;
		transition-timing-function: ease;
	}

	figure:hover > img {
		transform: scale(1.1);
	}
`;
