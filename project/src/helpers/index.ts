export const capitalizeFirstLetter = (word: string): string => {
  const firstLetter = word.slice(0, 1).toUpperCase();
  const end = word.slice(1).toLowerCase();
  return `${firstLetter}${end}`;
};

export const convertRatingToWidth = (num: number): string => {
  const rating = Math.round(num);
  return `${rating * 20}%`;
};
