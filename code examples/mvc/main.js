// Singleton Creational Design Pattern
window.addEventListener("load", function(){
    console.log("pageloaded");
    //instantiate Singleton
    var myAssignment = MVC_Assignment.getInstance();   
});

class MVC_Assignment{
    constructor(){
        console.log("Singletone Created!");
        console.log("Start code here!!");
        var controller = new Controller();
    }
    static getInstance(){
        // Is there an instance variable attached to the class?
        // Id so, don't create. If not, then it's okay to create!
        if(!MVC_Assignment._instance){
            MVC_Assignment._instance = new MVC_Assignment();
            return MVC_Assignment._instance;
        }
        else{
            throw "Sinful! Trying to create a second Singleton!";
        }
    }
}

class Controller{
    constructor(){
        console.log("controller created");
        this.model = new Model();
        this.view = new View();
        //pretend this was NOT hardcoded
        var grades = [70,80,90];
        var result = this.model.process(grades);
        console.log(result);
        this.view.display(result);
    }
}

class Model{
    constructor(){
        console.log("model created");
    }
    //grades
    process(d){
        var total = 0;
        d.forEach(function(e) {
            total += e;            
        });
        return total / d.length;
    }
}

class View{
    constructor(){
        console.log("view created");
    }
    display(d){
        //this will be done in innerHTML
        console.log("The average grade is "+d)
    }
}

// https://www.youtube.com/watch?v=D6abN_6hFuI