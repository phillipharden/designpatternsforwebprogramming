// Create a Utility class with at least one static method that is used and shown in the output (ex: the average of something)
class Utils{
    constructor(){
    }

    static getMaxHR(a){
        return 220 - a;
    }

    static getFatBurning(h){
        let sixty = h * .6;
        let seventy = h * .7;
        return sixty+"-"+seventy+"%";
    }

    static getAerobic(h){
        let eighty = h * .8;
        return seventy+"-"+eighty+"%";
    }

    static getAnaerobic(h){
        let ninety = h * .9;
        return eighty+"-"+ninety+"&";
    }  
}