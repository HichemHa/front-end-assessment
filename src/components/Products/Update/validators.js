
export const isNameValid = (value) => {
	return value.trim().length > 0 && value.trim().length <= 200;
};

export const isBrandValid = (value)=>{
	return value.trim().length > 0
}
export const isCategoriesValid = (value) => {
	return value.length > 0 && value.length <= 5;
}

export const isItemsValid = (value)=>{
	return value >=0;
}

