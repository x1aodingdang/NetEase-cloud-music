export const rankingLenFormat = (
  rankingNum: number,
  len: number = 2,
  fillString: string = "0"
): string => {
  return `${rankingNum}`.padStart(len, fillString);
};
