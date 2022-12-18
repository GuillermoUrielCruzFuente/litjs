import { css } from "lit-element";

const thumb = css`#333`;
const thumbHover = css`#555`;
const thumbActive = css`#333`;
const track = css`#111`;

const thumbNtrack = css`
	${thumb} ${track}
`;

export const scrollbarStyles = css`
	::-webkit-scrollbar {
		width: 8px;
		height: 8px;
	}

	::-webkit-scrollbar-button {
		width: 0px;
		height: 0px;
	}

	::-webkit-scrollbar-thumb {
		background: ${thumb};
		border: 0px none #ffffff;
	}

	::-webkit-scrollbar-thumb:hover {
		background: ${thumbHover};
	}

	::-webkit-scrollbar-thumb:active {
		background: ${thumbActive};
	}

	::-webkit-scrollbar-track {
		background: ${track};
		border: 0px none #ffffff;
		border-radius: 0px;
	}

	::-webkit-scrollbar-track:hover {
		background: ${track};
	}

	::-webkit-scrollbar-track:active {
		background: ${track};
	}

	::-webkit-scrollbar-corner {
		background: transparent;
	}

	:host {
		scrollbar-color: ${thumbNtrack};
		scrollbar-width: thin;
	}
`;
