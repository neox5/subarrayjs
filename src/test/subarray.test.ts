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
});

function binomial(n: number, k: number) {
  let coeff = 1;
  for (let x = n - k + 1; x <= n; x++) coeff *= x;
  for (let x = 1; x <= k; x++) coeff /= x;
  return coeff;
}
