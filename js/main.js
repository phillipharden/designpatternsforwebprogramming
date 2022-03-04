class App {
    constructor() {
        console.log("App Created");
        // create the array for the list of people
        let people = [];
        this.done();
        this.add();
    }

    add() {
        const addBtn = document.querySelector("#add");
        addBtn.addEventListener("click", e => this.addPerson(e));
    }

    done() {
        const doneBtn = document.querySelector("#done");
        doneBtn.addEventListener("click", e => this.done(e));
    }

    addPerson(people) {
        console.log("Person added!");

        // newPerson.name = document.getElementById("#name").value;
        //let gym = document.getElementById("gym").value;
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let newPerson = new Person(name, age)
        people.push(newPerson);
        return people;
    }

    done() {
        console.log("clicked done");

        // accessing the table by the ID
        let display = document.getElementById("display");
        displayInfo();

        function displayInfo() {
            people.forEach(function (e) {
                // insert a row into the table
                let newRow = display.insertRow(row);

                let cell1 = newRow.insertCell(0);
                let cell2 = newRow.insertCell(1);
                let cell3 = newRow.insertCell(2);
                let cell4 = newRow.insertCell(3);
                let cell5 = newRow.insertCell(4);
                let cell6 = newRow.insertCell(5);

                cell1.innerHTML = Person.gym;
                cell2.innerHTML = obj.name;
                cell3.innerHTML = obj.age;
                cell4.innerHTML = obj.machine;
                cell5.innerHTML = obj.maxHr;
                cell6.innerHTML = obj.fatBurn;

                row++;

                console.log(obj.name + " diplayed.")
            })

        }










        // // the first row is index 0 which is the name of each cell (Name, Age, etc.)
        // let row = 1;        

        // let gym = document.getElementById("gym").value;
        // let name = document.getElementById("name").value;
        // let age = document.getElementById("age").value;        

        // if (!name || !age || !gym){
        //     alert("Please enter all info");
        //     return;
        // }

        // let maxHr = Utils.getMaxHR(age);
        // let fatBurn = Utils.getFatBurning(maxHr);
        // // let aerobic = Utils.getAerobic(maxHr);
        // // let anaerobic = Utils.getAnaerobic(maxHr);

        // // accessing the table by the ID
        // let display = document.getElementById("display");

        // // insert a row into the table
        // let newRow = display.insertRow(row);

        // let cell1 = newRow.insertCell(0);
        // let cell2 = newRow.insertCell(1);
        // let cell3 = newRow.insertCell(2);
        // let cell4 = newRow.insertCell(3);
        // let cell5 = newRow.insertCell(4);
        // // let cell6 = newRow.insertCell(5);
        // // let cell7 = newRow.insertCell(6);

        // cell1.innerHTML = gym;
        // cell2.innerHTML = name;
        // cell3.innerHTML = age; 
        // cell4.innerHTML = maxHr;
        // cell5.innerHTML = fatBurn;
        // // cell6.innerHTML = aerobic; 
        // // cell7.innerHTML = anaerobic;

        // row++;
    }
}

// Automatically starts the App
(() => {
    const app = new App();
})();

// never use var again, use let or const. 
// If it is read only use const, if it could change (write) use let

// const student1 = new SuperAthlete("Phillip");
// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.awesome());

// const student2 = new SuperAthlete("Tom");
// console.log(student2.awesome());


// create/run a function -----------------------------------
// greeting2 = (n)=>{
//     return "Hello " + n;
// }

// console.log(greeting2("Tom"));





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