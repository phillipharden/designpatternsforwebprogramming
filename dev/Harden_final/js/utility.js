class Utility {
    constructor() {}
    static getTime(d) {
        // The Math.floor() function returns the largest integer less than or equal to a given number.
        const h = Math.floor(d / 60);
        // The remainder operator (%) returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
        const m = d % 60;
        // to get the double digit format, I added a 0 to each value as a string and the sliced the string in order to leave 2 reamaining digits for both the hour and minute values
        return (("0" + h).slice(-2) + ":" + ("0" + m).slice(-2));
    }
}