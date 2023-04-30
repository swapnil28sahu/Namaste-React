export function filterdata(SearchInput, restaurants) {
  const filterdata = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(SearchInput.toLowerCase())
  );
  return filterdata;
}
