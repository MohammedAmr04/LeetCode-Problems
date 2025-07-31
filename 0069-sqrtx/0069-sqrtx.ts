function mySqrt(x: number): number {
    let initValue: number = x / 2;
    while (Math.abs(initValue * initValue - x) > 0.00001) {
        initValue = 0.5 * (initValue + (x / initValue));
    }
    return Math.floor(initValue);
}
