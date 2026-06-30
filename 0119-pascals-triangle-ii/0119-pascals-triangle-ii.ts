
function getRow(rowIndex: number): number[] {
    let row= rowIndex+1;
    let out:number[][] =[[1],[1,1]]
  if (rowIndex == 0) { 
    return [1];
  }
  if(rowIndex == 1) {
    return [1,1];
  }
  for (let i = 0; i < row - 2; i++){
    let a = []
    let b = out[out.length-1]
    for (let j = 1; j < b.length; j++){
      a.push(b[j]+b[j-1])
    }
    out.push([1,...a,1])
  }

    return out[rowIndex];
}