// Phillip Harden

// Controller - Links the user and the system ################################################################################################
class Controller {
    constructor() {
        //Confirmation that the controller is working
        console.log("Singleton / Controller created");

        this.model = new Model();
        this.view = new View();

        // event listener for for the Submit Button is clicked
        document.querySelector("#submit").addEventListener("click", e => this.onClick(e));
    }
    static getInstance() {
        // Is there an instance variable attached to the class? If so, don't create. If not, then it's okay to create!
        if (!Controller._instance) {
            Controller._instance = new Controller();
            return Controller._instance;
        } else {
            throw "Singleton has already been created!";
        }
    }
    onClick(e) {
        // Confirmation of Submit being clicked
        console.log("Submit was clicked");

        //Select all values from fields
        const data = document.querySelectorAll("input");

        // if everything is valid, then we can create the Person
        if (this.validateForm(data)) {
            e.preventDefault();
            // get the name entry value
            let nameEntry = document.querySelector("#name").value;
            // get the age entry value
            const age = document.querySelector("#age").value;
            // get the weight value
            const weight = document.querySelector("#weight").value;
            // get the height value
            const height = document.querySelector("#height").value;
            // send the data to the model to process the BMR
            const bmr = this.model.process(age, weight, height);
            let evt = new Event("controller_done");
            // Create the data object with all of the info
            evt.dataObject = new DataObject(nameEntry, age, weight, height, bmr);
            // The Data Object should be a part of the the Event data object (the "e" argument in the event handler
            document.dispatchEvent(evt);
        } else {
            console.log("Form is invalid");
        }
    }

    // Validation method
    validateForm(formData) {
        let validate = true;
        formData.forEach(e => {
            if (!e.checkValidity()) {
                validate = false;
            }
        });
        return validate;
    }
}

// Model - Manages the data of an application ################################################################################################
class Model {
    constructor() {
        console.log("Model created");
    }

    // The Model class uses at least one static method from your custom Utility class
    process(age, weight, height) {
        console.log("BMR calculated in the Model process method");
        return this.bmr = Utils.getBMR(age, weight, height);
    }
}

// View - A visual representation of the model (HTML) ################################################################################################
class View {
    constructor() {
        console.log("View created");
        document.addEventListener("controller_done", e => this.display(e));
    }
    display(e) {
        e.preventDefault();

        // Add the table header row
        document.getElementById("table-section").innerHTML = '<table id="display"><tr><th>Name</th><th>Age</th><th>Weight</th><th>Height</th><th>BMR</th></tr></table>';

        // Confirmation that the object values are displaying properly
        console.log("Name: " + e.dataObject.name);
        console.log("Age: " + e.dataObject.age);
        console.log("Weight: " + e.dataObject.weight);
        console.log("Height: " + e.dataObject.height);
        console.log("BMR: " + e.dataObject.bmr);

        // the first row is index 0 which is the name of each cell (Name, Age, etc.)
        let row = 1;

        // accessing the table by the ID
        let display = document.getElementById("display");

        // insert a row into the table
        let newRow = display.insertRow(row);

        // give each cell a name
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
        let cell5 = newRow.insertCell(4);

        // change the html of each cell
        cell1.innerHTML = e.dataObject.name;
        cell2.innerHTML = e.dataObject.age;
        cell3.innerHTML = e.dataObject.weight;
        cell4.innerHTML = e.dataObject.height;
        cell5.innerHTML = e.dataObject.bmr;

        //Reset the fields
        this.resetFields();
    }
    resetFields() {
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";
    }
}

//###########################################################################################################################################################################
// IIFE - Immediately Invoked Function Expression (needs to be at the bottom)
(() => {
    //instantiate Singleton
    const app = Controller.getInstance();
})();