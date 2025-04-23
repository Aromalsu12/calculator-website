function clearScreen() {
    document.getElementById("screen").value="";
}
function clearScreenOnly() {
    var screen = document.getElementById("screen");
    screen.value=screen.value.slice(0,-1);
}
function clickbtn(val) {
    document.getElementById("screen").value+=val;
    
}
function calculate() {
    var screen = document.getElementById("screen");
    try {
       screen.value =eval(screen.value);
    }
    catch {
        screen.value="error";
    }
}