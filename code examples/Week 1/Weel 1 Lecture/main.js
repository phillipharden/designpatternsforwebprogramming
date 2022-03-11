class Dog {
    constructor(n, b) {
        this.name = n;
        this.breed = b;
        this.toys = [];
        // this.vet = "Dr Vett";
        // static variable
        Dog.vet = "Dr Vett";
        console.log("Dog created");
    }
    bark() {
        return 'woof woof my name is ${this.name}';
    }
}

//static variable
// Dog.vet = "Dr Vett";

class Main {
    constructor() {
        this.food = "pizza";
        this.kennel = [];
        console.log("Main created");
        // const dog1 = new Dog("Goose", "American Bulldog");
        // const dog2 = new Dog("Enzo", "Russell Terrier");
        document.querySelector("#btn").addEventListener("click", (e) => this.onClick(e));
        // this.eat();
        document.querySelector("#display").addEventListener("click", e => this.displayInfo(e));
    }
    onClick(e) {
        // prevents from refreshing the page
        e.preventDefault();
        const name = document.querySelector("#name").value;
        const dog1 = new Dog(name, "American Bulldog");
        this.kennel.push(dog1);
        // inside an event listener (call back function) so "this" is the button not the Main
        // refers to what evr is left of the . before eventlistener
        // console.log("Clicked",e);
        // console.log("Clicked " , this.food, e.target);
    }

    eat(e) {
        // console.log("eat" ,this.food);
    }

    displayInfo(e) {
        this.kennel.forEach((dog) => {
            console.log(dog.name);
        })
    }

}

// IIFE - Imediately Invoked Function Expression (needs to be at the bottom)
(() => {
    const app = new Main();
})();