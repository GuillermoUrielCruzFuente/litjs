import { css } from "lit-element";

export const chipStyles = css`
	span {
		color: #999;
		background-color: #333;
		padding: 0.35rem 0.5rem 0.25rem 0.5rem;
		line-height: 1;
		display: inline-block;
		border-radius: 1rem;
		font-size: 0.5rem;
		font-weight: 900;
		border: dashed 2px transparent;
		text-transform: uppercase;
		user-select: none;

		--transition-time: 300ms;
		transition: transform var(--transition-time),
			border var(--transition-time), box-shadow var(--transition-time),
			color var(--transition-time);
		transition-timing-function: ease;
	}

	span:hover {
		transform: scale(1.1);
		border: dashed 2px #999;
		box-shadow: 0px 0px 30px 10px #ffffff30;
		color: #fff;
	}
`;
