function maxProfit(prices: number[]): number {
       let n = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i+1; j<prices.length; j++){
                let a = prices[j] - prices[i];
                if (a <= 0) {
                    break;
            }
              if (a > n) {
                n = a;
              }
        }
    
    }
    return n
};