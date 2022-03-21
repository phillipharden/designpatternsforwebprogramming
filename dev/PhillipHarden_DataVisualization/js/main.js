// Phillip Harden | Data Visualization

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

            const firstGrade = Number(document.querySelector("#firstGrade").value);
            const secondGrade = Number(document.querySelector("#secondGrade").value);
            const thirdGrade = Number(document.querySelector("#thirdGrade").value);

            // Instantiate an Event
            let evt = new Event("controller_done");

            // Add grades to an array
            evt.grades = [firstGrade, secondGrade, thirdGrade];

            // Dispatch the event
            document.dispatchEvent(evt);

            //After everything comes back here, the application will be finished
            console.log("End of application")
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
        document.addEventListener("controller_done", e => this.process(e));
    }

    // The Model class uses at least one static method from your custom Utility class
    process(e) {
        console.log("I hear you Controller, here are the array items: ", e.grades[0], e.grades[1], e.grades[2]);

        // add the average to the data object after it gets calculated
        e.average = Utility.getAverage(e.grades);

        //Show that the averagewas calculated
        console.log("Average successfully calcualated: " + e.average);

        // Instantiate an Event
        let evt = new Event("model_done");

        evt.firstGrade = e.grades[0];
        evt.secondGrade = e.grades[1];
        evt.thirdGrade = e.grades[2];
        evt.average = e.average;

        evt.firstGradeAxis = Utility.getAxis(e.grades[0]);
        evt.secondGradeAxis = Utility.getAxis(e.grades[1]);
        evt.thirdGradeAxis = Utility.getAxis(e.grades[2]);
        evt.averageAxis = Utility.getAxis(e.average);

        evt.firstGradeHeight = Utility.getHeight(e.grades[0]);
        evt.secondGradeHeight = Utility.getHeight(e.grades[1]);
        evt.thirdGradeHeight = Utility.getHeight(e.grades[2]);
        evt.averageHeight = Utility.getHeight(e.average);

        // Dispatch the event
        document.dispatchEvent(evt);
    }
}

// View - A visual representation of the model (HTML) ################################################################################################
class View {
    constructor() {
        console.log("View created");
        // Listening for the "model_done" Event
        document.addEventListener("model_done", e => this.display(e));
    }

    display(e) {
        e.preventDefault();
        console.log("I hear you Model, I'll display everything now!");
        console.log(e.firstGrade, e.secondGrade, e.thirdGrade, e.average);

        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        //Clear the canvas before every drawing
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.font = "30px Arial";
        ctx.fillStyle = "#3A3845";
        ctx.fillText("Here are your grades and the average!", 45, 50);

        // Left line Running Down
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(100, 80);
        ctx.lineTo(100, 500);
        ctx.stroke();

        // Bottom Line Running Across
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(100, 500);
        ctx.lineTo(500, 500);
        ctx.stroke();

        // Right Line
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(500, 80);
        ctx.lineTo(500, 500);
        ctx.stroke();

        // Top Line
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(500, 80);
        ctx.lineTo(100, 80);
        ctx.stroke();

        ctx.font = "10px Arial";
        // Grade Numbers Running along the left side 100
        ctx.fillText("100", 65, 102.5);
        // Line for 100
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(85, 100);
        ctx.lineTo(100, 100);
        ctx.stroke();

        // Grade Numbers Running along the left side 90
        ctx.fillText("90", 70, 142.5);
        // Line for 90
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(85, 140);
        ctx.lineTo(100, 140);
        ctx.stroke();

        // Grade Numbers Running along the left side 80
        ctx.fillText("80", 70, 182.5);
        // Line for 80
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(85, 180);
        ctx.lineTo(100, 180);
        ctx.stroke();

        // Grade Numbers Running along the left side 70
        ctx.fillText("70", 70, 222.5);
        // Line for 70
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(85, 220);
        ctx.lineTo(100, 220);
        ctx.stroke();

        // Grade Numbers Running along the left side 60
        ctx.fillText("60", 70, 262.5);
        // Line for 60
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(85, 260);
        ctx.lineTo(100, 260);
        ctx.stroke();

        // Grade Numbers Running along the left side 50
        ctx.fillText("50", 70, 302.5);
        // Line for 50
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(85, 300);
        ctx.lineTo(100, 300);
        ctx.stroke();

        // Grade Numbers Running along the left side 40
        ctx.fillText("40", 70, 342.5);
        // Line for 40
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(85, 340);
        ctx.lineTo(100, 340);
        ctx.stroke();

        // Grade Numbers Running along the left side 30
        ctx.fillText("30", 70, 382.5);
        // Line for 30
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(85, 380);
        ctx.lineTo(100, 380);
        ctx.stroke();

        // Grade Numbers Running along the left side 20
        ctx.fillText("20", 70, 422.5);
        // Line for 20
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(85, 420);
        ctx.lineTo(100, 420);
        ctx.stroke();

        // Grade Numbers Running along the left side 10
        ctx.fillText("10", 70, 462.5);
        // Line for 10
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(85, 460);
        ctx.lineTo(100, 460);
        ctx.stroke();

        // Grade Numbers Running along the left side 0
        ctx.fillText("0", 75, 502.5);
        // Line for 0
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(85, 500);
        ctx.lineTo(100, 500);
        ctx.stroke();

        // Grade Labels
        ctx.font = "12px Arial";
        ctx.fillText("Grade 1", 159, 525);

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(180, 510);
        ctx.lineTo(180, 500);
        ctx.stroke();

        ctx.fillText("Grade 2", 238, 525);

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(260, 510);
        ctx.lineTo(260, 500);
        ctx.stroke();

        ctx.fillText("Grade 3", 319, 525);

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(340, 510);
        ctx.lineTo(340, 500);
        ctx.stroke();

        ctx.fillText("Average", 400, 525);

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(420, 510);
        ctx.lineTo(420, 500);
        ctx.stroke();

        // GRADES DISPLAY
        // Grade 1
        ctx.font = "12px Arial";
        ctx.fillStyle = "#3A3845";
        ctx.fillText(e.firstGrade, 172, e.firstGradeAxis - 5);
        // fillRect(x, y, width, height)
        ctx.fillStyle = "#4D77FF";
        ctx.fillRect(160, e.firstGradeAxis, 40, e.firstGradeHeight);

        // Grade 2
        ctx.fillStyle = "#3A3845";
        ctx.fillText(e.secondGrade, 252, e.secondGradeAxis - 5);

        ctx.fillStyle = "#4D77FF";
        ctx.fillRect(240, e.secondGradeAxis, 40, e.secondGradeHeight);

        // Grade 3
        ctx.fillStyle = "#3A3845";
        ctx.fillText(e.thirdGrade, 332, e.thirdGradeAxis - 5);

        ctx.fillStyle = "#4D77FF";
        ctx.fillRect(320, e.thirdGradeAxis, 40, e.thirdGradeHeight);

        // Average Grade
        ctx.fillStyle = "#3A3845";
        ctx.fillText(e.average, 412, e.averageAxis - 5);

        ctx.fillStyle = "#E45826";
        ctx.fillRect(400, e.averageAxis, 40, e.averageHeight);
    }
}

//###########################################################################################################################################################################
// IIFE - Immediately Invoked Function Expression (needs to be at the bottom)
(() => {
    //instantiate Singleton
    const app = Controller.getInstance();
})();