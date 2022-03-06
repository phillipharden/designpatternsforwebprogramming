// custom events

(function(){
    var grades = [70,80,90]
    document.querySelector("#btn").addEventListener("click",onClick);
    document.addEventListener("array_changed",onChanged);

    function onClick(e){
        grades.superPush(100,10,"Bob");
        // grades.superPush(-2,77,"Phil");
    }

    // function onChanged(e){
    //     console.log("hey, you added ",e.added, "to the array");
    //     console.log(e.array);
    // }

})();

function onChanged(e){
    console.log("hey, you added ",e.added, "to the array");
    console.log(e.array);
}