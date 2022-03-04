class Person{
    constructor(n,a,m){
        console.log("Person created!");
        // this.gym = g;
        this.name = n;
        this.age = a;
        this.machine = m;
        //this.maxHr = Utils.getMaxHR(a);    
    }
    awesomePerson(){
        return this.name + " is awesome!";
    }
}
// Static Variable
Person.gym = "Gold's Gym";

// Inheritence
class Athlete extends Person {
    constructor(g){
        super(n,a,m); // run the constructor of the super class (Person)
        super.awesomePerson(); // you can run a Method from the super class like this
        // this.grade = 95;
        this.maxHr = Utils.getMaxHR(age);
        this.fatBurn = Utils.getFatBurning(maxHr);
        //this.gym = g;
        console.log("Athlete created");
    }
}