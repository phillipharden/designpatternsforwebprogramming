class Utils {
    constructor() {} 
    static getBMR(age, weight, height) {
        // 66 + (6.23 x weight in pounds) + (12.7 x height in inches) - (6.8 x age in years)
        return Math.round(66 + (6.23 * weight) + (12.7 * height) - (6.8 * age));
    }
}