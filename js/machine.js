class Machine{
    constructor(t){
        console.log("Machine created!");
        this.type = t;
    }
    startMachine(){
        return this.type + " is ready to go!";
    }
}