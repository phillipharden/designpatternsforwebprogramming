class Model {
    constructor() {
        console.log("Model created!");
        document.addEventListener("event_name_controller", e => this.process(e));
    }
    process(e) {
        let cels = (e.customProperty - 32) * (5 / 9);
        // console.log("I heard you controller", e.customProperty + 1); // adds to the number
        console.log("I heard you controller", e.customProperty + 1);
        // fixed to the number of decimals
        console.log(cels.toFixed(1));

        const event = new Event("model_finished");
        event.cels = cels.toFixed(2);
        event.far = e.customProperty;
        document.dispatchEvent(event);
    }
}

// HTML goes in the View
class View {
    constructor() {
        console.log("View created!");
        document.addEventListener("model_finished", e => this.display(e));
    }
    display(e) {
        /// output html here
        console.log(e.far, " is ", e.cels);

        let output = e.far + "°F is " + e.cels + "°C.";
        document.getElementById("output").innerHTML = output;

    }
}

class Controller {
    constructor() {
        console.log("Controller created!");
        this.Model = new Model();
        this.View = new View();
        document.querySelector("#btn").addEventListener("click", e => this.onClick(e)); //<<<<<<<<<<<<<<<<<<< do it this way
    }

    onClick(e) {
        e.preventDefault();
        // convert to a number
        const data = Number(document.querySelector("#temp").value);
        // create a Data Object for multiple data for the line about 
        console.log("The temperature is " + data + "°");
        const event = new Event("event_name_controller");
        // custom property 
        event.customProperty = data;
        //dispatch event
        document.dispatchEvent(event);
    }
}

// Arrow Function
(() => {
    const app = new Controller();
})();












// class Controller {
//     constructor() {
//         console.log("Controller created!");
//         // const btn = document.querySelector("#btn");
//         // btn.addEventListener("click", this.onClick);
//         //This one line does what both of the above lines do
//         // const btn = document.querySelector("#btn").addEventListener("click", this.onClick);
//         // If you will not need access to the button again, you dont even have to name it 
//         //document.querySelector("#btn").addEventListener("click", this.onClick);
//         // to get "this" to referr to the same thing in the onClick event, bind(this) so that this will referr to everyting before the above line and not whatever is immediately to the left of the . which is the #btn
//         //document.querySelector("#btn").addEventListener("click", this.onClick.bind(this));
//         // If you need more than one argument then add () with another variable in it like (e,f)
//         //document.querySelector("#btn").addEventListener("click", (e,f)=>this.onClick(e));
//         document.querySelector("#btn").addEventListener("click", e => this.onClick(e)); //<<<<<<<<<<<<<<<<<<< do it this way
//         // ^^^^^^^^ do it this way
//         // this.display();
//     }

//     onClick(e) {
//         e.preventDefault();
//         // console.log("onClick: ", this);
//         // console.log(document.querySelector("#name").value);
//         // to find out info on the button (now this this is binded) use the e to find info on the button
//         // console.log(this.pizza, this.age, e.currentTarget);
//         const data = document.querySelector("#input");
//     }

//     display() {

//         // console.log("Display: ", this);
//         // console.log(this.pizza, this.age);
//     }
// }

// // Event dispatching 

// class Model {
//     constructor() {
//         console.log("Model created!");
//     }
// }

// class View {
//     constructor() {
//         console.log("View created!");
//     }
// }



// // Arrow Function
// (() => {
//     const app = new Controller();
// })();