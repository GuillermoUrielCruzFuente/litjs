export const getProducts2 = () => {
	return fetch("src/data/ai-products.json")
		.then((response) => response.json())
		.then((data) => {
			const formated = data.products.map((product) => {
				return {
					title: product.name,
					description: product.description,
					tags: product.tags,
					img: product.image,
				};
			});

			return formated;
		})
		.catch((error) => {
			throw new Error(`data error: ${error}`);
		});
};
