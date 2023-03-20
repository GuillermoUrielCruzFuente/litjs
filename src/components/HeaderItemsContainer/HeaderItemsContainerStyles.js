import { css } from "lit-element";

export default css`
	:host {
		--item-separation: 2rem;
	}

	nav {
		display: flex;
		flex-flow: row wrap;
		gap: var(--item-separation);
	}
`;
