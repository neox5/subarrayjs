import { subArrays } from "../index";

describe("subArray", () => {
  it("array length should be the same to binomial count (n,k)", () => {
    let src: any[] = [];

    for (let n = 1; n <= 20; n++) {
      src = [];

      for (let j = 1; j <= n; j++) {
        src.push(j);
      }

      const max = 5;
      let bin = 0;
      for (let k = 1; k <= max; k++) {
        bin += binomial(n, k);
      }

      const len = subArrays(src, 1, max).length;
      if (bin !== len) {
        expect(len).toEqual(bin);
      }
    }
  });

  it("should order sub arrays by length", () => {
    const source = [1, 2, 3, 4];

    const unordered = subArrays(source, 1, source.length, false);
    const ordered = subArrays(source, 1, source.length, true);

    let prev: any = null;
    let isOrdered = true;
    unordered.forEach((el) => {
      if (prev && prev.length > el.length) {
        isOrdered = false;
      }
      prev = el;
    });

    expect(isOrdered).toEqual(false);

    prev = null;
    isOrdered = true;

    ordered.forEach((el) => {
      if (prev && prev.length > el.length) {
        isOrdered = false;
      }
      prev = el;
    });
    
    expect(isOrdered).toEqual(true);
  });
});

function binomial(n: number, k: number) {
  let coeff = 1;
  for (let x = n - k + 1; x <= n; x++) coeff *= x;
  for (let x = 1; x <= k; x++) coeff /= x;
  return coeff;
}
