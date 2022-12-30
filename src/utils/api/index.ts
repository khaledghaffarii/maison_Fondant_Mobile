export const PRODUCTS = {
  ALL: `products`,
};

export const OUTPUTS = {
  ALL: "outputs",
  YEARLY_RECIPE: (year: number) => `outputs/yearly_recipe?year=${year}`,
  MONTHLY_RECIPE: (year: number, month: number) =>
    `outputs/monthly_recipe?year=${year}&month=${month}`,
};

export const CLIENTS = {
  ALL: `customers`,
};
