class Person{
    constructor(n){
        console.log("Person created!");
        this.name = document.getElementById("#name").value;
        this.age = document.getElementById("#age").value;
        this.weight = document.getElementById("#weight").value;
        this.maxHr = HeartRate(age);
        
        this.personCreated();
    }

    personCreated(){
        console.log(Person.name);
        console.log(Person.age);
        console.log(Person.weight);
        console.log(Person.maxHr);

    }

    awesome(){
        return this.name + " is awesome!";
    }

}

(function(){
    var people = [];   
    // Static variable attached to the class  
    Person.gym = "Gold's Gym";
    displayInfo();

    function displayInfo(){
        people.forEach(function(e){
            console.log("Name: " + e.name + " Gym: " + Person.gym);
        })
    }
})();