function generate(numRows: number): number[][] {
  let out = [[1]];

  if (numRows >= 2) {
    out.push([1, 1]);
  }
  if (numRows > 2) {
    for (let i = 0; i < numRows - 2; i++) {
      let a: number[] = [];
      let b: number[] = out[out.length - 1];
      let perviesRow = b.length;
      for (let j = 1; j < perviesRow; j++) {
        a.push(b[j] + b[j - 1]);
      }
      out.push([1, ...a, 1]);
    }
  }
  return out;
}
