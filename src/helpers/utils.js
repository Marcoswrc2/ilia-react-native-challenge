export const searchByValue = (value, defaultData) => {
  if (!value) {
    return defaultData;
  }
  return defaultData.filter(movie => {
    const lowerCase = movie.title.toLowerCase();
    const filter = value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();

    return lowerCase
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .includes(filter);
  });
};
