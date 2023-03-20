import { css } from "lit-element";

export const linkStyles = css`
	:host {
		--link-size: 1rem;
	}

	a {
		font-size: var(--link-size);
		font-weight: 900;
		text-transform: uppercase;
		color: #999;
		transition: 200ms color;
		text-decoration: underline;
		text-decoration-thickness: 3px;
	}

	a:hover {
		color: #fff;
	}
`;
