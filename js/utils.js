// Create a Utility class with at least one static method that is used and shown in the output (ex: the average of something)
class Utils{
    constructor(){
    }

    // static getAverage(arr){
    //     var total = 0;
    //     arr.forEach(function(e) {
    //         total += e;
    //     });
    //     return total / arr.length;
    // }

    static getMaxHR(a){
        return 220 - a;
    }

    static getFatBurning(h){
        let sixty = h * .6;
        let seventy = h * .7;
        return Math.round(sixty)+"-"+Math.round(seventy)+"bpm";
    }

    static getAerobic(h){
        let seventy = h * .7;
        let eighty = h * .8;
        return Math.round(seventy)+"-"+Math.round(eighty)+"bpm";
    }

    static getAnaerobic(h){
        let eighty = h * .8;
        let ninety = h * .9;
        return Math.round(eighty)+"-"+Math.round(ninety)+"bpm";
    }  
}