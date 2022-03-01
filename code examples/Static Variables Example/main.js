class Dog{
    constructor(n,a){
        this.name = n;
        this.age = a;
        // this.vet = "";
    }
    talk(){
        return "woof woof!! " + "My name is " + this.name;
    }
}
// Static variable attached to the class
Dog.vet = "SuperVet";

(function(){
    var myDogs = [];
    for(var i = 0; i<100; i++){
        var dog = new Dog("Max"+i,i);
        myDogs.push(dog);
    }

    Dog.vet = "myNewVet";
    displayInfo();

    function displayInfo(){
        myDogs.forEach(function(e){
            console.log("Dog Name:"+e.name + " Vet:"+Dog.vet);
        })
    }



    // var fido = new Dog("Fido",5);
    // myDogs.push(fido);
    // var max = new Dog("Max",3);
    // myDogs.push(max);
    // console.log(myDogs[0].name);
    // console.log(myDogs[1].vet);
})();