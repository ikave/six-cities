export const capitalizeFirstLetter = (word: string): string => {
  const firstLetter = word.slice(0, 1).toUpperCase();
  const end = word.slice(1).toLowerCase();
  return `${firstLetter}${end}`;
};

export const convertRatingToWidth = (num: number): string => {
  const rating = Math.round(num);
  return `${rating * 20}%`;
};

export const convertDateToDatetime = (date: Date): string => {
  const day = date.getDate();
  const month = date.toLocaleString('en', { month: '2-digit' });
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};
