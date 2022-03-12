class Utils {
    constructor() {}
    // method to calculate the BMR
    // 66 + (6.23 x weight in pounds) + (12.7 x height in inches) - (6.8 x age in years)
    static getBMR(age, weight, height) {
        // return 10 * weight + 6.25 * height - 5 * age + 5;
        return Math.round(66 + (6.23 * weight) + (12.7 * height) - (6.8 * age));
    }
}