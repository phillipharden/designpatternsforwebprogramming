class Utility {
    constructor(){

    }
    static getAverage(arr){
        var total = 0;
        arr.forEach(function(e) {
            total += e;
        });
        return Math.round(total / arr.length);
    }
    static getAxis(g){
        return 500 - g * 4;
    }
    static getHeight(g) {
        return g * 4 - 1;
    }


}