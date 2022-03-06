class Person {
    constructor(n, a) {
        //Confirmation that the Person is created
        console.log("Person created!");
        //this.gym = g;
        this.name = n;
        this.age = a;
         
    }
    awesomePerson() {
        return '${this.name} is awesome!';
    }
}

// Static Variable
Person.gym = "Gold's Gym";

// Inheritence
class Athlete extends Person {
    constructor(n,a,c) {
        // run the constructor of the super class (Person)
        super(n,a); 
        // instantiate a Cardio object
        const cardioObj = new Cardio(c);
        this.cardio = cardioObj;
        this.maxHr = Utils.getMaxHR(a); 
        this.fatBurn = Utils.getFatBurning(this.maxHr);  
        //Confirmation that the Athlete is created
        console.log("Athlete created");
    }
}