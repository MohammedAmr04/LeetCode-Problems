/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
   let stack = [];
  for (let i = 0; i < operations.length; i++){
    let o = operations[i]
    let top = stack.length - 1;
    if(o==="C"){
      stack.pop();
      continue;

     }
     if (o==="D") {
       stack.push(+stack[top] * 2);
             continue;

    }
        if (o==="+") {
       stack.push(+stack[top] + +stack[top-1]);
             continue;

    }
    stack.push(+o)
   }
  return stack.length ===0? 0: stack.reduce((c, sum) => c + sum);
};