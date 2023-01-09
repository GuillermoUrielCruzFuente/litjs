const getNestedData = ({ object, properties }) => {
	return properties.reduce(
		(object, level) => object && object[level],
		object
	);
};

export default getNestedData;
