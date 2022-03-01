// Inheritence---------------------------------------------------
class Trainer extends Person {
    constructor(n){
        super(n); // run the constructor of the super class (Person)
        //super.MethodName(); // you can run a Method from the super class like this
        this.age = 95;
        console.log("Trainer created");
    }
}