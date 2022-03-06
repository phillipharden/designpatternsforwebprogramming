(function () {
    // ...arg is a rest parameter which allows multiple parameters 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
    Array.prototype.superPush = function (...arg) {
        arg.forEach((e) =>{
            this.push(e);
        });
        var evt = new Event("array_changed");
        evt.array = this;
        evt.added = arg;
        document.dispatchEvent(evt);
    };

})();