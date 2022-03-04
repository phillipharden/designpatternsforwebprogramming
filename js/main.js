class Main {
    constructor() {
        this.people = [];
        console.log("Main created");
        document.querySelector("#add").addEventListener("click", (e) => this.onClick(e));
        document.querySelector("#done").addEventListener("click", e => this.displayInfo(e));
    }

    onClick(e) {
        // prevents from refreshing the page
        e.preventDefault();
        const valid = validateForm();

        function validateForm()  {
      
            if( document.pageForm.gym.value == "" ) {
               alert( "Please enter the name of your gym!" );
               document.pageForm.gym.focus() ;
               return false;
            }
            if( document.pageForm.name.value == "" ) {
               alert( "Please enter your name!" );
               document.pageForm.name.focus() ;
               return false;
            }
            if( document.pageForm.age.value == "" || isNaN( document.pageForm.age.value ) ||
               document.pageForm.age.value <1 || document.pageForm.age.value >100) {
               
               alert( "Please enter your age. Must be between 1-100." );
               document.pageForm.age.focus() ;
               return false;
            }
            if( document.pageForm.machine.value == "" ) {
               alert( "Please enter a cardio machine type!" );
               return false;
            }
            return( true );
         }
         if(valid){
            const gym = document.querySelector("#gym").value;
            const name = document.querySelector("#name").value;
            const age = document.querySelector("#age").value;
            const machine = document.querySelector("#machine").value;
            const newPerson = new Person(gym, name, age, machine);
            this.people.push(newPerson);
            // inside an event listener (call back function) so "this" is the button not the Main
            // refers to what ever is left of the . before eventlistener
            // console.log("Clicked",e);
            // console.log("Clicked " , this.food, e.target);
         }   
    }

    displayInfo(e) {
        this.people.forEach((p) => {
            console.log(p.gym);
            console.log(p.name);
            console.log(p.age);
            console.log(p.machine);

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
            let cell6 = newRow.insertCell(5);

            // change the html of each cell
            cell1.innerHTML = p.gym;
            cell2.innerHTML = p.name;
            cell3.innerHTML = p.age;
            cell4.innerHTML = p.machine
            cell5.innerHTML = p.maxHr;
            cell6.innerHTML = p.fatBurn;

            // add another row
            row++;
        })
    }
}



// IIFE - Imediately Invoked Function Expression (needs to be at the bottom)
(() => {
    const app = new Main();
})();