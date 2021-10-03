var learnMore = document.getElementsByClassName("learn");
var line = document.getElementsByClassName("underline");

function toggler() {
    var drop = document.getElementById("drop-down");
    if (drop.style.display === "none" || drop.style.display === ""){
        drop.style.display = "block";
    }else{
        drop.style.display = "none"
    }
}


function active(x) {
    switch (x) {
        case learn1:
            line[0].style.backgroundColor = "hsl(51, 100%, 49%)";
            break;
        case learn2:
            line[1].style.backgroundColor = "hsl(7, 99%, 70%);"    
    
        default:
            break;
    }
}

function inactive(y){
    switch (x) {
        case learn1:
            line[0].style.backgroundColor = "hsla(51, 100%, 49%, 0.568)";
            break;
        case learn2:
            line[1].style.backgroundColor = "hsla(7, 99%, 70%, 0.5);"    
    
        default:
            break;
    }
}
learnMore[0].addEventListener("mouseenter", active(learn1));

// for (let i=0; i<learnMore.length; i++){
//     function theClass(x){

//     }
// }