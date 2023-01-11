import { css } from "lit-element";

export const loaderStyles = css`
	#loader-container {
		display: flex;
		flex-flow: row nowrap;
		background-color: crimson;
		padding: 0.5rem 1rem;
		gap: 0.25rem;
	}

	#loader-container > div {
		width: 8px;
		height: 8px;
		border-radius: 4px;
		background-color: #fff;
		animation: UpAndDown 400ms infinite alternate;
		animation-timing-function: cubic-bezier(0.5, 0.08, 0.53, 0.95);
	}

	#loader-container > div:nth-child(2) {
		animation-delay: 100ms;
	}

	#loader-container > div:nth-child(3) {
		animation-delay: 200ms;
	}

	@keyframes UpAndDown {
		0% {
			transform: translateY(0px);
		}
		33% {
			transform: translateY(-5px);
		}
		100% {
			transform: translateY(5px);
		}
	}
`;
