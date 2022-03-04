class Person {
    constructor(g, n, a) {
        console.log("Person created!");
        this.gym = g;
        // Static Variable
        // Person.gym = "Gold's Gym";
        this.name = n;
        this.age = a;
         
    }
    awesomePerson() {
        return '${this.name} is awesome!';
    }
}

// Inheritence
class Athlete extends Person {
    constructor(g,n,a,m,s) {
        // run the constructor of the super class (Person)
        super(g,n,a); 
        const machineObj = new Machine(m);
        this.machine = machineObj;
        this.maxHr = Utils.getMaxHR(a); 
        this.fatBurn = Utils.getFatBurning(this.maxHr);  
        console.log("Athlete created");
    }
}