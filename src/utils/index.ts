/**
 * @description 排名格式化
 * @param rankingNum
 * @param len
 * @param fillString
 * @example 1 => 01
 */
export const rankingLenFormat = (
  rankingNum: number,
  len: number = 2,
  fillString: string = "0"
): string => {
  return `${rankingNum}`.padStart(len, fillString);
};

/**
 * @description 秒转分秒
 * @param duration
 * @example 191.96 s  ->  03:12
 */
export const secondToMinuteSecond = (duration: number) => {
  const m = Math.floor(duration / 60);
  const s = Math.ceil(duration % 60);
  return `${rankingLenFormat(m)}:${rankingLenFormat(s)}`;
};

export const local = (key: string, val?: any) => {
  if (val === undefined) {
    return JSON.parse(localStorage.getItem(key) as string);
  }
  const strVal = JSON.stringify(val);
  return localStorage.setItem(key, strVal);
};
