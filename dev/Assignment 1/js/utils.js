// Create a Utility class with at least one static method that is used and shown in the output (ex: the average of something)
class Utils {
    constructor() {}
    // method to calculate the person's max heart rate:   220 - age = max heart rate
    static getMaxHR(a) {
        return 220 - a;
    }
    // method to calculate the person's fat burning zone
    static getFatBurning(h) {
        let sixty = h * .6;
        let seventy = h * .7;
        return Math.round(sixty) + "-" + Math.round(seventy) + "bpm";
    }
    // method to calculate the person's aerobic zone
    static getAerobic(h) {
        let seventy = h * .7;
        let eighty = h * .8;
        return Math.round(seventy) + "-" + Math.round(eighty) + "bpm";
    }
    // method to calculate the person's anaerobic zone
    static getAnaerobic(h) {
        let eighty = h * .8;
        let ninety = h * .9;
        return Math.round(eighty) + "-" + Math.round(ninety) + "bpm";
    }
}