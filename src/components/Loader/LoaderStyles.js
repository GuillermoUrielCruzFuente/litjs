import { css } from "lit-element";

export const loaderStyles = css`
	:host {
		--wave-height: 1.5px;
		--dot-size: 10px;
	}

	#loader-container {
		display: flex;
		flex-flow: row nowrap;
		gap: 0.5rem;
	}

	#loader-container > div {
		width: var(--dot-size);
		height: var(--dot-size);
		border-radius: var(--dot-size);
		background-color: #fff;
		animation: dot 350ms alternate infinite;
		animation-timing-function: cubic-bezier(0.5, 0.08, 0.53, 0.95);
	}

	#loader-container > div:nth-child(2) {
		animation-delay: 100ms;
	}

	#loader-container > div:nth-child(3) {
		animation-delay: 200ms;
	}

	@keyframes dot {
		from {
			transform: translateY(calc(var(--wave-height) * -1));
			background-color: #999;
		}
		to {
			transform: translateY(var(--wave-height));
			background-color: #555;
		}
	}
`;
