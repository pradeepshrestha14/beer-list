const getIngridientsHoverText = (ingredients: {}): string => {
  const keys = Object.keys(ingredients);
  return "Ingredients: " + keys.join(", ");
};

const getTaglineWithoutDot = (tagline: string): string => {
  return tagline.replace(".", "");
};

export const beerListResponseNormalizer = (responseData: any) => {
  const beerList = responseData.map((itm: any) => {
    const { id, name, description, image_url, tagline, ingredients } = itm;
    return {
      id,
      name,
      description,
      image_url,
      tagline: getTaglineWithoutDot(tagline),
      ingredients: getIngridientsHoverText(ingredients),
    };
  });
  return beerList;
};
