
let inputVal;

function clr() {
    document.getElementById("numInput").value = "";
}

function del() {
    let oldVal = document.getElementById("numInput").value;
    let newVal = oldVal.slice(0, -1);
    document.getElementById("numInput").value = newVal;
}

function enterNum(btnId) {
    document.getElementById("numInput").value += btnId;
}

function decimal() {
    let input = document.getElementById("numInput").value;
    let search = input.search(".");
    alert(search);
    
    if (search == -1) {
        document.getElementById("numInput").value += ".";
    }
}

function equals() {

}