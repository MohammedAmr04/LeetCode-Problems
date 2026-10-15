/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
  let first = "Gold Medal";
  let second = "Silver Medal";
  let third = "Bronze Medal";
  let a = [...score];
  score.sort((a, b) => b - a);
  console.log(a,score)
  for (let i = 0; i < score.length; i++){
    if (a[i] === score[0]) {
      a[i] = first;
    } else if (a[i] === score[1]) {
      a[i] = second;
    } else if (a[i] === score[2]) {
      a[i] = third;
    } else {
      a[i] = (score.indexOf(a[i]) + 1).toString();
    }
  }
  

  return a;
  
};