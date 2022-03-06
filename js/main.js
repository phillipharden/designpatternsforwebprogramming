class Main {
    constructor() {
        // create an array for my list of Person objects
        this.people = [];
        //Confirmation that the app is working
        console.log("Main app created");
        // Give the gym input field the value of the static variable
        document.getElementById("gym").value = Person.gym;
        // event listener for for the Add Button is clicked
        document.querySelector("#add").addEventListener("click", e => this.addPerson(e));
        // event listener for for the Done Button is clicked
        document.querySelector("#done").addEventListener("click", e => this.displayInfo(e));
    }

    addPerson(e) {
        // prevents from refreshing the page
        e.preventDefault();
        // boolean to determine if everything is valid before creating a Person
        const valid = validateForm();
        // Validation method
        function validateForm() {
            if (document.pageForm.gym.value == "") {
                alert("Please enter the name of your gym!");
                document.pageForm.gym.focus();
                return false;
            }
            if (document.pageForm.name.value == "") {
                alert("Please enter your name!");
                document.pageForm.name.focus();
                return false;
            }
            if (document.pageForm.age.value == "" || isNaN(document.pageForm.age.value) ||
                document.pageForm.age.value < 1 || document.pageForm.age.value > 100) {
                alert("Please enter your age. Must be a number between 1-100.");
                document.pageForm.age.focus();
                return false;
            }
            if (document.pageForm.cardio.value == "") {
                alert("Please enter a type of cardio!");
                document.pageForm.cardio.focus();
                return false;
            }
            return (true);
        }
        // if everything is valid, then we can create the Person
        if (valid) {
            // create a variable for the name entry to check to see if it is a Super Athlete
            let nameEntry = document.querySelector("#name").value;
            // If the name does not say Super Athlete, then create an Athlete
            if (nameEntry != "Super Athlete") {
                // get the gym entry value
                const gym = document.querySelector("#gym").value;
                Person.gym = gym;
                // get the age entry value
                const age = document.querySelector("#age").value;
                // get the age cardio value
                const cardio = document.querySelector("#cardio").value;
                // instantiate an Athlete object
                const newPerson = new Athlete(nameEntry, age, cardio);
                // add the new object to the Person list/array
                this.people.push(newPerson);
            }
            // If the name matched SUper Athlete, then create a SuperAthlete
            if (nameEntry == "Super Athlete") {
                // get the gym entry value
                const gym = document.querySelector("#gym").value;
                Person.gym = gym;
                // get the age entry value
                const age = document.querySelector("#age").value;
                // get the cardio entry value
                const cardio = document.querySelector("#cardio").value;
                // instantiate a SuperAthlete object
                const newPerson = new SuperAthlete(nameEntry, age, cardio);
                // add the new object to the Person list/array
                this.people.push(newPerson);
            }

            //Reset the fields
            this.resetFields();
        }
    }

    // Method to Display the info
    displayInfo(e) {
        //clear the feilds if they allready exist
        document.getElementById('display').innerHTML = '';
        // Add the table header row
        document.getElementById("table-section").innerHTML='<table id="display"><tr><th>Gym</th><th>Name</th><th>Age</th><th>Type Of Cardio</th><th>Max HR</th><th>Fat Burning Zone</th></tr></table>';  
          
        // loop through the list of Person, Athelete & SuperAthlete objects
        this.people.forEach((p) => {
            // create a variable to hold the value of the static variable to check to make sure thatit is not empty
            const staticCheck = document.querySelector("#gym").value;
            if (staticCheck != "") {
                //if it is not emprty, change the value. Otherwise continue forward
                Person.gym = document.querySelector("#gym").value;
            }
            // Confirmation that the object values are displaying properly
            console.log(Person.gym);
            console.log(p.name);
            console.log(p.age);
            console.log(p.cardio.name);

            // the first row is index 0 which is the name of each cell (Gym, Name, Age, etc.)
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
            let cell6 = newRow.insertCell(5);

            // change the html of each cell
            cell1.innerHTML = Person.gym;
            cell2.innerHTML = p.name;
            cell3.innerHTML = p.age;
            cell4.innerHTML = p.cardio.name;
            cell5.innerHTML = p.maxHr + "bpm";
            cell6.innerHTML = p.fatBurn;

            // add another row
            row++;
        })
        //Reset the fields
        this.resetFields();
    }

    resetFields(){
        document.getElementById("gym").value = Person.gym;
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("cardio").value = "";
    }
}

// IIFE - Imediately Invoked Function Expression (needs to be at the bottom)
(() => {
    const app = new Main();
})();