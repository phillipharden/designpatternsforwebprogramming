// // Phillip Harden

class Main {
    constructor() {
        // create an array for my list of objects
        this.equipList = [];
        //Confirmation that the app is working
        console.log("Main app created");
        // event listener for for the Add Button is clicked
        document.querySelector("#add-btn").addEventListener("click", e => this.addEquip(e));
        // event listener for for the Done Button is clicked
        document.querySelector("#display-btn").addEventListener("click", e => this.displayInfo(e));


        // Add welcoming message in the confirmation div
        const p = document.createElement("p");
        const node = document.createTextNode("Welcome!");
        p.appendChild(node);
        const element = document.getElementById("confirmation");
        element.appendChild(p);
        p.id = "text-confirmation";

        // Add welcoming image in the confirmation div
        const image = new Image(200, 200);
        image.src = "../images/running.png";
        image.id = "img-confirmation";
        image.alt = "woman running";
        console.log("Image Loaded", image.height, image.width);

        image.addEventListener("load", e => {
            console.log("Image Loaded");
            document.querySelector("#confirmation").appendChild(image)
        });
    }
    // Singleton
    static getInstance() {
        // Is there an instance variable attached to the class? If so, don't create. If not, then it's okay to create!
        if (!Main._instance) {
            Main._instance = new Main();
            return Main._instance;
        } else {
            throw "Singleton has already been created!";
        }
    }

    addEquip(e) {
        // prevents from refreshing the page
        e.preventDefault();

        // Confirmation of Submit being clicked
        console.log("Add was clicked");

        //Select all values from fields
        const data = document.querySelectorAll("input");

        // if everything is valid, then we can create the Person
        if (this.validateForm(data)) {
            e.preventDefault();

            // get the type entry value
            const type = document.querySelector("#type").value;
            // get the price entry value
            const price = Number(document.querySelector("#price").value);

            // Instantiate an Equipment object
            const equipObject = EquipmentFactory.creatEquipment(type);
            equipObject.name = type;
            equipObject.price = Number(price).toFixed(2);
            equipObject.totalPrice = Utils.getTotalPrice(price);
            this.equipList.push(equipObject);

            // Remove the confirmtion sections
            // Remove current p with the id of "text-confirmation"
            const pRemove = document.getElementById("text-confirmation");
            pRemove.parentNode.removeChild(pRemove);
            // Remove current image with the id of "img-confirmation"
            const imgRemove = document.getElementById("img-confirmation");
            imgRemove.parentNode.removeChild(imgRemove);

            // Send the new object's image source & name into the function to display confirmation
            showImage(equipObject.image, equipObject.name);

            // funtion to create the text and image confirmation
            function showImage(src, name) {
                //Text
                const added = " added!";
                const p = document.createElement("p");
                p.id = "text-confirmation";
                const node = document.createTextNode(name + added);
                p.appendChild(node);
                const element = document.getElementById("confirmation");
                element.appendChild(p);

                // Image
                const img = new Image();
                img.src = src;
                img.alt = name;
                img.id = "img-confirmation";
                document.getElementById("confirmation").appendChild(img);
            }

            //Once the program get here, the current tasks will be finished
            console.log("End of of tasks for now")
        } else {
            console.log("Form is invalid");
        }
        //Reset the fields
        this.resetFields();
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
    displayInfo(e) {
        // Remove the confirmtion sections
        // Remove current p with the id of "text-confirmation"
        const pRemove = document.getElementById("text-confirmation");
        pRemove.parentNode.removeChild(pRemove);
        // Remove current image with the id of "img-confirmation"
        const imgRemove = document.getElementById("img-confirmation");
        imgRemove.parentNode.removeChild(imgRemove);

        //clear the fields if they allready exist
        document.getElementById('display').innerHTML = '';
        // Add the table header row
        document.getElementById("table-section").innerHTML = '<table id="display"><tr><th>Type</th><th>Subtotal</th><th>Total (after tax)</th></tr></table>';

        // loop through the list of objects
        this.equipList.forEach((o) => {
            // Confirmation that the object values are displaying properly
            console.log(o.name);
            console.log(o.price);
            console.log(o.totalPrice);

            // the first row is index 0 which is the name of each cell (Name, Price, etc.)
            let row = 1;

            // accessing the table by the ID
            let display = document.getElementById("display");

            // insert a row into the table
            let newRow = display.insertRow(row);

            // give each cell a name
            let cell1 = newRow.insertCell(0);
            let cell2 = newRow.insertCell(1);
            let cell3 = newRow.insertCell(2);
            // let cell4 = newRow.insertCell(3);

            // change the html of each cell
            cell1.innerHTML = o.name;
            cell2.innerHTML = "$" + o.price;
            cell3.innerHTML = "$" + o.totalPrice;

            // add another row
            row++;
            //Reset the fields
            this.resetFields();
        })
    }
    // rest the price field
    resetFields() {
        document.getElementById("price").value = "";
    }
}

// IIFE - Immediately Invoked Function Expression (needs to be at the bottom)
(() => {
    //instantiate Singleton
    const app = Main.getInstance();
})();