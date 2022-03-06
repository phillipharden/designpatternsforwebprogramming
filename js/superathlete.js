class SuperAthlete extends Person{
    constructor(n,a) {
        // run the constructor of the super class (Person)
        super(n,a); 
        //Normal rules do not apply to the Super Athlete
        this.age = "21 Forever!"
        // Instantiate a cardio object with a super power of leaping buildings
        const cardioObj = new Cardio("Leaping Buildings!");
        this.cardio = cardioObj;
        // give a crazy number for the max heart rate
        this.maxHr = 999; 
        this.fatBurn = "No Need!!";  
        // Confirmation that the SuperAthlete was created
        console.log("Super athlete created");
    }
}