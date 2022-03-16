// Utility class with at least one static method
class Utils {
    constructor() {}
    // method to calculate price after sales tax  
    static getTotalPrice(price) {
        // price x 6.5% + price
        return Math.round(price * 0.065 + price);
    }
}