
let output=document.getElementById('output');

document.addEventListener("keydown", function(e){
    //debugger to remove
    output.innerHTML= `Now pressing key : "${e.key}"  id: ${`${e.which}`}<br>`;

    e.preventDefault(); //disable browser shortcuts
    
    s
    // add pressed key to class keyPressing.
    //key id name is keyCode and location to distinguish keys like left shift and right
    document.getElementById(`${e.which}${e.location}`).classList.add('keyPressing');

});

document.addEventListener("keyup", function(e){
    // add pressed key to class keyPressed and remove keyPressing.
    document.getElementById(`${e.which}${e.location}`).classList.remove('keyPressing');
    document.getElementById(`${e.which}${e.location}`).classList.add('keyPressed');
})
