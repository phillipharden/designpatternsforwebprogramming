class Utils{
    constructor(){

    }
    static getAverage(arr){
        var total = 0;
        arr.forEach(function(e) {
            total += e;
        });
        return total / arr.length;
    }

    static getArea(l,w){
        return l * w;
    }
}