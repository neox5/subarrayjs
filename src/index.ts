export function subArrays(source: any[], minLength?: number, maxLength?: number, ordered?: boolean): any[] {
  const result: any[] = [];
  const shouldOrder = ordered ? ordered : false;
  const len = source.length;
  const min = minLength ? minLength : 1;
  const max = maxLength ? maxLength : len;

  const fn = (index: number, min: number, max: number, src: any[], len: number, cur: any[], res: any[]) => {
    for (let j = index + 1; j < len; j++) {
      const arr = [...cur, src[j]];
      if (arr.length >= min) {
        res.push(arr);
      }
      if (arr.length < max) {
        fn(j, min, max, src, len, arr, res);
      }
    }
  };

  for (let i = 0; i < len; i++) {
    const arr = [source[i]];
    if (arr.length >= min) {
      result.push(arr);
    }
    if (arr.length < max) {
      fn(i, min, max, source, len, arr, result);
    }
  }

  if (shouldOrder) {
    return result.sort(orderByLength);
  }

  return result;
}

const orderByLength = (a: any[], b: any[]) => {
  if (a.length < b.length) {
    return -1;
  }
  if (a.length > b.length) {
    return 1;
  }
  return 0;
};
