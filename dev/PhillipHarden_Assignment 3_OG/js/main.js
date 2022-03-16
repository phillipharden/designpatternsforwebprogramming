// // Phillip Harden

// (() => {
//     const image = new Image(200, 200);
//     image.src = "../images/bike.png";
//     console.log("Image Loaded", image.height, image.width);

//     image.addEventListener("load", e => {
//         console.log("Image Loaded");
//         document.querySelector("#image").appendChild(image)


//         let myJet = AircraftFactory.creatAircraft("jet");

//         myJet.name = "Jetty";
//         console.log(myJet.name);

//         let type = "helicopter";
//         let heli = AircraftFactory.creatAircraft(type);

//         let type2 = "unknown";
//         let unknown = AircraftFactory.creatAircraft(type2);
//     })

//     // create a node 
//     // 
// })();




// Controller - Links the user and the system ################################################################################################
class Controller {
    constructor() {
        //Confirmation that the controller is working
        console.log("Singleton / Controller created");
        this.model = new Model();
        this.view = new View();

        this.equipList = [];

        // event listener for for the Add Button is clicked
        document.querySelector("#add-btn").addEventListener("click", e => this.onClick(e));

        // event listener for for the Display Button is clicked
        document.querySelector("#display-btn").addEventListener("click", e => this.display(e));
    }

    // Validating the Singleton
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
        console.log("Add was clicked");

        //Select all values from fields
        const data = document.querySelectorAll("input");

        // if everything is valid, then we can create the object
        if (this.validateForm(data)) {
            e.preventDefault();

            // get the name entry value
            let type = document.querySelector("#type").value;
            // get the price entry value and cast it as a Number in order to complete math
            const price = Number(document.querySelector("#price").value);

            // Instantiate an Event
            let evt = new Event("controller_done");

            // Instantiate an Equipment object
            evt.equipObject = EqipmentFactory.creatEqipment(type);
            evt.equipObject.price = price;
            evt.equipObject.name = type;

            // Attach the Eqipment Array to the event
            evt.equipList = [];

            // Dispatch the event
            document.dispatchEvent(evt);

            // document.addEventListener("controller_done", e => this.process(e));

            console.log("Continue...");

            //After everything comes back here, the application will be finished
            console.log("End of application");
            //Reset the fields
            this.resetFields();

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

    resetFields() {
        document.getElementById("price").value = "";
    }
}

// Model - Manages the data of an application ################################################################################################
class Model {
    constructor() {
        console.log("Model created");
        document.addEventListener("controller_done", e => this.process(e));
    }

    // The Model class uses at least one static method from your custom Utility class
    process(e) {
        console.log("I hear you Controller", e.equipObject.price, e);

        // add the total price to the equipment object after it gets calculated
        const totalPrice = Utils.getTotalPrice(e.equipObject.price);

        e.equipObject.totalPrice = totalPrice;

        //Show that the total price was calculated
        console.log("Total Price successfully calcualated: ", e.equipObject.totalPrice);

        // Instantiate an Event
        let evt = new Event("model_done");

        // add the Equipment object to the event
        evt.equipObject = e.equipObject;

        // add the Equipment object to the array
        // this.equipList.push(equipObject);  
        evt.equipList = e.equipList.push(e.equipObject);    

        // Dispatch the event
        document.dispatchEvent(evt);
    }
}

// View - A visual representation of the model (HTML) ################################################################################################
class View {
    constructor() {
        console.log("View created");
        // Listening for the "model_done" Event
        document.addEventListener("display_ready", e => this.display(e));
    }

    display(e) {
        e.preventDefault();
        console.log("I hear you Model, I'll display everything now!");

        //clear the feilds if they allready exist
        document.getElementById('display').innerHTML = '';
        // Add the table header row
        // Add the table header row
        document.getElementById("table-section").innerHTML = '<table id="display"><tr><th>Equipment Name</th><th>Price</th><th>Total Price</th></tr></table>';

        // loop through the list of Equipment objects
        this.equipList.forEach((o) => {
            // create a variable to hold the value of the static variable to check to make sure thatit is not empty
            const staticCheck = document.querySelector("#gym").value;
            if (staticCheck != "") {
                //if it is not emprty, change the value. Otherwise continue forward
                Person.gym = document.querySelector("#gym").value;
            }
            // Confirmation that the object values are displaying properly
            console.log(o.name);
            console.log(o.price);
            console.log(o.totalPrice);

            // the first row is index 0 which is the name of each cell (Name, price & total price)
            let row = 1;

            // accessing the table by the ID
            let display = document.getElementById("display");

            // insert a row into the table
            let newRow = display.insertRow(row);

            // give each cell a name
            let cell1 = newRow.insertCell(0);
            let cell2 = newRow.insertCell(1);
            let cell3 = newRow.insertCell(2);

            // change the html of each cell
            cell1.innerHTML = o.name;
            cell2.innerHTML = o.price;
            cell3.innerHTML = o.totalPrice

            // add another row
            row++;
        })
        //Reset the fields
        this.resetFields();
    }
}

//###########################################################################################################################################################################
// IIFE - Immediately Invoked Function Expression (needs to be at the bottom)
(() => {
    //instantiate Singleton
    const app = Controller.getInstance();
})();










// (5) Alert the user in the HTML that an object was successfully added when the user clicks the add button in the form

// (5) Data is collected from the user via input fields(form) that determines what concrete classes the Factory instantiates

// (10) Maintain a reference to all the instances of the Factory created objects inside an array or other data structure.

// (10) A unique image is displayed for each object that the Factory creates using JavaScript. Do not put the image inside your HTML

// (10) There is a second button labeled "Display Info" that, when clicked, will show information in the HTML about the the objects that the Factory created. This button should only be clicked after all the data is collected.