class App{
    constructor(){
        console.log("App Created");        
        this.submit();
    }

    submit(){
        const btn = document.querySelector("#button");
        btn.addEventListener("click", e => this.displayInfo(e));
    }

    displayInfo(){
        console.log("click");
        // the first row is index 0 which is the name of each cell (Name, Age, etc.)
        let row = 1;
        // newPerson.name = document.getElementById("#name").value;

        let gym = document.getElementById("gym").value;
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;        

        if (!name || !age || !gym){
            alert("Please enter all info");
            return;
        }

        let maxHr = Utils.getMaxHR(age);
        let fatBurn = Utils.getFatBurning(maxHr);
        let aerobic = Utils.getAerobic(maxHr);
        let anaerobic = Utils.getAnaerobic(maxHr);

        // accessing the table by the ID
        let display = document.getElementById("display");

        // insert a row into the table
        let newRow = display.insertRow(row);

        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
        let cell5 = newRow.insertCell(4);
        let cell6 = newRow.insertCell(5);
        let cell7 = newRow.insertCell(6);

        cell1.innerHTML = gym;
        cell2.innerHTML = name;
        cell3.innerHTML = age; 
        cell4.innerHTML = maxHr;
        cell5.innerHTML = fatBurn;
        cell6.innerHTML = aerobic; 
        cell7.innerHTML = anaerobic;

        row++;
    }
} 

(()=>{
    const app = new App();
})();


// all code in this class will be inside a CLASS
// class Person{
//     constructor(n){
//         console.log("Person created!");
//         this.name = n;
//         this.age = 44;
//     }

//     awesome(){
//         return this.name + " is awesome!";
//     }

// }
// // Inheritence
// class Student extends Person {
//     constructor(n){
//         super(n); // run the constructor of the super class (Person)
//         //super.MethodName(); // you can run a Method from the super class like this
//         this.grade = 95;
//         console.log("Student created");
//     }
// }

// never use var again, use let or const. 
// If it is read only use const, if it could change (write) use let

// const student1 = new Student("Phillip");
// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.awesome());

// const student2 = new Student("Tom");
// console.log(student2.awesome());

// need a main class to start
// class App{
//     constructor(){
//         console.log("App Created");
//     }
// } 
// DOMContentLoaded - defer in script html ALWAYS DO IT THIS WAY
// load - waits for everything

// Old Way
// start(); // invocation is the ()
// Put the function is () and add (); at the end, now it will automatically start 
// (function start(){
//     console.log("page loaded");
//     const app = new App();
// })();

// New Way - Arrow Function
// start = (n)=> {
//     console.log("page loaded");
//     const app = new App();
// }

// Three Ways to create/run a function -----------------------------------
// 1
// function greeting1(n){
//     return "Hello " + n;
// }

// console.log(greeting1("Bob"));

// // 2
// greeting2 = (n)=>{
//     return "Hello " + n;
// }

// console.log(greeting2("Tom"));

// // 3
// const greeting3 = function(n){ // never use this one
//     return "Hello " + n;
// }

// console.log(greeting3("Dick"));

// -----------------------------------











// class Main{
//     constructor(){
//         console.log('Demo Started');

//         this.kennel = [];
//         for (let i =0; i < 100; i++){ 
//             let dog = new Dog();
//             dog.name ="Max" + (i+1);
//             this.kennel.push(dog);
//         }
//         this.displayDogs();
//     }

//     static getInstance(){
//         if(!Main._instance){
//             Main._instance = new Main();
//             return Main._instance;    
//         }
//         else{
//             throw "Main Already Exists";
//         }
//     }

//     displayDogs(){
//         console.log("run");
//         this.kennel.forEach(function(e,i){
//             console.log(i+1,e.name);
//         })
//     }
// }

// class Dog{
//     constructor(){
//         this.name = "";
//     }
//     bark(){
//         return "woof woof " + this.name + "is barking.";
//     }
// }

// (()=>{
//     const main = Main.getInstance();
//     const main1 = Main.getInstance();
// })();