class Person {
    constructor(name) {
        this.name = name
    }
// Arrow functions are not redefined
    printNameArrow(){
        setTimeout(() => {
            console.log('Arrow: '+ this.name)
        }, 100)
    }
// Functions are redefined
    printNameFunction() {
        setTimeout(function() {
            console.log('Function: '+ this.name)
        }, 100)
    }
}

let person = new Person('Bob')
person.printNameArrow()
person.printNameFunction()
console.log(this.name)