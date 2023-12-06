
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
    const regex = new RegExp ("[^0-9]", "g");
    let search = regex.test(input);
    alert(search);
    
    if (search == false) {
        document.getElementById("numInput").value += ".";
    }
}

function equals() {

}