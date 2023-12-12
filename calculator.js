
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
    // Checks whether there is already a decimal point
    const regex = new RegExp ("\\.", "g");
    let search = regex.test(input);

    //If no decimal points exist and the input isn't blank, a decimal point will be input
    if (search == false && input != "") {
        document.getElementById("numInput").value += ".";
    }
}

function symbols(btnId) {
    let input = document.getElementById("numInput").value;
    
    const regex = new RegExp("[^0-9.]", "g");
    let search = regex.test(input);

    if (search == false && input != "") {
        document.getElementById("numInput").value += btnId;
    }
}

function equals() {

}