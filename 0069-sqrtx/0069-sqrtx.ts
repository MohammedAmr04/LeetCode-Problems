function mySqrt(x: number): number {
    if (x < 2) return x; // للتعامل مع x = 0 أو 1

    let low = 1,
        high = x,
        mid: number,
        ans = 0;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);

        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            ans = mid;        
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return ans;
}
